import configDatabase from './configDatabase';
import mongoose from 'mongoose';

const Task = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true,
    unique: true
  },
  date: {
    type: Date,
    min: '2020-01-01',
    default: Date.now
  }
});

export default mongoose.model('Task', Task);
