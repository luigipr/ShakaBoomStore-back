import Joi from "joi";
//body: {paymentMethod, address}
export const checkoutSchema = Joi.object({
    paymentMethod: Joi.string().required(),
    address: Joi.string().required()
})