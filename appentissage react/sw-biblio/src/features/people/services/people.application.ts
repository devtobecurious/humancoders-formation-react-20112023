import { People } from "../models/people";
import { ApiGetAllPeople, apiGetAllPeople } from "./people.infrastructure";

export async function getAllPeople(api: ApiGetAllPeople): Promise<People> {
    let result = await api();

    // mes règles métiers en plus sont ici 
    result = result.filter(item => item.prenom !== '');

    return result;
}

async function getAllPeopleDefault(): Promise<People> {
    return getAllPeople(apiGetAllPeople);
}

export default {
    getAll: getAllPeopleDefault,
    addOne: undefined
};