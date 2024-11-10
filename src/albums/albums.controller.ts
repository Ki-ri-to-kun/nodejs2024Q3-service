import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';

@Controller('album')
export class AlbumsController {
  @Get()
  public async getAllAlbums() {
    return 'all albums';
  }

  @Get(':id')
  public async getAlbumById(@Param('id') id: string) {
    return 'get album by id';
  }

  @Post()
  public async createAlbum() {
    return 'album created';
  }

  @Put(':id')
  public async updateAlbumInfo(@Param('id') id: string) {
    return 'album updated';
  }

  @Delete(':id')
  public async deleteAlbum(@Param('id') id: string) {
    return 'album deleted by album id';
  }
}
