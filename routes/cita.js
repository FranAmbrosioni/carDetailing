//NO OLVIDARSE LOS RETURN EN LOS ERRORES O CUANDO PASA POR EL CATCH


//ojo al importar q no reciba el objecto entre llaves
//rompe todo
import  Express  from "express";
import Cita from "../models/Cita";


const router = Express.Router();

//agregar una nueva cita 

router.post('/nueva-cita', async (req, res) =>
{
    const body = req.body;
try {   
    const citaDB = await Cita.create(body);
    res.status(200).json(citaDB);   
} catch (error) {    
    return res.status(500).json({
        mensaje:'ocurrio un error',
        error 
    });
}
});


//obtener nota por id 
router.get('/cita/:id', async (req,res) =>{
    const _id = req.params.id;
    try {
        const citaDB = await Cita.findOne({_id});
        if (!citaDB) {
          return res.status(400).json({
                mensaje:'no se encontro el registro con el Identificador: '
            })
        }
        res.json(citaDB);
        
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrio un error',
            error
        })
    }
});


router.get('/cita', async (req,res) => {
    try {
    debugger;
    const citaDB = await Cita.find();          
        res.json(citaDB);
    } catch (error) {    
        return res.status(400).json({
            mensaje: 'ocurrio un error',
            error
        })
    }
});


router.delete('/cita/:id', async (req,res) =>{
    const _id = req.params.id;
    try {
        const citaDb = await Cita.findByIdAndDelete({_id});
        if (!citaDb) {
            return res.status(404).json({
                mensaje:'no se ha encontrado el id indicado',
                error
            })
            
        }
        res.json(citaDb);
    } catch (error) {

        return res.status(400).json({
            mensaje:'Ocurrio un error',
            error
        })
    }
});

router.put('/cita/:id', async (req,res) =>{
    const _id = req.params.id;
    const body = req.body;
    try {
        const citaDB = await Cita.findByIdAndUpdate(_id,
            body,
            {new:true});
        res.json(citaDB);

    } catch (error) {
        return res.status(400).json({
            mensaje:'Ocurrio un error',
            error
        })
    }
});

module.exports= router;
