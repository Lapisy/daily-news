/**
 * 用户相关的接口
 */
const express = require('express')
const router = express.Router()
const userController = require("../controller/user-controller")


// 登录接口
router.get("/login",userController.login)

// 注册接口
router.post("/regist",(req,res)=>{
    res.send("/user/regist==")
})

// 更新接口
router.post("/update",(req,res)=>{
    res.send("/user/update==")
})

// 获取用户接口
router.post("/profile",(req,res)=>{
    res.send("/user/profile==")
})

module.exports = router