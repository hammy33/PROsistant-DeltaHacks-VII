  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
     var activeTab = tabs[0];
     var activeTabId = activeTab.url; 

  });

  var hours = 0;
  var minutes = 0;
  var seconds = 0;
  var interval = null;

  document.getElementById('Hours').addEventListener('change', e => {
      hours = +e.target.value;
  });

  document.getElementById('Minutes').addEventListener('change', e => {
      minutes = +e.target.value;
  });

  document.getElementById('Seconds').addEventListener('change', e => {
      seconds = +e.target.value;
  });

  document.getElementById('submit').addEventListener('click', () => {
      var timeInSeconds = (hours * 60 * 60) +
          (minutes * 60) +
          seconds;

      var displayTime = () => {
          var displayHours = Math.floor(timeInSeconds / (60 * 60));
          var remainder = timeInSeconds - (displayHours * 60 * 60);
          var displayMinutes = Math.floor(remainder / 60);
          var displaySeconds = remainder - (displayMinutes * 60);
          document.getElementById("Timer").innerHTML = displayHours + " : " + displayMinutes + " : " + displaySeconds;
      };
      interval = setInterval(() => {
          displayTime();
          timeInSeconds -= 1;
          if (timeInSeconds < 0) {
              clearInterval(interval);
          }
      }, 1000);
  });