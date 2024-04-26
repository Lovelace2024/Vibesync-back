
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  warnOnce,
  defineDmmfProperty,
  Public,
  getRuntime
} = require('./runtime/edge.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 5.13.0
 * Query Engine version: b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b
 */
Prisma.prismaVersion = {
  client: "5.13.0",
  engine: "b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b"
}

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = Extensions.getExtensionContext
Prisma.defineExtension = Extensions.defineExtension

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */
exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  email: 'email',
  password: 'password',
  image: 'image',
  role: 'role',
  name: 'name',
  gender: 'gender',
  birthDate: 'birthDate',
  country: 'country',
  refreshToken: 'refreshToken'
};

exports.Prisma.TracksScalarFieldEnum = {
  id: 'id',
  name: 'name',
  url: 'url',
  thumbnail: 'thumbnail',
  genreName: 'genreName'
};

exports.Prisma.AlbumsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  artistName: 'artistName',
  thumbnail: 'thumbnail',
  genreName: 'genreName'
};

exports.Prisma.PlaylistsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  thumbnail: 'thumbnail',
  publicAccess: 'publicAccess',
  userId: 'userId'
};

exports.Prisma.ArtistsScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  thumbnail: 'thumbnail',
  genreName: 'genreName',
  description: 'description'
};

exports.Prisma.GenreScalarFieldEnum = {
  id: 'id',
  name: 'name'
};

exports.Prisma.ArtistsOnTracksScalarFieldEnum = {
  id: 'id',
  artistId: 'artistId',
  trackId: 'trackId'
};

exports.Prisma.TracksOnAlbumsScalarFieldEnum = {
  id: 'id',
  albumId: 'albumId',
  trackId: 'trackId'
};

exports.Prisma.UserFavsTracksScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  trackId: 'trackId',
  createdAt: 'createdAt'
};

exports.Prisma.PlaylistToTrackScalarFieldEnum = {
  id: 'id',
  playlistId: 'playlistId',
  trackId: 'trackId'
};

exports.Prisma.UserFollowsPlaylistsScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  playlistId: 'playlistId'
};

exports.Prisma.UserFollowsArtistsScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  artistId: 'artistId',
  createdAt: 'createdAt'
};

