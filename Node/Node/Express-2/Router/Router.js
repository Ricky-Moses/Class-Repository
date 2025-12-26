import express from 'express'
import register from '../Controllers/Register.js'
import Login from '../Controllers/Login.js'

const route = express.Router()

route.post("/register", register)
route.post("/login", Login)

export default route