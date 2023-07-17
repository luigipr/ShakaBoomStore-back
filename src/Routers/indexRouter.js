import { Router } from "express";
import shoppingRouter from "./shoppingRouter.js";
import ProductRouter from "./products.routes.js";
import authRouter from "./auth.routes.js";

const router = Router();

router.use(authRouter)
router.use(shoppingRouter);
router.use(ProductRouter);

export default router;