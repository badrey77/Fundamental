import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: [{ level: 'query', emit: 'event' }],
  })
  
  prisma.$on('query', (e) => {
    console.log(e)
  })

async function main() {
    
    
    await prisma.item.create({
      data: {
        name: 'Alice',
        id: 2,
      },
    });

    const countUsers = await prisma.item.count({})
  
    const allItems = await prisma.item.findMany({
      
    })
    console.log(countUsers)
  }
  console.log('here');;
main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })