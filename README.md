# ES Studies - Bible Study Platform

A modern web application for managing and tracking Bible studies, built with React, TypeScript, and Tailwind CSS.

## Features

- 🔐 Secure authentication system
- 👤 User profile management
- 📚 Weekly Bible study tracking
- 📊 Progress visualization
- 🎯 Daily study goals
- 📱 Responsive design

## Tech Stack

- **Frontend Framework:** React 18
- **Type System:** TypeScript
- **Styling:** Tailwind CSS
- **Routing:** React Router v6
- **Icons:** Lucide React
- **Build Tool:** Vite

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── auth/         # Authentication related components
│   ├── layout/       # Layout components (Header, Container)
│   ├── profile/      # Profile related components
│   ├── study/        # Study tracking components
│   └── ui/           # Base UI components
├── contexts/         # React contexts
├── data/            # Static data and mock data
├── hooks/           # Custom React hooks
├── pages/           # Page components
├── types/           # TypeScript type definitions
├── utils/           # Utility functions
└── routes/          # Route definitions
```

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

## Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Demo Account

For testing purposes, use these credentials:
- Email: rcdemo@escolasb.com
- Password: demo12345
- Church: Church 1

## Key Features Implementation

### Authentication

- Protected routes using React Router
- Context-based auth state management
- Secure login form with validation

### Profile Management

- User profile creation and editing
- Profile photo upload interface
- Basic user information management

### Study Tracking

- Weekly progress visualization
- Daily study completion tracking
- Lesson carousel navigation
- Progress persistence using localStorage

## Best Practices

- 🎯 Single responsibility principle
- 📦 Component modularity
- 🔄 State management with React Context
- 🎨 Consistent styling with Tailwind
- 📱 Mobile-first responsive design
- 🔒 Protected routes implementation
- 🎭 TypeScript for type safety