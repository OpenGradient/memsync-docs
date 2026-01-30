# MemSync Documentation

This repository contains the comprehensive documentation for MemSync, a powerful platform for building personalized AI experiences through long-term memory management.

## Development

To run the documentation locally, you'll need to install and use the documentation tools.

### Prerequisites

Make sure you have Node.js installed, then install the documentation CLI:

```bash
npm i -g @mintlify/mdx
```

### Running Locally

Start the local development server:

```bash
npx @mintlify/mdx dev
```

The documentation will be available at `http://localhost:3000`.

### Common Issues

- If the dev environment isn't running - Run `npm install` to re-install dependencies.

## Contributing
### Troubleshooting

#### Windows Installation
If you are on Windows and encounter errors installing dependencies, we recommend using **WSL (Windows Subsystem for Linux)**. 
1. Run `wsl --install` in PowerShell.
2. Restart and install the requirements within the WSL terminal.

#### Dependency Conflicts
If `npm install` fails, try clearing your cache:
```bash
npm cache clean --force
rm -rf node_modules
npm install
#### Authentication Loops (401 Unauthorized)
If you are repeatedly asked to log in or see 401 errors:
1. Clear browser cookies for `memsync.ai`.
2. Ensure the extension has permissions for your specific AI site (ChatGPT, Claude, etc.).
3. Log out and back in via the MemSync dashboard to refresh your session.


When contributing to the documentation:

1. Follow the existing structure and formatting
2. Test changes locally before submitting
3. Ensure all links and references work correctly
4. Update navigation in `docs.json` if adding new pages

## Deployment

The documentation is automatically deployed when changes are pushed to the main branch.
