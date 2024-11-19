import { NextResponse } from "next/server";

export function GET() {
    return NextResponse.json({ message: "minha primeira API"});
}