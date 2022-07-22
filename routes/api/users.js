const express = require('express');
const router = express.Router();
const usersCtrl = require('../../controllers/api/users')

// POST /api/users to create a user
router.post('/register', usersCtrl.register);


module.exports = router;






