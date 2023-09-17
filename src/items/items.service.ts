import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    log: [{ level: 'query', emit: 'event' }],
  })

export type Item = { id: number; name: string; };

@Injectable()
export class ItemsService {
  private readonly items: Item[] = [];

  async findAll(): Promise<Item[]> {
    const allItems = await prisma.item.findMany({
      
    })
    return allItems;
  }

  async findOne(id: number): Promise<Item> {
    const data = await prisma.item.findFirst({
        where: { id: typeof id === "number" ? id : Number.parseInt(id) },
    });

    return data;
  }

  async create(item: Item): Promise<void> {
    await prisma.item.create({
        data: 
        {
            id: typeof item.id === "number" ? item.id : Number.parseInt(item.id),
             name : item.name
            }
        },);
  }

  async update(id: number, updatedItem: Item): Promise<void> {
    await prisma.item.update({
        where : { id: typeof id === "number" ? id : Number.parseInt(id) },
        data : updatedItem
    })
  }

  async delete(id: number): Promise<void> {
    await prisma.item.delete({
        where : {
            id: typeof id === "number" ? id : Number.parseInt(id)
        }
    })
  }
}
