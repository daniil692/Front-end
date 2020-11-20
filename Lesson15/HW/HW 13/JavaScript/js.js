let totalSec = 666666;
const secInMinute = 60;
const secInHour = 3600;
const secInDay = 86400;

let sec = totalSec%secInMinute;
let min = (totalSec%secInHour-totalSec%secInMinute)/secInMinute;
let hours = (totalSec%secInDay-totalSec%secInHour)/secInHour;
let days = (totalSec-totalSec%secInDay)/secInDay;



alert(totalSec + " seconds equally " + days +" days "+ hours +" hours "+ min +" minutes "+ sec +" seconds "); 