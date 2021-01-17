import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async (req, res) => {
  try {
    const feedbacks = await prisma.feedback.findMany()
    res.status(200).json(feedbacks)
  } catch (error) {
    console.error(error)
    res.status(500).json(error)
  }
}
