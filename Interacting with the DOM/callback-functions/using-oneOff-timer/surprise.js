const surpriseSection = document.getElementById('surprise');

//sets the random time the function executes between 1-4s
const randomTime = Math.random() * 4000;
//setTimeout uses a callback and the time to set the event occurance, it could be 1 second(1000) but we used a randomTime variable.
setTimeout(() => {
    surpriseSection.textContent = '🎉 Surprise! 🎉';
}, randomTime);