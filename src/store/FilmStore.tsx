import {action, makeObservable, observable} from "mobx";
import {IFilmDetailed, filmsList} from "../data/Film";

class FilmStore {
    data: IFilmDetailed[] = [];

    constructor() {
        makeObservable(this, {
            data: observable,
            createNewFilm: action,
        });
        if (!localStorage.getItem("filmsList")) {
            this.data = filmsList;
            localStorage.setItem("filmsList", JSON.stringify([...this.data]))
        } else {
            // @ts-ignore
            this.data = JSON.parse(localStorage.getItem("filmsList"))
        }
    }

    createNewFilm(item: IFilmDetailed) {
        this.data = [...this.data, item]
        localStorage.setItem("filmsList", JSON.stringify(this.data))
    }
}

export default new FilmStore();