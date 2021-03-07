console.log("Background running!");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked() {
    console.log("button clicked");
};