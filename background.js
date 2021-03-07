var mySeconds;

console.log("Background running!");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked() {
    console.log("button clicked");
};

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.greeting == 'a') {
        chrome.storage.sync.get("initialTime", function(obj) {
            console.log("Background timer starting", obj["initialTime"]);
            mySeconds = obj["initialTime"];
        });
        setInterval(tick, 1000);
    };
});

function tick() {
    var min = Math.floor(mySeconds / 60);
    var sec = mySeconds - (min * 60);

    if (sec < 10) {
        sec = "0" + sec;
    };
    if (sec === 0) {
        chrome.tabs.update({activeTabId});
    };

    chrome.storage.sync.set({"timeMinutes": min});
    chrome.storage.sync.set({"timeSeconds": sec});
    chrome.runtime.sendMessage({greeting: 'b'});
    console.log(min, sec);
    mySeconds--;
};