const express=require('express')
const server=express()

server.get('/a',function(req,res,next){
    res.send('aaa')
})
server.get('/b',function(req,res,next){
    res.send('bbb')
})
server.use(function(req,res,next){
    res.send("<h1> 404 not found </h1>")
})
server.listen(4444)