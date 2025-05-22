const { Schema, model } = require('mongoose')

const heroSchema = new Schema({
  name: { type: String, required: true, unique: true },
  power: { type: String, required: true },
  alias: String,
  related: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Hero'
    }
  ]
})

module.exports = model('Hero', heroSchema)
