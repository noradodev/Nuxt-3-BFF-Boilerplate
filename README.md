# Nuxt 3 BFF Boilerplate

A minimal and production-ready Nuxt 3 boilerplate implementing the Backend-for-Frontend (BFF) architecture. Designed for scalable SaaS applications, it includes a modern UI stack, schema-safe validation, state management, and a complete testing environment.

## Features

- Nuxt 3 with server API (BFF architecture)
- Tailwind CSS for utility-first styling
- Headless UI for accessible UI components
- Pinia for state management
- Zod and Vee-Validate for schema-based form validation
- VueUse composables
- Vue Sonner for toast notifications
- Prettier and ESLint for code quality
- Vitest and Nuxt Test Utils for unit and component testing

## Stack Overview

| Category      | Package                            |
| ------------- | ---------------------------------- |
| Framework     | Nuxt 3                             |
| Styling       | Tailwind CSS, Headless UI          |
| State & Server| Pinia, AXIOS                       |
| Validation    | Zod, Vee-Validate                  |
| Utilities     | VueUse                             |
| Notifications | Vue Sonner                         |
| Testing       | Vitest, @vue/test-utils, happy-dom |
| Formatting    | Prettier, ESLint                   |

## Getting Started

```bash
npm install
npm run dev

```

## Folder Information

### Compoments

components/
  ├── atoms/        For Smallest UI (buttons, inputs, labels)
  ├── molecules/    For Group of atoms (form fields, list item)
  ├── organisms/    For Complex section (card, modal, navbar)

### Server

#### The /server directory is the heart of the BFF. It contains all the server-side logic powered by Nitro.  

1. `server/api/`: This is where all API endpoints that the frontend application will consume are defined. Nuxt automatically maps files in this directory to routes prefixed with /api. A best practice is to organize these endpoints by resource (e.g., users, projects) and to use HTTP method suffixes in the filenames (e.g., index.get.ts, [id].delete.ts). This convention is not only clear but also leveraged by Nuxt to provide better type inference for client-side fetches.  

2. `server/middleware/`: Files in this directory define server-side middleware that runs on every incoming request to the Nitro server, before the specific route handler is executed. This is the ideal location for cross-cutting concerns like authentication checks (validating a session cookie), request logging, or enriching the request event object with context that will be needed by API handlers.  

3. `server/utils/`: This directory is for server-only helper functions. It is the perfect place to house the client/SDK for your external REST API, complex data transformation logic that shouldn't live in an API handler, or any other utility that is specific to the backend environment.  

4. `server/api/*`: This folder will hold all your BFF to request from backend API securely that calling from services function.
4. `server/services/*`: Handling the request originally from route of your api, each service may handling mulitple route (eg, auth/login, auth/logout, auth/register...)


### Shared

  The shared/ directory, available since Nuxt v3.14, is a powerful feature for creating isomorphic (or universal) code—code that can be executed on both the server and the client. This directory is the lynchpin for achieving end-to-end type safety and reducing code duplication.  

1. `shared/types/`: This is the canonical location for TypeScript interfaces and type definitions that describe the data structures shared between the BFF and the client. For example, a User type defined here can be used in a Pinia store on the client and in a server API handler to type its return value.

2. `shared/utils/`: This sub-directory is ideal for pure utility functions that are environment-agnostic. Its most critical use case in a BFF architecture is for defining validation schemas using a library like Zod.   
