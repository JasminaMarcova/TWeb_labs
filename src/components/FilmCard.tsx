import {Card, InputNumber} from 'antd';
import {IFilmDetailed} from "../data/Film";

const { Meta } = Card;

export default function FilmCard(props: IFilmDetailed) {
    return(
        <Card
            hoverable
            style={{ height: "700px", width: "30%", display: "inline-block", margin: "1%"}}
            cover={<img alt="Film" src={props.imageUrl} style={{ height: "400px", objectFit: "cover" }} />}
        >
            <Meta title={props.name} description={props.description} />
            <br />
            <br />
            <InputNumber readOnly={true} defaultValue={props.ticketPrice}/>
        </Card>
    )
}