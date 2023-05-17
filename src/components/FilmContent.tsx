import {IFilmDetailed} from "../data/Film";
import FilmCard from "./FilmCard";

export default function FilmContent({data}:any) {

    return (
        <div>
            {data.map((el:IFilmDetailed)=><FilmCard key={el.name} {...el}/>)}
        </div>
    );
}