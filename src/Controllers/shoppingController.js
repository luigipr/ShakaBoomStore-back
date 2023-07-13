import { db } from "../Database/dataBaseConnection.js";

export async function addProduct(req, res){
    //headers: {'Authorization': Bearer token}
    //body: {productId, productImage, price, description, quantity}
    //session: {userId, token} enviado por res.locals através do middleware validateToken
    const {session} = res.locals;
    const {productId, productImage, price, description, quantity} = req.body; 

    //validar se o price está no formato correto (ex. 56.2)

    try{
        await db.collection('shoppingcart').insertOne({
            //userId: session.userId,
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

export async function deleteProduct (req, res){
    //headers: {'Authorization': Bearer token}
    //body: {productId}
    //session: {userId, token} enviado por res.locals através do middleware validateToken
    const {productId} = req.body;
    if(!productId) return res.status(404).send('Não tem productId');
    try{
        const result = await db.collection('shoppingcart').deleteOne({productId});
        if(result.deletedCount === 0) return res.sendStatus(404);
        return res.status(200).send('Produto deletado com sucesso!');
    }catch (err){
        return res.status(500).send(err.message);
    }
}