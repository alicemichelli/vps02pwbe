const Alunos = require("../models/alunos");
const con = require("../dao/connection");

const readAll = (req, res) => { //Está OK
    con.query(Alunos.readAll(), (err, result) => {
        if (err == null)
            res.json(result).end();
        else
            res.status(500).end();
    });
}

const create = (req, res) => { //Está OK
    con.query(Alunos.create(req.body), (err, result) => {
        if (err == null)
            res.status(201).end();
        else
            if (err.sqlState == 23000)
                res.status(406).json(err).end();
            else
                res.status(500).json(err).end();
    });
}

const alterar = (req, res)=> {  //Está OK

    con.query(Alunos.update(req.body),(err, result) => {
        if(err == null)
            if(result.affectedRows> 0)
                res.status(200).end();
            else
                res.status(404).end();
    });

}


const del = (req, res) => {
    con.query(Alunos.delete(req.params), (err, result) => {
            if (result.affectedRows > 0) 
                res.status(200).end();
             else
                res.status(404).josn(err).end();
             
    });
}


module.exports ={
    readAll,
    create,
    alterar,
    del
}