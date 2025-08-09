## Istallation and Set Up


# Install VS Code extensions:

- Playwright (publisher: Microsoft)
- ESLint (publisher: Microsoft)
- Live Preview (publisher: Microsoft)
- Prettier (publisher: Prettier)

# Run the following commands in git-bash terminal to install poject packages:

- npm install (install all project packages)
- npx ts-node -v (if it asks you to install ts-node Accept, try again and you should see a version in your console like 'v10.9.2')
- npm init playwright@latest    OR    npx playwright install --with-deps  (install Plawright with prompts or silent)

# Proxy set up (only use if you cant run the commands above):
Execute the following commands in git-bash terminal:
Note!: You need to update these settings each time you change your password!
Substitude `user` and `pass` with your credentials, example url: http://VladimirChernev:password@webgateway.procreditbank.bg:9090)
- npm config set proxy http://user.pass.proxy.url.bg:9999  (set proxy for http)
- npm config set https-proxy http://user.pass.proxy.url.bg:9999 (same as above but for https)
- npm config set strict-ssl=false  (some proxies need to ingore strict ssl certificates, use if needed)

# Set up VS Code User Settings with:

- ctr+p (to open VS Code search menu)
- type: ">Open User Settings" and select the JSON option (search for command to execute which contains this text)
- note!: after this you will have to set up your IDE's colour scheme again

# Copy the below settings and replace your JSON file with the JSON below:

- makes git bash default terminal
- configures formater as Prettier
- configures auto format on Paste or Save
- sets up some useful git settings
- sets up some playwright settings for later

{
    "terminal.integrated.defaultProfile.windows": "Git Bash",
    "prettier.printWidth": 200,
    "files.autoSave": "afterDelay",
    "editor.formatOnPaste": true,
    "editor.formatOnSave": true,
    "explorer.confirmDelete": false,
    "typescript.updateImportsOnFileMove.enabled": "always",
    "git.autofetch": true,
    "git.enableSmartCommit": true,
    "editor.wordWrapColumn": 160,
    "playwright.updateSnapshots": "all",
    "playwright.env": {},
    "playwright.reuseBrowser": true,
    "playwright.showTrace": false,
    "git.confirmSync": false,
    "editor.defaultFormatter": "esbenp.prettier-vscode",
    "[typescript]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    },
    "[json]": {
        "editor.defaultFormatter": "esbenp.prettier-vscode"
    }
}

## Help:

# node.js (Typescript + Javascript)

- https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html (the actual typescript documentation)
- https://www.w3schools.com/js/default.asp (javascript - a lot of the typescript code is just javascript underneath with special syntax or just plain javascript so this is very useful!)
- https://www.w3schools.com/typescript/ (typescript)
- https://www.geeksforgeeks.org/typescript/ (typescript)

# Visual Studio Code

- https://code.visualstudio.com/docs/getstarted/introvideos (see all VS Code tutorials to learn about the IDE we use)

# Playwright

- https://playwright.dev/docs/intro (the actual documentation, this can help you with everything about Typescript!)
- https://www.youtube.com/watch?v=iTIxEZng-rc&list=PLXgRgGX8-5UVm9yioRY329rfcfy3MusiY (good typescript video tutorials)

# GIT

- https://www.youtube.com/watch?v=bSPSLU5T6zQ&list=PLXgRgGX8-5UWV3W9f48U7wJ1U1zixITsl (good video tutorials on GIT about 1h 30min long total)

# Locator Browser Addons

- Selectors Hub
- LetXpah
