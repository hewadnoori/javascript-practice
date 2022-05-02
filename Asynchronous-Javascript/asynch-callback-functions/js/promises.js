const astrosUrl = 'http://api.open-notify.org/astros.json';
const wikiUrl = 'https://en.wikipedia.org/api/rest_v1/page/summary/';
const peopleList = document.getElementById('people');
const btn = document.querySelector('button');


function getProfiles(json) {
    const profiles = json.people.map(person => {
        const craft = person.craft;

        return fetch(wikiUrl + person.name)
            .then(response => response.json())
            .then(profile => {
                return { ...profile, craft }
            })
            .catch(err => console.log('Error Fetching Wiki', err))
    });
    return Promise.all(profiles);
}

// Generate the markup for each profile
function generateHTML(data) {
    data.map(person => {
        const section = document.createElement('section');
        peopleList.appendChild(section);
        // Check if request returns a 'standard' page from Wiki
        if (person.type === 'standard') {
            section.innerHTML = `
        <img src=${person.thumbnail.source}>
        <span>${person.craft}</span>
        <h2>${person.title}</h2>
        <p>${person.description}</p>
        <p>${person.extract}</p>
        `;
        } else {
            section.innerHTML = `
        <img src="img/profile.jpg" alt="ocean clouds seen from space">
        <span>${person.craft}</span>
        <h2>${person.title}</h2>
        <p>Results unavailable for ${person.title}</p>
        ${person.extract_html}
        `;
        }
    })

}

btn.addEventListener('click', (event) => {
    event.target.textContent = 'Loading...'

    fetch(astrosUrl)//this will fetch the data from the open notify API and return a promise. If that task is resolved, its going to pass the return data down to the then method
        .then(response => response.json()) //is going to read the response and returns the promise that resolves the JSON, PASSING IT ON TO getProfiles
        .then(getProfiles) //this is then used in the getProfiles to request data from the wikipedia API
        .then(generateHTML)
        .catch(err => {//handles rejected promises
            peopleList.innerHTML = '<h3>Something went wrong!</h3>';
            console.log(err)
        })
        .finally(() => event.target.remove()) //when a promise is finally either fulfilled or rejected, this is executed.
});