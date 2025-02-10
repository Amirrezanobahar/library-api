import fs from 'fs'
import http from 'http'
import url from 'url'
import database from './db.json' with { type: "json" }
import { log } from 'console'
import { getBooks } from './controller/bookController.js'
import { postBook } from './controller/bookController.js'
import { getUsers } from './controller/userController.js'
import { deletBooks } from './controller/bookController.js'
import { putBookBack } from './controller/bookController.js'
import { putBookData } from './controller/bookController.js'
import { postRejester } from './controller/userController.js'
import { userupgrade } from './controller/userController.js'
import { userUpCrime } from './controller/userController.js'
import { userLogin } from './controller/userController.js'
import { userrent } from './controller/rentController.js'
import dotenv from 'dotenv'
dotenv.config()




//      create server

const server = http.createServer((req, res) => {


    if (req.method === 'GET' && req.url === '/api/users') {

        getUsers(req, res)

    } else if (req.method === 'GET' && req.url === '/api/books') {

        getBooks(req, res)


    } else if (req.method === 'DELETE' && req.url.startsWith('/api/books')) {

        deletBooks(req, res)

    } else if (req.method === 'POST' && req.url === '/api/books') {

        postBook(req, res)

    } else if (req.method === 'PUT' && req.url.startsWith('/api/books/back')) {

        putBookBack(req, res)

    } else if (req.method === 'PUT' && req.url.startsWith('/api/books')) {

        putBookData(req, res)

    } else if (req.method === 'POST' && req.url === '/api/users') {

        postRejester(req, res)

    } else if (req.method === 'PUT' && req.url.startsWith('/api/users/upgrade')) {

        userupgrade(req, res)

    } else if (req.method === 'PUT' && req.url.startsWith('/api/users')) {

        userUpCrime(req, res)


    } else if (req.method === 'POST' && req.url === '/api/users/login') {

        userLogin(req,res)

    } else if (req.method === 'POST' && req.url === '/api/books/rent') {

        userrent(req,res)

    }

})




//         listin on port 4000

server.listen(process.env.PORT, () => {
    console.log(`server runing on port ${process.env.PORT}..`);

})