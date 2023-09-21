import { HttpService } from '@nestjs/axios';
import { HttpBasicAuthGuard } from './auth.guard';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { UsersService } from 'src/users/users.service';

describe('AuthGuard', () => {
  it('should be defined', () => {
    expect(new HttpBasicAuthGuard(new AuthService(new HttpService), new JwtStrategy(new UsersService))).toBeDefined();
  });
});
