import express from 'express'
import mongoose from 'mongoose'
const app = express()
const PORT = 4600

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


import User from "./models/user.js"
import userRoutes from './routes/students.js'
app.use("/api",userRoutes);





mongoose.connect('mongodb://127.0.0.1:27017/tbpp').then(() => {
    console.log("Connected TO DB")
})
    .catch((error) => {
        console.log(error)
    })


app.listen(PORT, () => {
    console.log("Connected RO PORT", PORT)
})