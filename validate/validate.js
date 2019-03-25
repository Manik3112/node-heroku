/*
* This File Contains Authentication and Validation
*/

const fs = require('fs')
const Joi = require('joi')
const jwt = require('jsonwebtoken');
const userData = require('../models/user.js');

let secretKey = 'shhhhh'
let Token = 'undefined'

exports.vRegisterUser = (req, res, next) => {
	const schema = Joi.object().keys({
        name: Joi.string().required(),
        email: Joi.string().email().required(),
        pass: Joi.string().required()
    });
    Joi.validate(req.body, schema, async (err,result) => {
    	if(err){
    		res.send('Error Occured')
    	}
    	else{
    		next()
    	}
    })
}
exports.vLoginUser = (req, res, next) => {
	const schema = Joi.object().keys({
        email: Joi.string().email().required(),
        pass: Joi.string().required()
    });
    Joi.validate(req.body, schema, (err,result) => {
    	if(err){
    		res.send('Error Occured')
    	}
    	else{
    		next()
    	}
    })
}
exports.authLogin = async (req, res, next) => {
	let User = userData.getUser()
	if(User.length !== 0){
		for(let i=0 ; i<User.length ; i++ ){
			if(User[i].Email == req.body.email && User[i].Pass == req.body.pass){
				let tokenObj = {}
				tokenObj.email = req.body.email
				await jwt.sign(tokenObj, secretKey,(err, token) => {
					Token = token
				})
			}
			console.log(Token)
			next()
		}
	}
	else{
		res.send('Error Occureds')
	}
}
exports.showToken = (req, res) => {
	res.send(Token)
}
exports.authToken = (req, res, next) => {
	jwt.verify(Token, secretKey, (err, decoded) => {
		if(err){
			res.send('Not Authorised')
		}
		else{
			req.tokenEmail = decoded.email
			next()
		}
	})
}
exports.authManager = (req, res, next) => {
	jwt.verify(req.body.token, secretKey,(err,decoded) => {
		if(err){res.send('Not Authorised')}
		else{
			if(decoded.email == 'manik3112@gmail.com'){
				next()
			}
			else{
				res.send('Error')
			}
		}
	})
}
exports.logout = (req,res) => {
	Token = 'undefined'
	res.send('Logout')
}