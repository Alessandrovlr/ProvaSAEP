const express = require('express');
const pool = require('../services/db');

const router = express.Router();


router.get('/', async (req, res) => {
    try {
      const result = await pool.query(`
        SELECT id_usuario, nome, senha FROM usuarios
      `);
      res.json(result.rows);
    } catch (err) {
      res.status(500).json({ erro: 'Erro ao buscar usuarios' });
    }
  })

router.post('/', async (req, res) => {
  const { nome, senha } = req.body;
    try {
        const result = await pool.query(
        'INSERT INTO usuarios (nome, senha) VALUES ($1, $2) RETURNING *',
        [nome, senha]
        );
        res.status(201).json(result.rows[0]);
    } catch (err) {
        res.status(500).json({ erro: 'Erro ao cadastrar usuario' });
    }
})