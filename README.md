
# Istallation and Set Up

## Pre-condition:
- istall Ide (Visual Studio Code)
- install nodeJS LTS (latest stable version) from `https://nodejs.org/en/download`
- install GIT from `https://git-scm.com/install/windows`
- how to set up GIT `https://git-scm.com/book/ms/v2/Getting-Started-First-Time-Git-Setup`

## Install VS Code extensions:
- Playwright (publisher: Microsoft)
- ESLint (publisher: Microsoft)
- Live Preview (publisher: Microsoft)
- Prettier (publisher: Prettier)

## Run the following commands in git-bash terminal to install poject packages:
- `npm install` -> install all project packages
- `npx ts-node -v` -> if it asks you to install ts-node Accept, try again and you should see a version in your console like 'v10.9.2'
- `npm init playwright@latest`  OR  `npx playwright install --with-deps` -> install Plawright with prompts or silent

## Proxy set up (only use if you cant run the commands above):
Execute the following commands in git-bash terminal:
Note!: You need to update these settings each time you change your password!
Substitude "user" and "pass" with your credentials:
- `npm config set proxy http://user.pass.proxy.url.bg:9999` -> set proxy for http
- `npm config set https-proxy http://user.pass.proxy.url.bg:9999` -> same as above but for https
- `npm config set strict-ssl=false` -> some proxies need to ingore strict ssl certificates, use this if needed

## Set up VS Code User Settings with:
- ctr+p (to open VS Code search menu)
- type: ">Open User Settings" and select the JSON option (search for command to execute which contains this text)
- note!: after this you will have to set up your IDE's colour scheme again

## Copy the below settings and replace your JSON file with the JSON below:
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


# Playwright commands:

## Select tests to execute:
- `npx playwright test` -> runs all tests in project
- `npx playwright test tests/lesson-11-playwright-intro` -> run all tests in all spec files in a specific directory and its subdirectories
- `npx playwright test landing login` -> run files that have "landing" or "login" in the file name
- `npx playwright test scenario.example.spec.ts` -> run specific spec file tests
- `npx playwright test -g "Basic Scenario"` -> run a test with a specific title
- `npx playwright test --grep "@sanity"` -> run only tests with the tag "@sanity"
- `npx playwright test --grep-invert "@sanity"` -> run tests which DON'T have the tag "@sanity"
- `npx playwright test --grep "@sanity|@regression"` -> run all tests with the tag "@sanity" OR the tag "@regression"
- `npx playwright test --grep "(?=.*@sanity)(?=.*@regression)"` -> run only tests which have both the tag "@sanity" AND the tag "@regression"

## Test execution parameters:
- `--headed` -> forces browser headed (visual) mode 
- `--debug` -> run tests in debug mode
- `--ui` -> runs test in ui mode
- `--trace on` -> forces trace capture mode
- `--workers=1` -> you can change the number of workers with this command, you can set workers to 1 to disable parallel execution
- `--project chrome` -> forces tests to execute with chrome browser
- `--last-failed` -> run only the tests that failed in the last test run, first run your tests and then run them again with this flag

## Custom execution parameters:
- `ENV=banker20 npx playwright test` -> pass enviroment value through terminal command parameter "ENV" and use its base url for all tests)
- `LANG=en npx playwright test` -> pass language global value through terminal command parameter "LANG" and use that language for all tests)
- `SLOWMO=500 npx playwright test` -> pass a global value through terminal command parameter "SLOWMO" to make headed tests pause 500 miliseconds between actions for better visibility of execution. Deafault value is 0 when this parameter is skipped.

## Example composite test run command with most of the above:
- `ENV=staging LANG=bg SLOWMO=500 npx playwright test --grep "@bankerBG" --headed --trace on`

## Reports:
- `npx playwright show-report` -> show report of last execution
- `npx playwright show-trace path/to/trace.zip` -> open the trace tool for a specific scenario


# Help - Documentation and Video Tutorials:

## node.js (Typescript + Javascript)
- `https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html` -> the actual typescript documentation
- `https://www.w3schools.com/js/default.asp` -> javascript - a lot of the typescript code is just javascript underneath with special syntax or just plain javascript so this is very useful!
- `https://www.w3schools.com/typescript/` -> same as above but specifically for typescript additions to javascript
- `https://www.geeksforgeeks.org/typescript/` -> typescript examples and tutorials

## Visual Studio Code
- `https://code.visualstudio.com/docs/getstarted/introvideos` -> see all VS Code tutorials to learn about the IDE we use

## Playwright
- `https://playwright.dev/docs/intro` -> the actual documentation, this can help you with everything about Typescript! (RTFM!)
- `https://www.youtube.com/watch?v=iTIxEZng-rc&list=PLXgRgGX8-5UVm9yioRY329rfcfy3MusiY` -> good Typescript + Playwright video tutorials

## GIT
- `https://www.youtube.com/watch?v=bSPSLU5T6zQ&list=PLXgRgGX8-5UWV3W9f48U7wJ1U1zixITsl` -> good video tutorials on GIT about 1h 30min long total

## Locator Browser Addons
- Selectors Hub
- LetXpah




