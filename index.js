const express = require("express")
var cors = require("cors")
const { Data } = require("./data")
const app = express()
const port = 3001

app.use(express.json())
app.use(cors())

app.get("/", (req,res) => {
    console.log(Data())
    res.send(Data())
})

app.listen(port, function(){
    console.log(`server is running on ${port} 🚀`)
})