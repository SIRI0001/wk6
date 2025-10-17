import { Item } from "@/models/Item";
import { randomUUID } from "node:crypto";
export const runtime = "nodejs";
export async function GET(){ await (await import("@/db/index")).sequelize.sync(); const rows = await Item.findAll({ order: [["rowid","DESC"]]}); return Response.json(rows); }
export async function POST(req: Request){ await (await import("@/db/index")).sequelize.sync(); const { name } = await req.json(); const it = await Item.create({ id: randomUUID(), name }); return Response.json(it, { status: 201 }); }