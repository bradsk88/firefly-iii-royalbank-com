# Firefly III Chrome Extension Base

This is a "template" for building chrome extensions that can scrape account and 
transaction data from banking websites and automatically push the data into an
instance of Firefly III.

This project exists as an alternative to the cloud-based banking APIs (E.g. 
plaid) in order to maximize privacy by keeping your banking data out of the 
hands of third parties.

## Capabilities
- Includes a menu for logging in to Firefly III with Oauth 2
- Provides code examples for interacting with the Firefly III API 

## Future Plans
Ideally, this project would use dependency injection, so you can provide your 
own "page scraping" service to satisfy a dependency interface, minimizing the 
amount of overlap between your code and the base code.

## Building your own extension

Fork this repo and use it as a base for your extension. This project is still 
in early development, so it may require a higher level of skill to utilize.