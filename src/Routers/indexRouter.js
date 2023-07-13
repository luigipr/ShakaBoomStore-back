import { Router } from "express";
import shoppingRouter from "./shoppingRouter.js";
import ProductRouter from "./products.routes.js";

const router = Router();

app.use(authRouter)
router.use(shoppingRouter);
router.use(ProductRouter);

export default router;