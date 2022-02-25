const adjective = prompt("think of an adjective, give me one word.");
const verb = prompt("think of a verb, give me one word.");
const noun = prompt("think of a noun, give me one word");
const story = `<p>There was once a ${adjective} programmer who wanted to use JavaScript to ${verb} the ${noun}.</p>`
document.querySelector('main').innerHTML = story;