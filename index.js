import express from "express";
import dotenv from 'dotenv';

dotenv.config();

const appServer = express();

const PORT = process.env.PORT || 4000;

// This is a list of books that we want to return once the end point is hit.
const data = [
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
    res.send(data)
})

