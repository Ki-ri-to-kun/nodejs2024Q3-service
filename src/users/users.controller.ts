import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';

@Controller('user')
export class UsersController {
  @Get()
  public async getAllUsers() {
    return 'all users';
  }

  @Get(':id')
  public async getUserById(@Param('id') id: string) {
    return 'get user by id';
  }

  @Post()
  public async createUser() {
    return 'user created';
  }

  @Put(':id')
  public async updateUserPassword(@Param('id') id: string) {
    return 'password updated';
  }

  @Delete(':id')
  public async deleteUser(@Param('id') id: string) {
    return 'user deleted';
  }
}
