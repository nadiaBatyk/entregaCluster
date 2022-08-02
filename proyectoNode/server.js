const express = require('express');

const app = express();
const PORT = process.env.PORT || 8080;

app.get('/datos',(req,res)=>{
    res.send(`Servidor conectado al puerto ${PORT} y PID ${process.pid}`)
})

app.listen(PORT,()=>{
    console.log(`Servidor conectado al puerto ${PORT}`);
})