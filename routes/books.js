const express = require('express')
const req = require('express/lib/request')
const res = require('express/lib/response')
const router = express.Router()
const Book = require("../models/Book")

// Get back all the books
router.get('/', async (req, res) => {
    try {
        const books = await Book.find()
        res.json(books)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

// Submits a book
router.post('/', async (req, res) => {
    const book = new Book({
        title: req.body.title,
        author: req.body.author,
        isbn: req.body.isbn,
        publication: req.body.publication
    })
    try{
        const savedBook = await book.save()
        res.json(savedBook)
    } catch(err) {
        res.json({
            message: err
        })
    }
})

// Specific book
router.get('/:bookId', async (req, res) => {
    try {
        const book = await Book.findById(req.params.bookId)
        res.json(book)
    } catch (err) {
        res.json({
            message: err
        })        
    }
})

// Delete book
router.delete('/:bookId', async (req, res) => {
    try {
        const removedBook = await Book.remove({
            _id: req.params.bookId
        })
        res.json(removedBook)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

// Update a book
router.patch('/:bookId', async (req, res) => {
    try {
        const updatedBook = await Book.updateOne({
            _id: req.params.bookId
        },
        {
            $set: {
                title: req.body.title,
                author: req.body.author,
                isbn: req.body.isbn,
                publication: req.body.publication,
                updatedAt: Date.now()
            }
        })
        res.json(updatedBook)
    } catch (err) {
        res.json({
            message: err
        })
    }
})

module.exports = router