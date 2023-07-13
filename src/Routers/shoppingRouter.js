import { Router } from "express";
import { addProduct, deleteProduct, changeProductQuantity } from "../Controllers/shoppingController.js";
import { validateProductSchema } from "../Middlewares/validateProductSchema.js";
import { validateToken } from "../Middlewares/validateToken.js";

const shoppingRouter = Router();

//shoppingRouter.post('/shoppingcart', validateToken, validateProductSchema, addProduct);
shoppingRouter.post('/shoppingcart', validateProductSchema, addProduct);
//shoppingRouter.delete('/shoppingcart', validateToken, deleteProduct);
shoppingRouter.delete('/shoppingcart', deleteProduct);
shoppingRouter.put('/shoppingcart', changeProductQuantity);

export default shoppingRouter;