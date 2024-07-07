const express = require("express")
const router = express.Router() 

const app = express()
const porta = 3333

function mostraMulher(request, response) {
 response.json({
    nome: "Milena Felix",
    imagem: "https://media.licdn.com/dms/image/C4D03AQHoWcpt5P3gvw/profile-displayphoto-shrink_200_200/0/1583240879587?e=1722470400&v=beta&t=fF06YS48lZSDefrQ8RCaTukANDzgj8iblQLplsi5KR4",
    minibio: "Software Developer | Java | .Net | SQLServer | Azure | Data Quality Analyst"
 })
}

function mostraPorta() {
    console.log("Servidor criado e rodando na porta ", porta)
}

app.use(router.get("/mulher", mostraMulher))
app.listen(porta, mostraPorta)