const bookController = require('../controller/BookController')
const router = require('express').Router()

router.get('/api/books', bookController.getAllBooks);
router.get('/api/books/:id', bookController.getSingleBook)

router.post('/api/book', bookController.addNewBook)
router.put('/api/book', bookController.updateBook)

router.delete('/api/book/:id', bookController.deleteBook)

module.exports = router