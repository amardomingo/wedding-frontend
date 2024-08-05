# My Wedding Backend

This project serves as the backend for a wedding application, built using Node.js and Express. It also integrates Google APIs for additional functionality.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Linting](#linting)
- [Authors](#authors)
- [License](#license)

## Installation

To install the necessary dependencies, run the following command:

```bash
npm install
```

## Usage

Needs the following environment variables to run the backend:

- `GOOGLE_APPLICATION_CREDENTIALS` pointing to a gcp service account keyfile,
  or some other google auth method.
- `BANK_ACCOUNT` with the bank account number.
- `SHEET_ID` with the google sheet id in where save the data.
- `SHEET_TAB_NAME` with the tab name of the google sheet specified in the sheet id variable.

To start the server, run:

```bash
GOOGLE_APPLICATION_CREDENTIALS='sa.json' BANK_ACCOUNT='xxxxx' SHEET_ID='xxxxxx' SHEET_TAB_NAME='Invitados' node index.js
```

Make sure to configure any necessary environment variables or configuration files needed for your application.
Scripts

The following scripts are available in this project:

```text
test: Run the test suite (currently not implemented, placeholder for future testing scripts).
lint: Run ESLint to check for linting issues.
```

You can run these scripts using:

```bash
npm run <script-name>
```

## Linting

This project uses ESLint with the Airbnb base configuration. To run the linter, use:

```bash
npm run lint
```

## Authors

```text
Sara Jimenez
Alberto Mardomingo
```

## License

This project is licensed under the MIT License. See the [LICENSE file](../LICENSE) for more details.
