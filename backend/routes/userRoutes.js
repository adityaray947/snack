const express = require('express');
const asyncHandler = require('express-async-handler');
const { registerUser, authUser, searchItem  } = require('../controllers/userController.js');

const router = express.Router();

router.route('/').post(registerUser)
router.post('/login', authUser);      
router.post('/search', asyncHandler(searchItem));
module.exports = router;
