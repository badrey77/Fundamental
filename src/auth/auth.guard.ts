import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt')  {
    constructor(private authService: AuthService) {
        super();
    }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    
    const request = context.switchToHttp().getRequest();
    const { headers } = request;
    //Check for token ...
    const authorization = headers['authorization'];
    if(authorization)
    {
        const user = super.canActivate(context)
        return !!user ;
    }

    const username = headers['x-username'];
    const password = headers['x-password'];
    
    const user = await this.authService.validateUser(username, password);

    // if (!user) {
        
        
        
    // }
    
    request.user = user;
  
    return !!request.user; // return true if there's a user object, otherwise false
    //
  }

  handleRequest(err, user, info) {
    // Handle error or missing user here
    
    if (err || !user) {
      throw err || new UnauthorizedException();
    }
    return user;
  }
}



 

