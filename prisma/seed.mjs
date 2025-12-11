/* eslint-disable @typescript-eslint/no-require-imports */
// 1. Import and configure 'dotenv' to load environment variables (like DATABASE_URL)
import * as dotenv from 'dotenv';
dotenv.config();

import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  console.log("Starting database seeding...");

  // Example: Clean up existing data before seeding (optional, but good practice)
  // await prisma.product.deleteMany({});
  // console.log("Deleted existing products.");

  const productData = [
    { name: 'Espresso', description: 'Rich and bold.', price: 2.5 },
    { name: 'Cappuccino', description: 'Smooth micro-foam.', price: 3.5 },
    { name: 'Latte', description: 'Creamy and mellow.', price: 4.0 },
  ];

  await prisma.product.createMany({
    data: productData,
    skipDuplicates: true, // Prevents errors if you run the seed script multiple times
  });
  
  console.log(`Seeded ${productData.length} products.`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log("Seeding finished successfully.");
  })
  .catch(async (e) => {
    console.error('An error occurred during seeding:', e);
    await prisma.$disconnect();
    process.exit(1);
  });