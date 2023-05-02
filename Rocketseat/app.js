const express = require("express")
const {randomUUID} = require("crypto")
const fs = require("fs")

const app = express()


app.use(express.json())

let produtos = []

fs.readFile("produtos.json", "utf-8", (err, data) =>{
  if(err){
    console.log(err)
  }else{
    produtos = JSON.parse(data)
  }
})


app.listen(4002, ()=>console.log("Servidor rodando na porta 4002"))
////////////////////////////////////////////////////////////////////////////////////////
app.post("/produtos",(req, res) =>{
  const {name, price} = req.body
  const produto ={
    name, 
    price,
    id: randomUUID()
  }
  produtos.push(produto)
  console.log("Produto inserido com sucesso")
  return res.json(produto)
})
//////////////////////////////////////////////////////////////////////////////////////////
// rota que lista as coisas cadastradas
app.get("/produtos",(req, res) =>{
  return res.json(produtos)
})
/////////////////////////////////////////////////////////////////////////////////////////
// busca o produto pelo id gerado
app.get("/produtos/:id", (req, res) => {
  const {id} = req.params
  const produto = produtos.find(produto => produto.id === id)
  return res.json(produto)
})

////////////////////////////////////////////////////////////////////////////////////////
// altera dados 
app.put("/produtos/:id",(req, res) =>{

  const {id} = req.params
  // dados que o put vai receber
  const {name, price} = req.body
  // busca pelo index
  const produtoIndex = produtos.findIndex(produto => produto.id === id)

  produtos[produtoIndex] = {
    ...produtos[produtoIndex], // rest operator
    name,
    price
  }
  criararquivo(console.log("Produto alterado com sucesso"))
  return res.json({message: "produto alterado com sucesso"})
})
/////////////////////////////////////////////////////////////////////////////////////////
app.delete("/produtos/:id",(req, res) =>{
  const {id} = req.params
  const produtoIndex = produtos.findIndex(produto => produto.id === id)
  produtos.splice(produtoIndex, 1)
  criararquivo(console.log("Produto removido com sucesso"))
  
  return res.json({message: "produto REMOVIDO com sucesso"})
})
////////////////////////////////////////////////////////////////////////////////////////
function criararquivo(){
  // cria um aquivo para armazenamento de informações
  fs.writeFile("produtos.json", JSON.stringify(produtos), (err)=>{
    if(err){
      console.log(err)
    }else{
      console.log("")
    }
  })
}


// https://www.youtube.com/watch?v=fm4_EuCsQwg&t=437s
// parei nos 48 minutoss

