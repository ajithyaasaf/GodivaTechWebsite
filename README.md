# Godiva Tech Website

A professional technology company website built with React, Express, and Tailwind CSS.

## Features

- Modern, responsive design
- Interactive UI components
- Multiple page sections including Home, Services, About, Portfolio, Testimonials, Blog, and Contact
- Contact form with validation
- Newsletter subscription
- Smooth page transitions with Framer Motion

## Tech Stack

### Frontend
- React
- TypeScript
- Tailwind CSS
- Shadcn/UI components
- Framer Motion for animations
- Wouter for routing
- React Query for data fetching
- Zod for validation

### Backend
- Node.js with Express
- TypeScript
- Drizzle ORM (PostgreSQL)

## Getting Started

This project is ready to use on Replit. Simply fork/remix the project and run it.

### Running the Project

The project uses Replit's workflow system. Just click the "Run" button and it will start the development server.

### Project Structure

```
/
├── client/             # Frontend React application
│   ├── index.html      # Main HTML file
│   └── src/            # React source files
│       ├── assets/     # Static assets
│       ├── components/ # UI components
│       ├── hooks/      # Custom React hooks
│       ├── lib/        # Utility functions and data
│       ├── pages/      # Page components
│       ├── App.tsx     # Main App component
│       ├── index.css   # Global styles
│       └── main.tsx    # Entry point
├── server/             # Backend Express server
│   ├── index.ts        # Server entry point
│   ├── routes.ts       # API routes
│   ├── storage.ts      # Storage interface
│   └── vite.ts         # Vite server configuration
├── shared/             # Shared code between client and server
│   └── schema.ts       # Data schemas
└── various config files
```

## Customization

### Styling

- Global styles are in `client/src/index.css`
- Theme configuration is in `theme.json`
- Component-specific styles use Tailwind CSS classes

### Content

- Update the content in `client/src/lib/data.ts` to change services, testimonials, blog posts, etc.
- Pages are in `client/src/pages/`
- Reusable components are in `client/src/components/`

## Deployment

This project is ready to be deployed on Replit.