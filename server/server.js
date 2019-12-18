const express = require('express');
const mysql = require('mysql');
const app = express();
const path = require('path');
const PORT = 3007;

const connection = require('/Users/laskey/Documents/Price_Shipping/db/config.js');
const cors = require('cors');

// connection.connect((err) => {
//     if (err) {
//         console.error(err)
//     } else {
//         console.log('Connection Success')
//     }
// });

app.use(cors());
app.use(express.static('dist'));

app.get('/getPrice', (req,res) => {
    res.sendFile(path.join(`${__dirname}/../dist/bundle.js`))
})

app.get('/products/:id', (req, res) => {
    connection.query(`SELECT price, line_1, line_2, line_3  FROM products WHERE id = '${req.params.id}' `, (err, results) => {
        if (err) {
            console.error(err)
        } else {
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



app.listen(PORT, (err) => {
    if(err){
        console.error(err)
    }
    console.log(`listening on port ${PORT}`);
});