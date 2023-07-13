import { Router } from "express"
import { signin, signup } from "../controllers/auth.controller.js"
import { validateSchema } from "../middlewares/validateSchema.js"
import loginSchema from "../Schemas/loginSchema.js"
import userSchema from "../Schemas/userSchema.js"



const authRouter = Router()

authRouter.post("/cadastro", validateSchema(userSchema), signup)
authRouter.post("/entrar", validateSchema(loginSchema), signin)


export default authRouter