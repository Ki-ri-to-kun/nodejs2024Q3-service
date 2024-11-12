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
import { db } from '../db';
import { v4 as uuid } from 'uuid';

@Controller('album')
export class AlbumsController {
  @Get()
  public async getAllAlbums() {
    return db.albums;
  }

  @Get(':id')
  public async getAlbumById(@Param('id') id: string) {
    const album = db.albums.find((a) => a.id === id);
    return album;
  }

  @Post()
  public async createAlbum(@Body() album: any) {
    const newAlbum = { id: uuid(), ...album };
    db.albums.push(newAlbum);
    return newAlbum;
  }

  @Put(':id')
  public async updateAlbumInfo(@Param('id') id: string, @Body() album: any) {
    const oldAlbumIndex = db.albums.findIndex((t) => t.id === id);
    const oldAlbum = db.albums[oldAlbumIndex];
    const updatedAlbum = { ...oldAlbum, ...album };

    db.albums[oldAlbumIndex] = updatedAlbum;
    return updatedAlbum;
  }

  @HttpCode(204)
  @Delete(':id')
  public async deleteAlbum(@Param('id') id: string) {
    const oldAlbumIndex = db.albums.findIndex((t) => t.id === id);
    db.albums.splice(oldAlbumIndex, 1);
    return;
  }
}
