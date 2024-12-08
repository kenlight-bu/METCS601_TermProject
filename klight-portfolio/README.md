## Project Goal

The goal of this project is to create a professional portfolio website that showcases my skills, experience, and projects as a software developer. This website serves as a digital resume and a personal brand statement, allowing potential employers, clients, and collaborators to learn more about my expertise and view examples of my work.

Through this project, I aim to:

- Demonstrate my mastery of modern web development technologies, including **HTML5**, **CSS3**, **JavaScript**, **TypeScript**, and **React**.
- Apply principles of **responsive design** and **usability** to create an engaging user experience across all devices.
- Highlight my ability to integrate advanced features, such as drag-and-drop functionality, SVG creation, and API/database connections.
- Provide an organized, visually appealing platform to showcase my biography, resume, skills, and project portfolio.

Ultimately, this portfolio is a reflection of my growth as a developer and a tool to connect with opportunities that align with my passion for building innovative software solutions.

---

## Technology Stack

This project leverages modern web development technologies and tools, including:

- **HTML5** and **CSS3**: For structuring and styling the website with clean, semantic code.
- **JavaScript** and **TypeScript**: To implement interactivity and type-safe logic throughout the application.
- **React**: A powerful JavaScript library for building dynamic, component-based user interfaces.
- **Responsive Design**: Ensuring the website looks and functions great on all screen sizes using CSS Flexbox and Grid.
- **Google Fonts**: For modern typography that enhances the visual appeal.
- **Dynamic Animations**: Subtle transitions and hover effects for an engaging user experience.

---

## Folder Structure and Organization

The project follows a well-organized folder structure, making it easy to navigate and maintain:

klight-portfolio/
│
├── public/                     # Contains static assets like the index.html file
├── src/                        # Main application source files
│   ├── assets/                 # Stores images and other media assets
│   ├── styles/                 # CSS files for different components/pages
│   │   ├── aboutPage.css
│   │   ├── contactPage.css
│   │   ├── landingPage.css
│   │   ├── layout.css
│   │   ├── portFolioPage.css
│   │   └── resumePage.css
│   ├── reducers/               # (Future use) Reducers for state management
│   ├── views/                  # React components for individual pages
│   │   ├── aboutPage.tsx
│   │   ├── contactPage.tsx
│   │   ├── landingPage.tsx
│   │   ├── layout.tsx
│   │   ├── portFolioPage.tsx
│   │   └── resumePage.tsx
│   ├── App.tsx                 # Main React component
│   ├── index.tsx               # Entry point for the React application
│   ├── react-app-env.d.ts      # TypeScript environment file
│   └── reportWebVitals.ts      # Web performance measurement utility
│
├── package.json                # Manages project dependencies and scripts
├── package-lock.json           # Dependency tree lockfile
├── tsconfig.json               # TypeScript configuration
└── README.md                   # Project documentation

---

## Component-Based Architecture

The application is built with reusable, modular React components, ensuring maintainability and scalability. Each page is designed as a distinct component (e.g., `LandingPage`, `AboutPage`) and styled individually with a corresponding CSS file. 

- **Modular CSS**: Each page/component has its own CSS file located in the `styles/` folder for scoped styling.
- **Centralized Assets**: All images and other media files are stored in the `assets/` folder to keep the project organized.
- **Responsive Design**: CSS Flexbox and Grid are used to ensure layouts adapt seamlessly to different screen sizes.
