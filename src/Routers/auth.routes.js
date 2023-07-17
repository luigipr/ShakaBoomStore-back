import { Router } from "express"

import loginSchema from "../Schemas/loginSchema.js"
import userSchema from "../Schemas/userSchema.js"
import { signin, signup } from "../Controllers/auth.controller.js"
import { validateSchema } from "../Middlewares/validateSchema.js"


const authRouter = Router()

authRouter.post("/cadastro", validateSchema(userSchema), signup)
authRouter.post("/entrar", validateSchema(loginSchema), signin)


export default authRouter