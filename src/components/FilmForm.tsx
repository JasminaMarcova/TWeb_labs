import React from 'react';
import {IFilmDetailed} from "../data/Film";
import {Button, Form, Input, InputNumber} from 'antd';

const { TextArea } = Input;

export default function FilmForm({createFilm: createFilm}: any) {
    const [form] = Form.useForm();

    const onSubmit = (values: any) => {
        const newItem : IFilmDetailed={
            name: values.name,
            description: values.description,
            imageUrl: values.imageUrl,
            ticketPrice: values.ticketPrice
        }
        createFilm(newItem)
        window.alert("Film " + newItem.name + " is added to the menu")
        form.resetFields()
    };

    return (
        <Form
            name="basic"
            layout="vertical"
            initialValues={{
                ticketPrice: 1.00
            }}
            onFinish={onSubmit}
            style={{ height: "450px", width: "100%", margin: "1%", display: "inline-block"}}
        >
            <div style={{ fontSize: "40px", textAlign: "center" }}>Add new film</div>
            <br />
            <br />
            <Form.Item label="Name" name="name" rules={[{ required: true, message: 'Please enter name!' }]}>
                <Input name="name" placeholder="Enter a film name" showCount maxLength={20}/>
            </Form.Item>
            <Form.Item label="Description" name="description"  rules={[{ required: true, message: 'Please enter description!' }]}>
                <TextArea name="description" placeholder="Enter the description here"
                          showCount maxLength={300} />
            </Form.Item>
            <Form.Item label="Image URL" name="imageUrl"  rules={[{ required: true, message: 'Please enter image url!' }]}>
                <Input name="imageUrl" placeholder="Enter the image URL" />
            </Form.Item>
            <Form.Item label="Ticket price" name="ticketPrice">
                <InputNumber<number>
                            name="ticketPrice"
                            defaultValue={1}
                            min={0}
                            max={10}
                            step="0.01"
                            precision={2}
                        />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    )
}