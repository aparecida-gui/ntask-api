import mongoose from 'mongoose';

const password = 'ntalk';
const urlConnect = `mongodb+srv://ntalk:${password}@cluster0-aoag0.gcp.mongodb.net/test?retryWrites=true&w=majority`;

const configDatabase = async (urlConnect) => {
  
  try {
    await mongoose.connect(urlConnect, { useNewUrlParser: true })
    console.log('conexão realizada.');
  
  } catch (error) {
    console.log('error na conexão com o bd: ', error);
  }
}

export default configDatabase(urlConnect);
