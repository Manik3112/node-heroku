/*
* This Files includes
* Routing
* Depends on other files and modules
*/

const express = require('express')
const bodyParser = require('body-parser')
const User = require('./controllers/user.js')
const Manager = require('./controllers/manager.js')
const Validate = require('./validate/validate.js')

const app = express()
var userRoutes = express.Router()
var managerRoutes = express.Router()
app.use(bodyParser.urlencoded({ extended: true })) // support encoded bodies

// Basic Routing
app.get('/', (req, res) => {
	res.send('Welcome Abroad')
})
app.get('/showToken',Validate.showToken)
app.delete('/logout',Validate.logout)

// ROUTES Middleware
app.use('/manager', managerRoutes)
app.use('/user', userRoutes)

// Manager Routes
managerRoutes.get('/showUser', Validate.authManager, Manager.showUser)
managerRoutes.get('/showVehicle', Validate.authManager, Manager.showVehicle)
managerRoutes.put('/editVehicle', Validate.authManager, Manager.editVehicle)
managerRoutes.put('/editUser', Validate.authManager, Manager.editUser)

// User Routes
userRoutes.post('/login', Validate.vLoginUser, Validate.authLogin, User.userLogin)
userRoutes.post('/register', Validate.vRegisterUser, User.userRegister)
userRoutes.get('/getVehicle', Validate.authToken, User.getVehicle)
userRoutes.put('/getVehicle/:id',Validate.authToken, User.assignVehicle)
userRoutes.delete('/returnVehicle',Validate.authToken, User.returnVehicle)
// Listening to Port
app.listen(process.env.PORT || 8081,()=>{console.log("Listening")})