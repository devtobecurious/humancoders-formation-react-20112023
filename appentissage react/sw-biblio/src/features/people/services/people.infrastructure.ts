import axios from "axios";
import { People } from "../models/people";

export const url = import.meta.env.VITE_API_PEOPLE_URL;

export type ApiGetAllPeople = () => Promise<People>;

type PersonRetourApi = {
    name: string, 
    height: number, 
}

type RetourAPI = {
    results: PersonRetourApi[]
}

export async function apiGetAllPeople(): Promise<People> {
    const response = await fetch(url);
    const resultApi = await response.json() as RetourAPI;

    const retourPeople: People = resultApi.results.map(item => ({ id: 1, prenom: item.name }));

    return retourPeople;
}

type ReturnPeopleAxiosResponse = {
    data: RetourAPI
}

export async function apiAxiosGetAllPeople(): Promise<People> {
    const result: ReturnPeopleAxiosResponse = await axios.get<RetourAPI>(url); 

    const retourPeople: People = result.data.results.map(item => ({ id: 1, prenom: item.name }));

    return retourPeople;
}

// export async function apiAxiosGetAllPeople(): Promise<any> {
//     const result: any = await axios.get<any>(url); 

//     const retourPeople: any = result.data.results.map(item => ({ id: 1, prenom: item.name }));

//     return retourPeople;
// }