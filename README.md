# Marcos Oriol - Personal Portfolio 🚀

Hello! 👋 This repository contains the complete source code for my personal portfolio website, which you can visit live at:

**[marcos.oriol-tech.com](https://marcos.oriol-tech.com/)**

This website serves as my digital introduction as a Bioengineer and Software Engineer, where I showcase my professional journey, featured projects, and the technologies I work with.

![Demo GIF Placeholder](https://placehold.co/600x300/2d3748/a0aec0?text=Add+a+GIF+or+Screenshot+here!)

---

## ✨ Key Features

The portfolio includes the following sections:

* **Career Journey:** An interactive summary of my professional and academic experience (IDNEO, PRBB, i3S, Skynet Legal...).
* **Project Showcase:** A detailed gallery of projects I've worked on, covering:
    * Artificial Intelligence & Machine Learning (Embedded Models, AI Agents).
    * Computational Neuroscience (Neuromorphic Computing).
    * Web Development (This portfolio itself!).
    * Rehabilitation Technology (RC Car with Arduino/Bluetooth).
* **Skills Snapshot:** A glance at my technical expertise.
* **Responsive Design:** Optimized for proper viewing on desktops, tablets, and mobile devices.
* **Contact Info:** Easy ways to get in touch.

---

## 🛠️ Tech Stack

This project was built using modern technologies:

* **Frontend Framework:** `[e.g., React, Vue, Svelte, Astro, Vanilla JS...]`
* **Build Tool / Bundler:** Vite
* **Styling:** `[e.g., CSS Modules, Tailwind CSS, SCSS, Plain CSS...]`
* **Deployment:** Docker (Node.js + Nginx) on Google Cloud Run
* **Fonts:** Google Fonts (Space Grotesk, JetBrains Mono)
* **Node.js Environment:** For dependency management and the build process.

---

## 🚀 Running Locally

If you want to explore the code or run the project on your local machine:

1.  **Prerequisites:**
    * Node.js (v20 or higher recommended, as used in the Dockerfile)
    * npm (comes with Node.js)

2.  **Clone the repository:**
    ```bash
    git clone [YOUR-GIT-REPOSITORY-URL] # Replace with your repo URL
    cd [REPOSITORY-FOLDER-NAME]
    ```

3.  **Install dependencies:**
    ```bash
    npm install
    ```
    *(If using the `package-lock.json` from the Dockerfile, `npm install` should suffice. If you were using `yarn`, it would be `yarn install`)*

4.  **Start the development server:**
    ```bash
    npm run dev
    ```
    This will start the Vite development server. Open your browser and navigate to the address shown in the console (usually `http://localhost:5173` or similar).

---

## ☁️ Deployment

The site is packaged into a Docker container using a multi-stage build to optimize the final image (Node.js Builder -> Nginx Runner). This container is deployed on **Google Cloud Run**.

You can see the details in the `Dockerfile` and `nginx.conf` files.

---

## 📫 Get In Touch

I invite you to visit the live version of the portfolio!

🌐 **[marcos.oriol-tech.com](https://marcos.oriol-tech.com/)**

If you have any questions or want to chat, feel free to contact me through the methods indicated on the website.

---

*This README was generated with AI assistance and adapted to the portfolio's content.*
