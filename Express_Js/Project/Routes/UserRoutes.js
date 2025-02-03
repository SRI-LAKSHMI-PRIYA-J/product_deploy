const userController = require('../controller/UserController')
const router = require('express').Router()

router.get('/api/users', userController.getAllUsers)
router.get('/api/users/:id', userController.getSingleUser)
router.post('/api/user', userController.addNewUser)
router.put('/api/user', userController.updateUser)
router.delete('/api/user/:id', userController.deleteUser)

module.exports = router