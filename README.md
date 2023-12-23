# Playwright Project Builder

This project is a Playwright test runner built with TypeScript and JavaScript.

## TOC

- [Summary](#summary)
- [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installing](#installing)
    - [Running the tests](#running-the-tests)
    - [Built With](#built-with)
    - [Authors](#authors)
    - [License](#license)

## Summary

This project is a Playwright test project config factory. It is built with TypeScript and JavaScript. It is designed to
be a starting point for Playwright projects. By setting environment variables for each environment you would want to test, you can execute a setup project, your test suite against all enabled environments, and a teardown project. 



## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing
purposes.

### Prerequisites

- Node.js
- npm

### Installing

1. Clone the repository

```bash
git clone https://github.com/graffhyrum/playwright-project-builder.git
```

2. Install dependencies

```bash
npm install
```

3. Copy the `.env.example` file and create a `.env` file

```bash
cp .env.example .env
```

4. Uncomment the environment flag in the `.env` file that you want to test

### Running the tests

Run the tests using the following command:

```bash
npm test
```

## Built With

- [TypeScript](https://www.typescriptlang.org/)
- [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
- [Playwright](https://playwright.dev/)

## Authors

- [graffhyrum](https://github.com/graffhyrum)

## License

This project is licensed under the ISC License.

## Planned Features
- Parameterize the relevant configuration elements of the project factory.
  - Project names (eg environment names and custom setup/teardown names)
  - [testConfig.testMatch](https://playwright.dev/docs/api/class-testconfig#test-config-test-match)
  - [testConfig.use.baseURL](https://playwright.dev/docs/test-use-options#basic-options)