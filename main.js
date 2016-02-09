var INCHES_TO_CM = 2.54;
var CM_TO_METERS = 0.01;
var FEET_TO_INCHES = 12;

function start(){
	engToMetric(6,4);
}

function engToMetric(first,second){
    var finch = first * FEET_TO_INCHES;
    var incm = (finch + second) * INCHES_TO_CM;
    var met = incm * CM_TO_METERS;
    alert("Your height in meters is "+met+".");
    println("Your height in meters is "+met+".");
}
