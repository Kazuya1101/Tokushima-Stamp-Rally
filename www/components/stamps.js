var now;
var stamps;

var limit = 6;
var daishi;

function loadLS(){
  if (localStorage.getItem('now') == null){
    localStorage.setItem("now", 1);
  }
  now = localStorage.getItem('now');
  daishi = document.getElementById("daishi");
  if (localStorage.getItem('now') == limit){
    q = '<a href="./clear.html"> <img id="daishi_pic" src="./image/base_' + limit + '/' + limit + '.gif"> </a>';
  }
  else{
    q = '<img id="daishi_pic" src="./image/base_' + limit + '/' + now + '.gif">';
  }
  daishi.innerHTML = q;
}


function nextStamp() {
  now = localStorage.getItem('now');
  if (now == limit){
    now = limit;
  }
  else{
    now = parseInt(now) + 1;
  }
  localStorage.setItem("now", now);
  window.location.reload();
}
    
function reset() {
  localStorage.removeItem('now');
  localStorage.removeItem('stamps');
  now = localStorage.getItem('now');
  start = localStorage.getItem('stamps');
  console.log(now);
  console.log(start);
  window.location.reload();
}

loadLS();
