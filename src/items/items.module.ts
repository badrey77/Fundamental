import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { ItemsService } from './items.service';
import { ItemsController } from './items.controller';


@Module({
    imports: [
      AuthModule,
    ],
    providers: [ItemsService],
    controllers: [ItemsController] 
  })
export class ItemsModule {}