exports.Prisma.UserLikedAlbumsScalarFieldEnum = {
  id: 'id',
  userId: 'userId',
  albumId: 'albumId',
  createdAt: 'createdAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};


exports.Prisma.ModelName = {
  User: 'User',
  Tracks: 'Tracks',
  Albums: 'Albums',
  Playlists: 'Playlists',
  Artists: 'Artists',
  Genre: 'Genre',
  ArtistsOnTracks: 'ArtistsOnTracks',
  TracksOnAlbums: 'TracksOnAlbums',
  UserFavsTracks: 'UserFavsTracks',
  PlaylistToTrack: 'PlaylistToTrack',
  UserFollowsPlaylists: 'UserFollowsPlaylists',
  UserFollowsArtists: 'UserFollowsArtists',
  UserLikedAlbums: 'UserLikedAlbums'
};
/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/juanazula/assembler/MovieHub-FullStack/prisma/generated/mongo_client",
      "value": "C:\\Users\\Usuario\\Desktop\\HTML\\ait\\ApollofyBack\\MovieHub-FullStack\\prisma\\generated\\mongo_client",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "windows",
        "native": true
      }
    ],
    "previewFeatures": [],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": null,
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../..",
  "clientVersion": "5.13.0",
  "engineVersion": "b9a39a7ee606c28e3455d0fd60e78c3ba82b1a2b",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "mongodb",
  "postinstall": false,
  "inlineDatasources": {
    "db": {
      "url": {
        "fromEnvVar": "DATABASE_URL",
        "value": null
      }
    }
  },
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider        = \"prisma-client-js\"\n  previewFeatures = []\n  output          = \"./generated/mongo_client\"\n}\n\ndatasource db {\n  provider = \"mongodb\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel User {\n  id                String                 @id @default(auto()) @map(\"_id\") @db.ObjectId\n  email             String                 @unique\n  password          String\n  image             String                 @default(\"https://res.cloudinary.com/dgtamgaup/image/upload/v1713780258/n2qkvc3jpgtfftcsxst8.webp\")\n  role              String                 @default(\"user\")\n  name              String?\n  gender            String?\n  birthDate         String?\n  country           String?\n  likedAlbums       UserLikedAlbums[]\n  artistsFollowed   UserFollowsArtists[]\n  followedPlaylists UserFollowsPlaylists[]\n  createdPlaylists  Playlists[]\n  favTracks         UserFavsTracks[]\n}\n\nmodel Tracks {\n  id                  String            @id @default(auto()) @map(\"_id\") @db.ObjectId\n  name                String            @unique\n  artist              ArtistsOnTracks[]\n  url                 String\n  thumbnail           String\n  genre               Genre             @relation(fields: [genreName], references: [name])\n  genreName           String\n  album               TracksOnAlbums[]\n  playlistConnections PlaylistToTrack[]\n  favsOfUsers         UserFavsTracks[]\n}\n\nmodel Albums {\n  id           String            @id @default(auto()) @map(\"_id\") @db.ObjectId\n  name         String\n  artist       Artists           @relation(fields: [artistName], references: [name])\n  artistName   String\n  thumbnail    String\n  tracks       TracksOnAlbums[]\n  genre        Genre             @relation(fields: [genreName], references: [name])\n  genreName    String\n  likedByUsers UserLikedAlbums[]\n}\n\nmodel Playlists {\n  id                String                 @id @default(auto()) @map(\"_id\") @db.ObjectId\n  name              String                 @unique\n  thumbnail         String\n  publicAccess      Boolean                @default(true)\n  user              User                   @relation(fields: [userId], references: [id], onDelete: Cascade) //Who creates the Playlist\n  userId            String                 @db.ObjectId\n  followers         UserFollowsPlaylists[]\n  tracksConnections PlaylistToTrack[]\n}\n\nmodel Artists {\n  id          String               @id @default(auto()) @map(\"_id\") @db.ObjectId\n  name        String               @unique\n  email       String               @unique\n  password    String\n  thumbnail   String               @default(\"https://res.cloudinary.com/dgtamgaup/image/upload/v1713780258/n2qkvc3jpgtfftcsxst8.webp\")\n  albums      Albums[]\n  tracks      ArtistsOnTracks[]\n  genre       Genre                @relation(fields: [genreName], references: [name])\n  genreName   String\n  followers   UserFollowsArtists[]\n  description String?\n}\n\nmodel Genre {\n  id      String    @id @default(auto()) @map(\"_id\") @db.ObjectId\n  name    String    @unique\n  albums  Albums[]\n  tracks  Tracks[]\n  artists Artists[]\n}\n\n// Intermediate tables\n\nmodel ArtistsOnTracks {\n  id       String  @id @default(auto()) @map(\"_id\") @db.ObjectId\n  artist   Artists @relation(fields: [artistId], references: [id])\n  artistId String  @db.ObjectId\n  track    Tracks  @relation(fields: [trackId], references: [id])\n  trackId  String  @db.ObjectId\n\n  @@unique([artistId, trackId])\n}\n\nmodel TracksOnAlbums {\n  id      String @id @default(auto()) @map(\"_id\") @db.ObjectId\n  album   Albums @relation(fields: [albumId], references: [id])\n  albumId String  @db.ObjectId\n  track   Tracks @relation(fields: [trackId], references: [id])\n  trackId String @db.ObjectId\n\n  @@unique([albumId, trackId])\n}\n\nmodel UserFavsTracks {\n  id        String   @id @default(auto()) @map(\"_id\") @db.ObjectId\n  userId    String   @db.ObjectId\n  user      User     @relation(fields: [userId], references: [id])\n  trackId   String   @db.ObjectId\n  track     Tracks   @relation(fields: [trackId], references: [id])\n  createdAt DateTime @default(now())\n\n  @@unique([userId, trackId])\n}\n\nmodel PlaylistToTrack {\n  id         String    @id @default(auto()) @map(\"_id\") @db.ObjectId\n  playlistId String    @db.ObjectId\n  playlist   Playlists @relation(fields: [playlistId], references: [id])\n  trackId    String    @db.ObjectId\n  track      Tracks    @relation(fields: [trackId], references: [id])\n\n  @@unique([playlistId, trackId])\n}\n\nmodel UserFollowsPlaylists {\n  id         String    @id @default(auto()) @map(\"_id\") @db.ObjectId\n  userId     String    @db.ObjectId\n  user       User      @relation(fields: [userId], references: [id])\n  playlistId String    @db.ObjectId\n  playlist   Playlists @relation(fields: [playlistId], references: [id])\n\n  @@unique([userId, playlistId])\n}\n\nmodel UserFollowsArtists {\n  id        String   @id @default(auto()) @map(\"_id\") @db.ObjectId\n  userId    String   @db.ObjectId\n  user      User     @relation(fields: [userId], references: [id])\n  artistId  String   @db.ObjectId\n  artist    Artists  @relation(fields: [artistId], references: [id])\n  createdAt DateTime @default(now())\n\n  @@unique([userId, artistId])\n}\n\nmodel UserLikedAlbums {\n  id        String   @id @default(auto()) @map(\"_id\") @db.ObjectId\n  userId    String   @db.ObjectId\n  user      User     @relation(fields: [userId], references: [id])\n  albumId   String   @db.ObjectId\n  album     Albums   @relation(fields: [albumId], references: [id])\n  createdAt DateTime @default(now())\n\n  @@unique([userId, albumId])\n}\n",
  "inlineSchemaHash": "664b7456038aab4d0eeae6d1ce375fb034aef4810f71cc36fbc6d274c4521cee",
  "inlineSchema": "// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider        = \"prisma-client-js\"\n  previewFeatures = []\n  output          = \"./generated/mongo_client\"\n}\n\ndatasource db {\n  provider = \"mongodb\"\n  url      = env(\"DATABASE_URL\")\n}\n\nmodel User {\n  id                String                 @id @default(auto()) @map(\"_id\") @db.ObjectId\n  email             String                 @unique\n  password          String\n  image             String                 @default(\"https://res.cloudinary.com/dgtamgaup/image/upload/v1713780258/n2qkvc3jpgtfftcsxst8.webp\")\n  role              String                 @default(\"user\")\n  name              String?\n  gender            String?\n  birthDate         String?\n  country           String?\n  refreshToken      String?\n  likedAlbums       UserLikedAlbums[]\n  artistsFollowed   UserFollowsArtists[]\n  followedPlaylists UserFollowsPlaylists[]\n  createdPlaylists  Playlists[]\n  favTracks         UserFavsTracks[]\n}\n\nmodel Tracks {\n  id                  String            @id @default(auto()) @map(\"_id\") @db.ObjectId\n  name                String            @unique\n  artist              ArtistsOnTracks[]\n  url                 String\n  thumbnail           String\n  genre               Genre             @relation(fields: [genreName], references: [name])\n  genreName           String\n  album               TracksOnAlbums[]\n  playlistConnections PlaylistToTrack[]\n  favsOfUsers         UserFavsTracks[]\n}\n\nmodel Albums {\n  id           String            @id @default(auto()) @map(\"_id\") @db.ObjectId\n  name         String\n  artist       Artists           @relation(fields: [artistName], references: [name])\n  artistName   String\n  thumbnail    String\n  tracks       TracksOnAlbums[]\n  genre        Genre             @relation(fields: [genreName], references: [name])\n  genreName    String\n  likedByUsers UserLikedAlbums[]\n}\n\nmodel Playlists {\n  id                String                 @id @default(auto()) @map(\"_id\") @db.ObjectId\n  name              String                 @unique\n  thumbnail         String\n  publicAccess      Boolean                @default(true)\n  user              User                   @relation(fields: [userId], references: [id], onDelete: Cascade) //Who creates the Playlist\n  userId            String                 @db.ObjectId\n  followers         UserFollowsPlaylists[]\n  tracksConnections PlaylistToTrack[]\n}\n\nmodel Artists {\n  id          String               @id @default(auto()) @map(\"_id\") @db.ObjectId\n  name        String               @unique\n  email       String               @unique\n  password    String\n  thumbnail   String               @default(\"https://res.cloudinary.com/dgtamgaup/image/upload/v1713780258/n2qkvc3jpgtfftcsxst8.webp\")\n  albums      Albums[]\n  tracks      ArtistsOnTracks[]\n  genre       Genre                @relation(fields: [genreName], references: [name])\n  genreName   String\n  followers   UserFollowsArtists[]\n  description String?\n}\n\nmodel Genre {\n  id      String    @id @default(auto()) @map(\"_id\") @db.ObjectId\n  name    String    @unique\n  albums  Albums[]\n  tracks  Tracks[]\n  artists Artists[]\n}\n\n// Intermediate tables\n\nmodel ArtistsOnTracks {\n  id       String  @id @default(auto()) @map(\"_id\") @db.ObjectId\n  artist   Artists @relation(fields: [artistId], references: [id])\n  artistId String  @db.ObjectId\n  track    Tracks  @relation(fields: [trackId], references: [id])\n  trackId  String  @db.ObjectId\n\n  @@unique([artistId, trackId])\n}\n\nmodel TracksOnAlbums {\n  id      String @id @default(auto()) @map(\"_id\") @db.ObjectId\n  album   Albums @relation(fields: [albumId], references: [id])\n  albumId String @db.ObjectId\n  track   Tracks @relation(fields: [trackId], references: [id])\n  trackId String @db.ObjectId\n\n  @@unique([albumId, trackId])\n}\n\nmodel UserFavsTracks {\n  id        String   @id @default(auto()) @map(\"_id\") @db.ObjectId\n  userId    String   @db.ObjectId\n  user      User     @relation(fields: [userId], references: [id])\n  trackId   String   @db.ObjectId\n  track     Tracks   @relation(fields: [trackId], references: [id])\n  createdAt DateTime @default(now())\n\n  @@unique([userId, trackId])\n}\n\nmodel PlaylistToTrack {\n  id         String    @id @default(auto()) @map(\"_id\") @db.ObjectId\n  playlistId String    @db.ObjectId\n  playlist   Playlists @relation(fields: [playlistId], references: [id])\n  trackId    String    @db.ObjectId\n  track      Tracks    @relation(fields: [trackId], references: [id])\n\n  @@unique([playlistId, trackId])\n}\n\nmodel UserFollowsPlaylists {\n  id         String    @id @default(auto()) @map(\"_id\") @db.ObjectId\n  userId     String    @db.ObjectId\n  user       User      @relation(fields: [userId], references: [id])\n  playlistId String    @db.ObjectId\n  playlist   Playlists @relation(fields: [playlistId], references: [id])\n\n  @@unique([userId, playlistId])\n}\n\nmodel UserFollowsArtists {\n  id        String   @id @default(auto()) @map(\"_id\") @db.ObjectId\n  userId    String   @db.ObjectId\n  user      User     @relation(fields: [userId], references: [id])\n  artistId  String   @db.ObjectId\n  artist    Artists  @relation(fields: [artistId], references: [id])\n  createdAt DateTime @default(now())\n\n  @@unique([userId, artistId])\n}\n\nmodel UserLikedAlbums {\n  id        String   @id @default(auto()) @map(\"_id\") @db.ObjectId\n  userId    String   @db.ObjectId\n  user      User     @relation(fields: [userId], references: [id])\n  albumId   String   @db.ObjectId\n  album     Albums   @relation(fields: [albumId], references: [id])\n  createdAt DateTime @default(now())\n\n  @@unique([userId, albumId])\n}\n",
  "inlineSchemaHash": "e9df8343853cb1e612c87957c9633bc21658af8e7b10fad2fe0eed8c55d89063",
  "copyEngine": true
}
config.dirname = '/'

