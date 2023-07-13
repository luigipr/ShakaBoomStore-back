import { Router } from "express";
import shoppingRouter from "./shoppingRouter.js";

const router = Router();

router.use(shoppingRouter);

export default router;