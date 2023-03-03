const express = require("express");
const PORT = 8080 || process.env.PORT;
const mongoose = require("mongoose");
require('dotenv').config()
const profile = require("./models/profile")
const theme = require("./models/theme")
const cors = require("cors");
const datas = require("./data")
const fileupload = require("express-fileupload")

const app = express();
app.use(express.json());
app.use(cors())
app.use(fileupload())
//console.log(data)
app.get('/api/themes',async  (req, res) => {
//     theme.deleteMany(data.data)
//console.log(datas)
//    theme.insertMany(datas.data)
const data = await theme.find()
    res.json({
        data
    }
    ); 
  });
  //console.log(process.env.MONGODB_URL)
app.post("/profile" , async (req,res) => {
  console.log(req.body)
  const {image} = req.body
  await profile.create({
    image:image
  })
})
 app.get("/profile" , async(req,res) => {
  const image = await profile.find();
  console.log(image)
  res.json({
    image:image
  })
 })
mongoose.connect(
   process.env.MONGODB_URL  ,
   
).then(() => console.log("connected to db"))


app.listen(PORT , () => {console.log(`server is up and running at port number ${PORT}`)}) 