config.runtimeDataModel = JSON.parse("{\"models\":{\"User\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"image\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"https://res.cloudinary.com/dgtamgaup/image/upload/v1713780258/n2qkvc3jpgtfftcsxst8.webp\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"role\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"user\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"gender\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"birthDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"country\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"refreshToken\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"likedAlbums\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserLikedAlbums\",\"relationName\":\"UserToUserLikedAlbums\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"artistsFollowed\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserFollowsArtists\",\"relationName\":\"UserToUserFollowsArtists\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"followedPlaylists\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserFollowsPlaylists\",\"relationName\":\"UserToUserFollowsPlaylists\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdPlaylists\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Playlists\",\"relationName\":\"PlaylistsToUser\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"favTracks\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserFavsTracks\",\"relationName\":\"UserToUserFavsTracks\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Tracks\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"artist\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ArtistsOnTracks\",\"relationName\":\"ArtistsOnTracksToTracks\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"url\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thumbnail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"genre\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Genre\",\"relationName\":\"GenreToTracks\",\"relationFromFields\":[\"genreName\"],\"relationToFields\":[\"name\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"genreName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"album\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TracksOnAlbums\",\"relationName\":\"TracksToTracksOnAlbums\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"playlistConnections\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PlaylistToTrack\",\"relationName\":\"PlaylistToTrackToTracks\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"favsOfUsers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserFavsTracks\",\"relationName\":\"TracksToUserFavsTracks\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Albums\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"artist\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Artists\",\"relationName\":\"AlbumsToArtists\",\"relationFromFields\":[\"artistName\"],\"relationToFields\":[\"name\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"artistName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thumbnail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tracks\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TracksOnAlbums\",\"relationName\":\"AlbumsToTracksOnAlbums\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"genre\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Genre\",\"relationName\":\"AlbumsToGenre\",\"relationFromFields\":[\"genreName\"],\"relationToFields\":[\"name\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"genreName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"likedByUsers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserLikedAlbums\",\"relationName\":\"AlbumsToUserLikedAlbums\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Playlists\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thumbnail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"publicAccess\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Boolean\",\"default\":true,\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"PlaylistsToUser\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"relationOnDelete\":\"Cascade\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"followers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserFollowsPlaylists\",\"relationName\":\"PlaylistsToUserFollowsPlaylists\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tracksConnections\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"PlaylistToTrack\",\"relationName\":\"PlaylistToTrackToPlaylists\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Artists\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"email\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"password\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"thumbnail\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":\"https://res.cloudinary.com/dgtamgaup/image/upload/v1713780258/n2qkvc3jpgtfftcsxst8.webp\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"albums\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Albums\",\"relationName\":\"AlbumsToArtists\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tracks\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ArtistsOnTracks\",\"relationName\":\"ArtistsToArtistsOnTracks\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"genre\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Genre\",\"relationName\":\"ArtistsToGenre\",\"relationFromFields\":[\"genreName\"],\"relationToFields\":[\"name\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"genreName\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"followers\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"UserFollowsArtists\",\"relationName\":\"ArtistsToUserFollowsArtists\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"Genre\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"albums\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Albums\",\"relationName\":\"AlbumsToGenre\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tracks\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Tracks\",\"relationName\":\"GenreToTracks\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"artists\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Artists\",\"relationName\":\"ArtistsToGenre\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},\"ArtistsOnTracks\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"artist\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Artists\",\"relationName\":\"ArtistsToArtistsOnTracks\",\"relationFromFields\":[\"artistId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"artistId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"track\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Tracks\",\"relationName\":\"ArtistsOnTracksToTracks\",\"relationFromFields\":[\"trackId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trackId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"artistId\",\"trackId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"artistId\",\"trackId\"]}],\"isGenerated\":false},\"TracksOnAlbums\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"album\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Albums\",\"relationName\":\"AlbumsToTracksOnAlbums\",\"relationFromFields\":[\"albumId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"albumId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"track\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Tracks\",\"relationName\":\"TracksToTracksOnAlbums\",\"relationFromFields\":[\"trackId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trackId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"albumId\",\"trackId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"albumId\",\"trackId\"]}],\"isGenerated\":false},\"UserFavsTracks\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UserToUserFavsTracks\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trackId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"track\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Tracks\",\"relationName\":\"TracksToUserFavsTracks\",\"relationFromFields\":[\"trackId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"userId\",\"trackId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"userId\",\"trackId\"]}],\"isGenerated\":false},\"PlaylistToTrack\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"playlistId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"playlist\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Playlists\",\"relationName\":\"PlaylistToTrackToPlaylists\",\"relationFromFields\":[\"playlistId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trackId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"track\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Tracks\",\"relationName\":\"PlaylistToTrackToTracks\",\"relationFromFields\":[\"trackId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"playlistId\",\"trackId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"playlistId\",\"trackId\"]}],\"isGenerated\":false},\"UserFollowsPlaylists\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UserToUserFollowsPlaylists\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"playlistId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"playlist\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Playlists\",\"relationName\":\"PlaylistsToUserFollowsPlaylists\",\"relationFromFields\":[\"playlistId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"userId\",\"playlistId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"userId\",\"playlistId\"]}],\"isGenerated\":false},\"UserFollowsArtists\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UserToUserFollowsArtists\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"artistId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"artist\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Artists\",\"relationName\":\"ArtistsToUserFollowsArtists\",\"relationFromFields\":[\"artistId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"userId\",\"artistId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"userId\",\"artistId\"]}],\"isGenerated\":false},\"UserLikedAlbums\":{\"dbName\":null,\"fields\":[{\"name\":\"id\",\"dbName\":\"_id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"String\",\"default\":{\"name\":\"auto\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"userId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"user\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"User\",\"relationName\":\"UserToUserLikedAlbums\",\"relationFromFields\":[\"userId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"albumId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"album\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Albums\",\"relationName\":\"AlbumsToUserLikedAlbums\",\"relationFromFields\":[\"albumId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[[\"userId\",\"albumId\"]],\"uniqueIndexes\":[{\"name\":null,\"fields\":[\"userId\",\"albumId\"]}],\"isGenerated\":false}},\"enums\":{},\"types\":{}}")
defineDmmfProperty(exports.Prisma, config.runtimeDataModel)
config.engineWasm = undefined

config.injectableEdgeEnv = () => ({
  parsed: {
    DATABASE_URL: typeof globalThis !== 'undefined' && globalThis['DATABASE_URL'] || typeof process !== 'undefined' && process.env && process.env.DATABASE_URL || undefined
  }
})

if (typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined) {
  Debug.enable(typeof globalThis !== 'undefined' && globalThis['DEBUG'] || typeof process !== 'undefined' && process.env && process.env.DEBUG || undefined)
}

const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

