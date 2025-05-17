const { Schema, model } = require('mongoose')

const teamSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  members: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Hero'
    }
  ]
})

module.exports = model('Team', teamSchema)
