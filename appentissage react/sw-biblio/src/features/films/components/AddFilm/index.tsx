import { useNavigate } from "react-router-dom";
import { ClickToSave, FormFilm } from "../FormFilm"

/**
 * 
 * @returns 
 */
export const AddFilm = () => {
    const navigate = useNavigate();

    const saveOne: ClickToSave = film => {
        console.info('save film', film);
        new Promise((resolve) => {
            setTimeout(() => {
                resolve({success: true});
            }, 1000);
        }).then(item => {
            navigate('/');
        })
    }

    return (
        <>
            <FormFilm clickToSave={saveOne}></FormFilm>
        </>
    );
}