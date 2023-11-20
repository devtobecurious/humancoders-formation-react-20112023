"use strict";
class Jedi {
    constructor() {
        this.prenom = '';
    }
}
const jedi = new Jedi();
jedi.prenom = 'Luke';
// jedi.prenom = 1;
async function getApi() {
    const response = await fetch('');
    return await response.json();
}
async function getAllPeople(getApi) {
    const result = await getApi();
    return result;
}
