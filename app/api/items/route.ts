import { prisma } from "@/lib/prisma";
export const runtime = "nodejs";
export async function GET(){ const items = await prisma.item.findMany({ orderBy: { createdAt: "desc" } }); return Response.json(items); }
export async function POST(req: Request){ const { name } = await req.json(); const item = await prisma.item.create({ data: { name } }); return Response.json(item, { status: 201 }); }