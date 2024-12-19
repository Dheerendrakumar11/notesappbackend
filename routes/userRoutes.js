// const express = require('express');
// const { registerUser, loginUser, getUserById } = require('../controllers/userController');
// const router = express.Router();
// const {protect} = require('../middlewares/authMiddleware')

// router.post('/register', registerUser);
// router.post('/login', loginUser);
// router.get('/detail',protect, getUserById);

// module.exports = router;

const express = require('express');
const { registerUser, loginUser, getUserById, updateUser, deleteUser } = require('../controllers/userController');
const router = express.Router();
const { protect } = require('../middlewares/authMiddleware');

// Register user
router.post('/register', registerUser);

// Login user
router.post('/login', loginUser);

// Get user details (protected route)
router.get('/detail', protect, getUserById);

// Update user details (protected route)
router.put('/update/:id', protect, updateUser);

// Delete user (protected route)
router.delete('/delete/:id', protect, deleteUser);

module.exports = router;
