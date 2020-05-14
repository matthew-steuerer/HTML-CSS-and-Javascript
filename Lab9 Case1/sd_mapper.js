"use strict";
/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 9
   Case Problem 1

   Planisphere Script
   Author: Matthew Steuerer
   Date: 4/14/2020   

*/

/* Declare a variable named thisTime containing a Date
   object for February 3, 2018 at 3:15:28am 
   (note, javascript needs time entered in military format) */

var thisTime = new Date();

/* Use the toLocaleString() method to save the text of the 
   above variable in a variable called timeStr */
var dateStr = thisTime.toLocaleDateString();
var timeStr = thisTime.toLocaleTimeString();

document.getElementById("timeStamp").innerHTML = dateStr + " " + timeStr;

/* Create a variable called thisHour, using getHours() to 
   extract the hour value from the thisTime variable */ 

var thisHour = thisTime.getHours();

/* Create a variable named thisMonth using getMonth 
   to extract the month number from the thisTime variable */

var thisMonth = thisTime.getMonth();

/* Calculate the number of the map to use on the page with
   the forumula (2 * month + hour) % 24 and store it in a var */

var mapNum = (2*thisMonth + thisHour)%24;

/* Create a variable named imgStr that stores the string
   "<img src='sd_skyMAP.png' />" where MAP is value of 
   mapNum (hint: string concatentation) is necessary */

var imgStr = "<img src='sd_sky" + mapNum + ".png' />";

/* For the page element with the ID 'planisphere', use the 
   insertAdjacentHTML() to insert the value of the imgStr
   directly after the elements opening tag */

document.getElementById("planisphere").insertAdjacentHTML("afterbegin", imgStr);

