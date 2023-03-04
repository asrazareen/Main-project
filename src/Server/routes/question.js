const express = require("express")
const cors = require("cors")
const Question = require("../models/question")

const survey = require("../models/survey")
// const fileupload = require("express-fileupload"); 
const app = express()
app.use(express.json());
app.use(cors())
// app.use(fileupload())


app.get("/" , async(req,res) => {
    const query = req.query.id
    console.log(query)
    const questions = await Question.findOne( {_id:query} )
    console.log(questions)
    res.json({
        questions:questions,
       
        
    })
})
app.get("/list" , async(req,res) => {
 
    const List = await survey.find()
    res.json({
        lists:List
    })
})

app.post("/list",async(req,res) => {
    const {name , description,typeOfSurvey,startDate,endDate,image,otherCriteria} = req.body
    const Lists = await survey.create({
        name , description,typeOfSurvey,startDate,endDate,image,otherCriteria
    })
    console.log(Lists)

    res.json({
        listId:Lists._id
    })
})
app.post("/" , async(req,res) => {
    //console.log(JSON.parse(req.body.questions))
    //console.log(req.body.options)
    const questions = JSON.parse(req.body.questions) 
    const option = JSON.parse(req.body.option)
    //console.log(req.body)
    // console.log(req.body.options)
    // console.log(questions) 
    // console.log(option)  
    //console.log(JSON.parse(req.body.options)) 
   const data =  await Question.create({
        questions:questions,
        option:option 
    })
    //console.log(data)
    res.json({ 
        status:"successful",
        questId:data._id
    })
   
})

module.exports = app 