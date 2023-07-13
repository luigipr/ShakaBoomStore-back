import { Router } from "express";


import { addProduct, deleteProduct, changeProductQuantity } from "../Controllers/shoppingController.js";
import { validateSchema } from "../Middlewares/validateSchema.js";
import { validateToken } from "../Middlewares/validateToken.js";
import { productSchema } from "../Schemas/productSchema.js";
const shoppingRouter = Router();


shoppingRouter.post('/shoppingcart', validateToken, validateSchema(productSchema), addProduct);
//shoppingRouter.post('/shoppingcart', validateProductSchema, addProduct);
//shoppingRouter.delete('/shoppingcart', validateToken, deleteProduct);
shoppingRouter.delete('/shoppingcart', deleteProduct);
shoppingRouter.put('/shoppingcart', changeProductQuantity);


export default shoppingRouter;