import { TableUIPeople } from "../TableUIPeople";
import { People } from "../../models/people"
import { Alert } from "react-bootstrap";

/**
 * Head component
 */
export const ListPeople = () => {
    console.info('ListPeople', this);
    const people: People = [{id: 1, prenom: 'Luke'}];
    const warningPasElements =  <Alert key='warning' variant='warning'>Aucune personne disponible</Alert>

    return (
        <>
           { people.length === 0 && warningPasElements }
           { people.length > 0 && <TableUIPeople items={people} ></TableUIPeople> }
        </>
    )
}