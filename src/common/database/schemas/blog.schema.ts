import mongoose, { Schema } from 'mongoose';
import Blog from '../models/blog.model';

const blogSchema: Schema =   new Schema<Blog>({
  thumbnail: {
    type: String,
  },
  title: {
    type: String,
    required: true
  },
  content: {
    type: String,
    required: true
  },
  created_at: {
      type: Date,
      default: function() {
          return Date.now()
      }
  },
  updated_at: {
      type: Date,
      default: function() {
          return Date.now()
      }
  }
})

export default mongoose.model('Blog', blogSchema)