import { Module } from '@nestjs/common';
import { AuthModule } from 'src/auth/auth.module';
import { HttpBasicStrategy } from 'src/auth/http-basic.strategy';

@Module({
    imports: [
      AuthModule,
    ],
    providers: [HttpBasicStrategy,], 
  })
export class ItemsModule {}
