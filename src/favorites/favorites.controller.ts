import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';

@Controller('favs')
export class FavoritesController {
  @Get()
  public async getAllFavorites() {
    return 'all favorites';
  }

  // track
  @Post('track/:id')
  public async addTrackToFavorites(@Param('id') id: string) {
    return 'add track to the favorites';
  }

  @Delete('track/:id')
  public async deleteTrackFromFavorites(@Param('id') id: string) {
    return 'delete track from favorites';
  }

  // album
  @Post('album/:id')
  public async addAlbumToFavorites(@Param('id') id: string) {
    return 'add album to the favorites';
  }

  @Delete('album/:id')
  public async deleteAlbumFromFavorites(@Param('id') id: string) {
    return 'delete album from favorites';
  }

  // artist
  @Post('artist/:id')
  public async addArtistToFavorites(@Param('id') id: string) {
    return 'add artist to the favorites';
  }

  @Delete('artist/:id')
  public async deleteArtistFromFavorites(@Param('id') id: string) {
    return 'delete artist from favorites';
  }
}
