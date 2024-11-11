import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
  HttpCode,
} from '@nestjs/common';
import { v4 as uuid } from 'uuid';

import { db } from '../db';

@Controller('user')
export class UsersController {
  @Get()
  public async getAllUsers() {
    return db.users;
  }

  @Get(':id')
  public async getUserById(@Param('id') id: string) {
    const user = db.users.find((u) => u.id === id);
    return user;
  }

  @Post()
  public async createUser(@Body() user: any) {
    const newUser = { id: uuid(), ...user };
    db.users.push(newUser);
    return newUser;
  }

  @Put(':id')
  public async updateUserPassword(@Param('id') id: string, @Body() user: any) {
    const oldUserIndex = db.users.findIndex((u) => u.id === id);
    const oldUser = db.users[oldUserIndex];
    const updatedUser = { ...oldUser, ...user };

    db.users[oldUserIndex] = updatedUser;
    return updatedUser;
  }

  @HttpCode(204)
  @Delete(':id')
  public async deleteUser(@Param('id') id: string) {
    const oldUserIndex = db.users.findIndex((u) => u.id === id);
    db.users.splice(oldUserIndex, 1);
    return;
  }
}
