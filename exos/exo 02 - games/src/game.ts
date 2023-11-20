// export class Game {
//     id !: number;
//     dateDebut !: Date;
//     dateFin: Date | undefined;
//     success ?: boolean;
// }

export interface Game { // à la compil, ça ne genere aucun code !
    id: number;
    dateDebut: Date;
    dateFin ?: Date;
    success ?: boolean
}

export type Games = Game[] | undefined; // alias de type