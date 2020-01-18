import mongoose from 'mongoose';

//Deprecation Warnings
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);

const password = 'ntalk';
const urlConnect = `mongodb+srv://ntalk:${password}@cluster0-aoag0.gcp.mongodb.net/test?retryWrites=true&w=majority`;

const configDatabase = urlConnect => {
  try {
    mongoose.connect(urlConnect);
    console.log('>>>>> connect with Database.');
  } catch (error) {
    console.log('error na conexão com o bd: ', error);
  }
};

export default configDatabase(urlConnect);
