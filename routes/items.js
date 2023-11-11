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
router.get('/:id', getItem, (req, res) => {
  res.json(res.item)
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
router.patch('/:id', getItem, async (req, res) => {
  if (req.body.name != null) {
    res.item.name = req.body.name
  }
  if (req.body.description != null) {
    res.item.description = req.body.description
  }
  try {
    const updatedItem = await res.item.save()
    res.json(updatedItem)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

/**
 * Delete one item
 */
router.delete('/:id', getItem, async (req, res) => {
  try {
    await res.item.deleteOne()
    res.json({ message: 'Item deleted' })
  } catch (error) {
    res.status(500).json({ message: error.message })
  }
})

async function getItem(req, res, next) {
  let item
  try {
    item = await Item.findById(req.params.id)
    if (item == null) {
      return res.status(404).json({ message: 'Cannot find item' })
    }
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
  res.item = item
  next()
}

module.exports = router