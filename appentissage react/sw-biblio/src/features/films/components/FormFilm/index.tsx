import { Alert, Button, Form } from "react-bootstrap";
import { Film } from "../../models";
import { ChangeEvent, FormEvent, useState } from "react";

export type ClickToSave = (item: Film) => void;

export type FormFilmProps = {
    item ?: Film,
    clickToSave: ClickToSave
}

/**
 * 
 * @returns 
 */
export const FormFilm = (props: FormFilmProps) => {
    const [inputFilm, setInputFilm] = useState({
        episode: {
            value: '',
            isValid: false
        },
        form: {
            isValid: false
        }
    })

    const clickToSubmit = (event: FormEvent<HTMLFormElement>) => {
        props.clickToSave({
            episodeId: 1, // Number(inputFilm.episode.value) as Episode
            releaseDate: new Date(),
            title: inputFilm.episode.value
        });
        event.preventDefault();
    }

    const updateFilmInputs = (e: ChangeEvent<HTMLInputElement>) => { // Le any est banni, alors on met quoi ici ? :)
        console.info(e.target.value);

        const newFilm = {
            ...inputFilm,
            episode: {
                value: e.target.value,
                isValid: e.target.value !== ''
            }
        }
        newFilm.form.isValid = newFilm.episode.isValid;

        setInputFilm(newFilm);
    }

    return (
        <>
            <Form onSubmit={clickToSubmit}>
            <Form.Group className="mb-3" controlId="">
                <Form.Label>Titre</Form.Label>
                <Form.Control type="text" placeholder="Titre" onChange={updateFilmInputs} />
                { !inputFilm.episode.isValid && <Alert variant="danger">Titre requis</Alert> }
            </Form.Group>
                <Button type="submit" disabled={! inputFilm.form.isValid}>Sauvegarde</Button>
            </Form>
        </>
    );
}