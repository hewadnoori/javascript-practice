const stringToShout = prompt("What do you want to shout?");
const shout = stringToShout.toUpperCase();
const shoutMessage = `<h2>The message to shout is: ${shout}!!</h2>`;

document.querySelector('main').innerHTML = shoutMessage; // this selects the main element and changes the inner html to the string that is stored in the shoutmessage var.