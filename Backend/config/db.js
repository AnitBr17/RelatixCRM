const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const connectDB = async () => {
  try {
    await prisma.$connect();
    console.log(":white_check_mark: PostgreSQL Connected Successfully");
  }
    catch (error) {
    console.log(":x: Database Connection Failed:", error.message);
    process.exit(1);
  }
};
module.exports = { prisma, connectDB };