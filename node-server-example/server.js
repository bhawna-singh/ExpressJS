const express=require('express')
const server=express()
server.get('/',function(req,res,next){
    res.send("hello world")
})
server.get('/greet/:tod/:name',function(req,res,next){
    let tod='morning'
    switch(req.params.tod)
    {
        case 'evening':tod='evening';break;
        case 'morning':tod='morning';break;
    }
    let greeting="good" + tod +" "+req.params.name
    res.send(greeting)
})
server.get('/html',function(req,res,next){
    res.send(`
        <html>
            <body>
<h1>yo</h1>
</body>
</html> `   )
})

server.listen(3333)