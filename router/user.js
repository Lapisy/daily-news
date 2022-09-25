/**
 * 用户相关的接口
 */
const express = require('express')
const router = express.Router()
const userController = require("../controller/user-controller")


// 登录接口
router.post("/login",userController.login)

// 注册接口
router.post("/register",userController.register)

// 更新接口
router.post("/update",(req,res)=>{
    res.send("/user/update==")
})

// 获取用户接口
router.post("/profile",(req,res)=>{
    res.send("/user/profile==")
})

module.exports = router