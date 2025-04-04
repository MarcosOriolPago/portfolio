# ---- Build Stage ----
    FROM node:22.14.0-alpine AS builder
    WORKDIR /app
    
    # Copy package files first to optimize caching
    COPY package.json package-lock.json ./
    
    # Install dependencies
    RUN npm install --production=false
    
    # Copy the rest of the application files
    COPY . .
    
    # Build the Vite app for production
    RUN npm run build
    
    # ---- Production Stage ----
    FROM nginx:alpine AS runner
    WORKDIR /usr/share/nginx/html
    
    # Remove default NGINX static files
    RUN rm -rf ./*
    
    # Copy built assets from builder stage
    COPY --from=builder /app/dist .
    
    # Copy custom NGINX config
    COPY nginx.conf /etc/nginx/conf.d/default.conf
    
    # Expose port 8080
    EXPOSE 8080
    
    # Start NGINX
    CMD ["nginx", "-g", "daemon off;"]
    