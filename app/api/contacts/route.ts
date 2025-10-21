import { prisma } from "@/lib/prisma";
export const runtime = "nodejs";
export async function GET(){ const rows = await prisma.contact.findMany({ orderBy: { createdAt: "desc" } }); return Response.json(rows); }
export async function POST(req: Request){
  const data = await req.json();
  // Accept any shape the model allows; Prisma will validate types
  const created = await prisma.contact.create({ data });
  return Response.json(created, { status: 201 });
}