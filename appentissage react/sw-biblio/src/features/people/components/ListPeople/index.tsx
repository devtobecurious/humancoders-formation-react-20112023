import { TableUIPeople } from "../TableUIPeople";
import { People } from "../../models/people"
import { Alert, Button } from "react-bootstrap";
import { DeleteById } from "../../tools/custom-types";

export type ListPeopleProps = {
    displayPopin: () => void;
}

/**
 * Head component
 */
export const ListPeople = (props: ListPeopleProps) => {
    console.info('ListPeople', this);
    let people: People = [{id: 1, prenom: 'Luke'}];
    const warningPasElements =  <Alert key='warning' variant='warning'>Aucune personne disponible</Alert>

    // const executeClick = () => {
    //     props.displayPopin();
    // }

    const deleteOnePerson: DeleteById = id => {
        const idNumber = Number(id);
        people = people.filter(item => item.id !== idNumber);
    }

    return (
        <>
           { people.length === 0 && warningPasElements }
           { people.length > 0 && <TableUIPeople deleteOnRow={deleteOnePerson} items={people} ></TableUIPeople> }

           <Button variant="info" onClick={props.displayPopin} >Affichage popin</Button>
        </>
    )
}