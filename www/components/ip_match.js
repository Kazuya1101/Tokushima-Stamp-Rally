// document.addEventListener("deviceready", onDeviceReady, false);
//     function onDeviceReady() {
//       console.log(device.uuid);
//       $(".uuid").text(device.uuid);
//     }
    
    $(function(){
        $(".st").text();
        $.ajaxSetup({ async: false });
        $.getJSON("http://www48.atpages.jp/~korenosuke/testAPI/",function(data){
            console.log(data);
            $(".spot").text(data["SPOT"]);
            spot_v = data["SPOT"];
            $(".ip").text(data["IP"]);
            $(".status").text(data["STATUS"]);
            var key = localStorage.getItem('spot');
            if(!key){
                localStorage.setItem('spot', data["SPOT"]);    
            }else{
                $(".st").text(key);
            }
        });
        if (ip_list[now-1]==spot_v) {
            nextStamp();
        }
    })