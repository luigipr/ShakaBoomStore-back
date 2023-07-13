import { db } from "../Database/dataBaseConnection.js";
import { newproductSchema } from "../Schemas/newproductSchema.js";
import { v4 as uuid } from "uuid";


export async function getProducts(req, res) {

    try {
        const products = await db.collection("products").find().toArray()
        if (!products) { return res.status(404).send("No products found!") }
        return res.status(200).send(products);
    }
    catch (error) {
        return res.status(500).send(error.message);
    }
}


export async function postProducts(req, res) {
    const newProduct = req.body
    const validation = newproductSchema.validate(newProduct, { abortEarly: false })
    if (validation.error) {
        const errors = validation.error.details.map((detail) => detail.message);
        return res.status(422).send(errors);
    }
    const {authorization} = req.headers;
    if (!authorization) { return res.status(401).send("Unauthorized User") }
    const pid = uuid();
    const productinsert = {productId: pid}
    Object.assign(newProduct, productinsert)
    try {
        await db.collection('products').insertOne(newProduct);
        return res.status(201).send(newProduct);
    }
    catch (err) { return res.status(500).send(err.message) }
}