# Website Payload Boilerplate

This project serves as a boilerplate for building web applications using Payload CMS. It is designed to streamline the development process by providing a solid foundation that includes essential configurations and dependencies.

## Features

- **Payload CMS Integration**: Leverages Payload CMS for managing content with ease.
- **Development and Production Scripts**: Includes scripts for both development and production environments.
- **TypeScript Support**: Fully supports TypeScript for type-safe code.
- **Customizable Build Process**: Offers customizable build scripts for Payload and the server.
- **Environment Variable Management**: Utilizes `cross-env` for managing environment variables across different platforms.
- **Code Linting and Formatting**: Configured with ESLint and Husky for code linting and pre-commit checks.

## Getting Started

### Prerequisites

- Node.js
- Yarn or npm
- MongoDB (for Payload CMS)

### Installation

1. Clone the repository:

```bash
git clone git@github.com:innovixx/website-payload-boilerplate.git  
```

2. Navigate to the project directory:
```bash
cd website-payload-boilerplate
```

3. Install dependencies:
```bash
yarn install
```

4. Development
To start the development server, run:
```bash
yarn dev
```

5. Building for Production
To build the project for production, run:
```bash
yarn build
```
This will compile TypeScript files, build Payload, and copy necessary static files to the dist directory.

6. Serving in Production
To serve the built project in production, run:
```bash
yarn serve
```

### Scripts
- `dev`: Starts the development server with hot reload.
- `cleanDev`: Cleans the storage and restarts the development server with database seeding.
- `build:payload`: Builds Payload CMS.
- `build:server`: Compiles TypeScript files.
- `build`: Runs the full build process.
- `serve`: Serves the built project in production.
- `copyfiles`: Copies static files to the dist directory.
- `generate:types`: Generates TypeScript types for Payload CMS.
- `generate:graphql`: Generates GraphQL schema for Payload CMS.
- `lint`: Lints the codebase.
- `lint-staged`: Runs linting on staged files.
- `postinstall`: Sets up Husky for git hooks.

### Contributing
Contributions are welcome! Please feel free to submit a pull request.

### License
The MIT License (MIT)

### Author
Innovixx support@innovixx.co.uk