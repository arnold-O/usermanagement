const express = require('express')
const { getAllUser, findUser } = require('../controllers/userControllers')


const router = express()





router.route('/').get(getAllUser)
router.route('/').post(findUser)






module.exports = router