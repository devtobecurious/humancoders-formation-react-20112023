export interface Person {
    id: number;
    prenom: string;
    planete ?: {id: number, nom: string}
}

export type People = Person[];