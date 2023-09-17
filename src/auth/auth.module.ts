import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { HttpBasicStrategy } from './http-basic.strategy';
import { AuthService } from './auth.service';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'http-basic' }),
    HttpModule,
  ],
  providers: [HttpBasicStrategy, AuthService], 
})
export class AuthModule {}
