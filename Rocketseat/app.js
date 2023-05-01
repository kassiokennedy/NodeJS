const express = require("express")

const app = express()

app.use(express.json())

const produtos = []

app.listen(4002, ()=>console.log("Servidor rodando na porta 4002"))

app.post("/produtos",(req, res) =>{
  const body = req.body

  console.log(body)

  // return res.json({message: "Produtos"})
})


// https://www.youtube.com/watch?v=fm4_EuCsQwg&t=437s
// parei nos 48 minutos