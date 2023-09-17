import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ItemsService, Item } from './items.service';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { HttpBasicStrategy } from '../auth/http-basic.strategy';


@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Get()
  @UseGuards(AuthGuard('HttpBasicStrategy'))
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Item> {
    const data = await this.itemsService.findOne(id);    
    return data;
  }

  @Post()
  create(@Body() item: Item): void {
    this.itemsService.create(item);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updatedItem: Item): void {
    this.itemsService.update(id, updatedItem);
  }

  @Delete(':id')
  delete(@Param('id') id: number): void {
    this.itemsService.delete(id);
  }
}
