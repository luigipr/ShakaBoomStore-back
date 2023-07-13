import Joi from "joi";

export const newproductSchema = Joi.object({
    productImage: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    quantity: Joi.number().integer()
})