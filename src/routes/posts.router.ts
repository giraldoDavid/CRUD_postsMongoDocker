// External Dependencies
import express, { Request, Response } from "express";
import { ObjectId } from "mongodb";
import { collections } from "../services/database.service";
import Post from "../models/post";
import { decodeToken } from "../firebase/manage.token";

//Joi
import validator from "../utilities/validator";
import postSchemas from "../schemas-joi/post.schemajoi";


// Global Config
export const postsRouter = express.Router();

postsRouter.use(express.json());

// GET
postsRouter.get("/", decodeToken, async (_req: Request, res: Response) => {
    try {
        const posts = (await collections.posts.find({}).toArray()) as Post[];

        res.status(200).send(posts);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// POST
postsRouter.post("/", validator.body(postSchemas), decodeToken, async (req: Request, res: Response) => {
    try {
        const newPost = req.body as Post;
        const result = await collections.posts.insertOne(newPost);

        result
            ? res.status(201).send(`Successfully created a new post with id: ${result.insertedId}`)
            : res.status(500).send("Failed to create a new post.");
    } catch (error) {
        console.error(error);
        res.status(400).send(error.message);
    }
});

// PUT
postsRouter.put("/:id", validator.body(postSchemas), decodeToken, async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const updatedPost: Post = req.body as Post;
        const query = { _id: new ObjectId(id) };
    
        const result = await collections.posts.updateOne(query, { $set: updatedPost });

        result
            ? res.status(200).send(`Successfully updated post with id ${id}`)
            : res.status(304).send(`Post with id: ${id} not updated`);
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});

// DELETE
postsRouter.delete("/:id", decodeToken, async (req: Request, res: Response) => {
    const id = req?.params?.id;

    try {
        const query = { _id: new ObjectId(id) };
        const result = await collections.posts.deleteOne(query);

        if (result && result.deletedCount) {
            res.status(202).send(`Successfully removed post with id ${id}`);
        } else if (!result) {
            res.status(400).send(`Failed to remove post with id ${id}`);
        } else if (!result.deletedCount) {
            res.status(404).send(`Post with id ${id} does not exist`);
        }
    } catch (error) {
        console.error(error.message);
        res.status(400).send(error.message);
    }
});