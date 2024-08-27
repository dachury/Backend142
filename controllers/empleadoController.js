const Empleado = require('../models/Empleado');

// funcion agregar clientes

exports.agregarEmpleados = async(req, res)=>{
    try {
        
        let empleados;
        empleados = new Empleado(req. body)
        await empleados.save();
        res.json(empleados);

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al agregar un empleado');
    }
}



// Funcion buscar empleados
exports.mostrarEmpleados = async (req, res)=>{
    try {
        
        const empleados = await Empleado.find();
        res.json(empleados);

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al mostrar los empleados');
    }
}

// mostrar un empleado

exports.BuscarEmpleado = async (req, res)=>{
    try {
        
            let empleados = await Empleado.findById(req.params.id);
            if(!empleados){
                res.status(404).send("el empleado no se encuentra por ID");

            }else{
                res.json(empleados);
            }

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al buscar el empleado');
    }
}

// funcion modicir empleados metodo put
exports.modificarEmpleados = async (req, res) =>{
    try {

        const clientes = await Empleado.findOneAndUpdate({_id: req.params.id}, req.body, {new:true} );
        if(!empleados)
            res.status(404).send('empleado no encontrado');
        else
            res.json(empleados);
        
        
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al editar el empleado');
        
        
    }

}

//funcion editar utilizando patch

exports.editarEmpleados = async(req, res) =>{
    try {
        const empleados = await Empleado.findByIdAndUpdate(req.params.id, req.body,{new:true});
if(!empleados){
    return res.status(404).send("el empleado no existe");
}
res.json(empleados);
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al editar el empleado');
    }
}

exports.eliminarEmpleados = async(req, res) =>{

try {
   let empleados = await Empleado.findById({_id: req.params.id});
   if(!empleados){
    res.status(404).send("El empleado no existe");
    return
   }
   await Empleado.findOneAndDelete({_id: req.params.id})
   res.json({msg: "El empleado fue eliminado con éxito"});
} catch (error) {
  console.log(error)
  res.status(500).send('hubo un error al eliminar un empleado');
}
}