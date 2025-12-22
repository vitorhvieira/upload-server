# Project Overview

This is a website for a law office, built with Next.js, React, and TypeScript. It appears to be a single-page application for the most part, with sections for "About", "Practice Areas", and "Contact". There is also a separate page for "Articles". The styling is done using Tailwind CSS.

# Building and Running

To get the project up and running, follow these steps:

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start the development server on [http://localhost:3000](http://localhost:3000).

3.  **Build for production:**
    ```bash
    npm run build
    ```
    This will create a production-ready build of the application.

4.  **Start the production server:**
    ```bash
    npm run start
    ```
    This will start the application in production mode.

# Development Conventions

*   **Linting:** The project uses ESLint for linting. To run the linter, use the following command:
    ```bash
    npm run lint
    ```
*   **Components:** The project is structured with a clear separation of components, which are located in the `src/components` directory.
*   **Styling:** The project uses Tailwind CSS for styling. The configuration can be found in the `tailwind.config.js` file.
*   **Routing:** The project uses the Next.js App Router. The main page is `src/app/page.tsx`, and there is a separate page for articles at `src/app/artigos/page.tsx`.
