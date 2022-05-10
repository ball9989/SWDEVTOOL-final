import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Form,Button } from "react-bootstrap";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL


const register = () => {
    const onSubmit = async (e) =>{
        const firstName = e.target.elements.firstname.value
        const lastName = e.target.elements.lastname.value
        const idCard = e.target.elements.idcard.value
        const phoneNumber = e.target.elements.phonenumber.value
        axios.post(`${SERVER_URL}/user/add`, {
            firstName,
            lastName,
            idCard,
            phoneNumber
        }).then(res => {
            console.log(res)
          }).catch(err => {
              console.log(err)
              alert('err')
          })
    }

    return (
        <div className="container mt-5">
            <h1 className="title">กรุณากรอกข้อมูล</h1>
        <Form onSubmit={onSubmit}>
        <Form.Group className="mb-3" controlId="firstname">
            <Form.Label>ชื่อ</Form.Label>
            <Form.Control type="text" placeholder="ชื่อภาษาไทย" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="lastname">
            <Form.Label>นามสกุล</Form.Label>
            <Form.Control type="text" placeholder="นามสกุลภาษาไทย" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="idcard">
            <Form.Label>เลขบัตรประชาชน</Form.Label>
            <Form.Control type="text" placeholder="13 หลัก" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="phonenumber">
            <Form.Label>เบอร์โทรศัพท์</Form.Label>
            <Form.Control type="text" placeholder="เบอร์มือถือ" />
        </Form.Group>

        <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
        </div>
    )
}
export default register;