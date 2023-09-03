import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { log } from "console";


export const comparePasswords = (password,hashedPassword)=>{
    return bcrypt.compare(password, hashedPassword)
}

export const hashPassword = (password) =>{
    return bcrypt.hash(password, 5);
}

export const createJWT = (user)=>{
    return jwt.sign(
        {
            id: user.id,
            username: user.username
        },
        process.env.JWT_SECRET
    );
}

export const protect =  (req, res, next)=>{

    // const bearer = getToken(req.headers['cookie']) brower intergration
    const bearer = req.headers.authorization;
    
    if (!bearer){
        res.status(401)
        res.json({message:"Unauthorized"})
        return;
    }
    const  [,token] = bearer.split(' ');
    if (!bearer){
        res.status(401)
        res.json({message:"Invalid token"})
        return;
    }
    try{
        const  user = jwt.verify(token,process.env.JWT_SECRET);
        req.user = user;
    } catch (e){
        res.status(401)
        res.json({message:"invalid token provided"})
        return;
    }
    next();
}

export const getToken = (str) =>{
    const bits = str.split(';');
    for(const bit of bits){
        if(bit.includes("authorization=Bearer")){
            return bit
        }
    }
}