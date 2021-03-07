  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
     var activeTab = tabs[0];
     var activeTabId = activeTab.url; 

  });

  // var hours = 0;
  // var minutes = 0;
  // var seconds = 0;
  // var interval = null;

  // document.getElementById('Hours').addEventListener('change', e => {
  //     hours = +e.target.value;
  // });

  // document.getElementById('Minutes').addEventListener('change', e => {
  //     minutes = +e.target.value;
  // });

  // document.getElementById('Seconds').addEventListener('change', e => {
  //     seconds = +e.target.value;
  // });

  // document.getElementById('submit').addEventListener('click', () => {
  //     var timeInSeconds = (hours * 60 * 60) +
  //         (minutes * 60) +
  //         seconds;

  //     var displayTime = () => {
  //         var displayHours = Math.floor(timeInSeconds / (60 * 60));
  //         var remainder = timeInSeconds - (displayHours * 60 * 60);
  //         var displayMinutes = Math.floor(remainder / 60);
  //         var displaySeconds = remainder - (displayMinutes * 60);
  //         document.getElementById("Timer").innerHTML = displayHours + " : " + displayMinutes + " : " + displaySeconds;
  //     };
  //     interval = setInterval(() => {
  //         displayTime();
  //         timeInSeconds -= 1;
  //         if (timeInSeconds < 0) {
  //             clearInterval(interval);
  //         }
  //     }, 1000);
  // });
  var mySeconds;
  var intervalHandle;

  function resetPage(){
    document.getElementById("Timer").style.display="none";  
    
    
  }
  function tick(){
    var timeDisplay=document.getElementById("time");
    
    var min=Math.floor(mySeconds/60);
    var sec=mySeconds-(min*60);
    
    if (sec < 10) {
      sec="0"+sec;
    }
    
    var message=min.toString()+":"+sec;
    
    timeDisplay.innerHTML=message;
    
    if(mySeconds===0){
      chrome.tabs.update(activeTabId)
    }
    mySeconds--;
    
    
  }
  function startCounter(){
    var myInput=document.getElementById("minutes").value;
    if (isNaN(myInput)){
      alert("Type a valid number please");
      return;
    }
    mySeconds=myInput*60;
    
    intervalHandle=setInterval(tick, 1000);
    
    document.getElementById("inputArea").style.display="Your break is up!";
    
    
  }


  window.onload=function(){
    var myInput=document.createElement("input");
    myInput.setAttribute("type","text");
    myInput.setAttribute("id","minutes");
    
    var myButton=document.createElement("input");
    myButton.setAttribute("type","button");
    myButton.setAttribute("value","submit");
    
    myButton.onclick=function(){
      startCounter(); 
      
    }
    document.getElementById("Timer").appendChild(myInput);
    document.getElementById("Timer").appendChild(myButton);
    
    
  }
