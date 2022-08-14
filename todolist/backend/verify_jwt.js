const jwt = require("jsonwebtoken");
require("dotenv").config();

const verifyJwt = (req , res, next) =>{

    const authHeader = req.headers['authorization'];
    if(!authHeader){
        res.json({ status: 401, message: "Unauthorized" });
    } else{
        const token = authHeader.split(' ')[1];
        jwt.verify(token , process.env.ACCESS_TOKEN_SECRET , (err , decode)=>{
            if(err){
            res.json({ status: 403, message: "Forbidden" });
            }else{
                res.json({ status: 200, message: "" , data:decode });
               
            }
        })
    }
}

module.exports = {verifyJwt};