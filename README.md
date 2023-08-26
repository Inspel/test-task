# test task

In general app uses [Vue.js](https://vuejs.org/) as a framework, [vuetify](https://vuetifyjs.com/en/getting-started/installation/) as UI-Kit, [vue-query](https://vue-query.vercel.app/#/) to manage api requests and [zod](https://github.com/colinhacks/zod) to validate and type data.

Locales list requested with query in the App component, then user can select locale with ```LocaleSelector``` component. Selected locale passed to the ```LocaleTable``` component and used there to request extended locale information. Different data types are handled in ```TableCell``` component.

## Project Setup

```sh
npm install
```

To connect to the API, you need to create a `.env` file in the root directory of the project and add environment
variables from ```.env.example``` file

Cypress test will work with intercepted requests and will use its own environment variables from ```cypress.env.json```
file

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Run Unit Tests with [Vitest](https://vitest.dev/)

```sh
npm run test:unit
```

### Run End-to-End Tests with [Cypress](https://www.cypress.io/)

```sh
npm run test:e2e:dev
```

This runs the end-to-end tests against the Vite development server.

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
