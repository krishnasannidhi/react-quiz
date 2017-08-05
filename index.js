const express= require('express')
const app=express();
const path=require('path')

app.use(express.static(__dirname+'/dist'))

app.get('/',(req,res)=>{
  res.sendFile(path.join(__dirname+'/index.html'))
})
app.listen('8000',()=>{
  console.info('react quiz on port 8000')
})