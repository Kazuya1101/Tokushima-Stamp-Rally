    var now;
    var stamps;
    var ip_list = ["umigame","S_iPhone","oneplus2",NaN];
    if (localStorage.getItem('now')==null) {
      localStorage.setItem('now', 1);
      var start = [0,-1,-1,-1];
      var str = start.join(',');
      console.log(str);
      localStorage.setItem('stamps', str);
    }
    now = localStorage.getItem('now');
    console.log("読み込み："+now);
    stamps = localStorage.getItem('stamps').split(',').map(function (element) { return Number(element); });
    console.log(stamps);
    
    var btns = document.getElementById("btns");
    for (var i=0 ; i<stamps.length ; i++){
      var btn = "";
      btns = "";
      if (stamps[i]==0) {
        no = ("0" + (i+1)).slice(-2);
        btn = "<img onclick=\"location.href='./page1.html?key="+no+"'\" id='yazi' src='./materials/yazi/yazirushi_"+Number(now)+".png'>";
      }
      if (stamps[i]==-1) {
        btn = "<img id='yazi' src='./materials/yazi/yazirushi_x.png'>";
      }
      if (stamps[i]==1) {
        btn = "<img id='yazi' src='./materials/yazi/yazirushi_"+(i+1)+".png'>";
      }      
      btns = document.getElementById("btns");
      btns.innerHTML += btn;
      // console.log("hoge");
    }
    
    var clear;
    var num = stamps.length-1;
    if (Number(now)==5){
      clear = "<img onclick=\"location.href='./clear.html'\" id='yazi_c' src='./materials/yazi/yazirushi_clear.png'>";
      
    }
    else{
      clear = "<img id='yazi_c' src='./materials/yazi/yazirushi_clear_x.png'>";
    }
    btns = document.getElementById("btns");
    btns.innerHTML += clear;
    
    var now_str = ("0" + (now)).slice(-2);
    btns = document.getElementById("btns");
    btns.innerHTML += "<br><button type='button' onclick=\"location.href='./page1.html?key="+now_str
    +"'\" class='btn btn-primary'>AR</button>";
    
    var daishi = document.getElementById("daishi");
    var pic_num = Number(now)-1;
    var daishi_tag = "<img id='daishi-pic' src='./materials/syukuhaku_"+pic_num+".gif'>";
    daishi.innerHTML = daishi_tag;
    
    function nextStamp() {
      stamps[now-1] = stamps[now-1]+1;
      stamps[now] = stamps[now]+1;
      str = stamps.join(',')
      localStorage.setItem('stamps', str);
      now = Number(now)+1;
      localStorage.setItem('now', now);
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