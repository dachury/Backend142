const Cliente = require('../models/Cliente');

// funcion agregar clientes

exports.agregarClientes = async(req, res)=>{
    try {
        
        let clientes;
        clientes = new Cliente(req. body)
        await clientes.save();
        res.json(clientes);

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al agregar un cliente');
    }
}



// Funcion buscar clientes
exports.mostrarClientes = async (req, res)=>{
    try {
        
        const clientes = await Cliente.find();
        res.json(clientes);

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al mostrar los clientes');
    }
}

// mostrar un cliente

exports.BuscarCliente = async (req, res)=>{
    try {
        
            let clientes = await Cliente.findById(req.params.id);
            if(!clientes){
                res.status(404).send("el cliente no se encuentra por ID");

            }else{
                res.json(clientes);
            }

    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al buscar el cliente');
    }
}

// funcion modicir clientes metodo put
exports.modificarClientes = async (req, res) =>{
    try {

        const clientes = await Cliente.findOneAndUpdate({_id: req.params.id}, req.body, {new:true} );
        if(!clientes)
            res.status(404).send('cliente no encontrado');
        else
            res.json(clientes);
        
        
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al editar el cliente');
        
        
    }

}

//funcion editar utilizando patch

exports.editarClientes = async(req, res) =>{
    try {
        const clientes = await Cliente.findByIdAndUpdate(req.params.id, req.body,{new:true});
if(!clientes){
    return res.status(404).send("el cliente no existe");
}
res.json(clientes);
    } catch (error) {
        console.log(error)
        res.status(500).send('hubo un error al editar el cliente');
    }
}

exports.eliminarClientes = async(req, res) =>{

try {
   let clientes = await Cliente.findById({_id: req.params.id});
   if(!clientes){
    res.status(404).send("El cliente no existe");
    return
   }
   await Cliente.findOneAndDelete({_id: req.params.id})
   res.json({msg: "El cliente fue eliminado con éxito"});
} catch (error) {
  console.log(error)
  res.status(500).send('hubo un error al eliminar un cliente');
}
}