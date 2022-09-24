const express = require('express')
const app = express()
const {PORT} = require("./config/config.default")
const morgan = require("morgan")

/**
 * 导入中间件
 */

app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded())

app.get("/",(req,res)=>{
    res.send('hello world===')
})

app.listen(PORT,()=>{
    console.log(`Server is runnning at http://localhost:${PORT}`)
})