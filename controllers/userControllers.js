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

        connection.query('SELECT * FROM user', (err, rows)=>{
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