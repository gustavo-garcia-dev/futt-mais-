const express = require("express")
const app = express()
const PORT = 4000

//MIDDLEWARE deixando publico.
app.use(express.static('public'))

//rota principal 
app.get("/", (req, res) => {
    res.send("Bem vindo ao eu site futt mais")
})

//executando servidor 
app.listen(PORT, () => {
    console.log(`Servidor do projeto, rodando em http://localhost:${PORT}`)
})