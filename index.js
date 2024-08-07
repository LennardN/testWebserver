const express = require('express')
const path = require('path')
const mysql = require('mysql')

var connection = mysql.createConnection({
  host: 'mysqltest:3306',
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

app.post('/login', (req, res) => {
    console.log(req.body)
    res.status(200).send({username: "test"})
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