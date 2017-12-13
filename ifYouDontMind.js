var hour = 8;
var minute = 15;
var period = "AM";

var clockMessage = "";
var dayMessage = "";

if (minute > 30) {
    hour++;
    clockMessage = "It's almost "+hour+" in the ";
} else {
    clockMessage = "It's just after "+hour+" in the ";
}

if (period == "AM" || period == "am") {
    dayMessage = "morning";
} else {
    dayMessage = "evening";
}

console.log(clockMessage+dayMessage);


