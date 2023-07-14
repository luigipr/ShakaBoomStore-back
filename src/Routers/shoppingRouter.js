import { Router } from "express";
import { addProduct, deleteProduct, changeProductQuantity, getShoppingCartProducts, checkout } from "../Controllers/shoppingController.js";
import { validateSchema } from "../Middlewares/validateSchema.js";
import { validateToken } from "../Middlewares/validateToken.js";
import { productQuantitySchema } from "../Schemas/productQuantitySchema.js";
import { productSchema } from "../Schemas/productSchema.js";
const shoppingRouter = Router();


shoppingRouter.post('/shoppingcart', validateToken, validateSchema(productSchema), addProduct);
shoppingRouter.delete('/shoppingcart/:productId', validateToken, deleteProduct);
shoppingRouter.put('/shoppingcart', validateToken, validateSchema(productQuantitySchema), changeProductQuantity);
shoppingRouter.get('/shoppingcart', validateToken, getShoppingCartProducts);
shoppingRouter.post('/checkout', validateToken, checkout);


export default shoppingRouter;