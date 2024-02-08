
function createCookie(name, value) {
    //var milis = Date.now() + 3600000;
    //var time = new Date(milis);

    var time = new Date();
    time.setDate(   time.getDate() + 1 ); //date.getDate() 오늘 하루 날짜 (+1 하면 현재 시간으로부터 하루가 더해짐)

    document.cookie = name + "=" + value + "; expires=" + time.toUTCString();

}



function findCookie(find) {

    var coo = document.cookie;
    var arr = coo.split("; "); //쿠키 스플릿

    for(var i=0; i<arr.length; i++) {
        if(arr[i].indexOf( find + "=") != -1 ){ 
            console.log( arr[i].replace(find + "=", ""))
            return true; //쿠키이름이 있다면 true반환
        }
    }


}


