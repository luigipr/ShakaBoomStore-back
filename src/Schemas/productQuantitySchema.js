import Joi from "joi";

//body: {productId, quantity}
export const productQuantitySchema = Joi.object({
    productId: Joi.string().required(),
    quantity: Joi.number().integer()
})