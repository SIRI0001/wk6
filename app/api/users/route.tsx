import { NextResponse } from 'next/server';
import { User } from '@/app/types/user';

let users: User[] = [];

function findUser(id: number) {
  return users.find((user) => user.id === id);
}

export async function GET() {
  return NextResponse.json(users);
}

