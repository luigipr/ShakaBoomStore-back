import Joi from "joi";

const userSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    password2:  Joi.string().min(6).required()
})
export default userSchema;