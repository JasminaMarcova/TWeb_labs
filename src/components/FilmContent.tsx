import {IFilm} from "../data/Film";
import FilmCard from "./FilmCard";

export default function FilmContent({data}:any) {

    return (
        <div>
            {data.map((el:IFilm)=><FilmCard key={el.name} {...el}/>)}
        </div>
    );
}