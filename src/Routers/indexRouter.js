import { Router } from "express";
import shoppingRouter from "./shoppingRouter.js";

const router = Router();

app.use(authRouter)
router.use(shoppingRouter);

export default router;