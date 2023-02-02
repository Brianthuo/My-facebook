const express = require("express")
const app = express()
const mongoose = require("mongoose")
app.use(express.json())
const cors = require("cors")
app.use(cors())
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken")
require("dotenv").config()

const JWT_SECRET = "noafno4802390480235njdsnakjnikdifasnfinuisnfin75d4f87"

const mongoUrl = process.env.mongoURL 



mongoose.connect(mongoUrl, {
    useNewUrlparser: true
}).then(()=>{console.log("connected to database")})
.catch(e=> console.log(e))

app.listen(5000, ()=>{
    console.log("server has started");
})




require ("./userData")

const user = mongoose.model("UserInfo")

app.post("/register", async (req, res)=>{
    const{firstname, surname, email, password}= req.body

    const encryptedPassword = await bcrypt.hash(password, 10)

    try{
        const oldUser = await user.findOne({email})

        if(oldUser){
           return res.json({error: "user Exists"})
        }
        await user.create({
            firstname,
            surname,
            email,
            password: encryptedPassword,
            
        });
        res.send({status: "ok"})
    } catch(error){
        res.send({status: "error"})
    }
})


app.post("/loginUser", async(req, res)=>{
    const {email, password} = req.body

    const User = await user.findOne({email});
    console.log (User)
    if(!User){
        return res.json({error: "user Not found"})
    }
    if(await bcrypt.compare(password, User.password)){
        const token = jwt.sign({email: User.email}, JWT_SECRET)
        if(res.status(201)){
            return res.json({status : "ok", data: token})
        }else{
            return res.json({error: "error"})
        }
    }
    res.json({status: "error", error: "Invalid password"})
})
app.post("/userData", async (req, res) =>{
    const {token } = req.body
    try{
        const User = jwt.verify(token, JWT_SECRET)

        console.log(User)
        const useremail = User.email
        user.findOne({email: useremail}).then((data)=>{
            res.send({ status: "ok", data: data})
            
        })
        .catch((error) => {
            res.send({status: "error", data: error})
        })
    }catch(error){}
})





