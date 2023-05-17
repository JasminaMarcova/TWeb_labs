import {Card, InputNumber} from 'antd';

const { Meta } = Card;

export default function FilmCard(props: any) {
    return(
        <Card
            hoverable
            style={{ width: "30%", display: "inline-block", margin: "1%"}}
            cover={<img alt="Film" src={props.imageUrl} />}
        >
            <Meta title={props.name} description={props.description} />
            <br />
            <br />
            <InputNumber readOnly={true} defaultValue={props.ticketPrice}/>
        </Card>
    )
}