const urlApi = 'https://swapi.dev/api/people'

async function accessApi() {
    const reponse = await fetch(urlApi);
    return await reponse.json();
}

async function getAllPeople(api) {
    const result = await api();

    // return result.results.map(item => {
    //     const newItem = {
    //         prenom: item.name,
    //         nom: item.name 
    //     }
    //     return newItem;
    // });

    return result.results.map(item => ({ // je retourne un objet : ({}) indique que c'est un objet literal
        prenom: item.name,
        nom: item.name 
    }));
}

async function DisplayPeople(howToDisplay) {
    const people = await getAllPeople(accessApi);

    people.forEach(element => {
        howToDisplay(element);
    });
}

DisplayPeople(item => {
    console.info(item.prenom);
});