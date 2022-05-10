const express = require("express");

const router = express.Router();

const User = require("../models/users")


router.post('/add', async(req, res) => {
    try {
        const {firstName, lastName, idCard, phoneNumber} = req.body;
        const user = await User.create({
            firstName: firstName,
            lastName: lastName,
            idCard: idCard,
            phoneNumber: phoneNumber,
        })
        res.send(user)
    } catch (err) {
        console.log(err)
        res.send(err)
    }
})

router.get('/all', async (req, res) => {
    try {
        const users = await User.find()
        res.send(users)
    } catch(err) {
        console.log(err)
        res.send(err)
    }
})


module.exports = router;