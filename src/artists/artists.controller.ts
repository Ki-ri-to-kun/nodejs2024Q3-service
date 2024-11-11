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

@Controller('artist')
export class ArtistsController {
  @Get()
  public async getAllArtists() {
    return db.artists;
  }

  @Get(':id')
  public async getArtistById(@Param('id') id: string) {
    const artist = db.artists.find((a) => a.id === id);
    return artist;
  }

  @Post()
  public async createArtist(@Body() artist: any) {
    const newArtist = { id: uuid(), ...artist };
    db.artists.push(newArtist);
    return newArtist;
  }

  @Put(':id')
  public async updateArtistInfo(@Param('id') id: string, @Body() artist: any) {
    const oldArtistIndex = db.artists.findIndex((a) => a.id === id);
    const oldArtist = db.artists[oldArtistIndex];
    const updatedArtist = { ...oldArtist, ...artist };

    db.artists[oldArtistIndex] = updatedArtist;
    return updatedArtist;
  }

  @HttpCode(204)
  @Delete(':id')
  public async deleteAlbum(@Param('id') id: string) {
    const newAlbums = db.albums.filter((album) => album.artistId !== id);
    db.albums = newAlbums;
    return;
  }
}
