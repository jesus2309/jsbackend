const express = require("express")
const router = express.Router()

const authenticate = require('../middlewares/authentication')

router.use('/auth', require('./auth'))
router.use('/products', authenticate, require('./products'))
router.use('/reviews', require('./reviews'))
router.use('/users', require('./users'))
router.use('/testimonials', require('./testimonials'))

module.exports = router