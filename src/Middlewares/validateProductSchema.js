import { productSchema } from "../Schemas/productSchema.js";

export function validateProductSchema (req, res, next){

    const validation = productSchema.validate(req.body, {abortEarly: false});
    if(validation.error){
        const errors = validation.error.details.map(detail => detail.message);
        return res.status(422).send(errors);
    }

    next();

}