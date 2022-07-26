const express = require('express')
const { getAllUser, findUser, addUser } = require('../controllers/userControllers')


const router = express()





router.route('/').get(getAllUser)
router.route('/').post(findUser)
router.route('/adduser').get(addUser)






module.exports = router