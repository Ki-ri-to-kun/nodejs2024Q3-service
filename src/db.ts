import { v4 as uuid } from 'uuid';

import { User } from './models/User';
import { Album } from './models/Album';
import { Track } from './models/Track';
import { Artist } from './models/Artist';
import { Favorites } from './models/Favorites';

interface Db {
  users: User[];
  albums: Album[];
  tracks: Track[];
  artists: Artist[];
  favorites: Favorites;
}

const users: User[] = [
  {
    id: uuid(),
    login: 'user1',
    password: '123456',
    version: 1,
    createdAt: 123456789,
    updatedAt: 123456789,
  },
  {
    id: uuid(),
    login: 'user2',
    password: '123456',
    version: 1,
    createdAt: 123456789,
    updatedAt: 123456789,
  },
  {
    id: uuid(),
    login: 'user3',
    password: '123456',
    version: 1,
    createdAt: 123456789,
    updatedAt: 123456789,
  },
  {
    id: uuid(),
    login: 'user4',
    password: '123456',
    version: 1,
    createdAt: 123456789,
    updatedAt: 123456789,
  },
];

const albums: Album[] = [
  {
    id: uuid(),
    name: 'album1',
    year: 2001,
    artistId: null,
  },
  {
    id: uuid(),
    name: 'album2',
    year: 2000,
    artistId: null,
  },
  {
    id: uuid(),
    name: 'album3',
    year: 2000,
    artistId: null,
  },
];

const tracks: Track[] = [
  {
    id: uuid(),
    name: 'track1',
    artistId: null,
    albumId: null,
    duration: 400,
  },
  {
    id: uuid(),
    name: 'track2',
    artistId: null,
    albumId: null,
    duration: 400,
  },
  {
    id: uuid(),
    name: 'track3',
    artistId: null,
    albumId: null,
    duration: 400,
  },
];

const artists: Artist[] = [
  {
    id: uuid(),
    name: 'artist1',
    grammy: true,
  },
  {
    id: uuid(),
    name: 'artist2',
    grammy: true,
  },
  {
    id: uuid(),
    name: 'artist3',
    grammy: false,
  },
];

const favorites: Favorites = {
  artists: ['1', '2', '3'],
  albums: ['1', '2', '3'],
  tracks: ['1', '2', '3'],
};

export const db: Db = {
  users,
  albums,
  tracks,
  artists,
  favorites,
};
