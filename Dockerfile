# Use an official lightweight Node.js image
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy all files and build the app
COPY . .
RUN npm run build

# ---- Production Image ----
FROM node:20-alpine AS runner

WORKDIR /app

# Set environment variable for production
ENV NODE_ENV=production
ENV PORT=8080

# Copy built files from builder
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# Expose the required port
EXPOSE 8080

# Start Next.js in production mode
CMD ["npm", "run", "start", "--", "-p", "8080"]
