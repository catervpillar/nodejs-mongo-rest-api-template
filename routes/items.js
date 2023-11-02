const express = require('express')
const router = express.Router()
const Item = require('../models/item')

/**
 * Get all items
 */
router.get('/', async (req, res) => {
  try {
    const items = await Item.find()
    res.json(items)
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

/**
 * Get one item
 */
router.get('/:id', (req, res) => {

})

/**
 * Create one item
 */
router.post('/', async (req, res) => {
  const item = new Item({
    name: req.body.name,
    description: req.body.description,
  })

  try {
    const newItem = await item.save()
    res.status(201).json(newItem)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

/**
 * Update one item
 */
router.patch('/:id', (req, res) => {
  req.params.id
})

/**
 * Delete one item
 */
router.delete('/:id', (req, res) => {
  req.params.id
})

module.exports = router