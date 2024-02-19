const express = require('express')
const app = express()
const port = 3000
const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://abdulrhmankhalilia1:a123235198967178967178960f@cluster0.lhffmu8.mongodb.net/all-data?retryWrites=true&w=majority")
.then(() => {
  app.listen(port, () => {
    console.log(` app listening on port ${port}`)
  })
})
.catch((err) => {console.log(err);});

app.get('/', (req, res) => {
res.sendFile("./views/home.html",{root: __dirname})
})

