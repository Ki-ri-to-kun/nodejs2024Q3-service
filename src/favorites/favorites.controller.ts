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

@Controller('favs')
export class FavoritesController {
  @Get()
  public async getAllFavorites() {
    return db.favorites;
  }

  // track
  @Post('track/:id')
  public async addTrackToFavorites(@Param('id') id: string) {
    db.favorites.tracks.push(id);
    return 'track added';
  }

  @Delete('track/:id')
  public async deleteTrackFromFavorites(@Param('id') id: string) {
    const filteredTracks = db.favorites.tracks.filter((t) => t !== id);
    db.favorites.tracks = filteredTracks;
    return 'track deleted';
  }

  // album
  @Post('album/:id')
  public async addAlbumToFavorites(@Param('id') id: string) {
    db.favorites.albums.push(id);
    return 'album added';
  }

  @Delete('album/:id')
  public async deleteAlbumFromFavorites(@Param('id') id: string) {
    const filteredAlbums = db.favorites.albums.filter((a) => a !== id);
    db.favorites.albums = filteredAlbums;
    return 'album deleted';
  }

  // artist
  @Post('artist/:id')
  public async addArtistToFavorites(@Param('id') id: string) {
    db.favorites.artists.push(id);
    return 'artist added';
  }

  @Delete('artist/:id')
  public async deleteArtistFromFavorites(@Param('id') id: string) {
    const filteredArtists = db.favorites.artists.filter((a) => a !== id);
    db.favorites.artists = filteredArtists;
    return 'artist deleted';
  }
}
