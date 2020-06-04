const express = require("express")
const server = express();

//config pasta public
server.use(express.static("public"))

//utilizando template engine
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//configurar caminhos da aplicação
//pagina home
//requisiçao: pedido
//resposta: resposta
server.get("/", function (req, res) {
    return res.render("index.html", { title: "Seu marketplace de resíduos" })
})

server.get("/create-point", function (req, res) {
    return res.render("create-point.html")
})

server.get("/search", function (req, res) {
    return res.render("search.html")
})

//ligar o servidor
server.listen(3000)