import mongoose from 'mongoose';

const password = 'ntalk';
const urlConnect = `mongodb+srv://ntalk:${password}@cluster0-aoag0.gcp.mongodb.net/test?retryWrites=true&w=majority`;

const configDatabase = (urlConnect) => {
  
  try {
    mongoose.connect(urlConnect, { useNewUrlParser: true, useUnifiedTopology: true })
    console.log('>>>>> connect with Database.');
  
  } catch (error) {
    console.log('error na conexão com o bd: ', error);
  }
}

export default configDatabase(urlConnect);
