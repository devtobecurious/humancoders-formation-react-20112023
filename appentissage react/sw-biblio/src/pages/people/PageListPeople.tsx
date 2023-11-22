import { ListPeople } from "../../features/people/components/ListPeople"

export const PageListPeople = () => {
    const displayPopin = () => {
        throw new Error('Not implemented exception');
    }

    return (
        <>
            <ListPeople displayPopin={displayPopin}></ListPeople>
        </>
    )
}