const { PrismaClient } = require('@prisma/client');
const { PrismaPg } = require('@prisma/adapter-pg');
const { Pool } = require('pg');

// Load env variables
require('dotenv').config();

try {
  console.log("Attempting to instantiate PrismaClient with PrismaPg adapter...");
  const pool = new Pool({ connectionString: process.env.DATABASE_URL });
  const adapter = new PrismaPg(pool);
  const prisma = new PrismaClient({ adapter });
  console.log("Success! PrismaClient instantiated with adapter.");
} catch (err) {
  console.error("Error instantiating PrismaClient:", err);
}
