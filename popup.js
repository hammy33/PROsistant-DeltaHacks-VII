//console.log('Hello World!')

document.getElementById('HomeButton').addEventListener('click', function() {
  console.log('HelloWorld!')
//  openPopUp('HomeButton');
});

function openPopUp(evt, tabName) {
  var i, tabcontent, tablinks;
  // remove all tab content
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}