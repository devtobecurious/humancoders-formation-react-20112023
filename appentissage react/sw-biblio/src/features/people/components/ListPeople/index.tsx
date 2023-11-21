import { TableUIPeople } from "../TableUIPeople";
import { People } from "../../models/people"
import { Alert, Button } from "react-bootstrap";

export type ListPeopleProps = {
    displayPopin: () => void;
}

/**
 * Head component
 */
export const ListPeople = (props: ListPeopleProps) => {
    console.info('ListPeople', this);
    const people: People = [{id: 1, prenom: 'Luke'}];
    const warningPasElements =  <Alert key='warning' variant='warning'>Aucune personne disponible</Alert>

    // const executeClick = () => {
    //     props.displayPopin();
    // }

    return (
        <>
           { people.length === 0 && warningPasElements }
           { people.length > 0 && <TableUIPeople items={people} ></TableUIPeople> }

           <Button variant="info" onClick={props.displayPopin} >Affichage popin</Button>
        </>
    )
}