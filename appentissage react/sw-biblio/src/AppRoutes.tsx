import { Route, Routes } from "react-router-dom"
import { AddFilm } from "./features/films/components/AddFilm"
import { PageListPeople } from "./pages/people/PageListPeople"
import {AuthContext} from './AppContext';

export const AppRoutes = () => {
    const context = { isLogged: false };

    return (
        <AuthContext.Provider value={context}>
            <Routes>
                <Route path="/people" element={ <PageListPeople></PageListPeople> }></Route>
                <Route path="/films/new" element={ <AddFilm></AddFilm> }></Route>
                <Route path="/films/edit/:filmId" element={ <AddFilm></AddFilm> }></Route>
            </Routes>
        </AuthContext.Provider>
    );
}