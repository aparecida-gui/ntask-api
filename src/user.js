import mongoose from 'mongoose';

const User = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '>>> name is require']
  },
  email: {
    type: String,
    unique: true,
    required: [true, '>>> email is required.'],
    lowercase: true
  },
  password: {
    type: String,
    select: false,
    required: [true, '>>> password is required.']
  },
  createDate: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.model('User', User);
