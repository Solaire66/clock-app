function setTime() {
    const today = new Date();
    const hour = today.getHours();
    const minute = today.getMinutes();
    const second = today.getSeconds();

    const formatedMinute = checkTime(minute);
    const formatedSecond = checkTime(second);

    document.getElementById( "clock" ).innerHTML = hour + ":" + formatedMinute + ":" + formatedSecond;
    const time = setTimeout( function(){ setTime() }, 500 );
}

function checkTime(i) {
    if ( i < 10 ) {
        i = "0" + i;
    }
    return i
}

function setDate() {
    const hoy = new Date();
    const year = hoy.getFullYear();
    const month = hoy.getMonth() + 1;
    const day = hoy.getDate();

    const formatedMonth = checkTime(month)
    const formatedday = checkTime(day)

    document.getElementById( "date" ).innerHTML = formatedday + "/" + formatedMonth + "/" + year;
    const dia = setTimeout( function(){
        setDate() 
    }, 500 );
}

function checkTime(i) {
    if ( i < 10 ) {
        i = "0" + i;
    }
    return i;
}