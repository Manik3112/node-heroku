/*
* User Function called by Routes
* These Functions further depends on other Files
*/

const userData = require('../models/user.js');
const carData = require('../models/car.js');

module.exports = { userLogin, userRegister, returnVehicle, getVehicle, assignVehicle }

function userLogin(req, res){
	
	res.send('User Login')
}
function userRegister(req, res){
	let userName = req.body.name
	let userEmail = req.body.email
	let userPassword = req.body.pass
	let response = userData.addUser({
		name: userName,
		email: userEmail,
		password: userPassword
	})
	res.json(response)
}

function returnVehicle(req, res){
	var gen = generator(req.tokenEmail)
	let response
	function* generator(email) {
		yield response = carData.returnVehicle(email)
		yield response = userData.returnVehicle(email)
	}
	gen.next()
	if(response.success === true){gen.next()}
	res.send(response)
}
function getVehicle(req, res){
	let response = carData.freeVehicle()
	res.send(response)
}

function assignVehicle(req, res){
	let email = req.tokenEmail
	let carId = req.params.id
	new Promise((resolve, reject) => {
		console.log('Initial')
		resolve()
	}).then(() => {
		console.log('2nd')
		setTimeout(()=>{let response = userData.assignVehicle(email,carId)},0)
		if(response.success === false){reject()}
	}).then(() => {
		console.log('3rd')
		setTimeout(()=>{response = carData.assignVehicle(email,carId)},0)
		res.send(response)
	}).catch(()=>{
		res.end('Something Went Wrong.')
	})
}