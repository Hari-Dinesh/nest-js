// src/user/user.controller.ts
import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { UserService } from './users.service';
import { user } from './users.entity';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async addUser(
    @Body('name') name: string,
    @Body('email') email: string,
    @Body('password') password:string,
  ): Promise<user> {
    console.log("...........");
    
    return this.userService.createUser(name, email,password);
  }

  @Post('/checklogin')
  async validatePassword(
    @Body('email') email:string,
    @Body('password') password:string,
  ):Promise<boolean>{
    return this.userService.validatePassword(email,password)
  }

//   @Get(':id')
//   async getUser(@Param('id') id: number): Promise<user> {
//     return this.userService.getUserById(id);
//   }
}
