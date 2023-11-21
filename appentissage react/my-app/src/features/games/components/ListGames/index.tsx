import { getAllGames } from "../../services";

/**
 * Composant parent listant tous les games
 * Head Component : composant qui sait / Référent / les données
 * @returns 
 */
export const ListGames = () => {
    const games = getAllGames();
    const tableGames = games?.map(game => <tr><td>{ game.id }</td><td>{game.dateDebut.toString()}</td></tr>)

    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Date de début</th>
                    </tr>
                </thead>
                <tbody>
                    { tableGames }
                </tbody>
            </table>
        </>
    )
}