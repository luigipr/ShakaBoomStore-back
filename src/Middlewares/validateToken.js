import { db } from "../Database/dataBaseConnection.js";

export async function validateToken (req, res, next){
    //headers: {'Authorization': Bearer token}
    //body: {productId, productImage, price, description, quantity}
    const {authorization} = req.headers;
    const token = authorization?.replace("Bearer ", "");
    if(!token) return res.sendStatus(401);
    try{
        const session = await db.collection('sessions').findOne({token});
        if(!session) return res.status(401).send('Token não corresponde a nenhuma sessão');
        res.locals.session = session;
        
    }catch (err){
        res.status(500).send(err.message);
    }
    
    next();
    
}