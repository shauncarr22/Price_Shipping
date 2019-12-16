const express = require('express');
const mysql = require('mysql');
const app = express();
const PORT = 3007;
const mysqlConfig = require('./db/config.js');
const connection = mysql.createConnection(mysqlConfig);
const cors = require('cors');

connection.connect((err) => {
    if (err) {
        console.error(err)
    } else {
        console.log('Connection Success')
    }
});

app.use(cors());
app.use(express.static('dist'));

app.get('/products/:id', (req, res) => {
    connection.query(`SELECT price, line_1, line_2, line_3  FROM products WHERE id = '${req.params.id}' `, (err, results) => {
        if (err) {
            console.error(err)
        } else {
            console.log('Success!!!')
            res.send(results)
        }
    })
});
app.get('/products', (req, res) => {
    connection.query('SELECT *  FROM products', (err, results) => {
        if (err) {
            console.error(err)
        } else {
            console.log('Success!!!')
            res.send(results)
        }
    })
});



app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
});