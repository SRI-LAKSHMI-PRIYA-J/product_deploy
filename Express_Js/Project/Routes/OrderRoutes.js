const orderController = require('../controller/OrderController')
const router = require('express').Router()

router.get('/api/orders', orderController.getAllOrders)
router.get('/api/orders/:id', orderController.getSingleOrder)
router.post('/api/order', orderController.addNewOrder)
router.put('/api/order', orderController.updateOrder)
router.delete('/api/order/:id', orderController.deleteOrder)

module.exports = router