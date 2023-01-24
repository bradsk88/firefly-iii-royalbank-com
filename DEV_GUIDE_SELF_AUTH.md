# Alternative: Self-Authed Extension

It is highly recommended to use the [Hub Extension](
https://github.com/bradsk88/firefly-iii-chrome-extension-hub
) to handle logging in to Firefly III.

However, you **can** log your extension in directly by following these steps:
1. Update your `manifest.json` to include:
   ```json
   "permissions": {
     ... existing permissions ...
     "identity",
   },
   "host_permissions": ["<all_urls>"]
   ```
2. Install the extension in your Chromium-based browser (see [Installation](
   DEV_GUIDE.md#Installation
   ))
3. Open the extension's "options" page. Either from the "puzzle piece" in the
   chrome toolbar or from the [chrome://extensions](chrome://extensions) page.
4. Use the OAuth form to log in to Firefly III. Again, this is not recommended,
   so you're on your own.