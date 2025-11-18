const express = require('express');
const pool = require('../services/db');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
      const result = await pool.query(`
        SELECT e.id_estoque, e.id_produto, p.nome AS nome_produto, e.quantidade FROM estoque e
        JOIN produtos p ON e.id_produto = p.id_produto
      `);
      res.json(result.rows);
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao buscar estoque' });
    }
  });

router.post('/', async (req, res) => {
  const { id_produto, quantidade } = req.body;
    try {
        const result = await pool.query(
        'INSERT INTO estoque (id_produto, quantidade) VALUES ($1, $2) RETURNING *',
        [id_produto, quantidade]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao cadastrar no estoque' });
    }
})