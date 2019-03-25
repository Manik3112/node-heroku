/*
* Function which deals user Data transfer
* Array which store user object
* class which save user data
*/

let userData = []	// Array to Strore User Object
class User{
	constructor(name,email,pass,token){
		this.UserId = countUserId()
		this.Name = name
		this.Email = email
		this.Pass = pass
		this.carId = -1
	}
	returnUser(){
		return {
			"empid": this.EmpId,
			"name" : this.Name,
			"email": this.Email,
			"password": this.Pass,
			"carId": this.carId
		}
	}
}
(function(){
	UserId = 0
	return countUserId = () => {return ++UserId}
})()
exports.addUser = (obj) => {
	if(userData.push(new User(obj.name,obj.email,obj.password))){
		return {
			"success": true,
			"payload": {
				"msg" : 'Data Inserted'
			}
		}
	}
	else{
		return {
			"success": false,
			"payload": {
				"msg" : 'Data Not Inserted'
			}
		}
	}
}
exports.getUser = () => {
	return userData
}
exports.showUser = () => {
	let flag = 0
	for(let i=0 ; i<userData.length ; i++){
		console.log(userData[i])
		flag = 1
	}
	if(flag === 1){
		return {
			"success": true,
			"payload": {
				"msg": 'User is Consoled'
			}
		}
	}
	return {
		"success": false,
		"payload": {
			"msg" : 'Data Not Found'
			}
		}
}
exports.editUser = (email,pass,name) => {
	let flag = 0
	for(let i=0 ; i<userData.length ; i++){
		if(userData[i].Email === email){
			userData[i].Pass = pass
			userData[i].Name = name
			flag = 1
		}
	}
	if(flag === 1){
		return {
			"success": true,
			"payload": {
				"msg": 'User Data Updated'
			}
		}
	}
	return {
		"success": false,
		"payload": {
			"msg" : 'Data Not Found'
		}
	}
}
exports.assignVehicle = (email,carId) => {
	let flag = 0
	for(let i=0 ; i<userData.length ; i++){
		if(userData[i].Email === email){
			userData[i].carId = carId
			flag = 1
		}
	}
	if(flag === 1){
		return {
			"success": true,
			"payload": {
				"msg": 'Car is Alloted'
			}
		}
	}
	return {
		"success": false,
		"payload": {
			"msg" : 'Data Not Found'
		}
	}	
}
exports.returnVehicle = (email) => {
	let flag = 0
	for(let i=0 ; i<userData.length ; i++){
		if(userData[i].Email === email){
			userData[i].carId = -1
			flag = 1
		}
	}
	if(flag === 1){
		return {
			"success": true,
			"payload": {
				"msg": 'Car is Dealloted'
			}
		}
	}
	return {
		"success": false,
		"payload": {
			"msg" : 'Data Not Found'
		}
	}	
}
