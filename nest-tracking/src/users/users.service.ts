// src/user/user.service.ts
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { user } from './users.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(user)
    private userRepository: Repository<user>,
  ) {}

  async createUser(name: string, email: string ,password:string): Promise<user> {
    
    const user = this.userRepository.create({ name, email ,password});
    return this.userRepository.save(user);
  }

  async validatePassword(email:string,password:string):Promise<boolean>{
    const user=await this.userRepository.findOneBy({email:email})
    if(user.password===password){
        return true;
    }else return false
  }
  
}
