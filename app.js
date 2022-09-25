const express = require('express')
const app = express()
const {PORT} = require("./config/config.default")
const morgan = require("morgan")
const router = require("./router/index")
const errorHandler = require('./middleware/error-handler')
const db = require('./db/mysql')

/**
 * 导入中间件
 */
// 日志中间库
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded())

app.use("/api",router)
// add error handler
app.use(errorHandler())

app.listen(PORT,()=>{
    console.log(`Server is runnning at http://localhost:${PORT}`)
})