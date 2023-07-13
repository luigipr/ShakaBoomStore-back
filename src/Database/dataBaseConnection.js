import dotenv from 'dotenv';
import { MongoClient } from 'mongodb';

dotenv.config();

const mongoClient = new MongoClient("mongodb://localhost:27017/shakaBoom");
export let db;
mongoClient.connect()
    .then(() => {
        db = mongoClient.db();
        console.log('MongoDB conectado!')
    })
    .catch((err) => console.log(err.message));