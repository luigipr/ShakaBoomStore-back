import { Router } from "express";
import { addProduct } from "../Controllers/shoppingController.js";
import { validateProductSchema } from "../Middlewares/validateProductSchema.js";
import { validateToken } from "../Middlewares/validateToken.js";

const shoppingRouter = Router();

shoppingRouter.post('/shoppingcart', validateToken, validateProductSchema, addProduct);
//shoppingRouter.post('/shoppingcart', validateProductSchema, addProduct);

export default shoppingRouter;