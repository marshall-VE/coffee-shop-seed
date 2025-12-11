import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { getCached } from '@/lib';

const prisma = new PrismaClient();

export async function GET() {
  const products = await getCached('products:all', () =>
    prisma.product.findMany({ orderBy: { id: 'asc' } })
  );
  return NextResponse.json(products);
}