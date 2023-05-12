import { Router } from "express";
import { addUser, getAllUsers } from "../controllers/userController";

const userRoutes= Router()

userRoutes.post('',addUser)
userRoutes.get('',getAllUsers)

export default userRoutes