module.exports = (fn) =>{
    // Recibe una ↑ funcion y tener una ↓ funcion preparada para enviar
    return function(req,res,next){ // ← Funcion asincrona, que devuelve una promesa
        fn(req, res).catch((error)=>{ 
            next(error)
        });
    };
};
