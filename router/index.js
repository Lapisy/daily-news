const express = require('express')
const router = express.Router()

// user relation api
router.use("/user",require("./user"))

// post relation api
router.use("/post",require("./post"))

module.exports = router