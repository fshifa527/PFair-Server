const express=require('express')
const router=express.Router()
const userController=require('../Controller/userController')
const projectController=require('../Controller/projectController')
const jwtMiddleware = require('../Middleware/jwtMiddleware')
const multerMiddleware=require('../Middleware/multerMiddleware')




router.post('/register',userController.userRegister)
router.post('/login',userController.userLogin)
router.post('/add-project',jwtMiddleware,multerMiddleware.single('image'),projectController.addProject)
router.get('/home-projects',projectController.homeProjects)
router.get('/all-projects',jwtMiddleware,projectController.allProjects)
router.get('/user-projects',jwtMiddleware,projectController.userProjects)
router.delete('/delete-project/:pid',jwtMiddleware,projectController.removeProject)

module.exports=router