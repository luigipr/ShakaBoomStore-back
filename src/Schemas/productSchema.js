import Joi from "joi";

//body: {productId, productImage, price, description, quantity}
export const productSchema = Joi.object({
    productId: Joi.string().required(),
    productImage: Joi.string().required(),
    price: Joi.number().required(),
    description: Joi.string().required(),
    quantity: Joi.number().integer()
})