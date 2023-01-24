# Development Guide

## Initialization
Before you do anything, install the dependencies:
```bash
npm install;
```

## Installation
In order to install this extension for debugging, follow these steps:
1. Run `npm run build` in the project's root directory
2. Open [chrome://extensions](chrome://extensions) in your Chromium-based browser
3. Enable "development mode" if it's not already enabled
4. Click "load unpacked" and select this project's root directory 

## Logging In
It is highly recommended to use the [Hub Extension](
https://github.com/bradsk88/firefly-iii-chrome-extension-hub
). However, you **can** log your extension in directly by following these steps: 
1. Install the extension in your Chromium-based browser (see [Installation](
    DEV_GUIDE.md#Installation
   ))
2. Open the extension's "options" page. Either from the "puzzle piece" in the 
   chrome toolbar or from the [chrome://extensions](chrome://extensions) page.

For most banks, creating your own Chrome Extension is fairly straight-forward.

In summary, address all of the TODOs in this codebase to work with your bank's
website. I recommend the following order:

## Accounts
Address the TODOs in every "accounts" file. (e.g. `content_scripts/accounts.tsx`, 
`content_scripts/scrape/accounts.ts`).  
Once this is complete, there should be a new button on your bank's "accounts" 
page and you should be able to click it to export 