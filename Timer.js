chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
   var activeTab = tabs[0];
   var activeTabId = activeTab.url; 
});

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.greeting == 'b') {
    tick();
  };
});

window.onload = function() {
  // Dynamically created HTML
  var myInput = document.createElement("input");
  myInput.setAttribute("type","text");
  myInput.setAttribute("id","minuteInput");

  var myButton = document.createElement("input");
  myButton.setAttribute("type","button");
  myButton.setAttribute("value","submit");

  myButton.onclick = function() {
    var initSeconds = myInput.value * 60;
    chrome.storage.sync.set({"initialTime": initSeconds});
    chrome.runtime.sendMessage({greeting: 'a'});
    console.log("Initial Time for timer: " + initSeconds);
    startCounter(initSeconds);
  };
  document.getElementById("Timer").appendChild(myInput);
  document.getElementById("Timer").appendChild(myButton);
};

function startCounter(seconds) {
  if (isNaN(seconds)) {
    alert("Type a valid number please");
    return;
  };
  //var intervalHandle = setInterval(tick, 1000);
  document.getElementById("minuteInput").value = "";
};

function tick(){
  var min, sec;
  var timeDisplay=document.getElementById("TimerButton");
  chrome.storage.sync.get("timeMinutes", function(obj) {
    min = obj["timeMinutes"];
    console.log(min);
  });
  chrome.storage.sync.get("timeSeconds", function(obj) {
    sec = obj["timeSeconds"];
    console.log(sec);
  });
  timeDisplay.innerHTML = "" + min + ":" + sec;
};

function resetPage(){
  document.getElementById("Timer").style.display="none";  
};