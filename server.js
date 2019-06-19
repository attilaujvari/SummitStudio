const express = require('express')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 6969
const morgan = require('morgan')

//Middlewares
app.use(express.json()) //req.body
app.use(morgan('dev'))

//Routes

    //failsafe route:
app.use("*", (req, res) =>{
    res.send("Error 404? \n" +
        "Nothing is broken, everything is just redirection. \n" +
        "However, you failed to hit anything that you intended. Try again.")
    console.log(req)
})

//DB connect
mongoose.connect("mongodb://localhost:27017/summitDB", {useNewUrlParser: true}, (e) => {
    if (e) {
        throw e
    }
    console.log("[o] Connected to the Summit's DB")
})

// Err handling
app.use((err, req, res, next) => {
    console.error(err)
    return res.send({errMsg: err.message})
})

//Listen
app.listen(PORT, () => {
    console.log(`[+] Server is running on port ${PORT}`)
})