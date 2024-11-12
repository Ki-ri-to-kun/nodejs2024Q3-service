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

@Controller('track')
export class TracksController {
  @Get()
  public async getAllTracks() {
    return db.tracks;
  }

  @Get(':id')
  public async getTrackById(@Param('id') id: string) {
    const track = db.tracks.find((t) => t.id === id);
    return track;
  }

  @Post()
  public async createTrack(@Body() track: any) {
    const newTrack = { id: uuid(), ...track };
    db.tracks.push(newTrack);
    return newTrack;
  }

  @Put(':id')
  public async updateTrackInfo(@Param('id') id: string, @Body() track: any) {
    const oldTrackIndex = db.tracks.findIndex((t) => t.id === id);
    const oldTrack = db.tracks[oldTrackIndex];
    const updatedTrack = { ...oldTrack, ...track };

    db.tracks[oldTrackIndex] = updatedTrack;
    return updatedTrack;
  }

  @HttpCode(204)
  @Delete(':id')
  public async deleteTrack(@Param('id') id: string) {
    const oldTrackIndex = db.tracks.findIndex((t) => t.id === id);
    db.tracks.splice(oldTrackIndex, 1);
    return;
  }
}
