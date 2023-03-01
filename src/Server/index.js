const express = require("express");
const PORT = 8080 || process.env.PORT;
const mongoose = require("mongoose");

const theme = require("./models/theme")
const cors = require("cors");
const datas = require("./data")

const app = express();
app.use(express.json());
app.use(cors())
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

mongoose.connect(
    "mongodb+srv://asrazareen:asra1999@cluster1.ydw3gfw.mongodb.net/theme" ,
   
).then(() => console.log("connected to db"))


app.listen(PORT , () => {console.log(`server is up and running at port number ${PORT}`)}) 