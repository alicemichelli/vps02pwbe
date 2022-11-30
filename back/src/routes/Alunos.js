const { Router } = require('express');
const express = require('express');
const router = express.Router();

const Alunos = require("../controllers/Alunos")

router.get("/read",Alunos.readAll);
router.post("/create",Alunos.create);
router.put("/update",Alunos.alterar);
router.delete("/delete/:id",Alunos.del);

module.exports = router;