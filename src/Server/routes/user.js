const express = require('express');
const app = express();
const cors = require('cors');
const User = require('../models/user');
const jwt = require('jsonwebtoken');
// const createSurvey = require('./schemasurvey');

app.use(cors());
app.use(express.json());


app.post('/register', async (req, res) => {
    console.log(req.body);
    try {
        await User.create({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            profession: req.body.profession,
            password: req.body.password,
            confirmpassword: req.body.confirmpassword,
        }) 
        if(req.body.password === req.body.confirmpassword) {
            res.json({ status: 'ok' })
        }else {
            res.json({status: 'password and confirmpassword should be same'})
        }
    } catch (err) {
        res.json({ status: 'error', error: 'Duplicate email' })
    }
})

app.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email, password: req.body.password })

    if (user) {
        const token = jwt.sign({
            name: user.name,
            email: user.email,
        }, 'secret123')
        return res.json({ status: 'ok',message: 'Login Successfull' ,  token:token})
    } else {
        return res.json({ status: 'error', user: false })
    }
    }catch(error) {
        res.json(error);
    }
})

module.exports = app