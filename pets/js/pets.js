const pets = [
    { name: 'Scooter', type: 'dog', breed: "Australian Shepherd", age: 3, photo: 1 },
    { name: 'Pickle', type: 'dog', breed: "Dachshund", age: 5, photo: 1 },
    { name: 'DoodleBob', type: 'dog', breed: "Golden Retriever", age: 7, photo: 1 },
    { name: 'Jimmy', type: 'cat', breed: "Persian", age: 2, photo: 1 },
    { name: 'SuperPooper', type: 'dog', breed: "Pug", age: 8, photo: 1 },
    { name: 'Leggo', type: 'cat', breed: "Tabby", age: 4, photo: 1 },
];
for (let i = 0; i < pets.length; i++) {
    let name = pets[i].name;
    let type = pets[i].type;
    let breed = pets[i].breed;
    let age = pets[i].age;
    let photo = pets[i].photo;

    profile = `<h1>${name}</h1>
${type} | ${breed}
${age}
${photo}
`;
    document.querySelector('main').innerHTML = profile;
}

