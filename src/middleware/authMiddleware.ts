import { error } from 'console';
import dotenv from 'dotenv';
dotenv.config();
import express ,{NextFunction, Request , Response} from 'express';
import jwt  from 'jsonwebtoken';
import { dot } from 'node:test/reporters';

const authenticate = (req:Request,res:Response,next:NextFunction)=>{
    const token = req.header('authorization')?.replace('Bearer','');
    if(!token){
        return res.json({error:'access denied no token provided .'});
    }
    try{
        const result = jwt.verify(token,process.env.JWT_SECRET!);
        (req as any) = result;
        next();
     }catch(error){
        res.json({error:'invalid token. !! '});
     }
}

export default authenticate;