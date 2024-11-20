import { Post } from "@/app/backend/model/post";
import * as postRepository from "@/app/backend/repository/post.repository";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        const posts: Post[] = await postRepository.obterTodos();
        return NextResponse.json(posts, { status: 200 });
    } catch (error) {
        return NextResponse.json(
            { message: "falha ao carregar posts", error: error},
            { status: 500 });
    }
}