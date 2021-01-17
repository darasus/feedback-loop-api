import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async (req, res) => {
  try {
    const organisations = await prisma.organisation.findMany();
    res.status(200).json(organisations);
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
};
