/*
AQUI CREO ESQUEMA PARA EL GUARADADO EN BASE DE DATO 
EN ESTE CASO, VOY A CONTAR CON UN MODELO CITA, 
EL CUAL PUEDE DESPRENDER O PUEDE GUARDAR UN OBJETO CLIENTE
CLIENTE TENDRA: NOMBRE, CELULAR

CITA TENDRA: DIA DE LA FECHA,OBJETO CARRO, OBJETO PERSONA, 


A SU VEZ AL TRABAJAR CON CARROS DEBERIA 
MANEJAR UNA CLASE AUTOS, SOLO PARA CONOCER EL TIPO, SI ES UNA CAMIONETA, AUTO, ETC.


*/

import mongoose, { Schema } from "mongoose";

const schema = mongoose.schema;

//AQUI CREO LA CONSTANTE CITA SCHEMA, ES MAS O MENOS COMO SETEAR CADA UNO DE LOS ATRIBUTOS
//TENIENDO EN CUENTA QUE TIPOO DE DATO QUIERO QUE SE ALOJE AQUI EN BD


const citaSchema = new Schema({
    
        nombre:{type: String, required: [true,'required Name']},
        phone :{type: String , required : [true,'required Cellphone'],length:[11,'only phone with 11 characters']},
        fecha: {type:Date,required:true},  
        descripcionAuto : {type:String, required: [true, 'description required']}
});


//aqui con la clase mongoose creo la coleccion cita,
// y le doy el formato con el schema creado

const Cita = mongoose.model('Cita',citaSchema);

export default Cita;