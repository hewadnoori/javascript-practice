const pets = [
    {
        name: 'Scooter',
        type: 'dog',
        breed: "Australian Shepherd",
        age: 3,
        photo: 'img/aussie.jpg'
    },
    {
        name: 'Pickle',
        type: 'dog',
        breed: "Dachshund",
        age: 5,
        photo: 'img/dachshund.jpg'
    },
    {
        name: 'DoodleBob',
        type: 'dog',
        breed: "Golden Retriever",
        age: 7,
        photo: 'img/golden.jpg'
    },
    {
        name: 'Jimmy',
        type: 'cat',
        breed: "Persian",
        age: 2,
        photo: 'img/persian.jpg'
    },
    {
        name: 'SuperPooper',
        type: 'dog',
        breed: "Pug",
        age: 8,
        photo: 'img/pug.jpg'
    },
    {
        name: 'Leggo',
        type: 'cat',
        breed: "Tabby",
        age: 4,
        photo: 'img/tabby.jpg'
    },
];
let profile = ""
for (let i = 0; i < pets.length; i++) {
    let name = pets[i].name;
    let type = pets[i].type;
    let breed = pets[i].breed;
    let age = pets[i].age;
    let photo = pets[i].photo;

    profile += `<h2>${name}</h2>
        <h3>${type} | ${breed}</h3>
        <p>${age}</p>
        <img src="${photo}" alt="${breed}">
    `;
    document.querySelector('main').innerHTML = profile;
}

