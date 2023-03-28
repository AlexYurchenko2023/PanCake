// Отвечает за регистрацию пользователя

const express = require ('express')
const controllers = require ('../controllers/auth.js')
const router = express.Router()

//localhost:3000/api/auth/login
router.post ('/login', controllers.login)
//localhost:3000/api/auth/register
router.post ('/register', controllers.register)


module.exports = router