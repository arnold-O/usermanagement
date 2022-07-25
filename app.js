const express = require('express')
const exphbs = require('express-handlebars')
const bodypaser = require('body-parser')
const mysql = require('mysql')

require('dotenv').config()

const app = express()

app.use(bodypaser.urlencoded({extended:false}))

// parse apllication/json
// app.use(express.json())
app.use(bodypaser.json())




// static files
app.use(express.static('public'))


// templating engines
app.engine('hbs', exphbs.engine({extname:".hbs"}))
app.set('view engine', "hbs")


// Route
app.get('/',(req, res)=>{

    res.render('home');

})


const PORT = process.env.PORT || 5000






app.listen(PORT,()=>{
    console.log(`LISTENING ON PORT ON ${PORT}.....`)

})