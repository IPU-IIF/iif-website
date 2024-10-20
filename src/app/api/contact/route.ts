// src/app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET(req: NextRequest) {
  try {
    const contacts = await prisma.contact.findMany();
    return NextResponse.json(contacts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to retrieve contacts.' }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  const { name, email, phoneNo, proposal, companyName } = await req.json();

  // Simple validation
  if (!name || !email || !proposal) {
    return NextResponse.json({ error: 'Name, email, and proposal are required.' }, { status: 400 });
  }

  try {
    const newContact = await prisma.contact.create({
      data: {
        name,
        email,
        phoneNo,
        proposal,
        companyName,
      },
    });

    console.log(newContact)
    
    return NextResponse.json(newContact, { status: 201 });
  } catch (error) {
    if (error.code === 'P2002') {
      // Unique constraint violation
      return NextResponse.json({ error: 'Email already exists.' }, { status: 409 });
    }
    return NextResponse.json({ error: 'Failed to create contact.' }, { status: 500 });
  }
}
