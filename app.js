const express = require('express')
const app = express()
const path= require('path')
const PORT=3005

app.use(express.static('public'))

app.get('/', (req,res)=>{
    res.sendFile(path.join (__dirname, './views/index.html'))
})

app.listen(PORT, ()=>console.log(`Servidor escuchando en el puerto ${PORT}
http://localhost:${PORT}`))