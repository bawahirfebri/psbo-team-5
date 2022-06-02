const mongoose = require('mongoose')

const BookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    isbn: {
        type: Number,
        required: true
    },
    publication: {
        type: Date,
        required: true
    },
    insertedAt: {
        type: Date,
        default: Date.now()
    },
    updatedAt: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Books', BookSchema)