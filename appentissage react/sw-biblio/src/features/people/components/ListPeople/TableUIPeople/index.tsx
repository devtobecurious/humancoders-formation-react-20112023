import { Table } from "react-bootstrap";
import { RowPerson } from "./RowPerson";
import { DeleteById } from "../../../tools/custom-types";

export type OnePeopleProps = {
    id: number;
    prenom: string
}

export type TablePeopleProps = {
    items: OnePeopleProps[],
    deleteOnRow: DeleteById
}

export const TableUIPeople = (props: TablePeopleProps) => {
    const rows = props.items.map(person => <RowPerson key={person.id} clickToDelete={props.deleteOnRow}  col1={person.id.toString()} col2={person.prenom} ></RowPerson>);
    console.info('TableUIPeople');

    return (
        <>
            <Table striped bordered hover>
                <tbody>
                    {rows}
                </tbody>
            </Table>
        </>
    );
}