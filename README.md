# React Supabase Auth

This is a simple React application that demonstrates how to implement user authentication using Supabase and Tailwind CSS.

## Features

- User sign-up and sign-in
- Protected routes
- Sign out

## Project Structure

- `src/api/supabase.js`: Initializes the Supabase client.
- `src/context/AuthContext.jsx`: Provides the authentication context to the application.
- `src/pages/Login.jsx`: The login page.
- `src/pages/Signup.jsx`: The sign-up page.
- `src/pages/Dashboard.jsx`: A protected page that is only accessible to authenticated users.
- `src/routes/PrivateRoute.jsx`: A component that protects routes from unauthenticated users.
- `src/routes/router.jsx`: Defines the application's routes.

## Getting Started

To get started with this project, you'll need to create a Supabase project and set up a `.env` file.

### 1. Create a Supabase project

Go to [Supabase](https://supabase.com/) and create a new project.

### 2. Set up the `.env` file

Create a `.env` file in the root of the project and add the following environment variables:

```
VITE_SUPABASE_URL=YOUR_SUPABASE_URL
VITE_SUPABASE_ANON_KEY=YOUR_SUPABASE_ANON_KEY
```

You can find your Supabase URL and anon key in your Supabase project's API settings.

### 3. Install the dependencies

```
npm install
```

### 4. Run the development server

```
npm run dev
```

The application will be available at `http://localhost:5173`.