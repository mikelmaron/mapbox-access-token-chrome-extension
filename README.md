# Mapbox Access Token Chrome Extension
This Chrome extension detects any URL to the Mapbox API with "access_token" in the path and shows a popover window that displays the value of the access token argument in the URL. It also provides a "Copy to clipboard" button to easily copy the access token.

## Installation
* Download or clone this repository to your local machine.
* Open Google Chrome and navigate to chrome://extensions.
* Enable the Developer mode toggle in the top right corner.
* Click the Load unpacked button in the top left corner and select the directory where you downloaded or cloned the repository.

The extension should now be installed and enabled in your Chrome browser.

## Usage
* Navigate to any website that uses the Mapbox API with an access token in the URL.
* Copy the token from the popup or from console.

## Credits
Based on [Andrew Turner's example](https://github.com/ajturner/chrome-opendata-detector) with ChatGPT prompt:

`I want you to build a Chrome Extension. You will write the code as well as build and installation instructions.

The first extension we are going to build should watch the network traffic for any url to the mapbox api with "access_token" in the path. If there is a URL that matches then the extension should show a popover window that includes the value of one access token argument in a URL detected in the network traffic.`