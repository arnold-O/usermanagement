const express = require('express')
const { getAllUser } = require('../controllers/userControllers')


const router = express()





router.route('/').get(getAllUser)






module.exports = router