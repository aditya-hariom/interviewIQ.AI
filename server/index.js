import express from "express"
import dotenv from "dotenv"
import connectDb from "./config/connectDb.js"  // file ka name .js hai isliye

dotenv.config()


const app = express()
const PORT = process.env.PORT || 6000

app.get("/" , (req,res) =>{
    return res.json({message:"server started"})
})


app.listen(PORT , ()=>{
    console.log(`server running on port ${PORT}`)
    connectDb()    // jo export kiye hai wo yaha par connect kar denge
})