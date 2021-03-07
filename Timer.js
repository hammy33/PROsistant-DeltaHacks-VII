  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
     var activeTab = tabs[0];
     var activeTabId = activeTab.url; 

  });

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
    var myInput=document.getElementById("Timer").value;
    if (isNaN(myInput)){
      alert("Type a valid number please");
      return;
    }
    mySeconds=myInput*60;
    
    intervalHandle=setInterval(tick, 1000);
    
    document.getElementById("inputArea").style.display="none";
    
    
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
