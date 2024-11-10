import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';

@Controller('artist')
export class ArtistsController {
  @Get()
  public async getAllArtists() {
    return 'all artists';
  }

  @Get(':id')
  public async getArtistById(@Param('id') id: string) {
    return 'get artist by id';
  }

  @Post()
  public async createArtist() {
    return 'artist created';
  }

  @Put(':id')
  public async updateArtistInfo(@Param('id') id: string) {
    return 'artist updated';
  }

  @Delete(':id')
  public async deleteAlbum(@Param('id') id: string) {
    return 'album deleted by artist id';
  }
}
