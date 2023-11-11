const mongoose = require('mongoose')

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id
        delete ret._id
        delete ret.__v
      }
    }
  }
)

module.exports = mongoose.model('Item', itemSchema)