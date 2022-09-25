const express = require("express")
const connection = require('../db/mysql')

exports.login = async (req, res, next) => {
    try {
        throw 'name is valid.'
        res.send("/login====")
    } catch (e) {
        next(e)
    }
}


exports.register = async (req, res, next) => {
    try {
        const sql = 
        res.send("/register====")
    } catch (e) {
        next(e)
    }
}
