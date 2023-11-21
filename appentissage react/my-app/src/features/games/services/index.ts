import { Games } from "../models";

/**
 * Retourne la liste des données des parties
 * @returns 
 */
export function getAllGames(): Games {
    return [
        { id: 1, dateDebut: new Date(2023, 2, 10) },
        { id: 2, dateDebut: new Date(2023, 10, 8)  }
    ]
}