class Alunos {
    constructor(data){
        this.id = data.id;
        this.nome = data.nome;
        this.nascimento = data.nascimento;
    }

    static readAll() { //está OK
        return "SELECT * FROM Alunos";
    }

 static create(data) {  //está OK
     return `INSERT INTO Alunos VALUES (default,"${data.nome}","${data.nascimento}")`;
    }

    static update(data) { //está OK
        return `UPDATE Alunos SET nome="${data.nome}", nascimento ="${data.nascimento}" WHERE id = ${data.id}`;

    }

    static delete(data) {
        return `DELETE FROM Alunos WHERE id = ${data.id}`;
    }

    

}


module.exports = Alunos;
















//CRUD

// CREATE
// READ
// UPDATE
// DELETE