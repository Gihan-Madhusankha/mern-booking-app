const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');


mongoose.connect(process.env.CONNECTION_STRING, {})
.then(() => {
    console.log('Database connected');
})
.catch((err) => {
    console.log('Database connection failed', err);
})

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());


app.get('/api/test', (req, res) => {
    res.json({
        message: "get api called"
    })
});


const PORT = process.env.PORT || 8000;

app.listen(PORT, (req, res) => {
    console.log(`Server is running on PORT ${PORT}`);
});