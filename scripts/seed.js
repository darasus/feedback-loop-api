const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
  try {
    // await prisma.user.deleteMany({}),
    // await prisma.feedback.deleteMany({}),
    // await prisma.organisation.deleteMany({});

    const organisation = await prisma.organisation.create({
      data: {
        name: "Test organisation",
      },
    });

    // const createdUser = await prisma.user.create({
    //   data: {
    //     organisationId: organisation.id,
    //     firstName: "Ilya",
    //     lastName: "Daraseliya",
    //   },
    // });


  } catch (error) {
    console.error(error);
  }
}

main();
