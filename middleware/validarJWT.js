const { response, request } = require('express')
const jwt = require('jsonwebtoken');
const validarJWT = (req = request, res = response, next) => {
    const token = req.header('x-token');
    if(!token){
        return res.status(401).json({
            msg:'No Hay token en la peticion'
        })
    }
    try{
        const playload= jwt.verify(token, process.env.SECRETORPRIVATEKEY);
        console.log(playload);
        //Si no es valido generar error
        next();
    }catch(error){
        console.log(error);
        res.status(401).json({
            msg: 'Token no valido.'
        })
    }
}
module.exports = {validarJWT}