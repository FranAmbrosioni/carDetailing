import mongoose from 'mongoose';


//cadena de conexion 
//ojo antes con //localhost:27017 no conectaba 
const uri = 'mongodb://127.0.0.1:27017/myapp'

/*usenewparse:habilita cadena de conexion del analizador de url

useCreateIndex:valga la redudancia, crea automaticamente indices

*/
const options = {
  useNewUrlParser:true,
  useUnifiedTopology: true,
  
};


//los esquemas nos srive para estandarizar nuestro documento

//el then es propio de promesas asincronas

const connectToDatabase = async () =>{
  try {
    
    await mongoose.connect(uri,options);
    console.log('Conectado a Base de datos, y esta tu hermana')
  } catch (error) {
    console.error('Error al conectar: ',error);
  }
};

/*
  mongoose.connect(uri,options).then(
  () => {console.log('Conectado a Base de datos, y esta tu hermana');})
  .catch((err) => {c});
};
*/
// le agrego algunas mejoras 
//al momento de desconectarse qque avise en consola 

mongoose.connection.on('disconnected', () =>{
  console.log('La conexion a base de datos ha sido cerrada');
});

//errores en la conexion
mongoose.connection.on('error',(err) =>{
console.log('Inutil dio error: ',err );
});

export default connectToDatabase;
