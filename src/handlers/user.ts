import prisma from "../db";
import {comparePasswords, createJWT, hashPassword} from "../modules/auth";

export const createNewUser = async (req,res,)=>{
    const user = await prisma.user.create({
        data:{
            username:req.body.username,
            password: await hashPassword(req.body.password)
        }
    });

    const token = createJWT(user);
    await res.json(token);
}

export const login = async (req, res)=>{
    const user = await prisma.user.findUnique({
        where:{
            username: req.body.username
        }
    })
    if (!user){
        res.status(422);
        await res.json({
            message: "Invalid username or password"
        })
        return;
    }
    const isValid = await comparePasswords(req.body.password,user.password);
    if (!isValid){
        res.status(422);
        await res.json({
            message: "Invalid username or password"
        })
        return;
    }
    const token = createJWT(user);
    await res.json({token})
}