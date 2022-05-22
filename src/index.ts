import express from "express";
import { connectToDatabase } from "./services/database.service";
import { postsRouter } from "./routes/posts.router";
import { authRouter } from "./routes/auth.router";
import path from "path";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import * as dotenv from "dotenv";

dotenv.config();

const app = express();
const port = process.env.PORT; // default port to listen

const swaggerOptions = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Reto CRUD / API POST',
            version: '1.0.0'
        },
        servers: [
            {
                url: 'http://localhost:3030/',
            }
        ]
    },
    apis: [`./dist/docs/*.js`]
}


connectToDatabase()
    .then(() => {
        // send all calls to /games to our gamesRouter
        app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerJsdoc(swaggerOptions)))
        app.use("/post", postsRouter);
        app.use("/auth", authRouter);

        // start the Express server
        app.listen(port, () => {
            console.log(`Server started at http://localhost:${port}`);
        });
    })
    .catch((error: Error) => {
        console.error("Database connection failed", error);
        process.exit();
    });
