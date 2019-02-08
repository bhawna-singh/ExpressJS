const route=require('express').Router()
let students=[
{name:'rohan',college:'nsit'},
{name:'kamya',college:'iit'}
]
route.get('/',function(req,res,next){
    res.send(students)
})
route.post('/',function(req,res,next){
    {students.push({
        name:req.body.name,college:req.body.college
    })
res.send(students)}
})
/*route.get('/add',function(req,res,next){
    students.push({
        name:req.query.name,college:req.query.college})
    
res.send(students)
})*/

route.get('/:id',function(req,res,next)
{
res.send(students[req.params.id])
})
module.exports=route