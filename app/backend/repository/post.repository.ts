"use server"
import { PrismaClient } from "@prisma/client";
import { Post } from "../model/post";

const db = new PrismaClient();

export async function obterTodos(): Promise<Post[]> {
    return await db.post.findMany();
}

export async function salvar(post: Post) {
    return await db.post.upsert({
        where: { id: post.id },
        update: post,
        create: post,
    });
}