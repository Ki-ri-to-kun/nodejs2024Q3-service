import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersController } from './users/users.controller';
import { AlbumsController } from './albums/albums.controller';
import { TracksController } from './tracks/tracks.controller';
import { FavoritesController } from './favorites/favorites.controller';
import { ArtistsController } from './artists/artists.controller';

@Module({
  imports: [],
  controllers: [
    AppController,
    UsersController,
    AlbumsController,
    TracksController,
    FavoritesController,
    ArtistsController,
  ],
  providers: [AppService],
})
export class AppModule {}
