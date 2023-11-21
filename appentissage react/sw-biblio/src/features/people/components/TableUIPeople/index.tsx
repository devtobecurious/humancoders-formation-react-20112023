import { Table } from "react-bootstrap";
import { RowPerson } from "../RowPerson";

export type OnePeopleProps = {
    id: number;
    prenom: string
}

export type TablePeopleProps = {
    items: OnePeopleProps[]
}

export const TableUIPeople = (props: TablePeopleProps) => {
    const rows = props.items.map(person => <RowPerson key={person.id} col1={person.id.toString()} col2={person.prenom} ></RowPerson>);
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