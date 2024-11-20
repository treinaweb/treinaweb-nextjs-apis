import { PrismaClient } from "@prisma/client/extension";
import { Post } from "../model/post";

const db = new PrismaClient();

export async function obterTodos(): Promise<Post[]> {
    return await db.post.findMany();
}