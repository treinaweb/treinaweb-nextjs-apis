import { Post } from "@/app/backend/model/post";
import { NextRequest, NextResponse } from "next/server";
import * as postRepository from "@/app/backend/repository/post.repository";

export async function GET(req: NextRequest, { params }: { params : { slug: string }}) {
    try {
        const { slug } = await params;
        const post: Post = await postRepository.obterPorSlug(slug);

        if(!post) {
            return NextResponse.json({error: "Post não encontrado"}, { status: 404 });
        }

        return NextResponse.json(post, { status: 200 });
    } catch (error) {
        return NextResponse.json({message: "Falha ao buscar post", error: error}, { status: 500 });
    }
}