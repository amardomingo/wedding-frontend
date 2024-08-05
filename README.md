# My Wedding

This is the main project for the wedding application, which includes backend, frontend, and landing page components. It is managed as a monorepo using npm workspaces.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Formatting](#formatting)
- [Workspaces](#workspaces)
- [Repository](#repository)
- [Lint-Staged](#lint-staged)
- [Authors](#authors)
- [License](#license)

## Installation

To install all the necessary dependencies for the entire project, run:

```bash
npm install
```

## Usage

### Formatting

To check the code formatting across all workspaces, run:

```bash
npm run format:check
```

To automatically format the code across all workspaces, run:

```bash
npm run format:write
```

## Workspaces

This project is managed as a monorepo with the following workspaces:

```text
- backend: Contains the backend code for the wedding application.
- frontend: Contains the frontend code for the wedding application.
- landing: Contains the save the date page code for the wedding application.
```

## Repository

The project is hosted on GitHub. You can find the repository at:

<https://github.com/amardomingo/wedding-frontend>

## Lint-Staged

This project uses lint-staged to run Prettier on staged files during commits. The configuration is as follows:

```json
"lint-staged": {
"**/*": "prettier --write --ignore-unknown"
}
```

## Authors

```text
Sara Jimenez
Alberto Mardomingo
```

## License

This project is licensed under the MIT License. See the [LICENSE file](LICENSE) for more details.
