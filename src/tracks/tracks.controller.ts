import { Controller, Get, Post, Put, Delete, Param } from '@nestjs/common';

@Controller('track')
export class TracksController {
  @Get()
  public async getAllTracks() {
    return 'all tracks';
  }

  @Get(':id')
  public async getTrackById(@Param('id') id: string) {
    return 'get track by id';
  }

  @Post()
  public async createTrack() {
    return 'track created';
  }

  @Put(':id')
  public async updateTrackInfo(@Param('id') id: string) {
    return 'track updated';
  }

  @Delete(':id')
  public async deleteTrack(@Param('id') id: string) {
    return 'track deleted';
  }
}
