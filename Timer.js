chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
   var activeTab = tabs[0];
   var activeTabId = activeTab.url; 
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
    chrome.storage.sync.set({"initialTime": initSeconds}, function() {
      console.log("Initial Time for timer: " + initSeconds);
      startCounter(initSeconds);
    };
  };
  document.getElementById("Timer").appendChild(myInput);
  document.getElementById("Timer").appendChild(myButton);
};

function startCounter(seconds) {
  if (isNaN(seconds)) {
    alert("Type a valid number please");
    return;
  };
  var intervalHandle = setInterval(tick, 1000);
  document.getElementById("minuteInput").value = "";
};

function tick(){
  var timeDisplay=document.getElementById("TimerButton");
  
  chrome.storage.sync.get("time", function(sec) {
    var min = Math.floor(sec / 60);
    var message = min.toString() + ":" + sec;
    timeDisplay.innerHTML = message;
  });
};

function resetPage(){
  document.getElementById("Timer").style.display="none";  
};