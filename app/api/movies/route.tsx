import { NextResponse } from "next/server";
import { fetchPopular } from "../../../Shared/api"

export async function GET (req: Request) {
    return NextResponse.json({message: "hello"})
}