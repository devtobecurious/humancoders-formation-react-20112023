import { Button, Form } from "react-bootstrap";
import { Episode, Film } from "../../models";
import { FormEvent, useState } from "react";

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
            episodeId: Number(inputFilm.episode), // Comment passer d'un number à un enum
            releaseDate: new Date()
        });
        event.preventDefault();
    }

    const updateFilmInputs = (e: FormEvent) => { // Le any est banni, alors on met quoi ici ? :)
        console.info(e.target);

        const newFilm = {
            ...inputFilm,
            episode: {
                value: e.target,
                isValid: e.target
            },
            form: {
                isValid: true
            }
        }

        setInputFilm(newFilm);
    }

    return (
        <>
            <Form onSubmit={clickToSubmit}>
            <Form.Group className="mb-3" controlId="">
                <Form.Label>Titre</Form.Label>
                <Form.Control type="text" placeholder="Titre" onChange={updateFilmInputs} />
            </Form.Group>
                <Button type="submit">Sauvegarde</Button>
            </Form>
        </>
    );
}