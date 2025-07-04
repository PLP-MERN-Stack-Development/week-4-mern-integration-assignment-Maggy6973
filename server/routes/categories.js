import express from 'express';
import Category from '../models/Category.js';
import { body, validationResult } from 'express-validator';


const router = express.Router();

// GET all categories
router.get('/', async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST new category
router.post('/', [
  body('name').notEmpty().withMessage('Category name is required')
], async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  try {
    const category = new Category(req.body);
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    if (err.code === 11000) {
      return res.status(400).json({ error: 'Category already exists' });
    }
    res.status(500).json({ error: err.message });
  }
});

export default router;