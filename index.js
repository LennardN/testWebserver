const express = require('express')
const path = require('path')
const mysql = require('mysql2')

var connection = mysql.createConnection({
  host: 'mysqltest',
  user: 'root',
  password: '123',
  database: 'testdb',
});

const PORT = 8080
const app = express()

connection.connect(function(err) {
    console.log("try to connect");
    if(err){
        console.log(err)
        console.log("couldnt connect")
    } else {
        console.log("connected :)")
    }
  });

app.use(express.static(path.join(__dirname, 'client')))

app.listen(PORT, () => {
    console.log(`Connection: https://${getIPv4()}:${PORT}`)
})

app.use(express.json())

app.post('/register', (req, res) => {
    connection.query(
        `INSERT INTO testdb.users (first_name, last_name, gender) VALUES ('${req.body.firstname}','${req.body.lastname}','${req.body.gender}');`
        , function (error, results, fields) {
        
        if (error){
            res.status(500).send()
            console.log(error)
        } 
        console.log('query result: ', results)
        res.status(200).send()
      })
})


app.post('/search', (req, res) => {
    connection.query(
        `SELECT * FROM testdb.users WHERE '${req.body.search}' = first_name OR '${req.body.search}' = last_name OR '${req.body.search}' = gender LIMIT 10`
        , function (error, results, fields) {
        
        if (error){
            res.status(500).send()
            console.log(error)
        } 
        console.log('query result: ', results)
        res.status(200).send(results)
      })
})


const getIPv4 = () => {
    const networks = require('os').networkInterfaces();
    for (var network in networks) {
        var j = networks[network]

        for (var i = 0; i < j.length; i++) {
        var q = j[i]
        if (q.family === 'IPv4' && q.address !== '127.0.0.1' && !q.internal)
            return q.address
        }
    }
    return '0.0.0.0'
}

//connection.end();