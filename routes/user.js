const express = require('express')
const { getAllUser, findUser, addUser, createUser } = require('../controllers/userControllers')


const router = express()





router.route('/').get(getAllUser)
router.route('/').post(findUser)
router.route('/adduser').get(addUser)
router.route('/adduser').post(createUser)






module.exports = router