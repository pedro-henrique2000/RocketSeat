//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//iniciar o objeto q fara operacoes no bd
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
//utilizar o obj para realizar op.:
db.serialize(() => {
    //     //criar uma tabela
    //     db.run(`
    //         CREATE TABLE IF NOT EXISTS places (
    //             id INTEGER PRIMARY KEY AUTOINCREMENT,
    //             image TEXT,
    //             name TEXT,
    //             address TEXT,
    //             address2 TEXT,
    //             state TEXT,
    //             city TEXT,
    //             items TEXT
    //         );
    //     `)

    //     //inserir dadaos numa tabela
    //     const query = `insert into places(image,name,address,address2,state,city,items) values(?,?,?,?, ?,?,?);`
    //     const values = [
    //         "https://www.cbsaparasdepapel.com.br/imagens/informacoes/empresas-reciclagem-papel-e-papelao-02.jpg",
    //         "Papersider",
    //         "Guilherme Gemballa, Jardim América ",
    //         "N° 260",
    //         "Santa Catarina",
    //         "Rio do Sul",
    //         "Papéis e papelão"
    //     ]

    //     function afterInsertData(err) {
    //         if (err) {
    //             return console.log(err);
    //         }

    //         console.log("Cadastrado com sucesso");
    //         console.log(this)
    //     }

    //     //  db.run(query, values, afterInsertData);

    //     //consultar uma tabela
    //     db.all(`SELECT * FROM places`, function (err, rows) {
    //         if (err) {
    //             return console.log(err);
    //         }
    //         console.log("Registros: ")
    //         console.log(rows)
    //     })

    //     //deletar um dado da tabela
    // db.run(`DELETE FROM places where id = ?`, [4], function (err) {
    //     if (err) {
    //         return console.log(err)
    //     }

    //     console.log("Registro deletado com sucesso")
    // });

})