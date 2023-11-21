export type RowPersonProps = {
    col1: string,
    col2: string,
    col3 ?: string
}

export const RowPerson = (props: RowPersonProps) => {
    console.info('RowPerson');
    return (
        <>
            <tr>
                <td>{props.col1}</td>
                <td>{props.col2}</td>
            </tr>
        </>
    )
}