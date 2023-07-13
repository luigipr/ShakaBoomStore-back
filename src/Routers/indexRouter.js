import { Router } from "express";
import shoppingRouter from "./shoppingRouter.js";
import ProductRouter from "./products.routes.js";

const router = Router();

router.use(shoppingRouter);
router.use(ProductRouter);

export default router;