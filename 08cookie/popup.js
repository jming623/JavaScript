/* 쿠키생성, 쿠키확인 함수를 선언 */

    var cookieName = "cookie1";
    var cookieValue = "popupCookie";
    var date = new Date();
    date.setDate(date.getDate() + 1);

    //쿠키생성
    function createCookie() {
        var cookie = "";
        cookie += (cookieName+"="+cookieValue+";");
        cookie += ("expires="+date+";");

        console.log(cookie);
        
        document.cookie = cookie;
    }

    //쿠키확인 (있으면 1반환 없으면 -1반환)
    function getCookie(){
        
        console.log(document.cookie);
        
        var cookies = document.cookie.split(";");

        for( var i in cookies){
            if(cookies[i].indexOf(cookieName)!=-1){
                console.log("finding");
                return 1;
            }
        }
        return -1;
    }

    /* 선생님풀이 */

    /* 
        function createCookie(name, value){ //이렇게 해두면 다른곳에서 재활용 할 수 있다.

            //쿠키이름,쿠키값, 만료시간

            var date = new Date();
            date.setDate( date.getDate() + 1);

            var cookie = "";
            cookie += name + "=" + value + ";";
            cookie += "exprires=" + date;

            document.cookie = cookie;
        } 
    
        function getCookie(name){
            var cookies = document.cookie.split(";");

            for(var i in cookies){
                if(cookies[i].indexOf(name)!= -1){
                    return cookie[i].replace(" ","").replace(name+"=",""); //쿠키값리턴
                }

            }
        }
    
    
    
    
    
    */