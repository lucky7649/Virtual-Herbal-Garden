const express = require('express');
const { register, login , logout , getUserProfile , bookmark , getUserBookmarks ,  removebookmark , getCount, userData} = require('../controllers/userController'); // Import register and login functions
const authenticateUser = require('../middleware/authMiddleware');
const router = express.Router();

// POST route for user registration
router.post('/register', register);

// POST route for user login
router.post('/login', login);

router.post('/logout', logout );

router.get("/profile",authenticateUser, getUserProfile);

router.post('/bookmark', bookmark);

router.get('/getbookmark', getUserBookmarks)

router.post('/romovebookmark', removebookmark);

router.get('/getCount', getCount); // usercount

router.get('/userData', userData);



module.exports = router;
