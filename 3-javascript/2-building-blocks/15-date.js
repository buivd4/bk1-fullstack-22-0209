// Date and time

//Sat Oct 15 2022 13:05:41 GMT+0700 (+07)
var d = new Date();
//1542563338408 miliseconds passed since 1970
Number(d);
Date("2017-06-23"); // date declaration
Date("2017"); // is set to Jan 01
Date("2017-06-23T12:00:00-09:45"); // date - time YYYY-MM-DDTHH:MM:SSZ
Date("June 23 2017"); // long date format
Date("Jun 23 2017 07:45:00 GMT+0100 (Tokyo Time)"); // time zone

var d = new Date();
a = d.getDay(); // getting the weekday

d.getDate(); // day as a number (1-31)
d.getDay(); // weekday as a number (0-6)
d.getFullYear(); // four digit year (yyyy)
d.getHours(); // hour (0-23)
d.getMilliseconds(); // milliseconds (0-999)
d.getMinutes(); // minutes (0-59)
d.getMonth(); // month (0-11)
d.getSeconds(); // seconds (0-59)
d.getTime(); // milliseconds since 1970

d.setDate(d.getDate() + 7); // adds a week to a date

d.setDate(1); // day as a number (1-31)
d.setFullYear(2022); // year (optionally month and day)
d.setHours(12); // hour (0-23)
d.setMilliseconds(100); // milliseconds (0-999)
d.setMinutes(3); // minutes (0-59)
d.setMonth(11); // month (0-11)
d.setSeconds(9); // seconds (0-59)
d.setTime(0); // milliseconds since 1970)