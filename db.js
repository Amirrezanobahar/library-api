import dotenv from 'dotenv'
dotenv.config()

import { MongoClient } from "mongodb";



const url = 'mongodb://localhost:27017/'
const dbConnection = new MongoClient(url)
const dbName = 'library'


export const dbs = async () => {

    await dbConnection.connect()
    console.log("Connected to the dbConnection Successfully :))");
    const db =dbConnection.db(dbName)

    return db

}
