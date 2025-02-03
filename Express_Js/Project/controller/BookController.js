const Book = require('../model/book1');


exports.getAllBooks = async (req, res) =>{
    try{
        const books = await Book.find()
        res.json(books)
    }
    catch(err){
        res.status(500).json({msg : err.message})
    }
}

exports.getSingleBook = async (req, res) =>{
    try {
        const book = await Book.findOne({book_id: req.params.id})
        if(!book)
            return res.status(404).json({msg: 'Book Not found'})
        
        res.json(book)
    }
    catch(err){
        res.status(500).json({msg : err.message})
    }
}

exports.addNewBook = async(req,res)=>{
    try{
        const book = await Book.findOne({book_id:req.body.book_id})
        if(!book){
            const addedBook = await Book.create(req.body)
            res.json(addedBook)
        }
        else
        {
            res.json({msg:'Book already exists'})
        }
    }
    catch(err)
    {
        res.status(500).json({msg:err.message})
    }
}

exports.updateBook = async(req,res)=>{
    try{
        const book = req.body
        const fetchedBook = await Book.findOne({book_id:book.book_id})
        if(fetchedBook)
        {
            await Book.updateOne(book)
            res.json(await Book.findOne({book_id:book.book_id}))
        }
        else{
            res.json({msg: 'Book doesnt exists'})
        }
    }
    catch(err)
    {
        res.status(500).json({msg:err.message})
    }
}

exports.deleteBook = async(req,res)=>{
    try{
        const book = await Book.findOne({book_id:req.params.id})
        if(book)
        {
            await Book.deleteOne({book_id:book.book_id})
            res.json(book)
        }
        else{
            res.json({msg:'book dosent exists'})
        }
    }
    catch(err)
    {
        res.status(500).json({msg:err.message})
    }
}