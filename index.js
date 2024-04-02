import express from "express";
import dotenv from 'dotenv';

dotenv.config();

const appServer = express();

const PORT = process.env.PORT || 4000;

// This is a list of books that we want to return once the end point is hit.
const BOOKS = [
{
    id:1,
    title:"Adventures of Feluda-Vol1",
    author: "Satyajeet ray"
},
{
    id:2,
    title:"Adventures of Feluda-Vol2",
    author: "Satyajeet ray"
},
{
    id:3,
    title:"Tales Of Taranath tantrik",
    author: "Bibhutibhushan Bandyopadhyay"
},
{
    id:4,
    title:"The Hound of the Baskervilles",
    author: "Arthur Conan Doyle"
},
{
    id:5,
    title:"The Lord of Rings",
    author: "J. R. R. Tolkien"
}
]

appServer.use(express.urlencoded({extended:false}))
appServer.use(express.json())

appServer.listen(PORT,()=>{
    console.log(`Started listening on server ${PORT}`)
})

appServer.get('/',(req,res)=>{
    res.send(
        `<h2 style='color:orange'>On Home Page<h2>`
    )
})

appServer.get('/about',(req,res)=>{
    res.send(
        `<h2 style='color:green'>On About page</h2>`
    )
})

appServer.get('/contact',(req,res)=>{
    res.send(
        `<h2 style='color:indigo'>On Contact page</h2>`
    )
})

appServer.get('/books/favourite',(req,res)=>{
    res.send(BOOKS)
})

appServer.put('/update/:id',(req,res)=>{
    let {id} = req.params
    console.log('Inside the put command',id,typeof id)
    
    id = parseInt(id)
    if(id){
        BOOKS.forEach(book=>{
            if(book.id === id){
                book.title = book.title+`#${id}`
                book.author = book.author+`#${id}`
                console.log(book)
            }
        })
    }
    console.log(BOOKS)
    res.send(BOOKS)
})

appServer.patch('/update/:id',(req,res)=>{
    let{id} = req.params
    id = parseInt(id)
    const data = req.body

    BOOKS.forEach(book=>{
        if(book.id === id){
            for (const key in data) {
               book[key] = data[key]
            }
        }
    })
    res.send(BOOKS)
})

appServer.delete('/delete/:id',(req,res)=>{
        let {id} = req.params
        id = parseInt(id)
        const index = BOOKS.findIndex(book=>book.id === id)
        console.log('delete index',index)
        if(index>=0){
            BOOKS.splice(index,1)
        }
        res.send(BOOKS)
        
})