# VORAL - Learning Management System

<!-- GitHub badges -->

[![Latest release](https://img.shields.io/github/v/release/edwardbudaza/vora-lms?label=Latest%20release&style=social)](https://github.com/edwardbudaza/vora-lms/releases/tag/v0.1.0)
[![Stars](https://img.shields.io/github/stars/edwardbudaza/vora-lms?style=social)](https://github.com/edwardbudaza/vora-lms/stargazers)
[![Fork](https://img.shields.io/github/forks/edwardbudaza/vora-lms?style=social)](https://github.com/edwardbudaza/vora-lms/forks)
[![GitHub commits](https://img.shields.io/github/commit-activity/t/edwardbudaza/vora-lms?style=social&logo=github)](https://github.com/edwardbudaza/vora-lms/commits)
[![Pull requests](https://img.shields.io/github/issues-pr/edwardbudaza/vora-lms?style=social&logo=github)](https://github.com/edwardbudaza/vora-lms/pulls)

[![made by edwardbudaza](https://custom-icon-badges.demolab.com/badge/made%20by%20-edwardbudaza-556bf2?logo=github&logoColor=white&labelColor=101827)](https://github.com/edwardbudaza)
[![License](https://img.shields.io/github/license/edwardbudaza/vora-lms?color=dddddd&labelColor=000000)](https://github.com/edwardbudaza/vora-lms/blob/main/LICENSE)
[![Top Language](https://img.shields.io/github/languages/top/edwardbudaza/vora-lms?logo=github&logoColor=%23007ACC&label=TypeScript)](https://www.typescriptlang.org/)
[![Contributors](https://img.shields.io/github/contributors/edwardbudaza/vora-lms?style=flat&color=orange&label=Contributors)](https://github.com/edwardbudaza/vora-lms/graphs/contributors)
![Release](https://img.shields.io/github/release/edwardbudaza/vora-lms.svg)
![PRs](https://img.shields.io/badge/PRs-welcome-ff69b4.svg?style=shields)
![deployment](https://img.shields.io/github/deployments/edwardbudaza/vora-lms/Production?logo=vercel&label=Website)
[![Known Vulnerabilities](https://snyk.io/test/github/edwardbudaza/vora-lms/badge.svg)](https://snyk.io/test/github/edwardbudaza/vora-lms)

## Vora Project Documentation

<details><summary><b>Folder Structure</b></summary>

```bash
vora-lms/
├───actions
├───app
│   ├───(auth)
│   │   └───(routes)
│   │       ├───sign-in
│   │       │   └───[[...sign-in]]     
│   │       └───sign-up
│   │           └───[[...signup]]      
│   ├───(course)
│   │   └───courses
│   │       └───[courseId]
│   │           ├───chapters
│   │           │   └───[chapterId]    
│   │           │       └───_components
│   │           └───_components        
│   ├───(dashboard)
│   │   ├───(routes)
│   │   │   ├───(root)
│   │   │   │   └───_components
│   │   │   ├───search
│   │   │   │   └───_components
│   │   │   └───teacher
│   │   │       ├───analytics
│   │   │       │   └───_components
│   │   │       ├───courses
│   │   │       │   ├───[courseId]
│   │   │       │   │   ├───chapters
│   │   │       │   │   │   └───[chapterId]
│   │   │       │   │   │       └───_components
│   │   │       │   │   └───_components
│   │   │       │   └───_components
│   │   │       ├───create
│   │   │       └───users
│   │   │           ├───[id]
│   │   │           │   └───_components
│   │   │           └───_components
│   │   └───_components
│   └───api
│       ├───courses
│       │   └───[courseId]
│       │       ├───attachments
│       │       │   └───[attachmentId]
│       │       ├───chapters
│       │       │   ├───reorder
│       │       │   └───[chapterId]
│       │       │       ├───progress
│       │       │       ├───publish
│       │       │       └───unpublish
│       │       ├───checkout
│       │       ├───publish
│       │       └───unpublish
│       ├───profile
│       │   └───[id]
│       ├───uploadthing
│       └───webhook
├───components
│   ├───modals
│   ├───providers
│   └───ui
├───hooks
├───lib
├───prisma
├───public
└───scripts
```
</details>
### Overview

Welcome to the Vora Learning Management System (LMS). This project allows users to browse, purchase, and engage with courses. Teachers can create, manage, and analyze their courses. Below is a detailed guide on how to set up and navigate through the project.

### Getting Started

#### Prerequisites
- Node.js (>=14.x)
- npm (>=6.x) or yarn (>=1.x)
- Visual Studio Code (VSCode)
- Basic understanding of Next.js and TailwindCSS

#### Project Setup

1. **Clone the Repository:**
    ```sh
    git clone <repository-url>
    cd vora
    ```

2. **Install Dependencies:**
    ```sh
    npm install
    ```

3. **Run the Project:**
    ```sh
    npm run dev
    ```
    The application will run on [http://localhost:3000](http://localhost:3000).

#### Folder Structure

- **actions/**: Contains server-side actions.
- **app/**: Main application logic.
  - **auth/**: Authentication-related pages and logic.
  - **course/**: Course management and display logic.
  - **dashboard/**: Dashboard views for students and teachers.
  - **api/**: API routes for handling data operations.
- **components/**: Reusable UI components.
- **hooks/**: Custom hooks for state and effect management.
- **lib/**: Library files for additional functionalities.
- **prisma/**: Database schema and client.
- **public/**: Static assets like images and icons.
- **scripts/**: Automation and setup scripts.

### Key Functionalities

#### User Authentication

- **Sign-In and Sign-Up:**
  - Users can sign in and sign up through dedicated pages under the `(auth)` directory.

#### Course Browsing and Enrollment

- **Browse Courses:**
  - Users can view courses by category or search for specific courses.
  - Free chapters are available for preview before purchasing a course.
  
- **Enroll in Courses:**
  - Users can enroll in courses using Stripe for payment.
  - Once enrolled, all chapters become accessible.

#### Course Progress Tracking

- **Mark Chapters as Complete:**
  - Users can manually mark chapters as complete or let the system auto-update based on video completion.
  
- **View Course Progress:**
  - Progress is tracked and displayed for each course.

#### Dashboard

- **Student Dashboard:**
  - Displays all courses a student has enrolled in, along with their progress.

- **Teacher Dashboard:**
  - Allows teachers to manage their courses, view analytics, and edit course details.

#### Course Management for Teachers

- **Create and Edit Courses:**
  - Teachers can create new courses, add chapters, and manage course content.
  - They can upload videos, reorder chapters, and set chapters as free previews.

- **Analytics:**
  - Teachers can view sales and revenue data for their courses.

#### API Routes

- **Course APIs:**
  - Endpoints for managing courses, chapters, attachments, and publishing statuses.
  
- **Profile APIs:**
  - Endpoints for managing user profiles.

- **Uploadthing:**
  - Handles file uploads for course content.



## ✨ Technologies Used

<details><summary><b>Our Learning Management System (LMS)</b> is built using the following technologies:</summary>

- [Next.js](https://nextjs.org/): Next.js is a React framework for building server-side rendered and statically generated web applications.
- [TypeScript](https://www.typescriptlang.org/): TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
- [Tailwind CSS](https://tailwindcss.com/): Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.
- [Chakra UI](https://chakra-ui.com/): Chakra UI is a component library that provides accessible, reusable, and composable UI components.
- [Prisma](https://www.prisma.io/): Prisma is a TypeScript-first ORM for Node.js and the browser.
- [Stripe](https://stripe.com/): Stripe is a payment processing platform used for handling course purchases.
- [Uploadthing](https://uploadthing.com/): Uploadthing is a tool used for handling file uploads, likely integrated for uploading course-related media like videos and images.
- [React](https://reactjs.org/): React is a JavaScript library for building user interfaces, used as the underlying library for Next.js.
- [Node.js](https://nodejs.org/): Node.js is a runtime environment for executing JavaScript code server-side.
- [npm](https://www.npmjs.com/): npm is a package manager for JavaScript, used for managing dependencies.
- [VSCode](https://code.visualstudio.com/): VSCode is a popular development environment, indicated by the presence of the `.vscode` directory.
- [Tailwind Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss): Tailwind Intellisense is an extension for VSCode that provides autocomplete and other utilities for working with Tailwind CSS.
- [Server Components](https://nextjs.org/docs/basic-features/server-components): Server Components is a Next.js feature that allows for server-side rendering of React components.
- [Rich Text Editor](https://www.tiny.cloud/): A rich text editor used for editing descriptions and other rich text content within the platform.
- [React Player](https://github.com/CookPete/react-player): React Player is a library for handling video playback within the course chapters.
- [Confetti Animation](https://github.com/daniel-lundin/react-dom-confetti): A library used for providing visual feedback upon course completion.

</details>

---

### Setting Up Your Development Environment

1. **Install Next.js and TailwindCSS:**
    ```sh
    npx create-next-app@latest lms-tutorial --typescript --tailwind --eslint
    ```

2. **Install and Configure ShadCN UI:**
    ```sh
    npx shadcn-ui@latest init
    ```

3. **Install Specific ShadCN UI Components:**
    ```sh
    npx shadcn-ui@latest add button
    ```

4. **Run the Development Server:**
    ```sh
    npm run dev
    ```
