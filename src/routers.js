import express from 'express';
const router = express.Router()

router.get('/', (req, res) => {
  res.json({
    status: 'Bem-Vindo NTalk API',
  })
});

console.log('arquivo route.js rodando');

export default router;