import { PrismaClient } from "./models/generated/prisma/index.js";
const prisma = new PrismaClient();

export async function main() {
  const admins = await prisma.Admins.findMany();
  return admins;
}

main().catch((error) => {
  console.log(error);
});
