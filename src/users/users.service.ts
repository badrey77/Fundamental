import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {

    private readonly users = [
        {
            type: 'client',
            userId: 'user',
            password: 'password',
            id: 1
        },
        {
            type: 'manager',
            userId: 'Badrey',
            password: 'Reynard',
            id: 5
        },
      ];
    
      findOneById  = (id:number):({userId:string, password:string}|undefined) => (this.users.find(x=>x.id === id))
}
