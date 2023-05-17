import FilmContent from "./FilmContent";
import LocalStorage from "../store/FilmStore";
import React from "react";
import UserStore from "../store/UserStore";
import {observer} from "mobx-react";

const Main = observer(() => {
    return (
        <div>
            <h2>Hello, {UserStore.getSessionUserFullname()}</h2>
            <FilmContent data={LocalStorage.data} />
        </div>)
})

export default Main;