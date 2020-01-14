import mongoose from 'mongoose';

const User = new mongoose.Schema({
  email: {
    type: String,
    required: [true, '>>> email is required.']
  },
  password: {
    type: String,
    required: [true, '>>> password is required.']
  }
});

export default mongoose.model('User', User);
