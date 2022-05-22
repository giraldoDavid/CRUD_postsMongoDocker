import { ObjectId } from "mongodb";

export default interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
    _id?: ObjectId;
}