import React, {useState, useEffect} from "react";
import axios from 'axios';
import { Form,Button } from "react-bootstrap";

const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL


const result = () => {
    const [name, setName] = useState("")
    const [lastname,setLastname] = useState("")
    const [idcard, setIdcard] = useState("")
    const [phone,setPhone] = useState("")
    const [queue,setQueue] = useState(1)
    const time = (("0"+new Date().getHours()).slice(-2))+" : "+(("0"+new Date().getMinutes()).slice(-2))
    const date = new Date().getDate()+"-"+(new Date().getMonth()+1)+"-"+new Date().getFullYear()
    useEffect(() => {
        axios.get(`${SERVER_URL}/user/all`).then(res => {
        console.log(res.data)
        setName(res.data[res.data.length -1].firstName)
        setLastname(res.data[res.data.length -1].lastName)
        setIdcard(res.data[res.data.length -1].idCard)
        setPhone(res.data[res.data.length -1].phoneNumber)
        setQueue(res.data[res.data.length -1].__v+1)

        })
    }, [])
    return (

        <div className="container mt-5 text-center flex-grow-1">
            <img src="data:image/png;base64,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"></img>
            <h1>ผลการลงทะเบียน</h1>
            <h2>ชื่อ : {name}</h2>
            <h2>นามสกุล : {lastname}</h2>
            <h2>เลขบัตรประชาชน : {idcard}</h2>
            <h2 className="mb-5">เบอร์โทรศัพท์ : {phone}</h2>
            <h1>คิวที่ : {queue}</h1>
            <h1>วันที่ : {date}</h1>
            <h1>เวลา : {time+" น."}</h1>
        </div>
        

    )
}
export default result;