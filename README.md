# ES Studies - Bible Study Platform

A modern web application for managing and tracking Bible studies, built with React, TypeScript, and Firebase.

## Features

- 🔐 Secure authentication with Firebase
- 👤 User profile management
- 📚 Weekly Bible study tracking
- 📊 Progress visualization
- 🎯 Daily study goals
- 📱 Responsive design
- 🔄 Real-time data synchronization

## Tech Stack

- **Frontend Framework:** React 18
- **Type System:** TypeScript
- **Styling:** Tailwind CSS
- **Routing:** React Router v6
- **Backend:** Firebase
  - Authentication
  - Firestore Database
- **Icons:** Lucide React
- **Build Tool:** Vite

## Project Structure

```
src/
├── components/        # Reusable UI components
│   ├── auth/         # Authentication related components
│   ├── layout/       # Layout components
│   ├── profile/      # Profile related components
│   ├── study/        # Study tracking components
│   └── ui/           # Base UI components
├── config/           # Configuration files
│   ├── constants.ts  # Application constants
│   └── firebase.ts   # Firebase configuration
├── contexts/         # React contexts
├── data/            # Static data
├── hooks/           # Custom React hooks
├── pages/           # Page components
├── services/        # Firebase service layers
├── types/           # TypeScript definitions
└── utils/           # Utility functions
```

## Getting Started

1. Clone the repository
2. Create a `.env` file with your Firebase configuration:
   ```
   VITE_FIREBASE_API_KEY=your_api_key
   VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
   VITE_FIREBASE_PROJECT_ID=your_project_id
   VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
   VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   VITE_FIREBASE_APP_ID=your_app_id
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
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

## Firebase Integration

### Authentication
- Email/password authentication
- Persistent sessions
- Protected routes
- Error handling

### Firestore Database
- User profiles
- Weekly study tracking
- Progress persistence
- Real-time updates

## Key Features Implementation

### Authentication Flow
- Protected routes using React Router
- Context-based auth state management
- Firebase Auth integration
- Error handling and validation

### Profile Management
- Firestore user profiles
- Profile data persistence
- Basic information management
- Church affiliation

### Study Tracking
- Weekly progress in Firestore
- Daily study completion tracking
- Lesson navigation
- Progress synchronization

## Best Practices

- 🎯 Single responsibility principle
- 📦 Modular component architecture
- 🔄 Firebase service abstraction
- 🎨 Consistent styling with Tailwind
- 📱 Mobile-first responsive design
- 🔒 Secure authentication flow
- 🎭 TypeScript for type safety
- 🏗️ Clean code architecture