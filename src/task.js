import configDatabase from './configDatabase';
import mongoose from 'mongoose';

const Task = new mongoose.Schema({
  name: {
    type: String
  },
  date: {
    type: Date,
    min: '2020-01-01'
  }
});

export default mongoose.model('Task', Task);
