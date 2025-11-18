const express = require('express');
const pool = require('../services/db');

const router = express.Router();


router.get('/', async (req, res) => {
    try {
      const result = await pool.query(`
        SELECT id_produto, nome, descricao, caracteristicas
      `);
      res.json(result.rows);
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao buscar reservas' });
    }
  });


router.post('/', async (req, res) => {
  const { nome, descricao, caracteristicas } = req.body;
    try {
        const result = await pool.query(
        'INSERT INTO produtos (nome, descricao, caracteristicas) VALUES ($1, $2, $3) RETURNING *',
        [nome, descricao, caracteristicas]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao cadastrar produto' });
    }
})

module.exports = router;