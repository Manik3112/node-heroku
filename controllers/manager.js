/*
* Manager Function called by Routes
* This Functions Further depends on other files
*/

const userData = require('../models/user.js');
const carData = require('../models/car.js');

module.exports = { showUser, showVehicle, editUser, editVehicle }

function showUser(req, res){
	let response = userData.showUser()
	res.send(response)
}
function showVehicle(req, res){
	let response = carData.showVehicle()
	res.send(response)
}
function editUser(req, res){
	let email = req.body.email
	let pass = req.body.pass
	let name = req.body.name	
	let response = userData.editUser(email,pass,name)
	res.send(response)
}
function editVehicle(req, res){
	let response = carData.setVehicle(req.body.id,req.body.status)
	res.send(response)
}
