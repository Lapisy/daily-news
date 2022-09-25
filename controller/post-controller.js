const express = require('express')
const router = express.Router()
const Logger = require('../util/logger')
const pool = require('../db/mysql')
const postSql = require('../model/post')
const moment = require('moment')

module.exports.publish = () => {
    return (req, res, next) => {
        try {
            pool.getConnection(function (err, connection) {
                if (err) {
                    throw err;
                }
                // insert to db
                // INSERT INTO post(title,content,url,date,from)
                const sqlParam = [
                    "这是第一篇文章",
                    "建一个简单的具有发表文章功能的博客。路由规划是整个网站的骨架部分，因为它处于整个架构的枢纽位置，相当于各个接口之间的粘合剂，所以应该优先考虑。因为我们现在搭建的仅仅是一个具有发表功能的博客，并不具有注册登录，所以会简单很多",
                    "https://jiandanxinli.github.io/2016-10-30.html",
                    moment(Date.now()).format("YYYY-MM-DD HH:mm:ss"),
                    "简单心理 · 技术",
                ];
                connection.query(postSql.insert, sqlParam, function (err, result) {
                    if (err) throw err
                    Logger.info(result)
                    res.status(200).json({
                        msg:"添加成功"
                    })
                    // release connection
                    connection.release();
                })
            });
        } catch (e) {
            next(e)
        }
    }
}
module.exports.all = () => {
    return (req, res, next) => {
        try {
            res.send(req)
        } catch (e) {
            next(e)
        }
    }
}
module.exports.query = () => {
    return (req, res, next) => {
        try {
            res.send(req)
        } catch (e) {
            next(e)
        }
    }
}