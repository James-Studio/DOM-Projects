function check_format(time){
    if (time.toString().length != 2){
        var time_str = "0" + time.toString(); 
    }
    else{
        var time_str = time.toString(); 
    }
    console.log(time_str)
    return time_str
}

function show_time(){
    var today = new Date(); // new : Call constructor !
    var month = check_format(today.getMonth());
    var day = check_format(today.getDate());
    var hour = check_format(today.getHours());
    var min = check_format(today.getMinutes());
    var sec = check_format(today.getSeconds());
    var full_date = today.getFullYear()+'-'+month+'-'+day+ "  "+hour+":"+min+":"+sec;
    
    // show the time in html
    document.getElementById('time_text').innerHTML = full_date;
}

setInterval(show_time, 500);