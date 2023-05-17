import React, {FormEventHandler, useState} from 'react';
import {IFilm} from "../data/Film";
import {Button, Form, Input, InputNumber} from 'antd';

const { TextArea } = Input;

export default function FilmForm({createFilm: createFilm}: any) {
    const [form] = Form.useForm();

    const onSubmit = (values: any) => {
        const newItem : IFilm={
            name: values.name,
            description: values.description,
            imageUrl: values.imageUrl,
            ticketPrice: values.tickerPrice
        }
        createFilm(newItem)
        form.resetFields()
    };

    return (
        <Form
            name="basic"
            layout="vertical"
            initialValues={{
                tickerPrice: 1.00
            }}
            onFinish={onSubmit}
            style={{ width: "33%", margin: "1%"}}
        >
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
            <Form.Item label="Ticket price" name="tickerPrice">
                <InputNumber<number>
                            name="tickerPrice"
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