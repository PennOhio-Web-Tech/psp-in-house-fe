`Work in progress...`

# Next JS Subdomain Multi-tenancy Starter Kit

This repo is intended as a starting point for subdomain multi-tenancy frontend projects. It leverages Server Side Rendering (SSR) and frontend middleware to handle subdomains, prefetching tenant information while authenticated via JSON Web Token (JWT) & HTTP only cookies.

## Stack

1. [Next.js](https://nextjs.org/docs/getting-started) as the React framework
1. [Jest](https://jestjs.io/docs/tutorial-react) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/) for unit and integration testing
1. [Cypress](https://docs.cypress.io/guides/getting-started/writing-your-first-test#Add-a-test-file) for end-to-end testing
1. [NextAuth](https://next-auth.js.org/configuration/providers/credentials) for authentication
1. [Docker](https://docs.docker.com/get-started/) for Azure Government App Services deployment
1. [Styled Components](https://styled-components.com/docs/basics) for CSS-in-JS styling
1. [React Query](https://react-query.tanstack.com/overview) for async state management
1. [GraphQL](https://graphql.org/learn/) as our API query language/service

## Using Docker

1. [Install Docker](https://docs.docker.com/get-docker/) on your machine.
1. Build your container: `docker build -t your-app-name .`.
1. Run your container: `docker run -p 3000:3000 your-app-name`.

You can view your images created with `docker images`.

## Running Locally

First, run the development server:

```bash
yarn dev
```

Open [http://tenant-a.localhost:3000](http://tenant-a.localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

#### Caveats

Pages with an invalid subdomain or without a subdomain (`http://localhost:3000` or `http://invalid-tenant.localhost:3000`) will route to `/404` as page not found.
