var now;
var limit = localStorage.getItem('limit');
var character_limit = 2;
var chara_name = "character_" + limit;
var character = localStorage.getItem(chara_name);
if (character == null){
  localStorage.setItem(chara_name, 1);
  character = localStorage.getItem(chara_name);
}

var d_name = "now_" + limit;
var daishi;
var ar_btn;
function setLimit(lim){
  localStorage.setItem("limit", lim);
}

function loadLS(){
  if (localStorage.getItem(d_name) == null){
    localStorage.setItem(d_name, 0);
  }
  now = localStorage.getItem(d_name);
  daishi = document.getElementById("daishi");
  if (localStorage.getItem(d_name) == limit){
    q = '<a href="./clear.html"> <img id="daishi_pic" src="./image/' + character + '/limit_' + limit + '/' + limit + '.gif"> </a>';
  }
  else{
    q = '<img id="daishi_pic" src="./image/' + character + '/limit_' + limit + '/' + now + '.gif">';
  }
  daishi.innerHTML = q;
  
  var now_str = "" + now;
  ar_btn = document.getElementById("ar_btn");
  ar_btn.innerHTML = "<br><button type='button' onclick=\"location.href='./page1.html?key=" + now_str + "'\" class='btn btn-primary'>AR</button>";
}


function nextDaishi() {
  var c = parseInt(character);
  if (c == character_limit){
    c = character_limit;
  }
  else{
    c = c + 1;
  }
  localStorage.setItem(chara_name, c);
  localStorage.setItem(d_name, 0);
}

function nextStamp() {
  now = localStorage.getItem(d_name);
  if (now == limit){
    now = limit;
  }
  else{
    now = parseInt(now) + 1;
  }
  localStorage.setItem(d_name, now);
  window.location.reload();
}
    
function reset() {
  localStorage.removeItem(d_name);
  localStorage.removeItem(chara_name);
  now = localStorage.getItem(d_name);
  character = localStorage.getItem(chara_name);
  window.location.reload();
}

loadLS();
