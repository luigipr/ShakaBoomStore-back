import { Router } from "express";
import shoppingRouter from "./shoppingRouter.js";
import authRouter from "./auth.routes.js";

const router = Router();

router.use(authRouter)
router.use(shoppingRouter);

export default router;