import { ClickToSave, FormFilm } from "../FormFilm"

/**
 * 
 * @returns 
 */
export const AddFilm = () => {
    const saveOne: ClickToSave = film => {
        console.info('save film', film);
    }

    return (
        <>
            <FormFilm clickToSave={saveOne}></FormFilm>
        </>
    );
}