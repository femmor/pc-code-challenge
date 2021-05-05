import mongoose from 'mongoose';

const { String } = mongoose.Schema.Types

const MovieSchema = new mongoose.Schema({
  name: {
    type: String
  },
  category:
    {
      value: String,
      label: String
    },
  rating: {
    type: Number,
    default: 0
  }
}, {
  timestamps: true
})

const Movie = mongoose.model('Movie', MovieSchema)

export default Movie