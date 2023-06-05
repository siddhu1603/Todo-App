const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(express.json()); // to get data in json format


const PORT = process.env.PORT || 5500;

app.use(cors()); //use cors in the app

const TodoItemRoute = require('./routes/todoItems')

mongoose.connect(process.env.DB_CONNECT) // connecting the database
.then(() => console.log("Database Connected"))
.catch(err => console.log(err))

app.use('/', TodoItemRoute);

app.listen(PORT, ()=> console.log("Server Connected"));

