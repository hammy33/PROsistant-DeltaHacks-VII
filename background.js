console.log("Background running!");

chrome.browserAction.onClicked.addListener(buttonClicked);

function buttonClicked() {
    console.log("button clicked");
};

chrome.storage.sync.get("initialTime", function(seconds) {
	console.log("Background timer starting");
	setInterval(function() { tick(seconds); }, 1000);
});

function tick(seconds) {
  var min = Math.floor(seconds / 60);
  var sec = seconds - (min * 60);

  if (sec < 10) {
    sec = "0" + sec;
  };
  if (seconds === 0) {
    chrome.tabs.update({activeTabId});
  };

  chrome.storage.sync.set({"time": seconds}, function() {
  	console.log("Current Timer: " + seconds);
  });

  seconds--;
};