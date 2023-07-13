import { db } from "../Database/dataBaseConnection.js";

export async function addProduct(req, res){
    //headers: {'Authorization': Bearer token}
    //body: {productId, productImage, price, description, quantity}
    //session: {userId, token} enviado por res.locals através do middleware validateToken
    const {session} = res.locals;
    //console.log(session);
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

export async function deleteProduct (req, res){
    //headers: {'Authorization': Bearer token}
    //body: {productId}
    //session: {userId, token} enviado por res.locals através do middleware validateToken
    const {productId} = req.body;
    const {session} = res.locals;
    if(!productId) return res.status(404).send('Não tem productId');
    try{
        const result = await db.collection('shoppingcart').deleteOne({
            $and: [
                {productId},
                {userId: session.userId}
            ]
        });
        if(result.deletedCount === 0) return res.sendStatus(404);
        return res.status(200).send('Produto deletado com sucesso!');
    }catch (err){
        return res.status(500).send(err.message);
    }
}

export async function changeProductQuantity (req, res){
    //headers: {'Authorization': Bearer token}
    //body: {productId, quantity}
    const {productId, quantity} = req.body;
    if(!productId) return res.status(404).send('Não tem productId');
    const updatedQuantity = {quantity}
    try{
        const result = await db.collection('shoppingcart').updateOne({
            $and: [
            {productId},
            {userId: session.userId}
            ]}, 
            {$set: updatedQuantity});
        if(result.matchedCount === 0) return res.status(404).send("Este produto não existe no carrinho");
        return res.status(200).send('Produto editado no carrinho com sucesso')
    }catch (err){
        return res.status(500).send(err.message);
    }
}

export async function getShoppingCartProducts (req,res){
    //headers: {'Authorization': Bearer token}
    //session: {userId, token} enviado por res.locals através do middleware validateToken
    const {session} = res.locals;
    try{
        const shoppingCart = await db.collection('shoppingcart').find({userId: session.userId}).toArray();
        return res.status(200).send(shoppingCart);
    }catch (err){
        return res.status(500).send(err.message);
    }
}