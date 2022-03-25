
import express from "express";

import cors from 'cors'
import indexController from "./controllers/index-controller.js";
import livroController from "./controllers/livro-controller.js";


import generalMiddleware from "./middleware/general-middleware.js";


import database from './database/sqlite-db.js'

const app = express()


app.use(express.json())

app.use(cors())


generalMiddleware(app) 


indexController(app)
livroController(app, database)

export default app
