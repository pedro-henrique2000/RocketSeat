const express = require("express")
const server = express();

//pegar o banco de dados
const db = require("./database/db.js");

//config pasta public
server.use(express.static("public"))

//habilitar uso do req.body
server.use(express.urlencoded({ extended: true }))

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

server.post("/savepoint", function (req, res) {
    console.log(req.body);

    console.log(req.query)

    const query = `insert into places(image,name,address,address2,state,city,items) values(?,?,?,?, ?,?,?);`
    const values = [
        req.body.image,
        req.body.name,
        req.body.address,
        req.body.address2,
        req.body.state,
        req.body.city,
        req.body.items
    ]

    function afterInsertData(err) {
        if (err) {
            console.log(err);
            return res.render("create-point.html", { error: true })
        }

        console.log("Cadastrado com sucesso");
        console.log(this)

        return res.render("create-point.html", { saved: true })
    }

    db.run(query, values, afterInsertData);


})

server.get("/search", function (req, res) {

    const search = req.query.search

    if (search == "") {
        return res.render("search.html")
    }

    //pegar dados do db
    db.all(`SELECT * FROM places WHERE city LIKE '%${search}%'`, function (err, rows) {
        if (err) {
            return console.log(err);
        }
        console.log(rows)

        return res.render("search.html", { places: rows })
    })

})

//ligar o servidor
server.listen(3000)