const express =require('express');

const router = express.Router();


router.get("/" , (req, res)=>{
    res.send("Olá, visitante!")
})

router.get('/about' , (req, res)=>{
    res.send('Sobre nós')
})

module.exports = router;

