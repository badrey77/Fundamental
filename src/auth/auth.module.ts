import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { HttpModule } from '@nestjs/axios';
import { JwtAuthGuard } from './auth.guard';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './jwt.strategy';
import { UsersModule } from 'src/users/users.module';
import { UsersService } from 'src/users/users.service';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: 'puvBfsAI/hHTE1SdtXwLmMK3ysbI/LpLsVKAMvifbycyVCifWFr4d8peVDKZWfac', 
      signOptions: { expiresIn: '60m' },
    }),
    HttpModule,
  ],
  providers: [AuthService, UsersService, JwtStrategy, JwtAuthGuard,  ], 
  exports:[AuthService, JwtStrategy ,JwtAuthGuard, ]
})
export class AuthModule {}
