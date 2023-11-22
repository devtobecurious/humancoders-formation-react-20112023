import { Route, Routes } from "react-router-dom"
import { AddFilm } from "./features/films/components/AddFilm"
import { PageListPeople } from "./pages/people/PageListPeople"

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/people" element={ <PageListPeople></PageListPeople> }></Route>
            <Route path="/films/new" element={ <AddFilm></AddFilm> }></Route>
        </Routes>
    );
}