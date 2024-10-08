# Blog Hub

A comprehensive blog hub platform built using modern web development technologies, including **Next.js**, **React.js**, **Node.js**, and **MongoDB**. It provides users with a seamless experience for reading, writing, and interacting with blogs across various categories.

## Features

### Front-End
- **Next.js** and **React.js** for fast, responsive UI.
- **Responsive Navigation** with social links, login/logout functionality, and a theme toggle button (day/night mode).
- **Category & Post Cards** on the homepage for easy navigation and post discovery.
- **Real-Time Comments** using SWR for fetching without page reloads.
- **Pagination** for browsing through multiple pages of posts.

### Back-End
- **Node.js** for server-side logic.
- **MongoDB** with **Prisma ORM** for database management.
- **Firebase** for file storage and authentication.
- **NextAuth.js** for handling authentication with Google, GitHub, and Facebook.

## Authentication
- **Auth.js** powers user authentication, allowing login via Google, GitHub, and Facebook.
- **MongoDB & Prisma ORM** are used for storing user sessions and data.
- Authentication status is reflected throughout the app, with user-specific functionality for posting blogs and comments.

## Blog Features
- **Post Creation**: Authenticated users can write and publish blog posts using the React-Quill text editor.
- **Blog Viewing**: Users can browse various categories, view posts, and interact through comments.
- **Commenting System**: Real-time comment updates with authentication-based access for posting.

## Models Used
1. **Account**: Manages external authentication providers.
2. **Session**: Tracks user sessions.
3. **User**: Stores core user information.
4. **Category**: Organizes content into categories like "Technology", "Science", etc.
5. **Post**: Represents blog posts with titles, content, and associated metadata.
6. **Comment**: Stores comments made by users on blog posts.

## Backend API Routes
- **Fetch Posts**: Pagination and category filtering for retrieving posts.
- **Post Creation**: Create new blog posts with authentication.
- **Fetch Single Post**: Retrieve and view individual blog posts with incremented view counts.
- **Comments**: Fetch and post comments on blogs, with real-time updates.

## Technologies Used

### Front-End
- **Next.js**
- **React.js**
- **React-Quill**
- **ThemeContextAPI** for theme toggling

### Back-End
- **Node.js**
- **MongoDB**
- **Prisma ORM**
- **Firebase** for authentication and file storage
- **Auth.js** for OAuth integration

### Authentication Providers
- **Google Cloud**
- **GitHub Developer**
- **Meta Developer**

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/blog-hub.git
   cd blog-hub
