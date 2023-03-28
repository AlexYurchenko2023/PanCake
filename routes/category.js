const express = require ('express')
const controllers = require ('../controllers/category.js')
const router = express.Router()


router.post ('/login', controllers.login)

router.post ('/register', controllers.register)


module.exports = router