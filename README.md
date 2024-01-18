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

This project is a Playwright test project template and code library. It is built with TypeScript and JavaScript. Much of the
contents were inspired by or made during my work on the first major QA automation project I did professionally. Some parts
will be good, and other parts assuredly less so. This is part portfolio showcase, part nostalgia, and part reference project.



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
