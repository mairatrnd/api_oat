const jwt = require("jsonwebtoken");
const authConfig = require("../config/auth.json");

module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if(!authHeader){
        return res.status(401).json({
            error: true,
            message:"Token no provided"
        })
    }

    const parts = authHeader.split(" ");

    if(parts.lenght !== 2){
        return res.status(401).json({
            error: true,
            message:"Invalid token type"
        })
    }

    const [scheme, token ] = parts;

    if(scheme.indexOf("Bearer") !== 0){
        return res.status(401).json({
            error: true,
            message:"Token malformatted"
        })
    }
   
    return jwt.verify(token, authConfig.secret, (err, decoded) => {

        if(err){
            return res.status(401).json({
                error: true,
                message:"Token invalid/expired"
            })
        }

        req.userLogged = decoded;

        return next();
    })

}