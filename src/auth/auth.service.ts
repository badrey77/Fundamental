import { Injectable, UnauthorizedException } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class AuthService {
  constructor(private readonly httpService: HttpService) {}

  async validateUser(username: string, password: string): Promise<any> {
    try {
      const response = await this.httpService.post('http://localhost:3001/auth/validate', {
        username,
        password,
      }).toPromise();
      return response.data;
    } catch (error) {
      throw new UnauthorizedException();
    }
  }
}

