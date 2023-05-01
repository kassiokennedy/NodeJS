const http = require("http")

http.createServer((req, res) => {
  res.writeHead(200)

  if(req.url === "/produto") {
    res.end(JSON.stringify({message: "URL produto"}))
  }
  if(req.url === "/usuarios") {
    res.end(JSON.stringify({message: "URL usuarios"}))
  }


  res.end(JSON.stringify({message: "Servidor rodando"}))
  
}).listen(4001, () => console.log("Servidor rodando na porta 4001"))


