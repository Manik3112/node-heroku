/*
* Function which deals Cars Data transfer
* Array which store cars object
* class which save car data
*/

let carData = [] // Array to Store Cars Object
carData.push({CarId:1,CarName:'Maruti',alloted:'none',status:0})
carData.push({CarId:2,CarName:'Hyundai',alloted:'none',status:1})
carData.push({CarId:3,CarName:'Honda',alloted:'none',status:1})
carData.push({CarId:4,CarName:'Toyota',alloted:'none',status:1})

class Car{
	constructor(){
		this.CarId = id
		this.CarName = name
		this.alloted = 'none'
		this.status = 0
	}
}
exports.showVehicle = () => {
	let flag = 0
	for(let i=0 ; i<carData.length ; i++){
		console.log(carData[i])
		flag = 1
	}
	if(flag === 1){
		return {
			"success": true,
			"payload": {
				"msg" : 'Cars Found'
			}
		}
	}
	return {
		"successg": false,
		"payload": {
			"msg" : 'No Car Found'
			}
		}
}
exports.setVehicle = (id,status) => {
	for(let i=0 ; i<carData.length ; i++){
		if(carData[i].CarId == id)
		{
			console.log(carData[i])
			carData[i].status = status
			return{
				"success": true,
				"payload": {
					"msg" : 'Status Changed'
				}
			}
		}
	}
	return{
		"success": false,
		"payload": {
			"msg" : 'No Car Found'
		}
	}
}
exports.freeVehicle = () => {
	let flag = 0
	for(let i=0 ; i<carData.length ; i++){
		if(carData[i].status === 1){
			console.log(carData[i])
			flag = 1
		}
	}
	if(flag === 1){
		return {
			"success": true,
			"payload": {
				"msg" : 'Cars Found'
			}
		}
	}
	return {
		"successg": false,
		"payload": {
			"msg" : 'No Car Found'
			}
		}
}
exports.assignVehicle = (email,carId) => {
	let flag = 0
	for(let i=0 ; i<carData.length ; i++){
		if(carData[i].CarId == carId && carData[i].status == 1){
			carData[i].alloted = email
			carData[i].status = 2
			flag = 1
		}
	}
	if(flag === 1){
		return {
			"success": true,
			"payload": {
				"msg" : 'Car is been alloted'
			}
		}
	}
	return {
		"successg": false,
		"payload": {
			"msg" : 'Sorry Some issue'
			}
		}
}
exports.returnVehicle = (email) =>{
	let flag = 0
	for(let i=0 ; i<carData.length ; i++){
		if(carData[i].alloted == email){
			carData[i].alloted = 'none'
			carData[i].status = 1
			flag = 1
		}
	}
	if(flag === 1){
		return {
			"success": true,
			"payload": {
				"msg" : 'Car is been dealloted'
			}
		}
	}
	return {
		"success": false,
		"payload": {
			"msg" : 'Sorry Some issue'
			}
		}
}