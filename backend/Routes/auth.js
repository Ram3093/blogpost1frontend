 const { Router }=require('express');
const authControllers=require('../controllers/authControllers')

const routes=Router()

routes.post('/create',authControllers.create)

routes.post('/signup',authControllers.signup_post)

routes.post('/login',authControllers.login_post)

module.exports=routes;



