const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const User = require('./schema');
const jwt = require('jsonwebtoken');

app.use(cors());
app.use(express.json());

mongoose.set('strictQuery', false)
mongoose.connect(`mongodb+srv://mainproject:mainproject@cluster0.isbhiqp.mongodb.net/?retryWrites=true&w=majority`,(err) => {
    if(err) {
        console.log("Connection to MongoDb Failed");
    }else {
        console.log("Succesfully connected to MongoDb");
    }
});

app.post('/api/register', async (req, res) => {
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

app.post('/api/login', async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email, password: req.body.password })

    if (user) {
        const token = jwt.sign({
            name: user.name,
            email: user.email,
        }, 'secret123')
        return res.json({ status: 'ok', token:token})
    } else {
        return res.json({ status: 'error', user: false })
    }
    }catch(error) {
        res.json(error);
    }
})


app.listen(8000, () => console.log("Server is up at port 8000"));