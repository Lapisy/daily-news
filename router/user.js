/**
 * 用户相关的接口
 */
const express = require('express')
const router = express.Router()


// 登录接口
router.post("/login",(req,res)=>{
    res.send("/user/login==")
})

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