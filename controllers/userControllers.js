require('dotenv').config();
const mysql = require('mysql')


const pool = mysql.createPool({
    connectionLimit: 100,
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  



exports.getAllUser = (req, res)=>{


    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log(`connected as ID, ${connection.threadId}`);

        // user connection

        connection.query('SELECT * FROM user WHERE status = "active" ', (err, rows)=>{
            // when done with the connection
            connection.release();

            if(!err){
               
                res.render('home', {rows})
            }else{
                console.log(err);
            }
        })


 

      });
}


exports.findUser = (req, res)=>{


    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log(`connected as ID, ${connection.threadId}`);


            let searchterm = req.body.search
        // user connection

        connection.query('SELECT * FROM user WHERE first_name LIKE ?', ['%' + searchterm + '%'], (err, rows)=>{
            // when done with the connection
            connection.release();

            if(!err){
                console.log(rows)
                res.render('home', {rows})
            }else{
                console.log(err);
            }
        })


 

      });
}

exports.addUser = async(req, res, next)=>{

    res.render('adduser')

}

exports.createUser = async(req, res, next)=>{

    const {first_name, last_name, phone, email, comments} = req.body

    pool.getConnection((err, connection) => {
        if (err) throw err;
        console.log(`connected as ID, ${connection.threadId}`);


            let searchterm = req.body.search
        // user connection

        connection.query('INSERT  INTO user SET first_name = ?, last_name = ?, email=?, phone=?, comments=?', [first_name,last_name,email, phone, comments], (err, data)=>{
            // when done with the connection
            connection.release();

            if(!err){
                
                res.render('adduser', {alert:"success, .......User registered successfully"} )
            }else{
                console.log(err);
            }
        })


 

      });


   
}