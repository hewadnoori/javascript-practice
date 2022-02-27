const HTMLBadges = prompt('How many HTML badges do you have?');
const CSSBadges = prompt('How many CSS badges do you have?');

//You can use parseInt() to convert whole string numbers into an integer and parseFloat() for numbers like 3.14
//const totalBadges = parseInt(HTMLBadges) + parseInt(CSSBadges); 

//A MUCH BETTER WAY IS USING + which can convert to int or float
const totalBadges = +HTMLBadges + +CSSBadges;

console.log(totalBadges);

