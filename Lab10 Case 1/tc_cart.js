"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 1

   Author: Matthew Steuerer
   Date: 4/20/2020  
   
   Filename: tc_cart.js
	
*/

// Declare a variable named orderTotal and initialize to 0

var orderTotal = 0;

// Declare a variable named cartHTML that will contain the HTML code
// contents of the shopping cart, which will be displayed as a table 

var cartHTML = "<table><tr><th>Item</th><th>Description</th><th>Price</th><th>Qty</th><th>Total</th></tr>";

// Create a for loop that loops through the entries in the item array 

for (var i = 0; i < item.length; i++) {

	// item is the current value from the item array
	// Pick the corresponding product image 
	cartHTML += "<tr><td><img src='tc_" + item[i] + ".png' alt='" + item[i] +"' /></td>";

	// Pick the corresponding product description
	cartHTML += "<td>" + itemDescription[i] + "</td>";

	// Add the correct price 
	cartHTML += "<td>" + itemPrice[i] + "</td>";

	// Add how many of each product they are purchasing 
	cartHTML += "<td>" + itemQty[i] + "</td>"; 

	// Total cost of item based on quantity of item 
	var itemCost = itemPrice[i] * itemQty[i];

	cartHTML += "<td>$" + itemCost + "</td></tr>";

	// Running total of customer's full cart 
	orderTotal += itemCost;
}

// Complete the shopping cart table 
cartHTML += "<tr><td colspan='4'>Subtotal</td><td>$" + orderTotal + "</td></tr></table>";

// Find the div the javascript will write to and insert the shopping cart HTML 
document.getElementById("cart").innerHTML = cartHTML;




