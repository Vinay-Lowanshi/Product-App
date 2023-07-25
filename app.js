const express = require('express');
const app = express();
const router = require('./Routes/route.js');
const ejs = require('ejs');
const { connect } = require('http2');
const connectDB=require('./database/db.js')
const product=require('./models/add-product.js')

app.use(express.json());

// Middleware to parse URL-encoded request bodies
app.use(express.urlencoded({ extended: true }));

connectDB()

app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use('/', router); // Change this line

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
