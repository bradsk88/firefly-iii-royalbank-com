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
). It has step-by-step login wizard to help you log in, and it can auth all of
your individual bank extensions. 

Using the hub also allows your individual extension to request fewer permissions - 
which makes it easier to get your extension published in the Chrome Web Store.

Alternative: [Self-Authed Extension](./DEV_GUIDE_SELF_AUTH.md)

## Implementation

For most banks, creating your own Chrome Extension is fairly straight-forward.

In summary, address all of the TODOs in this codebase to work with your bank's
website. 

I recommend the following order:

## Manifest
Update the values in [manifest.json](manifest.json) to be specific to your 
extension.

## Accounts
Address the TODOs in every "accounts" file. (e.g. `content_scripts/accounts.tsx`, 
`content_scripts/scrape/accounts.ts`).  
Once this is complete, there should be a new button on your bank's "accounts" 
page. And you should be able to click it to export your accounts to FireFly III.

Address **all the TODOs**. Leaving any behind will probably make things not work.

You can check the Network log on your Chrome Extension's "service worker" window.

## Transactions
Address the TODOs in every ""