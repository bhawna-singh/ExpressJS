const route=require('express').Router()
let teachers=[
{name:'arnav',subject:'maths'},
{name:'tanya',subject:'eng'}
]
route.get('/',function(req,res,next){
    res.send(teachers)
})
route.get('/:id',function(req,res,next)
{
res.send(teachers[req.params.id])
})
module.exports=route