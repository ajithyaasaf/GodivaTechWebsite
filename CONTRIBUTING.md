# Contributing to Godiva Tech Website

Thank you for your interest in contributing to the Godiva Tech Website project! This guide will help you get started.

## Getting Started

1. Fork the project on Replit
2. Start the development server by clicking the Run button
3. Make your changes and test them in the preview window

## Project Structure

The project follows a client-server architecture:

- **client/**: Frontend React application
- **server/**: Backend Express server
- **shared/**: Shared code between client and server

## Development Guidelines

### Frontend

- Use Tailwind CSS for styling
- Follow the component structure in `client/src/components/`
- Add new pages in `client/src/pages/`
- Use the existing UI components from shadcn in `client/src/components/ui/`

### Backend

- Add new API endpoints in `server/routes.ts`
- Use the storage interface for data persistence
- Validate request data with Zod schemas

## Code Style

- Use TypeScript for type safety
- Follow the existing code style and formatting
- Use named exports for components and functions
- Add appropriate comments for complex logic

## Content Customization

To customize the website content:

1. Edit the data in `client/src/lib/data.ts`
2. Replace images in `client/src/assets/`
3. Update theme colors in `theme.json`

## Building for Production

```bash
npm run build
npm run start
```

## Submitting Changes

1. Test your changes thoroughly
2. Create a detailed description of your changes
3. Submit your fork as a new project or share the link

## Need Help?

If you have any questions, feel free to reach out to the maintainers by opening an issue on the project.