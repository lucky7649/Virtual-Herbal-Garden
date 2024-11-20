const express = require('express');
const {
  createCategory,
  getAllCategories,
  getCategoryById,
  updateCategory,
  deleteCategory,
} = require('../controllers/categoryController');
const authenticateUser = require('../middleware/authMiddleware');
const { isAdmin } = require('../middleware/adminMiddleware');

const router = express.Router();

// Route to create a new category (admin only)
router.post('/categories', authenticateUser, isAdmin, createCategory);

// Route to get all categories
router.get('/categories', getAllCategories);

// Route to get a category by ID
router.get('/categories/:categoryId', getCategoryById);

// Route to update a category (admin only)
router.put('/categories/:categoryId', authenticateUser, isAdmin, updateCategory);

// Route to delete a category (admin only)
router.delete('/categories/:categoryId', authenticateUser, isAdmin, deleteCategory);

module.exports = router;
