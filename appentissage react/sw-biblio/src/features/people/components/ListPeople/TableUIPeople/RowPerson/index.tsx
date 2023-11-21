import { Button } from "react-bootstrap";
import { DeleteById } from "../../../../tools/custom-types";

export type RowPersonProps = {
    col1: string,
    col2: string,
    col3 ?: string,
    clickToDelete: DeleteById
}

export const RowPerson = (props: RowPersonProps) => {
    console.info('RowPerson');

    const onClickToDeleteOnRow = () => {
        // if(typeof props.clickToDelete !== 'undefined'){
            props.clickToDelete(props.col1);  
        //}
    }

    return (
        <>
            <tr>
                <td>{props.col1}</td>
                <td>{props.col2}</td>
                <td>
                    <Button onClick={onClickToDeleteOnRow} variant="warning">Supprimer</Button>
                </td>
            </tr>
        </>
    )
}