const express = require("express")

exports.login = async (req, res, next) => {
    try {
        throw 'name is valid.'
        res.send("/login====")
    }catch (e) {
        next(e)
    }
}


exports.register = async (req, res, next) => {
    try {
    
        res.send("/register====")
    }catch (e) {
        next(e)
    }
}
