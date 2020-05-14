"use strict";

/*
   New Perspectives on HTML5, CSS3 and JavaScript 6th Edition
   Tutorial 11
   Case Problem 2

   Author: Matthew Steuerer
   Date: 4/28/2020  
   
   Filename: mt_calc.js
	
   Functions List:

   init()
      Initializes the contents of the web page and sets up the
      event handlers
      
   buttonClick(e)
      Adds functions to the buttons clicked within the calcutlor
      
   calcKeys(e)
      Adds functions to key pressed within the calculator window 
      
   eraseChar(textStr)
      Erases the last character from the text string, textStr
      
   evalEq(textStr, decimals) 
      Evaluates the equation in textStr, returning a value to the number of decimals specified by the decimals parameter

   lastEq(textStr) 
      Returns the previous expression from the list of expressions in the textStr parameter

*/

// Run the init function that actually allows use and function of the calculator 
window.onload = init;

/* =========================================================================== */

function init() {
   // calcButtons variable will hold collection of page elements with the class value "calcButton"
   var calcButtons = document.getElementsByClassName("calcButton");

   // Loop through the calcButtons collection and (for each button) run the buttonClick()
   // function in response to the click event 
   for (var i = 0; i < calcButtons.length; i++) {
      calcButtons[i].onclick = buttonClick;
   }

   // Run the calcKeys() function in response to the keydown event occuring within the 
   // element with the ID "calcWindow" 
   document.getElementById("calcWindow").addEventListener("keydown", calcKeys);
}

/* =========================================================================== */

// Purpose of this function is to change what appears in the calculator window 
// when the user clicks the calculator buttons 

function buttonClick(e) {

   // calcValue variable will have the value attribute of the calcWindow text area box
   var calcValue = document.getElementById("calcWindow").value;

   // calcDecimal variable will have the value attribute of the decimals input box 
   var calcDecimal = document.getElementById("decimals").value;

   // buttonValue variable will have the value attribute of the event object target 
   var buttonValue = e.target.value;  

   // switch-case structure for the possible values of the buttonValue variable 
   switch (buttonValue) {
      case "del":
         // delete the contents of the calculate window by changing calcValue to an empty string
         calcValue = "";
      break;
      case "bksp":
         // erase the last character in the calculator window by changing calcValue to the 
         // value return by the eraseChar() function using calcValue as the parameter 
         calcValue = eraseChar(calcValue);
      break;
      case "enter":
         // calculate the value of the current expression by changing calcValue to...
         calcValue += " = " + evalEq(calcValue, calcDecimal) + "\n";
      break;
      case "prev":
         // copy the last equation in the calculator window by changing calcValue 
         // to the value returned by the lastEq() function using calcValue as a parameter
         calcValue = lastEq(calcValue);
      break;
      default:
         // otherwise, append the calculator button character to the calculator window by 
         // letting calcValue equal calcValue plus buttonValue
         calcValue = calcValue + buttonValue;
   }

   // set the value attribute of the calcWindow text area box to calcValue
   document.getElementById("calcWindow").value = calcValue;

   // run this command to put cursor focus within the calculator window
   document.getElementById("calcWindow").focus();
}

/* ===================================================================== */

// Purpose of this function is to program the actions that will happen when user presses 
// the delete, enter, and and up arrow keys 
// This method currently does not work 

function calcKeys(e) {

   // declare calcValue and calcDecimal variables again (new local scope)
   var calcValue = document.getElementById("calcWindow").value;
   var calcDecimal = document.getElementById("decimals").value;

   var keyValue = e.key;
   console.log(keyValue); // trying to debug, 

   // another switch statement for different values of the key attribute of the event object
   switch (keyValue) {
      case "Delete":
         // erase the contents of the calculator window by changing calcValue to empty string
         calcValue = "";
      break;
      case "Enter":
         // evaluate the expression 
         calcValue += " = " + evalEq(calcValue, calcDecimal);
      break;
      case "ArrowUp":
         calcValue += lastEq(calcWindow.value);
         // prevent the browser from performing the default action in response to 
         // the user pressing up arrow key 
         e.preventDefault();
      break;
      default:
         // otherwise, append the calculator button character to the calculator window by 
         // letting calcValue equal calcValue plus keyValue
         //calcValue = calcValue + keyValue; 
   }

   // set value attribute of calcWindow text area box to calcValue 
      document.getElementById("calcWindow").value = calcValue;     
}




/* ===================================================================== */

function eraseChar(textStr) { 
   return textStr.substr(0, textStr.length - 1);
}

function evalEq(textStr, decimals) {
   var lines = textStr.split(/\r?\n/);
   var lastLine = lines[lines.length-1];
   var eqValue = eval(lastLine);
   return eqValue.toFixed(decimals);
}  

function lastEq(textStr) {
   var lines = textStr.split(/\r?\n/);
   var lastExp = lines[lines.length-2];
   return lastExp.substr(0, lastExp.indexOf("=")).trim();
}