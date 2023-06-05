const mongoose = require('mongoose'); //importing mongoose to create a new Schema

const ToDoSchema = new mongoose.Schema({ //create the schema
    item:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('todo', ToDoSchema) //export the schema