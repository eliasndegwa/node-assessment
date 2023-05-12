import {Request, Response} from "express";
import mssql from 'mssql'
import {sqlConfig} from "../config"
import {v4 as uid} from "uuid"
import bcrypt from 'bcrypt'
import { registerSchema } from "../helpers/validation";
interface UserRequest extends Request{
    body:{
        username:string
        email:string
        password:string
    }
    params:{
        id:string
    }
}

interface User{
    id:string
    username:string
    email:string
    password:string
}

//register new user
export const addUser=async (req:UserRequest, res:Response)=>{
    try {
        const{username,email,password}=req.body

        //validation start
        const {error}= registerSchema.validate(req.body)
        if(error){
            return res.status(404).json(error.details[0].message)
        }
        //validation end

        let id=uid()
        //encrypt password
        let hPassword =await bcrypt.hash(password,7)

        const pool=await mssql.connect(sqlConfig)
        await pool.request()
        .input('id',id)
        .input('username',username)
        .input('email',email)
        .input('password',hPassword)
        .execute('insertUser')
        return res.status(201).json({message:"User registered successfully!"})
    } catch (error:any) {
        return res.status(500).json(error.message)
    }
}

//get all users
export const getAllUsers=async (req:Request,res:Response)=>{
    try {
        const pool = await mssql.connect(sqlConfig)
    let users:User[] = (await (await pool.request()).execute('getusers')).recordset
    res.status(200).json(users)
    } catch (error:any) {
        return res.status(500).json(error.message)
    }
}