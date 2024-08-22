import { put } from "@vercel/blob";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const form = await req.formData();
    const file = form.get('file') as File;
    
    if(!file.name) {
        return NextResponse.json({error: "Arquivo não fornecido"}, {status: 400})
    }

    const upload = await put(file.name, file, {
        access: "public",
    })

    return Response.json(upload)
}