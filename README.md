# VORA - Learning Management System

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

### 📝 Overview

Welcome to the Vora Learning Management System (LMS). This project allows users to browse, purchase, and engage with courses. Teachers can create, manage, and analyze their courses. Below is a detailed guide on how to set up and navigate through the project.

### 🚀 Getting Started

#### Prerequisites
- Node.js (>=14.x)
- npm (>=6.x) or yarn (>=1.x)
- Visual Studio Code (VSCode)
- Basic understanding of Next.js and TailwindCSS

#### Project Setup

1. **Clone the Repository:**
    ```sh
    git clone https://github.com/edwardbudaza/vora-lms.git
    cd vora-lms
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

## 🔑 Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file:

```bash
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_<yourownkey>
CLERK_SECRET_KEY=sk_test_<yourownkey>
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/

# This was inserted by `prisma init`:
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

DATABASE_URL="mysql://<username>:<password>"

UPLOADTHING_SECRET=sk_live_<yourownsecret>
UPLOADTHING_APP_ID=<yourownappid>

MUX_TOKEN_ID=2f0e3f50-<yourownid>
MUX_TOKEN_SECRET=<yourownsecret>


STRIPE_API_KEY=pk_test_<yourownkey>
```


## ✨ Technologies Used

<details><summary><b>Our Learning Management System (LMS)</b> is built using the following technologies:</summary>

- [Next.js](https://nextjs.org/): Next.js is a React framework for building server-side rendered and statically generated web applications.
- [TypeScript](https://www.typescriptlang.org/): TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.
- [Tailwind CSS](https://tailwindcss.com/): Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.
- [Shadcn UI](https://ui.shadcn.com/): Shadcn UI is a component library that provides accessible, reusable, and composable UI components.
- [Prisma](https://www.prisma.io/): Prisma is a TypeScript-first ORM for Node.js and the browser.
- [Stripe](https://stripe.com/): Stripe is a payment processing platform used for handling course purchases.
- [Uploadthing](https://uploadthing.com/): Uploadthing is a tool used for handling file uploads, likely integrated for uploading course-related media like videos and images.
- [React](https://reactjs.org/): React is a JavaScript library for building user interfaces, used as the underlying library for Next.js.
- [Tailwind Intellisense](https://marketplace.visualstudio.com/items?itemName=bradlc.vscode-tailwindcss): Tailwind Intellisense is an extension for VSCode that provides autocomplete and other utilities for working with Tailwind CSS.
- [Server Components](https://nextjs.org/docs/basic-features/server-components): Server Components is a Next.js feature that allows for server-side rendering of React components.
- [Rich Text Editor](https://www.tiny.cloud/): A rich text editor used for editing descriptions and other rich text content within the platform.
- [React Player](https://github.com/CookPete/react-player): React Player is a library for handling video playback within the course chapters.
- [Confetti Animation](https://github.com/daniel-lundin/react-dom-confetti): A library used for providing visual feedback upon course completion.

</details>

---


