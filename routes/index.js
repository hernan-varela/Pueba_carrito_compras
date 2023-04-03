const { Router } = require("express");
const router = Router();

const usuarioRoutes = require('./usuario')
const carritoRoutes = require('./Carrito')
const transporteRoutes = require('./transporte')


router.use(usuarioRoutes)
router.use(carritoRoutes)
router.use(transporteRoutes)




module.exports = router;