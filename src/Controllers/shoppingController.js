import { db } from "../Database/dataBaseConnection.js";

export async function addProduct(req, res){
    //headers: {'Authorization': Bearer token}
    //body: {productId, productImage, price, description, quantity}
    //session: {userId, token}
    const {session} = res.locals;
    const {productId, productImage, price, description, quantity} = req.body; 

    //validar se o price está no formato correto (ex. 56.2)

    try{
        await db.collection('shoppingcart').insertOne({
            userId: session.userId,
            productId,
            productImage,
            price,
            description,
            quantity
        })
        return res.sendStatus(201);
    }catch (err){
        return res.status(500).send(err.message);
    }
}