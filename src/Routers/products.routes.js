import { Router } from "express";
import { getProducts, postProducts } from "../Controllers/productsController";

const ProductRouter = Router();


ProductRouter.get("/products", getProducts);
ProductRouter.post("/products", postProducts);

export default ProductRouter;