const express = require('express')
const path = require('path')
var mysql = require('mysql')

var connection = mysql.createConnection({
  host     : 'mysqltest:3306',
  user     : 'root',
  password : '123',
  database : 'testdb'
});

const PORT = 8080
const app = express()
connection.connect();

app.use(express.static(path.join(__dirname, 'client')))

app.listen(PORT, () => {
    console.log(`Connection: https://${getIPv4()}:${PORT}`)
})

app.use(express.json())

app.post('/login', (req, res) => {
    console.log(req.body)
    connection.query('SELECT * FROM testdb.testtable', function (error, results, fields) {
        if (error) throw error;
        console.log('Result Name is: ', results[0].name);
        res.status(200).send({username: results[0].name})
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

connection.end();