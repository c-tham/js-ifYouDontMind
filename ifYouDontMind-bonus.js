var HOUR = 12;
var MINUTES = 5;
var period = "PM";

var clockMessage = "";
var dayMessage = "";


function timeclock () {
    if (MINUTES == 0) {
        clockMessage = "It's "+HOUR;
    } else if (MINUTES == 5) {
        clockMessage = "It's 5 past "+HOUR;
    } else if (MINUTES == 15) {
        clockMessage = "It's quarter after "+HOUR;
    } else if (MINUTES == 30) {
        clockMessage = "It's half past "+HOUR;
    } else if (MINUTES == 45) {
        HOUR++;
        clockMessage = "It's quarter to  "+HOUR;
    } else if (MINUTES == 55) {
        HOUR++;
        clockMessage = "It's 5 to "+HOUR;
    } else {
        clockMessage = "It's just after "+HOUR;
    }
    
    if (period == "AM" || period == "am") {
        if (HOUR == 12) {
            dayMessage = " midnight";
        } else {
            dayMessage = " in the morning";
        }
    } else {
        if (HOUR == 12) {
            dayMessage = " noon";
        } else if (HOUR > 6) {
            dayMessage = " at night"
        } else {
            dayMessage = " in the evening";
        }
    }
}

timeclock();
console.log("time - "+HOUR+":"+MINUTES+" "+period);
console.log(clockMessage+dayMessage);


