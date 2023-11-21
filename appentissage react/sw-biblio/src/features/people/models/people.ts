export interface Person {
    id: number;
    prenom: string;
    planete ?: {id: number, nom: string}
}

export type People = Person[];

export const getDefaultPeople = () => {
    return [{id: 1, prenom: 'Luke'}];
}