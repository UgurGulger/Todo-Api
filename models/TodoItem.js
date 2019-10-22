const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TodoItemSchema = new Schema({
    name:  {
        type: String,
        required: true,
    },
    completed: {
        type: Boolean,
        default: false
    },
    isDeleted: { type: Boolean, default: false },
    created_at: { type: Date, default: Date.now },
    updated_at: { type: Date, default: Date.now }
});

const TodoItem = mongoose.model('TodoItem', TodoItemSchema);

module.exports = TodoItem;
