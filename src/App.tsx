import React from 'react';
import {observer} from "mobx-react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login";
import ProtectedRoute from "./components/ProtectedRoute";
import Main from "./components/Main";
import DefaultLayout from "./layouts/DefaultLayout";
import History from "./components/History";
import Logout from "./components/Logout";
import FilmForm from "./components/FilmForm";
import {IFilmDetailed} from "./data/Film";
import LocalStorage from "./store/FilmStore";

const App: React.FC = observer(() => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <ProtectedRoute>
                        <DefaultLayout>
                            <Main />
                        </DefaultLayout>
                    </ProtectedRoute>
                } />
                <Route path="/film/new" element={
                    <ProtectedRoute>
                        <DefaultLayout>
                            <FilmForm createFilm={(item:IFilmDetailed)=>LocalStorage.createNewFilm(item)} />
                        </DefaultLayout>
                    </ProtectedRoute>
                } />
                <Route path="/history" element={
                    <ProtectedRoute>
                        <DefaultLayout>
                            <History />
                        </DefaultLayout>
                    </ProtectedRoute>
                } />
                <Route path="/login" element={
                    <Login />
                } />
                <Route path="/logout" element={
                    <Logout />
                } />
            </Routes>
        </BrowserRouter>
    );
})

export default App;