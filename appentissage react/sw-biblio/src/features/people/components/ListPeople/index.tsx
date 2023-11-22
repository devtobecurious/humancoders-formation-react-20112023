import { TableUIPeople } from "./TableUIPeople";
import { getDefaultPeople } from "../../models/people"
import { Alert, Button } from "react-bootstrap";
import { DeleteById } from "../../tools/custom-types";
import { useEffect, useState } from "react";
import business from '../../services/people.application';

export type ListPeopleProps = {
    displayPopin: () => void;
}

/**
 * Head component
 */
export const ListPeople = (props: ListPeopleProps) => {
    const [people, setPeople] = useState(getDefaultPeople);
    const warningPasElements =  <Alert key='warning' variant='warning'>Aucune personne disponible</Alert>
    
    console.info('ListPeople', this);
    // const peopleDefault: People = [{id: 1, prenom: 'Luke'}];

    const appelApiCallback = () => {
        business.getAll().then(people => {
            setPeople(people);
        });
    };

    useEffect(appelApiCallback, []) // tableau vide == exécution fonction une seule fois
    

    // const executeClick = () => {
    //     props.displayPopin();
    // }

    // Pour de petits resultats
    // const [people, setPeople] = useState(getDefaultPeople()); // Gestionnaire d'état propre à un composant

    // Utilisation du fonction qui sera exécutée qu'une seule fois pour initialiser
    const deleteOnePerson: DeleteById = id => {
        console.info('. deleteOnePerson', people);

        const idNumber = Number(id);
        const peopleResult = people.filter(item => item.id !== idNumber);
        setPeople(peopleResult); // Il est asynchrone, il met vraiment à jour après la fin de fonction

        // setPeople(people => people.filter(item => item.id !== idNumber)); // avec fonction callback, pour du batching sequentiel

        console.info('2. deleteOnePerson', peopleResult);
    }

    return (
        <>
           { people.length === 0 && warningPasElements }
           { people.length > 0 && <TableUIPeople deleteOnRow={deleteOnePerson} items={people} ></TableUIPeople> }

           <Button variant="info" onClick={props.displayPopin} >Affichage popin</Button>
        </>
    )
}