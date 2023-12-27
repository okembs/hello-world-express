const express = require('express');
const app = express()
const port = 3000

const tl = ['kilo' , 'jericho', 'tomato' , 'maggi']

app.get('/' , (req , res)=>{

    res.json({tl , data: 'what are you doing'})
    
 
    
})

app.listen(port, ()=>{
    console.log(`it is listening on ${port}`)
})