
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Tracks
 * 
 */
export type Tracks = $Result.DefaultSelection<Prisma.$TracksPayload>
/**
 * Model Albums
 * 
 */
export type Albums = $Result.DefaultSelection<Prisma.$AlbumsPayload>
/**
 * Model Playlists
 * 
 */
export type Playlists = $Result.DefaultSelection<Prisma.$PlaylistsPayload>
/**
 * Model Artists
 * 
 */
export type Artists = $Result.DefaultSelection<Prisma.$ArtistsPayload>
/**
 * Model Genre
 * 
 */
export type Genre = $Result.DefaultSelection<Prisma.$GenrePayload>
/**
 * Model ArtistsOnTracks
 * 
 */
export type ArtistsOnTracks = $Result.DefaultSelection<Prisma.$ArtistsOnTracksPayload>
/**
 * Model TracksOnAlbums
 * 
 */
export type TracksOnAlbums = $Result.DefaultSelection<Prisma.$TracksOnAlbumsPayload>
/**
 * Model UserFavsTracks
 * 
 */
export type UserFavsTracks = $Result.DefaultSelection<Prisma.$UserFavsTracksPayload>
/**
 * Model PlaylistToTrack
 * 
 */
export type PlaylistToTrack = $Result.DefaultSelection<Prisma.$PlaylistToTrackPayload>
/**
 * Model UserFollowsPlaylists
 * 
 */
export type UserFollowsPlaylists = $Result.DefaultSelection<Prisma.$UserFollowsPlaylistsPayload>
/**
 * Model UserFollowsArtists
 * 
 */
export type UserFollowsArtists = $Result.DefaultSelection<Prisma.$UserFollowsArtistsPayload>
/**
 * Model UserLikedAlbums
 * 
 */
export type UserLikedAlbums = $Result.DefaultSelection<Prisma.$UserLikedAlbumsPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P]): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number }): $Utils.JsPromise<R>

  /**
   * Executes a raw MongoDB command and returns the result of it.
   * @example
   * ```
   * const user = await prisma.$runCommandRaw({
   *   aggregate: 'User',
   *   pipeline: [{ $match: { name: 'Bob' } }, { $project: { email: true, _id: false } }],
   *   explain: false,
   * })
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $runCommandRaw(command: Prisma.InputJsonObject): Prisma.PrismaPromise<Prisma.JsonObject>

  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.tracks`: Exposes CRUD operations for the **Tracks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tracks
    * const tracks = await prisma.tracks.findMany()
    * ```
    */
  get tracks(): Prisma.TracksDelegate<ExtArgs>;

  /**
   * `prisma.albums`: Exposes CRUD operations for the **Albums** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Albums
    * const albums = await prisma.albums.findMany()
    * ```
    */
  get albums(): Prisma.AlbumsDelegate<ExtArgs>;

  /**
   * `prisma.playlists`: Exposes CRUD operations for the **Playlists** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Playlists
    * const playlists = await prisma.playlists.findMany()
    * ```
    */
  get playlists(): Prisma.PlaylistsDelegate<ExtArgs>;

  /**
   * `prisma.artists`: Exposes CRUD operations for the **Artists** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artists
    * const artists = await prisma.artists.findMany()
    * ```
    */
  get artists(): Prisma.ArtistsDelegate<ExtArgs>;

  /**
   * `prisma.genre`: Exposes CRUD operations for the **Genre** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Genres
    * const genres = await prisma.genre.findMany()
    * ```
    */
  get genre(): Prisma.GenreDelegate<ExtArgs>;

  /**
   * `prisma.artistsOnTracks`: Exposes CRUD operations for the **ArtistsOnTracks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArtistsOnTracks
    * const artistsOnTracks = await prisma.artistsOnTracks.findMany()
    * ```
    */
  get artistsOnTracks(): Prisma.ArtistsOnTracksDelegate<ExtArgs>;

  /**
   * `prisma.tracksOnAlbums`: Exposes CRUD operations for the **TracksOnAlbums** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TracksOnAlbums
    * const tracksOnAlbums = await prisma.tracksOnAlbums.findMany()
    * ```
    */
  get tracksOnAlbums(): Prisma.TracksOnAlbumsDelegate<ExtArgs>;

  /**
   * `prisma.userFavsTracks`: Exposes CRUD operations for the **UserFavsTracks** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserFavsTracks
    * const userFavsTracks = await prisma.userFavsTracks.findMany()
    * ```
    */
  get userFavsTracks(): Prisma.UserFavsTracksDelegate<ExtArgs>;

  /**
   * `prisma.playlistToTrack`: Exposes CRUD operations for the **PlaylistToTrack** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlaylistToTracks
    * const playlistToTracks = await prisma.playlistToTrack.findMany()
    * ```
    */
  get playlistToTrack(): Prisma.PlaylistToTrackDelegate<ExtArgs>;

  /**
   * `prisma.userFollowsPlaylists`: Exposes CRUD operations for the **UserFollowsPlaylists** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserFollowsPlaylists
    * const userFollowsPlaylists = await prisma.userFollowsPlaylists.findMany()
    * ```
    */
  get userFollowsPlaylists(): Prisma.UserFollowsPlaylistsDelegate<ExtArgs>;

  /**
   * `prisma.userFollowsArtists`: Exposes CRUD operations for the **UserFollowsArtists** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserFollowsArtists
    * const userFollowsArtists = await prisma.userFollowsArtists.findMany()
    * ```
    */
  get userFollowsArtists(): Prisma.UserFollowsArtistsDelegate<ExtArgs>;

  /**
   * `prisma.userLikedAlbums`: Exposes CRUD operations for the **UserLikedAlbums** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserLikedAlbums
    * const userLikedAlbums = await prisma.userLikedAlbums.findMany()
    * ```
    */
  get userLikedAlbums(): Prisma.UserLikedAlbumsDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.12.1
   * Query Engine version: 473ed3124229e22d881cb7addf559799debae1ab
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'user' | 'tracks' | 'albums' | 'playlists' | 'artists' | 'genre' | 'artistsOnTracks' | 'tracksOnAlbums' | 'userFavsTracks' | 'playlistToTrack' | 'userFollowsPlaylists' | 'userFollowsArtists' | 'userLikedAlbums'
      txIsolationLevel: never
    },
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Tracks: {
        payload: Prisma.$TracksPayload<ExtArgs>
        fields: Prisma.TracksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TracksFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TracksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TracksFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TracksPayload>
          }
          findFirst: {
            args: Prisma.TracksFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TracksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TracksFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TracksPayload>
          }
          findMany: {
            args: Prisma.TracksFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TracksPayload>[]
          }
          create: {
            args: Prisma.TracksCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TracksPayload>
          }
          createMany: {
            args: Prisma.TracksCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TracksDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TracksPayload>
          }
          update: {
            args: Prisma.TracksUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TracksPayload>
          }
          deleteMany: {
            args: Prisma.TracksDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TracksUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TracksUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TracksPayload>
          }
          aggregate: {
            args: Prisma.TracksAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTracks>
          }
          groupBy: {
            args: Prisma.TracksGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TracksGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TracksFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.TracksAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.TracksCountArgs<ExtArgs>,
            result: $Utils.Optional<TracksCountAggregateOutputType> | number
          }
        }
      }
      Albums: {
        payload: Prisma.$AlbumsPayload<ExtArgs>
        fields: Prisma.AlbumsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AlbumsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AlbumsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumsPayload>
          }
          findFirst: {
            args: Prisma.AlbumsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AlbumsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumsPayload>
          }
          findMany: {
            args: Prisma.AlbumsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumsPayload>[]
          }
          create: {
            args: Prisma.AlbumsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumsPayload>
          }
          createMany: {
            args: Prisma.AlbumsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AlbumsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumsPayload>
          }
          update: {
            args: Prisma.AlbumsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumsPayload>
          }
          deleteMany: {
            args: Prisma.AlbumsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AlbumsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AlbumsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AlbumsPayload>
          }
          aggregate: {
            args: Prisma.AlbumsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAlbums>
          }
          groupBy: {
            args: Prisma.AlbumsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AlbumsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.AlbumsFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.AlbumsAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.AlbumsCountArgs<ExtArgs>,
            result: $Utils.Optional<AlbumsCountAggregateOutputType> | number
          }
        }
      }
      Playlists: {
        payload: Prisma.$PlaylistsPayload<ExtArgs>
        fields: Prisma.PlaylistsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaylistsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaylistsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistsPayload>
          }
          findFirst: {
            args: Prisma.PlaylistsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaylistsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistsPayload>
          }
          findMany: {
            args: Prisma.PlaylistsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistsPayload>[]
          }
          create: {
            args: Prisma.PlaylistsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistsPayload>
          }
          createMany: {
            args: Prisma.PlaylistsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PlaylistsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistsPayload>
          }
          update: {
            args: Prisma.PlaylistsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistsPayload>
          }
          deleteMany: {
            args: Prisma.PlaylistsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PlaylistsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PlaylistsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistsPayload>
          }
          aggregate: {
            args: Prisma.PlaylistsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePlaylists>
          }
          groupBy: {
            args: Prisma.PlaylistsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PlaylistsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PlaylistsFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.PlaylistsAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.PlaylistsCountArgs<ExtArgs>,
            result: $Utils.Optional<PlaylistsCountAggregateOutputType> | number
          }
        }
      }
      Artists: {
        payload: Prisma.$ArtistsPayload<ExtArgs>
        fields: Prisma.ArtistsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>
          }
          findFirst: {
            args: Prisma.ArtistsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>
          }
          findMany: {
            args: Prisma.ArtistsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>[]
          }
          create: {
            args: Prisma.ArtistsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>
          }
          createMany: {
            args: Prisma.ArtistsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ArtistsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>
          }
          update: {
            args: Prisma.ArtistsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>
          }
          deleteMany: {
            args: Prisma.ArtistsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ArtistsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistsPayload>
          }
          aggregate: {
            args: Prisma.ArtistsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateArtists>
          }
          groupBy: {
            args: Prisma.ArtistsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ArtistsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ArtistsFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.ArtistsAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.ArtistsCountArgs<ExtArgs>,
            result: $Utils.Optional<ArtistsCountAggregateOutputType> | number
          }
        }
      }
      Genre: {
        payload: Prisma.$GenrePayload<ExtArgs>
        fields: Prisma.GenreFieldRefs
        operations: {
          findUnique: {
            args: Prisma.GenreFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.GenreFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findFirst: {
            args: Prisma.GenreFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.GenreFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          findMany: {
            args: Prisma.GenreFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>[]
          }
          create: {
            args: Prisma.GenreCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          createMany: {
            args: Prisma.GenreCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.GenreDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          update: {
            args: Prisma.GenreUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          deleteMany: {
            args: Prisma.GenreDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.GenreUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.GenreUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$GenrePayload>
          }
          aggregate: {
            args: Prisma.GenreAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateGenre>
          }
          groupBy: {
            args: Prisma.GenreGroupByArgs<ExtArgs>,
            result: $Utils.Optional<GenreGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.GenreFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.GenreAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.GenreCountArgs<ExtArgs>,
            result: $Utils.Optional<GenreCountAggregateOutputType> | number
          }
        }
      }
      ArtistsOnTracks: {
        payload: Prisma.$ArtistsOnTracksPayload<ExtArgs>
        fields: Prisma.ArtistsOnTracksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ArtistsOnTracksFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistsOnTracksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ArtistsOnTracksFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistsOnTracksPayload>
          }
          findFirst: {
            args: Prisma.ArtistsOnTracksFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistsOnTracksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ArtistsOnTracksFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistsOnTracksPayload>
          }
          findMany: {
            args: Prisma.ArtistsOnTracksFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistsOnTracksPayload>[]
          }
          create: {
            args: Prisma.ArtistsOnTracksCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistsOnTracksPayload>
          }
          createMany: {
            args: Prisma.ArtistsOnTracksCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.ArtistsOnTracksDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistsOnTracksPayload>
          }
          update: {
            args: Prisma.ArtistsOnTracksUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistsOnTracksPayload>
          }
          deleteMany: {
            args: Prisma.ArtistsOnTracksDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.ArtistsOnTracksUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.ArtistsOnTracksUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$ArtistsOnTracksPayload>
          }
          aggregate: {
            args: Prisma.ArtistsOnTracksAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateArtistsOnTracks>
          }
          groupBy: {
            args: Prisma.ArtistsOnTracksGroupByArgs<ExtArgs>,
            result: $Utils.Optional<ArtistsOnTracksGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.ArtistsOnTracksFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.ArtistsOnTracksAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.ArtistsOnTracksCountArgs<ExtArgs>,
            result: $Utils.Optional<ArtistsOnTracksCountAggregateOutputType> | number
          }
        }
      }
      TracksOnAlbums: {
        payload: Prisma.$TracksOnAlbumsPayload<ExtArgs>
        fields: Prisma.TracksOnAlbumsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TracksOnAlbumsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TracksOnAlbumsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TracksOnAlbumsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TracksOnAlbumsPayload>
          }
          findFirst: {
            args: Prisma.TracksOnAlbumsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TracksOnAlbumsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TracksOnAlbumsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TracksOnAlbumsPayload>
          }
          findMany: {
            args: Prisma.TracksOnAlbumsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TracksOnAlbumsPayload>[]
          }
          create: {
            args: Prisma.TracksOnAlbumsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TracksOnAlbumsPayload>
          }
          createMany: {
            args: Prisma.TracksOnAlbumsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.TracksOnAlbumsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TracksOnAlbumsPayload>
          }
          update: {
            args: Prisma.TracksOnAlbumsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TracksOnAlbumsPayload>
          }
          deleteMany: {
            args: Prisma.TracksOnAlbumsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.TracksOnAlbumsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.TracksOnAlbumsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$TracksOnAlbumsPayload>
          }
          aggregate: {
            args: Prisma.TracksOnAlbumsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateTracksOnAlbums>
          }
          groupBy: {
            args: Prisma.TracksOnAlbumsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<TracksOnAlbumsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.TracksOnAlbumsFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.TracksOnAlbumsAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.TracksOnAlbumsCountArgs<ExtArgs>,
            result: $Utils.Optional<TracksOnAlbumsCountAggregateOutputType> | number
          }
        }
      }
      UserFavsTracks: {
        payload: Prisma.$UserFavsTracksPayload<ExtArgs>
        fields: Prisma.UserFavsTracksFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFavsTracksFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserFavsTracksPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFavsTracksFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserFavsTracksPayload>
          }
          findFirst: {
            args: Prisma.UserFavsTracksFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserFavsTracksPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFavsTracksFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserFavsTracksPayload>
          }
          findMany: {
            args: Prisma.UserFavsTracksFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserFavsTracksPayload>[]
          }
          create: {
            args: Prisma.UserFavsTracksCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserFavsTracksPayload>
          }
          createMany: {
            args: Prisma.UserFavsTracksCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserFavsTracksDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserFavsTracksPayload>
          }
          update: {
            args: Prisma.UserFavsTracksUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserFavsTracksPayload>
          }
          deleteMany: {
            args: Prisma.UserFavsTracksDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserFavsTracksUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserFavsTracksUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserFavsTracksPayload>
          }
          aggregate: {
            args: Prisma.UserFavsTracksAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserFavsTracks>
          }
          groupBy: {
            args: Prisma.UserFavsTracksGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserFavsTracksGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFavsTracksFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserFavsTracksAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.UserFavsTracksCountArgs<ExtArgs>,
            result: $Utils.Optional<UserFavsTracksCountAggregateOutputType> | number
          }
        }
      }
      PlaylistToTrack: {
        payload: Prisma.$PlaylistToTrackPayload<ExtArgs>
        fields: Prisma.PlaylistToTrackFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlaylistToTrackFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistToTrackPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlaylistToTrackFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistToTrackPayload>
          }
          findFirst: {
            args: Prisma.PlaylistToTrackFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistToTrackPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlaylistToTrackFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistToTrackPayload>
          }
          findMany: {
            args: Prisma.PlaylistToTrackFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistToTrackPayload>[]
          }
          create: {
            args: Prisma.PlaylistToTrackCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistToTrackPayload>
          }
          createMany: {
            args: Prisma.PlaylistToTrackCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.PlaylistToTrackDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistToTrackPayload>
          }
          update: {
            args: Prisma.PlaylistToTrackUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistToTrackPayload>
          }
          deleteMany: {
            args: Prisma.PlaylistToTrackDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.PlaylistToTrackUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.PlaylistToTrackUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$PlaylistToTrackPayload>
          }
          aggregate: {
            args: Prisma.PlaylistToTrackAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregatePlaylistToTrack>
          }
          groupBy: {
            args: Prisma.PlaylistToTrackGroupByArgs<ExtArgs>,
            result: $Utils.Optional<PlaylistToTrackGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.PlaylistToTrackFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.PlaylistToTrackAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.PlaylistToTrackCountArgs<ExtArgs>,
            result: $Utils.Optional<PlaylistToTrackCountAggregateOutputType> | number
          }
        }
      }
      UserFollowsPlaylists: {
        payload: Prisma.$UserFollowsPlaylistsPayload<ExtArgs>
        fields: Prisma.UserFollowsPlaylistsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFollowsPlaylistsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserFollowsPlaylistsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFollowsPlaylistsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserFollowsPlaylistsPayload>
          }
          findFirst: {
            args: Prisma.UserFollowsPlaylistsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserFollowsPlaylistsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFollowsPlaylistsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserFollowsPlaylistsPayload>
          }
          findMany: {
            args: Prisma.UserFollowsPlaylistsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserFollowsPlaylistsPayload>[]
          }
          create: {
            args: Prisma.UserFollowsPlaylistsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserFollowsPlaylistsPayload>
          }
          createMany: {
            args: Prisma.UserFollowsPlaylistsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserFollowsPlaylistsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserFollowsPlaylistsPayload>
          }
          update: {
            args: Prisma.UserFollowsPlaylistsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserFollowsPlaylistsPayload>
          }
          deleteMany: {
            args: Prisma.UserFollowsPlaylistsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserFollowsPlaylistsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserFollowsPlaylistsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserFollowsPlaylistsPayload>
          }
          aggregate: {
            args: Prisma.UserFollowsPlaylistsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserFollowsPlaylists>
          }
          groupBy: {
            args: Prisma.UserFollowsPlaylistsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserFollowsPlaylistsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFollowsPlaylistsFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserFollowsPlaylistsAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.UserFollowsPlaylistsCountArgs<ExtArgs>,
            result: $Utils.Optional<UserFollowsPlaylistsCountAggregateOutputType> | number
          }
        }
      }
      UserFollowsArtists: {
        payload: Prisma.$UserFollowsArtistsPayload<ExtArgs>
        fields: Prisma.UserFollowsArtistsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFollowsArtistsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserFollowsArtistsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFollowsArtistsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserFollowsArtistsPayload>
          }
          findFirst: {
            args: Prisma.UserFollowsArtistsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserFollowsArtistsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFollowsArtistsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserFollowsArtistsPayload>
          }
          findMany: {
            args: Prisma.UserFollowsArtistsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserFollowsArtistsPayload>[]
          }
          create: {
            args: Prisma.UserFollowsArtistsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserFollowsArtistsPayload>
          }
          createMany: {
            args: Prisma.UserFollowsArtistsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserFollowsArtistsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserFollowsArtistsPayload>
          }
          update: {
            args: Prisma.UserFollowsArtistsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserFollowsArtistsPayload>
          }
          deleteMany: {
            args: Prisma.UserFollowsArtistsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserFollowsArtistsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserFollowsArtistsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserFollowsArtistsPayload>
          }
          aggregate: {
            args: Prisma.UserFollowsArtistsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserFollowsArtists>
          }
          groupBy: {
            args: Prisma.UserFollowsArtistsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserFollowsArtistsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserFollowsArtistsFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserFollowsArtistsAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.UserFollowsArtistsCountArgs<ExtArgs>,
            result: $Utils.Optional<UserFollowsArtistsCountAggregateOutputType> | number
          }
        }
      }
      UserLikedAlbums: {
        payload: Prisma.$UserLikedAlbumsPayload<ExtArgs>
        fields: Prisma.UserLikedAlbumsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserLikedAlbumsFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserLikedAlbumsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserLikedAlbumsFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserLikedAlbumsPayload>
          }
          findFirst: {
            args: Prisma.UserLikedAlbumsFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserLikedAlbumsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserLikedAlbumsFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserLikedAlbumsPayload>
          }
          findMany: {
            args: Prisma.UserLikedAlbumsFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserLikedAlbumsPayload>[]
          }
          create: {
            args: Prisma.UserLikedAlbumsCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserLikedAlbumsPayload>
          }
          createMany: {
            args: Prisma.UserLikedAlbumsCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserLikedAlbumsDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserLikedAlbumsPayload>
          }
          update: {
            args: Prisma.UserLikedAlbumsUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserLikedAlbumsPayload>
          }
          deleteMany: {
            args: Prisma.UserLikedAlbumsDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserLikedAlbumsUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserLikedAlbumsUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserLikedAlbumsPayload>
          }
          aggregate: {
            args: Prisma.UserLikedAlbumsAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUserLikedAlbums>
          }
          groupBy: {
            args: Prisma.UserLikedAlbumsGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserLikedAlbumsGroupByOutputType>[]
          }
          findRaw: {
            args: Prisma.UserLikedAlbumsFindRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          aggregateRaw: {
            args: Prisma.UserLikedAlbumsAggregateRawArgs<ExtArgs>,
            result: Prisma.JsonObject
          }
          count: {
            args: Prisma.UserLikedAlbumsCountArgs<ExtArgs>,
            result: $Utils.Optional<UserLikedAlbumsCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $runCommandRaw: {
          args: Prisma.InputJsonObject,
          result: Prisma.JsonObject
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
    }
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    likedAlbums: number
    artistsFollowed: number
    followedPlaylists: number
    createdPlaylists: number
    favTracks: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likedAlbums?: boolean | UserCountOutputTypeCountLikedAlbumsArgs
    artistsFollowed?: boolean | UserCountOutputTypeCountArtistsFollowedArgs
    followedPlaylists?: boolean | UserCountOutputTypeCountFollowedPlaylistsArgs
    createdPlaylists?: boolean | UserCountOutputTypeCountCreatedPlaylistsArgs
    favTracks?: boolean | UserCountOutputTypeCountFavTracksArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikedAlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLikedAlbumsWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountArtistsFollowedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFollowsArtistsWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFollowedPlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFollowsPlaylistsWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedPlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistsWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavTracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFavsTracksWhereInput
  }



  /**
   * Count Type TracksCountOutputType
   */

  export type TracksCountOutputType = {
    artist: number
    album: number
    playlistConnections: number
    favsOfUsers: number
  }

  export type TracksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | TracksCountOutputTypeCountArtistArgs
    album?: boolean | TracksCountOutputTypeCountAlbumArgs
    playlistConnections?: boolean | TracksCountOutputTypeCountPlaylistConnectionsArgs
    favsOfUsers?: boolean | TracksCountOutputTypeCountFavsOfUsersArgs
  }

  // Custom InputTypes

  /**
   * TracksCountOutputType without action
   */
  export type TracksCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TracksCountOutputType
     */
    select?: TracksCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * TracksCountOutputType without action
   */
  export type TracksCountOutputTypeCountArtistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistsOnTracksWhereInput
  }


  /**
   * TracksCountOutputType without action
   */
  export type TracksCountOutputTypeCountAlbumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TracksOnAlbumsWhereInput
  }


  /**
   * TracksCountOutputType without action
   */
  export type TracksCountOutputTypeCountPlaylistConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistToTrackWhereInput
  }


  /**
   * TracksCountOutputType without action
   */
  export type TracksCountOutputTypeCountFavsOfUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFavsTracksWhereInput
  }



  /**
   * Count Type AlbumsCountOutputType
   */

  export type AlbumsCountOutputType = {
    tracks: number
    likedByUsers: number
  }

  export type AlbumsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tracks?: boolean | AlbumsCountOutputTypeCountTracksArgs
    likedByUsers?: boolean | AlbumsCountOutputTypeCountLikedByUsersArgs
  }

  // Custom InputTypes

  /**
   * AlbumsCountOutputType without action
   */
  export type AlbumsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AlbumsCountOutputType
     */
    select?: AlbumsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * AlbumsCountOutputType without action
   */
  export type AlbumsCountOutputTypeCountTracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TracksOnAlbumsWhereInput
  }


  /**
   * AlbumsCountOutputType without action
   */
  export type AlbumsCountOutputTypeCountLikedByUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLikedAlbumsWhereInput
  }



  /**
   * Count Type PlaylistsCountOutputType
   */

  export type PlaylistsCountOutputType = {
    followers: number
    tracksConnections: number
  }

  export type PlaylistsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    followers?: boolean | PlaylistsCountOutputTypeCountFollowersArgs
    tracksConnections?: boolean | PlaylistsCountOutputTypeCountTracksConnectionsArgs
  }

  // Custom InputTypes

  /**
   * PlaylistsCountOutputType without action
   */
  export type PlaylistsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistsCountOutputType
     */
    select?: PlaylistsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * PlaylistsCountOutputType without action
   */
  export type PlaylistsCountOutputTypeCountFollowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFollowsPlaylistsWhereInput
  }


  /**
   * PlaylistsCountOutputType without action
   */
  export type PlaylistsCountOutputTypeCountTracksConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistToTrackWhereInput
  }



  /**
   * Count Type ArtistsCountOutputType
   */

  export type ArtistsCountOutputType = {
    albums: number
    tracks: number
    followers: number
  }

  export type ArtistsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    albums?: boolean | ArtistsCountOutputTypeCountAlbumsArgs
    tracks?: boolean | ArtistsCountOutputTypeCountTracksArgs
    followers?: boolean | ArtistsCountOutputTypeCountFollowersArgs
  }

  // Custom InputTypes

  /**
   * ArtistsCountOutputType without action
   */
  export type ArtistsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsCountOutputType
     */
    select?: ArtistsCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * ArtistsCountOutputType without action
   */
  export type ArtistsCountOutputTypeCountAlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumsWhereInput
  }


  /**
   * ArtistsCountOutputType without action
   */
  export type ArtistsCountOutputTypeCountTracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistsOnTracksWhereInput
  }


  /**
   * ArtistsCountOutputType without action
   */
  export type ArtistsCountOutputTypeCountFollowersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFollowsArtistsWhereInput
  }



  /**
   * Count Type GenreCountOutputType
   */

  export type GenreCountOutputType = {
    albums: number
    tracks: number
    artists: number
  }

  export type GenreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    albums?: boolean | GenreCountOutputTypeCountAlbumsArgs
    tracks?: boolean | GenreCountOutputTypeCountTracksArgs
    artists?: boolean | GenreCountOutputTypeCountArtistsArgs
  }

  // Custom InputTypes

  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the GenreCountOutputType
     */
    select?: GenreCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeCountAlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumsWhereInput
  }


  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeCountTracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TracksWhereInput
  }


  /**
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeCountArtistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistsWhereInput
  }



  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    image: string | null
    role: string | null
    name: string | null
    gender: string | null
    birthDate: string | null
    country: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    image: string | null
    role: string | null
    name: string | null
    gender: string | null
    birthDate: string | null
    country: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
    image: number
    role: number
    name: number
    gender: number
    birthDate: number
    country: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    password?: true
    image?: true
    role?: true
    name?: true
    gender?: true
    birthDate?: true
    country?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    image?: true
    role?: true
    name?: true
    gender?: true
    birthDate?: true
    country?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
    image?: true
    role?: true
    name?: true
    gender?: true
    birthDate?: true
    country?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    password: string
    image: string
    role: string
    name: string | null
    gender: string | null
    birthDate: string | null
    country: string | null
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    role?: boolean
    name?: boolean
    gender?: boolean
    birthDate?: boolean
    country?: boolean
    likedAlbums?: boolean | User$likedAlbumsArgs<ExtArgs>
    artistsFollowed?: boolean | User$artistsFollowedArgs<ExtArgs>
    followedPlaylists?: boolean | User$followedPlaylistsArgs<ExtArgs>
    createdPlaylists?: boolean | User$createdPlaylistsArgs<ExtArgs>
    favTracks?: boolean | User$favTracksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    image?: boolean
    role?: boolean
    name?: boolean
    gender?: boolean
    birthDate?: boolean
    country?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    likedAlbums?: boolean | User$likedAlbumsArgs<ExtArgs>
    artistsFollowed?: boolean | User$artistsFollowedArgs<ExtArgs>
    followedPlaylists?: boolean | User$followedPlaylistsArgs<ExtArgs>
    createdPlaylists?: boolean | User$createdPlaylistsArgs<ExtArgs>
    favTracks?: boolean | User$favTracksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      likedAlbums: Prisma.$UserLikedAlbumsPayload<ExtArgs>[]
      artistsFollowed: Prisma.$UserFollowsArtistsPayload<ExtArgs>[]
      followedPlaylists: Prisma.$UserFollowsPlaylistsPayload<ExtArgs>[]
      createdPlaylists: Prisma.$PlaylistsPayload<ExtArgs>[]
      favTracks: Prisma.$UserFavsTracksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      image: string
      role: string
      name: string | null
      gender: string | null
      birthDate: string | null
      country: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * @param {UserFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const user = await prisma.user.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a User.
     * @param {UserAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const user = await prisma.user.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    likedAlbums<T extends User$likedAlbumsArgs<ExtArgs> = {}>(args?: Subset<T, User$likedAlbumsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLikedAlbumsPayload<ExtArgs>, T, 'findMany'> | Null>;

    artistsFollowed<T extends User$artistsFollowedArgs<ExtArgs> = {}>(args?: Subset<T, User$artistsFollowedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFollowsArtistsPayload<ExtArgs>, T, 'findMany'> | Null>;

    followedPlaylists<T extends User$followedPlaylistsArgs<ExtArgs> = {}>(args?: Subset<T, User$followedPlaylistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFollowsPlaylistsPayload<ExtArgs>, T, 'findMany'> | Null>;

    createdPlaylists<T extends User$createdPlaylistsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdPlaylistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistsPayload<ExtArgs>, T, 'findMany'> | Null>;

    favTracks<T extends User$favTracksArgs<ExtArgs> = {}>(args?: Subset<T, User$favTracksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavsTracksPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly image: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'String'>
    readonly birthDate: FieldRef<"User", 'String'>
    readonly country: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User findRaw
   */
  export type UserFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User aggregateRaw
   */
  export type UserAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * User.likedAlbums
   */
  export type User$likedAlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLikedAlbums
     */
    select?: UserLikedAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserLikedAlbumsInclude<ExtArgs> | null
    where?: UserLikedAlbumsWhereInput
    orderBy?: UserLikedAlbumsOrderByWithRelationInput | UserLikedAlbumsOrderByWithRelationInput[]
    cursor?: UserLikedAlbumsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserLikedAlbumsScalarFieldEnum | UserLikedAlbumsScalarFieldEnum[]
  }


  /**
   * User.artistsFollowed
   */
  export type User$artistsFollowedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollowsArtists
     */
    select?: UserFollowsArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserFollowsArtistsInclude<ExtArgs> | null
    where?: UserFollowsArtistsWhereInput
    orderBy?: UserFollowsArtistsOrderByWithRelationInput | UserFollowsArtistsOrderByWithRelationInput[]
    cursor?: UserFollowsArtistsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFollowsArtistsScalarFieldEnum | UserFollowsArtistsScalarFieldEnum[]
  }


  /**
   * User.followedPlaylists
   */
  export type User$followedPlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollowsPlaylists
     */
    select?: UserFollowsPlaylistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserFollowsPlaylistsInclude<ExtArgs> | null
    where?: UserFollowsPlaylistsWhereInput
    orderBy?: UserFollowsPlaylistsOrderByWithRelationInput | UserFollowsPlaylistsOrderByWithRelationInput[]
    cursor?: UserFollowsPlaylistsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFollowsPlaylistsScalarFieldEnum | UserFollowsPlaylistsScalarFieldEnum[]
  }


  /**
   * User.createdPlaylists
   */
  export type User$createdPlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlists
     */
    select?: PlaylistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistsInclude<ExtArgs> | null
    where?: PlaylistsWhereInput
    orderBy?: PlaylistsOrderByWithRelationInput | PlaylistsOrderByWithRelationInput[]
    cursor?: PlaylistsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistsScalarFieldEnum | PlaylistsScalarFieldEnum[]
  }


  /**
   * User.favTracks
   */
  export type User$favTracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavsTracks
     */
    select?: UserFavsTracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserFavsTracksInclude<ExtArgs> | null
    where?: UserFavsTracksWhereInput
    orderBy?: UserFavsTracksOrderByWithRelationInput | UserFavsTracksOrderByWithRelationInput[]
    cursor?: UserFavsTracksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFavsTracksScalarFieldEnum | UserFavsTracksScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model Tracks
   */

  export type AggregateTracks = {
    _count: TracksCountAggregateOutputType | null
    _min: TracksMinAggregateOutputType | null
    _max: TracksMaxAggregateOutputType | null
  }

  export type TracksMinAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    thumbnail: string | null
    genreName: string | null
  }

  export type TracksMaxAggregateOutputType = {
    id: string | null
    name: string | null
    url: string | null
    thumbnail: string | null
    genreName: string | null
  }

  export type TracksCountAggregateOutputType = {
    id: number
    name: number
    url: number
    thumbnail: number
    genreName: number
    _all: number
  }


  export type TracksMinAggregateInputType = {
    id?: true
    name?: true
    url?: true
    thumbnail?: true
    genreName?: true
  }

  export type TracksMaxAggregateInputType = {
    id?: true
    name?: true
    url?: true
    thumbnail?: true
    genreName?: true
  }

  export type TracksCountAggregateInputType = {
    id?: true
    name?: true
    url?: true
    thumbnail?: true
    genreName?: true
    _all?: true
  }

  export type TracksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tracks to aggregate.
     */
    where?: TracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TracksOrderByWithRelationInput | TracksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tracks
    **/
    _count?: true | TracksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TracksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TracksMaxAggregateInputType
  }

  export type GetTracksAggregateType<T extends TracksAggregateArgs> = {
        [P in keyof T & keyof AggregateTracks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTracks[P]>
      : GetScalarType<T[P], AggregateTracks[P]>
  }




  export type TracksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TracksWhereInput
    orderBy?: TracksOrderByWithAggregationInput | TracksOrderByWithAggregationInput[]
    by: TracksScalarFieldEnum[] | TracksScalarFieldEnum
    having?: TracksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TracksCountAggregateInputType | true
    _min?: TracksMinAggregateInputType
    _max?: TracksMaxAggregateInputType
  }

  export type TracksGroupByOutputType = {
    id: string
    name: string
    url: string
    thumbnail: string
    genreName: string
    _count: TracksCountAggregateOutputType | null
    _min: TracksMinAggregateOutputType | null
    _max: TracksMaxAggregateOutputType | null
  }

  type GetTracksGroupByPayload<T extends TracksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TracksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TracksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TracksGroupByOutputType[P]>
            : GetScalarType<T[P], TracksGroupByOutputType[P]>
        }
      >
    >


  export type TracksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    url?: boolean
    thumbnail?: boolean
    genreName?: boolean
    artist?: boolean | Tracks$artistArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
    album?: boolean | Tracks$albumArgs<ExtArgs>
    playlistConnections?: boolean | Tracks$playlistConnectionsArgs<ExtArgs>
    favsOfUsers?: boolean | Tracks$favsOfUsersArgs<ExtArgs>
    _count?: boolean | TracksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tracks"]>

  export type TracksSelectScalar = {
    id?: boolean
    name?: boolean
    url?: boolean
    thumbnail?: boolean
    genreName?: boolean
  }

  export type TracksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | Tracks$artistArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
    album?: boolean | Tracks$albumArgs<ExtArgs>
    playlistConnections?: boolean | Tracks$playlistConnectionsArgs<ExtArgs>
    favsOfUsers?: boolean | Tracks$favsOfUsersArgs<ExtArgs>
    _count?: boolean | TracksCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TracksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tracks"
    objects: {
      artist: Prisma.$ArtistsOnTracksPayload<ExtArgs>[]
      genre: Prisma.$GenrePayload<ExtArgs>
      album: Prisma.$TracksOnAlbumsPayload<ExtArgs>[]
      playlistConnections: Prisma.$PlaylistToTrackPayload<ExtArgs>[]
      favsOfUsers: Prisma.$UserFavsTracksPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      url: string
      thumbnail: string
      genreName: string
    }, ExtArgs["result"]["tracks"]>
    composites: {}
  }


  type TracksGetPayload<S extends boolean | null | undefined | TracksDefaultArgs> = $Result.GetResult<Prisma.$TracksPayload, S>

  type TracksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TracksFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TracksCountAggregateInputType | true
    }

  export interface TracksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Tracks'], meta: { name: 'Tracks' } }
    /**
     * Find zero or one Tracks that matches the filter.
     * @param {TracksFindUniqueArgs} args - Arguments to find a Tracks
     * @example
     * // Get one Tracks
     * const tracks = await prisma.tracks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TracksFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TracksFindUniqueArgs<ExtArgs>>
    ): Prisma__TracksClient<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Tracks that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TracksFindUniqueOrThrowArgs} args - Arguments to find a Tracks
     * @example
     * // Get one Tracks
     * const tracks = await prisma.tracks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TracksFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TracksFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TracksClient<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Tracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksFindFirstArgs} args - Arguments to find a Tracks
     * @example
     * // Get one Tracks
     * const tracks = await prisma.tracks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TracksFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TracksFindFirstArgs<ExtArgs>>
    ): Prisma__TracksClient<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Tracks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksFindFirstOrThrowArgs} args - Arguments to find a Tracks
     * @example
     * // Get one Tracks
     * const tracks = await prisma.tracks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TracksFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TracksFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TracksClient<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Tracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tracks
     * const tracks = await prisma.tracks.findMany()
     * 
     * // Get first 10 Tracks
     * const tracks = await prisma.tracks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tracksWithIdOnly = await prisma.tracks.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TracksFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TracksFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Tracks.
     * @param {TracksCreateArgs} args - Arguments to create a Tracks.
     * @example
     * // Create one Tracks
     * const Tracks = await prisma.tracks.create({
     *   data: {
     *     // ... data to create a Tracks
     *   }
     * })
     * 
    **/
    create<T extends TracksCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TracksCreateArgs<ExtArgs>>
    ): Prisma__TracksClient<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Tracks.
     *     @param {TracksCreateManyArgs} args - Arguments to create many Tracks.
     *     @example
     *     // Create many Tracks
     *     const tracks = await prisma.tracks.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TracksCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TracksCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tracks.
     * @param {TracksDeleteArgs} args - Arguments to delete one Tracks.
     * @example
     * // Delete one Tracks
     * const Tracks = await prisma.tracks.delete({
     *   where: {
     *     // ... filter to delete one Tracks
     *   }
     * })
     * 
    **/
    delete<T extends TracksDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TracksDeleteArgs<ExtArgs>>
    ): Prisma__TracksClient<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Tracks.
     * @param {TracksUpdateArgs} args - Arguments to update one Tracks.
     * @example
     * // Update one Tracks
     * const tracks = await prisma.tracks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TracksUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TracksUpdateArgs<ExtArgs>>
    ): Prisma__TracksClient<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Tracks.
     * @param {TracksDeleteManyArgs} args - Arguments to filter Tracks to delete.
     * @example
     * // Delete a few Tracks
     * const { count } = await prisma.tracks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TracksDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TracksDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tracks
     * const tracks = await prisma.tracks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TracksUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TracksUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tracks.
     * @param {TracksUpsertArgs} args - Arguments to update or create a Tracks.
     * @example
     * // Update or create a Tracks
     * const tracks = await prisma.tracks.upsert({
     *   create: {
     *     // ... data to create a Tracks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tracks we want to update
     *   }
     * })
    **/
    upsert<T extends TracksUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TracksUpsertArgs<ExtArgs>>
    ): Prisma__TracksClient<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Tracks that matches the filter.
     * @param {TracksFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const tracks = await prisma.tracks.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: TracksFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Tracks.
     * @param {TracksAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const tracks = await prisma.tracks.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: TracksAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksCountArgs} args - Arguments to filter Tracks to count.
     * @example
     * // Count the number of Tracks
     * const count = await prisma.tracks.count({
     *   where: {
     *     // ... the filter for the Tracks we want to count
     *   }
     * })
    **/
    count<T extends TracksCountArgs>(
      args?: Subset<T, TracksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TracksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TracksAggregateArgs>(args: Subset<T, TracksAggregateArgs>): Prisma.PrismaPromise<GetTracksAggregateType<T>>

    /**
     * Group by Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TracksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TracksGroupByArgs['orderBy'] }
        : { orderBy?: TracksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TracksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTracksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Tracks model
   */
  readonly fields: TracksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Tracks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TracksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    artist<T extends Tracks$artistArgs<ExtArgs> = {}>(args?: Subset<T, Tracks$artistArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistsOnTracksPayload<ExtArgs>, T, 'findMany'> | Null>;

    genre<T extends GenreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GenreDefaultArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    album<T extends Tracks$albumArgs<ExtArgs> = {}>(args?: Subset<T, Tracks$albumArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TracksOnAlbumsPayload<ExtArgs>, T, 'findMany'> | Null>;

    playlistConnections<T extends Tracks$playlistConnectionsArgs<ExtArgs> = {}>(args?: Subset<T, Tracks$playlistConnectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistToTrackPayload<ExtArgs>, T, 'findMany'> | Null>;

    favsOfUsers<T extends Tracks$favsOfUsersArgs<ExtArgs> = {}>(args?: Subset<T, Tracks$favsOfUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavsTracksPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Tracks model
   */ 
  interface TracksFieldRefs {
    readonly id: FieldRef<"Tracks", 'String'>
    readonly name: FieldRef<"Tracks", 'String'>
    readonly url: FieldRef<"Tracks", 'String'>
    readonly thumbnail: FieldRef<"Tracks", 'String'>
    readonly genreName: FieldRef<"Tracks", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Tracks findUnique
   */
  export type TracksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksInclude<ExtArgs> | null
    /**
     * Filter, which Tracks to fetch.
     */
    where: TracksWhereUniqueInput
  }


  /**
   * Tracks findUniqueOrThrow
   */
  export type TracksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksInclude<ExtArgs> | null
    /**
     * Filter, which Tracks to fetch.
     */
    where: TracksWhereUniqueInput
  }


  /**
   * Tracks findFirst
   */
  export type TracksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksInclude<ExtArgs> | null
    /**
     * Filter, which Tracks to fetch.
     */
    where?: TracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TracksOrderByWithRelationInput | TracksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tracks.
     */
    cursor?: TracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tracks.
     */
    distinct?: TracksScalarFieldEnum | TracksScalarFieldEnum[]
  }


  /**
   * Tracks findFirstOrThrow
   */
  export type TracksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksInclude<ExtArgs> | null
    /**
     * Filter, which Tracks to fetch.
     */
    where?: TracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TracksOrderByWithRelationInput | TracksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tracks.
     */
    cursor?: TracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tracks.
     */
    distinct?: TracksScalarFieldEnum | TracksScalarFieldEnum[]
  }


  /**
   * Tracks findMany
   */
  export type TracksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksInclude<ExtArgs> | null
    /**
     * Filter, which Tracks to fetch.
     */
    where?: TracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: TracksOrderByWithRelationInput | TracksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tracks.
     */
    cursor?: TracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    distinct?: TracksScalarFieldEnum | TracksScalarFieldEnum[]
  }


  /**
   * Tracks create
   */
  export type TracksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksInclude<ExtArgs> | null
    /**
     * The data needed to create a Tracks.
     */
    data: XOR<TracksCreateInput, TracksUncheckedCreateInput>
  }


  /**
   * Tracks createMany
   */
  export type TracksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Tracks.
     */
    data: TracksCreateManyInput | TracksCreateManyInput[]
  }


  /**
   * Tracks update
   */
  export type TracksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksInclude<ExtArgs> | null
    /**
     * The data needed to update a Tracks.
     */
    data: XOR<TracksUpdateInput, TracksUncheckedUpdateInput>
    /**
     * Choose, which Tracks to update.
     */
    where: TracksWhereUniqueInput
  }


  /**
   * Tracks updateMany
   */
  export type TracksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Tracks.
     */
    data: XOR<TracksUpdateManyMutationInput, TracksUncheckedUpdateManyInput>
    /**
     * Filter which Tracks to update
     */
    where?: TracksWhereInput
  }


  /**
   * Tracks upsert
   */
  export type TracksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksInclude<ExtArgs> | null
    /**
     * The filter to search for the Tracks to update in case it exists.
     */
    where: TracksWhereUniqueInput
    /**
     * In case the Tracks found by the `where` argument doesn't exist, create a new Tracks with this data.
     */
    create: XOR<TracksCreateInput, TracksUncheckedCreateInput>
    /**
     * In case the Tracks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TracksUpdateInput, TracksUncheckedUpdateInput>
  }


  /**
   * Tracks delete
   */
  export type TracksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksInclude<ExtArgs> | null
    /**
     * Filter which Tracks to delete.
     */
    where: TracksWhereUniqueInput
  }


  /**
   * Tracks deleteMany
   */
  export type TracksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Tracks to delete
     */
    where?: TracksWhereInput
  }


  /**
   * Tracks findRaw
   */
  export type TracksFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Tracks aggregateRaw
   */
  export type TracksAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Tracks.artist
   */
  export type Tracks$artistArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsOnTracks
     */
    select?: ArtistsOnTracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistsOnTracksInclude<ExtArgs> | null
    where?: ArtistsOnTracksWhereInput
    orderBy?: ArtistsOnTracksOrderByWithRelationInput | ArtistsOnTracksOrderByWithRelationInput[]
    cursor?: ArtistsOnTracksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtistsOnTracksScalarFieldEnum | ArtistsOnTracksScalarFieldEnum[]
  }


  /**
   * Tracks.album
   */
  export type Tracks$albumArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TracksOnAlbums
     */
    select?: TracksOnAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksOnAlbumsInclude<ExtArgs> | null
    where?: TracksOnAlbumsWhereInput
    orderBy?: TracksOnAlbumsOrderByWithRelationInput | TracksOnAlbumsOrderByWithRelationInput[]
    cursor?: TracksOnAlbumsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TracksOnAlbumsScalarFieldEnum | TracksOnAlbumsScalarFieldEnum[]
  }


  /**
   * Tracks.playlistConnections
   */
  export type Tracks$playlistConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistToTrack
     */
    select?: PlaylistToTrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistToTrackInclude<ExtArgs> | null
    where?: PlaylistToTrackWhereInput
    orderBy?: PlaylistToTrackOrderByWithRelationInput | PlaylistToTrackOrderByWithRelationInput[]
    cursor?: PlaylistToTrackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistToTrackScalarFieldEnum | PlaylistToTrackScalarFieldEnum[]
  }


  /**
   * Tracks.favsOfUsers
   */
  export type Tracks$favsOfUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavsTracks
     */
    select?: UserFavsTracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserFavsTracksInclude<ExtArgs> | null
    where?: UserFavsTracksWhereInput
    orderBy?: UserFavsTracksOrderByWithRelationInput | UserFavsTracksOrderByWithRelationInput[]
    cursor?: UserFavsTracksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFavsTracksScalarFieldEnum | UserFavsTracksScalarFieldEnum[]
  }


  /**
   * Tracks without action
   */
  export type TracksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksInclude<ExtArgs> | null
  }



  /**
   * Model Albums
   */

  export type AggregateAlbums = {
    _count: AlbumsCountAggregateOutputType | null
    _min: AlbumsMinAggregateOutputType | null
    _max: AlbumsMaxAggregateOutputType | null
  }

  export type AlbumsMinAggregateOutputType = {
    id: string | null
    name: string | null
    artistName: string | null
    thumbnail: string | null
    genreName: string | null
  }

  export type AlbumsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    artistName: string | null
    thumbnail: string | null
    genreName: string | null
  }

  export type AlbumsCountAggregateOutputType = {
    id: number
    name: number
    artistName: number
    thumbnail: number
    genreName: number
    _all: number
  }


  export type AlbumsMinAggregateInputType = {
    id?: true
    name?: true
    artistName?: true
    thumbnail?: true
    genreName?: true
  }

  export type AlbumsMaxAggregateInputType = {
    id?: true
    name?: true
    artistName?: true
    thumbnail?: true
    genreName?: true
  }

  export type AlbumsCountAggregateInputType = {
    id?: true
    name?: true
    artistName?: true
    thumbnail?: true
    genreName?: true
    _all?: true
  }

  export type AlbumsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Albums to aggregate.
     */
    where?: AlbumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumsOrderByWithRelationInput | AlbumsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlbumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Albums
    **/
    _count?: true | AlbumsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlbumsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlbumsMaxAggregateInputType
  }

  export type GetAlbumsAggregateType<T extends AlbumsAggregateArgs> = {
        [P in keyof T & keyof AggregateAlbums]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlbums[P]>
      : GetScalarType<T[P], AggregateAlbums[P]>
  }




  export type AlbumsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumsWhereInput
    orderBy?: AlbumsOrderByWithAggregationInput | AlbumsOrderByWithAggregationInput[]
    by: AlbumsScalarFieldEnum[] | AlbumsScalarFieldEnum
    having?: AlbumsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlbumsCountAggregateInputType | true
    _min?: AlbumsMinAggregateInputType
    _max?: AlbumsMaxAggregateInputType
  }

  export type AlbumsGroupByOutputType = {
    id: string
    name: string
    artistName: string
    thumbnail: string
    genreName: string
    _count: AlbumsCountAggregateOutputType | null
    _min: AlbumsMinAggregateOutputType | null
    _max: AlbumsMaxAggregateOutputType | null
  }

  type GetAlbumsGroupByPayload<T extends AlbumsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AlbumsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlbumsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlbumsGroupByOutputType[P]>
            : GetScalarType<T[P], AlbumsGroupByOutputType[P]>
        }
      >
    >


  export type AlbumsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    artistName?: boolean
    thumbnail?: boolean
    genreName?: boolean
    artist?: boolean | ArtistsDefaultArgs<ExtArgs>
    tracks?: boolean | Albums$tracksArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
    likedByUsers?: boolean | Albums$likedByUsersArgs<ExtArgs>
    _count?: boolean | AlbumsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["albums"]>

  export type AlbumsSelectScalar = {
    id?: boolean
    name?: boolean
    artistName?: boolean
    thumbnail?: boolean
    genreName?: boolean
  }

  export type AlbumsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | ArtistsDefaultArgs<ExtArgs>
    tracks?: boolean | Albums$tracksArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
    likedByUsers?: boolean | Albums$likedByUsersArgs<ExtArgs>
    _count?: boolean | AlbumsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AlbumsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Albums"
    objects: {
      artist: Prisma.$ArtistsPayload<ExtArgs>
      tracks: Prisma.$TracksOnAlbumsPayload<ExtArgs>[]
      genre: Prisma.$GenrePayload<ExtArgs>
      likedByUsers: Prisma.$UserLikedAlbumsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      artistName: string
      thumbnail: string
      genreName: string
    }, ExtArgs["result"]["albums"]>
    composites: {}
  }


  type AlbumsGetPayload<S extends boolean | null | undefined | AlbumsDefaultArgs> = $Result.GetResult<Prisma.$AlbumsPayload, S>

  type AlbumsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AlbumsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AlbumsCountAggregateInputType | true
    }

  export interface AlbumsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Albums'], meta: { name: 'Albums' } }
    /**
     * Find zero or one Albums that matches the filter.
     * @param {AlbumsFindUniqueArgs} args - Arguments to find a Albums
     * @example
     * // Get one Albums
     * const albums = await prisma.albums.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AlbumsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumsFindUniqueArgs<ExtArgs>>
    ): Prisma__AlbumsClient<$Result.GetResult<Prisma.$AlbumsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Albums that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AlbumsFindUniqueOrThrowArgs} args - Arguments to find a Albums
     * @example
     * // Get one Albums
     * const albums = await prisma.albums.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AlbumsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AlbumsClient<$Result.GetResult<Prisma.$AlbumsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Albums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumsFindFirstArgs} args - Arguments to find a Albums
     * @example
     * // Get one Albums
     * const albums = await prisma.albums.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AlbumsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumsFindFirstArgs<ExtArgs>>
    ): Prisma__AlbumsClient<$Result.GetResult<Prisma.$AlbumsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Albums that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumsFindFirstOrThrowArgs} args - Arguments to find a Albums
     * @example
     * // Get one Albums
     * const albums = await prisma.albums.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AlbumsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AlbumsClient<$Result.GetResult<Prisma.$AlbumsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Albums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Albums
     * const albums = await prisma.albums.findMany()
     * 
     * // Get first 10 Albums
     * const albums = await prisma.albums.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const albumsWithIdOnly = await prisma.albums.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AlbumsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Albums.
     * @param {AlbumsCreateArgs} args - Arguments to create a Albums.
     * @example
     * // Create one Albums
     * const Albums = await prisma.albums.create({
     *   data: {
     *     // ... data to create a Albums
     *   }
     * })
     * 
    **/
    create<T extends AlbumsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumsCreateArgs<ExtArgs>>
    ): Prisma__AlbumsClient<$Result.GetResult<Prisma.$AlbumsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Albums.
     *     @param {AlbumsCreateManyArgs} args - Arguments to create many Albums.
     *     @example
     *     // Create many Albums
     *     const albums = await prisma.albums.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AlbumsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Albums.
     * @param {AlbumsDeleteArgs} args - Arguments to delete one Albums.
     * @example
     * // Delete one Albums
     * const Albums = await prisma.albums.delete({
     *   where: {
     *     // ... filter to delete one Albums
     *   }
     * })
     * 
    **/
    delete<T extends AlbumsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumsDeleteArgs<ExtArgs>>
    ): Prisma__AlbumsClient<$Result.GetResult<Prisma.$AlbumsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Albums.
     * @param {AlbumsUpdateArgs} args - Arguments to update one Albums.
     * @example
     * // Update one Albums
     * const albums = await prisma.albums.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AlbumsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumsUpdateArgs<ExtArgs>>
    ): Prisma__AlbumsClient<$Result.GetResult<Prisma.$AlbumsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Albums.
     * @param {AlbumsDeleteManyArgs} args - Arguments to filter Albums to delete.
     * @example
     * // Delete a few Albums
     * const { count } = await prisma.albums.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AlbumsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AlbumsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Albums
     * const albums = await prisma.albums.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AlbumsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Albums.
     * @param {AlbumsUpsertArgs} args - Arguments to update or create a Albums.
     * @example
     * // Update or create a Albums
     * const albums = await prisma.albums.upsert({
     *   create: {
     *     // ... data to create a Albums
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Albums we want to update
     *   }
     * })
    **/
    upsert<T extends AlbumsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AlbumsUpsertArgs<ExtArgs>>
    ): Prisma__AlbumsClient<$Result.GetResult<Prisma.$AlbumsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Albums that matches the filter.
     * @param {AlbumsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const albums = await prisma.albums.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: AlbumsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Albums.
     * @param {AlbumsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const albums = await prisma.albums.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: AlbumsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumsCountArgs} args - Arguments to filter Albums to count.
     * @example
     * // Count the number of Albums
     * const count = await prisma.albums.count({
     *   where: {
     *     // ... the filter for the Albums we want to count
     *   }
     * })
    **/
    count<T extends AlbumsCountArgs>(
      args?: Subset<T, AlbumsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlbumsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlbumsAggregateArgs>(args: Subset<T, AlbumsAggregateArgs>): Prisma.PrismaPromise<GetAlbumsAggregateType<T>>

    /**
     * Group by Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlbumsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlbumsGroupByArgs['orderBy'] }
        : { orderBy?: AlbumsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlbumsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlbumsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Albums model
   */
  readonly fields: AlbumsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Albums.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AlbumsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    artist<T extends ArtistsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtistsDefaultArgs<ExtArgs>>): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    tracks<T extends Albums$tracksArgs<ExtArgs> = {}>(args?: Subset<T, Albums$tracksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TracksOnAlbumsPayload<ExtArgs>, T, 'findMany'> | Null>;

    genre<T extends GenreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GenreDefaultArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    likedByUsers<T extends Albums$likedByUsersArgs<ExtArgs> = {}>(args?: Subset<T, Albums$likedByUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLikedAlbumsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Albums model
   */ 
  interface AlbumsFieldRefs {
    readonly id: FieldRef<"Albums", 'String'>
    readonly name: FieldRef<"Albums", 'String'>
    readonly artistName: FieldRef<"Albums", 'String'>
    readonly thumbnail: FieldRef<"Albums", 'String'>
    readonly genreName: FieldRef<"Albums", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Albums findUnique
   */
  export type AlbumsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Albums
     */
    select?: AlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumsInclude<ExtArgs> | null
    /**
     * Filter, which Albums to fetch.
     */
    where: AlbumsWhereUniqueInput
  }


  /**
   * Albums findUniqueOrThrow
   */
  export type AlbumsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Albums
     */
    select?: AlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumsInclude<ExtArgs> | null
    /**
     * Filter, which Albums to fetch.
     */
    where: AlbumsWhereUniqueInput
  }


  /**
   * Albums findFirst
   */
  export type AlbumsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Albums
     */
    select?: AlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumsInclude<ExtArgs> | null
    /**
     * Filter, which Albums to fetch.
     */
    where?: AlbumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumsOrderByWithRelationInput | AlbumsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumsScalarFieldEnum | AlbumsScalarFieldEnum[]
  }


  /**
   * Albums findFirstOrThrow
   */
  export type AlbumsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Albums
     */
    select?: AlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumsInclude<ExtArgs> | null
    /**
     * Filter, which Albums to fetch.
     */
    where?: AlbumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumsOrderByWithRelationInput | AlbumsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: AlbumsScalarFieldEnum | AlbumsScalarFieldEnum[]
  }


  /**
   * Albums findMany
   */
  export type AlbumsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Albums
     */
    select?: AlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumsInclude<ExtArgs> | null
    /**
     * Filter, which Albums to fetch.
     */
    where?: AlbumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: AlbumsOrderByWithRelationInput | AlbumsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Albums.
     */
    cursor?: AlbumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    distinct?: AlbumsScalarFieldEnum | AlbumsScalarFieldEnum[]
  }


  /**
   * Albums create
   */
  export type AlbumsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Albums
     */
    select?: AlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumsInclude<ExtArgs> | null
    /**
     * The data needed to create a Albums.
     */
    data: XOR<AlbumsCreateInput, AlbumsUncheckedCreateInput>
  }


  /**
   * Albums createMany
   */
  export type AlbumsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Albums.
     */
    data: AlbumsCreateManyInput | AlbumsCreateManyInput[]
  }


  /**
   * Albums update
   */
  export type AlbumsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Albums
     */
    select?: AlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumsInclude<ExtArgs> | null
    /**
     * The data needed to update a Albums.
     */
    data: XOR<AlbumsUpdateInput, AlbumsUncheckedUpdateInput>
    /**
     * Choose, which Albums to update.
     */
    where: AlbumsWhereUniqueInput
  }


  /**
   * Albums updateMany
   */
  export type AlbumsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Albums.
     */
    data: XOR<AlbumsUpdateManyMutationInput, AlbumsUncheckedUpdateManyInput>
    /**
     * Filter which Albums to update
     */
    where?: AlbumsWhereInput
  }


  /**
   * Albums upsert
   */
  export type AlbumsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Albums
     */
    select?: AlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumsInclude<ExtArgs> | null
    /**
     * The filter to search for the Albums to update in case it exists.
     */
    where: AlbumsWhereUniqueInput
    /**
     * In case the Albums found by the `where` argument doesn't exist, create a new Albums with this data.
     */
    create: XOR<AlbumsCreateInput, AlbumsUncheckedCreateInput>
    /**
     * In case the Albums was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlbumsUpdateInput, AlbumsUncheckedUpdateInput>
  }


  /**
   * Albums delete
   */
  export type AlbumsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Albums
     */
    select?: AlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumsInclude<ExtArgs> | null
    /**
     * Filter which Albums to delete.
     */
    where: AlbumsWhereUniqueInput
  }


  /**
   * Albums deleteMany
   */
  export type AlbumsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Albums to delete
     */
    where?: AlbumsWhereInput
  }


  /**
   * Albums findRaw
   */
  export type AlbumsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Albums aggregateRaw
   */
  export type AlbumsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Albums.tracks
   */
  export type Albums$tracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TracksOnAlbums
     */
    select?: TracksOnAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksOnAlbumsInclude<ExtArgs> | null
    where?: TracksOnAlbumsWhereInput
    orderBy?: TracksOnAlbumsOrderByWithRelationInput | TracksOnAlbumsOrderByWithRelationInput[]
    cursor?: TracksOnAlbumsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TracksOnAlbumsScalarFieldEnum | TracksOnAlbumsScalarFieldEnum[]
  }


  /**
   * Albums.likedByUsers
   */
  export type Albums$likedByUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLikedAlbums
     */
    select?: UserLikedAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserLikedAlbumsInclude<ExtArgs> | null
    where?: UserLikedAlbumsWhereInput
    orderBy?: UserLikedAlbumsOrderByWithRelationInput | UserLikedAlbumsOrderByWithRelationInput[]
    cursor?: UserLikedAlbumsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserLikedAlbumsScalarFieldEnum | UserLikedAlbumsScalarFieldEnum[]
  }


  /**
   * Albums without action
   */
  export type AlbumsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Albums
     */
    select?: AlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumsInclude<ExtArgs> | null
  }



  /**
   * Model Playlists
   */

  export type AggregatePlaylists = {
    _count: PlaylistsCountAggregateOutputType | null
    _min: PlaylistsMinAggregateOutputType | null
    _max: PlaylistsMaxAggregateOutputType | null
  }

  export type PlaylistsMinAggregateOutputType = {
    id: string | null
    name: string | null
    thumbnail: string | null
    publicAccess: boolean | null
    userId: string | null
  }

  export type PlaylistsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    thumbnail: string | null
    publicAccess: boolean | null
    userId: string | null
  }

  export type PlaylistsCountAggregateOutputType = {
    id: number
    name: number
    thumbnail: number
    publicAccess: number
    userId: number
    _all: number
  }


  export type PlaylistsMinAggregateInputType = {
    id?: true
    name?: true
    thumbnail?: true
    publicAccess?: true
    userId?: true
  }

  export type PlaylistsMaxAggregateInputType = {
    id?: true
    name?: true
    thumbnail?: true
    publicAccess?: true
    userId?: true
  }

  export type PlaylistsCountAggregateInputType = {
    id?: true
    name?: true
    thumbnail?: true
    publicAccess?: true
    userId?: true
    _all?: true
  }

  export type PlaylistsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlists to aggregate.
     */
    where?: PlaylistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistsOrderByWithRelationInput | PlaylistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaylistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Playlists
    **/
    _count?: true | PlaylistsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistsMaxAggregateInputType
  }

  export type GetPlaylistsAggregateType<T extends PlaylistsAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylists]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylists[P]>
      : GetScalarType<T[P], AggregatePlaylists[P]>
  }




  export type PlaylistsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistsWhereInput
    orderBy?: PlaylistsOrderByWithAggregationInput | PlaylistsOrderByWithAggregationInput[]
    by: PlaylistsScalarFieldEnum[] | PlaylistsScalarFieldEnum
    having?: PlaylistsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistsCountAggregateInputType | true
    _min?: PlaylistsMinAggregateInputType
    _max?: PlaylistsMaxAggregateInputType
  }

  export type PlaylistsGroupByOutputType = {
    id: string
    name: string
    thumbnail: string
    publicAccess: boolean
    userId: string
    _count: PlaylistsCountAggregateOutputType | null
    _min: PlaylistsMinAggregateOutputType | null
    _max: PlaylistsMaxAggregateOutputType | null
  }

  type GetPlaylistsGroupByPayload<T extends PlaylistsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaylistsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistsGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistsGroupByOutputType[P]>
        }
      >
    >


  export type PlaylistsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    thumbnail?: boolean
    publicAccess?: boolean
    userId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    followers?: boolean | Playlists$followersArgs<ExtArgs>
    tracksConnections?: boolean | Playlists$tracksConnectionsArgs<ExtArgs>
    _count?: boolean | PlaylistsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlists"]>

  export type PlaylistsSelectScalar = {
    id?: boolean
    name?: boolean
    thumbnail?: boolean
    publicAccess?: boolean
    userId?: boolean
  }

  export type PlaylistsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    followers?: boolean | Playlists$followersArgs<ExtArgs>
    tracksConnections?: boolean | Playlists$tracksConnectionsArgs<ExtArgs>
    _count?: boolean | PlaylistsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $PlaylistsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Playlists"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      followers: Prisma.$UserFollowsPlaylistsPayload<ExtArgs>[]
      tracksConnections: Prisma.$PlaylistToTrackPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      thumbnail: string
      publicAccess: boolean
      userId: string
    }, ExtArgs["result"]["playlists"]>
    composites: {}
  }


  type PlaylistsGetPayload<S extends boolean | null | undefined | PlaylistsDefaultArgs> = $Result.GetResult<Prisma.$PlaylistsPayload, S>

  type PlaylistsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlaylistsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlaylistsCountAggregateInputType | true
    }

  export interface PlaylistsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Playlists'], meta: { name: 'Playlists' } }
    /**
     * Find zero or one Playlists that matches the filter.
     * @param {PlaylistsFindUniqueArgs} args - Arguments to find a Playlists
     * @example
     * // Get one Playlists
     * const playlists = await prisma.playlists.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PlaylistsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistsFindUniqueArgs<ExtArgs>>
    ): Prisma__PlaylistsClient<$Result.GetResult<Prisma.$PlaylistsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Playlists that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PlaylistsFindUniqueOrThrowArgs} args - Arguments to find a Playlists
     * @example
     * // Get one Playlists
     * const playlists = await prisma.playlists.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PlaylistsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PlaylistsClient<$Result.GetResult<Prisma.$PlaylistsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Playlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistsFindFirstArgs} args - Arguments to find a Playlists
     * @example
     * // Get one Playlists
     * const playlists = await prisma.playlists.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PlaylistsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistsFindFirstArgs<ExtArgs>>
    ): Prisma__PlaylistsClient<$Result.GetResult<Prisma.$PlaylistsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Playlists that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistsFindFirstOrThrowArgs} args - Arguments to find a Playlists
     * @example
     * // Get one Playlists
     * const playlists = await prisma.playlists.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PlaylistsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PlaylistsClient<$Result.GetResult<Prisma.$PlaylistsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Playlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Playlists
     * const playlists = await prisma.playlists.findMany()
     * 
     * // Get first 10 Playlists
     * const playlists = await prisma.playlists.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playlistsWithIdOnly = await prisma.playlists.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PlaylistsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Playlists.
     * @param {PlaylistsCreateArgs} args - Arguments to create a Playlists.
     * @example
     * // Create one Playlists
     * const Playlists = await prisma.playlists.create({
     *   data: {
     *     // ... data to create a Playlists
     *   }
     * })
     * 
    **/
    create<T extends PlaylistsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistsCreateArgs<ExtArgs>>
    ): Prisma__PlaylistsClient<$Result.GetResult<Prisma.$PlaylistsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Playlists.
     *     @param {PlaylistsCreateManyArgs} args - Arguments to create many Playlists.
     *     @example
     *     // Create many Playlists
     *     const playlists = await prisma.playlists.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PlaylistsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Playlists.
     * @param {PlaylistsDeleteArgs} args - Arguments to delete one Playlists.
     * @example
     * // Delete one Playlists
     * const Playlists = await prisma.playlists.delete({
     *   where: {
     *     // ... filter to delete one Playlists
     *   }
     * })
     * 
    **/
    delete<T extends PlaylistsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistsDeleteArgs<ExtArgs>>
    ): Prisma__PlaylistsClient<$Result.GetResult<Prisma.$PlaylistsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Playlists.
     * @param {PlaylistsUpdateArgs} args - Arguments to update one Playlists.
     * @example
     * // Update one Playlists
     * const playlists = await prisma.playlists.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PlaylistsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistsUpdateArgs<ExtArgs>>
    ): Prisma__PlaylistsClient<$Result.GetResult<Prisma.$PlaylistsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Playlists.
     * @param {PlaylistsDeleteManyArgs} args - Arguments to filter Playlists to delete.
     * @example
     * // Delete a few Playlists
     * const { count } = await prisma.playlists.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PlaylistsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Playlists
     * const playlists = await prisma.playlists.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PlaylistsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Playlists.
     * @param {PlaylistsUpsertArgs} args - Arguments to update or create a Playlists.
     * @example
     * // Update or create a Playlists
     * const playlists = await prisma.playlists.upsert({
     *   create: {
     *     // ... data to create a Playlists
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Playlists we want to update
     *   }
     * })
    **/
    upsert<T extends PlaylistsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistsUpsertArgs<ExtArgs>>
    ): Prisma__PlaylistsClient<$Result.GetResult<Prisma.$PlaylistsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Playlists that matches the filter.
     * @param {PlaylistsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const playlists = await prisma.playlists.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: PlaylistsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Playlists.
     * @param {PlaylistsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const playlists = await prisma.playlists.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: PlaylistsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistsCountArgs} args - Arguments to filter Playlists to count.
     * @example
     * // Count the number of Playlists
     * const count = await prisma.playlists.count({
     *   where: {
     *     // ... the filter for the Playlists we want to count
     *   }
     * })
    **/
    count<T extends PlaylistsCountArgs>(
      args?: Subset<T, PlaylistsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlaylistsAggregateArgs>(args: Subset<T, PlaylistsAggregateArgs>): Prisma.PrismaPromise<GetPlaylistsAggregateType<T>>

    /**
     * Group by Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlaylistsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaylistsGroupByArgs['orderBy'] }
        : { orderBy?: PlaylistsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlaylistsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Playlists model
   */
  readonly fields: PlaylistsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Playlists.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaylistsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    followers<T extends Playlists$followersArgs<ExtArgs> = {}>(args?: Subset<T, Playlists$followersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFollowsPlaylistsPayload<ExtArgs>, T, 'findMany'> | Null>;

    tracksConnections<T extends Playlists$tracksConnectionsArgs<ExtArgs> = {}>(args?: Subset<T, Playlists$tracksConnectionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistToTrackPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Playlists model
   */ 
  interface PlaylistsFieldRefs {
    readonly id: FieldRef<"Playlists", 'String'>
    readonly name: FieldRef<"Playlists", 'String'>
    readonly thumbnail: FieldRef<"Playlists", 'String'>
    readonly publicAccess: FieldRef<"Playlists", 'Boolean'>
    readonly userId: FieldRef<"Playlists", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Playlists findUnique
   */
  export type PlaylistsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlists
     */
    select?: PlaylistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistsInclude<ExtArgs> | null
    /**
     * Filter, which Playlists to fetch.
     */
    where: PlaylistsWhereUniqueInput
  }


  /**
   * Playlists findUniqueOrThrow
   */
  export type PlaylistsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlists
     */
    select?: PlaylistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistsInclude<ExtArgs> | null
    /**
     * Filter, which Playlists to fetch.
     */
    where: PlaylistsWhereUniqueInput
  }


  /**
   * Playlists findFirst
   */
  export type PlaylistsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlists
     */
    select?: PlaylistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistsInclude<ExtArgs> | null
    /**
     * Filter, which Playlists to fetch.
     */
    where?: PlaylistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistsOrderByWithRelationInput | PlaylistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistsScalarFieldEnum | PlaylistsScalarFieldEnum[]
  }


  /**
   * Playlists findFirstOrThrow
   */
  export type PlaylistsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlists
     */
    select?: PlaylistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistsInclude<ExtArgs> | null
    /**
     * Filter, which Playlists to fetch.
     */
    where?: PlaylistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistsOrderByWithRelationInput | PlaylistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: PlaylistsScalarFieldEnum | PlaylistsScalarFieldEnum[]
  }


  /**
   * Playlists findMany
   */
  export type PlaylistsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlists
     */
    select?: PlaylistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistsInclude<ExtArgs> | null
    /**
     * Filter, which Playlists to fetch.
     */
    where?: PlaylistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: PlaylistsOrderByWithRelationInput | PlaylistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Playlists.
     */
    cursor?: PlaylistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    distinct?: PlaylistsScalarFieldEnum | PlaylistsScalarFieldEnum[]
  }


  /**
   * Playlists create
   */
  export type PlaylistsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlists
     */
    select?: PlaylistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistsInclude<ExtArgs> | null
    /**
     * The data needed to create a Playlists.
     */
    data: XOR<PlaylistsCreateInput, PlaylistsUncheckedCreateInput>
  }


  /**
   * Playlists createMany
   */
  export type PlaylistsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Playlists.
     */
    data: PlaylistsCreateManyInput | PlaylistsCreateManyInput[]
  }


  /**
   * Playlists update
   */
  export type PlaylistsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlists
     */
    select?: PlaylistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistsInclude<ExtArgs> | null
    /**
     * The data needed to update a Playlists.
     */
    data: XOR<PlaylistsUpdateInput, PlaylistsUncheckedUpdateInput>
    /**
     * Choose, which Playlists to update.
     */
    where: PlaylistsWhereUniqueInput
  }


  /**
   * Playlists updateMany
   */
  export type PlaylistsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Playlists.
     */
    data: XOR<PlaylistsUpdateManyMutationInput, PlaylistsUncheckedUpdateManyInput>
    /**
     * Filter which Playlists to update
     */
    where?: PlaylistsWhereInput
  }


  /**
   * Playlists upsert
   */
  export type PlaylistsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlists
     */
    select?: PlaylistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistsInclude<ExtArgs> | null
    /**
     * The filter to search for the Playlists to update in case it exists.
     */
    where: PlaylistsWhereUniqueInput
    /**
     * In case the Playlists found by the `where` argument doesn't exist, create a new Playlists with this data.
     */
    create: XOR<PlaylistsCreateInput, PlaylistsUncheckedCreateInput>
    /**
     * In case the Playlists was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaylistsUpdateInput, PlaylistsUncheckedUpdateInput>
  }


  /**
   * Playlists delete
   */
  export type PlaylistsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlists
     */
    select?: PlaylistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistsInclude<ExtArgs> | null
    /**
     * Filter which Playlists to delete.
     */
    where: PlaylistsWhereUniqueInput
  }


  /**
   * Playlists deleteMany
   */
  export type PlaylistsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Playlists to delete
     */
    where?: PlaylistsWhereInput
  }


  /**
   * Playlists findRaw
   */
  export type PlaylistsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Playlists aggregateRaw
   */
  export type PlaylistsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Playlists.followers
   */
  export type Playlists$followersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollowsPlaylists
     */
    select?: UserFollowsPlaylistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserFollowsPlaylistsInclude<ExtArgs> | null
    where?: UserFollowsPlaylistsWhereInput
    orderBy?: UserFollowsPlaylistsOrderByWithRelationInput | UserFollowsPlaylistsOrderByWithRelationInput[]
    cursor?: UserFollowsPlaylistsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFollowsPlaylistsScalarFieldEnum | UserFollowsPlaylistsScalarFieldEnum[]
  }


  /**
   * Playlists.tracksConnections
   */
  export type Playlists$tracksConnectionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistToTrack
     */
    select?: PlaylistToTrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistToTrackInclude<ExtArgs> | null
    where?: PlaylistToTrackWhereInput
    orderBy?: PlaylistToTrackOrderByWithRelationInput | PlaylistToTrackOrderByWithRelationInput[]
    cursor?: PlaylistToTrackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PlaylistToTrackScalarFieldEnum | PlaylistToTrackScalarFieldEnum[]
  }


  /**
   * Playlists without action
   */
  export type PlaylistsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Playlists
     */
    select?: PlaylistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistsInclude<ExtArgs> | null
  }



  /**
   * Model Artists
   */

  export type AggregateArtists = {
    _count: ArtistsCountAggregateOutputType | null
    _min: ArtistsMinAggregateOutputType | null
    _max: ArtistsMaxAggregateOutputType | null
  }

  export type ArtistsMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    thumbnail: string | null
    genreName: string | null
    description: string | null
  }

  export type ArtistsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    thumbnail: string | null
    genreName: string | null
    description: string | null
  }

  export type ArtistsCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    thumbnail: number
    genreName: number
    description: number
    _all: number
  }


  export type ArtistsMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    thumbnail?: true
    genreName?: true
    description?: true
  }

  export type ArtistsMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    thumbnail?: true
    genreName?: true
    description?: true
  }

  export type ArtistsCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    thumbnail?: true
    genreName?: true
    description?: true
    _all?: true
  }

  export type ArtistsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artists to aggregate.
     */
    where?: ArtistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistsOrderByWithRelationInput | ArtistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artists
    **/
    _count?: true | ArtistsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistsMaxAggregateInputType
  }

  export type GetArtistsAggregateType<T extends ArtistsAggregateArgs> = {
        [P in keyof T & keyof AggregateArtists]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtists[P]>
      : GetScalarType<T[P], AggregateArtists[P]>
  }




  export type ArtistsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistsWhereInput
    orderBy?: ArtistsOrderByWithAggregationInput | ArtistsOrderByWithAggregationInput[]
    by: ArtistsScalarFieldEnum[] | ArtistsScalarFieldEnum
    having?: ArtistsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistsCountAggregateInputType | true
    _min?: ArtistsMinAggregateInputType
    _max?: ArtistsMaxAggregateInputType
  }

  export type ArtistsGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    thumbnail: string
    genreName: string
    description: string | null
    _count: ArtistsCountAggregateOutputType | null
    _min: ArtistsMinAggregateOutputType | null
    _max: ArtistsMaxAggregateOutputType | null
  }

  type GetArtistsGroupByPayload<T extends ArtistsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistsGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistsGroupByOutputType[P]>
        }
      >
    >


  export type ArtistsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    thumbnail?: boolean
    genreName?: boolean
    description?: boolean
    albums?: boolean | Artists$albumsArgs<ExtArgs>
    tracks?: boolean | Artists$tracksArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
    followers?: boolean | Artists$followersArgs<ExtArgs>
    _count?: boolean | ArtistsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artists"]>

  export type ArtistsSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    thumbnail?: boolean
    genreName?: boolean
    description?: boolean
  }

  export type ArtistsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    albums?: boolean | Artists$albumsArgs<ExtArgs>
    tracks?: boolean | Artists$tracksArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
    followers?: boolean | Artists$followersArgs<ExtArgs>
    _count?: boolean | ArtistsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ArtistsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Artists"
    objects: {
      albums: Prisma.$AlbumsPayload<ExtArgs>[]
      tracks: Prisma.$ArtistsOnTracksPayload<ExtArgs>[]
      genre: Prisma.$GenrePayload<ExtArgs>
      followers: Prisma.$UserFollowsArtistsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      thumbnail: string
      genreName: string
      description: string | null
    }, ExtArgs["result"]["artists"]>
    composites: {}
  }


  type ArtistsGetPayload<S extends boolean | null | undefined | ArtistsDefaultArgs> = $Result.GetResult<Prisma.$ArtistsPayload, S>

  type ArtistsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ArtistsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ArtistsCountAggregateInputType | true
    }

  export interface ArtistsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Artists'], meta: { name: 'Artists' } }
    /**
     * Find zero or one Artists that matches the filter.
     * @param {ArtistsFindUniqueArgs} args - Arguments to find a Artists
     * @example
     * // Get one Artists
     * const artists = await prisma.artists.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ArtistsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistsFindUniqueArgs<ExtArgs>>
    ): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Artists that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ArtistsFindUniqueOrThrowArgs} args - Arguments to find a Artists
     * @example
     * // Get one Artists
     * const artists = await prisma.artists.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ArtistsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Artists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsFindFirstArgs} args - Arguments to find a Artists
     * @example
     * // Get one Artists
     * const artists = await prisma.artists.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ArtistsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistsFindFirstArgs<ExtArgs>>
    ): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Artists that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsFindFirstOrThrowArgs} args - Arguments to find a Artists
     * @example
     * // Get one Artists
     * const artists = await prisma.artists.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ArtistsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Artists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artists
     * const artists = await prisma.artists.findMany()
     * 
     * // Get first 10 Artists
     * const artists = await prisma.artists.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artistsWithIdOnly = await prisma.artists.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ArtistsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Artists.
     * @param {ArtistsCreateArgs} args - Arguments to create a Artists.
     * @example
     * // Create one Artists
     * const Artists = await prisma.artists.create({
     *   data: {
     *     // ... data to create a Artists
     *   }
     * })
     * 
    **/
    create<T extends ArtistsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistsCreateArgs<ExtArgs>>
    ): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Artists.
     *     @param {ArtistsCreateManyArgs} args - Arguments to create many Artists.
     *     @example
     *     // Create many Artists
     *     const artists = await prisma.artists.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ArtistsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Artists.
     * @param {ArtistsDeleteArgs} args - Arguments to delete one Artists.
     * @example
     * // Delete one Artists
     * const Artists = await prisma.artists.delete({
     *   where: {
     *     // ... filter to delete one Artists
     *   }
     * })
     * 
    **/
    delete<T extends ArtistsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistsDeleteArgs<ExtArgs>>
    ): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Artists.
     * @param {ArtistsUpdateArgs} args - Arguments to update one Artists.
     * @example
     * // Update one Artists
     * const artists = await prisma.artists.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ArtistsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistsUpdateArgs<ExtArgs>>
    ): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Artists.
     * @param {ArtistsDeleteManyArgs} args - Arguments to filter Artists to delete.
     * @example
     * // Delete a few Artists
     * const { count } = await prisma.artists.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ArtistsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artists
     * const artists = await prisma.artists.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ArtistsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Artists.
     * @param {ArtistsUpsertArgs} args - Arguments to update or create a Artists.
     * @example
     * // Update or create a Artists
     * const artists = await prisma.artists.upsert({
     *   create: {
     *     // ... data to create a Artists
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artists we want to update
     *   }
     * })
    **/
    upsert<T extends ArtistsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistsUpsertArgs<ExtArgs>>
    ): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Artists that matches the filter.
     * @param {ArtistsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const artists = await prisma.artists.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ArtistsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Artists.
     * @param {ArtistsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const artists = await prisma.artists.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ArtistsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsCountArgs} args - Arguments to filter Artists to count.
     * @example
     * // Count the number of Artists
     * const count = await prisma.artists.count({
     *   where: {
     *     // ... the filter for the Artists we want to count
     *   }
     * })
    **/
    count<T extends ArtistsCountArgs>(
      args?: Subset<T, ArtistsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArtistsAggregateArgs>(args: Subset<T, ArtistsAggregateArgs>): Prisma.PrismaPromise<GetArtistsAggregateType<T>>

    /**
     * Group by Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArtistsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistsGroupByArgs['orderBy'] }
        : { orderBy?: ArtistsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArtistsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Artists model
   */
  readonly fields: ArtistsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Artists.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    albums<T extends Artists$albumsArgs<ExtArgs> = {}>(args?: Subset<T, Artists$albumsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumsPayload<ExtArgs>, T, 'findMany'> | Null>;

    tracks<T extends Artists$tracksArgs<ExtArgs> = {}>(args?: Subset<T, Artists$tracksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistsOnTracksPayload<ExtArgs>, T, 'findMany'> | Null>;

    genre<T extends GenreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GenreDefaultArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    followers<T extends Artists$followersArgs<ExtArgs> = {}>(args?: Subset<T, Artists$followersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFollowsArtistsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Artists model
   */ 
  interface ArtistsFieldRefs {
    readonly id: FieldRef<"Artists", 'String'>
    readonly name: FieldRef<"Artists", 'String'>
    readonly email: FieldRef<"Artists", 'String'>
    readonly password: FieldRef<"Artists", 'String'>
    readonly thumbnail: FieldRef<"Artists", 'String'>
    readonly genreName: FieldRef<"Artists", 'String'>
    readonly description: FieldRef<"Artists", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Artists findUnique
   */
  export type ArtistsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where: ArtistsWhereUniqueInput
  }


  /**
   * Artists findUniqueOrThrow
   */
  export type ArtistsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where: ArtistsWhereUniqueInput
  }


  /**
   * Artists findFirst
   */
  export type ArtistsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistsOrderByWithRelationInput | ArtistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistsScalarFieldEnum | ArtistsScalarFieldEnum[]
  }


  /**
   * Artists findFirstOrThrow
   */
  export type ArtistsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistsOrderByWithRelationInput | ArtistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: ArtistsScalarFieldEnum | ArtistsScalarFieldEnum[]
  }


  /**
   * Artists findMany
   */
  export type ArtistsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: ArtistsOrderByWithRelationInput | ArtistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artists.
     */
    cursor?: ArtistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    distinct?: ArtistsScalarFieldEnum | ArtistsScalarFieldEnum[]
  }


  /**
   * Artists create
   */
  export type ArtistsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * The data needed to create a Artists.
     */
    data: XOR<ArtistsCreateInput, ArtistsUncheckedCreateInput>
  }


  /**
   * Artists createMany
   */
  export type ArtistsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Artists.
     */
    data: ArtistsCreateManyInput | ArtistsCreateManyInput[]
  }


  /**
   * Artists update
   */
  export type ArtistsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * The data needed to update a Artists.
     */
    data: XOR<ArtistsUpdateInput, ArtistsUncheckedUpdateInput>
    /**
     * Choose, which Artists to update.
     */
    where: ArtistsWhereUniqueInput
  }


  /**
   * Artists updateMany
   */
  export type ArtistsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistsUpdateManyMutationInput, ArtistsUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistsWhereInput
  }


  /**
   * Artists upsert
   */
  export type ArtistsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * The filter to search for the Artists to update in case it exists.
     */
    where: ArtistsWhereUniqueInput
    /**
     * In case the Artists found by the `where` argument doesn't exist, create a new Artists with this data.
     */
    create: XOR<ArtistsCreateInput, ArtistsUncheckedCreateInput>
    /**
     * In case the Artists was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistsUpdateInput, ArtistsUncheckedUpdateInput>
  }


  /**
   * Artists delete
   */
  export type ArtistsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistsInclude<ExtArgs> | null
    /**
     * Filter which Artists to delete.
     */
    where: ArtistsWhereUniqueInput
  }


  /**
   * Artists deleteMany
   */
  export type ArtistsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Artists to delete
     */
    where?: ArtistsWhereInput
  }


  /**
   * Artists findRaw
   */
  export type ArtistsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Artists aggregateRaw
   */
  export type ArtistsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Artists.albums
   */
  export type Artists$albumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Albums
     */
    select?: AlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumsInclude<ExtArgs> | null
    where?: AlbumsWhereInput
    orderBy?: AlbumsOrderByWithRelationInput | AlbumsOrderByWithRelationInput[]
    cursor?: AlbumsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumsScalarFieldEnum | AlbumsScalarFieldEnum[]
  }


  /**
   * Artists.tracks
   */
  export type Artists$tracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsOnTracks
     */
    select?: ArtistsOnTracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistsOnTracksInclude<ExtArgs> | null
    where?: ArtistsOnTracksWhereInput
    orderBy?: ArtistsOnTracksOrderByWithRelationInput | ArtistsOnTracksOrderByWithRelationInput[]
    cursor?: ArtistsOnTracksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtistsOnTracksScalarFieldEnum | ArtistsOnTracksScalarFieldEnum[]
  }


  /**
   * Artists.followers
   */
  export type Artists$followersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollowsArtists
     */
    select?: UserFollowsArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserFollowsArtistsInclude<ExtArgs> | null
    where?: UserFollowsArtistsWhereInput
    orderBy?: UserFollowsArtistsOrderByWithRelationInput | UserFollowsArtistsOrderByWithRelationInput[]
    cursor?: UserFollowsArtistsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserFollowsArtistsScalarFieldEnum | UserFollowsArtistsScalarFieldEnum[]
  }


  /**
   * Artists without action
   */
  export type ArtistsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistsInclude<ExtArgs> | null
  }



  /**
   * Model Genre
   */

  export type AggregateGenre = {
    _count: GenreCountAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  export type GenreMinAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type GenreMaxAggregateOutputType = {
    id: string | null
    name: string | null
  }

  export type GenreCountAggregateOutputType = {
    id: number
    name: number
    _all: number
  }


  export type GenreMinAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenreMaxAggregateInputType = {
    id?: true
    name?: true
  }

  export type GenreCountAggregateInputType = {
    id?: true
    name?: true
    _all?: true
  }

  export type GenreAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genre to aggregate.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Genres
    **/
    _count?: true | GenreCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: GenreMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: GenreMaxAggregateInputType
  }

  export type GetGenreAggregateType<T extends GenreAggregateArgs> = {
        [P in keyof T & keyof AggregateGenre]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateGenre[P]>
      : GetScalarType<T[P], AggregateGenre[P]>
  }




  export type GenreGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: GenreWhereInput
    orderBy?: GenreOrderByWithAggregationInput | GenreOrderByWithAggregationInput[]
    by: GenreScalarFieldEnum[] | GenreScalarFieldEnum
    having?: GenreScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: GenreCountAggregateInputType | true
    _min?: GenreMinAggregateInputType
    _max?: GenreMaxAggregateInputType
  }

  export type GenreGroupByOutputType = {
    id: string
    name: string
    _count: GenreCountAggregateOutputType | null
    _min: GenreMinAggregateOutputType | null
    _max: GenreMaxAggregateOutputType | null
  }

  type GetGenreGroupByPayload<T extends GenreGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<GenreGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof GenreGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], GenreGroupByOutputType[P]>
            : GetScalarType<T[P], GenreGroupByOutputType[P]>
        }
      >
    >


  export type GenreSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    albums?: boolean | Genre$albumsArgs<ExtArgs>
    tracks?: boolean | Genre$tracksArgs<ExtArgs>
    artists?: boolean | Genre$artistsArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["genre"]>

  export type GenreSelectScalar = {
    id?: boolean
    name?: boolean
  }

  export type GenreInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    albums?: boolean | Genre$albumsArgs<ExtArgs>
    tracks?: boolean | Genre$tracksArgs<ExtArgs>
    artists?: boolean | Genre$artistsArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $GenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genre"
    objects: {
      albums: Prisma.$AlbumsPayload<ExtArgs>[]
      tracks: Prisma.$TracksPayload<ExtArgs>[]
      artists: Prisma.$ArtistsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
    }, ExtArgs["result"]["genre"]>
    composites: {}
  }


  type GenreGetPayload<S extends boolean | null | undefined | GenreDefaultArgs> = $Result.GetResult<Prisma.$GenrePayload, S>

  type GenreCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<GenreFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: GenreCountAggregateInputType | true
    }

  export interface GenreDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Genre'], meta: { name: 'Genre' } }
    /**
     * Find zero or one Genre that matches the filter.
     * @param {GenreFindUniqueArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends GenreFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, GenreFindUniqueArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Genre that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {GenreFindUniqueOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends GenreFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GenreFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Genre that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends GenreFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, GenreFindFirstArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Genre that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindFirstOrThrowArgs} args - Arguments to find a Genre
     * @example
     * // Get one Genre
     * const genre = await prisma.genre.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends GenreFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, GenreFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Genres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Genres
     * const genres = await prisma.genre.findMany()
     * 
     * // Get first 10 Genres
     * const genres = await prisma.genre.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const genreWithIdOnly = await prisma.genre.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends GenreFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GenreFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Genre.
     * @param {GenreCreateArgs} args - Arguments to create a Genre.
     * @example
     * // Create one Genre
     * const Genre = await prisma.genre.create({
     *   data: {
     *     // ... data to create a Genre
     *   }
     * })
     * 
    **/
    create<T extends GenreCreateArgs<ExtArgs>>(
      args: SelectSubset<T, GenreCreateArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Genres.
     *     @param {GenreCreateManyArgs} args - Arguments to create many Genres.
     *     @example
     *     // Create many Genres
     *     const genre = await prisma.genre.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends GenreCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GenreCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Genre.
     * @param {GenreDeleteArgs} args - Arguments to delete one Genre.
     * @example
     * // Delete one Genre
     * const Genre = await prisma.genre.delete({
     *   where: {
     *     // ... filter to delete one Genre
     *   }
     * })
     * 
    **/
    delete<T extends GenreDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, GenreDeleteArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Genre.
     * @param {GenreUpdateArgs} args - Arguments to update one Genre.
     * @example
     * // Update one Genre
     * const genre = await prisma.genre.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends GenreUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, GenreUpdateArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Genres.
     * @param {GenreDeleteManyArgs} args - Arguments to filter Genres to delete.
     * @example
     * // Delete a few Genres
     * const { count } = await prisma.genre.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends GenreDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, GenreDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Genres
     * const genre = await prisma.genre.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends GenreUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, GenreUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Genre.
     * @param {GenreUpsertArgs} args - Arguments to update or create a Genre.
     * @example
     * // Update or create a Genre
     * const genre = await prisma.genre.upsert({
     *   create: {
     *     // ... data to create a Genre
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Genre we want to update
     *   }
     * })
    **/
    upsert<T extends GenreUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, GenreUpsertArgs<ExtArgs>>
    ): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more Genres that matches the filter.
     * @param {GenreFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const genre = await prisma.genre.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: GenreFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a Genre.
     * @param {GenreAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const genre = await prisma.genre.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: GenreAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of Genres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreCountArgs} args - Arguments to filter Genres to count.
     * @example
     * // Count the number of Genres
     * const count = await prisma.genre.count({
     *   where: {
     *     // ... the filter for the Genres we want to count
     *   }
     * })
    **/
    count<T extends GenreCountArgs>(
      args?: Subset<T, GenreCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], GenreCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends GenreAggregateArgs>(args: Subset<T, GenreAggregateArgs>): Prisma.PrismaPromise<GetGenreAggregateType<T>>

    /**
     * Group by Genre.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {GenreGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends GenreGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: GenreGroupByArgs['orderBy'] }
        : { orderBy?: GenreGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, GenreGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetGenreGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Genre model
   */
  readonly fields: GenreFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Genre.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__GenreClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    albums<T extends Genre$albumsArgs<ExtArgs> = {}>(args?: Subset<T, Genre$albumsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumsPayload<ExtArgs>, T, 'findMany'> | Null>;

    tracks<T extends Genre$tracksArgs<ExtArgs> = {}>(args?: Subset<T, Genre$tracksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'findMany'> | Null>;

    artists<T extends Genre$artistsArgs<ExtArgs> = {}>(args?: Subset<T, Genre$artistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Genre model
   */ 
  interface GenreFieldRefs {
    readonly id: FieldRef<"Genre", 'String'>
    readonly name: FieldRef<"Genre", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Genre findUnique
   */
  export type GenreFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }


  /**
   * Genre findUniqueOrThrow
   */
  export type GenreFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where: GenreWhereUniqueInput
  }


  /**
   * Genre findFirst
   */
  export type GenreFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }


  /**
   * Genre findFirstOrThrow
   */
  export type GenreFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genre to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Genres.
     */
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }


  /**
   * Genre findMany
   */
  export type GenreFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter, which Genres to fetch.
     */
    where?: GenreWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Genres to fetch.
     */
    orderBy?: GenreOrderByWithRelationInput | GenreOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Genres.
     */
    cursor?: GenreWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Genres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Genres.
     */
    skip?: number
    distinct?: GenreScalarFieldEnum | GenreScalarFieldEnum[]
  }


  /**
   * Genre create
   */
  export type GenreCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to create a Genre.
     */
    data: XOR<GenreCreateInput, GenreUncheckedCreateInput>
  }


  /**
   * Genre createMany
   */
  export type GenreCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Genres.
     */
    data: GenreCreateManyInput | GenreCreateManyInput[]
  }


  /**
   * Genre update
   */
  export type GenreUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The data needed to update a Genre.
     */
    data: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
    /**
     * Choose, which Genre to update.
     */
    where: GenreWhereUniqueInput
  }


  /**
   * Genre updateMany
   */
  export type GenreUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Genres.
     */
    data: XOR<GenreUpdateManyMutationInput, GenreUncheckedUpdateManyInput>
    /**
     * Filter which Genres to update
     */
    where?: GenreWhereInput
  }


  /**
   * Genre upsert
   */
  export type GenreUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * The filter to search for the Genre to update in case it exists.
     */
    where: GenreWhereUniqueInput
    /**
     * In case the Genre found by the `where` argument doesn't exist, create a new Genre with this data.
     */
    create: XOR<GenreCreateInput, GenreUncheckedCreateInput>
    /**
     * In case the Genre was found with the provided `where` argument, update it with this data.
     */
    update: XOR<GenreUpdateInput, GenreUncheckedUpdateInput>
  }


  /**
   * Genre delete
   */
  export type GenreDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
    /**
     * Filter which Genre to delete.
     */
    where: GenreWhereUniqueInput
  }


  /**
   * Genre deleteMany
   */
  export type GenreDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Genres to delete
     */
    where?: GenreWhereInput
  }


  /**
   * Genre findRaw
   */
  export type GenreFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Genre aggregateRaw
   */
  export type GenreAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * Genre.albums
   */
  export type Genre$albumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Albums
     */
    select?: AlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumsInclude<ExtArgs> | null
    where?: AlbumsWhereInput
    orderBy?: AlbumsOrderByWithRelationInput | AlbumsOrderByWithRelationInput[]
    cursor?: AlbumsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AlbumsScalarFieldEnum | AlbumsScalarFieldEnum[]
  }


  /**
   * Genre.tracks
   */
  export type Genre$tracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Tracks
     */
    select?: TracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksInclude<ExtArgs> | null
    where?: TracksWhereInput
    orderBy?: TracksOrderByWithRelationInput | TracksOrderByWithRelationInput[]
    cursor?: TracksWhereUniqueInput
    take?: number
    skip?: number
    distinct?: TracksScalarFieldEnum | TracksScalarFieldEnum[]
  }


  /**
   * Genre.artists
   */
  export type Genre$artistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Artists
     */
    select?: ArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistsInclude<ExtArgs> | null
    where?: ArtistsWhereInput
    orderBy?: ArtistsOrderByWithRelationInput | ArtistsOrderByWithRelationInput[]
    cursor?: ArtistsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ArtistsScalarFieldEnum | ArtistsScalarFieldEnum[]
  }


  /**
   * Genre without action
   */
  export type GenreDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Genre
     */
    select?: GenreSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: GenreInclude<ExtArgs> | null
  }



  /**
   * Model ArtistsOnTracks
   */

  export type AggregateArtistsOnTracks = {
    _count: ArtistsOnTracksCountAggregateOutputType | null
    _min: ArtistsOnTracksMinAggregateOutputType | null
    _max: ArtistsOnTracksMaxAggregateOutputType | null
  }

  export type ArtistsOnTracksMinAggregateOutputType = {
    id: string | null
    artistName: string | null
    trackId: string | null
  }

  export type ArtistsOnTracksMaxAggregateOutputType = {
    id: string | null
    artistName: string | null
    trackId: string | null
  }

  export type ArtistsOnTracksCountAggregateOutputType = {
    id: number
    artistName: number
    trackId: number
    _all: number
  }


  export type ArtistsOnTracksMinAggregateInputType = {
    id?: true
    artistName?: true
    trackId?: true
  }

  export type ArtistsOnTracksMaxAggregateInputType = {
    id?: true
    artistName?: true
    trackId?: true
  }

  export type ArtistsOnTracksCountAggregateInputType = {
    id?: true
    artistName?: true
    trackId?: true
    _all?: true
  }

  export type ArtistsOnTracksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArtistsOnTracks to aggregate.
     */
    where?: ArtistsOnTracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistsOnTracks to fetch.
     */
    orderBy?: ArtistsOnTracksOrderByWithRelationInput | ArtistsOnTracksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistsOnTracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistsOnTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistsOnTracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArtistsOnTracks
    **/
    _count?: true | ArtistsOnTracksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistsOnTracksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistsOnTracksMaxAggregateInputType
  }

  export type GetArtistsOnTracksAggregateType<T extends ArtistsOnTracksAggregateArgs> = {
        [P in keyof T & keyof AggregateArtistsOnTracks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtistsOnTracks[P]>
      : GetScalarType<T[P], AggregateArtistsOnTracks[P]>
  }




  export type ArtistsOnTracksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistsOnTracksWhereInput
    orderBy?: ArtistsOnTracksOrderByWithAggregationInput | ArtistsOnTracksOrderByWithAggregationInput[]
    by: ArtistsOnTracksScalarFieldEnum[] | ArtistsOnTracksScalarFieldEnum
    having?: ArtistsOnTracksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistsOnTracksCountAggregateInputType | true
    _min?: ArtistsOnTracksMinAggregateInputType
    _max?: ArtistsOnTracksMaxAggregateInputType
  }

  export type ArtistsOnTracksGroupByOutputType = {
    id: string
    artistName: string
    trackId: string
    _count: ArtistsOnTracksCountAggregateOutputType | null
    _min: ArtistsOnTracksMinAggregateOutputType | null
    _max: ArtistsOnTracksMaxAggregateOutputType | null
  }

  type GetArtistsOnTracksGroupByPayload<T extends ArtistsOnTracksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ArtistsOnTracksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistsOnTracksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistsOnTracksGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistsOnTracksGroupByOutputType[P]>
        }
      >
    >


  export type ArtistsOnTracksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    artistName?: boolean
    trackId?: boolean
    artist?: boolean | ArtistsDefaultArgs<ExtArgs>
    track?: boolean | TracksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artistsOnTracks"]>

  export type ArtistsOnTracksSelectScalar = {
    id?: boolean
    artistName?: boolean
    trackId?: boolean
  }

  export type ArtistsOnTracksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | ArtistsDefaultArgs<ExtArgs>
    track?: boolean | TracksDefaultArgs<ExtArgs>
  }


  export type $ArtistsOnTracksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ArtistsOnTracks"
    objects: {
      artist: Prisma.$ArtistsPayload<ExtArgs>
      track: Prisma.$TracksPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      artistName: string
      trackId: string
    }, ExtArgs["result"]["artistsOnTracks"]>
    composites: {}
  }


  type ArtistsOnTracksGetPayload<S extends boolean | null | undefined | ArtistsOnTracksDefaultArgs> = $Result.GetResult<Prisma.$ArtistsOnTracksPayload, S>

  type ArtistsOnTracksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ArtistsOnTracksFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ArtistsOnTracksCountAggregateInputType | true
    }

  export interface ArtistsOnTracksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ArtistsOnTracks'], meta: { name: 'ArtistsOnTracks' } }
    /**
     * Find zero or one ArtistsOnTracks that matches the filter.
     * @param {ArtistsOnTracksFindUniqueArgs} args - Arguments to find a ArtistsOnTracks
     * @example
     * // Get one ArtistsOnTracks
     * const artistsOnTracks = await prisma.artistsOnTracks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ArtistsOnTracksFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistsOnTracksFindUniqueArgs<ExtArgs>>
    ): Prisma__ArtistsOnTracksClient<$Result.GetResult<Prisma.$ArtistsOnTracksPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one ArtistsOnTracks that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ArtistsOnTracksFindUniqueOrThrowArgs} args - Arguments to find a ArtistsOnTracks
     * @example
     * // Get one ArtistsOnTracks
     * const artistsOnTracks = await prisma.artistsOnTracks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ArtistsOnTracksFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistsOnTracksFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__ArtistsOnTracksClient<$Result.GetResult<Prisma.$ArtistsOnTracksPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first ArtistsOnTracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsOnTracksFindFirstArgs} args - Arguments to find a ArtistsOnTracks
     * @example
     * // Get one ArtistsOnTracks
     * const artistsOnTracks = await prisma.artistsOnTracks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ArtistsOnTracksFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistsOnTracksFindFirstArgs<ExtArgs>>
    ): Prisma__ArtistsOnTracksClient<$Result.GetResult<Prisma.$ArtistsOnTracksPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first ArtistsOnTracks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsOnTracksFindFirstOrThrowArgs} args - Arguments to find a ArtistsOnTracks
     * @example
     * // Get one ArtistsOnTracks
     * const artistsOnTracks = await prisma.artistsOnTracks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ArtistsOnTracksFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistsOnTracksFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__ArtistsOnTracksClient<$Result.GetResult<Prisma.$ArtistsOnTracksPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more ArtistsOnTracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsOnTracksFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArtistsOnTracks
     * const artistsOnTracks = await prisma.artistsOnTracks.findMany()
     * 
     * // Get first 10 ArtistsOnTracks
     * const artistsOnTracks = await prisma.artistsOnTracks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artistsOnTracksWithIdOnly = await prisma.artistsOnTracks.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ArtistsOnTracksFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistsOnTracksFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistsOnTracksPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a ArtistsOnTracks.
     * @param {ArtistsOnTracksCreateArgs} args - Arguments to create a ArtistsOnTracks.
     * @example
     * // Create one ArtistsOnTracks
     * const ArtistsOnTracks = await prisma.artistsOnTracks.create({
     *   data: {
     *     // ... data to create a ArtistsOnTracks
     *   }
     * })
     * 
    **/
    create<T extends ArtistsOnTracksCreateArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistsOnTracksCreateArgs<ExtArgs>>
    ): Prisma__ArtistsOnTracksClient<$Result.GetResult<Prisma.$ArtistsOnTracksPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many ArtistsOnTracks.
     *     @param {ArtistsOnTracksCreateManyArgs} args - Arguments to create many ArtistsOnTracks.
     *     @example
     *     // Create many ArtistsOnTracks
     *     const artistsOnTracks = await prisma.artistsOnTracks.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ArtistsOnTracksCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistsOnTracksCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ArtistsOnTracks.
     * @param {ArtistsOnTracksDeleteArgs} args - Arguments to delete one ArtistsOnTracks.
     * @example
     * // Delete one ArtistsOnTracks
     * const ArtistsOnTracks = await prisma.artistsOnTracks.delete({
     *   where: {
     *     // ... filter to delete one ArtistsOnTracks
     *   }
     * })
     * 
    **/
    delete<T extends ArtistsOnTracksDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistsOnTracksDeleteArgs<ExtArgs>>
    ): Prisma__ArtistsOnTracksClient<$Result.GetResult<Prisma.$ArtistsOnTracksPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one ArtistsOnTracks.
     * @param {ArtistsOnTracksUpdateArgs} args - Arguments to update one ArtistsOnTracks.
     * @example
     * // Update one ArtistsOnTracks
     * const artistsOnTracks = await prisma.artistsOnTracks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ArtistsOnTracksUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistsOnTracksUpdateArgs<ExtArgs>>
    ): Prisma__ArtistsOnTracksClient<$Result.GetResult<Prisma.$ArtistsOnTracksPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more ArtistsOnTracks.
     * @param {ArtistsOnTracksDeleteManyArgs} args - Arguments to filter ArtistsOnTracks to delete.
     * @example
     * // Delete a few ArtistsOnTracks
     * const { count } = await prisma.artistsOnTracks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ArtistsOnTracksDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, ArtistsOnTracksDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArtistsOnTracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsOnTracksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArtistsOnTracks
     * const artistsOnTracks = await prisma.artistsOnTracks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ArtistsOnTracksUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistsOnTracksUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ArtistsOnTracks.
     * @param {ArtistsOnTracksUpsertArgs} args - Arguments to update or create a ArtistsOnTracks.
     * @example
     * // Update or create a ArtistsOnTracks
     * const artistsOnTracks = await prisma.artistsOnTracks.upsert({
     *   create: {
     *     // ... data to create a ArtistsOnTracks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArtistsOnTracks we want to update
     *   }
     * })
    **/
    upsert<T extends ArtistsOnTracksUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, ArtistsOnTracksUpsertArgs<ExtArgs>>
    ): Prisma__ArtistsOnTracksClient<$Result.GetResult<Prisma.$ArtistsOnTracksPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more ArtistsOnTracks that matches the filter.
     * @param {ArtistsOnTracksFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const artistsOnTracks = await prisma.artistsOnTracks.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: ArtistsOnTracksFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a ArtistsOnTracks.
     * @param {ArtistsOnTracksAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const artistsOnTracks = await prisma.artistsOnTracks.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: ArtistsOnTracksAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of ArtistsOnTracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsOnTracksCountArgs} args - Arguments to filter ArtistsOnTracks to count.
     * @example
     * // Count the number of ArtistsOnTracks
     * const count = await prisma.artistsOnTracks.count({
     *   where: {
     *     // ... the filter for the ArtistsOnTracks we want to count
     *   }
     * })
    **/
    count<T extends ArtistsOnTracksCountArgs>(
      args?: Subset<T, ArtistsOnTracksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistsOnTracksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArtistsOnTracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsOnTracksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArtistsOnTracksAggregateArgs>(args: Subset<T, ArtistsOnTracksAggregateArgs>): Prisma.PrismaPromise<GetArtistsOnTracksAggregateType<T>>

    /**
     * Group by ArtistsOnTracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistsOnTracksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArtistsOnTracksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistsOnTracksGroupByArgs['orderBy'] }
        : { orderBy?: ArtistsOnTracksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArtistsOnTracksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistsOnTracksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ArtistsOnTracks model
   */
  readonly fields: ArtistsOnTracksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ArtistsOnTracks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ArtistsOnTracksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    artist<T extends ArtistsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtistsDefaultArgs<ExtArgs>>): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    track<T extends TracksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TracksDefaultArgs<ExtArgs>>): Prisma__TracksClient<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the ArtistsOnTracks model
   */ 
  interface ArtistsOnTracksFieldRefs {
    readonly id: FieldRef<"ArtistsOnTracks", 'String'>
    readonly artistName: FieldRef<"ArtistsOnTracks", 'String'>
    readonly trackId: FieldRef<"ArtistsOnTracks", 'String'>
  }
    

  // Custom InputTypes

  /**
   * ArtistsOnTracks findUnique
   */
  export type ArtistsOnTracksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsOnTracks
     */
    select?: ArtistsOnTracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistsOnTracksInclude<ExtArgs> | null
    /**
     * Filter, which ArtistsOnTracks to fetch.
     */
    where: ArtistsOnTracksWhereUniqueInput
  }


  /**
   * ArtistsOnTracks findUniqueOrThrow
   */
  export type ArtistsOnTracksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsOnTracks
     */
    select?: ArtistsOnTracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistsOnTracksInclude<ExtArgs> | null
    /**
     * Filter, which ArtistsOnTracks to fetch.
     */
    where: ArtistsOnTracksWhereUniqueInput
  }


  /**
   * ArtistsOnTracks findFirst
   */
  export type ArtistsOnTracksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsOnTracks
     */
    select?: ArtistsOnTracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistsOnTracksInclude<ExtArgs> | null
    /**
     * Filter, which ArtistsOnTracks to fetch.
     */
    where?: ArtistsOnTracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistsOnTracks to fetch.
     */
    orderBy?: ArtistsOnTracksOrderByWithRelationInput | ArtistsOnTracksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtistsOnTracks.
     */
    cursor?: ArtistsOnTracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistsOnTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistsOnTracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtistsOnTracks.
     */
    distinct?: ArtistsOnTracksScalarFieldEnum | ArtistsOnTracksScalarFieldEnum[]
  }


  /**
   * ArtistsOnTracks findFirstOrThrow
   */
  export type ArtistsOnTracksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsOnTracks
     */
    select?: ArtistsOnTracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistsOnTracksInclude<ExtArgs> | null
    /**
     * Filter, which ArtistsOnTracks to fetch.
     */
    where?: ArtistsOnTracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistsOnTracks to fetch.
     */
    orderBy?: ArtistsOnTracksOrderByWithRelationInput | ArtistsOnTracksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtistsOnTracks.
     */
    cursor?: ArtistsOnTracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistsOnTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistsOnTracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtistsOnTracks.
     */
    distinct?: ArtistsOnTracksScalarFieldEnum | ArtistsOnTracksScalarFieldEnum[]
  }


  /**
   * ArtistsOnTracks findMany
   */
  export type ArtistsOnTracksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsOnTracks
     */
    select?: ArtistsOnTracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistsOnTracksInclude<ExtArgs> | null
    /**
     * Filter, which ArtistsOnTracks to fetch.
     */
    where?: ArtistsOnTracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistsOnTracks to fetch.
     */
    orderBy?: ArtistsOnTracksOrderByWithRelationInput | ArtistsOnTracksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArtistsOnTracks.
     */
    cursor?: ArtistsOnTracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistsOnTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistsOnTracks.
     */
    skip?: number
    distinct?: ArtistsOnTracksScalarFieldEnum | ArtistsOnTracksScalarFieldEnum[]
  }


  /**
   * ArtistsOnTracks create
   */
  export type ArtistsOnTracksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsOnTracks
     */
    select?: ArtistsOnTracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistsOnTracksInclude<ExtArgs> | null
    /**
     * The data needed to create a ArtistsOnTracks.
     */
    data: XOR<ArtistsOnTracksCreateInput, ArtistsOnTracksUncheckedCreateInput>
  }


  /**
   * ArtistsOnTracks createMany
   */
  export type ArtistsOnTracksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ArtistsOnTracks.
     */
    data: ArtistsOnTracksCreateManyInput | ArtistsOnTracksCreateManyInput[]
  }


  /**
   * ArtistsOnTracks update
   */
  export type ArtistsOnTracksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsOnTracks
     */
    select?: ArtistsOnTracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistsOnTracksInclude<ExtArgs> | null
    /**
     * The data needed to update a ArtistsOnTracks.
     */
    data: XOR<ArtistsOnTracksUpdateInput, ArtistsOnTracksUncheckedUpdateInput>
    /**
     * Choose, which ArtistsOnTracks to update.
     */
    where: ArtistsOnTracksWhereUniqueInput
  }


  /**
   * ArtistsOnTracks updateMany
   */
  export type ArtistsOnTracksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ArtistsOnTracks.
     */
    data: XOR<ArtistsOnTracksUpdateManyMutationInput, ArtistsOnTracksUncheckedUpdateManyInput>
    /**
     * Filter which ArtistsOnTracks to update
     */
    where?: ArtistsOnTracksWhereInput
  }


  /**
   * ArtistsOnTracks upsert
   */
  export type ArtistsOnTracksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsOnTracks
     */
    select?: ArtistsOnTracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistsOnTracksInclude<ExtArgs> | null
    /**
     * The filter to search for the ArtistsOnTracks to update in case it exists.
     */
    where: ArtistsOnTracksWhereUniqueInput
    /**
     * In case the ArtistsOnTracks found by the `where` argument doesn't exist, create a new ArtistsOnTracks with this data.
     */
    create: XOR<ArtistsOnTracksCreateInput, ArtistsOnTracksUncheckedCreateInput>
    /**
     * In case the ArtistsOnTracks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistsOnTracksUpdateInput, ArtistsOnTracksUncheckedUpdateInput>
  }


  /**
   * ArtistsOnTracks delete
   */
  export type ArtistsOnTracksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsOnTracks
     */
    select?: ArtistsOnTracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistsOnTracksInclude<ExtArgs> | null
    /**
     * Filter which ArtistsOnTracks to delete.
     */
    where: ArtistsOnTracksWhereUniqueInput
  }


  /**
   * ArtistsOnTracks deleteMany
   */
  export type ArtistsOnTracksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ArtistsOnTracks to delete
     */
    where?: ArtistsOnTracksWhereInput
  }


  /**
   * ArtistsOnTracks findRaw
   */
  export type ArtistsOnTracksFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * ArtistsOnTracks aggregateRaw
   */
  export type ArtistsOnTracksAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * ArtistsOnTracks without action
   */
  export type ArtistsOnTracksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ArtistsOnTracks
     */
    select?: ArtistsOnTracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistsOnTracksInclude<ExtArgs> | null
  }



  /**
   * Model TracksOnAlbums
   */

  export type AggregateTracksOnAlbums = {
    _count: TracksOnAlbumsCountAggregateOutputType | null
    _min: TracksOnAlbumsMinAggregateOutputType | null
    _max: TracksOnAlbumsMaxAggregateOutputType | null
  }

  export type TracksOnAlbumsMinAggregateOutputType = {
    id: string | null
    albumId: string | null
    trackId: string | null
  }

  export type TracksOnAlbumsMaxAggregateOutputType = {
    id: string | null
    albumId: string | null
    trackId: string | null
  }

  export type TracksOnAlbumsCountAggregateOutputType = {
    id: number
    albumId: number
    trackId: number
    _all: number
  }


  export type TracksOnAlbumsMinAggregateInputType = {
    id?: true
    albumId?: true
    trackId?: true
  }

  export type TracksOnAlbumsMaxAggregateInputType = {
    id?: true
    albumId?: true
    trackId?: true
  }

  export type TracksOnAlbumsCountAggregateInputType = {
    id?: true
    albumId?: true
    trackId?: true
    _all?: true
  }

  export type TracksOnAlbumsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TracksOnAlbums to aggregate.
     */
    where?: TracksOnAlbumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TracksOnAlbums to fetch.
     */
    orderBy?: TracksOnAlbumsOrderByWithRelationInput | TracksOnAlbumsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TracksOnAlbumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TracksOnAlbums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TracksOnAlbums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TracksOnAlbums
    **/
    _count?: true | TracksOnAlbumsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TracksOnAlbumsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TracksOnAlbumsMaxAggregateInputType
  }

  export type GetTracksOnAlbumsAggregateType<T extends TracksOnAlbumsAggregateArgs> = {
        [P in keyof T & keyof AggregateTracksOnAlbums]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTracksOnAlbums[P]>
      : GetScalarType<T[P], AggregateTracksOnAlbums[P]>
  }




  export type TracksOnAlbumsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TracksOnAlbumsWhereInput
    orderBy?: TracksOnAlbumsOrderByWithAggregationInput | TracksOnAlbumsOrderByWithAggregationInput[]
    by: TracksOnAlbumsScalarFieldEnum[] | TracksOnAlbumsScalarFieldEnum
    having?: TracksOnAlbumsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TracksOnAlbumsCountAggregateInputType | true
    _min?: TracksOnAlbumsMinAggregateInputType
    _max?: TracksOnAlbumsMaxAggregateInputType
  }

  export type TracksOnAlbumsGroupByOutputType = {
    id: string
    albumId: string
    trackId: string
    _count: TracksOnAlbumsCountAggregateOutputType | null
    _min: TracksOnAlbumsMinAggregateOutputType | null
    _max: TracksOnAlbumsMaxAggregateOutputType | null
  }

  type GetTracksOnAlbumsGroupByPayload<T extends TracksOnAlbumsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TracksOnAlbumsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TracksOnAlbumsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TracksOnAlbumsGroupByOutputType[P]>
            : GetScalarType<T[P], TracksOnAlbumsGroupByOutputType[P]>
        }
      >
    >


  export type TracksOnAlbumsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    albumId?: boolean
    trackId?: boolean
    album?: boolean | AlbumsDefaultArgs<ExtArgs>
    track?: boolean | TracksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tracksOnAlbums"]>

  export type TracksOnAlbumsSelectScalar = {
    id?: boolean
    albumId?: boolean
    trackId?: boolean
  }

  export type TracksOnAlbumsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    album?: boolean | AlbumsDefaultArgs<ExtArgs>
    track?: boolean | TracksDefaultArgs<ExtArgs>
  }


  export type $TracksOnAlbumsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TracksOnAlbums"
    objects: {
      album: Prisma.$AlbumsPayload<ExtArgs>
      track: Prisma.$TracksPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      albumId: string
      trackId: string
    }, ExtArgs["result"]["tracksOnAlbums"]>
    composites: {}
  }


  type TracksOnAlbumsGetPayload<S extends boolean | null | undefined | TracksOnAlbumsDefaultArgs> = $Result.GetResult<Prisma.$TracksOnAlbumsPayload, S>

  type TracksOnAlbumsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<TracksOnAlbumsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: TracksOnAlbumsCountAggregateInputType | true
    }

  export interface TracksOnAlbumsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TracksOnAlbums'], meta: { name: 'TracksOnAlbums' } }
    /**
     * Find zero or one TracksOnAlbums that matches the filter.
     * @param {TracksOnAlbumsFindUniqueArgs} args - Arguments to find a TracksOnAlbums
     * @example
     * // Get one TracksOnAlbums
     * const tracksOnAlbums = await prisma.tracksOnAlbums.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TracksOnAlbumsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, TracksOnAlbumsFindUniqueArgs<ExtArgs>>
    ): Prisma__TracksOnAlbumsClient<$Result.GetResult<Prisma.$TracksOnAlbumsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one TracksOnAlbums that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TracksOnAlbumsFindUniqueOrThrowArgs} args - Arguments to find a TracksOnAlbums
     * @example
     * // Get one TracksOnAlbums
     * const tracksOnAlbums = await prisma.tracksOnAlbums.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TracksOnAlbumsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TracksOnAlbumsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__TracksOnAlbumsClient<$Result.GetResult<Prisma.$TracksOnAlbumsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first TracksOnAlbums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksOnAlbumsFindFirstArgs} args - Arguments to find a TracksOnAlbums
     * @example
     * // Get one TracksOnAlbums
     * const tracksOnAlbums = await prisma.tracksOnAlbums.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TracksOnAlbumsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, TracksOnAlbumsFindFirstArgs<ExtArgs>>
    ): Prisma__TracksOnAlbumsClient<$Result.GetResult<Prisma.$TracksOnAlbumsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first TracksOnAlbums that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksOnAlbumsFindFirstOrThrowArgs} args - Arguments to find a TracksOnAlbums
     * @example
     * // Get one TracksOnAlbums
     * const tracksOnAlbums = await prisma.tracksOnAlbums.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TracksOnAlbumsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, TracksOnAlbumsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__TracksOnAlbumsClient<$Result.GetResult<Prisma.$TracksOnAlbumsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more TracksOnAlbums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksOnAlbumsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TracksOnAlbums
     * const tracksOnAlbums = await prisma.tracksOnAlbums.findMany()
     * 
     * // Get first 10 TracksOnAlbums
     * const tracksOnAlbums = await prisma.tracksOnAlbums.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tracksOnAlbumsWithIdOnly = await prisma.tracksOnAlbums.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TracksOnAlbumsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TracksOnAlbumsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TracksOnAlbumsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a TracksOnAlbums.
     * @param {TracksOnAlbumsCreateArgs} args - Arguments to create a TracksOnAlbums.
     * @example
     * // Create one TracksOnAlbums
     * const TracksOnAlbums = await prisma.tracksOnAlbums.create({
     *   data: {
     *     // ... data to create a TracksOnAlbums
     *   }
     * })
     * 
    **/
    create<T extends TracksOnAlbumsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, TracksOnAlbumsCreateArgs<ExtArgs>>
    ): Prisma__TracksOnAlbumsClient<$Result.GetResult<Prisma.$TracksOnAlbumsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many TracksOnAlbums.
     *     @param {TracksOnAlbumsCreateManyArgs} args - Arguments to create many TracksOnAlbums.
     *     @example
     *     // Create many TracksOnAlbums
     *     const tracksOnAlbums = await prisma.tracksOnAlbums.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TracksOnAlbumsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TracksOnAlbumsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TracksOnAlbums.
     * @param {TracksOnAlbumsDeleteArgs} args - Arguments to delete one TracksOnAlbums.
     * @example
     * // Delete one TracksOnAlbums
     * const TracksOnAlbums = await prisma.tracksOnAlbums.delete({
     *   where: {
     *     // ... filter to delete one TracksOnAlbums
     *   }
     * })
     * 
    **/
    delete<T extends TracksOnAlbumsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, TracksOnAlbumsDeleteArgs<ExtArgs>>
    ): Prisma__TracksOnAlbumsClient<$Result.GetResult<Prisma.$TracksOnAlbumsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one TracksOnAlbums.
     * @param {TracksOnAlbumsUpdateArgs} args - Arguments to update one TracksOnAlbums.
     * @example
     * // Update one TracksOnAlbums
     * const tracksOnAlbums = await prisma.tracksOnAlbums.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TracksOnAlbumsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, TracksOnAlbumsUpdateArgs<ExtArgs>>
    ): Prisma__TracksOnAlbumsClient<$Result.GetResult<Prisma.$TracksOnAlbumsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more TracksOnAlbums.
     * @param {TracksOnAlbumsDeleteManyArgs} args - Arguments to filter TracksOnAlbums to delete.
     * @example
     * // Delete a few TracksOnAlbums
     * const { count } = await prisma.tracksOnAlbums.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TracksOnAlbumsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, TracksOnAlbumsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TracksOnAlbums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksOnAlbumsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TracksOnAlbums
     * const tracksOnAlbums = await prisma.tracksOnAlbums.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TracksOnAlbumsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, TracksOnAlbumsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TracksOnAlbums.
     * @param {TracksOnAlbumsUpsertArgs} args - Arguments to update or create a TracksOnAlbums.
     * @example
     * // Update or create a TracksOnAlbums
     * const tracksOnAlbums = await prisma.tracksOnAlbums.upsert({
     *   create: {
     *     // ... data to create a TracksOnAlbums
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TracksOnAlbums we want to update
     *   }
     * })
    **/
    upsert<T extends TracksOnAlbumsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, TracksOnAlbumsUpsertArgs<ExtArgs>>
    ): Prisma__TracksOnAlbumsClient<$Result.GetResult<Prisma.$TracksOnAlbumsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more TracksOnAlbums that matches the filter.
     * @param {TracksOnAlbumsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const tracksOnAlbums = await prisma.tracksOnAlbums.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: TracksOnAlbumsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a TracksOnAlbums.
     * @param {TracksOnAlbumsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const tracksOnAlbums = await prisma.tracksOnAlbums.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: TracksOnAlbumsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of TracksOnAlbums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksOnAlbumsCountArgs} args - Arguments to filter TracksOnAlbums to count.
     * @example
     * // Count the number of TracksOnAlbums
     * const count = await prisma.tracksOnAlbums.count({
     *   where: {
     *     // ... the filter for the TracksOnAlbums we want to count
     *   }
     * })
    **/
    count<T extends TracksOnAlbumsCountArgs>(
      args?: Subset<T, TracksOnAlbumsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TracksOnAlbumsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TracksOnAlbums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksOnAlbumsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TracksOnAlbumsAggregateArgs>(args: Subset<T, TracksOnAlbumsAggregateArgs>): Prisma.PrismaPromise<GetTracksOnAlbumsAggregateType<T>>

    /**
     * Group by TracksOnAlbums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksOnAlbumsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TracksOnAlbumsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TracksOnAlbumsGroupByArgs['orderBy'] }
        : { orderBy?: TracksOnAlbumsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TracksOnAlbumsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTracksOnAlbumsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TracksOnAlbums model
   */
  readonly fields: TracksOnAlbumsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TracksOnAlbums.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TracksOnAlbumsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    album<T extends AlbumsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlbumsDefaultArgs<ExtArgs>>): Prisma__AlbumsClient<$Result.GetResult<Prisma.$AlbumsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    track<T extends TracksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TracksDefaultArgs<ExtArgs>>): Prisma__TracksClient<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the TracksOnAlbums model
   */ 
  interface TracksOnAlbumsFieldRefs {
    readonly id: FieldRef<"TracksOnAlbums", 'String'>
    readonly albumId: FieldRef<"TracksOnAlbums", 'String'>
    readonly trackId: FieldRef<"TracksOnAlbums", 'String'>
  }
    

  // Custom InputTypes

  /**
   * TracksOnAlbums findUnique
   */
  export type TracksOnAlbumsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TracksOnAlbums
     */
    select?: TracksOnAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksOnAlbumsInclude<ExtArgs> | null
    /**
     * Filter, which TracksOnAlbums to fetch.
     */
    where: TracksOnAlbumsWhereUniqueInput
  }


  /**
   * TracksOnAlbums findUniqueOrThrow
   */
  export type TracksOnAlbumsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TracksOnAlbums
     */
    select?: TracksOnAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksOnAlbumsInclude<ExtArgs> | null
    /**
     * Filter, which TracksOnAlbums to fetch.
     */
    where: TracksOnAlbumsWhereUniqueInput
  }


  /**
   * TracksOnAlbums findFirst
   */
  export type TracksOnAlbumsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TracksOnAlbums
     */
    select?: TracksOnAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksOnAlbumsInclude<ExtArgs> | null
    /**
     * Filter, which TracksOnAlbums to fetch.
     */
    where?: TracksOnAlbumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TracksOnAlbums to fetch.
     */
    orderBy?: TracksOnAlbumsOrderByWithRelationInput | TracksOnAlbumsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TracksOnAlbums.
     */
    cursor?: TracksOnAlbumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TracksOnAlbums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TracksOnAlbums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TracksOnAlbums.
     */
    distinct?: TracksOnAlbumsScalarFieldEnum | TracksOnAlbumsScalarFieldEnum[]
  }


  /**
   * TracksOnAlbums findFirstOrThrow
   */
  export type TracksOnAlbumsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TracksOnAlbums
     */
    select?: TracksOnAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksOnAlbumsInclude<ExtArgs> | null
    /**
     * Filter, which TracksOnAlbums to fetch.
     */
    where?: TracksOnAlbumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TracksOnAlbums to fetch.
     */
    orderBy?: TracksOnAlbumsOrderByWithRelationInput | TracksOnAlbumsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TracksOnAlbums.
     */
    cursor?: TracksOnAlbumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TracksOnAlbums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TracksOnAlbums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TracksOnAlbums.
     */
    distinct?: TracksOnAlbumsScalarFieldEnum | TracksOnAlbumsScalarFieldEnum[]
  }


  /**
   * TracksOnAlbums findMany
   */
  export type TracksOnAlbumsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TracksOnAlbums
     */
    select?: TracksOnAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksOnAlbumsInclude<ExtArgs> | null
    /**
     * Filter, which TracksOnAlbums to fetch.
     */
    where?: TracksOnAlbumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TracksOnAlbums to fetch.
     */
    orderBy?: TracksOnAlbumsOrderByWithRelationInput | TracksOnAlbumsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TracksOnAlbums.
     */
    cursor?: TracksOnAlbumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TracksOnAlbums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TracksOnAlbums.
     */
    skip?: number
    distinct?: TracksOnAlbumsScalarFieldEnum | TracksOnAlbumsScalarFieldEnum[]
  }


  /**
   * TracksOnAlbums create
   */
  export type TracksOnAlbumsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TracksOnAlbums
     */
    select?: TracksOnAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksOnAlbumsInclude<ExtArgs> | null
    /**
     * The data needed to create a TracksOnAlbums.
     */
    data: XOR<TracksOnAlbumsCreateInput, TracksOnAlbumsUncheckedCreateInput>
  }


  /**
   * TracksOnAlbums createMany
   */
  export type TracksOnAlbumsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TracksOnAlbums.
     */
    data: TracksOnAlbumsCreateManyInput | TracksOnAlbumsCreateManyInput[]
  }


  /**
   * TracksOnAlbums update
   */
  export type TracksOnAlbumsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TracksOnAlbums
     */
    select?: TracksOnAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksOnAlbumsInclude<ExtArgs> | null
    /**
     * The data needed to update a TracksOnAlbums.
     */
    data: XOR<TracksOnAlbumsUpdateInput, TracksOnAlbumsUncheckedUpdateInput>
    /**
     * Choose, which TracksOnAlbums to update.
     */
    where: TracksOnAlbumsWhereUniqueInput
  }


  /**
   * TracksOnAlbums updateMany
   */
  export type TracksOnAlbumsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TracksOnAlbums.
     */
    data: XOR<TracksOnAlbumsUpdateManyMutationInput, TracksOnAlbumsUncheckedUpdateManyInput>
    /**
     * Filter which TracksOnAlbums to update
     */
    where?: TracksOnAlbumsWhereInput
  }


  /**
   * TracksOnAlbums upsert
   */
  export type TracksOnAlbumsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TracksOnAlbums
     */
    select?: TracksOnAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksOnAlbumsInclude<ExtArgs> | null
    /**
     * The filter to search for the TracksOnAlbums to update in case it exists.
     */
    where: TracksOnAlbumsWhereUniqueInput
    /**
     * In case the TracksOnAlbums found by the `where` argument doesn't exist, create a new TracksOnAlbums with this data.
     */
    create: XOR<TracksOnAlbumsCreateInput, TracksOnAlbumsUncheckedCreateInput>
    /**
     * In case the TracksOnAlbums was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TracksOnAlbumsUpdateInput, TracksOnAlbumsUncheckedUpdateInput>
  }


  /**
   * TracksOnAlbums delete
   */
  export type TracksOnAlbumsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TracksOnAlbums
     */
    select?: TracksOnAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksOnAlbumsInclude<ExtArgs> | null
    /**
     * Filter which TracksOnAlbums to delete.
     */
    where: TracksOnAlbumsWhereUniqueInput
  }


  /**
   * TracksOnAlbums deleteMany
   */
  export type TracksOnAlbumsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TracksOnAlbums to delete
     */
    where?: TracksOnAlbumsWhereInput
  }


  /**
   * TracksOnAlbums findRaw
   */
  export type TracksOnAlbumsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * TracksOnAlbums aggregateRaw
   */
  export type TracksOnAlbumsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * TracksOnAlbums without action
   */
  export type TracksOnAlbumsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TracksOnAlbums
     */
    select?: TracksOnAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksOnAlbumsInclude<ExtArgs> | null
  }



  /**
   * Model UserFavsTracks
   */

  export type AggregateUserFavsTracks = {
    _count: UserFavsTracksCountAggregateOutputType | null
    _min: UserFavsTracksMinAggregateOutputType | null
    _max: UserFavsTracksMaxAggregateOutputType | null
  }

  export type UserFavsTracksMinAggregateOutputType = {
    id: string | null
    userId: string | null
    trackId: string | null
    createdAt: Date | null
  }

  export type UserFavsTracksMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    trackId: string | null
    createdAt: Date | null
  }

  export type UserFavsTracksCountAggregateOutputType = {
    id: number
    userId: number
    trackId: number
    createdAt: number
    _all: number
  }


  export type UserFavsTracksMinAggregateInputType = {
    id?: true
    userId?: true
    trackId?: true
    createdAt?: true
  }

  export type UserFavsTracksMaxAggregateInputType = {
    id?: true
    userId?: true
    trackId?: true
    createdAt?: true
  }

  export type UserFavsTracksCountAggregateInputType = {
    id?: true
    userId?: true
    trackId?: true
    createdAt?: true
    _all?: true
  }

  export type UserFavsTracksAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFavsTracks to aggregate.
     */
    where?: UserFavsTracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFavsTracks to fetch.
     */
    orderBy?: UserFavsTracksOrderByWithRelationInput | UserFavsTracksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserFavsTracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFavsTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFavsTracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserFavsTracks
    **/
    _count?: true | UserFavsTracksCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserFavsTracksMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserFavsTracksMaxAggregateInputType
  }

  export type GetUserFavsTracksAggregateType<T extends UserFavsTracksAggregateArgs> = {
        [P in keyof T & keyof AggregateUserFavsTracks]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserFavsTracks[P]>
      : GetScalarType<T[P], AggregateUserFavsTracks[P]>
  }




  export type UserFavsTracksGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFavsTracksWhereInput
    orderBy?: UserFavsTracksOrderByWithAggregationInput | UserFavsTracksOrderByWithAggregationInput[]
    by: UserFavsTracksScalarFieldEnum[] | UserFavsTracksScalarFieldEnum
    having?: UserFavsTracksScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserFavsTracksCountAggregateInputType | true
    _min?: UserFavsTracksMinAggregateInputType
    _max?: UserFavsTracksMaxAggregateInputType
  }

  export type UserFavsTracksGroupByOutputType = {
    id: string
    userId: string
    trackId: string
    createdAt: Date
    _count: UserFavsTracksCountAggregateOutputType | null
    _min: UserFavsTracksMinAggregateOutputType | null
    _max: UserFavsTracksMaxAggregateOutputType | null
  }

  type GetUserFavsTracksGroupByPayload<T extends UserFavsTracksGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserFavsTracksGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserFavsTracksGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserFavsTracksGroupByOutputType[P]>
            : GetScalarType<T[P], UserFavsTracksGroupByOutputType[P]>
        }
      >
    >


  export type UserFavsTracksSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    trackId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    track?: boolean | TracksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFavsTracks"]>

  export type UserFavsTracksSelectScalar = {
    id?: boolean
    userId?: boolean
    trackId?: boolean
    createdAt?: boolean
  }

  export type UserFavsTracksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    track?: boolean | TracksDefaultArgs<ExtArgs>
  }


  export type $UserFavsTracksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserFavsTracks"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      track: Prisma.$TracksPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      trackId: string
      createdAt: Date
    }, ExtArgs["result"]["userFavsTracks"]>
    composites: {}
  }


  type UserFavsTracksGetPayload<S extends boolean | null | undefined | UserFavsTracksDefaultArgs> = $Result.GetResult<Prisma.$UserFavsTracksPayload, S>

  type UserFavsTracksCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFavsTracksFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserFavsTracksCountAggregateInputType | true
    }

  export interface UserFavsTracksDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserFavsTracks'], meta: { name: 'UserFavsTracks' } }
    /**
     * Find zero or one UserFavsTracks that matches the filter.
     * @param {UserFavsTracksFindUniqueArgs} args - Arguments to find a UserFavsTracks
     * @example
     * // Get one UserFavsTracks
     * const userFavsTracks = await prisma.userFavsTracks.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFavsTracksFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFavsTracksFindUniqueArgs<ExtArgs>>
    ): Prisma__UserFavsTracksClient<$Result.GetResult<Prisma.$UserFavsTracksPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserFavsTracks that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFavsTracksFindUniqueOrThrowArgs} args - Arguments to find a UserFavsTracks
     * @example
     * // Get one UserFavsTracks
     * const userFavsTracks = await prisma.userFavsTracks.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFavsTracksFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFavsTracksFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserFavsTracksClient<$Result.GetResult<Prisma.$UserFavsTracksPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserFavsTracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavsTracksFindFirstArgs} args - Arguments to find a UserFavsTracks
     * @example
     * // Get one UserFavsTracks
     * const userFavsTracks = await prisma.userFavsTracks.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFavsTracksFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFavsTracksFindFirstArgs<ExtArgs>>
    ): Prisma__UserFavsTracksClient<$Result.GetResult<Prisma.$UserFavsTracksPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserFavsTracks that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavsTracksFindFirstOrThrowArgs} args - Arguments to find a UserFavsTracks
     * @example
     * // Get one UserFavsTracks
     * const userFavsTracks = await prisma.userFavsTracks.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFavsTracksFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFavsTracksFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserFavsTracksClient<$Result.GetResult<Prisma.$UserFavsTracksPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserFavsTracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavsTracksFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserFavsTracks
     * const userFavsTracks = await prisma.userFavsTracks.findMany()
     * 
     * // Get first 10 UserFavsTracks
     * const userFavsTracks = await prisma.userFavsTracks.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userFavsTracksWithIdOnly = await prisma.userFavsTracks.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFavsTracksFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFavsTracksFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFavsTracksPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserFavsTracks.
     * @param {UserFavsTracksCreateArgs} args - Arguments to create a UserFavsTracks.
     * @example
     * // Create one UserFavsTracks
     * const UserFavsTracks = await prisma.userFavsTracks.create({
     *   data: {
     *     // ... data to create a UserFavsTracks
     *   }
     * })
     * 
    **/
    create<T extends UserFavsTracksCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserFavsTracksCreateArgs<ExtArgs>>
    ): Prisma__UserFavsTracksClient<$Result.GetResult<Prisma.$UserFavsTracksPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserFavsTracks.
     *     @param {UserFavsTracksCreateManyArgs} args - Arguments to create many UserFavsTracks.
     *     @example
     *     // Create many UserFavsTracks
     *     const userFavsTracks = await prisma.userFavsTracks.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserFavsTracksCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFavsTracksCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserFavsTracks.
     * @param {UserFavsTracksDeleteArgs} args - Arguments to delete one UserFavsTracks.
     * @example
     * // Delete one UserFavsTracks
     * const UserFavsTracks = await prisma.userFavsTracks.delete({
     *   where: {
     *     // ... filter to delete one UserFavsTracks
     *   }
     * })
     * 
    **/
    delete<T extends UserFavsTracksDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserFavsTracksDeleteArgs<ExtArgs>>
    ): Prisma__UserFavsTracksClient<$Result.GetResult<Prisma.$UserFavsTracksPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserFavsTracks.
     * @param {UserFavsTracksUpdateArgs} args - Arguments to update one UserFavsTracks.
     * @example
     * // Update one UserFavsTracks
     * const userFavsTracks = await prisma.userFavsTracks.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserFavsTracksUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserFavsTracksUpdateArgs<ExtArgs>>
    ): Prisma__UserFavsTracksClient<$Result.GetResult<Prisma.$UserFavsTracksPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserFavsTracks.
     * @param {UserFavsTracksDeleteManyArgs} args - Arguments to filter UserFavsTracks to delete.
     * @example
     * // Delete a few UserFavsTracks
     * const { count } = await prisma.userFavsTracks.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserFavsTracksDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFavsTracksDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFavsTracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavsTracksUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserFavsTracks
     * const userFavsTracks = await prisma.userFavsTracks.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserFavsTracksUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserFavsTracksUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserFavsTracks.
     * @param {UserFavsTracksUpsertArgs} args - Arguments to update or create a UserFavsTracks.
     * @example
     * // Update or create a UserFavsTracks
     * const userFavsTracks = await prisma.userFavsTracks.upsert({
     *   create: {
     *     // ... data to create a UserFavsTracks
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserFavsTracks we want to update
     *   }
     * })
    **/
    upsert<T extends UserFavsTracksUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserFavsTracksUpsertArgs<ExtArgs>>
    ): Prisma__UserFavsTracksClient<$Result.GetResult<Prisma.$UserFavsTracksPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more UserFavsTracks that matches the filter.
     * @param {UserFavsTracksFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userFavsTracks = await prisma.userFavsTracks.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserFavsTracksFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserFavsTracks.
     * @param {UserFavsTracksAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userFavsTracks = await prisma.userFavsTracks.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserFavsTracksAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of UserFavsTracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavsTracksCountArgs} args - Arguments to filter UserFavsTracks to count.
     * @example
     * // Count the number of UserFavsTracks
     * const count = await prisma.userFavsTracks.count({
     *   where: {
     *     // ... the filter for the UserFavsTracks we want to count
     *   }
     * })
    **/
    count<T extends UserFavsTracksCountArgs>(
      args?: Subset<T, UserFavsTracksCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserFavsTracksCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserFavsTracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavsTracksAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserFavsTracksAggregateArgs>(args: Subset<T, UserFavsTracksAggregateArgs>): Prisma.PrismaPromise<GetUserFavsTracksAggregateType<T>>

    /**
     * Group by UserFavsTracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFavsTracksGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserFavsTracksGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserFavsTracksGroupByArgs['orderBy'] }
        : { orderBy?: UserFavsTracksGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserFavsTracksGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserFavsTracksGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserFavsTracks model
   */
  readonly fields: UserFavsTracksFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserFavsTracks.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserFavsTracksClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    track<T extends TracksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TracksDefaultArgs<ExtArgs>>): Prisma__TracksClient<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserFavsTracks model
   */ 
  interface UserFavsTracksFieldRefs {
    readonly id: FieldRef<"UserFavsTracks", 'String'>
    readonly userId: FieldRef<"UserFavsTracks", 'String'>
    readonly trackId: FieldRef<"UserFavsTracks", 'String'>
    readonly createdAt: FieldRef<"UserFavsTracks", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * UserFavsTracks findUnique
   */
  export type UserFavsTracksFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavsTracks
     */
    select?: UserFavsTracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserFavsTracksInclude<ExtArgs> | null
    /**
     * Filter, which UserFavsTracks to fetch.
     */
    where: UserFavsTracksWhereUniqueInput
  }


  /**
   * UserFavsTracks findUniqueOrThrow
   */
  export type UserFavsTracksFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavsTracks
     */
    select?: UserFavsTracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserFavsTracksInclude<ExtArgs> | null
    /**
     * Filter, which UserFavsTracks to fetch.
     */
    where: UserFavsTracksWhereUniqueInput
  }


  /**
   * UserFavsTracks findFirst
   */
  export type UserFavsTracksFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavsTracks
     */
    select?: UserFavsTracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserFavsTracksInclude<ExtArgs> | null
    /**
     * Filter, which UserFavsTracks to fetch.
     */
    where?: UserFavsTracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFavsTracks to fetch.
     */
    orderBy?: UserFavsTracksOrderByWithRelationInput | UserFavsTracksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFavsTracks.
     */
    cursor?: UserFavsTracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFavsTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFavsTracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFavsTracks.
     */
    distinct?: UserFavsTracksScalarFieldEnum | UserFavsTracksScalarFieldEnum[]
  }


  /**
   * UserFavsTracks findFirstOrThrow
   */
  export type UserFavsTracksFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavsTracks
     */
    select?: UserFavsTracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserFavsTracksInclude<ExtArgs> | null
    /**
     * Filter, which UserFavsTracks to fetch.
     */
    where?: UserFavsTracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFavsTracks to fetch.
     */
    orderBy?: UserFavsTracksOrderByWithRelationInput | UserFavsTracksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFavsTracks.
     */
    cursor?: UserFavsTracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFavsTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFavsTracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFavsTracks.
     */
    distinct?: UserFavsTracksScalarFieldEnum | UserFavsTracksScalarFieldEnum[]
  }


  /**
   * UserFavsTracks findMany
   */
  export type UserFavsTracksFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavsTracks
     */
    select?: UserFavsTracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserFavsTracksInclude<ExtArgs> | null
    /**
     * Filter, which UserFavsTracks to fetch.
     */
    where?: UserFavsTracksWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFavsTracks to fetch.
     */
    orderBy?: UserFavsTracksOrderByWithRelationInput | UserFavsTracksOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserFavsTracks.
     */
    cursor?: UserFavsTracksWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFavsTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFavsTracks.
     */
    skip?: number
    distinct?: UserFavsTracksScalarFieldEnum | UserFavsTracksScalarFieldEnum[]
  }


  /**
   * UserFavsTracks create
   */
  export type UserFavsTracksCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavsTracks
     */
    select?: UserFavsTracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserFavsTracksInclude<ExtArgs> | null
    /**
     * The data needed to create a UserFavsTracks.
     */
    data: XOR<UserFavsTracksCreateInput, UserFavsTracksUncheckedCreateInput>
  }


  /**
   * UserFavsTracks createMany
   */
  export type UserFavsTracksCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserFavsTracks.
     */
    data: UserFavsTracksCreateManyInput | UserFavsTracksCreateManyInput[]
  }


  /**
   * UserFavsTracks update
   */
  export type UserFavsTracksUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavsTracks
     */
    select?: UserFavsTracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserFavsTracksInclude<ExtArgs> | null
    /**
     * The data needed to update a UserFavsTracks.
     */
    data: XOR<UserFavsTracksUpdateInput, UserFavsTracksUncheckedUpdateInput>
    /**
     * Choose, which UserFavsTracks to update.
     */
    where: UserFavsTracksWhereUniqueInput
  }


  /**
   * UserFavsTracks updateMany
   */
  export type UserFavsTracksUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserFavsTracks.
     */
    data: XOR<UserFavsTracksUpdateManyMutationInput, UserFavsTracksUncheckedUpdateManyInput>
    /**
     * Filter which UserFavsTracks to update
     */
    where?: UserFavsTracksWhereInput
  }


  /**
   * UserFavsTracks upsert
   */
  export type UserFavsTracksUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavsTracks
     */
    select?: UserFavsTracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserFavsTracksInclude<ExtArgs> | null
    /**
     * The filter to search for the UserFavsTracks to update in case it exists.
     */
    where: UserFavsTracksWhereUniqueInput
    /**
     * In case the UserFavsTracks found by the `where` argument doesn't exist, create a new UserFavsTracks with this data.
     */
    create: XOR<UserFavsTracksCreateInput, UserFavsTracksUncheckedCreateInput>
    /**
     * In case the UserFavsTracks was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserFavsTracksUpdateInput, UserFavsTracksUncheckedUpdateInput>
  }


  /**
   * UserFavsTracks delete
   */
  export type UserFavsTracksDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavsTracks
     */
    select?: UserFavsTracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserFavsTracksInclude<ExtArgs> | null
    /**
     * Filter which UserFavsTracks to delete.
     */
    where: UserFavsTracksWhereUniqueInput
  }


  /**
   * UserFavsTracks deleteMany
   */
  export type UserFavsTracksDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFavsTracks to delete
     */
    where?: UserFavsTracksWhereInput
  }


  /**
   * UserFavsTracks findRaw
   */
  export type UserFavsTracksFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * UserFavsTracks aggregateRaw
   */
  export type UserFavsTracksAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * UserFavsTracks without action
   */
  export type UserFavsTracksDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFavsTracks
     */
    select?: UserFavsTracksSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserFavsTracksInclude<ExtArgs> | null
  }



  /**
   * Model PlaylistToTrack
   */

  export type AggregatePlaylistToTrack = {
    _count: PlaylistToTrackCountAggregateOutputType | null
    _min: PlaylistToTrackMinAggregateOutputType | null
    _max: PlaylistToTrackMaxAggregateOutputType | null
  }

  export type PlaylistToTrackMinAggregateOutputType = {
    id: string | null
    playlistId: string | null
    trackId: string | null
  }

  export type PlaylistToTrackMaxAggregateOutputType = {
    id: string | null
    playlistId: string | null
    trackId: string | null
  }

  export type PlaylistToTrackCountAggregateOutputType = {
    id: number
    playlistId: number
    trackId: number
    _all: number
  }


  export type PlaylistToTrackMinAggregateInputType = {
    id?: true
    playlistId?: true
    trackId?: true
  }

  export type PlaylistToTrackMaxAggregateInputType = {
    id?: true
    playlistId?: true
    trackId?: true
  }

  export type PlaylistToTrackCountAggregateInputType = {
    id?: true
    playlistId?: true
    trackId?: true
    _all?: true
  }

  export type PlaylistToTrackAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlaylistToTrack to aggregate.
     */
    where?: PlaylistToTrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistToTracks to fetch.
     */
    orderBy?: PlaylistToTrackOrderByWithRelationInput | PlaylistToTrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaylistToTrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistToTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistToTracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlaylistToTracks
    **/
    _count?: true | PlaylistToTrackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistToTrackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistToTrackMaxAggregateInputType
  }

  export type GetPlaylistToTrackAggregateType<T extends PlaylistToTrackAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylistToTrack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylistToTrack[P]>
      : GetScalarType<T[P], AggregatePlaylistToTrack[P]>
  }




  export type PlaylistToTrackGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistToTrackWhereInput
    orderBy?: PlaylistToTrackOrderByWithAggregationInput | PlaylistToTrackOrderByWithAggregationInput[]
    by: PlaylistToTrackScalarFieldEnum[] | PlaylistToTrackScalarFieldEnum
    having?: PlaylistToTrackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistToTrackCountAggregateInputType | true
    _min?: PlaylistToTrackMinAggregateInputType
    _max?: PlaylistToTrackMaxAggregateInputType
  }

  export type PlaylistToTrackGroupByOutputType = {
    id: string
    playlistId: string
    trackId: string
    _count: PlaylistToTrackCountAggregateOutputType | null
    _min: PlaylistToTrackMinAggregateOutputType | null
    _max: PlaylistToTrackMaxAggregateOutputType | null
  }

  type GetPlaylistToTrackGroupByPayload<T extends PlaylistToTrackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlaylistToTrackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistToTrackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistToTrackGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistToTrackGroupByOutputType[P]>
        }
      >
    >


  export type PlaylistToTrackSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    playlistId?: boolean
    trackId?: boolean
    playlist?: boolean | PlaylistsDefaultArgs<ExtArgs>
    track?: boolean | TracksDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlistToTrack"]>

  export type PlaylistToTrackSelectScalar = {
    id?: boolean
    playlistId?: boolean
    trackId?: boolean
  }

  export type PlaylistToTrackInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlist?: boolean | PlaylistsDefaultArgs<ExtArgs>
    track?: boolean | TracksDefaultArgs<ExtArgs>
  }


  export type $PlaylistToTrackPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PlaylistToTrack"
    objects: {
      playlist: Prisma.$PlaylistsPayload<ExtArgs>
      track: Prisma.$TracksPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      playlistId: string
      trackId: string
    }, ExtArgs["result"]["playlistToTrack"]>
    composites: {}
  }


  type PlaylistToTrackGetPayload<S extends boolean | null | undefined | PlaylistToTrackDefaultArgs> = $Result.GetResult<Prisma.$PlaylistToTrackPayload, S>

  type PlaylistToTrackCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<PlaylistToTrackFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: PlaylistToTrackCountAggregateInputType | true
    }

  export interface PlaylistToTrackDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PlaylistToTrack'], meta: { name: 'PlaylistToTrack' } }
    /**
     * Find zero or one PlaylistToTrack that matches the filter.
     * @param {PlaylistToTrackFindUniqueArgs} args - Arguments to find a PlaylistToTrack
     * @example
     * // Get one PlaylistToTrack
     * const playlistToTrack = await prisma.playlistToTrack.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PlaylistToTrackFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistToTrackFindUniqueArgs<ExtArgs>>
    ): Prisma__PlaylistToTrackClient<$Result.GetResult<Prisma.$PlaylistToTrackPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one PlaylistToTrack that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PlaylistToTrackFindUniqueOrThrowArgs} args - Arguments to find a PlaylistToTrack
     * @example
     * // Get one PlaylistToTrack
     * const playlistToTrack = await prisma.playlistToTrack.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PlaylistToTrackFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistToTrackFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__PlaylistToTrackClient<$Result.GetResult<Prisma.$PlaylistToTrackPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first PlaylistToTrack that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistToTrackFindFirstArgs} args - Arguments to find a PlaylistToTrack
     * @example
     * // Get one PlaylistToTrack
     * const playlistToTrack = await prisma.playlistToTrack.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PlaylistToTrackFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistToTrackFindFirstArgs<ExtArgs>>
    ): Prisma__PlaylistToTrackClient<$Result.GetResult<Prisma.$PlaylistToTrackPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first PlaylistToTrack that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistToTrackFindFirstOrThrowArgs} args - Arguments to find a PlaylistToTrack
     * @example
     * // Get one PlaylistToTrack
     * const playlistToTrack = await prisma.playlistToTrack.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PlaylistToTrackFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistToTrackFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__PlaylistToTrackClient<$Result.GetResult<Prisma.$PlaylistToTrackPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more PlaylistToTracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistToTrackFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlaylistToTracks
     * const playlistToTracks = await prisma.playlistToTrack.findMany()
     * 
     * // Get first 10 PlaylistToTracks
     * const playlistToTracks = await prisma.playlistToTrack.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playlistToTrackWithIdOnly = await prisma.playlistToTrack.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PlaylistToTrackFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistToTrackFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistToTrackPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a PlaylistToTrack.
     * @param {PlaylistToTrackCreateArgs} args - Arguments to create a PlaylistToTrack.
     * @example
     * // Create one PlaylistToTrack
     * const PlaylistToTrack = await prisma.playlistToTrack.create({
     *   data: {
     *     // ... data to create a PlaylistToTrack
     *   }
     * })
     * 
    **/
    create<T extends PlaylistToTrackCreateArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistToTrackCreateArgs<ExtArgs>>
    ): Prisma__PlaylistToTrackClient<$Result.GetResult<Prisma.$PlaylistToTrackPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many PlaylistToTracks.
     *     @param {PlaylistToTrackCreateManyArgs} args - Arguments to create many PlaylistToTracks.
     *     @example
     *     // Create many PlaylistToTracks
     *     const playlistToTrack = await prisma.playlistToTrack.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PlaylistToTrackCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistToTrackCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PlaylistToTrack.
     * @param {PlaylistToTrackDeleteArgs} args - Arguments to delete one PlaylistToTrack.
     * @example
     * // Delete one PlaylistToTrack
     * const PlaylistToTrack = await prisma.playlistToTrack.delete({
     *   where: {
     *     // ... filter to delete one PlaylistToTrack
     *   }
     * })
     * 
    **/
    delete<T extends PlaylistToTrackDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistToTrackDeleteArgs<ExtArgs>>
    ): Prisma__PlaylistToTrackClient<$Result.GetResult<Prisma.$PlaylistToTrackPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one PlaylistToTrack.
     * @param {PlaylistToTrackUpdateArgs} args - Arguments to update one PlaylistToTrack.
     * @example
     * // Update one PlaylistToTrack
     * const playlistToTrack = await prisma.playlistToTrack.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PlaylistToTrackUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistToTrackUpdateArgs<ExtArgs>>
    ): Prisma__PlaylistToTrackClient<$Result.GetResult<Prisma.$PlaylistToTrackPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more PlaylistToTracks.
     * @param {PlaylistToTrackDeleteManyArgs} args - Arguments to filter PlaylistToTracks to delete.
     * @example
     * // Delete a few PlaylistToTracks
     * const { count } = await prisma.playlistToTrack.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PlaylistToTrackDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, PlaylistToTrackDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlaylistToTracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistToTrackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlaylistToTracks
     * const playlistToTrack = await prisma.playlistToTrack.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PlaylistToTrackUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistToTrackUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PlaylistToTrack.
     * @param {PlaylistToTrackUpsertArgs} args - Arguments to update or create a PlaylistToTrack.
     * @example
     * // Update or create a PlaylistToTrack
     * const playlistToTrack = await prisma.playlistToTrack.upsert({
     *   create: {
     *     // ... data to create a PlaylistToTrack
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlaylistToTrack we want to update
     *   }
     * })
    **/
    upsert<T extends PlaylistToTrackUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, PlaylistToTrackUpsertArgs<ExtArgs>>
    ): Prisma__PlaylistToTrackClient<$Result.GetResult<Prisma.$PlaylistToTrackPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more PlaylistToTracks that matches the filter.
     * @param {PlaylistToTrackFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const playlistToTrack = await prisma.playlistToTrack.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: PlaylistToTrackFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a PlaylistToTrack.
     * @param {PlaylistToTrackAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const playlistToTrack = await prisma.playlistToTrack.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: PlaylistToTrackAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of PlaylistToTracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistToTrackCountArgs} args - Arguments to filter PlaylistToTracks to count.
     * @example
     * // Count the number of PlaylistToTracks
     * const count = await prisma.playlistToTrack.count({
     *   where: {
     *     // ... the filter for the PlaylistToTracks we want to count
     *   }
     * })
    **/
    count<T extends PlaylistToTrackCountArgs>(
      args?: Subset<T, PlaylistToTrackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistToTrackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlaylistToTrack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistToTrackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlaylistToTrackAggregateArgs>(args: Subset<T, PlaylistToTrackAggregateArgs>): Prisma.PrismaPromise<GetPlaylistToTrackAggregateType<T>>

    /**
     * Group by PlaylistToTrack.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistToTrackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlaylistToTrackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaylistToTrackGroupByArgs['orderBy'] }
        : { orderBy?: PlaylistToTrackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlaylistToTrackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistToTrackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PlaylistToTrack model
   */
  readonly fields: PlaylistToTrackFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PlaylistToTrack.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlaylistToTrackClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    playlist<T extends PlaylistsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlaylistsDefaultArgs<ExtArgs>>): Prisma__PlaylistsClient<$Result.GetResult<Prisma.$PlaylistsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    track<T extends TracksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TracksDefaultArgs<ExtArgs>>): Prisma__TracksClient<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the PlaylistToTrack model
   */ 
  interface PlaylistToTrackFieldRefs {
    readonly id: FieldRef<"PlaylistToTrack", 'String'>
    readonly playlistId: FieldRef<"PlaylistToTrack", 'String'>
    readonly trackId: FieldRef<"PlaylistToTrack", 'String'>
  }
    

  // Custom InputTypes

  /**
   * PlaylistToTrack findUnique
   */
  export type PlaylistToTrackFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistToTrack
     */
    select?: PlaylistToTrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistToTrackInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistToTrack to fetch.
     */
    where: PlaylistToTrackWhereUniqueInput
  }


  /**
   * PlaylistToTrack findUniqueOrThrow
   */
  export type PlaylistToTrackFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistToTrack
     */
    select?: PlaylistToTrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistToTrackInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistToTrack to fetch.
     */
    where: PlaylistToTrackWhereUniqueInput
  }


  /**
   * PlaylistToTrack findFirst
   */
  export type PlaylistToTrackFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistToTrack
     */
    select?: PlaylistToTrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistToTrackInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistToTrack to fetch.
     */
    where?: PlaylistToTrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistToTracks to fetch.
     */
    orderBy?: PlaylistToTrackOrderByWithRelationInput | PlaylistToTrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaylistToTracks.
     */
    cursor?: PlaylistToTrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistToTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistToTracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaylistToTracks.
     */
    distinct?: PlaylistToTrackScalarFieldEnum | PlaylistToTrackScalarFieldEnum[]
  }


  /**
   * PlaylistToTrack findFirstOrThrow
   */
  export type PlaylistToTrackFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistToTrack
     */
    select?: PlaylistToTrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistToTrackInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistToTrack to fetch.
     */
    where?: PlaylistToTrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistToTracks to fetch.
     */
    orderBy?: PlaylistToTrackOrderByWithRelationInput | PlaylistToTrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaylistToTracks.
     */
    cursor?: PlaylistToTrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistToTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistToTracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaylistToTracks.
     */
    distinct?: PlaylistToTrackScalarFieldEnum | PlaylistToTrackScalarFieldEnum[]
  }


  /**
   * PlaylistToTrack findMany
   */
  export type PlaylistToTrackFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistToTrack
     */
    select?: PlaylistToTrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistToTrackInclude<ExtArgs> | null
    /**
     * Filter, which PlaylistToTracks to fetch.
     */
    where?: PlaylistToTrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistToTracks to fetch.
     */
    orderBy?: PlaylistToTrackOrderByWithRelationInput | PlaylistToTrackOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlaylistToTracks.
     */
    cursor?: PlaylistToTrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistToTracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistToTracks.
     */
    skip?: number
    distinct?: PlaylistToTrackScalarFieldEnum | PlaylistToTrackScalarFieldEnum[]
  }


  /**
   * PlaylistToTrack create
   */
  export type PlaylistToTrackCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistToTrack
     */
    select?: PlaylistToTrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistToTrackInclude<ExtArgs> | null
    /**
     * The data needed to create a PlaylistToTrack.
     */
    data: XOR<PlaylistToTrackCreateInput, PlaylistToTrackUncheckedCreateInput>
  }


  /**
   * PlaylistToTrack createMany
   */
  export type PlaylistToTrackCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PlaylistToTracks.
     */
    data: PlaylistToTrackCreateManyInput | PlaylistToTrackCreateManyInput[]
  }


  /**
   * PlaylistToTrack update
   */
  export type PlaylistToTrackUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistToTrack
     */
    select?: PlaylistToTrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistToTrackInclude<ExtArgs> | null
    /**
     * The data needed to update a PlaylistToTrack.
     */
    data: XOR<PlaylistToTrackUpdateInput, PlaylistToTrackUncheckedUpdateInput>
    /**
     * Choose, which PlaylistToTrack to update.
     */
    where: PlaylistToTrackWhereUniqueInput
  }


  /**
   * PlaylistToTrack updateMany
   */
  export type PlaylistToTrackUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PlaylistToTracks.
     */
    data: XOR<PlaylistToTrackUpdateManyMutationInput, PlaylistToTrackUncheckedUpdateManyInput>
    /**
     * Filter which PlaylistToTracks to update
     */
    where?: PlaylistToTrackWhereInput
  }


  /**
   * PlaylistToTrack upsert
   */
  export type PlaylistToTrackUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistToTrack
     */
    select?: PlaylistToTrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistToTrackInclude<ExtArgs> | null
    /**
     * The filter to search for the PlaylistToTrack to update in case it exists.
     */
    where: PlaylistToTrackWhereUniqueInput
    /**
     * In case the PlaylistToTrack found by the `where` argument doesn't exist, create a new PlaylistToTrack with this data.
     */
    create: XOR<PlaylistToTrackCreateInput, PlaylistToTrackUncheckedCreateInput>
    /**
     * In case the PlaylistToTrack was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaylistToTrackUpdateInput, PlaylistToTrackUncheckedUpdateInput>
  }


  /**
   * PlaylistToTrack delete
   */
  export type PlaylistToTrackDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistToTrack
     */
    select?: PlaylistToTrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistToTrackInclude<ExtArgs> | null
    /**
     * Filter which PlaylistToTrack to delete.
     */
    where: PlaylistToTrackWhereUniqueInput
  }


  /**
   * PlaylistToTrack deleteMany
   */
  export type PlaylistToTrackDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PlaylistToTracks to delete
     */
    where?: PlaylistToTrackWhereInput
  }


  /**
   * PlaylistToTrack findRaw
   */
  export type PlaylistToTrackFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * PlaylistToTrack aggregateRaw
   */
  export type PlaylistToTrackAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * PlaylistToTrack without action
   */
  export type PlaylistToTrackDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlaylistToTrack
     */
    select?: PlaylistToTrackSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistToTrackInclude<ExtArgs> | null
  }



  /**
   * Model UserFollowsPlaylists
   */

  export type AggregateUserFollowsPlaylists = {
    _count: UserFollowsPlaylistsCountAggregateOutputType | null
    _min: UserFollowsPlaylistsMinAggregateOutputType | null
    _max: UserFollowsPlaylistsMaxAggregateOutputType | null
  }

  export type UserFollowsPlaylistsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    playlistId: string | null
  }

  export type UserFollowsPlaylistsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    playlistId: string | null
  }

  export type UserFollowsPlaylistsCountAggregateOutputType = {
    id: number
    userId: number
    playlistId: number
    _all: number
  }


  export type UserFollowsPlaylistsMinAggregateInputType = {
    id?: true
    userId?: true
    playlistId?: true
  }

  export type UserFollowsPlaylistsMaxAggregateInputType = {
    id?: true
    userId?: true
    playlistId?: true
  }

  export type UserFollowsPlaylistsCountAggregateInputType = {
    id?: true
    userId?: true
    playlistId?: true
    _all?: true
  }

  export type UserFollowsPlaylistsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFollowsPlaylists to aggregate.
     */
    where?: UserFollowsPlaylistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFollowsPlaylists to fetch.
     */
    orderBy?: UserFollowsPlaylistsOrderByWithRelationInput | UserFollowsPlaylistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserFollowsPlaylistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFollowsPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFollowsPlaylists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserFollowsPlaylists
    **/
    _count?: true | UserFollowsPlaylistsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserFollowsPlaylistsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserFollowsPlaylistsMaxAggregateInputType
  }

  export type GetUserFollowsPlaylistsAggregateType<T extends UserFollowsPlaylistsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserFollowsPlaylists]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserFollowsPlaylists[P]>
      : GetScalarType<T[P], AggregateUserFollowsPlaylists[P]>
  }




  export type UserFollowsPlaylistsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFollowsPlaylistsWhereInput
    orderBy?: UserFollowsPlaylistsOrderByWithAggregationInput | UserFollowsPlaylistsOrderByWithAggregationInput[]
    by: UserFollowsPlaylistsScalarFieldEnum[] | UserFollowsPlaylistsScalarFieldEnum
    having?: UserFollowsPlaylistsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserFollowsPlaylistsCountAggregateInputType | true
    _min?: UserFollowsPlaylistsMinAggregateInputType
    _max?: UserFollowsPlaylistsMaxAggregateInputType
  }

  export type UserFollowsPlaylistsGroupByOutputType = {
    id: string
    userId: string
    playlistId: string
    _count: UserFollowsPlaylistsCountAggregateOutputType | null
    _min: UserFollowsPlaylistsMinAggregateOutputType | null
    _max: UserFollowsPlaylistsMaxAggregateOutputType | null
  }

  type GetUserFollowsPlaylistsGroupByPayload<T extends UserFollowsPlaylistsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserFollowsPlaylistsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserFollowsPlaylistsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserFollowsPlaylistsGroupByOutputType[P]>
            : GetScalarType<T[P], UserFollowsPlaylistsGroupByOutputType[P]>
        }
      >
    >


  export type UserFollowsPlaylistsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    playlistId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    playlist?: boolean | PlaylistsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFollowsPlaylists"]>

  export type UserFollowsPlaylistsSelectScalar = {
    id?: boolean
    userId?: boolean
    playlistId?: boolean
  }

  export type UserFollowsPlaylistsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    playlist?: boolean | PlaylistsDefaultArgs<ExtArgs>
  }


  export type $UserFollowsPlaylistsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserFollowsPlaylists"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      playlist: Prisma.$PlaylistsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      playlistId: string
    }, ExtArgs["result"]["userFollowsPlaylists"]>
    composites: {}
  }


  type UserFollowsPlaylistsGetPayload<S extends boolean | null | undefined | UserFollowsPlaylistsDefaultArgs> = $Result.GetResult<Prisma.$UserFollowsPlaylistsPayload, S>

  type UserFollowsPlaylistsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFollowsPlaylistsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserFollowsPlaylistsCountAggregateInputType | true
    }

  export interface UserFollowsPlaylistsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserFollowsPlaylists'], meta: { name: 'UserFollowsPlaylists' } }
    /**
     * Find zero or one UserFollowsPlaylists that matches the filter.
     * @param {UserFollowsPlaylistsFindUniqueArgs} args - Arguments to find a UserFollowsPlaylists
     * @example
     * // Get one UserFollowsPlaylists
     * const userFollowsPlaylists = await prisma.userFollowsPlaylists.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFollowsPlaylistsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFollowsPlaylistsFindUniqueArgs<ExtArgs>>
    ): Prisma__UserFollowsPlaylistsClient<$Result.GetResult<Prisma.$UserFollowsPlaylistsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserFollowsPlaylists that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFollowsPlaylistsFindUniqueOrThrowArgs} args - Arguments to find a UserFollowsPlaylists
     * @example
     * // Get one UserFollowsPlaylists
     * const userFollowsPlaylists = await prisma.userFollowsPlaylists.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFollowsPlaylistsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFollowsPlaylistsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserFollowsPlaylistsClient<$Result.GetResult<Prisma.$UserFollowsPlaylistsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserFollowsPlaylists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFollowsPlaylistsFindFirstArgs} args - Arguments to find a UserFollowsPlaylists
     * @example
     * // Get one UserFollowsPlaylists
     * const userFollowsPlaylists = await prisma.userFollowsPlaylists.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFollowsPlaylistsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFollowsPlaylistsFindFirstArgs<ExtArgs>>
    ): Prisma__UserFollowsPlaylistsClient<$Result.GetResult<Prisma.$UserFollowsPlaylistsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserFollowsPlaylists that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFollowsPlaylistsFindFirstOrThrowArgs} args - Arguments to find a UserFollowsPlaylists
     * @example
     * // Get one UserFollowsPlaylists
     * const userFollowsPlaylists = await prisma.userFollowsPlaylists.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFollowsPlaylistsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFollowsPlaylistsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserFollowsPlaylistsClient<$Result.GetResult<Prisma.$UserFollowsPlaylistsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserFollowsPlaylists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFollowsPlaylistsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserFollowsPlaylists
     * const userFollowsPlaylists = await prisma.userFollowsPlaylists.findMany()
     * 
     * // Get first 10 UserFollowsPlaylists
     * const userFollowsPlaylists = await prisma.userFollowsPlaylists.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userFollowsPlaylistsWithIdOnly = await prisma.userFollowsPlaylists.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFollowsPlaylistsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFollowsPlaylistsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFollowsPlaylistsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserFollowsPlaylists.
     * @param {UserFollowsPlaylistsCreateArgs} args - Arguments to create a UserFollowsPlaylists.
     * @example
     * // Create one UserFollowsPlaylists
     * const UserFollowsPlaylists = await prisma.userFollowsPlaylists.create({
     *   data: {
     *     // ... data to create a UserFollowsPlaylists
     *   }
     * })
     * 
    **/
    create<T extends UserFollowsPlaylistsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserFollowsPlaylistsCreateArgs<ExtArgs>>
    ): Prisma__UserFollowsPlaylistsClient<$Result.GetResult<Prisma.$UserFollowsPlaylistsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserFollowsPlaylists.
     *     @param {UserFollowsPlaylistsCreateManyArgs} args - Arguments to create many UserFollowsPlaylists.
     *     @example
     *     // Create many UserFollowsPlaylists
     *     const userFollowsPlaylists = await prisma.userFollowsPlaylists.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserFollowsPlaylistsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFollowsPlaylistsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserFollowsPlaylists.
     * @param {UserFollowsPlaylistsDeleteArgs} args - Arguments to delete one UserFollowsPlaylists.
     * @example
     * // Delete one UserFollowsPlaylists
     * const UserFollowsPlaylists = await prisma.userFollowsPlaylists.delete({
     *   where: {
     *     // ... filter to delete one UserFollowsPlaylists
     *   }
     * })
     * 
    **/
    delete<T extends UserFollowsPlaylistsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserFollowsPlaylistsDeleteArgs<ExtArgs>>
    ): Prisma__UserFollowsPlaylistsClient<$Result.GetResult<Prisma.$UserFollowsPlaylistsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserFollowsPlaylists.
     * @param {UserFollowsPlaylistsUpdateArgs} args - Arguments to update one UserFollowsPlaylists.
     * @example
     * // Update one UserFollowsPlaylists
     * const userFollowsPlaylists = await prisma.userFollowsPlaylists.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserFollowsPlaylistsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserFollowsPlaylistsUpdateArgs<ExtArgs>>
    ): Prisma__UserFollowsPlaylistsClient<$Result.GetResult<Prisma.$UserFollowsPlaylistsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserFollowsPlaylists.
     * @param {UserFollowsPlaylistsDeleteManyArgs} args - Arguments to filter UserFollowsPlaylists to delete.
     * @example
     * // Delete a few UserFollowsPlaylists
     * const { count } = await prisma.userFollowsPlaylists.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserFollowsPlaylistsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFollowsPlaylistsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFollowsPlaylists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFollowsPlaylistsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserFollowsPlaylists
     * const userFollowsPlaylists = await prisma.userFollowsPlaylists.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserFollowsPlaylistsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserFollowsPlaylistsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserFollowsPlaylists.
     * @param {UserFollowsPlaylistsUpsertArgs} args - Arguments to update or create a UserFollowsPlaylists.
     * @example
     * // Update or create a UserFollowsPlaylists
     * const userFollowsPlaylists = await prisma.userFollowsPlaylists.upsert({
     *   create: {
     *     // ... data to create a UserFollowsPlaylists
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserFollowsPlaylists we want to update
     *   }
     * })
    **/
    upsert<T extends UserFollowsPlaylistsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserFollowsPlaylistsUpsertArgs<ExtArgs>>
    ): Prisma__UserFollowsPlaylistsClient<$Result.GetResult<Prisma.$UserFollowsPlaylistsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more UserFollowsPlaylists that matches the filter.
     * @param {UserFollowsPlaylistsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userFollowsPlaylists = await prisma.userFollowsPlaylists.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserFollowsPlaylistsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserFollowsPlaylists.
     * @param {UserFollowsPlaylistsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userFollowsPlaylists = await prisma.userFollowsPlaylists.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserFollowsPlaylistsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of UserFollowsPlaylists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFollowsPlaylistsCountArgs} args - Arguments to filter UserFollowsPlaylists to count.
     * @example
     * // Count the number of UserFollowsPlaylists
     * const count = await prisma.userFollowsPlaylists.count({
     *   where: {
     *     // ... the filter for the UserFollowsPlaylists we want to count
     *   }
     * })
    **/
    count<T extends UserFollowsPlaylistsCountArgs>(
      args?: Subset<T, UserFollowsPlaylistsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserFollowsPlaylistsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserFollowsPlaylists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFollowsPlaylistsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserFollowsPlaylistsAggregateArgs>(args: Subset<T, UserFollowsPlaylistsAggregateArgs>): Prisma.PrismaPromise<GetUserFollowsPlaylistsAggregateType<T>>

    /**
     * Group by UserFollowsPlaylists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFollowsPlaylistsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserFollowsPlaylistsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserFollowsPlaylistsGroupByArgs['orderBy'] }
        : { orderBy?: UserFollowsPlaylistsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserFollowsPlaylistsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserFollowsPlaylistsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserFollowsPlaylists model
   */
  readonly fields: UserFollowsPlaylistsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserFollowsPlaylists.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserFollowsPlaylistsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    playlist<T extends PlaylistsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlaylistsDefaultArgs<ExtArgs>>): Prisma__PlaylistsClient<$Result.GetResult<Prisma.$PlaylistsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserFollowsPlaylists model
   */ 
  interface UserFollowsPlaylistsFieldRefs {
    readonly id: FieldRef<"UserFollowsPlaylists", 'String'>
    readonly userId: FieldRef<"UserFollowsPlaylists", 'String'>
    readonly playlistId: FieldRef<"UserFollowsPlaylists", 'String'>
  }
    

  // Custom InputTypes

  /**
   * UserFollowsPlaylists findUnique
   */
  export type UserFollowsPlaylistsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollowsPlaylists
     */
    select?: UserFollowsPlaylistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserFollowsPlaylistsInclude<ExtArgs> | null
    /**
     * Filter, which UserFollowsPlaylists to fetch.
     */
    where: UserFollowsPlaylistsWhereUniqueInput
  }


  /**
   * UserFollowsPlaylists findUniqueOrThrow
   */
  export type UserFollowsPlaylistsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollowsPlaylists
     */
    select?: UserFollowsPlaylistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserFollowsPlaylistsInclude<ExtArgs> | null
    /**
     * Filter, which UserFollowsPlaylists to fetch.
     */
    where: UserFollowsPlaylistsWhereUniqueInput
  }


  /**
   * UserFollowsPlaylists findFirst
   */
  export type UserFollowsPlaylistsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollowsPlaylists
     */
    select?: UserFollowsPlaylistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserFollowsPlaylistsInclude<ExtArgs> | null
    /**
     * Filter, which UserFollowsPlaylists to fetch.
     */
    where?: UserFollowsPlaylistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFollowsPlaylists to fetch.
     */
    orderBy?: UserFollowsPlaylistsOrderByWithRelationInput | UserFollowsPlaylistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFollowsPlaylists.
     */
    cursor?: UserFollowsPlaylistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFollowsPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFollowsPlaylists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFollowsPlaylists.
     */
    distinct?: UserFollowsPlaylistsScalarFieldEnum | UserFollowsPlaylistsScalarFieldEnum[]
  }


  /**
   * UserFollowsPlaylists findFirstOrThrow
   */
  export type UserFollowsPlaylistsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollowsPlaylists
     */
    select?: UserFollowsPlaylistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserFollowsPlaylistsInclude<ExtArgs> | null
    /**
     * Filter, which UserFollowsPlaylists to fetch.
     */
    where?: UserFollowsPlaylistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFollowsPlaylists to fetch.
     */
    orderBy?: UserFollowsPlaylistsOrderByWithRelationInput | UserFollowsPlaylistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFollowsPlaylists.
     */
    cursor?: UserFollowsPlaylistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFollowsPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFollowsPlaylists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFollowsPlaylists.
     */
    distinct?: UserFollowsPlaylistsScalarFieldEnum | UserFollowsPlaylistsScalarFieldEnum[]
  }


  /**
   * UserFollowsPlaylists findMany
   */
  export type UserFollowsPlaylistsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollowsPlaylists
     */
    select?: UserFollowsPlaylistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserFollowsPlaylistsInclude<ExtArgs> | null
    /**
     * Filter, which UserFollowsPlaylists to fetch.
     */
    where?: UserFollowsPlaylistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFollowsPlaylists to fetch.
     */
    orderBy?: UserFollowsPlaylistsOrderByWithRelationInput | UserFollowsPlaylistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserFollowsPlaylists.
     */
    cursor?: UserFollowsPlaylistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFollowsPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFollowsPlaylists.
     */
    skip?: number
    distinct?: UserFollowsPlaylistsScalarFieldEnum | UserFollowsPlaylistsScalarFieldEnum[]
  }


  /**
   * UserFollowsPlaylists create
   */
  export type UserFollowsPlaylistsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollowsPlaylists
     */
    select?: UserFollowsPlaylistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserFollowsPlaylistsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserFollowsPlaylists.
     */
    data: XOR<UserFollowsPlaylistsCreateInput, UserFollowsPlaylistsUncheckedCreateInput>
  }


  /**
   * UserFollowsPlaylists createMany
   */
  export type UserFollowsPlaylistsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserFollowsPlaylists.
     */
    data: UserFollowsPlaylistsCreateManyInput | UserFollowsPlaylistsCreateManyInput[]
  }


  /**
   * UserFollowsPlaylists update
   */
  export type UserFollowsPlaylistsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollowsPlaylists
     */
    select?: UserFollowsPlaylistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserFollowsPlaylistsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserFollowsPlaylists.
     */
    data: XOR<UserFollowsPlaylistsUpdateInput, UserFollowsPlaylistsUncheckedUpdateInput>
    /**
     * Choose, which UserFollowsPlaylists to update.
     */
    where: UserFollowsPlaylistsWhereUniqueInput
  }


  /**
   * UserFollowsPlaylists updateMany
   */
  export type UserFollowsPlaylistsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserFollowsPlaylists.
     */
    data: XOR<UserFollowsPlaylistsUpdateManyMutationInput, UserFollowsPlaylistsUncheckedUpdateManyInput>
    /**
     * Filter which UserFollowsPlaylists to update
     */
    where?: UserFollowsPlaylistsWhereInput
  }


  /**
   * UserFollowsPlaylists upsert
   */
  export type UserFollowsPlaylistsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollowsPlaylists
     */
    select?: UserFollowsPlaylistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserFollowsPlaylistsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserFollowsPlaylists to update in case it exists.
     */
    where: UserFollowsPlaylistsWhereUniqueInput
    /**
     * In case the UserFollowsPlaylists found by the `where` argument doesn't exist, create a new UserFollowsPlaylists with this data.
     */
    create: XOR<UserFollowsPlaylistsCreateInput, UserFollowsPlaylistsUncheckedCreateInput>
    /**
     * In case the UserFollowsPlaylists was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserFollowsPlaylistsUpdateInput, UserFollowsPlaylistsUncheckedUpdateInput>
  }


  /**
   * UserFollowsPlaylists delete
   */
  export type UserFollowsPlaylistsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollowsPlaylists
     */
    select?: UserFollowsPlaylistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserFollowsPlaylistsInclude<ExtArgs> | null
    /**
     * Filter which UserFollowsPlaylists to delete.
     */
    where: UserFollowsPlaylistsWhereUniqueInput
  }


  /**
   * UserFollowsPlaylists deleteMany
   */
  export type UserFollowsPlaylistsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFollowsPlaylists to delete
     */
    where?: UserFollowsPlaylistsWhereInput
  }


  /**
   * UserFollowsPlaylists findRaw
   */
  export type UserFollowsPlaylistsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * UserFollowsPlaylists aggregateRaw
   */
  export type UserFollowsPlaylistsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * UserFollowsPlaylists without action
   */
  export type UserFollowsPlaylistsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollowsPlaylists
     */
    select?: UserFollowsPlaylistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserFollowsPlaylistsInclude<ExtArgs> | null
  }



  /**
   * Model UserFollowsArtists
   */

  export type AggregateUserFollowsArtists = {
    _count: UserFollowsArtistsCountAggregateOutputType | null
    _min: UserFollowsArtistsMinAggregateOutputType | null
    _max: UserFollowsArtistsMaxAggregateOutputType | null
  }

  export type UserFollowsArtistsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    artistId: string | null
    createdAt: Date | null
  }

  export type UserFollowsArtistsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    artistId: string | null
    createdAt: Date | null
  }

  export type UserFollowsArtistsCountAggregateOutputType = {
    id: number
    userId: number
    artistId: number
    createdAt: number
    _all: number
  }


  export type UserFollowsArtistsMinAggregateInputType = {
    id?: true
    userId?: true
    artistId?: true
    createdAt?: true
  }

  export type UserFollowsArtistsMaxAggregateInputType = {
    id?: true
    userId?: true
    artistId?: true
    createdAt?: true
  }

  export type UserFollowsArtistsCountAggregateInputType = {
    id?: true
    userId?: true
    artistId?: true
    createdAt?: true
    _all?: true
  }

  export type UserFollowsArtistsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFollowsArtists to aggregate.
     */
    where?: UserFollowsArtistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFollowsArtists to fetch.
     */
    orderBy?: UserFollowsArtistsOrderByWithRelationInput | UserFollowsArtistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserFollowsArtistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFollowsArtists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFollowsArtists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserFollowsArtists
    **/
    _count?: true | UserFollowsArtistsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserFollowsArtistsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserFollowsArtistsMaxAggregateInputType
  }

  export type GetUserFollowsArtistsAggregateType<T extends UserFollowsArtistsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserFollowsArtists]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserFollowsArtists[P]>
      : GetScalarType<T[P], AggregateUserFollowsArtists[P]>
  }




  export type UserFollowsArtistsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserFollowsArtistsWhereInput
    orderBy?: UserFollowsArtistsOrderByWithAggregationInput | UserFollowsArtistsOrderByWithAggregationInput[]
    by: UserFollowsArtistsScalarFieldEnum[] | UserFollowsArtistsScalarFieldEnum
    having?: UserFollowsArtistsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserFollowsArtistsCountAggregateInputType | true
    _min?: UserFollowsArtistsMinAggregateInputType
    _max?: UserFollowsArtistsMaxAggregateInputType
  }

  export type UserFollowsArtistsGroupByOutputType = {
    id: string
    userId: string
    artistId: string
    createdAt: Date
    _count: UserFollowsArtistsCountAggregateOutputType | null
    _min: UserFollowsArtistsMinAggregateOutputType | null
    _max: UserFollowsArtistsMaxAggregateOutputType | null
  }

  type GetUserFollowsArtistsGroupByPayload<T extends UserFollowsArtistsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserFollowsArtistsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserFollowsArtistsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserFollowsArtistsGroupByOutputType[P]>
            : GetScalarType<T[P], UserFollowsArtistsGroupByOutputType[P]>
        }
      >
    >


  export type UserFollowsArtistsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    artistId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    artist?: boolean | ArtistsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userFollowsArtists"]>

  export type UserFollowsArtistsSelectScalar = {
    id?: boolean
    userId?: boolean
    artistId?: boolean
    createdAt?: boolean
  }

  export type UserFollowsArtistsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    artist?: boolean | ArtistsDefaultArgs<ExtArgs>
  }


  export type $UserFollowsArtistsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserFollowsArtists"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      artist: Prisma.$ArtistsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      artistId: string
      createdAt: Date
    }, ExtArgs["result"]["userFollowsArtists"]>
    composites: {}
  }


  type UserFollowsArtistsGetPayload<S extends boolean | null | undefined | UserFollowsArtistsDefaultArgs> = $Result.GetResult<Prisma.$UserFollowsArtistsPayload, S>

  type UserFollowsArtistsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFollowsArtistsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserFollowsArtistsCountAggregateInputType | true
    }

  export interface UserFollowsArtistsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserFollowsArtists'], meta: { name: 'UserFollowsArtists' } }
    /**
     * Find zero or one UserFollowsArtists that matches the filter.
     * @param {UserFollowsArtistsFindUniqueArgs} args - Arguments to find a UserFollowsArtists
     * @example
     * // Get one UserFollowsArtists
     * const userFollowsArtists = await prisma.userFollowsArtists.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFollowsArtistsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFollowsArtistsFindUniqueArgs<ExtArgs>>
    ): Prisma__UserFollowsArtistsClient<$Result.GetResult<Prisma.$UserFollowsArtistsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserFollowsArtists that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFollowsArtistsFindUniqueOrThrowArgs} args - Arguments to find a UserFollowsArtists
     * @example
     * // Get one UserFollowsArtists
     * const userFollowsArtists = await prisma.userFollowsArtists.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFollowsArtistsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFollowsArtistsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserFollowsArtistsClient<$Result.GetResult<Prisma.$UserFollowsArtistsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserFollowsArtists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFollowsArtistsFindFirstArgs} args - Arguments to find a UserFollowsArtists
     * @example
     * // Get one UserFollowsArtists
     * const userFollowsArtists = await prisma.userFollowsArtists.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFollowsArtistsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFollowsArtistsFindFirstArgs<ExtArgs>>
    ): Prisma__UserFollowsArtistsClient<$Result.GetResult<Prisma.$UserFollowsArtistsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserFollowsArtists that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFollowsArtistsFindFirstOrThrowArgs} args - Arguments to find a UserFollowsArtists
     * @example
     * // Get one UserFollowsArtists
     * const userFollowsArtists = await prisma.userFollowsArtists.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFollowsArtistsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFollowsArtistsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserFollowsArtistsClient<$Result.GetResult<Prisma.$UserFollowsArtistsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserFollowsArtists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFollowsArtistsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserFollowsArtists
     * const userFollowsArtists = await prisma.userFollowsArtists.findMany()
     * 
     * // Get first 10 UserFollowsArtists
     * const userFollowsArtists = await prisma.userFollowsArtists.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userFollowsArtistsWithIdOnly = await prisma.userFollowsArtists.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFollowsArtistsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFollowsArtistsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserFollowsArtistsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserFollowsArtists.
     * @param {UserFollowsArtistsCreateArgs} args - Arguments to create a UserFollowsArtists.
     * @example
     * // Create one UserFollowsArtists
     * const UserFollowsArtists = await prisma.userFollowsArtists.create({
     *   data: {
     *     // ... data to create a UserFollowsArtists
     *   }
     * })
     * 
    **/
    create<T extends UserFollowsArtistsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserFollowsArtistsCreateArgs<ExtArgs>>
    ): Prisma__UserFollowsArtistsClient<$Result.GetResult<Prisma.$UserFollowsArtistsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserFollowsArtists.
     *     @param {UserFollowsArtistsCreateManyArgs} args - Arguments to create many UserFollowsArtists.
     *     @example
     *     // Create many UserFollowsArtists
     *     const userFollowsArtists = await prisma.userFollowsArtists.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserFollowsArtistsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFollowsArtistsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserFollowsArtists.
     * @param {UserFollowsArtistsDeleteArgs} args - Arguments to delete one UserFollowsArtists.
     * @example
     * // Delete one UserFollowsArtists
     * const UserFollowsArtists = await prisma.userFollowsArtists.delete({
     *   where: {
     *     // ... filter to delete one UserFollowsArtists
     *   }
     * })
     * 
    **/
    delete<T extends UserFollowsArtistsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserFollowsArtistsDeleteArgs<ExtArgs>>
    ): Prisma__UserFollowsArtistsClient<$Result.GetResult<Prisma.$UserFollowsArtistsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserFollowsArtists.
     * @param {UserFollowsArtistsUpdateArgs} args - Arguments to update one UserFollowsArtists.
     * @example
     * // Update one UserFollowsArtists
     * const userFollowsArtists = await prisma.userFollowsArtists.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserFollowsArtistsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserFollowsArtistsUpdateArgs<ExtArgs>>
    ): Prisma__UserFollowsArtistsClient<$Result.GetResult<Prisma.$UserFollowsArtistsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserFollowsArtists.
     * @param {UserFollowsArtistsDeleteManyArgs} args - Arguments to filter UserFollowsArtists to delete.
     * @example
     * // Delete a few UserFollowsArtists
     * const { count } = await prisma.userFollowsArtists.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserFollowsArtistsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFollowsArtistsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserFollowsArtists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFollowsArtistsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserFollowsArtists
     * const userFollowsArtists = await prisma.userFollowsArtists.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserFollowsArtistsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserFollowsArtistsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserFollowsArtists.
     * @param {UserFollowsArtistsUpsertArgs} args - Arguments to update or create a UserFollowsArtists.
     * @example
     * // Update or create a UserFollowsArtists
     * const userFollowsArtists = await prisma.userFollowsArtists.upsert({
     *   create: {
     *     // ... data to create a UserFollowsArtists
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserFollowsArtists we want to update
     *   }
     * })
    **/
    upsert<T extends UserFollowsArtistsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserFollowsArtistsUpsertArgs<ExtArgs>>
    ): Prisma__UserFollowsArtistsClient<$Result.GetResult<Prisma.$UserFollowsArtistsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more UserFollowsArtists that matches the filter.
     * @param {UserFollowsArtistsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userFollowsArtists = await prisma.userFollowsArtists.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserFollowsArtistsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserFollowsArtists.
     * @param {UserFollowsArtistsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userFollowsArtists = await prisma.userFollowsArtists.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserFollowsArtistsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of UserFollowsArtists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFollowsArtistsCountArgs} args - Arguments to filter UserFollowsArtists to count.
     * @example
     * // Count the number of UserFollowsArtists
     * const count = await prisma.userFollowsArtists.count({
     *   where: {
     *     // ... the filter for the UserFollowsArtists we want to count
     *   }
     * })
    **/
    count<T extends UserFollowsArtistsCountArgs>(
      args?: Subset<T, UserFollowsArtistsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserFollowsArtistsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserFollowsArtists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFollowsArtistsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserFollowsArtistsAggregateArgs>(args: Subset<T, UserFollowsArtistsAggregateArgs>): Prisma.PrismaPromise<GetUserFollowsArtistsAggregateType<T>>

    /**
     * Group by UserFollowsArtists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFollowsArtistsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserFollowsArtistsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserFollowsArtistsGroupByArgs['orderBy'] }
        : { orderBy?: UserFollowsArtistsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserFollowsArtistsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserFollowsArtistsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserFollowsArtists model
   */
  readonly fields: UserFollowsArtistsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserFollowsArtists.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserFollowsArtistsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    artist<T extends ArtistsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtistsDefaultArgs<ExtArgs>>): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserFollowsArtists model
   */ 
  interface UserFollowsArtistsFieldRefs {
    readonly id: FieldRef<"UserFollowsArtists", 'String'>
    readonly userId: FieldRef<"UserFollowsArtists", 'String'>
    readonly artistId: FieldRef<"UserFollowsArtists", 'String'>
    readonly createdAt: FieldRef<"UserFollowsArtists", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * UserFollowsArtists findUnique
   */
  export type UserFollowsArtistsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollowsArtists
     */
    select?: UserFollowsArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserFollowsArtistsInclude<ExtArgs> | null
    /**
     * Filter, which UserFollowsArtists to fetch.
     */
    where: UserFollowsArtistsWhereUniqueInput
  }


  /**
   * UserFollowsArtists findUniqueOrThrow
   */
  export type UserFollowsArtistsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollowsArtists
     */
    select?: UserFollowsArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserFollowsArtistsInclude<ExtArgs> | null
    /**
     * Filter, which UserFollowsArtists to fetch.
     */
    where: UserFollowsArtistsWhereUniqueInput
  }


  /**
   * UserFollowsArtists findFirst
   */
  export type UserFollowsArtistsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollowsArtists
     */
    select?: UserFollowsArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserFollowsArtistsInclude<ExtArgs> | null
    /**
     * Filter, which UserFollowsArtists to fetch.
     */
    where?: UserFollowsArtistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFollowsArtists to fetch.
     */
    orderBy?: UserFollowsArtistsOrderByWithRelationInput | UserFollowsArtistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFollowsArtists.
     */
    cursor?: UserFollowsArtistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFollowsArtists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFollowsArtists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFollowsArtists.
     */
    distinct?: UserFollowsArtistsScalarFieldEnum | UserFollowsArtistsScalarFieldEnum[]
  }


  /**
   * UserFollowsArtists findFirstOrThrow
   */
  export type UserFollowsArtistsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollowsArtists
     */
    select?: UserFollowsArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserFollowsArtistsInclude<ExtArgs> | null
    /**
     * Filter, which UserFollowsArtists to fetch.
     */
    where?: UserFollowsArtistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFollowsArtists to fetch.
     */
    orderBy?: UserFollowsArtistsOrderByWithRelationInput | UserFollowsArtistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserFollowsArtists.
     */
    cursor?: UserFollowsArtistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFollowsArtists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFollowsArtists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserFollowsArtists.
     */
    distinct?: UserFollowsArtistsScalarFieldEnum | UserFollowsArtistsScalarFieldEnum[]
  }


  /**
   * UserFollowsArtists findMany
   */
  export type UserFollowsArtistsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollowsArtists
     */
    select?: UserFollowsArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserFollowsArtistsInclude<ExtArgs> | null
    /**
     * Filter, which UserFollowsArtists to fetch.
     */
    where?: UserFollowsArtistsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserFollowsArtists to fetch.
     */
    orderBy?: UserFollowsArtistsOrderByWithRelationInput | UserFollowsArtistsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserFollowsArtists.
     */
    cursor?: UserFollowsArtistsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserFollowsArtists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserFollowsArtists.
     */
    skip?: number
    distinct?: UserFollowsArtistsScalarFieldEnum | UserFollowsArtistsScalarFieldEnum[]
  }


  /**
   * UserFollowsArtists create
   */
  export type UserFollowsArtistsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollowsArtists
     */
    select?: UserFollowsArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserFollowsArtistsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserFollowsArtists.
     */
    data: XOR<UserFollowsArtistsCreateInput, UserFollowsArtistsUncheckedCreateInput>
  }


  /**
   * UserFollowsArtists createMany
   */
  export type UserFollowsArtistsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserFollowsArtists.
     */
    data: UserFollowsArtistsCreateManyInput | UserFollowsArtistsCreateManyInput[]
  }


  /**
   * UserFollowsArtists update
   */
  export type UserFollowsArtistsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollowsArtists
     */
    select?: UserFollowsArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserFollowsArtistsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserFollowsArtists.
     */
    data: XOR<UserFollowsArtistsUpdateInput, UserFollowsArtistsUncheckedUpdateInput>
    /**
     * Choose, which UserFollowsArtists to update.
     */
    where: UserFollowsArtistsWhereUniqueInput
  }


  /**
   * UserFollowsArtists updateMany
   */
  export type UserFollowsArtistsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserFollowsArtists.
     */
    data: XOR<UserFollowsArtistsUpdateManyMutationInput, UserFollowsArtistsUncheckedUpdateManyInput>
    /**
     * Filter which UserFollowsArtists to update
     */
    where?: UserFollowsArtistsWhereInput
  }


  /**
   * UserFollowsArtists upsert
   */
  export type UserFollowsArtistsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollowsArtists
     */
    select?: UserFollowsArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserFollowsArtistsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserFollowsArtists to update in case it exists.
     */
    where: UserFollowsArtistsWhereUniqueInput
    /**
     * In case the UserFollowsArtists found by the `where` argument doesn't exist, create a new UserFollowsArtists with this data.
     */
    create: XOR<UserFollowsArtistsCreateInput, UserFollowsArtistsUncheckedCreateInput>
    /**
     * In case the UserFollowsArtists was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserFollowsArtistsUpdateInput, UserFollowsArtistsUncheckedUpdateInput>
  }


  /**
   * UserFollowsArtists delete
   */
  export type UserFollowsArtistsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollowsArtists
     */
    select?: UserFollowsArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserFollowsArtistsInclude<ExtArgs> | null
    /**
     * Filter which UserFollowsArtists to delete.
     */
    where: UserFollowsArtistsWhereUniqueInput
  }


  /**
   * UserFollowsArtists deleteMany
   */
  export type UserFollowsArtistsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserFollowsArtists to delete
     */
    where?: UserFollowsArtistsWhereInput
  }


  /**
   * UserFollowsArtists findRaw
   */
  export type UserFollowsArtistsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * UserFollowsArtists aggregateRaw
   */
  export type UserFollowsArtistsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * UserFollowsArtists without action
   */
  export type UserFollowsArtistsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserFollowsArtists
     */
    select?: UserFollowsArtistsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserFollowsArtistsInclude<ExtArgs> | null
  }



  /**
   * Model UserLikedAlbums
   */

  export type AggregateUserLikedAlbums = {
    _count: UserLikedAlbumsCountAggregateOutputType | null
    _min: UserLikedAlbumsMinAggregateOutputType | null
    _max: UserLikedAlbumsMaxAggregateOutputType | null
  }

  export type UserLikedAlbumsMinAggregateOutputType = {
    id: string | null
    userId: string | null
    albumId: string | null
    createdAt: Date | null
  }

  export type UserLikedAlbumsMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    albumId: string | null
    createdAt: Date | null
  }

  export type UserLikedAlbumsCountAggregateOutputType = {
    id: number
    userId: number
    albumId: number
    createdAt: number
    _all: number
  }


  export type UserLikedAlbumsMinAggregateInputType = {
    id?: true
    userId?: true
    albumId?: true
    createdAt?: true
  }

  export type UserLikedAlbumsMaxAggregateInputType = {
    id?: true
    userId?: true
    albumId?: true
    createdAt?: true
  }

  export type UserLikedAlbumsCountAggregateInputType = {
    id?: true
    userId?: true
    albumId?: true
    createdAt?: true
    _all?: true
  }

  export type UserLikedAlbumsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLikedAlbums to aggregate.
     */
    where?: UserLikedAlbumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLikedAlbums to fetch.
     */
    orderBy?: UserLikedAlbumsOrderByWithRelationInput | UserLikedAlbumsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserLikedAlbumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLikedAlbums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLikedAlbums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserLikedAlbums
    **/
    _count?: true | UserLikedAlbumsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserLikedAlbumsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserLikedAlbumsMaxAggregateInputType
  }

  export type GetUserLikedAlbumsAggregateType<T extends UserLikedAlbumsAggregateArgs> = {
        [P in keyof T & keyof AggregateUserLikedAlbums]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserLikedAlbums[P]>
      : GetScalarType<T[P], AggregateUserLikedAlbums[P]>
  }




  export type UserLikedAlbumsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserLikedAlbumsWhereInput
    orderBy?: UserLikedAlbumsOrderByWithAggregationInput | UserLikedAlbumsOrderByWithAggregationInput[]
    by: UserLikedAlbumsScalarFieldEnum[] | UserLikedAlbumsScalarFieldEnum
    having?: UserLikedAlbumsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserLikedAlbumsCountAggregateInputType | true
    _min?: UserLikedAlbumsMinAggregateInputType
    _max?: UserLikedAlbumsMaxAggregateInputType
  }

  export type UserLikedAlbumsGroupByOutputType = {
    id: string
    userId: string
    albumId: string
    createdAt: Date
    _count: UserLikedAlbumsCountAggregateOutputType | null
    _min: UserLikedAlbumsMinAggregateOutputType | null
    _max: UserLikedAlbumsMaxAggregateOutputType | null
  }

  type GetUserLikedAlbumsGroupByPayload<T extends UserLikedAlbumsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserLikedAlbumsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserLikedAlbumsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserLikedAlbumsGroupByOutputType[P]>
            : GetScalarType<T[P], UserLikedAlbumsGroupByOutputType[P]>
        }
      >
    >


  export type UserLikedAlbumsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    albumId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    album?: boolean | AlbumsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userLikedAlbums"]>

  export type UserLikedAlbumsSelectScalar = {
    id?: boolean
    userId?: boolean
    albumId?: boolean
    createdAt?: boolean
  }

  export type UserLikedAlbumsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    album?: boolean | AlbumsDefaultArgs<ExtArgs>
  }


  export type $UserLikedAlbumsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserLikedAlbums"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      album: Prisma.$AlbumsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      albumId: string
      createdAt: Date
    }, ExtArgs["result"]["userLikedAlbums"]>
    composites: {}
  }


  type UserLikedAlbumsGetPayload<S extends boolean | null | undefined | UserLikedAlbumsDefaultArgs> = $Result.GetResult<Prisma.$UserLikedAlbumsPayload, S>

  type UserLikedAlbumsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserLikedAlbumsFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserLikedAlbumsCountAggregateInputType | true
    }

  export interface UserLikedAlbumsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserLikedAlbums'], meta: { name: 'UserLikedAlbums' } }
    /**
     * Find zero or one UserLikedAlbums that matches the filter.
     * @param {UserLikedAlbumsFindUniqueArgs} args - Arguments to find a UserLikedAlbums
     * @example
     * // Get one UserLikedAlbums
     * const userLikedAlbums = await prisma.userLikedAlbums.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserLikedAlbumsFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserLikedAlbumsFindUniqueArgs<ExtArgs>>
    ): Prisma__UserLikedAlbumsClient<$Result.GetResult<Prisma.$UserLikedAlbumsPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one UserLikedAlbums that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserLikedAlbumsFindUniqueOrThrowArgs} args - Arguments to find a UserLikedAlbums
     * @example
     * // Get one UserLikedAlbums
     * const userLikedAlbums = await prisma.userLikedAlbums.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserLikedAlbumsFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserLikedAlbumsFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserLikedAlbumsClient<$Result.GetResult<Prisma.$UserLikedAlbumsPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first UserLikedAlbums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLikedAlbumsFindFirstArgs} args - Arguments to find a UserLikedAlbums
     * @example
     * // Get one UserLikedAlbums
     * const userLikedAlbums = await prisma.userLikedAlbums.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserLikedAlbumsFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserLikedAlbumsFindFirstArgs<ExtArgs>>
    ): Prisma__UserLikedAlbumsClient<$Result.GetResult<Prisma.$UserLikedAlbumsPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first UserLikedAlbums that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLikedAlbumsFindFirstOrThrowArgs} args - Arguments to find a UserLikedAlbums
     * @example
     * // Get one UserLikedAlbums
     * const userLikedAlbums = await prisma.userLikedAlbums.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserLikedAlbumsFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserLikedAlbumsFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserLikedAlbumsClient<$Result.GetResult<Prisma.$UserLikedAlbumsPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more UserLikedAlbums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLikedAlbumsFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserLikedAlbums
     * const userLikedAlbums = await prisma.userLikedAlbums.findMany()
     * 
     * // Get first 10 UserLikedAlbums
     * const userLikedAlbums = await prisma.userLikedAlbums.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userLikedAlbumsWithIdOnly = await prisma.userLikedAlbums.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserLikedAlbumsFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserLikedAlbumsFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserLikedAlbumsPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a UserLikedAlbums.
     * @param {UserLikedAlbumsCreateArgs} args - Arguments to create a UserLikedAlbums.
     * @example
     * // Create one UserLikedAlbums
     * const UserLikedAlbums = await prisma.userLikedAlbums.create({
     *   data: {
     *     // ... data to create a UserLikedAlbums
     *   }
     * })
     * 
    **/
    create<T extends UserLikedAlbumsCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserLikedAlbumsCreateArgs<ExtArgs>>
    ): Prisma__UserLikedAlbumsClient<$Result.GetResult<Prisma.$UserLikedAlbumsPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many UserLikedAlbums.
     *     @param {UserLikedAlbumsCreateManyArgs} args - Arguments to create many UserLikedAlbums.
     *     @example
     *     // Create many UserLikedAlbums
     *     const userLikedAlbums = await prisma.userLikedAlbums.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserLikedAlbumsCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserLikedAlbumsCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a UserLikedAlbums.
     * @param {UserLikedAlbumsDeleteArgs} args - Arguments to delete one UserLikedAlbums.
     * @example
     * // Delete one UserLikedAlbums
     * const UserLikedAlbums = await prisma.userLikedAlbums.delete({
     *   where: {
     *     // ... filter to delete one UserLikedAlbums
     *   }
     * })
     * 
    **/
    delete<T extends UserLikedAlbumsDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserLikedAlbumsDeleteArgs<ExtArgs>>
    ): Prisma__UserLikedAlbumsClient<$Result.GetResult<Prisma.$UserLikedAlbumsPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one UserLikedAlbums.
     * @param {UserLikedAlbumsUpdateArgs} args - Arguments to update one UserLikedAlbums.
     * @example
     * // Update one UserLikedAlbums
     * const userLikedAlbums = await prisma.userLikedAlbums.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserLikedAlbumsUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserLikedAlbumsUpdateArgs<ExtArgs>>
    ): Prisma__UserLikedAlbumsClient<$Result.GetResult<Prisma.$UserLikedAlbumsPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more UserLikedAlbums.
     * @param {UserLikedAlbumsDeleteManyArgs} args - Arguments to filter UserLikedAlbums to delete.
     * @example
     * // Delete a few UserLikedAlbums
     * const { count } = await prisma.userLikedAlbums.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserLikedAlbumsDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserLikedAlbumsDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserLikedAlbums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLikedAlbumsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserLikedAlbums
     * const userLikedAlbums = await prisma.userLikedAlbums.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserLikedAlbumsUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserLikedAlbumsUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserLikedAlbums.
     * @param {UserLikedAlbumsUpsertArgs} args - Arguments to update or create a UserLikedAlbums.
     * @example
     * // Update or create a UserLikedAlbums
     * const userLikedAlbums = await prisma.userLikedAlbums.upsert({
     *   create: {
     *     // ... data to create a UserLikedAlbums
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserLikedAlbums we want to update
     *   }
     * })
    **/
    upsert<T extends UserLikedAlbumsUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserLikedAlbumsUpsertArgs<ExtArgs>>
    ): Prisma__UserLikedAlbumsClient<$Result.GetResult<Prisma.$UserLikedAlbumsPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Find zero or more UserLikedAlbums that matches the filter.
     * @param {UserLikedAlbumsFindRawArgs} args - Select which filters you would like to apply.
     * @example
     * const userLikedAlbums = await prisma.userLikedAlbums.findRaw({
     *   filter: { age: { $gt: 25 } } 
     * })
    **/
    findRaw(
      args?: UserLikedAlbumsFindRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Perform aggregation operations on a UserLikedAlbums.
     * @param {UserLikedAlbumsAggregateRawArgs} args - Select which aggregations you would like to apply.
     * @example
     * const userLikedAlbums = await prisma.userLikedAlbums.aggregateRaw({
     *   pipeline: [
     *     { $match: { status: "registered" } },
     *     { $group: { _id: "$country", total: { $sum: 1 } } }
     *   ]
     * })
    **/
    aggregateRaw(
      args?: UserLikedAlbumsAggregateRawArgs
    ): Prisma.PrismaPromise<JsonObject>

    /**
     * Count the number of UserLikedAlbums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLikedAlbumsCountArgs} args - Arguments to filter UserLikedAlbums to count.
     * @example
     * // Count the number of UserLikedAlbums
     * const count = await prisma.userLikedAlbums.count({
     *   where: {
     *     // ... the filter for the UserLikedAlbums we want to count
     *   }
     * })
    **/
    count<T extends UserLikedAlbumsCountArgs>(
      args?: Subset<T, UserLikedAlbumsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserLikedAlbumsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserLikedAlbums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLikedAlbumsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserLikedAlbumsAggregateArgs>(args: Subset<T, UserLikedAlbumsAggregateArgs>): Prisma.PrismaPromise<GetUserLikedAlbumsAggregateType<T>>

    /**
     * Group by UserLikedAlbums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserLikedAlbumsGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserLikedAlbumsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserLikedAlbumsGroupByArgs['orderBy'] }
        : { orderBy?: UserLikedAlbumsGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserLikedAlbumsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserLikedAlbumsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserLikedAlbums model
   */
  readonly fields: UserLikedAlbumsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserLikedAlbums.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserLikedAlbumsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    album<T extends AlbumsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlbumsDefaultArgs<ExtArgs>>): Prisma__AlbumsClient<$Result.GetResult<Prisma.$AlbumsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the UserLikedAlbums model
   */ 
  interface UserLikedAlbumsFieldRefs {
    readonly id: FieldRef<"UserLikedAlbums", 'String'>
    readonly userId: FieldRef<"UserLikedAlbums", 'String'>
    readonly albumId: FieldRef<"UserLikedAlbums", 'String'>
    readonly createdAt: FieldRef<"UserLikedAlbums", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * UserLikedAlbums findUnique
   */
  export type UserLikedAlbumsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLikedAlbums
     */
    select?: UserLikedAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserLikedAlbumsInclude<ExtArgs> | null
    /**
     * Filter, which UserLikedAlbums to fetch.
     */
    where: UserLikedAlbumsWhereUniqueInput
  }


  /**
   * UserLikedAlbums findUniqueOrThrow
   */
  export type UserLikedAlbumsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLikedAlbums
     */
    select?: UserLikedAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserLikedAlbumsInclude<ExtArgs> | null
    /**
     * Filter, which UserLikedAlbums to fetch.
     */
    where: UserLikedAlbumsWhereUniqueInput
  }


  /**
   * UserLikedAlbums findFirst
   */
  export type UserLikedAlbumsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLikedAlbums
     */
    select?: UserLikedAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserLikedAlbumsInclude<ExtArgs> | null
    /**
     * Filter, which UserLikedAlbums to fetch.
     */
    where?: UserLikedAlbumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLikedAlbums to fetch.
     */
    orderBy?: UserLikedAlbumsOrderByWithRelationInput | UserLikedAlbumsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLikedAlbums.
     */
    cursor?: UserLikedAlbumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLikedAlbums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLikedAlbums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLikedAlbums.
     */
    distinct?: UserLikedAlbumsScalarFieldEnum | UserLikedAlbumsScalarFieldEnum[]
  }


  /**
   * UserLikedAlbums findFirstOrThrow
   */
  export type UserLikedAlbumsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLikedAlbums
     */
    select?: UserLikedAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserLikedAlbumsInclude<ExtArgs> | null
    /**
     * Filter, which UserLikedAlbums to fetch.
     */
    where?: UserLikedAlbumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLikedAlbums to fetch.
     */
    orderBy?: UserLikedAlbumsOrderByWithRelationInput | UserLikedAlbumsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserLikedAlbums.
     */
    cursor?: UserLikedAlbumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLikedAlbums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLikedAlbums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserLikedAlbums.
     */
    distinct?: UserLikedAlbumsScalarFieldEnum | UserLikedAlbumsScalarFieldEnum[]
  }


  /**
   * UserLikedAlbums findMany
   */
  export type UserLikedAlbumsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLikedAlbums
     */
    select?: UserLikedAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserLikedAlbumsInclude<ExtArgs> | null
    /**
     * Filter, which UserLikedAlbums to fetch.
     */
    where?: UserLikedAlbumsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserLikedAlbums to fetch.
     */
    orderBy?: UserLikedAlbumsOrderByWithRelationInput | UserLikedAlbumsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserLikedAlbums.
     */
    cursor?: UserLikedAlbumsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserLikedAlbums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserLikedAlbums.
     */
    skip?: number
    distinct?: UserLikedAlbumsScalarFieldEnum | UserLikedAlbumsScalarFieldEnum[]
  }


  /**
   * UserLikedAlbums create
   */
  export type UserLikedAlbumsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLikedAlbums
     */
    select?: UserLikedAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserLikedAlbumsInclude<ExtArgs> | null
    /**
     * The data needed to create a UserLikedAlbums.
     */
    data: XOR<UserLikedAlbumsCreateInput, UserLikedAlbumsUncheckedCreateInput>
  }


  /**
   * UserLikedAlbums createMany
   */
  export type UserLikedAlbumsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserLikedAlbums.
     */
    data: UserLikedAlbumsCreateManyInput | UserLikedAlbumsCreateManyInput[]
  }


  /**
   * UserLikedAlbums update
   */
  export type UserLikedAlbumsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLikedAlbums
     */
    select?: UserLikedAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserLikedAlbumsInclude<ExtArgs> | null
    /**
     * The data needed to update a UserLikedAlbums.
     */
    data: XOR<UserLikedAlbumsUpdateInput, UserLikedAlbumsUncheckedUpdateInput>
    /**
     * Choose, which UserLikedAlbums to update.
     */
    where: UserLikedAlbumsWhereUniqueInput
  }


  /**
   * UserLikedAlbums updateMany
   */
  export type UserLikedAlbumsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserLikedAlbums.
     */
    data: XOR<UserLikedAlbumsUpdateManyMutationInput, UserLikedAlbumsUncheckedUpdateManyInput>
    /**
     * Filter which UserLikedAlbums to update
     */
    where?: UserLikedAlbumsWhereInput
  }


  /**
   * UserLikedAlbums upsert
   */
  export type UserLikedAlbumsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLikedAlbums
     */
    select?: UserLikedAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserLikedAlbumsInclude<ExtArgs> | null
    /**
     * The filter to search for the UserLikedAlbums to update in case it exists.
     */
    where: UserLikedAlbumsWhereUniqueInput
    /**
     * In case the UserLikedAlbums found by the `where` argument doesn't exist, create a new UserLikedAlbums with this data.
     */
    create: XOR<UserLikedAlbumsCreateInput, UserLikedAlbumsUncheckedCreateInput>
    /**
     * In case the UserLikedAlbums was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserLikedAlbumsUpdateInput, UserLikedAlbumsUncheckedUpdateInput>
  }


  /**
   * UserLikedAlbums delete
   */
  export type UserLikedAlbumsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLikedAlbums
     */
    select?: UserLikedAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserLikedAlbumsInclude<ExtArgs> | null
    /**
     * Filter which UserLikedAlbums to delete.
     */
    where: UserLikedAlbumsWhereUniqueInput
  }


  /**
   * UserLikedAlbums deleteMany
   */
  export type UserLikedAlbumsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserLikedAlbums to delete
     */
    where?: UserLikedAlbumsWhereInput
  }


  /**
   * UserLikedAlbums findRaw
   */
  export type UserLikedAlbumsFindRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The query predicate filter. If unspecified, then all documents in the collection will match the predicate. ${@link https://docs.mongodb.com/manual/reference/operator/query MongoDB Docs}.
     */
    filter?: InputJsonValue
    /**
     * Additional options to pass to the `find` command ${@link https://docs.mongodb.com/manual/reference/command/find/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * UserLikedAlbums aggregateRaw
   */
  export type UserLikedAlbumsAggregateRawArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * An array of aggregation stages to process and transform the document stream via the aggregation pipeline. ${@link https://docs.mongodb.com/manual/reference/operator/aggregation-pipeline MongoDB Docs}.
     */
    pipeline?: InputJsonValue[]
    /**
     * Additional options to pass to the `aggregate` command ${@link https://docs.mongodb.com/manual/reference/command/aggregate/#command-fields MongoDB Docs}.
     */
    options?: InputJsonValue
  }


  /**
   * UserLikedAlbums without action
   */
  export type UserLikedAlbumsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserLikedAlbums
     */
    select?: UserLikedAlbumsSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserLikedAlbumsInclude<ExtArgs> | null
  }



  /**
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    image: 'image',
    role: 'role',
    name: 'name',
    gender: 'gender',
    birthDate: 'birthDate',
    country: 'country'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TracksScalarFieldEnum: {
    id: 'id',
    name: 'name',
    url: 'url',
    thumbnail: 'thumbnail',
    genreName: 'genreName'
  };

  export type TracksScalarFieldEnum = (typeof TracksScalarFieldEnum)[keyof typeof TracksScalarFieldEnum]


  export const AlbumsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    artistName: 'artistName',
    thumbnail: 'thumbnail',
    genreName: 'genreName'
  };

  export type AlbumsScalarFieldEnum = (typeof AlbumsScalarFieldEnum)[keyof typeof AlbumsScalarFieldEnum]


  export const PlaylistsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    thumbnail: 'thumbnail',
    publicAccess: 'publicAccess',
    userId: 'userId'
  };

  export type PlaylistsScalarFieldEnum = (typeof PlaylistsScalarFieldEnum)[keyof typeof PlaylistsScalarFieldEnum]


  export const ArtistsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    thumbnail: 'thumbnail',
    genreName: 'genreName',
    description: 'description'
  };

  export type ArtistsScalarFieldEnum = (typeof ArtistsScalarFieldEnum)[keyof typeof ArtistsScalarFieldEnum]


  export const GenreScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type GenreScalarFieldEnum = (typeof GenreScalarFieldEnum)[keyof typeof GenreScalarFieldEnum]


  export const ArtistsOnTracksScalarFieldEnum: {
    id: 'id',
    artistName: 'artistName',
    trackId: 'trackId'
  };

  export type ArtistsOnTracksScalarFieldEnum = (typeof ArtistsOnTracksScalarFieldEnum)[keyof typeof ArtistsOnTracksScalarFieldEnum]


  export const TracksOnAlbumsScalarFieldEnum: {
    id: 'id',
    albumId: 'albumId',
    trackId: 'trackId'
  };

  export type TracksOnAlbumsScalarFieldEnum = (typeof TracksOnAlbumsScalarFieldEnum)[keyof typeof TracksOnAlbumsScalarFieldEnum]


  export const UserFavsTracksScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    trackId: 'trackId',
    createdAt: 'createdAt'
  };

  export type UserFavsTracksScalarFieldEnum = (typeof UserFavsTracksScalarFieldEnum)[keyof typeof UserFavsTracksScalarFieldEnum]


  export const PlaylistToTrackScalarFieldEnum: {
    id: 'id',
    playlistId: 'playlistId',
    trackId: 'trackId'
  };

  export type PlaylistToTrackScalarFieldEnum = (typeof PlaylistToTrackScalarFieldEnum)[keyof typeof PlaylistToTrackScalarFieldEnum]


  export const UserFollowsPlaylistsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    playlistId: 'playlistId'
  };

  export type UserFollowsPlaylistsScalarFieldEnum = (typeof UserFollowsPlaylistsScalarFieldEnum)[keyof typeof UserFollowsPlaylistsScalarFieldEnum]


  export const UserFollowsArtistsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    artistId: 'artistId',
    createdAt: 'createdAt'
  };

  export type UserFollowsArtistsScalarFieldEnum = (typeof UserFollowsArtistsScalarFieldEnum)[keyof typeof UserFollowsArtistsScalarFieldEnum]


  export const UserLikedAlbumsScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    albumId: 'albumId',
    createdAt: 'createdAt'
  };

  export type UserLikedAlbumsScalarFieldEnum = (typeof UserLikedAlbumsScalarFieldEnum)[keyof typeof UserLikedAlbumsScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    image?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    gender?: StringNullableFilter<"User"> | string | null
    birthDate?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    likedAlbums?: UserLikedAlbumsListRelationFilter
    artistsFollowed?: UserFollowsArtistsListRelationFilter
    followedPlaylists?: UserFollowsPlaylistsListRelationFilter
    createdPlaylists?: PlaylistsListRelationFilter
    favTracks?: UserFavsTracksListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    role?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    country?: SortOrder
    likedAlbums?: UserLikedAlbumsOrderByRelationAggregateInput
    artistsFollowed?: UserFollowsArtistsOrderByRelationAggregateInput
    followedPlaylists?: UserFollowsPlaylistsOrderByRelationAggregateInput
    createdPlaylists?: PlaylistsOrderByRelationAggregateInput
    favTracks?: UserFavsTracksOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    image?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    gender?: StringNullableFilter<"User"> | string | null
    birthDate?: StringNullableFilter<"User"> | string | null
    country?: StringNullableFilter<"User"> | string | null
    likedAlbums?: UserLikedAlbumsListRelationFilter
    artistsFollowed?: UserFollowsArtistsListRelationFilter
    followedPlaylists?: UserFollowsPlaylistsListRelationFilter
    createdPlaylists?: PlaylistsListRelationFilter
    favTracks?: UserFavsTracksListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    role?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    country?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    image?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    gender?: StringNullableWithAggregatesFilter<"User"> | string | null
    birthDate?: StringNullableWithAggregatesFilter<"User"> | string | null
    country?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type TracksWhereInput = {
    AND?: TracksWhereInput | TracksWhereInput[]
    OR?: TracksWhereInput[]
    NOT?: TracksWhereInput | TracksWhereInput[]
    id?: StringFilter<"Tracks"> | string
    name?: StringFilter<"Tracks"> | string
    url?: StringFilter<"Tracks"> | string
    thumbnail?: StringFilter<"Tracks"> | string
    genreName?: StringFilter<"Tracks"> | string
    artist?: ArtistsOnTracksListRelationFilter
    genre?: XOR<GenreRelationFilter, GenreWhereInput>
    album?: TracksOnAlbumsListRelationFilter
    playlistConnections?: PlaylistToTrackListRelationFilter
    favsOfUsers?: UserFavsTracksListRelationFilter
  }

  export type TracksOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    thumbnail?: SortOrder
    genreName?: SortOrder
    artist?: ArtistsOnTracksOrderByRelationAggregateInput
    genre?: GenreOrderByWithRelationInput
    album?: TracksOnAlbumsOrderByRelationAggregateInput
    playlistConnections?: PlaylistToTrackOrderByRelationAggregateInput
    favsOfUsers?: UserFavsTracksOrderByRelationAggregateInput
  }

  export type TracksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TracksWhereInput | TracksWhereInput[]
    OR?: TracksWhereInput[]
    NOT?: TracksWhereInput | TracksWhereInput[]
    url?: StringFilter<"Tracks"> | string
    thumbnail?: StringFilter<"Tracks"> | string
    genreName?: StringFilter<"Tracks"> | string
    artist?: ArtistsOnTracksListRelationFilter
    genre?: XOR<GenreRelationFilter, GenreWhereInput>
    album?: TracksOnAlbumsListRelationFilter
    playlistConnections?: PlaylistToTrackListRelationFilter
    favsOfUsers?: UserFavsTracksListRelationFilter
  }, "id" | "name">

  export type TracksOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    thumbnail?: SortOrder
    genreName?: SortOrder
    _count?: TracksCountOrderByAggregateInput
    _max?: TracksMaxOrderByAggregateInput
    _min?: TracksMinOrderByAggregateInput
  }

  export type TracksScalarWhereWithAggregatesInput = {
    AND?: TracksScalarWhereWithAggregatesInput | TracksScalarWhereWithAggregatesInput[]
    OR?: TracksScalarWhereWithAggregatesInput[]
    NOT?: TracksScalarWhereWithAggregatesInput | TracksScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Tracks"> | string
    name?: StringWithAggregatesFilter<"Tracks"> | string
    url?: StringWithAggregatesFilter<"Tracks"> | string
    thumbnail?: StringWithAggregatesFilter<"Tracks"> | string
    genreName?: StringWithAggregatesFilter<"Tracks"> | string
  }

  export type AlbumsWhereInput = {
    AND?: AlbumsWhereInput | AlbumsWhereInput[]
    OR?: AlbumsWhereInput[]
    NOT?: AlbumsWhereInput | AlbumsWhereInput[]
    id?: StringFilter<"Albums"> | string
    name?: StringFilter<"Albums"> | string
    artistName?: StringFilter<"Albums"> | string
    thumbnail?: StringFilter<"Albums"> | string
    genreName?: StringFilter<"Albums"> | string
    artist?: XOR<ArtistsRelationFilter, ArtistsWhereInput>
    tracks?: TracksOnAlbumsListRelationFilter
    genre?: XOR<GenreRelationFilter, GenreWhereInput>
    likedByUsers?: UserLikedAlbumsListRelationFilter
  }

  export type AlbumsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    artistName?: SortOrder
    thumbnail?: SortOrder
    genreName?: SortOrder
    artist?: ArtistsOrderByWithRelationInput
    tracks?: TracksOnAlbumsOrderByRelationAggregateInput
    genre?: GenreOrderByWithRelationInput
    likedByUsers?: UserLikedAlbumsOrderByRelationAggregateInput
  }

  export type AlbumsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlbumsWhereInput | AlbumsWhereInput[]
    OR?: AlbumsWhereInput[]
    NOT?: AlbumsWhereInput | AlbumsWhereInput[]
    name?: StringFilter<"Albums"> | string
    artistName?: StringFilter<"Albums"> | string
    thumbnail?: StringFilter<"Albums"> | string
    genreName?: StringFilter<"Albums"> | string
    artist?: XOR<ArtistsRelationFilter, ArtistsWhereInput>
    tracks?: TracksOnAlbumsListRelationFilter
    genre?: XOR<GenreRelationFilter, GenreWhereInput>
    likedByUsers?: UserLikedAlbumsListRelationFilter
  }, "id">

  export type AlbumsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    artistName?: SortOrder
    thumbnail?: SortOrder
    genreName?: SortOrder
    _count?: AlbumsCountOrderByAggregateInput
    _max?: AlbumsMaxOrderByAggregateInput
    _min?: AlbumsMinOrderByAggregateInput
  }

  export type AlbumsScalarWhereWithAggregatesInput = {
    AND?: AlbumsScalarWhereWithAggregatesInput | AlbumsScalarWhereWithAggregatesInput[]
    OR?: AlbumsScalarWhereWithAggregatesInput[]
    NOT?: AlbumsScalarWhereWithAggregatesInput | AlbumsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Albums"> | string
    name?: StringWithAggregatesFilter<"Albums"> | string
    artistName?: StringWithAggregatesFilter<"Albums"> | string
    thumbnail?: StringWithAggregatesFilter<"Albums"> | string
    genreName?: StringWithAggregatesFilter<"Albums"> | string
  }

  export type PlaylistsWhereInput = {
    AND?: PlaylistsWhereInput | PlaylistsWhereInput[]
    OR?: PlaylistsWhereInput[]
    NOT?: PlaylistsWhereInput | PlaylistsWhereInput[]
    id?: StringFilter<"Playlists"> | string
    name?: StringFilter<"Playlists"> | string
    thumbnail?: StringFilter<"Playlists"> | string
    publicAccess?: BoolFilter<"Playlists"> | boolean
    userId?: StringFilter<"Playlists"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    followers?: UserFollowsPlaylistsListRelationFilter
    tracksConnections?: PlaylistToTrackListRelationFilter
  }

  export type PlaylistsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    thumbnail?: SortOrder
    publicAccess?: SortOrder
    userId?: SortOrder
    user?: UserOrderByWithRelationInput
    followers?: UserFollowsPlaylistsOrderByRelationAggregateInput
    tracksConnections?: PlaylistToTrackOrderByRelationAggregateInput
  }

  export type PlaylistsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: PlaylistsWhereInput | PlaylistsWhereInput[]
    OR?: PlaylistsWhereInput[]
    NOT?: PlaylistsWhereInput | PlaylistsWhereInput[]
    thumbnail?: StringFilter<"Playlists"> | string
    publicAccess?: BoolFilter<"Playlists"> | boolean
    userId?: StringFilter<"Playlists"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    followers?: UserFollowsPlaylistsListRelationFilter
    tracksConnections?: PlaylistToTrackListRelationFilter
  }, "id" | "name">

  export type PlaylistsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    thumbnail?: SortOrder
    publicAccess?: SortOrder
    userId?: SortOrder
    _count?: PlaylistsCountOrderByAggregateInput
    _max?: PlaylistsMaxOrderByAggregateInput
    _min?: PlaylistsMinOrderByAggregateInput
  }

  export type PlaylistsScalarWhereWithAggregatesInput = {
    AND?: PlaylistsScalarWhereWithAggregatesInput | PlaylistsScalarWhereWithAggregatesInput[]
    OR?: PlaylistsScalarWhereWithAggregatesInput[]
    NOT?: PlaylistsScalarWhereWithAggregatesInput | PlaylistsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Playlists"> | string
    name?: StringWithAggregatesFilter<"Playlists"> | string
    thumbnail?: StringWithAggregatesFilter<"Playlists"> | string
    publicAccess?: BoolWithAggregatesFilter<"Playlists"> | boolean
    userId?: StringWithAggregatesFilter<"Playlists"> | string
  }

  export type ArtistsWhereInput = {
    AND?: ArtistsWhereInput | ArtistsWhereInput[]
    OR?: ArtistsWhereInput[]
    NOT?: ArtistsWhereInput | ArtistsWhereInput[]
    id?: StringFilter<"Artists"> | string
    name?: StringFilter<"Artists"> | string
    email?: StringFilter<"Artists"> | string
    password?: StringFilter<"Artists"> | string
    thumbnail?: StringFilter<"Artists"> | string
    genreName?: StringFilter<"Artists"> | string
    description?: StringNullableFilter<"Artists"> | string | null
    albums?: AlbumsListRelationFilter
    tracks?: ArtistsOnTracksListRelationFilter
    genre?: XOR<GenreRelationFilter, GenreWhereInput>
    followers?: UserFollowsArtistsListRelationFilter
  }

  export type ArtistsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    thumbnail?: SortOrder
    genreName?: SortOrder
    description?: SortOrder
    albums?: AlbumsOrderByRelationAggregateInput
    tracks?: ArtistsOnTracksOrderByRelationAggregateInput
    genre?: GenreOrderByWithRelationInput
    followers?: UserFollowsArtistsOrderByRelationAggregateInput
  }

  export type ArtistsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    email?: string
    AND?: ArtistsWhereInput | ArtistsWhereInput[]
    OR?: ArtistsWhereInput[]
    NOT?: ArtistsWhereInput | ArtistsWhereInput[]
    password?: StringFilter<"Artists"> | string
    thumbnail?: StringFilter<"Artists"> | string
    genreName?: StringFilter<"Artists"> | string
    description?: StringNullableFilter<"Artists"> | string | null
    albums?: AlbumsListRelationFilter
    tracks?: ArtistsOnTracksListRelationFilter
    genre?: XOR<GenreRelationFilter, GenreWhereInput>
    followers?: UserFollowsArtistsListRelationFilter
  }, "id" | "name" | "email">

  export type ArtistsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    thumbnail?: SortOrder
    genreName?: SortOrder
    description?: SortOrder
    _count?: ArtistsCountOrderByAggregateInput
    _max?: ArtistsMaxOrderByAggregateInput
    _min?: ArtistsMinOrderByAggregateInput
  }

  export type ArtistsScalarWhereWithAggregatesInput = {
    AND?: ArtistsScalarWhereWithAggregatesInput | ArtistsScalarWhereWithAggregatesInput[]
    OR?: ArtistsScalarWhereWithAggregatesInput[]
    NOT?: ArtistsScalarWhereWithAggregatesInput | ArtistsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Artists"> | string
    name?: StringWithAggregatesFilter<"Artists"> | string
    email?: StringWithAggregatesFilter<"Artists"> | string
    password?: StringWithAggregatesFilter<"Artists"> | string
    thumbnail?: StringWithAggregatesFilter<"Artists"> | string
    genreName?: StringWithAggregatesFilter<"Artists"> | string
    description?: StringNullableWithAggregatesFilter<"Artists"> | string | null
  }

  export type GenreWhereInput = {
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    id?: StringFilter<"Genre"> | string
    name?: StringFilter<"Genre"> | string
    albums?: AlbumsListRelationFilter
    tracks?: TracksListRelationFilter
    artists?: ArtistsListRelationFilter
  }

  export type GenreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    albums?: AlbumsOrderByRelationAggregateInput
    tracks?: TracksOrderByRelationAggregateInput
    artists?: ArtistsOrderByRelationAggregateInput
  }

  export type GenreWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: GenreWhereInput | GenreWhereInput[]
    OR?: GenreWhereInput[]
    NOT?: GenreWhereInput | GenreWhereInput[]
    albums?: AlbumsListRelationFilter
    tracks?: TracksListRelationFilter
    artists?: ArtistsListRelationFilter
  }, "id" | "name">

  export type GenreOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    _count?: GenreCountOrderByAggregateInput
    _max?: GenreMaxOrderByAggregateInput
    _min?: GenreMinOrderByAggregateInput
  }

  export type GenreScalarWhereWithAggregatesInput = {
    AND?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    OR?: GenreScalarWhereWithAggregatesInput[]
    NOT?: GenreScalarWhereWithAggregatesInput | GenreScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Genre"> | string
    name?: StringWithAggregatesFilter<"Genre"> | string
  }

  export type ArtistsOnTracksWhereInput = {
    AND?: ArtistsOnTracksWhereInput | ArtistsOnTracksWhereInput[]
    OR?: ArtistsOnTracksWhereInput[]
    NOT?: ArtistsOnTracksWhereInput | ArtistsOnTracksWhereInput[]
    id?: StringFilter<"ArtistsOnTracks"> | string
    artistName?: StringFilter<"ArtistsOnTracks"> | string
    trackId?: StringFilter<"ArtistsOnTracks"> | string
    artist?: XOR<ArtistsRelationFilter, ArtistsWhereInput>
    track?: XOR<TracksRelationFilter, TracksWhereInput>
  }

  export type ArtistsOnTracksOrderByWithRelationInput = {
    id?: SortOrder
    artistName?: SortOrder
    trackId?: SortOrder
    artist?: ArtistsOrderByWithRelationInput
    track?: TracksOrderByWithRelationInput
  }

  export type ArtistsOnTracksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    artistName_trackId?: ArtistsOnTracksArtistNameTrackIdCompoundUniqueInput
    AND?: ArtistsOnTracksWhereInput | ArtistsOnTracksWhereInput[]
    OR?: ArtistsOnTracksWhereInput[]
    NOT?: ArtistsOnTracksWhereInput | ArtistsOnTracksWhereInput[]
    artistName?: StringFilter<"ArtistsOnTracks"> | string
    trackId?: StringFilter<"ArtistsOnTracks"> | string
    artist?: XOR<ArtistsRelationFilter, ArtistsWhereInput>
    track?: XOR<TracksRelationFilter, TracksWhereInput>
  }, "id" | "artistName_trackId">

  export type ArtistsOnTracksOrderByWithAggregationInput = {
    id?: SortOrder
    artistName?: SortOrder
    trackId?: SortOrder
    _count?: ArtistsOnTracksCountOrderByAggregateInput
    _max?: ArtistsOnTracksMaxOrderByAggregateInput
    _min?: ArtistsOnTracksMinOrderByAggregateInput
  }

  export type ArtistsOnTracksScalarWhereWithAggregatesInput = {
    AND?: ArtistsOnTracksScalarWhereWithAggregatesInput | ArtistsOnTracksScalarWhereWithAggregatesInput[]
    OR?: ArtistsOnTracksScalarWhereWithAggregatesInput[]
    NOT?: ArtistsOnTracksScalarWhereWithAggregatesInput | ArtistsOnTracksScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ArtistsOnTracks"> | string
    artistName?: StringWithAggregatesFilter<"ArtistsOnTracks"> | string
    trackId?: StringWithAggregatesFilter<"ArtistsOnTracks"> | string
  }

  export type TracksOnAlbumsWhereInput = {
    AND?: TracksOnAlbumsWhereInput | TracksOnAlbumsWhereInput[]
    OR?: TracksOnAlbumsWhereInput[]
    NOT?: TracksOnAlbumsWhereInput | TracksOnAlbumsWhereInput[]
    id?: StringFilter<"TracksOnAlbums"> | string
    albumId?: StringFilter<"TracksOnAlbums"> | string
    trackId?: StringFilter<"TracksOnAlbums"> | string
    album?: XOR<AlbumsRelationFilter, AlbumsWhereInput>
    track?: XOR<TracksRelationFilter, TracksWhereInput>
  }

  export type TracksOnAlbumsOrderByWithRelationInput = {
    id?: SortOrder
    albumId?: SortOrder
    trackId?: SortOrder
    album?: AlbumsOrderByWithRelationInput
    track?: TracksOrderByWithRelationInput
  }

  export type TracksOnAlbumsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    albumId_trackId?: TracksOnAlbumsAlbumIdTrackIdCompoundUniqueInput
    AND?: TracksOnAlbumsWhereInput | TracksOnAlbumsWhereInput[]
    OR?: TracksOnAlbumsWhereInput[]
    NOT?: TracksOnAlbumsWhereInput | TracksOnAlbumsWhereInput[]
    albumId?: StringFilter<"TracksOnAlbums"> | string
    trackId?: StringFilter<"TracksOnAlbums"> | string
    album?: XOR<AlbumsRelationFilter, AlbumsWhereInput>
    track?: XOR<TracksRelationFilter, TracksWhereInput>
  }, "id" | "albumId_trackId">

  export type TracksOnAlbumsOrderByWithAggregationInput = {
    id?: SortOrder
    albumId?: SortOrder
    trackId?: SortOrder
    _count?: TracksOnAlbumsCountOrderByAggregateInput
    _max?: TracksOnAlbumsMaxOrderByAggregateInput
    _min?: TracksOnAlbumsMinOrderByAggregateInput
  }

  export type TracksOnAlbumsScalarWhereWithAggregatesInput = {
    AND?: TracksOnAlbumsScalarWhereWithAggregatesInput | TracksOnAlbumsScalarWhereWithAggregatesInput[]
    OR?: TracksOnAlbumsScalarWhereWithAggregatesInput[]
    NOT?: TracksOnAlbumsScalarWhereWithAggregatesInput | TracksOnAlbumsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TracksOnAlbums"> | string
    albumId?: StringWithAggregatesFilter<"TracksOnAlbums"> | string
    trackId?: StringWithAggregatesFilter<"TracksOnAlbums"> | string
  }

  export type UserFavsTracksWhereInput = {
    AND?: UserFavsTracksWhereInput | UserFavsTracksWhereInput[]
    OR?: UserFavsTracksWhereInput[]
    NOT?: UserFavsTracksWhereInput | UserFavsTracksWhereInput[]
    id?: StringFilter<"UserFavsTracks"> | string
    userId?: StringFilter<"UserFavsTracks"> | string
    trackId?: StringFilter<"UserFavsTracks"> | string
    createdAt?: DateTimeFilter<"UserFavsTracks"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    track?: XOR<TracksRelationFilter, TracksWhereInput>
  }

  export type UserFavsTracksOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    trackId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    track?: TracksOrderByWithRelationInput
  }

  export type UserFavsTracksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_trackId?: UserFavsTracksUserIdTrackIdCompoundUniqueInput
    AND?: UserFavsTracksWhereInput | UserFavsTracksWhereInput[]
    OR?: UserFavsTracksWhereInput[]
    NOT?: UserFavsTracksWhereInput | UserFavsTracksWhereInput[]
    userId?: StringFilter<"UserFavsTracks"> | string
    trackId?: StringFilter<"UserFavsTracks"> | string
    createdAt?: DateTimeFilter<"UserFavsTracks"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    track?: XOR<TracksRelationFilter, TracksWhereInput>
  }, "id" | "userId_trackId">

  export type UserFavsTracksOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    trackId?: SortOrder
    createdAt?: SortOrder
    _count?: UserFavsTracksCountOrderByAggregateInput
    _max?: UserFavsTracksMaxOrderByAggregateInput
    _min?: UserFavsTracksMinOrderByAggregateInput
  }

  export type UserFavsTracksScalarWhereWithAggregatesInput = {
    AND?: UserFavsTracksScalarWhereWithAggregatesInput | UserFavsTracksScalarWhereWithAggregatesInput[]
    OR?: UserFavsTracksScalarWhereWithAggregatesInput[]
    NOT?: UserFavsTracksScalarWhereWithAggregatesInput | UserFavsTracksScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserFavsTracks"> | string
    userId?: StringWithAggregatesFilter<"UserFavsTracks"> | string
    trackId?: StringWithAggregatesFilter<"UserFavsTracks"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserFavsTracks"> | Date | string
  }

  export type PlaylistToTrackWhereInput = {
    AND?: PlaylistToTrackWhereInput | PlaylistToTrackWhereInput[]
    OR?: PlaylistToTrackWhereInput[]
    NOT?: PlaylistToTrackWhereInput | PlaylistToTrackWhereInput[]
    id?: StringFilter<"PlaylistToTrack"> | string
    playlistId?: StringFilter<"PlaylistToTrack"> | string
    trackId?: StringFilter<"PlaylistToTrack"> | string
    playlist?: XOR<PlaylistsRelationFilter, PlaylistsWhereInput>
    track?: XOR<TracksRelationFilter, TracksWhereInput>
  }

  export type PlaylistToTrackOrderByWithRelationInput = {
    id?: SortOrder
    playlistId?: SortOrder
    trackId?: SortOrder
    playlist?: PlaylistsOrderByWithRelationInput
    track?: TracksOrderByWithRelationInput
  }

  export type PlaylistToTrackWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    playlistId_trackId?: PlaylistToTrackPlaylistIdTrackIdCompoundUniqueInput
    AND?: PlaylistToTrackWhereInput | PlaylistToTrackWhereInput[]
    OR?: PlaylistToTrackWhereInput[]
    NOT?: PlaylistToTrackWhereInput | PlaylistToTrackWhereInput[]
    playlistId?: StringFilter<"PlaylistToTrack"> | string
    trackId?: StringFilter<"PlaylistToTrack"> | string
    playlist?: XOR<PlaylistsRelationFilter, PlaylistsWhereInput>
    track?: XOR<TracksRelationFilter, TracksWhereInput>
  }, "id" | "playlistId_trackId">

  export type PlaylistToTrackOrderByWithAggregationInput = {
    id?: SortOrder
    playlistId?: SortOrder
    trackId?: SortOrder
    _count?: PlaylistToTrackCountOrderByAggregateInput
    _max?: PlaylistToTrackMaxOrderByAggregateInput
    _min?: PlaylistToTrackMinOrderByAggregateInput
  }

  export type PlaylistToTrackScalarWhereWithAggregatesInput = {
    AND?: PlaylistToTrackScalarWhereWithAggregatesInput | PlaylistToTrackScalarWhereWithAggregatesInput[]
    OR?: PlaylistToTrackScalarWhereWithAggregatesInput[]
    NOT?: PlaylistToTrackScalarWhereWithAggregatesInput | PlaylistToTrackScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PlaylistToTrack"> | string
    playlistId?: StringWithAggregatesFilter<"PlaylistToTrack"> | string
    trackId?: StringWithAggregatesFilter<"PlaylistToTrack"> | string
  }

  export type UserFollowsPlaylistsWhereInput = {
    AND?: UserFollowsPlaylistsWhereInput | UserFollowsPlaylistsWhereInput[]
    OR?: UserFollowsPlaylistsWhereInput[]
    NOT?: UserFollowsPlaylistsWhereInput | UserFollowsPlaylistsWhereInput[]
    id?: StringFilter<"UserFollowsPlaylists"> | string
    userId?: StringFilter<"UserFollowsPlaylists"> | string
    playlistId?: StringFilter<"UserFollowsPlaylists"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    playlist?: XOR<PlaylistsRelationFilter, PlaylistsWhereInput>
  }

  export type UserFollowsPlaylistsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    playlistId?: SortOrder
    user?: UserOrderByWithRelationInput
    playlist?: PlaylistsOrderByWithRelationInput
  }

  export type UserFollowsPlaylistsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_playlistId?: UserFollowsPlaylistsUserIdPlaylistIdCompoundUniqueInput
    AND?: UserFollowsPlaylistsWhereInput | UserFollowsPlaylistsWhereInput[]
    OR?: UserFollowsPlaylistsWhereInput[]
    NOT?: UserFollowsPlaylistsWhereInput | UserFollowsPlaylistsWhereInput[]
    userId?: StringFilter<"UserFollowsPlaylists"> | string
    playlistId?: StringFilter<"UserFollowsPlaylists"> | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    playlist?: XOR<PlaylistsRelationFilter, PlaylistsWhereInput>
  }, "id" | "userId_playlistId">

  export type UserFollowsPlaylistsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    playlistId?: SortOrder
    _count?: UserFollowsPlaylistsCountOrderByAggregateInput
    _max?: UserFollowsPlaylistsMaxOrderByAggregateInput
    _min?: UserFollowsPlaylistsMinOrderByAggregateInput
  }

  export type UserFollowsPlaylistsScalarWhereWithAggregatesInput = {
    AND?: UserFollowsPlaylistsScalarWhereWithAggregatesInput | UserFollowsPlaylistsScalarWhereWithAggregatesInput[]
    OR?: UserFollowsPlaylistsScalarWhereWithAggregatesInput[]
    NOT?: UserFollowsPlaylistsScalarWhereWithAggregatesInput | UserFollowsPlaylistsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserFollowsPlaylists"> | string
    userId?: StringWithAggregatesFilter<"UserFollowsPlaylists"> | string
    playlistId?: StringWithAggregatesFilter<"UserFollowsPlaylists"> | string
  }

  export type UserFollowsArtistsWhereInput = {
    AND?: UserFollowsArtistsWhereInput | UserFollowsArtistsWhereInput[]
    OR?: UserFollowsArtistsWhereInput[]
    NOT?: UserFollowsArtistsWhereInput | UserFollowsArtistsWhereInput[]
    id?: StringFilter<"UserFollowsArtists"> | string
    userId?: StringFilter<"UserFollowsArtists"> | string
    artistId?: StringFilter<"UserFollowsArtists"> | string
    createdAt?: DateTimeFilter<"UserFollowsArtists"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    artist?: XOR<ArtistsRelationFilter, ArtistsWhereInput>
  }

  export type UserFollowsArtistsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    artistId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    artist?: ArtistsOrderByWithRelationInput
  }

  export type UserFollowsArtistsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_artistId?: UserFollowsArtistsUserIdArtistIdCompoundUniqueInput
    AND?: UserFollowsArtistsWhereInput | UserFollowsArtistsWhereInput[]
    OR?: UserFollowsArtistsWhereInput[]
    NOT?: UserFollowsArtistsWhereInput | UserFollowsArtistsWhereInput[]
    userId?: StringFilter<"UserFollowsArtists"> | string
    artistId?: StringFilter<"UserFollowsArtists"> | string
    createdAt?: DateTimeFilter<"UserFollowsArtists"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    artist?: XOR<ArtistsRelationFilter, ArtistsWhereInput>
  }, "id" | "userId_artistId">

  export type UserFollowsArtistsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    artistId?: SortOrder
    createdAt?: SortOrder
    _count?: UserFollowsArtistsCountOrderByAggregateInput
    _max?: UserFollowsArtistsMaxOrderByAggregateInput
    _min?: UserFollowsArtistsMinOrderByAggregateInput
  }

  export type UserFollowsArtistsScalarWhereWithAggregatesInput = {
    AND?: UserFollowsArtistsScalarWhereWithAggregatesInput | UserFollowsArtistsScalarWhereWithAggregatesInput[]
    OR?: UserFollowsArtistsScalarWhereWithAggregatesInput[]
    NOT?: UserFollowsArtistsScalarWhereWithAggregatesInput | UserFollowsArtistsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserFollowsArtists"> | string
    userId?: StringWithAggregatesFilter<"UserFollowsArtists"> | string
    artistId?: StringWithAggregatesFilter<"UserFollowsArtists"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserFollowsArtists"> | Date | string
  }

  export type UserLikedAlbumsWhereInput = {
    AND?: UserLikedAlbumsWhereInput | UserLikedAlbumsWhereInput[]
    OR?: UserLikedAlbumsWhereInput[]
    NOT?: UserLikedAlbumsWhereInput | UserLikedAlbumsWhereInput[]
    id?: StringFilter<"UserLikedAlbums"> | string
    userId?: StringFilter<"UserLikedAlbums"> | string
    albumId?: StringFilter<"UserLikedAlbums"> | string
    createdAt?: DateTimeFilter<"UserLikedAlbums"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    album?: XOR<AlbumsRelationFilter, AlbumsWhereInput>
  }

  export type UserLikedAlbumsOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    albumId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    album?: AlbumsOrderByWithRelationInput
  }

  export type UserLikedAlbumsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_albumId?: UserLikedAlbumsUserIdAlbumIdCompoundUniqueInput
    AND?: UserLikedAlbumsWhereInput | UserLikedAlbumsWhereInput[]
    OR?: UserLikedAlbumsWhereInput[]
    NOT?: UserLikedAlbumsWhereInput | UserLikedAlbumsWhereInput[]
    userId?: StringFilter<"UserLikedAlbums"> | string
    albumId?: StringFilter<"UserLikedAlbums"> | string
    createdAt?: DateTimeFilter<"UserLikedAlbums"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
    album?: XOR<AlbumsRelationFilter, AlbumsWhereInput>
  }, "id" | "userId_albumId">

  export type UserLikedAlbumsOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    albumId?: SortOrder
    createdAt?: SortOrder
    _count?: UserLikedAlbumsCountOrderByAggregateInput
    _max?: UserLikedAlbumsMaxOrderByAggregateInput
    _min?: UserLikedAlbumsMinOrderByAggregateInput
  }

  export type UserLikedAlbumsScalarWhereWithAggregatesInput = {
    AND?: UserLikedAlbumsScalarWhereWithAggregatesInput | UserLikedAlbumsScalarWhereWithAggregatesInput[]
    OR?: UserLikedAlbumsScalarWhereWithAggregatesInput[]
    NOT?: UserLikedAlbumsScalarWhereWithAggregatesInput | UserLikedAlbumsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserLikedAlbums"> | string
    userId?: StringWithAggregatesFilter<"UserLikedAlbums"> | string
    albumId?: StringWithAggregatesFilter<"UserLikedAlbums"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserLikedAlbums"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    image?: string
    role?: string
    name?: string | null
    gender?: string | null
    birthDate?: string | null
    country?: string | null
    likedAlbums?: UserLikedAlbumsCreateNestedManyWithoutUserInput
    artistsFollowed?: UserFollowsArtistsCreateNestedManyWithoutUserInput
    followedPlaylists?: UserFollowsPlaylistsCreateNestedManyWithoutUserInput
    createdPlaylists?: PlaylistsCreateNestedManyWithoutUserInput
    favTracks?: UserFavsTracksCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    image?: string
    role?: string
    name?: string | null
    gender?: string | null
    birthDate?: string | null
    country?: string | null
    likedAlbums?: UserLikedAlbumsUncheckedCreateNestedManyWithoutUserInput
    artistsFollowed?: UserFollowsArtistsUncheckedCreateNestedManyWithoutUserInput
    followedPlaylists?: UserFollowsPlaylistsUncheckedCreateNestedManyWithoutUserInput
    createdPlaylists?: PlaylistsUncheckedCreateNestedManyWithoutUserInput
    favTracks?: UserFavsTracksUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    likedAlbums?: UserLikedAlbumsUpdateManyWithoutUserNestedInput
    artistsFollowed?: UserFollowsArtistsUpdateManyWithoutUserNestedInput
    followedPlaylists?: UserFollowsPlaylistsUpdateManyWithoutUserNestedInput
    createdPlaylists?: PlaylistsUpdateManyWithoutUserNestedInput
    favTracks?: UserFavsTracksUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    likedAlbums?: UserLikedAlbumsUncheckedUpdateManyWithoutUserNestedInput
    artistsFollowed?: UserFollowsArtistsUncheckedUpdateManyWithoutUserNestedInput
    followedPlaylists?: UserFollowsPlaylistsUncheckedUpdateManyWithoutUserNestedInput
    createdPlaylists?: PlaylistsUncheckedUpdateManyWithoutUserNestedInput
    favTracks?: UserFavsTracksUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    image?: string
    role?: string
    name?: string | null
    gender?: string | null
    birthDate?: string | null
    country?: string | null
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TracksCreateInput = {
    id?: string
    name: string
    url: string
    thumbnail: string
    artist?: ArtistsOnTracksCreateNestedManyWithoutTrackInput
    genre: GenreCreateNestedOneWithoutTracksInput
    album?: TracksOnAlbumsCreateNestedManyWithoutTrackInput
    playlistConnections?: PlaylistToTrackCreateNestedManyWithoutTrackInput
    favsOfUsers?: UserFavsTracksCreateNestedManyWithoutTrackInput
  }

  export type TracksUncheckedCreateInput = {
    id?: string
    name: string
    url: string
    thumbnail: string
    genreName: string
    artist?: ArtistsOnTracksUncheckedCreateNestedManyWithoutTrackInput
    album?: TracksOnAlbumsUncheckedCreateNestedManyWithoutTrackInput
    playlistConnections?: PlaylistToTrackUncheckedCreateNestedManyWithoutTrackInput
    favsOfUsers?: UserFavsTracksUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TracksUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    artist?: ArtistsOnTracksUpdateManyWithoutTrackNestedInput
    genre?: GenreUpdateOneRequiredWithoutTracksNestedInput
    album?: TracksOnAlbumsUpdateManyWithoutTrackNestedInput
    playlistConnections?: PlaylistToTrackUpdateManyWithoutTrackNestedInput
    favsOfUsers?: UserFavsTracksUpdateManyWithoutTrackNestedInput
  }

  export type TracksUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreName?: StringFieldUpdateOperationsInput | string
    artist?: ArtistsOnTracksUncheckedUpdateManyWithoutTrackNestedInput
    album?: TracksOnAlbumsUncheckedUpdateManyWithoutTrackNestedInput
    playlistConnections?: PlaylistToTrackUncheckedUpdateManyWithoutTrackNestedInput
    favsOfUsers?: UserFavsTracksUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type TracksCreateManyInput = {
    id?: string
    name: string
    url: string
    thumbnail: string
    genreName: string
  }

  export type TracksUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
  }

  export type TracksUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreName?: StringFieldUpdateOperationsInput | string
  }

  export type AlbumsCreateInput = {
    id?: string
    name: string
    thumbnail: string
    artist: ArtistsCreateNestedOneWithoutAlbumsInput
    tracks?: TracksOnAlbumsCreateNestedManyWithoutAlbumInput
    genre: GenreCreateNestedOneWithoutAlbumsInput
    likedByUsers?: UserLikedAlbumsCreateNestedManyWithoutAlbumInput
  }

  export type AlbumsUncheckedCreateInput = {
    id?: string
    name: string
    artistName: string
    thumbnail: string
    genreName: string
    tracks?: TracksOnAlbumsUncheckedCreateNestedManyWithoutAlbumInput
    likedByUsers?: UserLikedAlbumsUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    artist?: ArtistsUpdateOneRequiredWithoutAlbumsNestedInput
    tracks?: TracksOnAlbumsUpdateManyWithoutAlbumNestedInput
    genre?: GenreUpdateOneRequiredWithoutAlbumsNestedInput
    likedByUsers?: UserLikedAlbumsUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumsUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    artistName?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreName?: StringFieldUpdateOperationsInput | string
    tracks?: TracksOnAlbumsUncheckedUpdateManyWithoutAlbumNestedInput
    likedByUsers?: UserLikedAlbumsUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumsCreateManyInput = {
    id?: string
    name: string
    artistName: string
    thumbnail: string
    genreName: string
  }

  export type AlbumsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
  }

  export type AlbumsUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    artistName?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreName?: StringFieldUpdateOperationsInput | string
  }

  export type PlaylistsCreateInput = {
    id?: string
    name: string
    thumbnail: string
    publicAccess?: boolean
    user: UserCreateNestedOneWithoutCreatedPlaylistsInput
    followers?: UserFollowsPlaylistsCreateNestedManyWithoutPlaylistInput
    tracksConnections?: PlaylistToTrackCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistsUncheckedCreateInput = {
    id?: string
    name: string
    thumbnail: string
    publicAccess?: boolean
    userId: string
    followers?: UserFollowsPlaylistsUncheckedCreateNestedManyWithoutPlaylistInput
    tracksConnections?: PlaylistToTrackUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    publicAccess?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutCreatedPlaylistsNestedInput
    followers?: UserFollowsPlaylistsUpdateManyWithoutPlaylistNestedInput
    tracksConnections?: PlaylistToTrackUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistsUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    publicAccess?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    followers?: UserFollowsPlaylistsUncheckedUpdateManyWithoutPlaylistNestedInput
    tracksConnections?: PlaylistToTrackUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistsCreateManyInput = {
    id?: string
    name: string
    thumbnail: string
    publicAccess?: boolean
    userId: string
  }

  export type PlaylistsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    publicAccess?: BoolFieldUpdateOperationsInput | boolean
  }

  export type PlaylistsUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    publicAccess?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistsCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    thumbnail?: string
    description?: string | null
    albums?: AlbumsCreateNestedManyWithoutArtistInput
    tracks?: ArtistsOnTracksCreateNestedManyWithoutArtistInput
    genre: GenreCreateNestedOneWithoutArtistsInput
    followers?: UserFollowsArtistsCreateNestedManyWithoutArtistInput
  }

  export type ArtistsUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    thumbnail?: string
    genreName: string
    description?: string | null
    albums?: AlbumsUncheckedCreateNestedManyWithoutArtistInput
    tracks?: ArtistsOnTracksUncheckedCreateNestedManyWithoutArtistInput
    followers?: UserFollowsArtistsUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    albums?: AlbumsUpdateManyWithoutArtistNestedInput
    tracks?: ArtistsOnTracksUpdateManyWithoutArtistNestedInput
    genre?: GenreUpdateOneRequiredWithoutArtistsNestedInput
    followers?: UserFollowsArtistsUpdateManyWithoutArtistNestedInput
  }

  export type ArtistsUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    albums?: AlbumsUncheckedUpdateManyWithoutArtistNestedInput
    tracks?: ArtistsOnTracksUncheckedUpdateManyWithoutArtistNestedInput
    followers?: UserFollowsArtistsUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type ArtistsCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    thumbnail?: string
    genreName: string
    description?: string | null
  }

  export type ArtistsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArtistsUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type GenreCreateInput = {
    id?: string
    name: string
    albums?: AlbumsCreateNestedManyWithoutGenreInput
    tracks?: TracksCreateNestedManyWithoutGenreInput
    artists?: ArtistsCreateNestedManyWithoutGenreInput
  }

  export type GenreUncheckedCreateInput = {
    id?: string
    name: string
    albums?: AlbumsUncheckedCreateNestedManyWithoutGenreInput
    tracks?: TracksUncheckedCreateNestedManyWithoutGenreInput
    artists?: ArtistsUncheckedCreateNestedManyWithoutGenreInput
  }

  export type GenreUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    albums?: AlbumsUpdateManyWithoutGenreNestedInput
    tracks?: TracksUpdateManyWithoutGenreNestedInput
    artists?: ArtistsUpdateManyWithoutGenreNestedInput
  }

  export type GenreUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    albums?: AlbumsUncheckedUpdateManyWithoutGenreNestedInput
    tracks?: TracksUncheckedUpdateManyWithoutGenreNestedInput
    artists?: ArtistsUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type GenreCreateManyInput = {
    id?: string
    name: string
  }

  export type GenreUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type GenreUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistsOnTracksCreateInput = {
    id?: string
    artist: ArtistsCreateNestedOneWithoutTracksInput
    track: TracksCreateNestedOneWithoutArtistInput
  }

  export type ArtistsOnTracksUncheckedCreateInput = {
    id?: string
    artistName: string
    trackId: string
  }

  export type ArtistsOnTracksUpdateInput = {
    artist?: ArtistsUpdateOneRequiredWithoutTracksNestedInput
    track?: TracksUpdateOneRequiredWithoutArtistNestedInput
  }

  export type ArtistsOnTracksUncheckedUpdateInput = {
    artistName?: StringFieldUpdateOperationsInput | string
    trackId?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistsOnTracksCreateManyInput = {
    id?: string
    artistName: string
    trackId: string
  }

  export type ArtistsOnTracksUpdateManyMutationInput = {

  }

  export type ArtistsOnTracksUncheckedUpdateManyInput = {
    artistName?: StringFieldUpdateOperationsInput | string
    trackId?: StringFieldUpdateOperationsInput | string
  }

  export type TracksOnAlbumsCreateInput = {
    id?: string
    album: AlbumsCreateNestedOneWithoutTracksInput
    track: TracksCreateNestedOneWithoutAlbumInput
  }

  export type TracksOnAlbumsUncheckedCreateInput = {
    id?: string
    albumId: string
    trackId: string
  }

  export type TracksOnAlbumsUpdateInput = {
    album?: AlbumsUpdateOneRequiredWithoutTracksNestedInput
    track?: TracksUpdateOneRequiredWithoutAlbumNestedInput
  }

  export type TracksOnAlbumsUncheckedUpdateInput = {
    albumId?: StringFieldUpdateOperationsInput | string
    trackId?: StringFieldUpdateOperationsInput | string
  }

  export type TracksOnAlbumsCreateManyInput = {
    id?: string
    albumId: string
    trackId: string
  }

  export type TracksOnAlbumsUpdateManyMutationInput = {

  }

  export type TracksOnAlbumsUncheckedUpdateManyInput = {
    albumId?: StringFieldUpdateOperationsInput | string
    trackId?: StringFieldUpdateOperationsInput | string
  }

  export type UserFavsTracksCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavTracksInput
    track: TracksCreateNestedOneWithoutFavsOfUsersInput
  }

  export type UserFavsTracksUncheckedCreateInput = {
    id?: string
    userId: string
    trackId: string
    createdAt?: Date | string
  }

  export type UserFavsTracksUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavTracksNestedInput
    track?: TracksUpdateOneRequiredWithoutFavsOfUsersNestedInput
  }

  export type UserFavsTracksUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    trackId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavsTracksCreateManyInput = {
    id?: string
    userId: string
    trackId: string
    createdAt?: Date | string
  }

  export type UserFavsTracksUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavsTracksUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    trackId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlaylistToTrackCreateInput = {
    id?: string
    playlist: PlaylistsCreateNestedOneWithoutTracksConnectionsInput
    track: TracksCreateNestedOneWithoutPlaylistConnectionsInput
  }

  export type PlaylistToTrackUncheckedCreateInput = {
    id?: string
    playlistId: string
    trackId: string
  }

  export type PlaylistToTrackUpdateInput = {
    playlist?: PlaylistsUpdateOneRequiredWithoutTracksConnectionsNestedInput
    track?: TracksUpdateOneRequiredWithoutPlaylistConnectionsNestedInput
  }

  export type PlaylistToTrackUncheckedUpdateInput = {
    playlistId?: StringFieldUpdateOperationsInput | string
    trackId?: StringFieldUpdateOperationsInput | string
  }

  export type PlaylistToTrackCreateManyInput = {
    id?: string
    playlistId: string
    trackId: string
  }

  export type PlaylistToTrackUpdateManyMutationInput = {

  }

  export type PlaylistToTrackUncheckedUpdateManyInput = {
    playlistId?: StringFieldUpdateOperationsInput | string
    trackId?: StringFieldUpdateOperationsInput | string
  }

  export type UserFollowsPlaylistsCreateInput = {
    id?: string
    user: UserCreateNestedOneWithoutFollowedPlaylistsInput
    playlist: PlaylistsCreateNestedOneWithoutFollowersInput
  }

  export type UserFollowsPlaylistsUncheckedCreateInput = {
    id?: string
    userId: string
    playlistId: string
  }

  export type UserFollowsPlaylistsUpdateInput = {
    user?: UserUpdateOneRequiredWithoutFollowedPlaylistsNestedInput
    playlist?: PlaylistsUpdateOneRequiredWithoutFollowersNestedInput
  }

  export type UserFollowsPlaylistsUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
  }

  export type UserFollowsPlaylistsCreateManyInput = {
    id?: string
    userId: string
    playlistId: string
  }

  export type UserFollowsPlaylistsUpdateManyMutationInput = {

  }

  export type UserFollowsPlaylistsUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    playlistId?: StringFieldUpdateOperationsInput | string
  }

  export type UserFollowsArtistsCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutArtistsFollowedInput
    artist: ArtistsCreateNestedOneWithoutFollowersInput
  }

  export type UserFollowsArtistsUncheckedCreateInput = {
    id?: string
    userId: string
    artistId: string
    createdAt?: Date | string
  }

  export type UserFollowsArtistsUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutArtistsFollowedNestedInput
    artist?: ArtistsUpdateOneRequiredWithoutFollowersNestedInput
  }

  export type UserFollowsArtistsUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    artistId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFollowsArtistsCreateManyInput = {
    id?: string
    userId: string
    artistId: string
    createdAt?: Date | string
  }

  export type UserFollowsArtistsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFollowsArtistsUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    artistId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLikedAlbumsCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLikedAlbumsInput
    album: AlbumsCreateNestedOneWithoutLikedByUsersInput
  }

  export type UserLikedAlbumsUncheckedCreateInput = {
    id?: string
    userId: string
    albumId: string
    createdAt?: Date | string
  }

  export type UserLikedAlbumsUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikedAlbumsNestedInput
    album?: AlbumsUpdateOneRequiredWithoutLikedByUsersNestedInput
  }

  export type UserLikedAlbumsUncheckedUpdateInput = {
    userId?: StringFieldUpdateOperationsInput | string
    albumId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLikedAlbumsCreateManyInput = {
    id?: string
    userId: string
    albumId: string
    createdAt?: Date | string
  }

  export type UserLikedAlbumsUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLikedAlbumsUncheckedUpdateManyInput = {
    userId?: StringFieldUpdateOperationsInput | string
    albumId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type UserLikedAlbumsListRelationFilter = {
    every?: UserLikedAlbumsWhereInput
    some?: UserLikedAlbumsWhereInput
    none?: UserLikedAlbumsWhereInput
  }

  export type UserFollowsArtistsListRelationFilter = {
    every?: UserFollowsArtistsWhereInput
    some?: UserFollowsArtistsWhereInput
    none?: UserFollowsArtistsWhereInput
  }

  export type UserFollowsPlaylistsListRelationFilter = {
    every?: UserFollowsPlaylistsWhereInput
    some?: UserFollowsPlaylistsWhereInput
    none?: UserFollowsPlaylistsWhereInput
  }

  export type PlaylistsListRelationFilter = {
    every?: PlaylistsWhereInput
    some?: PlaylistsWhereInput
    none?: PlaylistsWhereInput
  }

  export type UserFavsTracksListRelationFilter = {
    every?: UserFavsTracksWhereInput
    some?: UserFavsTracksWhereInput
    none?: UserFavsTracksWhereInput
  }

  export type UserLikedAlbumsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserFollowsArtistsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserFollowsPlaylistsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlaylistsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserFavsTracksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    role?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    country?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    role?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    country?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    image?: SortOrder
    role?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    country?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type ArtistsOnTracksListRelationFilter = {
    every?: ArtistsOnTracksWhereInput
    some?: ArtistsOnTracksWhereInput
    none?: ArtistsOnTracksWhereInput
  }

  export type GenreRelationFilter = {
    is?: GenreWhereInput
    isNot?: GenreWhereInput
  }

  export type TracksOnAlbumsListRelationFilter = {
    every?: TracksOnAlbumsWhereInput
    some?: TracksOnAlbumsWhereInput
    none?: TracksOnAlbumsWhereInput
  }

  export type PlaylistToTrackListRelationFilter = {
    every?: PlaylistToTrackWhereInput
    some?: PlaylistToTrackWhereInput
    none?: PlaylistToTrackWhereInput
  }

  export type ArtistsOnTracksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TracksOnAlbumsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlaylistToTrackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TracksCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    thumbnail?: SortOrder
    genreName?: SortOrder
  }

  export type TracksMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    thumbnail?: SortOrder
    genreName?: SortOrder
  }

  export type TracksMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    url?: SortOrder
    thumbnail?: SortOrder
    genreName?: SortOrder
  }

  export type ArtistsRelationFilter = {
    is?: ArtistsWhereInput
    isNot?: ArtistsWhereInput
  }

  export type AlbumsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    artistName?: SortOrder
    thumbnail?: SortOrder
    genreName?: SortOrder
  }

  export type AlbumsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    artistName?: SortOrder
    thumbnail?: SortOrder
    genreName?: SortOrder
  }

  export type AlbumsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    artistName?: SortOrder
    thumbnail?: SortOrder
    genreName?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PlaylistsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    thumbnail?: SortOrder
    publicAccess?: SortOrder
    userId?: SortOrder
  }

  export type PlaylistsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    thumbnail?: SortOrder
    publicAccess?: SortOrder
    userId?: SortOrder
  }

  export type PlaylistsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    thumbnail?: SortOrder
    publicAccess?: SortOrder
    userId?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type AlbumsListRelationFilter = {
    every?: AlbumsWhereInput
    some?: AlbumsWhereInput
    none?: AlbumsWhereInput
  }

  export type AlbumsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArtistsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    thumbnail?: SortOrder
    genreName?: SortOrder
    description?: SortOrder
  }

  export type ArtistsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    thumbnail?: SortOrder
    genreName?: SortOrder
    description?: SortOrder
  }

  export type ArtistsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    thumbnail?: SortOrder
    genreName?: SortOrder
    description?: SortOrder
  }

  export type TracksListRelationFilter = {
    every?: TracksWhereInput
    some?: TracksWhereInput
    none?: TracksWhereInput
  }

  export type ArtistsListRelationFilter = {
    every?: ArtistsWhereInput
    some?: ArtistsWhereInput
    none?: ArtistsWhereInput
  }

  export type TracksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArtistsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type GenreCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenreMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type GenreMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
  }

  export type TracksRelationFilter = {
    is?: TracksWhereInput
    isNot?: TracksWhereInput
  }

  export type ArtistsOnTracksArtistNameTrackIdCompoundUniqueInput = {
    artistName: string
    trackId: string
  }

  export type ArtistsOnTracksCountOrderByAggregateInput = {
    id?: SortOrder
    artistName?: SortOrder
    trackId?: SortOrder
  }

  export type ArtistsOnTracksMaxOrderByAggregateInput = {
    id?: SortOrder
    artistName?: SortOrder
    trackId?: SortOrder
  }

  export type ArtistsOnTracksMinOrderByAggregateInput = {
    id?: SortOrder
    artistName?: SortOrder
    trackId?: SortOrder
  }

  export type AlbumsRelationFilter = {
    is?: AlbumsWhereInput
    isNot?: AlbumsWhereInput
  }

  export type TracksOnAlbumsAlbumIdTrackIdCompoundUniqueInput = {
    albumId: string
    trackId: string
  }

  export type TracksOnAlbumsCountOrderByAggregateInput = {
    id?: SortOrder
    albumId?: SortOrder
    trackId?: SortOrder
  }

  export type TracksOnAlbumsMaxOrderByAggregateInput = {
    id?: SortOrder
    albumId?: SortOrder
    trackId?: SortOrder
  }

  export type TracksOnAlbumsMinOrderByAggregateInput = {
    id?: SortOrder
    albumId?: SortOrder
    trackId?: SortOrder
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserFavsTracksUserIdTrackIdCompoundUniqueInput = {
    userId: string
    trackId: string
  }

  export type UserFavsTracksCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    trackId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserFavsTracksMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    trackId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserFavsTracksMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    trackId?: SortOrder
    createdAt?: SortOrder
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type PlaylistsRelationFilter = {
    is?: PlaylistsWhereInput
    isNot?: PlaylistsWhereInput
  }

  export type PlaylistToTrackPlaylistIdTrackIdCompoundUniqueInput = {
    playlistId: string
    trackId: string
  }

  export type PlaylistToTrackCountOrderByAggregateInput = {
    id?: SortOrder
    playlistId?: SortOrder
    trackId?: SortOrder
  }

  export type PlaylistToTrackMaxOrderByAggregateInput = {
    id?: SortOrder
    playlistId?: SortOrder
    trackId?: SortOrder
  }

  export type PlaylistToTrackMinOrderByAggregateInput = {
    id?: SortOrder
    playlistId?: SortOrder
    trackId?: SortOrder
  }

  export type UserFollowsPlaylistsUserIdPlaylistIdCompoundUniqueInput = {
    userId: string
    playlistId: string
  }

  export type UserFollowsPlaylistsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    playlistId?: SortOrder
  }

  export type UserFollowsPlaylistsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    playlistId?: SortOrder
  }

  export type UserFollowsPlaylistsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    playlistId?: SortOrder
  }

  export type UserFollowsArtistsUserIdArtistIdCompoundUniqueInput = {
    userId: string
    artistId: string
  }

  export type UserFollowsArtistsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    artistId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserFollowsArtistsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    artistId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserFollowsArtistsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    artistId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserLikedAlbumsUserIdAlbumIdCompoundUniqueInput = {
    userId: string
    albumId: string
  }

  export type UserLikedAlbumsCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    albumId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserLikedAlbumsMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    albumId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserLikedAlbumsMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    albumId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserLikedAlbumsCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLikedAlbumsCreateWithoutUserInput, UserLikedAlbumsUncheckedCreateWithoutUserInput> | UserLikedAlbumsCreateWithoutUserInput[] | UserLikedAlbumsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLikedAlbumsCreateOrConnectWithoutUserInput | UserLikedAlbumsCreateOrConnectWithoutUserInput[]
    createMany?: UserLikedAlbumsCreateManyUserInputEnvelope
    connect?: UserLikedAlbumsWhereUniqueInput | UserLikedAlbumsWhereUniqueInput[]
  }

  export type UserFollowsArtistsCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFollowsArtistsCreateWithoutUserInput, UserFollowsArtistsUncheckedCreateWithoutUserInput> | UserFollowsArtistsCreateWithoutUserInput[] | UserFollowsArtistsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFollowsArtistsCreateOrConnectWithoutUserInput | UserFollowsArtistsCreateOrConnectWithoutUserInput[]
    createMany?: UserFollowsArtistsCreateManyUserInputEnvelope
    connect?: UserFollowsArtistsWhereUniqueInput | UserFollowsArtistsWhereUniqueInput[]
  }

  export type UserFollowsPlaylistsCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFollowsPlaylistsCreateWithoutUserInput, UserFollowsPlaylistsUncheckedCreateWithoutUserInput> | UserFollowsPlaylistsCreateWithoutUserInput[] | UserFollowsPlaylistsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFollowsPlaylistsCreateOrConnectWithoutUserInput | UserFollowsPlaylistsCreateOrConnectWithoutUserInput[]
    createMany?: UserFollowsPlaylistsCreateManyUserInputEnvelope
    connect?: UserFollowsPlaylistsWhereUniqueInput | UserFollowsPlaylistsWhereUniqueInput[]
  }

  export type PlaylistsCreateNestedManyWithoutUserInput = {
    create?: XOR<PlaylistsCreateWithoutUserInput, PlaylistsUncheckedCreateWithoutUserInput> | PlaylistsCreateWithoutUserInput[] | PlaylistsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistsCreateOrConnectWithoutUserInput | PlaylistsCreateOrConnectWithoutUserInput[]
    createMany?: PlaylistsCreateManyUserInputEnvelope
    connect?: PlaylistsWhereUniqueInput | PlaylistsWhereUniqueInput[]
  }

  export type UserFavsTracksCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFavsTracksCreateWithoutUserInput, UserFavsTracksUncheckedCreateWithoutUserInput> | UserFavsTracksCreateWithoutUserInput[] | UserFavsTracksUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFavsTracksCreateOrConnectWithoutUserInput | UserFavsTracksCreateOrConnectWithoutUserInput[]
    createMany?: UserFavsTracksCreateManyUserInputEnvelope
    connect?: UserFavsTracksWhereUniqueInput | UserFavsTracksWhereUniqueInput[]
  }

  export type UserLikedAlbumsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserLikedAlbumsCreateWithoutUserInput, UserLikedAlbumsUncheckedCreateWithoutUserInput> | UserLikedAlbumsCreateWithoutUserInput[] | UserLikedAlbumsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLikedAlbumsCreateOrConnectWithoutUserInput | UserLikedAlbumsCreateOrConnectWithoutUserInput[]
    createMany?: UserLikedAlbumsCreateManyUserInputEnvelope
    connect?: UserLikedAlbumsWhereUniqueInput | UserLikedAlbumsWhereUniqueInput[]
  }

  export type UserFollowsArtistsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFollowsArtistsCreateWithoutUserInput, UserFollowsArtistsUncheckedCreateWithoutUserInput> | UserFollowsArtistsCreateWithoutUserInput[] | UserFollowsArtistsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFollowsArtistsCreateOrConnectWithoutUserInput | UserFollowsArtistsCreateOrConnectWithoutUserInput[]
    createMany?: UserFollowsArtistsCreateManyUserInputEnvelope
    connect?: UserFollowsArtistsWhereUniqueInput | UserFollowsArtistsWhereUniqueInput[]
  }

  export type UserFollowsPlaylistsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFollowsPlaylistsCreateWithoutUserInput, UserFollowsPlaylistsUncheckedCreateWithoutUserInput> | UserFollowsPlaylistsCreateWithoutUserInput[] | UserFollowsPlaylistsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFollowsPlaylistsCreateOrConnectWithoutUserInput | UserFollowsPlaylistsCreateOrConnectWithoutUserInput[]
    createMany?: UserFollowsPlaylistsCreateManyUserInputEnvelope
    connect?: UserFollowsPlaylistsWhereUniqueInput | UserFollowsPlaylistsWhereUniqueInput[]
  }

  export type PlaylistsUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<PlaylistsCreateWithoutUserInput, PlaylistsUncheckedCreateWithoutUserInput> | PlaylistsCreateWithoutUserInput[] | PlaylistsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistsCreateOrConnectWithoutUserInput | PlaylistsCreateOrConnectWithoutUserInput[]
    createMany?: PlaylistsCreateManyUserInputEnvelope
    connect?: PlaylistsWhereUniqueInput | PlaylistsWhereUniqueInput[]
  }

  export type UserFavsTracksUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserFavsTracksCreateWithoutUserInput, UserFavsTracksUncheckedCreateWithoutUserInput> | UserFavsTracksCreateWithoutUserInput[] | UserFavsTracksUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFavsTracksCreateOrConnectWithoutUserInput | UserFavsTracksCreateOrConnectWithoutUserInput[]
    createMany?: UserFavsTracksCreateManyUserInputEnvelope
    connect?: UserFavsTracksWhereUniqueInput | UserFavsTracksWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
    unset?: boolean
  }

  export type UserLikedAlbumsUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserLikedAlbumsCreateWithoutUserInput, UserLikedAlbumsUncheckedCreateWithoutUserInput> | UserLikedAlbumsCreateWithoutUserInput[] | UserLikedAlbumsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLikedAlbumsCreateOrConnectWithoutUserInput | UserLikedAlbumsCreateOrConnectWithoutUserInput[]
    upsert?: UserLikedAlbumsUpsertWithWhereUniqueWithoutUserInput | UserLikedAlbumsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserLikedAlbumsCreateManyUserInputEnvelope
    set?: UserLikedAlbumsWhereUniqueInput | UserLikedAlbumsWhereUniqueInput[]
    disconnect?: UserLikedAlbumsWhereUniqueInput | UserLikedAlbumsWhereUniqueInput[]
    delete?: UserLikedAlbumsWhereUniqueInput | UserLikedAlbumsWhereUniqueInput[]
    connect?: UserLikedAlbumsWhereUniqueInput | UserLikedAlbumsWhereUniqueInput[]
    update?: UserLikedAlbumsUpdateWithWhereUniqueWithoutUserInput | UserLikedAlbumsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserLikedAlbumsUpdateManyWithWhereWithoutUserInput | UserLikedAlbumsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserLikedAlbumsScalarWhereInput | UserLikedAlbumsScalarWhereInput[]
  }

  export type UserFollowsArtistsUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFollowsArtistsCreateWithoutUserInput, UserFollowsArtistsUncheckedCreateWithoutUserInput> | UserFollowsArtistsCreateWithoutUserInput[] | UserFollowsArtistsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFollowsArtistsCreateOrConnectWithoutUserInput | UserFollowsArtistsCreateOrConnectWithoutUserInput[]
    upsert?: UserFollowsArtistsUpsertWithWhereUniqueWithoutUserInput | UserFollowsArtistsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFollowsArtistsCreateManyUserInputEnvelope
    set?: UserFollowsArtistsWhereUniqueInput | UserFollowsArtistsWhereUniqueInput[]
    disconnect?: UserFollowsArtistsWhereUniqueInput | UserFollowsArtistsWhereUniqueInput[]
    delete?: UserFollowsArtistsWhereUniqueInput | UserFollowsArtistsWhereUniqueInput[]
    connect?: UserFollowsArtistsWhereUniqueInput | UserFollowsArtistsWhereUniqueInput[]
    update?: UserFollowsArtistsUpdateWithWhereUniqueWithoutUserInput | UserFollowsArtistsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFollowsArtistsUpdateManyWithWhereWithoutUserInput | UserFollowsArtistsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFollowsArtistsScalarWhereInput | UserFollowsArtistsScalarWhereInput[]
  }

  export type UserFollowsPlaylistsUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFollowsPlaylistsCreateWithoutUserInput, UserFollowsPlaylistsUncheckedCreateWithoutUserInput> | UserFollowsPlaylistsCreateWithoutUserInput[] | UserFollowsPlaylistsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFollowsPlaylistsCreateOrConnectWithoutUserInput | UserFollowsPlaylistsCreateOrConnectWithoutUserInput[]
    upsert?: UserFollowsPlaylistsUpsertWithWhereUniqueWithoutUserInput | UserFollowsPlaylistsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFollowsPlaylistsCreateManyUserInputEnvelope
    set?: UserFollowsPlaylistsWhereUniqueInput | UserFollowsPlaylistsWhereUniqueInput[]
    disconnect?: UserFollowsPlaylistsWhereUniqueInput | UserFollowsPlaylistsWhereUniqueInput[]
    delete?: UserFollowsPlaylistsWhereUniqueInput | UserFollowsPlaylistsWhereUniqueInput[]
    connect?: UserFollowsPlaylistsWhereUniqueInput | UserFollowsPlaylistsWhereUniqueInput[]
    update?: UserFollowsPlaylistsUpdateWithWhereUniqueWithoutUserInput | UserFollowsPlaylistsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFollowsPlaylistsUpdateManyWithWhereWithoutUserInput | UserFollowsPlaylistsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFollowsPlaylistsScalarWhereInput | UserFollowsPlaylistsScalarWhereInput[]
  }

  export type PlaylistsUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlaylistsCreateWithoutUserInput, PlaylistsUncheckedCreateWithoutUserInput> | PlaylistsCreateWithoutUserInput[] | PlaylistsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistsCreateOrConnectWithoutUserInput | PlaylistsCreateOrConnectWithoutUserInput[]
    upsert?: PlaylistsUpsertWithWhereUniqueWithoutUserInput | PlaylistsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlaylistsCreateManyUserInputEnvelope
    set?: PlaylistsWhereUniqueInput | PlaylistsWhereUniqueInput[]
    disconnect?: PlaylistsWhereUniqueInput | PlaylistsWhereUniqueInput[]
    delete?: PlaylistsWhereUniqueInput | PlaylistsWhereUniqueInput[]
    connect?: PlaylistsWhereUniqueInput | PlaylistsWhereUniqueInput[]
    update?: PlaylistsUpdateWithWhereUniqueWithoutUserInput | PlaylistsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlaylistsUpdateManyWithWhereWithoutUserInput | PlaylistsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlaylistsScalarWhereInput | PlaylistsScalarWhereInput[]
  }

  export type UserFavsTracksUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFavsTracksCreateWithoutUserInput, UserFavsTracksUncheckedCreateWithoutUserInput> | UserFavsTracksCreateWithoutUserInput[] | UserFavsTracksUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFavsTracksCreateOrConnectWithoutUserInput | UserFavsTracksCreateOrConnectWithoutUserInput[]
    upsert?: UserFavsTracksUpsertWithWhereUniqueWithoutUserInput | UserFavsTracksUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFavsTracksCreateManyUserInputEnvelope
    set?: UserFavsTracksWhereUniqueInput | UserFavsTracksWhereUniqueInput[]
    disconnect?: UserFavsTracksWhereUniqueInput | UserFavsTracksWhereUniqueInput[]
    delete?: UserFavsTracksWhereUniqueInput | UserFavsTracksWhereUniqueInput[]
    connect?: UserFavsTracksWhereUniqueInput | UserFavsTracksWhereUniqueInput[]
    update?: UserFavsTracksUpdateWithWhereUniqueWithoutUserInput | UserFavsTracksUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFavsTracksUpdateManyWithWhereWithoutUserInput | UserFavsTracksUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFavsTracksScalarWhereInput | UserFavsTracksScalarWhereInput[]
  }

  export type UserLikedAlbumsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserLikedAlbumsCreateWithoutUserInput, UserLikedAlbumsUncheckedCreateWithoutUserInput> | UserLikedAlbumsCreateWithoutUserInput[] | UserLikedAlbumsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserLikedAlbumsCreateOrConnectWithoutUserInput | UserLikedAlbumsCreateOrConnectWithoutUserInput[]
    upsert?: UserLikedAlbumsUpsertWithWhereUniqueWithoutUserInput | UserLikedAlbumsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserLikedAlbumsCreateManyUserInputEnvelope
    set?: UserLikedAlbumsWhereUniqueInput | UserLikedAlbumsWhereUniqueInput[]
    disconnect?: UserLikedAlbumsWhereUniqueInput | UserLikedAlbumsWhereUniqueInput[]
    delete?: UserLikedAlbumsWhereUniqueInput | UserLikedAlbumsWhereUniqueInput[]
    connect?: UserLikedAlbumsWhereUniqueInput | UserLikedAlbumsWhereUniqueInput[]
    update?: UserLikedAlbumsUpdateWithWhereUniqueWithoutUserInput | UserLikedAlbumsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserLikedAlbumsUpdateManyWithWhereWithoutUserInput | UserLikedAlbumsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserLikedAlbumsScalarWhereInput | UserLikedAlbumsScalarWhereInput[]
  }

  export type UserFollowsArtistsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFollowsArtistsCreateWithoutUserInput, UserFollowsArtistsUncheckedCreateWithoutUserInput> | UserFollowsArtistsCreateWithoutUserInput[] | UserFollowsArtistsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFollowsArtistsCreateOrConnectWithoutUserInput | UserFollowsArtistsCreateOrConnectWithoutUserInput[]
    upsert?: UserFollowsArtistsUpsertWithWhereUniqueWithoutUserInput | UserFollowsArtistsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFollowsArtistsCreateManyUserInputEnvelope
    set?: UserFollowsArtistsWhereUniqueInput | UserFollowsArtistsWhereUniqueInput[]
    disconnect?: UserFollowsArtistsWhereUniqueInput | UserFollowsArtistsWhereUniqueInput[]
    delete?: UserFollowsArtistsWhereUniqueInput | UserFollowsArtistsWhereUniqueInput[]
    connect?: UserFollowsArtistsWhereUniqueInput | UserFollowsArtistsWhereUniqueInput[]
    update?: UserFollowsArtistsUpdateWithWhereUniqueWithoutUserInput | UserFollowsArtistsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFollowsArtistsUpdateManyWithWhereWithoutUserInput | UserFollowsArtistsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFollowsArtistsScalarWhereInput | UserFollowsArtistsScalarWhereInput[]
  }

  export type UserFollowsPlaylistsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFollowsPlaylistsCreateWithoutUserInput, UserFollowsPlaylistsUncheckedCreateWithoutUserInput> | UserFollowsPlaylistsCreateWithoutUserInput[] | UserFollowsPlaylistsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFollowsPlaylistsCreateOrConnectWithoutUserInput | UserFollowsPlaylistsCreateOrConnectWithoutUserInput[]
    upsert?: UserFollowsPlaylistsUpsertWithWhereUniqueWithoutUserInput | UserFollowsPlaylistsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFollowsPlaylistsCreateManyUserInputEnvelope
    set?: UserFollowsPlaylistsWhereUniqueInput | UserFollowsPlaylistsWhereUniqueInput[]
    disconnect?: UserFollowsPlaylistsWhereUniqueInput | UserFollowsPlaylistsWhereUniqueInput[]
    delete?: UserFollowsPlaylistsWhereUniqueInput | UserFollowsPlaylistsWhereUniqueInput[]
    connect?: UserFollowsPlaylistsWhereUniqueInput | UserFollowsPlaylistsWhereUniqueInput[]
    update?: UserFollowsPlaylistsUpdateWithWhereUniqueWithoutUserInput | UserFollowsPlaylistsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFollowsPlaylistsUpdateManyWithWhereWithoutUserInput | UserFollowsPlaylistsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFollowsPlaylistsScalarWhereInput | UserFollowsPlaylistsScalarWhereInput[]
  }

  export type PlaylistsUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<PlaylistsCreateWithoutUserInput, PlaylistsUncheckedCreateWithoutUserInput> | PlaylistsCreateWithoutUserInput[] | PlaylistsUncheckedCreateWithoutUserInput[]
    connectOrCreate?: PlaylistsCreateOrConnectWithoutUserInput | PlaylistsCreateOrConnectWithoutUserInput[]
    upsert?: PlaylistsUpsertWithWhereUniqueWithoutUserInput | PlaylistsUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: PlaylistsCreateManyUserInputEnvelope
    set?: PlaylistsWhereUniqueInput | PlaylistsWhereUniqueInput[]
    disconnect?: PlaylistsWhereUniqueInput | PlaylistsWhereUniqueInput[]
    delete?: PlaylistsWhereUniqueInput | PlaylistsWhereUniqueInput[]
    connect?: PlaylistsWhereUniqueInput | PlaylistsWhereUniqueInput[]
    update?: PlaylistsUpdateWithWhereUniqueWithoutUserInput | PlaylistsUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: PlaylistsUpdateManyWithWhereWithoutUserInput | PlaylistsUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: PlaylistsScalarWhereInput | PlaylistsScalarWhereInput[]
  }

  export type UserFavsTracksUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserFavsTracksCreateWithoutUserInput, UserFavsTracksUncheckedCreateWithoutUserInput> | UserFavsTracksCreateWithoutUserInput[] | UserFavsTracksUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserFavsTracksCreateOrConnectWithoutUserInput | UserFavsTracksCreateOrConnectWithoutUserInput[]
    upsert?: UserFavsTracksUpsertWithWhereUniqueWithoutUserInput | UserFavsTracksUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserFavsTracksCreateManyUserInputEnvelope
    set?: UserFavsTracksWhereUniqueInput | UserFavsTracksWhereUniqueInput[]
    disconnect?: UserFavsTracksWhereUniqueInput | UserFavsTracksWhereUniqueInput[]
    delete?: UserFavsTracksWhereUniqueInput | UserFavsTracksWhereUniqueInput[]
    connect?: UserFavsTracksWhereUniqueInput | UserFavsTracksWhereUniqueInput[]
    update?: UserFavsTracksUpdateWithWhereUniqueWithoutUserInput | UserFavsTracksUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserFavsTracksUpdateManyWithWhereWithoutUserInput | UserFavsTracksUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserFavsTracksScalarWhereInput | UserFavsTracksScalarWhereInput[]
  }

  export type ArtistsOnTracksCreateNestedManyWithoutTrackInput = {
    create?: XOR<ArtistsOnTracksCreateWithoutTrackInput, ArtistsOnTracksUncheckedCreateWithoutTrackInput> | ArtistsOnTracksCreateWithoutTrackInput[] | ArtistsOnTracksUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: ArtistsOnTracksCreateOrConnectWithoutTrackInput | ArtistsOnTracksCreateOrConnectWithoutTrackInput[]
    createMany?: ArtistsOnTracksCreateManyTrackInputEnvelope
    connect?: ArtistsOnTracksWhereUniqueInput | ArtistsOnTracksWhereUniqueInput[]
  }

  export type GenreCreateNestedOneWithoutTracksInput = {
    create?: XOR<GenreCreateWithoutTracksInput, GenreUncheckedCreateWithoutTracksInput>
    connectOrCreate?: GenreCreateOrConnectWithoutTracksInput
    connect?: GenreWhereUniqueInput
  }

  export type TracksOnAlbumsCreateNestedManyWithoutTrackInput = {
    create?: XOR<TracksOnAlbumsCreateWithoutTrackInput, TracksOnAlbumsUncheckedCreateWithoutTrackInput> | TracksOnAlbumsCreateWithoutTrackInput[] | TracksOnAlbumsUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: TracksOnAlbumsCreateOrConnectWithoutTrackInput | TracksOnAlbumsCreateOrConnectWithoutTrackInput[]
    createMany?: TracksOnAlbumsCreateManyTrackInputEnvelope
    connect?: TracksOnAlbumsWhereUniqueInput | TracksOnAlbumsWhereUniqueInput[]
  }

  export type PlaylistToTrackCreateNestedManyWithoutTrackInput = {
    create?: XOR<PlaylistToTrackCreateWithoutTrackInput, PlaylistToTrackUncheckedCreateWithoutTrackInput> | PlaylistToTrackCreateWithoutTrackInput[] | PlaylistToTrackUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: PlaylistToTrackCreateOrConnectWithoutTrackInput | PlaylistToTrackCreateOrConnectWithoutTrackInput[]
    createMany?: PlaylistToTrackCreateManyTrackInputEnvelope
    connect?: PlaylistToTrackWhereUniqueInput | PlaylistToTrackWhereUniqueInput[]
  }

  export type UserFavsTracksCreateNestedManyWithoutTrackInput = {
    create?: XOR<UserFavsTracksCreateWithoutTrackInput, UserFavsTracksUncheckedCreateWithoutTrackInput> | UserFavsTracksCreateWithoutTrackInput[] | UserFavsTracksUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: UserFavsTracksCreateOrConnectWithoutTrackInput | UserFavsTracksCreateOrConnectWithoutTrackInput[]
    createMany?: UserFavsTracksCreateManyTrackInputEnvelope
    connect?: UserFavsTracksWhereUniqueInput | UserFavsTracksWhereUniqueInput[]
  }

  export type ArtistsOnTracksUncheckedCreateNestedManyWithoutTrackInput = {
    create?: XOR<ArtistsOnTracksCreateWithoutTrackInput, ArtistsOnTracksUncheckedCreateWithoutTrackInput> | ArtistsOnTracksCreateWithoutTrackInput[] | ArtistsOnTracksUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: ArtistsOnTracksCreateOrConnectWithoutTrackInput | ArtistsOnTracksCreateOrConnectWithoutTrackInput[]
    createMany?: ArtistsOnTracksCreateManyTrackInputEnvelope
    connect?: ArtistsOnTracksWhereUniqueInput | ArtistsOnTracksWhereUniqueInput[]
  }

  export type TracksOnAlbumsUncheckedCreateNestedManyWithoutTrackInput = {
    create?: XOR<TracksOnAlbumsCreateWithoutTrackInput, TracksOnAlbumsUncheckedCreateWithoutTrackInput> | TracksOnAlbumsCreateWithoutTrackInput[] | TracksOnAlbumsUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: TracksOnAlbumsCreateOrConnectWithoutTrackInput | TracksOnAlbumsCreateOrConnectWithoutTrackInput[]
    createMany?: TracksOnAlbumsCreateManyTrackInputEnvelope
    connect?: TracksOnAlbumsWhereUniqueInput | TracksOnAlbumsWhereUniqueInput[]
  }

  export type PlaylistToTrackUncheckedCreateNestedManyWithoutTrackInput = {
    create?: XOR<PlaylistToTrackCreateWithoutTrackInput, PlaylistToTrackUncheckedCreateWithoutTrackInput> | PlaylistToTrackCreateWithoutTrackInput[] | PlaylistToTrackUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: PlaylistToTrackCreateOrConnectWithoutTrackInput | PlaylistToTrackCreateOrConnectWithoutTrackInput[]
    createMany?: PlaylistToTrackCreateManyTrackInputEnvelope
    connect?: PlaylistToTrackWhereUniqueInput | PlaylistToTrackWhereUniqueInput[]
  }

  export type UserFavsTracksUncheckedCreateNestedManyWithoutTrackInput = {
    create?: XOR<UserFavsTracksCreateWithoutTrackInput, UserFavsTracksUncheckedCreateWithoutTrackInput> | UserFavsTracksCreateWithoutTrackInput[] | UserFavsTracksUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: UserFavsTracksCreateOrConnectWithoutTrackInput | UserFavsTracksCreateOrConnectWithoutTrackInput[]
    createMany?: UserFavsTracksCreateManyTrackInputEnvelope
    connect?: UserFavsTracksWhereUniqueInput | UserFavsTracksWhereUniqueInput[]
  }

  export type ArtistsOnTracksUpdateManyWithoutTrackNestedInput = {
    create?: XOR<ArtistsOnTracksCreateWithoutTrackInput, ArtistsOnTracksUncheckedCreateWithoutTrackInput> | ArtistsOnTracksCreateWithoutTrackInput[] | ArtistsOnTracksUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: ArtistsOnTracksCreateOrConnectWithoutTrackInput | ArtistsOnTracksCreateOrConnectWithoutTrackInput[]
    upsert?: ArtistsOnTracksUpsertWithWhereUniqueWithoutTrackInput | ArtistsOnTracksUpsertWithWhereUniqueWithoutTrackInput[]
    createMany?: ArtistsOnTracksCreateManyTrackInputEnvelope
    set?: ArtistsOnTracksWhereUniqueInput | ArtistsOnTracksWhereUniqueInput[]
    disconnect?: ArtistsOnTracksWhereUniqueInput | ArtistsOnTracksWhereUniqueInput[]
    delete?: ArtistsOnTracksWhereUniqueInput | ArtistsOnTracksWhereUniqueInput[]
    connect?: ArtistsOnTracksWhereUniqueInput | ArtistsOnTracksWhereUniqueInput[]
    update?: ArtistsOnTracksUpdateWithWhereUniqueWithoutTrackInput | ArtistsOnTracksUpdateWithWhereUniqueWithoutTrackInput[]
    updateMany?: ArtistsOnTracksUpdateManyWithWhereWithoutTrackInput | ArtistsOnTracksUpdateManyWithWhereWithoutTrackInput[]
    deleteMany?: ArtistsOnTracksScalarWhereInput | ArtistsOnTracksScalarWhereInput[]
  }

  export type GenreUpdateOneRequiredWithoutTracksNestedInput = {
    create?: XOR<GenreCreateWithoutTracksInput, GenreUncheckedCreateWithoutTracksInput>
    connectOrCreate?: GenreCreateOrConnectWithoutTracksInput
    upsert?: GenreUpsertWithoutTracksInput
    connect?: GenreWhereUniqueInput
    update?: XOR<XOR<GenreUpdateToOneWithWhereWithoutTracksInput, GenreUpdateWithoutTracksInput>, GenreUncheckedUpdateWithoutTracksInput>
  }

  export type TracksOnAlbumsUpdateManyWithoutTrackNestedInput = {
    create?: XOR<TracksOnAlbumsCreateWithoutTrackInput, TracksOnAlbumsUncheckedCreateWithoutTrackInput> | TracksOnAlbumsCreateWithoutTrackInput[] | TracksOnAlbumsUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: TracksOnAlbumsCreateOrConnectWithoutTrackInput | TracksOnAlbumsCreateOrConnectWithoutTrackInput[]
    upsert?: TracksOnAlbumsUpsertWithWhereUniqueWithoutTrackInput | TracksOnAlbumsUpsertWithWhereUniqueWithoutTrackInput[]
    createMany?: TracksOnAlbumsCreateManyTrackInputEnvelope
    set?: TracksOnAlbumsWhereUniqueInput | TracksOnAlbumsWhereUniqueInput[]
    disconnect?: TracksOnAlbumsWhereUniqueInput | TracksOnAlbumsWhereUniqueInput[]
    delete?: TracksOnAlbumsWhereUniqueInput | TracksOnAlbumsWhereUniqueInput[]
    connect?: TracksOnAlbumsWhereUniqueInput | TracksOnAlbumsWhereUniqueInput[]
    update?: TracksOnAlbumsUpdateWithWhereUniqueWithoutTrackInput | TracksOnAlbumsUpdateWithWhereUniqueWithoutTrackInput[]
    updateMany?: TracksOnAlbumsUpdateManyWithWhereWithoutTrackInput | TracksOnAlbumsUpdateManyWithWhereWithoutTrackInput[]
    deleteMany?: TracksOnAlbumsScalarWhereInput | TracksOnAlbumsScalarWhereInput[]
  }

  export type PlaylistToTrackUpdateManyWithoutTrackNestedInput = {
    create?: XOR<PlaylistToTrackCreateWithoutTrackInput, PlaylistToTrackUncheckedCreateWithoutTrackInput> | PlaylistToTrackCreateWithoutTrackInput[] | PlaylistToTrackUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: PlaylistToTrackCreateOrConnectWithoutTrackInput | PlaylistToTrackCreateOrConnectWithoutTrackInput[]
    upsert?: PlaylistToTrackUpsertWithWhereUniqueWithoutTrackInput | PlaylistToTrackUpsertWithWhereUniqueWithoutTrackInput[]
    createMany?: PlaylistToTrackCreateManyTrackInputEnvelope
    set?: PlaylistToTrackWhereUniqueInput | PlaylistToTrackWhereUniqueInput[]
    disconnect?: PlaylistToTrackWhereUniqueInput | PlaylistToTrackWhereUniqueInput[]
    delete?: PlaylistToTrackWhereUniqueInput | PlaylistToTrackWhereUniqueInput[]
    connect?: PlaylistToTrackWhereUniqueInput | PlaylistToTrackWhereUniqueInput[]
    update?: PlaylistToTrackUpdateWithWhereUniqueWithoutTrackInput | PlaylistToTrackUpdateWithWhereUniqueWithoutTrackInput[]
    updateMany?: PlaylistToTrackUpdateManyWithWhereWithoutTrackInput | PlaylistToTrackUpdateManyWithWhereWithoutTrackInput[]
    deleteMany?: PlaylistToTrackScalarWhereInput | PlaylistToTrackScalarWhereInput[]
  }

  export type UserFavsTracksUpdateManyWithoutTrackNestedInput = {
    create?: XOR<UserFavsTracksCreateWithoutTrackInput, UserFavsTracksUncheckedCreateWithoutTrackInput> | UserFavsTracksCreateWithoutTrackInput[] | UserFavsTracksUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: UserFavsTracksCreateOrConnectWithoutTrackInput | UserFavsTracksCreateOrConnectWithoutTrackInput[]
    upsert?: UserFavsTracksUpsertWithWhereUniqueWithoutTrackInput | UserFavsTracksUpsertWithWhereUniqueWithoutTrackInput[]
    createMany?: UserFavsTracksCreateManyTrackInputEnvelope
    set?: UserFavsTracksWhereUniqueInput | UserFavsTracksWhereUniqueInput[]
    disconnect?: UserFavsTracksWhereUniqueInput | UserFavsTracksWhereUniqueInput[]
    delete?: UserFavsTracksWhereUniqueInput | UserFavsTracksWhereUniqueInput[]
    connect?: UserFavsTracksWhereUniqueInput | UserFavsTracksWhereUniqueInput[]
    update?: UserFavsTracksUpdateWithWhereUniqueWithoutTrackInput | UserFavsTracksUpdateWithWhereUniqueWithoutTrackInput[]
    updateMany?: UserFavsTracksUpdateManyWithWhereWithoutTrackInput | UserFavsTracksUpdateManyWithWhereWithoutTrackInput[]
    deleteMany?: UserFavsTracksScalarWhereInput | UserFavsTracksScalarWhereInput[]
  }

  export type ArtistsOnTracksUncheckedUpdateManyWithoutTrackNestedInput = {
    create?: XOR<ArtistsOnTracksCreateWithoutTrackInput, ArtistsOnTracksUncheckedCreateWithoutTrackInput> | ArtistsOnTracksCreateWithoutTrackInput[] | ArtistsOnTracksUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: ArtistsOnTracksCreateOrConnectWithoutTrackInput | ArtistsOnTracksCreateOrConnectWithoutTrackInput[]
    upsert?: ArtistsOnTracksUpsertWithWhereUniqueWithoutTrackInput | ArtistsOnTracksUpsertWithWhereUniqueWithoutTrackInput[]
    createMany?: ArtistsOnTracksCreateManyTrackInputEnvelope
    set?: ArtistsOnTracksWhereUniqueInput | ArtistsOnTracksWhereUniqueInput[]
    disconnect?: ArtistsOnTracksWhereUniqueInput | ArtistsOnTracksWhereUniqueInput[]
    delete?: ArtistsOnTracksWhereUniqueInput | ArtistsOnTracksWhereUniqueInput[]
    connect?: ArtistsOnTracksWhereUniqueInput | ArtistsOnTracksWhereUniqueInput[]
    update?: ArtistsOnTracksUpdateWithWhereUniqueWithoutTrackInput | ArtistsOnTracksUpdateWithWhereUniqueWithoutTrackInput[]
    updateMany?: ArtistsOnTracksUpdateManyWithWhereWithoutTrackInput | ArtistsOnTracksUpdateManyWithWhereWithoutTrackInput[]
    deleteMany?: ArtistsOnTracksScalarWhereInput | ArtistsOnTracksScalarWhereInput[]
  }

  export type TracksOnAlbumsUncheckedUpdateManyWithoutTrackNestedInput = {
    create?: XOR<TracksOnAlbumsCreateWithoutTrackInput, TracksOnAlbumsUncheckedCreateWithoutTrackInput> | TracksOnAlbumsCreateWithoutTrackInput[] | TracksOnAlbumsUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: TracksOnAlbumsCreateOrConnectWithoutTrackInput | TracksOnAlbumsCreateOrConnectWithoutTrackInput[]
    upsert?: TracksOnAlbumsUpsertWithWhereUniqueWithoutTrackInput | TracksOnAlbumsUpsertWithWhereUniqueWithoutTrackInput[]
    createMany?: TracksOnAlbumsCreateManyTrackInputEnvelope
    set?: TracksOnAlbumsWhereUniqueInput | TracksOnAlbumsWhereUniqueInput[]
    disconnect?: TracksOnAlbumsWhereUniqueInput | TracksOnAlbumsWhereUniqueInput[]
    delete?: TracksOnAlbumsWhereUniqueInput | TracksOnAlbumsWhereUniqueInput[]
    connect?: TracksOnAlbumsWhereUniqueInput | TracksOnAlbumsWhereUniqueInput[]
    update?: TracksOnAlbumsUpdateWithWhereUniqueWithoutTrackInput | TracksOnAlbumsUpdateWithWhereUniqueWithoutTrackInput[]
    updateMany?: TracksOnAlbumsUpdateManyWithWhereWithoutTrackInput | TracksOnAlbumsUpdateManyWithWhereWithoutTrackInput[]
    deleteMany?: TracksOnAlbumsScalarWhereInput | TracksOnAlbumsScalarWhereInput[]
  }

  export type PlaylistToTrackUncheckedUpdateManyWithoutTrackNestedInput = {
    create?: XOR<PlaylistToTrackCreateWithoutTrackInput, PlaylistToTrackUncheckedCreateWithoutTrackInput> | PlaylistToTrackCreateWithoutTrackInput[] | PlaylistToTrackUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: PlaylistToTrackCreateOrConnectWithoutTrackInput | PlaylistToTrackCreateOrConnectWithoutTrackInput[]
    upsert?: PlaylistToTrackUpsertWithWhereUniqueWithoutTrackInput | PlaylistToTrackUpsertWithWhereUniqueWithoutTrackInput[]
    createMany?: PlaylistToTrackCreateManyTrackInputEnvelope
    set?: PlaylistToTrackWhereUniqueInput | PlaylistToTrackWhereUniqueInput[]
    disconnect?: PlaylistToTrackWhereUniqueInput | PlaylistToTrackWhereUniqueInput[]
    delete?: PlaylistToTrackWhereUniqueInput | PlaylistToTrackWhereUniqueInput[]
    connect?: PlaylistToTrackWhereUniqueInput | PlaylistToTrackWhereUniqueInput[]
    update?: PlaylistToTrackUpdateWithWhereUniqueWithoutTrackInput | PlaylistToTrackUpdateWithWhereUniqueWithoutTrackInput[]
    updateMany?: PlaylistToTrackUpdateManyWithWhereWithoutTrackInput | PlaylistToTrackUpdateManyWithWhereWithoutTrackInput[]
    deleteMany?: PlaylistToTrackScalarWhereInput | PlaylistToTrackScalarWhereInput[]
  }

  export type UserFavsTracksUncheckedUpdateManyWithoutTrackNestedInput = {
    create?: XOR<UserFavsTracksCreateWithoutTrackInput, UserFavsTracksUncheckedCreateWithoutTrackInput> | UserFavsTracksCreateWithoutTrackInput[] | UserFavsTracksUncheckedCreateWithoutTrackInput[]
    connectOrCreate?: UserFavsTracksCreateOrConnectWithoutTrackInput | UserFavsTracksCreateOrConnectWithoutTrackInput[]
    upsert?: UserFavsTracksUpsertWithWhereUniqueWithoutTrackInput | UserFavsTracksUpsertWithWhereUniqueWithoutTrackInput[]
    createMany?: UserFavsTracksCreateManyTrackInputEnvelope
    set?: UserFavsTracksWhereUniqueInput | UserFavsTracksWhereUniqueInput[]
    disconnect?: UserFavsTracksWhereUniqueInput | UserFavsTracksWhereUniqueInput[]
    delete?: UserFavsTracksWhereUniqueInput | UserFavsTracksWhereUniqueInput[]
    connect?: UserFavsTracksWhereUniqueInput | UserFavsTracksWhereUniqueInput[]
    update?: UserFavsTracksUpdateWithWhereUniqueWithoutTrackInput | UserFavsTracksUpdateWithWhereUniqueWithoutTrackInput[]
    updateMany?: UserFavsTracksUpdateManyWithWhereWithoutTrackInput | UserFavsTracksUpdateManyWithWhereWithoutTrackInput[]
    deleteMany?: UserFavsTracksScalarWhereInput | UserFavsTracksScalarWhereInput[]
  }

  export type ArtistsCreateNestedOneWithoutAlbumsInput = {
    create?: XOR<ArtistsCreateWithoutAlbumsInput, ArtistsUncheckedCreateWithoutAlbumsInput>
    connectOrCreate?: ArtistsCreateOrConnectWithoutAlbumsInput
    connect?: ArtistsWhereUniqueInput
  }

  export type TracksOnAlbumsCreateNestedManyWithoutAlbumInput = {
    create?: XOR<TracksOnAlbumsCreateWithoutAlbumInput, TracksOnAlbumsUncheckedCreateWithoutAlbumInput> | TracksOnAlbumsCreateWithoutAlbumInput[] | TracksOnAlbumsUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: TracksOnAlbumsCreateOrConnectWithoutAlbumInput | TracksOnAlbumsCreateOrConnectWithoutAlbumInput[]
    createMany?: TracksOnAlbumsCreateManyAlbumInputEnvelope
    connect?: TracksOnAlbumsWhereUniqueInput | TracksOnAlbumsWhereUniqueInput[]
  }

  export type GenreCreateNestedOneWithoutAlbumsInput = {
    create?: XOR<GenreCreateWithoutAlbumsInput, GenreUncheckedCreateWithoutAlbumsInput>
    connectOrCreate?: GenreCreateOrConnectWithoutAlbumsInput
    connect?: GenreWhereUniqueInput
  }

  export type UserLikedAlbumsCreateNestedManyWithoutAlbumInput = {
    create?: XOR<UserLikedAlbumsCreateWithoutAlbumInput, UserLikedAlbumsUncheckedCreateWithoutAlbumInput> | UserLikedAlbumsCreateWithoutAlbumInput[] | UserLikedAlbumsUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: UserLikedAlbumsCreateOrConnectWithoutAlbumInput | UserLikedAlbumsCreateOrConnectWithoutAlbumInput[]
    createMany?: UserLikedAlbumsCreateManyAlbumInputEnvelope
    connect?: UserLikedAlbumsWhereUniqueInput | UserLikedAlbumsWhereUniqueInput[]
  }

  export type TracksOnAlbumsUncheckedCreateNestedManyWithoutAlbumInput = {
    create?: XOR<TracksOnAlbumsCreateWithoutAlbumInput, TracksOnAlbumsUncheckedCreateWithoutAlbumInput> | TracksOnAlbumsCreateWithoutAlbumInput[] | TracksOnAlbumsUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: TracksOnAlbumsCreateOrConnectWithoutAlbumInput | TracksOnAlbumsCreateOrConnectWithoutAlbumInput[]
    createMany?: TracksOnAlbumsCreateManyAlbumInputEnvelope
    connect?: TracksOnAlbumsWhereUniqueInput | TracksOnAlbumsWhereUniqueInput[]
  }

  export type UserLikedAlbumsUncheckedCreateNestedManyWithoutAlbumInput = {
    create?: XOR<UserLikedAlbumsCreateWithoutAlbumInput, UserLikedAlbumsUncheckedCreateWithoutAlbumInput> | UserLikedAlbumsCreateWithoutAlbumInput[] | UserLikedAlbumsUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: UserLikedAlbumsCreateOrConnectWithoutAlbumInput | UserLikedAlbumsCreateOrConnectWithoutAlbumInput[]
    createMany?: UserLikedAlbumsCreateManyAlbumInputEnvelope
    connect?: UserLikedAlbumsWhereUniqueInput | UserLikedAlbumsWhereUniqueInput[]
  }

  export type ArtistsUpdateOneRequiredWithoutAlbumsNestedInput = {
    create?: XOR<ArtistsCreateWithoutAlbumsInput, ArtistsUncheckedCreateWithoutAlbumsInput>
    connectOrCreate?: ArtistsCreateOrConnectWithoutAlbumsInput
    upsert?: ArtistsUpsertWithoutAlbumsInput
    connect?: ArtistsWhereUniqueInput
    update?: XOR<XOR<ArtistsUpdateToOneWithWhereWithoutAlbumsInput, ArtistsUpdateWithoutAlbumsInput>, ArtistsUncheckedUpdateWithoutAlbumsInput>
  }

  export type TracksOnAlbumsUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<TracksOnAlbumsCreateWithoutAlbumInput, TracksOnAlbumsUncheckedCreateWithoutAlbumInput> | TracksOnAlbumsCreateWithoutAlbumInput[] | TracksOnAlbumsUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: TracksOnAlbumsCreateOrConnectWithoutAlbumInput | TracksOnAlbumsCreateOrConnectWithoutAlbumInput[]
    upsert?: TracksOnAlbumsUpsertWithWhereUniqueWithoutAlbumInput | TracksOnAlbumsUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: TracksOnAlbumsCreateManyAlbumInputEnvelope
    set?: TracksOnAlbumsWhereUniqueInput | TracksOnAlbumsWhereUniqueInput[]
    disconnect?: TracksOnAlbumsWhereUniqueInput | TracksOnAlbumsWhereUniqueInput[]
    delete?: TracksOnAlbumsWhereUniqueInput | TracksOnAlbumsWhereUniqueInput[]
    connect?: TracksOnAlbumsWhereUniqueInput | TracksOnAlbumsWhereUniqueInput[]
    update?: TracksOnAlbumsUpdateWithWhereUniqueWithoutAlbumInput | TracksOnAlbumsUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: TracksOnAlbumsUpdateManyWithWhereWithoutAlbumInput | TracksOnAlbumsUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: TracksOnAlbumsScalarWhereInput | TracksOnAlbumsScalarWhereInput[]
  }

  export type GenreUpdateOneRequiredWithoutAlbumsNestedInput = {
    create?: XOR<GenreCreateWithoutAlbumsInput, GenreUncheckedCreateWithoutAlbumsInput>
    connectOrCreate?: GenreCreateOrConnectWithoutAlbumsInput
    upsert?: GenreUpsertWithoutAlbumsInput
    connect?: GenreWhereUniqueInput
    update?: XOR<XOR<GenreUpdateToOneWithWhereWithoutAlbumsInput, GenreUpdateWithoutAlbumsInput>, GenreUncheckedUpdateWithoutAlbumsInput>
  }

  export type UserLikedAlbumsUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<UserLikedAlbumsCreateWithoutAlbumInput, UserLikedAlbumsUncheckedCreateWithoutAlbumInput> | UserLikedAlbumsCreateWithoutAlbumInput[] | UserLikedAlbumsUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: UserLikedAlbumsCreateOrConnectWithoutAlbumInput | UserLikedAlbumsCreateOrConnectWithoutAlbumInput[]
    upsert?: UserLikedAlbumsUpsertWithWhereUniqueWithoutAlbumInput | UserLikedAlbumsUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: UserLikedAlbumsCreateManyAlbumInputEnvelope
    set?: UserLikedAlbumsWhereUniqueInput | UserLikedAlbumsWhereUniqueInput[]
    disconnect?: UserLikedAlbumsWhereUniqueInput | UserLikedAlbumsWhereUniqueInput[]
    delete?: UserLikedAlbumsWhereUniqueInput | UserLikedAlbumsWhereUniqueInput[]
    connect?: UserLikedAlbumsWhereUniqueInput | UserLikedAlbumsWhereUniqueInput[]
    update?: UserLikedAlbumsUpdateWithWhereUniqueWithoutAlbumInput | UserLikedAlbumsUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: UserLikedAlbumsUpdateManyWithWhereWithoutAlbumInput | UserLikedAlbumsUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: UserLikedAlbumsScalarWhereInput | UserLikedAlbumsScalarWhereInput[]
  }

  export type TracksOnAlbumsUncheckedUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<TracksOnAlbumsCreateWithoutAlbumInput, TracksOnAlbumsUncheckedCreateWithoutAlbumInput> | TracksOnAlbumsCreateWithoutAlbumInput[] | TracksOnAlbumsUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: TracksOnAlbumsCreateOrConnectWithoutAlbumInput | TracksOnAlbumsCreateOrConnectWithoutAlbumInput[]
    upsert?: TracksOnAlbumsUpsertWithWhereUniqueWithoutAlbumInput | TracksOnAlbumsUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: TracksOnAlbumsCreateManyAlbumInputEnvelope
    set?: TracksOnAlbumsWhereUniqueInput | TracksOnAlbumsWhereUniqueInput[]
    disconnect?: TracksOnAlbumsWhereUniqueInput | TracksOnAlbumsWhereUniqueInput[]
    delete?: TracksOnAlbumsWhereUniqueInput | TracksOnAlbumsWhereUniqueInput[]
    connect?: TracksOnAlbumsWhereUniqueInput | TracksOnAlbumsWhereUniqueInput[]
    update?: TracksOnAlbumsUpdateWithWhereUniqueWithoutAlbumInput | TracksOnAlbumsUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: TracksOnAlbumsUpdateManyWithWhereWithoutAlbumInput | TracksOnAlbumsUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: TracksOnAlbumsScalarWhereInput | TracksOnAlbumsScalarWhereInput[]
  }

  export type UserLikedAlbumsUncheckedUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<UserLikedAlbumsCreateWithoutAlbumInput, UserLikedAlbumsUncheckedCreateWithoutAlbumInput> | UserLikedAlbumsCreateWithoutAlbumInput[] | UserLikedAlbumsUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: UserLikedAlbumsCreateOrConnectWithoutAlbumInput | UserLikedAlbumsCreateOrConnectWithoutAlbumInput[]
    upsert?: UserLikedAlbumsUpsertWithWhereUniqueWithoutAlbumInput | UserLikedAlbumsUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: UserLikedAlbumsCreateManyAlbumInputEnvelope
    set?: UserLikedAlbumsWhereUniqueInput | UserLikedAlbumsWhereUniqueInput[]
    disconnect?: UserLikedAlbumsWhereUniqueInput | UserLikedAlbumsWhereUniqueInput[]
    delete?: UserLikedAlbumsWhereUniqueInput | UserLikedAlbumsWhereUniqueInput[]
    connect?: UserLikedAlbumsWhereUniqueInput | UserLikedAlbumsWhereUniqueInput[]
    update?: UserLikedAlbumsUpdateWithWhereUniqueWithoutAlbumInput | UserLikedAlbumsUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: UserLikedAlbumsUpdateManyWithWhereWithoutAlbumInput | UserLikedAlbumsUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: UserLikedAlbumsScalarWhereInput | UserLikedAlbumsScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatedPlaylistsInput = {
    create?: XOR<UserCreateWithoutCreatedPlaylistsInput, UserUncheckedCreateWithoutCreatedPlaylistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedPlaylistsInput
    connect?: UserWhereUniqueInput
  }

  export type UserFollowsPlaylistsCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<UserFollowsPlaylistsCreateWithoutPlaylistInput, UserFollowsPlaylistsUncheckedCreateWithoutPlaylistInput> | UserFollowsPlaylistsCreateWithoutPlaylistInput[] | UserFollowsPlaylistsUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: UserFollowsPlaylistsCreateOrConnectWithoutPlaylistInput | UserFollowsPlaylistsCreateOrConnectWithoutPlaylistInput[]
    createMany?: UserFollowsPlaylistsCreateManyPlaylistInputEnvelope
    connect?: UserFollowsPlaylistsWhereUniqueInput | UserFollowsPlaylistsWhereUniqueInput[]
  }

  export type PlaylistToTrackCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<PlaylistToTrackCreateWithoutPlaylistInput, PlaylistToTrackUncheckedCreateWithoutPlaylistInput> | PlaylistToTrackCreateWithoutPlaylistInput[] | PlaylistToTrackUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlaylistToTrackCreateOrConnectWithoutPlaylistInput | PlaylistToTrackCreateOrConnectWithoutPlaylistInput[]
    createMany?: PlaylistToTrackCreateManyPlaylistInputEnvelope
    connect?: PlaylistToTrackWhereUniqueInput | PlaylistToTrackWhereUniqueInput[]
  }

  export type UserFollowsPlaylistsUncheckedCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<UserFollowsPlaylistsCreateWithoutPlaylistInput, UserFollowsPlaylistsUncheckedCreateWithoutPlaylistInput> | UserFollowsPlaylistsCreateWithoutPlaylistInput[] | UserFollowsPlaylistsUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: UserFollowsPlaylistsCreateOrConnectWithoutPlaylistInput | UserFollowsPlaylistsCreateOrConnectWithoutPlaylistInput[]
    createMany?: UserFollowsPlaylistsCreateManyPlaylistInputEnvelope
    connect?: UserFollowsPlaylistsWhereUniqueInput | UserFollowsPlaylistsWhereUniqueInput[]
  }

  export type PlaylistToTrackUncheckedCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<PlaylistToTrackCreateWithoutPlaylistInput, PlaylistToTrackUncheckedCreateWithoutPlaylistInput> | PlaylistToTrackCreateWithoutPlaylistInput[] | PlaylistToTrackUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlaylistToTrackCreateOrConnectWithoutPlaylistInput | PlaylistToTrackCreateOrConnectWithoutPlaylistInput[]
    createMany?: PlaylistToTrackCreateManyPlaylistInputEnvelope
    connect?: PlaylistToTrackWhereUniqueInput | PlaylistToTrackWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type UserUpdateOneRequiredWithoutCreatedPlaylistsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedPlaylistsInput, UserUncheckedCreateWithoutCreatedPlaylistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedPlaylistsInput
    upsert?: UserUpsertWithoutCreatedPlaylistsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedPlaylistsInput, UserUpdateWithoutCreatedPlaylistsInput>, UserUncheckedUpdateWithoutCreatedPlaylistsInput>
  }

  export type UserFollowsPlaylistsUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<UserFollowsPlaylistsCreateWithoutPlaylistInput, UserFollowsPlaylistsUncheckedCreateWithoutPlaylistInput> | UserFollowsPlaylistsCreateWithoutPlaylistInput[] | UserFollowsPlaylistsUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: UserFollowsPlaylistsCreateOrConnectWithoutPlaylistInput | UserFollowsPlaylistsCreateOrConnectWithoutPlaylistInput[]
    upsert?: UserFollowsPlaylistsUpsertWithWhereUniqueWithoutPlaylistInput | UserFollowsPlaylistsUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: UserFollowsPlaylistsCreateManyPlaylistInputEnvelope
    set?: UserFollowsPlaylistsWhereUniqueInput | UserFollowsPlaylistsWhereUniqueInput[]
    disconnect?: UserFollowsPlaylistsWhereUniqueInput | UserFollowsPlaylistsWhereUniqueInput[]
    delete?: UserFollowsPlaylistsWhereUniqueInput | UserFollowsPlaylistsWhereUniqueInput[]
    connect?: UserFollowsPlaylistsWhereUniqueInput | UserFollowsPlaylistsWhereUniqueInput[]
    update?: UserFollowsPlaylistsUpdateWithWhereUniqueWithoutPlaylistInput | UserFollowsPlaylistsUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: UserFollowsPlaylistsUpdateManyWithWhereWithoutPlaylistInput | UserFollowsPlaylistsUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: UserFollowsPlaylistsScalarWhereInput | UserFollowsPlaylistsScalarWhereInput[]
  }

  export type PlaylistToTrackUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<PlaylistToTrackCreateWithoutPlaylistInput, PlaylistToTrackUncheckedCreateWithoutPlaylistInput> | PlaylistToTrackCreateWithoutPlaylistInput[] | PlaylistToTrackUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlaylistToTrackCreateOrConnectWithoutPlaylistInput | PlaylistToTrackCreateOrConnectWithoutPlaylistInput[]
    upsert?: PlaylistToTrackUpsertWithWhereUniqueWithoutPlaylistInput | PlaylistToTrackUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: PlaylistToTrackCreateManyPlaylistInputEnvelope
    set?: PlaylistToTrackWhereUniqueInput | PlaylistToTrackWhereUniqueInput[]
    disconnect?: PlaylistToTrackWhereUniqueInput | PlaylistToTrackWhereUniqueInput[]
    delete?: PlaylistToTrackWhereUniqueInput | PlaylistToTrackWhereUniqueInput[]
    connect?: PlaylistToTrackWhereUniqueInput | PlaylistToTrackWhereUniqueInput[]
    update?: PlaylistToTrackUpdateWithWhereUniqueWithoutPlaylistInput | PlaylistToTrackUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: PlaylistToTrackUpdateManyWithWhereWithoutPlaylistInput | PlaylistToTrackUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: PlaylistToTrackScalarWhereInput | PlaylistToTrackScalarWhereInput[]
  }

  export type UserFollowsPlaylistsUncheckedUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<UserFollowsPlaylistsCreateWithoutPlaylistInput, UserFollowsPlaylistsUncheckedCreateWithoutPlaylistInput> | UserFollowsPlaylistsCreateWithoutPlaylistInput[] | UserFollowsPlaylistsUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: UserFollowsPlaylistsCreateOrConnectWithoutPlaylistInput | UserFollowsPlaylistsCreateOrConnectWithoutPlaylistInput[]
    upsert?: UserFollowsPlaylistsUpsertWithWhereUniqueWithoutPlaylistInput | UserFollowsPlaylistsUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: UserFollowsPlaylistsCreateManyPlaylistInputEnvelope
    set?: UserFollowsPlaylistsWhereUniqueInput | UserFollowsPlaylistsWhereUniqueInput[]
    disconnect?: UserFollowsPlaylistsWhereUniqueInput | UserFollowsPlaylistsWhereUniqueInput[]
    delete?: UserFollowsPlaylistsWhereUniqueInput | UserFollowsPlaylistsWhereUniqueInput[]
    connect?: UserFollowsPlaylistsWhereUniqueInput | UserFollowsPlaylistsWhereUniqueInput[]
    update?: UserFollowsPlaylistsUpdateWithWhereUniqueWithoutPlaylistInput | UserFollowsPlaylistsUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: UserFollowsPlaylistsUpdateManyWithWhereWithoutPlaylistInput | UserFollowsPlaylistsUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: UserFollowsPlaylistsScalarWhereInput | UserFollowsPlaylistsScalarWhereInput[]
  }

  export type PlaylistToTrackUncheckedUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<PlaylistToTrackCreateWithoutPlaylistInput, PlaylistToTrackUncheckedCreateWithoutPlaylistInput> | PlaylistToTrackCreateWithoutPlaylistInput[] | PlaylistToTrackUncheckedCreateWithoutPlaylistInput[]
    connectOrCreate?: PlaylistToTrackCreateOrConnectWithoutPlaylistInput | PlaylistToTrackCreateOrConnectWithoutPlaylistInput[]
    upsert?: PlaylistToTrackUpsertWithWhereUniqueWithoutPlaylistInput | PlaylistToTrackUpsertWithWhereUniqueWithoutPlaylistInput[]
    createMany?: PlaylistToTrackCreateManyPlaylistInputEnvelope
    set?: PlaylistToTrackWhereUniqueInput | PlaylistToTrackWhereUniqueInput[]
    disconnect?: PlaylistToTrackWhereUniqueInput | PlaylistToTrackWhereUniqueInput[]
    delete?: PlaylistToTrackWhereUniqueInput | PlaylistToTrackWhereUniqueInput[]
    connect?: PlaylistToTrackWhereUniqueInput | PlaylistToTrackWhereUniqueInput[]
    update?: PlaylistToTrackUpdateWithWhereUniqueWithoutPlaylistInput | PlaylistToTrackUpdateWithWhereUniqueWithoutPlaylistInput[]
    updateMany?: PlaylistToTrackUpdateManyWithWhereWithoutPlaylistInput | PlaylistToTrackUpdateManyWithWhereWithoutPlaylistInput[]
    deleteMany?: PlaylistToTrackScalarWhereInput | PlaylistToTrackScalarWhereInput[]
  }

  export type AlbumsCreateNestedManyWithoutArtistInput = {
    create?: XOR<AlbumsCreateWithoutArtistInput, AlbumsUncheckedCreateWithoutArtistInput> | AlbumsCreateWithoutArtistInput[] | AlbumsUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumsCreateOrConnectWithoutArtistInput | AlbumsCreateOrConnectWithoutArtistInput[]
    createMany?: AlbumsCreateManyArtistInputEnvelope
    connect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
  }

  export type ArtistsOnTracksCreateNestedManyWithoutArtistInput = {
    create?: XOR<ArtistsOnTracksCreateWithoutArtistInput, ArtistsOnTracksUncheckedCreateWithoutArtistInput> | ArtistsOnTracksCreateWithoutArtistInput[] | ArtistsOnTracksUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: ArtistsOnTracksCreateOrConnectWithoutArtistInput | ArtistsOnTracksCreateOrConnectWithoutArtistInput[]
    createMany?: ArtistsOnTracksCreateManyArtistInputEnvelope
    connect?: ArtistsOnTracksWhereUniqueInput | ArtistsOnTracksWhereUniqueInput[]
  }

  export type GenreCreateNestedOneWithoutArtistsInput = {
    create?: XOR<GenreCreateWithoutArtistsInput, GenreUncheckedCreateWithoutArtistsInput>
    connectOrCreate?: GenreCreateOrConnectWithoutArtistsInput
    connect?: GenreWhereUniqueInput
  }

  export type UserFollowsArtistsCreateNestedManyWithoutArtistInput = {
    create?: XOR<UserFollowsArtistsCreateWithoutArtistInput, UserFollowsArtistsUncheckedCreateWithoutArtistInput> | UserFollowsArtistsCreateWithoutArtistInput[] | UserFollowsArtistsUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: UserFollowsArtistsCreateOrConnectWithoutArtistInput | UserFollowsArtistsCreateOrConnectWithoutArtistInput[]
    createMany?: UserFollowsArtistsCreateManyArtistInputEnvelope
    connect?: UserFollowsArtistsWhereUniqueInput | UserFollowsArtistsWhereUniqueInput[]
  }

  export type AlbumsUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<AlbumsCreateWithoutArtistInput, AlbumsUncheckedCreateWithoutArtistInput> | AlbumsCreateWithoutArtistInput[] | AlbumsUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumsCreateOrConnectWithoutArtistInput | AlbumsCreateOrConnectWithoutArtistInput[]
    createMany?: AlbumsCreateManyArtistInputEnvelope
    connect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
  }

  export type ArtistsOnTracksUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<ArtistsOnTracksCreateWithoutArtistInput, ArtistsOnTracksUncheckedCreateWithoutArtistInput> | ArtistsOnTracksCreateWithoutArtistInput[] | ArtistsOnTracksUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: ArtistsOnTracksCreateOrConnectWithoutArtistInput | ArtistsOnTracksCreateOrConnectWithoutArtistInput[]
    createMany?: ArtistsOnTracksCreateManyArtistInputEnvelope
    connect?: ArtistsOnTracksWhereUniqueInput | ArtistsOnTracksWhereUniqueInput[]
  }

  export type UserFollowsArtistsUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<UserFollowsArtistsCreateWithoutArtistInput, UserFollowsArtistsUncheckedCreateWithoutArtistInput> | UserFollowsArtistsCreateWithoutArtistInput[] | UserFollowsArtistsUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: UserFollowsArtistsCreateOrConnectWithoutArtistInput | UserFollowsArtistsCreateOrConnectWithoutArtistInput[]
    createMany?: UserFollowsArtistsCreateManyArtistInputEnvelope
    connect?: UserFollowsArtistsWhereUniqueInput | UserFollowsArtistsWhereUniqueInput[]
  }

  export type AlbumsUpdateManyWithoutArtistNestedInput = {
    create?: XOR<AlbumsCreateWithoutArtistInput, AlbumsUncheckedCreateWithoutArtistInput> | AlbumsCreateWithoutArtistInput[] | AlbumsUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumsCreateOrConnectWithoutArtistInput | AlbumsCreateOrConnectWithoutArtistInput[]
    upsert?: AlbumsUpsertWithWhereUniqueWithoutArtistInput | AlbumsUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: AlbumsCreateManyArtistInputEnvelope
    set?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    disconnect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    delete?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    connect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    update?: AlbumsUpdateWithWhereUniqueWithoutArtistInput | AlbumsUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: AlbumsUpdateManyWithWhereWithoutArtistInput | AlbumsUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: AlbumsScalarWhereInput | AlbumsScalarWhereInput[]
  }

  export type ArtistsOnTracksUpdateManyWithoutArtistNestedInput = {
    create?: XOR<ArtistsOnTracksCreateWithoutArtistInput, ArtistsOnTracksUncheckedCreateWithoutArtistInput> | ArtistsOnTracksCreateWithoutArtistInput[] | ArtistsOnTracksUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: ArtistsOnTracksCreateOrConnectWithoutArtistInput | ArtistsOnTracksCreateOrConnectWithoutArtistInput[]
    upsert?: ArtistsOnTracksUpsertWithWhereUniqueWithoutArtistInput | ArtistsOnTracksUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: ArtistsOnTracksCreateManyArtistInputEnvelope
    set?: ArtistsOnTracksWhereUniqueInput | ArtistsOnTracksWhereUniqueInput[]
    disconnect?: ArtistsOnTracksWhereUniqueInput | ArtistsOnTracksWhereUniqueInput[]
    delete?: ArtistsOnTracksWhereUniqueInput | ArtistsOnTracksWhereUniqueInput[]
    connect?: ArtistsOnTracksWhereUniqueInput | ArtistsOnTracksWhereUniqueInput[]
    update?: ArtistsOnTracksUpdateWithWhereUniqueWithoutArtistInput | ArtistsOnTracksUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: ArtistsOnTracksUpdateManyWithWhereWithoutArtistInput | ArtistsOnTracksUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: ArtistsOnTracksScalarWhereInput | ArtistsOnTracksScalarWhereInput[]
  }

  export type GenreUpdateOneRequiredWithoutArtistsNestedInput = {
    create?: XOR<GenreCreateWithoutArtistsInput, GenreUncheckedCreateWithoutArtistsInput>
    connectOrCreate?: GenreCreateOrConnectWithoutArtistsInput
    upsert?: GenreUpsertWithoutArtistsInput
    connect?: GenreWhereUniqueInput
    update?: XOR<XOR<GenreUpdateToOneWithWhereWithoutArtistsInput, GenreUpdateWithoutArtistsInput>, GenreUncheckedUpdateWithoutArtistsInput>
  }

  export type UserFollowsArtistsUpdateManyWithoutArtistNestedInput = {
    create?: XOR<UserFollowsArtistsCreateWithoutArtistInput, UserFollowsArtistsUncheckedCreateWithoutArtistInput> | UserFollowsArtistsCreateWithoutArtistInput[] | UserFollowsArtistsUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: UserFollowsArtistsCreateOrConnectWithoutArtistInput | UserFollowsArtistsCreateOrConnectWithoutArtistInput[]
    upsert?: UserFollowsArtistsUpsertWithWhereUniqueWithoutArtistInput | UserFollowsArtistsUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: UserFollowsArtistsCreateManyArtistInputEnvelope
    set?: UserFollowsArtistsWhereUniqueInput | UserFollowsArtistsWhereUniqueInput[]
    disconnect?: UserFollowsArtistsWhereUniqueInput | UserFollowsArtistsWhereUniqueInput[]
    delete?: UserFollowsArtistsWhereUniqueInput | UserFollowsArtistsWhereUniqueInput[]
    connect?: UserFollowsArtistsWhereUniqueInput | UserFollowsArtistsWhereUniqueInput[]
    update?: UserFollowsArtistsUpdateWithWhereUniqueWithoutArtistInput | UserFollowsArtistsUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: UserFollowsArtistsUpdateManyWithWhereWithoutArtistInput | UserFollowsArtistsUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: UserFollowsArtistsScalarWhereInput | UserFollowsArtistsScalarWhereInput[]
  }

  export type AlbumsUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<AlbumsCreateWithoutArtistInput, AlbumsUncheckedCreateWithoutArtistInput> | AlbumsCreateWithoutArtistInput[] | AlbumsUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumsCreateOrConnectWithoutArtistInput | AlbumsCreateOrConnectWithoutArtistInput[]
    upsert?: AlbumsUpsertWithWhereUniqueWithoutArtistInput | AlbumsUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: AlbumsCreateManyArtistInputEnvelope
    set?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    disconnect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    delete?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    connect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    update?: AlbumsUpdateWithWhereUniqueWithoutArtistInput | AlbumsUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: AlbumsUpdateManyWithWhereWithoutArtistInput | AlbumsUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: AlbumsScalarWhereInput | AlbumsScalarWhereInput[]
  }

  export type ArtistsOnTracksUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<ArtistsOnTracksCreateWithoutArtistInput, ArtistsOnTracksUncheckedCreateWithoutArtistInput> | ArtistsOnTracksCreateWithoutArtistInput[] | ArtistsOnTracksUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: ArtistsOnTracksCreateOrConnectWithoutArtistInput | ArtistsOnTracksCreateOrConnectWithoutArtistInput[]
    upsert?: ArtistsOnTracksUpsertWithWhereUniqueWithoutArtistInput | ArtistsOnTracksUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: ArtistsOnTracksCreateManyArtistInputEnvelope
    set?: ArtistsOnTracksWhereUniqueInput | ArtistsOnTracksWhereUniqueInput[]
    disconnect?: ArtistsOnTracksWhereUniqueInput | ArtistsOnTracksWhereUniqueInput[]
    delete?: ArtistsOnTracksWhereUniqueInput | ArtistsOnTracksWhereUniqueInput[]
    connect?: ArtistsOnTracksWhereUniqueInput | ArtistsOnTracksWhereUniqueInput[]
    update?: ArtistsOnTracksUpdateWithWhereUniqueWithoutArtistInput | ArtistsOnTracksUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: ArtistsOnTracksUpdateManyWithWhereWithoutArtistInput | ArtistsOnTracksUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: ArtistsOnTracksScalarWhereInput | ArtistsOnTracksScalarWhereInput[]
  }

  export type UserFollowsArtistsUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<UserFollowsArtistsCreateWithoutArtistInput, UserFollowsArtistsUncheckedCreateWithoutArtistInput> | UserFollowsArtistsCreateWithoutArtistInput[] | UserFollowsArtistsUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: UserFollowsArtistsCreateOrConnectWithoutArtistInput | UserFollowsArtistsCreateOrConnectWithoutArtistInput[]
    upsert?: UserFollowsArtistsUpsertWithWhereUniqueWithoutArtistInput | UserFollowsArtistsUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: UserFollowsArtistsCreateManyArtistInputEnvelope
    set?: UserFollowsArtistsWhereUniqueInput | UserFollowsArtistsWhereUniqueInput[]
    disconnect?: UserFollowsArtistsWhereUniqueInput | UserFollowsArtistsWhereUniqueInput[]
    delete?: UserFollowsArtistsWhereUniqueInput | UserFollowsArtistsWhereUniqueInput[]
    connect?: UserFollowsArtistsWhereUniqueInput | UserFollowsArtistsWhereUniqueInput[]
    update?: UserFollowsArtistsUpdateWithWhereUniqueWithoutArtistInput | UserFollowsArtistsUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: UserFollowsArtistsUpdateManyWithWhereWithoutArtistInput | UserFollowsArtistsUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: UserFollowsArtistsScalarWhereInput | UserFollowsArtistsScalarWhereInput[]
  }

  export type AlbumsCreateNestedManyWithoutGenreInput = {
    create?: XOR<AlbumsCreateWithoutGenreInput, AlbumsUncheckedCreateWithoutGenreInput> | AlbumsCreateWithoutGenreInput[] | AlbumsUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: AlbumsCreateOrConnectWithoutGenreInput | AlbumsCreateOrConnectWithoutGenreInput[]
    createMany?: AlbumsCreateManyGenreInputEnvelope
    connect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
  }

  export type TracksCreateNestedManyWithoutGenreInput = {
    create?: XOR<TracksCreateWithoutGenreInput, TracksUncheckedCreateWithoutGenreInput> | TracksCreateWithoutGenreInput[] | TracksUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutGenreInput | TracksCreateOrConnectWithoutGenreInput[]
    createMany?: TracksCreateManyGenreInputEnvelope
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
  }

  export type ArtistsCreateNestedManyWithoutGenreInput = {
    create?: XOR<ArtistsCreateWithoutGenreInput, ArtistsUncheckedCreateWithoutGenreInput> | ArtistsCreateWithoutGenreInput[] | ArtistsUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: ArtistsCreateOrConnectWithoutGenreInput | ArtistsCreateOrConnectWithoutGenreInput[]
    createMany?: ArtistsCreateManyGenreInputEnvelope
    connect?: ArtistsWhereUniqueInput | ArtistsWhereUniqueInput[]
  }

  export type AlbumsUncheckedCreateNestedManyWithoutGenreInput = {
    create?: XOR<AlbumsCreateWithoutGenreInput, AlbumsUncheckedCreateWithoutGenreInput> | AlbumsCreateWithoutGenreInput[] | AlbumsUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: AlbumsCreateOrConnectWithoutGenreInput | AlbumsCreateOrConnectWithoutGenreInput[]
    createMany?: AlbumsCreateManyGenreInputEnvelope
    connect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
  }

  export type TracksUncheckedCreateNestedManyWithoutGenreInput = {
    create?: XOR<TracksCreateWithoutGenreInput, TracksUncheckedCreateWithoutGenreInput> | TracksCreateWithoutGenreInput[] | TracksUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutGenreInput | TracksCreateOrConnectWithoutGenreInput[]
    createMany?: TracksCreateManyGenreInputEnvelope
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
  }

  export type ArtistsUncheckedCreateNestedManyWithoutGenreInput = {
    create?: XOR<ArtistsCreateWithoutGenreInput, ArtistsUncheckedCreateWithoutGenreInput> | ArtistsCreateWithoutGenreInput[] | ArtistsUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: ArtistsCreateOrConnectWithoutGenreInput | ArtistsCreateOrConnectWithoutGenreInput[]
    createMany?: ArtistsCreateManyGenreInputEnvelope
    connect?: ArtistsWhereUniqueInput | ArtistsWhereUniqueInput[]
  }

  export type AlbumsUpdateManyWithoutGenreNestedInput = {
    create?: XOR<AlbumsCreateWithoutGenreInput, AlbumsUncheckedCreateWithoutGenreInput> | AlbumsCreateWithoutGenreInput[] | AlbumsUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: AlbumsCreateOrConnectWithoutGenreInput | AlbumsCreateOrConnectWithoutGenreInput[]
    upsert?: AlbumsUpsertWithWhereUniqueWithoutGenreInput | AlbumsUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: AlbumsCreateManyGenreInputEnvelope
    set?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    disconnect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    delete?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    connect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    update?: AlbumsUpdateWithWhereUniqueWithoutGenreInput | AlbumsUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: AlbumsUpdateManyWithWhereWithoutGenreInput | AlbumsUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: AlbumsScalarWhereInput | AlbumsScalarWhereInput[]
  }

  export type TracksUpdateManyWithoutGenreNestedInput = {
    create?: XOR<TracksCreateWithoutGenreInput, TracksUncheckedCreateWithoutGenreInput> | TracksCreateWithoutGenreInput[] | TracksUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutGenreInput | TracksCreateOrConnectWithoutGenreInput[]
    upsert?: TracksUpsertWithWhereUniqueWithoutGenreInput | TracksUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: TracksCreateManyGenreInputEnvelope
    set?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    disconnect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    delete?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    update?: TracksUpdateWithWhereUniqueWithoutGenreInput | TracksUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: TracksUpdateManyWithWhereWithoutGenreInput | TracksUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: TracksScalarWhereInput | TracksScalarWhereInput[]
  }

  export type ArtistsUpdateManyWithoutGenreNestedInput = {
    create?: XOR<ArtistsCreateWithoutGenreInput, ArtistsUncheckedCreateWithoutGenreInput> | ArtistsCreateWithoutGenreInput[] | ArtistsUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: ArtistsCreateOrConnectWithoutGenreInput | ArtistsCreateOrConnectWithoutGenreInput[]
    upsert?: ArtistsUpsertWithWhereUniqueWithoutGenreInput | ArtistsUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: ArtistsCreateManyGenreInputEnvelope
    set?: ArtistsWhereUniqueInput | ArtistsWhereUniqueInput[]
    disconnect?: ArtistsWhereUniqueInput | ArtistsWhereUniqueInput[]
    delete?: ArtistsWhereUniqueInput | ArtistsWhereUniqueInput[]
    connect?: ArtistsWhereUniqueInput | ArtistsWhereUniqueInput[]
    update?: ArtistsUpdateWithWhereUniqueWithoutGenreInput | ArtistsUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: ArtistsUpdateManyWithWhereWithoutGenreInput | ArtistsUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: ArtistsScalarWhereInput | ArtistsScalarWhereInput[]
  }

  export type AlbumsUncheckedUpdateManyWithoutGenreNestedInput = {
    create?: XOR<AlbumsCreateWithoutGenreInput, AlbumsUncheckedCreateWithoutGenreInput> | AlbumsCreateWithoutGenreInput[] | AlbumsUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: AlbumsCreateOrConnectWithoutGenreInput | AlbumsCreateOrConnectWithoutGenreInput[]
    upsert?: AlbumsUpsertWithWhereUniqueWithoutGenreInput | AlbumsUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: AlbumsCreateManyGenreInputEnvelope
    set?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    disconnect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    delete?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    connect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    update?: AlbumsUpdateWithWhereUniqueWithoutGenreInput | AlbumsUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: AlbumsUpdateManyWithWhereWithoutGenreInput | AlbumsUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: AlbumsScalarWhereInput | AlbumsScalarWhereInput[]
  }

  export type TracksUncheckedUpdateManyWithoutGenreNestedInput = {
    create?: XOR<TracksCreateWithoutGenreInput, TracksUncheckedCreateWithoutGenreInput> | TracksCreateWithoutGenreInput[] | TracksUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutGenreInput | TracksCreateOrConnectWithoutGenreInput[]
    upsert?: TracksUpsertWithWhereUniqueWithoutGenreInput | TracksUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: TracksCreateManyGenreInputEnvelope
    set?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    disconnect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    delete?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    update?: TracksUpdateWithWhereUniqueWithoutGenreInput | TracksUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: TracksUpdateManyWithWhereWithoutGenreInput | TracksUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: TracksScalarWhereInput | TracksScalarWhereInput[]
  }

  export type ArtistsUncheckedUpdateManyWithoutGenreNestedInput = {
    create?: XOR<ArtistsCreateWithoutGenreInput, ArtistsUncheckedCreateWithoutGenreInput> | ArtistsCreateWithoutGenreInput[] | ArtistsUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: ArtistsCreateOrConnectWithoutGenreInput | ArtistsCreateOrConnectWithoutGenreInput[]
    upsert?: ArtistsUpsertWithWhereUniqueWithoutGenreInput | ArtistsUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: ArtistsCreateManyGenreInputEnvelope
    set?: ArtistsWhereUniqueInput | ArtistsWhereUniqueInput[]
    disconnect?: ArtistsWhereUniqueInput | ArtistsWhereUniqueInput[]
    delete?: ArtistsWhereUniqueInput | ArtistsWhereUniqueInput[]
    connect?: ArtistsWhereUniqueInput | ArtistsWhereUniqueInput[]
    update?: ArtistsUpdateWithWhereUniqueWithoutGenreInput | ArtistsUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: ArtistsUpdateManyWithWhereWithoutGenreInput | ArtistsUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: ArtistsScalarWhereInput | ArtistsScalarWhereInput[]
  }

  export type ArtistsCreateNestedOneWithoutTracksInput = {
    create?: XOR<ArtistsCreateWithoutTracksInput, ArtistsUncheckedCreateWithoutTracksInput>
    connectOrCreate?: ArtistsCreateOrConnectWithoutTracksInput
    connect?: ArtistsWhereUniqueInput
  }

  export type TracksCreateNestedOneWithoutArtistInput = {
    create?: XOR<TracksCreateWithoutArtistInput, TracksUncheckedCreateWithoutArtistInput>
    connectOrCreate?: TracksCreateOrConnectWithoutArtistInput
    connect?: TracksWhereUniqueInput
  }

  export type ArtistsUpdateOneRequiredWithoutTracksNestedInput = {
    create?: XOR<ArtistsCreateWithoutTracksInput, ArtistsUncheckedCreateWithoutTracksInput>
    connectOrCreate?: ArtistsCreateOrConnectWithoutTracksInput
    upsert?: ArtistsUpsertWithoutTracksInput
    connect?: ArtistsWhereUniqueInput
    update?: XOR<XOR<ArtistsUpdateToOneWithWhereWithoutTracksInput, ArtistsUpdateWithoutTracksInput>, ArtistsUncheckedUpdateWithoutTracksInput>
  }

  export type TracksUpdateOneRequiredWithoutArtistNestedInput = {
    create?: XOR<TracksCreateWithoutArtistInput, TracksUncheckedCreateWithoutArtistInput>
    connectOrCreate?: TracksCreateOrConnectWithoutArtistInput
    upsert?: TracksUpsertWithoutArtistInput
    connect?: TracksWhereUniqueInput
    update?: XOR<XOR<TracksUpdateToOneWithWhereWithoutArtistInput, TracksUpdateWithoutArtistInput>, TracksUncheckedUpdateWithoutArtistInput>
  }

  export type AlbumsCreateNestedOneWithoutTracksInput = {
    create?: XOR<AlbumsCreateWithoutTracksInput, AlbumsUncheckedCreateWithoutTracksInput>
    connectOrCreate?: AlbumsCreateOrConnectWithoutTracksInput
    connect?: AlbumsWhereUniqueInput
  }

  export type TracksCreateNestedOneWithoutAlbumInput = {
    create?: XOR<TracksCreateWithoutAlbumInput, TracksUncheckedCreateWithoutAlbumInput>
    connectOrCreate?: TracksCreateOrConnectWithoutAlbumInput
    connect?: TracksWhereUniqueInput
  }

  export type AlbumsUpdateOneRequiredWithoutTracksNestedInput = {
    create?: XOR<AlbumsCreateWithoutTracksInput, AlbumsUncheckedCreateWithoutTracksInput>
    connectOrCreate?: AlbumsCreateOrConnectWithoutTracksInput
    upsert?: AlbumsUpsertWithoutTracksInput
    connect?: AlbumsWhereUniqueInput
    update?: XOR<XOR<AlbumsUpdateToOneWithWhereWithoutTracksInput, AlbumsUpdateWithoutTracksInput>, AlbumsUncheckedUpdateWithoutTracksInput>
  }

  export type TracksUpdateOneRequiredWithoutAlbumNestedInput = {
    create?: XOR<TracksCreateWithoutAlbumInput, TracksUncheckedCreateWithoutAlbumInput>
    connectOrCreate?: TracksCreateOrConnectWithoutAlbumInput
    upsert?: TracksUpsertWithoutAlbumInput
    connect?: TracksWhereUniqueInput
    update?: XOR<XOR<TracksUpdateToOneWithWhereWithoutAlbumInput, TracksUpdateWithoutAlbumInput>, TracksUncheckedUpdateWithoutAlbumInput>
  }

  export type UserCreateNestedOneWithoutFavTracksInput = {
    create?: XOR<UserCreateWithoutFavTracksInput, UserUncheckedCreateWithoutFavTracksInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavTracksInput
    connect?: UserWhereUniqueInput
  }

  export type TracksCreateNestedOneWithoutFavsOfUsersInput = {
    create?: XOR<TracksCreateWithoutFavsOfUsersInput, TracksUncheckedCreateWithoutFavsOfUsersInput>
    connectOrCreate?: TracksCreateOrConnectWithoutFavsOfUsersInput
    connect?: TracksWhereUniqueInput
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateOneRequiredWithoutFavTracksNestedInput = {
    create?: XOR<UserCreateWithoutFavTracksInput, UserUncheckedCreateWithoutFavTracksInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavTracksInput
    upsert?: UserUpsertWithoutFavTracksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavTracksInput, UserUpdateWithoutFavTracksInput>, UserUncheckedUpdateWithoutFavTracksInput>
  }

  export type TracksUpdateOneRequiredWithoutFavsOfUsersNestedInput = {
    create?: XOR<TracksCreateWithoutFavsOfUsersInput, TracksUncheckedCreateWithoutFavsOfUsersInput>
    connectOrCreate?: TracksCreateOrConnectWithoutFavsOfUsersInput
    upsert?: TracksUpsertWithoutFavsOfUsersInput
    connect?: TracksWhereUniqueInput
    update?: XOR<XOR<TracksUpdateToOneWithWhereWithoutFavsOfUsersInput, TracksUpdateWithoutFavsOfUsersInput>, TracksUncheckedUpdateWithoutFavsOfUsersInput>
  }

  export type PlaylistsCreateNestedOneWithoutTracksConnectionsInput = {
    create?: XOR<PlaylistsCreateWithoutTracksConnectionsInput, PlaylistsUncheckedCreateWithoutTracksConnectionsInput>
    connectOrCreate?: PlaylistsCreateOrConnectWithoutTracksConnectionsInput
    connect?: PlaylistsWhereUniqueInput
  }

  export type TracksCreateNestedOneWithoutPlaylistConnectionsInput = {
    create?: XOR<TracksCreateWithoutPlaylistConnectionsInput, TracksUncheckedCreateWithoutPlaylistConnectionsInput>
    connectOrCreate?: TracksCreateOrConnectWithoutPlaylistConnectionsInput
    connect?: TracksWhereUniqueInput
  }

  export type PlaylistsUpdateOneRequiredWithoutTracksConnectionsNestedInput = {
    create?: XOR<PlaylistsCreateWithoutTracksConnectionsInput, PlaylistsUncheckedCreateWithoutTracksConnectionsInput>
    connectOrCreate?: PlaylistsCreateOrConnectWithoutTracksConnectionsInput
    upsert?: PlaylistsUpsertWithoutTracksConnectionsInput
    connect?: PlaylistsWhereUniqueInput
    update?: XOR<XOR<PlaylistsUpdateToOneWithWhereWithoutTracksConnectionsInput, PlaylistsUpdateWithoutTracksConnectionsInput>, PlaylistsUncheckedUpdateWithoutTracksConnectionsInput>
  }

  export type TracksUpdateOneRequiredWithoutPlaylistConnectionsNestedInput = {
    create?: XOR<TracksCreateWithoutPlaylistConnectionsInput, TracksUncheckedCreateWithoutPlaylistConnectionsInput>
    connectOrCreate?: TracksCreateOrConnectWithoutPlaylistConnectionsInput
    upsert?: TracksUpsertWithoutPlaylistConnectionsInput
    connect?: TracksWhereUniqueInput
    update?: XOR<XOR<TracksUpdateToOneWithWhereWithoutPlaylistConnectionsInput, TracksUpdateWithoutPlaylistConnectionsInput>, TracksUncheckedUpdateWithoutPlaylistConnectionsInput>
  }

  export type UserCreateNestedOneWithoutFollowedPlaylistsInput = {
    create?: XOR<UserCreateWithoutFollowedPlaylistsInput, UserUncheckedCreateWithoutFollowedPlaylistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowedPlaylistsInput
    connect?: UserWhereUniqueInput
  }

  export type PlaylistsCreateNestedOneWithoutFollowersInput = {
    create?: XOR<PlaylistsCreateWithoutFollowersInput, PlaylistsUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: PlaylistsCreateOrConnectWithoutFollowersInput
    connect?: PlaylistsWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFollowedPlaylistsNestedInput = {
    create?: XOR<UserCreateWithoutFollowedPlaylistsInput, UserUncheckedCreateWithoutFollowedPlaylistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowedPlaylistsInput
    upsert?: UserUpsertWithoutFollowedPlaylistsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFollowedPlaylistsInput, UserUpdateWithoutFollowedPlaylistsInput>, UserUncheckedUpdateWithoutFollowedPlaylistsInput>
  }

  export type PlaylistsUpdateOneRequiredWithoutFollowersNestedInput = {
    create?: XOR<PlaylistsCreateWithoutFollowersInput, PlaylistsUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: PlaylistsCreateOrConnectWithoutFollowersInput
    upsert?: PlaylistsUpsertWithoutFollowersInput
    connect?: PlaylistsWhereUniqueInput
    update?: XOR<XOR<PlaylistsUpdateToOneWithWhereWithoutFollowersInput, PlaylistsUpdateWithoutFollowersInput>, PlaylistsUncheckedUpdateWithoutFollowersInput>
  }

  export type UserCreateNestedOneWithoutArtistsFollowedInput = {
    create?: XOR<UserCreateWithoutArtistsFollowedInput, UserUncheckedCreateWithoutArtistsFollowedInput>
    connectOrCreate?: UserCreateOrConnectWithoutArtistsFollowedInput
    connect?: UserWhereUniqueInput
  }

  export type ArtistsCreateNestedOneWithoutFollowersInput = {
    create?: XOR<ArtistsCreateWithoutFollowersInput, ArtistsUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: ArtistsCreateOrConnectWithoutFollowersInput
    connect?: ArtistsWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutArtistsFollowedNestedInput = {
    create?: XOR<UserCreateWithoutArtistsFollowedInput, UserUncheckedCreateWithoutArtistsFollowedInput>
    connectOrCreate?: UserCreateOrConnectWithoutArtistsFollowedInput
    upsert?: UserUpsertWithoutArtistsFollowedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutArtistsFollowedInput, UserUpdateWithoutArtistsFollowedInput>, UserUncheckedUpdateWithoutArtistsFollowedInput>
  }

  export type ArtistsUpdateOneRequiredWithoutFollowersNestedInput = {
    create?: XOR<ArtistsCreateWithoutFollowersInput, ArtistsUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: ArtistsCreateOrConnectWithoutFollowersInput
    upsert?: ArtistsUpsertWithoutFollowersInput
    connect?: ArtistsWhereUniqueInput
    update?: XOR<XOR<ArtistsUpdateToOneWithWhereWithoutFollowersInput, ArtistsUpdateWithoutFollowersInput>, ArtistsUncheckedUpdateWithoutFollowersInput>
  }

  export type UserCreateNestedOneWithoutLikedAlbumsInput = {
    create?: XOR<UserCreateWithoutLikedAlbumsInput, UserUncheckedCreateWithoutLikedAlbumsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedAlbumsInput
    connect?: UserWhereUniqueInput
  }

  export type AlbumsCreateNestedOneWithoutLikedByUsersInput = {
    create?: XOR<AlbumsCreateWithoutLikedByUsersInput, AlbumsUncheckedCreateWithoutLikedByUsersInput>
    connectOrCreate?: AlbumsCreateOrConnectWithoutLikedByUsersInput
    connect?: AlbumsWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLikedAlbumsNestedInput = {
    create?: XOR<UserCreateWithoutLikedAlbumsInput, UserUncheckedCreateWithoutLikedAlbumsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedAlbumsInput
    upsert?: UserUpsertWithoutLikedAlbumsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikedAlbumsInput, UserUpdateWithoutLikedAlbumsInput>, UserUncheckedUpdateWithoutLikedAlbumsInput>
  }

  export type AlbumsUpdateOneRequiredWithoutLikedByUsersNestedInput = {
    create?: XOR<AlbumsCreateWithoutLikedByUsersInput, AlbumsUncheckedCreateWithoutLikedByUsersInput>
    connectOrCreate?: AlbumsCreateOrConnectWithoutLikedByUsersInput
    upsert?: AlbumsUpsertWithoutLikedByUsersInput
    connect?: AlbumsWhereUniqueInput
    update?: XOR<XOR<AlbumsUpdateToOneWithWhereWithoutLikedByUsersInput, AlbumsUpdateWithoutLikedByUsersInput>, AlbumsUncheckedUpdateWithoutLikedByUsersInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
    isSet?: boolean
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
    isSet?: boolean
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
    isSet?: boolean
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserLikedAlbumsCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    album: AlbumsCreateNestedOneWithoutLikedByUsersInput
  }

  export type UserLikedAlbumsUncheckedCreateWithoutUserInput = {
    id?: string
    albumId: string
    createdAt?: Date | string
  }

  export type UserLikedAlbumsCreateOrConnectWithoutUserInput = {
    where: UserLikedAlbumsWhereUniqueInput
    create: XOR<UserLikedAlbumsCreateWithoutUserInput, UserLikedAlbumsUncheckedCreateWithoutUserInput>
  }

  export type UserLikedAlbumsCreateManyUserInputEnvelope = {
    data: UserLikedAlbumsCreateManyUserInput | UserLikedAlbumsCreateManyUserInput[]
  }

  export type UserFollowsArtistsCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    artist: ArtistsCreateNestedOneWithoutFollowersInput
  }

  export type UserFollowsArtistsUncheckedCreateWithoutUserInput = {
    id?: string
    artistId: string
    createdAt?: Date | string
  }

  export type UserFollowsArtistsCreateOrConnectWithoutUserInput = {
    where: UserFollowsArtistsWhereUniqueInput
    create: XOR<UserFollowsArtistsCreateWithoutUserInput, UserFollowsArtistsUncheckedCreateWithoutUserInput>
  }

  export type UserFollowsArtistsCreateManyUserInputEnvelope = {
    data: UserFollowsArtistsCreateManyUserInput | UserFollowsArtistsCreateManyUserInput[]
  }

  export type UserFollowsPlaylistsCreateWithoutUserInput = {
    id?: string
    playlist: PlaylistsCreateNestedOneWithoutFollowersInput
  }

  export type UserFollowsPlaylistsUncheckedCreateWithoutUserInput = {
    id?: string
    playlistId: string
  }

  export type UserFollowsPlaylistsCreateOrConnectWithoutUserInput = {
    where: UserFollowsPlaylistsWhereUniqueInput
    create: XOR<UserFollowsPlaylistsCreateWithoutUserInput, UserFollowsPlaylistsUncheckedCreateWithoutUserInput>
  }

  export type UserFollowsPlaylistsCreateManyUserInputEnvelope = {
    data: UserFollowsPlaylistsCreateManyUserInput | UserFollowsPlaylistsCreateManyUserInput[]
  }

  export type PlaylistsCreateWithoutUserInput = {
    id?: string
    name: string
    thumbnail: string
    publicAccess?: boolean
    followers?: UserFollowsPlaylistsCreateNestedManyWithoutPlaylistInput
    tracksConnections?: PlaylistToTrackCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistsUncheckedCreateWithoutUserInput = {
    id?: string
    name: string
    thumbnail: string
    publicAccess?: boolean
    followers?: UserFollowsPlaylistsUncheckedCreateNestedManyWithoutPlaylistInput
    tracksConnections?: PlaylistToTrackUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistsCreateOrConnectWithoutUserInput = {
    where: PlaylistsWhereUniqueInput
    create: XOR<PlaylistsCreateWithoutUserInput, PlaylistsUncheckedCreateWithoutUserInput>
  }

  export type PlaylistsCreateManyUserInputEnvelope = {
    data: PlaylistsCreateManyUserInput | PlaylistsCreateManyUserInput[]
  }

  export type UserFavsTracksCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    track: TracksCreateNestedOneWithoutFavsOfUsersInput
  }

  export type UserFavsTracksUncheckedCreateWithoutUserInput = {
    id?: string
    trackId: string
    createdAt?: Date | string
  }

  export type UserFavsTracksCreateOrConnectWithoutUserInput = {
    where: UserFavsTracksWhereUniqueInput
    create: XOR<UserFavsTracksCreateWithoutUserInput, UserFavsTracksUncheckedCreateWithoutUserInput>
  }

  export type UserFavsTracksCreateManyUserInputEnvelope = {
    data: UserFavsTracksCreateManyUserInput | UserFavsTracksCreateManyUserInput[]
  }

  export type UserLikedAlbumsUpsertWithWhereUniqueWithoutUserInput = {
    where: UserLikedAlbumsWhereUniqueInput
    update: XOR<UserLikedAlbumsUpdateWithoutUserInput, UserLikedAlbumsUncheckedUpdateWithoutUserInput>
    create: XOR<UserLikedAlbumsCreateWithoutUserInput, UserLikedAlbumsUncheckedCreateWithoutUserInput>
  }

  export type UserLikedAlbumsUpdateWithWhereUniqueWithoutUserInput = {
    where: UserLikedAlbumsWhereUniqueInput
    data: XOR<UserLikedAlbumsUpdateWithoutUserInput, UserLikedAlbumsUncheckedUpdateWithoutUserInput>
  }

  export type UserLikedAlbumsUpdateManyWithWhereWithoutUserInput = {
    where: UserLikedAlbumsScalarWhereInput
    data: XOR<UserLikedAlbumsUpdateManyMutationInput, UserLikedAlbumsUncheckedUpdateManyWithoutUserInput>
  }

  export type UserLikedAlbumsScalarWhereInput = {
    AND?: UserLikedAlbumsScalarWhereInput | UserLikedAlbumsScalarWhereInput[]
    OR?: UserLikedAlbumsScalarWhereInput[]
    NOT?: UserLikedAlbumsScalarWhereInput | UserLikedAlbumsScalarWhereInput[]
    id?: StringFilter<"UserLikedAlbums"> | string
    userId?: StringFilter<"UserLikedAlbums"> | string
    albumId?: StringFilter<"UserLikedAlbums"> | string
    createdAt?: DateTimeFilter<"UserLikedAlbums"> | Date | string
  }

  export type UserFollowsArtistsUpsertWithWhereUniqueWithoutUserInput = {
    where: UserFollowsArtistsWhereUniqueInput
    update: XOR<UserFollowsArtistsUpdateWithoutUserInput, UserFollowsArtistsUncheckedUpdateWithoutUserInput>
    create: XOR<UserFollowsArtistsCreateWithoutUserInput, UserFollowsArtistsUncheckedCreateWithoutUserInput>
  }

  export type UserFollowsArtistsUpdateWithWhereUniqueWithoutUserInput = {
    where: UserFollowsArtistsWhereUniqueInput
    data: XOR<UserFollowsArtistsUpdateWithoutUserInput, UserFollowsArtistsUncheckedUpdateWithoutUserInput>
  }

  export type UserFollowsArtistsUpdateManyWithWhereWithoutUserInput = {
    where: UserFollowsArtistsScalarWhereInput
    data: XOR<UserFollowsArtistsUpdateManyMutationInput, UserFollowsArtistsUncheckedUpdateManyWithoutUserInput>
  }

  export type UserFollowsArtistsScalarWhereInput = {
    AND?: UserFollowsArtistsScalarWhereInput | UserFollowsArtistsScalarWhereInput[]
    OR?: UserFollowsArtistsScalarWhereInput[]
    NOT?: UserFollowsArtistsScalarWhereInput | UserFollowsArtistsScalarWhereInput[]
    id?: StringFilter<"UserFollowsArtists"> | string
    userId?: StringFilter<"UserFollowsArtists"> | string
    artistId?: StringFilter<"UserFollowsArtists"> | string
    createdAt?: DateTimeFilter<"UserFollowsArtists"> | Date | string
  }

  export type UserFollowsPlaylistsUpsertWithWhereUniqueWithoutUserInput = {
    where: UserFollowsPlaylistsWhereUniqueInput
    update: XOR<UserFollowsPlaylistsUpdateWithoutUserInput, UserFollowsPlaylistsUncheckedUpdateWithoutUserInput>
    create: XOR<UserFollowsPlaylistsCreateWithoutUserInput, UserFollowsPlaylistsUncheckedCreateWithoutUserInput>
  }

  export type UserFollowsPlaylistsUpdateWithWhereUniqueWithoutUserInput = {
    where: UserFollowsPlaylistsWhereUniqueInput
    data: XOR<UserFollowsPlaylistsUpdateWithoutUserInput, UserFollowsPlaylistsUncheckedUpdateWithoutUserInput>
  }

  export type UserFollowsPlaylistsUpdateManyWithWhereWithoutUserInput = {
    where: UserFollowsPlaylistsScalarWhereInput
    data: XOR<UserFollowsPlaylistsUpdateManyMutationInput, UserFollowsPlaylistsUncheckedUpdateManyWithoutUserInput>
  }

  export type UserFollowsPlaylistsScalarWhereInput = {
    AND?: UserFollowsPlaylistsScalarWhereInput | UserFollowsPlaylistsScalarWhereInput[]
    OR?: UserFollowsPlaylistsScalarWhereInput[]
    NOT?: UserFollowsPlaylistsScalarWhereInput | UserFollowsPlaylistsScalarWhereInput[]
    id?: StringFilter<"UserFollowsPlaylists"> | string
    userId?: StringFilter<"UserFollowsPlaylists"> | string
    playlistId?: StringFilter<"UserFollowsPlaylists"> | string
  }

  export type PlaylistsUpsertWithWhereUniqueWithoutUserInput = {
    where: PlaylistsWhereUniqueInput
    update: XOR<PlaylistsUpdateWithoutUserInput, PlaylistsUncheckedUpdateWithoutUserInput>
    create: XOR<PlaylistsCreateWithoutUserInput, PlaylistsUncheckedCreateWithoutUserInput>
  }

  export type PlaylistsUpdateWithWhereUniqueWithoutUserInput = {
    where: PlaylistsWhereUniqueInput
    data: XOR<PlaylistsUpdateWithoutUserInput, PlaylistsUncheckedUpdateWithoutUserInput>
  }

  export type PlaylistsUpdateManyWithWhereWithoutUserInput = {
    where: PlaylistsScalarWhereInput
    data: XOR<PlaylistsUpdateManyMutationInput, PlaylistsUncheckedUpdateManyWithoutUserInput>
  }

  export type PlaylistsScalarWhereInput = {
    AND?: PlaylistsScalarWhereInput | PlaylistsScalarWhereInput[]
    OR?: PlaylistsScalarWhereInput[]
    NOT?: PlaylistsScalarWhereInput | PlaylistsScalarWhereInput[]
    id?: StringFilter<"Playlists"> | string
    name?: StringFilter<"Playlists"> | string
    thumbnail?: StringFilter<"Playlists"> | string
    publicAccess?: BoolFilter<"Playlists"> | boolean
    userId?: StringFilter<"Playlists"> | string
  }

  export type UserFavsTracksUpsertWithWhereUniqueWithoutUserInput = {
    where: UserFavsTracksWhereUniqueInput
    update: XOR<UserFavsTracksUpdateWithoutUserInput, UserFavsTracksUncheckedUpdateWithoutUserInput>
    create: XOR<UserFavsTracksCreateWithoutUserInput, UserFavsTracksUncheckedCreateWithoutUserInput>
  }

  export type UserFavsTracksUpdateWithWhereUniqueWithoutUserInput = {
    where: UserFavsTracksWhereUniqueInput
    data: XOR<UserFavsTracksUpdateWithoutUserInput, UserFavsTracksUncheckedUpdateWithoutUserInput>
  }

  export type UserFavsTracksUpdateManyWithWhereWithoutUserInput = {
    where: UserFavsTracksScalarWhereInput
    data: XOR<UserFavsTracksUpdateManyMutationInput, UserFavsTracksUncheckedUpdateManyWithoutUserInput>
  }

  export type UserFavsTracksScalarWhereInput = {
    AND?: UserFavsTracksScalarWhereInput | UserFavsTracksScalarWhereInput[]
    OR?: UserFavsTracksScalarWhereInput[]
    NOT?: UserFavsTracksScalarWhereInput | UserFavsTracksScalarWhereInput[]
    id?: StringFilter<"UserFavsTracks"> | string
    userId?: StringFilter<"UserFavsTracks"> | string
    trackId?: StringFilter<"UserFavsTracks"> | string
    createdAt?: DateTimeFilter<"UserFavsTracks"> | Date | string
  }

  export type ArtistsOnTracksCreateWithoutTrackInput = {
    id?: string
    artist: ArtistsCreateNestedOneWithoutTracksInput
  }

  export type ArtistsOnTracksUncheckedCreateWithoutTrackInput = {
    id?: string
    artistName: string
  }

  export type ArtistsOnTracksCreateOrConnectWithoutTrackInput = {
    where: ArtistsOnTracksWhereUniqueInput
    create: XOR<ArtistsOnTracksCreateWithoutTrackInput, ArtistsOnTracksUncheckedCreateWithoutTrackInput>
  }

  export type ArtistsOnTracksCreateManyTrackInputEnvelope = {
    data: ArtistsOnTracksCreateManyTrackInput | ArtistsOnTracksCreateManyTrackInput[]
  }

  export type GenreCreateWithoutTracksInput = {
    id?: string
    name: string
    albums?: AlbumsCreateNestedManyWithoutGenreInput
    artists?: ArtistsCreateNestedManyWithoutGenreInput
  }

  export type GenreUncheckedCreateWithoutTracksInput = {
    id?: string
    name: string
    albums?: AlbumsUncheckedCreateNestedManyWithoutGenreInput
    artists?: ArtistsUncheckedCreateNestedManyWithoutGenreInput
  }

  export type GenreCreateOrConnectWithoutTracksInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutTracksInput, GenreUncheckedCreateWithoutTracksInput>
  }

  export type TracksOnAlbumsCreateWithoutTrackInput = {
    id?: string
    album: AlbumsCreateNestedOneWithoutTracksInput
  }

  export type TracksOnAlbumsUncheckedCreateWithoutTrackInput = {
    id?: string
    albumId: string
  }

  export type TracksOnAlbumsCreateOrConnectWithoutTrackInput = {
    where: TracksOnAlbumsWhereUniqueInput
    create: XOR<TracksOnAlbumsCreateWithoutTrackInput, TracksOnAlbumsUncheckedCreateWithoutTrackInput>
  }

  export type TracksOnAlbumsCreateManyTrackInputEnvelope = {
    data: TracksOnAlbumsCreateManyTrackInput | TracksOnAlbumsCreateManyTrackInput[]
  }

  export type PlaylistToTrackCreateWithoutTrackInput = {
    id?: string
    playlist: PlaylistsCreateNestedOneWithoutTracksConnectionsInput
  }

  export type PlaylistToTrackUncheckedCreateWithoutTrackInput = {
    id?: string
    playlistId: string
  }

  export type PlaylistToTrackCreateOrConnectWithoutTrackInput = {
    where: PlaylistToTrackWhereUniqueInput
    create: XOR<PlaylistToTrackCreateWithoutTrackInput, PlaylistToTrackUncheckedCreateWithoutTrackInput>
  }

  export type PlaylistToTrackCreateManyTrackInputEnvelope = {
    data: PlaylistToTrackCreateManyTrackInput | PlaylistToTrackCreateManyTrackInput[]
  }

  export type UserFavsTracksCreateWithoutTrackInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavTracksInput
  }

  export type UserFavsTracksUncheckedCreateWithoutTrackInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type UserFavsTracksCreateOrConnectWithoutTrackInput = {
    where: UserFavsTracksWhereUniqueInput
    create: XOR<UserFavsTracksCreateWithoutTrackInput, UserFavsTracksUncheckedCreateWithoutTrackInput>
  }

  export type UserFavsTracksCreateManyTrackInputEnvelope = {
    data: UserFavsTracksCreateManyTrackInput | UserFavsTracksCreateManyTrackInput[]
  }

  export type ArtistsOnTracksUpsertWithWhereUniqueWithoutTrackInput = {
    where: ArtistsOnTracksWhereUniqueInput
    update: XOR<ArtistsOnTracksUpdateWithoutTrackInput, ArtistsOnTracksUncheckedUpdateWithoutTrackInput>
    create: XOR<ArtistsOnTracksCreateWithoutTrackInput, ArtistsOnTracksUncheckedCreateWithoutTrackInput>
  }

  export type ArtistsOnTracksUpdateWithWhereUniqueWithoutTrackInput = {
    where: ArtistsOnTracksWhereUniqueInput
    data: XOR<ArtistsOnTracksUpdateWithoutTrackInput, ArtistsOnTracksUncheckedUpdateWithoutTrackInput>
  }

  export type ArtistsOnTracksUpdateManyWithWhereWithoutTrackInput = {
    where: ArtistsOnTracksScalarWhereInput
    data: XOR<ArtistsOnTracksUpdateManyMutationInput, ArtistsOnTracksUncheckedUpdateManyWithoutTrackInput>
  }

  export type ArtistsOnTracksScalarWhereInput = {
    AND?: ArtistsOnTracksScalarWhereInput | ArtistsOnTracksScalarWhereInput[]
    OR?: ArtistsOnTracksScalarWhereInput[]
    NOT?: ArtistsOnTracksScalarWhereInput | ArtistsOnTracksScalarWhereInput[]
    id?: StringFilter<"ArtistsOnTracks"> | string
    artistName?: StringFilter<"ArtistsOnTracks"> | string
    trackId?: StringFilter<"ArtistsOnTracks"> | string
  }

  export type GenreUpsertWithoutTracksInput = {
    update: XOR<GenreUpdateWithoutTracksInput, GenreUncheckedUpdateWithoutTracksInput>
    create: XOR<GenreCreateWithoutTracksInput, GenreUncheckedCreateWithoutTracksInput>
    where?: GenreWhereInput
  }

  export type GenreUpdateToOneWithWhereWithoutTracksInput = {
    where?: GenreWhereInput
    data: XOR<GenreUpdateWithoutTracksInput, GenreUncheckedUpdateWithoutTracksInput>
  }

  export type GenreUpdateWithoutTracksInput = {
    name?: StringFieldUpdateOperationsInput | string
    albums?: AlbumsUpdateManyWithoutGenreNestedInput
    artists?: ArtistsUpdateManyWithoutGenreNestedInput
  }

  export type GenreUncheckedUpdateWithoutTracksInput = {
    name?: StringFieldUpdateOperationsInput | string
    albums?: AlbumsUncheckedUpdateManyWithoutGenreNestedInput
    artists?: ArtistsUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type TracksOnAlbumsUpsertWithWhereUniqueWithoutTrackInput = {
    where: TracksOnAlbumsWhereUniqueInput
    update: XOR<TracksOnAlbumsUpdateWithoutTrackInput, TracksOnAlbumsUncheckedUpdateWithoutTrackInput>
    create: XOR<TracksOnAlbumsCreateWithoutTrackInput, TracksOnAlbumsUncheckedCreateWithoutTrackInput>
  }

  export type TracksOnAlbumsUpdateWithWhereUniqueWithoutTrackInput = {
    where: TracksOnAlbumsWhereUniqueInput
    data: XOR<TracksOnAlbumsUpdateWithoutTrackInput, TracksOnAlbumsUncheckedUpdateWithoutTrackInput>
  }

  export type TracksOnAlbumsUpdateManyWithWhereWithoutTrackInput = {
    where: TracksOnAlbumsScalarWhereInput
    data: XOR<TracksOnAlbumsUpdateManyMutationInput, TracksOnAlbumsUncheckedUpdateManyWithoutTrackInput>
  }

  export type TracksOnAlbumsScalarWhereInput = {
    AND?: TracksOnAlbumsScalarWhereInput | TracksOnAlbumsScalarWhereInput[]
    OR?: TracksOnAlbumsScalarWhereInput[]
    NOT?: TracksOnAlbumsScalarWhereInput | TracksOnAlbumsScalarWhereInput[]
    id?: StringFilter<"TracksOnAlbums"> | string
    albumId?: StringFilter<"TracksOnAlbums"> | string
    trackId?: StringFilter<"TracksOnAlbums"> | string
  }

  export type PlaylistToTrackUpsertWithWhereUniqueWithoutTrackInput = {
    where: PlaylistToTrackWhereUniqueInput
    update: XOR<PlaylistToTrackUpdateWithoutTrackInput, PlaylistToTrackUncheckedUpdateWithoutTrackInput>
    create: XOR<PlaylistToTrackCreateWithoutTrackInput, PlaylistToTrackUncheckedCreateWithoutTrackInput>
  }

  export type PlaylistToTrackUpdateWithWhereUniqueWithoutTrackInput = {
    where: PlaylistToTrackWhereUniqueInput
    data: XOR<PlaylistToTrackUpdateWithoutTrackInput, PlaylistToTrackUncheckedUpdateWithoutTrackInput>
  }

  export type PlaylistToTrackUpdateManyWithWhereWithoutTrackInput = {
    where: PlaylistToTrackScalarWhereInput
    data: XOR<PlaylistToTrackUpdateManyMutationInput, PlaylistToTrackUncheckedUpdateManyWithoutTrackInput>
  }

  export type PlaylistToTrackScalarWhereInput = {
    AND?: PlaylistToTrackScalarWhereInput | PlaylistToTrackScalarWhereInput[]
    OR?: PlaylistToTrackScalarWhereInput[]
    NOT?: PlaylistToTrackScalarWhereInput | PlaylistToTrackScalarWhereInput[]
    id?: StringFilter<"PlaylistToTrack"> | string
    playlistId?: StringFilter<"PlaylistToTrack"> | string
    trackId?: StringFilter<"PlaylistToTrack"> | string
  }

  export type UserFavsTracksUpsertWithWhereUniqueWithoutTrackInput = {
    where: UserFavsTracksWhereUniqueInput
    update: XOR<UserFavsTracksUpdateWithoutTrackInput, UserFavsTracksUncheckedUpdateWithoutTrackInput>
    create: XOR<UserFavsTracksCreateWithoutTrackInput, UserFavsTracksUncheckedCreateWithoutTrackInput>
  }

  export type UserFavsTracksUpdateWithWhereUniqueWithoutTrackInput = {
    where: UserFavsTracksWhereUniqueInput
    data: XOR<UserFavsTracksUpdateWithoutTrackInput, UserFavsTracksUncheckedUpdateWithoutTrackInput>
  }

  export type UserFavsTracksUpdateManyWithWhereWithoutTrackInput = {
    where: UserFavsTracksScalarWhereInput
    data: XOR<UserFavsTracksUpdateManyMutationInput, UserFavsTracksUncheckedUpdateManyWithoutTrackInput>
  }

  export type ArtistsCreateWithoutAlbumsInput = {
    id?: string
    name: string
    email: string
    password: string
    thumbnail?: string
    description?: string | null
    tracks?: ArtistsOnTracksCreateNestedManyWithoutArtistInput
    genre: GenreCreateNestedOneWithoutArtistsInput
    followers?: UserFollowsArtistsCreateNestedManyWithoutArtistInput
  }

  export type ArtistsUncheckedCreateWithoutAlbumsInput = {
    id?: string
    name: string
    email: string
    password: string
    thumbnail?: string
    genreName: string
    description?: string | null
    tracks?: ArtistsOnTracksUncheckedCreateNestedManyWithoutArtistInput
    followers?: UserFollowsArtistsUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistsCreateOrConnectWithoutAlbumsInput = {
    where: ArtistsWhereUniqueInput
    create: XOR<ArtistsCreateWithoutAlbumsInput, ArtistsUncheckedCreateWithoutAlbumsInput>
  }

  export type TracksOnAlbumsCreateWithoutAlbumInput = {
    id?: string
    track: TracksCreateNestedOneWithoutAlbumInput
  }

  export type TracksOnAlbumsUncheckedCreateWithoutAlbumInput = {
    id?: string
    trackId: string
  }

  export type TracksOnAlbumsCreateOrConnectWithoutAlbumInput = {
    where: TracksOnAlbumsWhereUniqueInput
    create: XOR<TracksOnAlbumsCreateWithoutAlbumInput, TracksOnAlbumsUncheckedCreateWithoutAlbumInput>
  }

  export type TracksOnAlbumsCreateManyAlbumInputEnvelope = {
    data: TracksOnAlbumsCreateManyAlbumInput | TracksOnAlbumsCreateManyAlbumInput[]
  }

  export type GenreCreateWithoutAlbumsInput = {
    id?: string
    name: string
    tracks?: TracksCreateNestedManyWithoutGenreInput
    artists?: ArtistsCreateNestedManyWithoutGenreInput
  }

  export type GenreUncheckedCreateWithoutAlbumsInput = {
    id?: string
    name: string
    tracks?: TracksUncheckedCreateNestedManyWithoutGenreInput
    artists?: ArtistsUncheckedCreateNestedManyWithoutGenreInput
  }

  export type GenreCreateOrConnectWithoutAlbumsInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutAlbumsInput, GenreUncheckedCreateWithoutAlbumsInput>
  }

  export type UserLikedAlbumsCreateWithoutAlbumInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutLikedAlbumsInput
  }

  export type UserLikedAlbumsUncheckedCreateWithoutAlbumInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type UserLikedAlbumsCreateOrConnectWithoutAlbumInput = {
    where: UserLikedAlbumsWhereUniqueInput
    create: XOR<UserLikedAlbumsCreateWithoutAlbumInput, UserLikedAlbumsUncheckedCreateWithoutAlbumInput>
  }

  export type UserLikedAlbumsCreateManyAlbumInputEnvelope = {
    data: UserLikedAlbumsCreateManyAlbumInput | UserLikedAlbumsCreateManyAlbumInput[]
  }

  export type ArtistsUpsertWithoutAlbumsInput = {
    update: XOR<ArtistsUpdateWithoutAlbumsInput, ArtistsUncheckedUpdateWithoutAlbumsInput>
    create: XOR<ArtistsCreateWithoutAlbumsInput, ArtistsUncheckedCreateWithoutAlbumsInput>
    where?: ArtistsWhereInput
  }

  export type ArtistsUpdateToOneWithWhereWithoutAlbumsInput = {
    where?: ArtistsWhereInput
    data: XOR<ArtistsUpdateWithoutAlbumsInput, ArtistsUncheckedUpdateWithoutAlbumsInput>
  }

  export type ArtistsUpdateWithoutAlbumsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tracks?: ArtistsOnTracksUpdateManyWithoutArtistNestedInput
    genre?: GenreUpdateOneRequiredWithoutArtistsNestedInput
    followers?: UserFollowsArtistsUpdateManyWithoutArtistNestedInput
  }

  export type ArtistsUncheckedUpdateWithoutAlbumsInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    tracks?: ArtistsOnTracksUncheckedUpdateManyWithoutArtistNestedInput
    followers?: UserFollowsArtistsUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type TracksOnAlbumsUpsertWithWhereUniqueWithoutAlbumInput = {
    where: TracksOnAlbumsWhereUniqueInput
    update: XOR<TracksOnAlbumsUpdateWithoutAlbumInput, TracksOnAlbumsUncheckedUpdateWithoutAlbumInput>
    create: XOR<TracksOnAlbumsCreateWithoutAlbumInput, TracksOnAlbumsUncheckedCreateWithoutAlbumInput>
  }

  export type TracksOnAlbumsUpdateWithWhereUniqueWithoutAlbumInput = {
    where: TracksOnAlbumsWhereUniqueInput
    data: XOR<TracksOnAlbumsUpdateWithoutAlbumInput, TracksOnAlbumsUncheckedUpdateWithoutAlbumInput>
  }

  export type TracksOnAlbumsUpdateManyWithWhereWithoutAlbumInput = {
    where: TracksOnAlbumsScalarWhereInput
    data: XOR<TracksOnAlbumsUpdateManyMutationInput, TracksOnAlbumsUncheckedUpdateManyWithoutAlbumInput>
  }

  export type GenreUpsertWithoutAlbumsInput = {
    update: XOR<GenreUpdateWithoutAlbumsInput, GenreUncheckedUpdateWithoutAlbumsInput>
    create: XOR<GenreCreateWithoutAlbumsInput, GenreUncheckedCreateWithoutAlbumsInput>
    where?: GenreWhereInput
  }

  export type GenreUpdateToOneWithWhereWithoutAlbumsInput = {
    where?: GenreWhereInput
    data: XOR<GenreUpdateWithoutAlbumsInput, GenreUncheckedUpdateWithoutAlbumsInput>
  }

  export type GenreUpdateWithoutAlbumsInput = {
    name?: StringFieldUpdateOperationsInput | string
    tracks?: TracksUpdateManyWithoutGenreNestedInput
    artists?: ArtistsUpdateManyWithoutGenreNestedInput
  }

  export type GenreUncheckedUpdateWithoutAlbumsInput = {
    name?: StringFieldUpdateOperationsInput | string
    tracks?: TracksUncheckedUpdateManyWithoutGenreNestedInput
    artists?: ArtistsUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type UserLikedAlbumsUpsertWithWhereUniqueWithoutAlbumInput = {
    where: UserLikedAlbumsWhereUniqueInput
    update: XOR<UserLikedAlbumsUpdateWithoutAlbumInput, UserLikedAlbumsUncheckedUpdateWithoutAlbumInput>
    create: XOR<UserLikedAlbumsCreateWithoutAlbumInput, UserLikedAlbumsUncheckedCreateWithoutAlbumInput>
  }

  export type UserLikedAlbumsUpdateWithWhereUniqueWithoutAlbumInput = {
    where: UserLikedAlbumsWhereUniqueInput
    data: XOR<UserLikedAlbumsUpdateWithoutAlbumInput, UserLikedAlbumsUncheckedUpdateWithoutAlbumInput>
  }

  export type UserLikedAlbumsUpdateManyWithWhereWithoutAlbumInput = {
    where: UserLikedAlbumsScalarWhereInput
    data: XOR<UserLikedAlbumsUpdateManyMutationInput, UserLikedAlbumsUncheckedUpdateManyWithoutAlbumInput>
  }

  export type UserCreateWithoutCreatedPlaylistsInput = {
    id?: string
    email: string
    password: string
    image?: string
    role?: string
    name?: string | null
    gender?: string | null
    birthDate?: string | null
    country?: string | null
    likedAlbums?: UserLikedAlbumsCreateNestedManyWithoutUserInput
    artistsFollowed?: UserFollowsArtistsCreateNestedManyWithoutUserInput
    followedPlaylists?: UserFollowsPlaylistsCreateNestedManyWithoutUserInput
    favTracks?: UserFavsTracksCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCreatedPlaylistsInput = {
    id?: string
    email: string
    password: string
    image?: string
    role?: string
    name?: string | null
    gender?: string | null
    birthDate?: string | null
    country?: string | null
    likedAlbums?: UserLikedAlbumsUncheckedCreateNestedManyWithoutUserInput
    artistsFollowed?: UserFollowsArtistsUncheckedCreateNestedManyWithoutUserInput
    followedPlaylists?: UserFollowsPlaylistsUncheckedCreateNestedManyWithoutUserInput
    favTracks?: UserFavsTracksUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCreatedPlaylistsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedPlaylistsInput, UserUncheckedCreateWithoutCreatedPlaylistsInput>
  }

  export type UserFollowsPlaylistsCreateWithoutPlaylistInput = {
    id?: string
    user: UserCreateNestedOneWithoutFollowedPlaylistsInput
  }

  export type UserFollowsPlaylistsUncheckedCreateWithoutPlaylistInput = {
    id?: string
    userId: string
  }

  export type UserFollowsPlaylistsCreateOrConnectWithoutPlaylistInput = {
    where: UserFollowsPlaylistsWhereUniqueInput
    create: XOR<UserFollowsPlaylistsCreateWithoutPlaylistInput, UserFollowsPlaylistsUncheckedCreateWithoutPlaylistInput>
  }

  export type UserFollowsPlaylistsCreateManyPlaylistInputEnvelope = {
    data: UserFollowsPlaylistsCreateManyPlaylistInput | UserFollowsPlaylistsCreateManyPlaylistInput[]
  }

  export type PlaylistToTrackCreateWithoutPlaylistInput = {
    id?: string
    track: TracksCreateNestedOneWithoutPlaylistConnectionsInput
  }

  export type PlaylistToTrackUncheckedCreateWithoutPlaylistInput = {
    id?: string
    trackId: string
  }

  export type PlaylistToTrackCreateOrConnectWithoutPlaylistInput = {
    where: PlaylistToTrackWhereUniqueInput
    create: XOR<PlaylistToTrackCreateWithoutPlaylistInput, PlaylistToTrackUncheckedCreateWithoutPlaylistInput>
  }

  export type PlaylistToTrackCreateManyPlaylistInputEnvelope = {
    data: PlaylistToTrackCreateManyPlaylistInput | PlaylistToTrackCreateManyPlaylistInput[]
  }

  export type UserUpsertWithoutCreatedPlaylistsInput = {
    update: XOR<UserUpdateWithoutCreatedPlaylistsInput, UserUncheckedUpdateWithoutCreatedPlaylistsInput>
    create: XOR<UserCreateWithoutCreatedPlaylistsInput, UserUncheckedCreateWithoutCreatedPlaylistsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedPlaylistsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedPlaylistsInput, UserUncheckedUpdateWithoutCreatedPlaylistsInput>
  }

  export type UserUpdateWithoutCreatedPlaylistsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    likedAlbums?: UserLikedAlbumsUpdateManyWithoutUserNestedInput
    artistsFollowed?: UserFollowsArtistsUpdateManyWithoutUserNestedInput
    followedPlaylists?: UserFollowsPlaylistsUpdateManyWithoutUserNestedInput
    favTracks?: UserFavsTracksUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedPlaylistsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    likedAlbums?: UserLikedAlbumsUncheckedUpdateManyWithoutUserNestedInput
    artistsFollowed?: UserFollowsArtistsUncheckedUpdateManyWithoutUserNestedInput
    followedPlaylists?: UserFollowsPlaylistsUncheckedUpdateManyWithoutUserNestedInput
    favTracks?: UserFavsTracksUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserFollowsPlaylistsUpsertWithWhereUniqueWithoutPlaylistInput = {
    where: UserFollowsPlaylistsWhereUniqueInput
    update: XOR<UserFollowsPlaylistsUpdateWithoutPlaylistInput, UserFollowsPlaylistsUncheckedUpdateWithoutPlaylistInput>
    create: XOR<UserFollowsPlaylistsCreateWithoutPlaylistInput, UserFollowsPlaylistsUncheckedCreateWithoutPlaylistInput>
  }

  export type UserFollowsPlaylistsUpdateWithWhereUniqueWithoutPlaylistInput = {
    where: UserFollowsPlaylistsWhereUniqueInput
    data: XOR<UserFollowsPlaylistsUpdateWithoutPlaylistInput, UserFollowsPlaylistsUncheckedUpdateWithoutPlaylistInput>
  }

  export type UserFollowsPlaylistsUpdateManyWithWhereWithoutPlaylistInput = {
    where: UserFollowsPlaylistsScalarWhereInput
    data: XOR<UserFollowsPlaylistsUpdateManyMutationInput, UserFollowsPlaylistsUncheckedUpdateManyWithoutPlaylistInput>
  }

  export type PlaylistToTrackUpsertWithWhereUniqueWithoutPlaylistInput = {
    where: PlaylistToTrackWhereUniqueInput
    update: XOR<PlaylistToTrackUpdateWithoutPlaylistInput, PlaylistToTrackUncheckedUpdateWithoutPlaylistInput>
    create: XOR<PlaylistToTrackCreateWithoutPlaylistInput, PlaylistToTrackUncheckedCreateWithoutPlaylistInput>
  }

  export type PlaylistToTrackUpdateWithWhereUniqueWithoutPlaylistInput = {
    where: PlaylistToTrackWhereUniqueInput
    data: XOR<PlaylistToTrackUpdateWithoutPlaylistInput, PlaylistToTrackUncheckedUpdateWithoutPlaylistInput>
  }

  export type PlaylistToTrackUpdateManyWithWhereWithoutPlaylistInput = {
    where: PlaylistToTrackScalarWhereInput
    data: XOR<PlaylistToTrackUpdateManyMutationInput, PlaylistToTrackUncheckedUpdateManyWithoutPlaylistInput>
  }

  export type AlbumsCreateWithoutArtistInput = {
    id?: string
    name: string
    thumbnail: string
    tracks?: TracksOnAlbumsCreateNestedManyWithoutAlbumInput
    genre: GenreCreateNestedOneWithoutAlbumsInput
    likedByUsers?: UserLikedAlbumsCreateNestedManyWithoutAlbumInput
  }

  export type AlbumsUncheckedCreateWithoutArtistInput = {
    id?: string
    name: string
    thumbnail: string
    genreName: string
    tracks?: TracksOnAlbumsUncheckedCreateNestedManyWithoutAlbumInput
    likedByUsers?: UserLikedAlbumsUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumsCreateOrConnectWithoutArtistInput = {
    where: AlbumsWhereUniqueInput
    create: XOR<AlbumsCreateWithoutArtistInput, AlbumsUncheckedCreateWithoutArtistInput>
  }

  export type AlbumsCreateManyArtistInputEnvelope = {
    data: AlbumsCreateManyArtistInput | AlbumsCreateManyArtistInput[]
  }

  export type ArtistsOnTracksCreateWithoutArtistInput = {
    id?: string
    track: TracksCreateNestedOneWithoutArtistInput
  }

  export type ArtistsOnTracksUncheckedCreateWithoutArtistInput = {
    id?: string
    trackId: string
  }

  export type ArtistsOnTracksCreateOrConnectWithoutArtistInput = {
    where: ArtistsOnTracksWhereUniqueInput
    create: XOR<ArtistsOnTracksCreateWithoutArtistInput, ArtistsOnTracksUncheckedCreateWithoutArtistInput>
  }

  export type ArtistsOnTracksCreateManyArtistInputEnvelope = {
    data: ArtistsOnTracksCreateManyArtistInput | ArtistsOnTracksCreateManyArtistInput[]
  }

  export type GenreCreateWithoutArtistsInput = {
    id?: string
    name: string
    albums?: AlbumsCreateNestedManyWithoutGenreInput
    tracks?: TracksCreateNestedManyWithoutGenreInput
  }

  export type GenreUncheckedCreateWithoutArtistsInput = {
    id?: string
    name: string
    albums?: AlbumsUncheckedCreateNestedManyWithoutGenreInput
    tracks?: TracksUncheckedCreateNestedManyWithoutGenreInput
  }

  export type GenreCreateOrConnectWithoutArtistsInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutArtistsInput, GenreUncheckedCreateWithoutArtistsInput>
  }

  export type UserFollowsArtistsCreateWithoutArtistInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutArtistsFollowedInput
  }

  export type UserFollowsArtistsUncheckedCreateWithoutArtistInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type UserFollowsArtistsCreateOrConnectWithoutArtistInput = {
    where: UserFollowsArtistsWhereUniqueInput
    create: XOR<UserFollowsArtistsCreateWithoutArtistInput, UserFollowsArtistsUncheckedCreateWithoutArtistInput>
  }

  export type UserFollowsArtistsCreateManyArtistInputEnvelope = {
    data: UserFollowsArtistsCreateManyArtistInput | UserFollowsArtistsCreateManyArtistInput[]
  }

  export type AlbumsUpsertWithWhereUniqueWithoutArtistInput = {
    where: AlbumsWhereUniqueInput
    update: XOR<AlbumsUpdateWithoutArtistInput, AlbumsUncheckedUpdateWithoutArtistInput>
    create: XOR<AlbumsCreateWithoutArtistInput, AlbumsUncheckedCreateWithoutArtistInput>
  }

  export type AlbumsUpdateWithWhereUniqueWithoutArtistInput = {
    where: AlbumsWhereUniqueInput
    data: XOR<AlbumsUpdateWithoutArtistInput, AlbumsUncheckedUpdateWithoutArtistInput>
  }

  export type AlbumsUpdateManyWithWhereWithoutArtistInput = {
    where: AlbumsScalarWhereInput
    data: XOR<AlbumsUpdateManyMutationInput, AlbumsUncheckedUpdateManyWithoutArtistInput>
  }

  export type AlbumsScalarWhereInput = {
    AND?: AlbumsScalarWhereInput | AlbumsScalarWhereInput[]
    OR?: AlbumsScalarWhereInput[]
    NOT?: AlbumsScalarWhereInput | AlbumsScalarWhereInput[]
    id?: StringFilter<"Albums"> | string
    name?: StringFilter<"Albums"> | string
    artistName?: StringFilter<"Albums"> | string
    thumbnail?: StringFilter<"Albums"> | string
    genreName?: StringFilter<"Albums"> | string
  }

  export type ArtistsOnTracksUpsertWithWhereUniqueWithoutArtistInput = {
    where: ArtistsOnTracksWhereUniqueInput
    update: XOR<ArtistsOnTracksUpdateWithoutArtistInput, ArtistsOnTracksUncheckedUpdateWithoutArtistInput>
    create: XOR<ArtistsOnTracksCreateWithoutArtistInput, ArtistsOnTracksUncheckedCreateWithoutArtistInput>
  }

  export type ArtistsOnTracksUpdateWithWhereUniqueWithoutArtistInput = {
    where: ArtistsOnTracksWhereUniqueInput
    data: XOR<ArtistsOnTracksUpdateWithoutArtistInput, ArtistsOnTracksUncheckedUpdateWithoutArtistInput>
  }

  export type ArtistsOnTracksUpdateManyWithWhereWithoutArtistInput = {
    where: ArtistsOnTracksScalarWhereInput
    data: XOR<ArtistsOnTracksUpdateManyMutationInput, ArtistsOnTracksUncheckedUpdateManyWithoutArtistInput>
  }

  export type GenreUpsertWithoutArtistsInput = {
    update: XOR<GenreUpdateWithoutArtistsInput, GenreUncheckedUpdateWithoutArtistsInput>
    create: XOR<GenreCreateWithoutArtistsInput, GenreUncheckedCreateWithoutArtistsInput>
    where?: GenreWhereInput
  }

  export type GenreUpdateToOneWithWhereWithoutArtistsInput = {
    where?: GenreWhereInput
    data: XOR<GenreUpdateWithoutArtistsInput, GenreUncheckedUpdateWithoutArtistsInput>
  }

  export type GenreUpdateWithoutArtistsInput = {
    name?: StringFieldUpdateOperationsInput | string
    albums?: AlbumsUpdateManyWithoutGenreNestedInput
    tracks?: TracksUpdateManyWithoutGenreNestedInput
  }

  export type GenreUncheckedUpdateWithoutArtistsInput = {
    name?: StringFieldUpdateOperationsInput | string
    albums?: AlbumsUncheckedUpdateManyWithoutGenreNestedInput
    tracks?: TracksUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type UserFollowsArtistsUpsertWithWhereUniqueWithoutArtistInput = {
    where: UserFollowsArtistsWhereUniqueInput
    update: XOR<UserFollowsArtistsUpdateWithoutArtistInput, UserFollowsArtistsUncheckedUpdateWithoutArtistInput>
    create: XOR<UserFollowsArtistsCreateWithoutArtistInput, UserFollowsArtistsUncheckedCreateWithoutArtistInput>
  }

  export type UserFollowsArtistsUpdateWithWhereUniqueWithoutArtistInput = {
    where: UserFollowsArtistsWhereUniqueInput
    data: XOR<UserFollowsArtistsUpdateWithoutArtistInput, UserFollowsArtistsUncheckedUpdateWithoutArtistInput>
  }

  export type UserFollowsArtistsUpdateManyWithWhereWithoutArtistInput = {
    where: UserFollowsArtistsScalarWhereInput
    data: XOR<UserFollowsArtistsUpdateManyMutationInput, UserFollowsArtistsUncheckedUpdateManyWithoutArtistInput>
  }

  export type AlbumsCreateWithoutGenreInput = {
    id?: string
    name: string
    thumbnail: string
    artist: ArtistsCreateNestedOneWithoutAlbumsInput
    tracks?: TracksOnAlbumsCreateNestedManyWithoutAlbumInput
    likedByUsers?: UserLikedAlbumsCreateNestedManyWithoutAlbumInput
  }

  export type AlbumsUncheckedCreateWithoutGenreInput = {
    id?: string
    name: string
    artistName: string
    thumbnail: string
    tracks?: TracksOnAlbumsUncheckedCreateNestedManyWithoutAlbumInput
    likedByUsers?: UserLikedAlbumsUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumsCreateOrConnectWithoutGenreInput = {
    where: AlbumsWhereUniqueInput
    create: XOR<AlbumsCreateWithoutGenreInput, AlbumsUncheckedCreateWithoutGenreInput>
  }

  export type AlbumsCreateManyGenreInputEnvelope = {
    data: AlbumsCreateManyGenreInput | AlbumsCreateManyGenreInput[]
  }

  export type TracksCreateWithoutGenreInput = {
    id?: string
    name: string
    url: string
    thumbnail: string
    artist?: ArtistsOnTracksCreateNestedManyWithoutTrackInput
    album?: TracksOnAlbumsCreateNestedManyWithoutTrackInput
    playlistConnections?: PlaylistToTrackCreateNestedManyWithoutTrackInput
    favsOfUsers?: UserFavsTracksCreateNestedManyWithoutTrackInput
  }

  export type TracksUncheckedCreateWithoutGenreInput = {
    id?: string
    name: string
    url: string
    thumbnail: string
    artist?: ArtistsOnTracksUncheckedCreateNestedManyWithoutTrackInput
    album?: TracksOnAlbumsUncheckedCreateNestedManyWithoutTrackInput
    playlistConnections?: PlaylistToTrackUncheckedCreateNestedManyWithoutTrackInput
    favsOfUsers?: UserFavsTracksUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TracksCreateOrConnectWithoutGenreInput = {
    where: TracksWhereUniqueInput
    create: XOR<TracksCreateWithoutGenreInput, TracksUncheckedCreateWithoutGenreInput>
  }

  export type TracksCreateManyGenreInputEnvelope = {
    data: TracksCreateManyGenreInput | TracksCreateManyGenreInput[]
  }

  export type ArtistsCreateWithoutGenreInput = {
    id?: string
    name: string
    email: string
    password: string
    thumbnail?: string
    description?: string | null
    albums?: AlbumsCreateNestedManyWithoutArtistInput
    tracks?: ArtistsOnTracksCreateNestedManyWithoutArtistInput
    followers?: UserFollowsArtistsCreateNestedManyWithoutArtistInput
  }

  export type ArtistsUncheckedCreateWithoutGenreInput = {
    id?: string
    name: string
    email: string
    password: string
    thumbnail?: string
    description?: string | null
    albums?: AlbumsUncheckedCreateNestedManyWithoutArtistInput
    tracks?: ArtistsOnTracksUncheckedCreateNestedManyWithoutArtistInput
    followers?: UserFollowsArtistsUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistsCreateOrConnectWithoutGenreInput = {
    where: ArtistsWhereUniqueInput
    create: XOR<ArtistsCreateWithoutGenreInput, ArtistsUncheckedCreateWithoutGenreInput>
  }

  export type ArtistsCreateManyGenreInputEnvelope = {
    data: ArtistsCreateManyGenreInput | ArtistsCreateManyGenreInput[]
  }

  export type AlbumsUpsertWithWhereUniqueWithoutGenreInput = {
    where: AlbumsWhereUniqueInput
    update: XOR<AlbumsUpdateWithoutGenreInput, AlbumsUncheckedUpdateWithoutGenreInput>
    create: XOR<AlbumsCreateWithoutGenreInput, AlbumsUncheckedCreateWithoutGenreInput>
  }

  export type AlbumsUpdateWithWhereUniqueWithoutGenreInput = {
    where: AlbumsWhereUniqueInput
    data: XOR<AlbumsUpdateWithoutGenreInput, AlbumsUncheckedUpdateWithoutGenreInput>
  }

  export type AlbumsUpdateManyWithWhereWithoutGenreInput = {
    where: AlbumsScalarWhereInput
    data: XOR<AlbumsUpdateManyMutationInput, AlbumsUncheckedUpdateManyWithoutGenreInput>
  }

  export type TracksUpsertWithWhereUniqueWithoutGenreInput = {
    where: TracksWhereUniqueInput
    update: XOR<TracksUpdateWithoutGenreInput, TracksUncheckedUpdateWithoutGenreInput>
    create: XOR<TracksCreateWithoutGenreInput, TracksUncheckedCreateWithoutGenreInput>
  }

  export type TracksUpdateWithWhereUniqueWithoutGenreInput = {
    where: TracksWhereUniqueInput
    data: XOR<TracksUpdateWithoutGenreInput, TracksUncheckedUpdateWithoutGenreInput>
  }

  export type TracksUpdateManyWithWhereWithoutGenreInput = {
    where: TracksScalarWhereInput
    data: XOR<TracksUpdateManyMutationInput, TracksUncheckedUpdateManyWithoutGenreInput>
  }

  export type TracksScalarWhereInput = {
    AND?: TracksScalarWhereInput | TracksScalarWhereInput[]
    OR?: TracksScalarWhereInput[]
    NOT?: TracksScalarWhereInput | TracksScalarWhereInput[]
    id?: StringFilter<"Tracks"> | string
    name?: StringFilter<"Tracks"> | string
    url?: StringFilter<"Tracks"> | string
    thumbnail?: StringFilter<"Tracks"> | string
    genreName?: StringFilter<"Tracks"> | string
  }

  export type ArtistsUpsertWithWhereUniqueWithoutGenreInput = {
    where: ArtistsWhereUniqueInput
    update: XOR<ArtistsUpdateWithoutGenreInput, ArtistsUncheckedUpdateWithoutGenreInput>
    create: XOR<ArtistsCreateWithoutGenreInput, ArtistsUncheckedCreateWithoutGenreInput>
  }

  export type ArtistsUpdateWithWhereUniqueWithoutGenreInput = {
    where: ArtistsWhereUniqueInput
    data: XOR<ArtistsUpdateWithoutGenreInput, ArtistsUncheckedUpdateWithoutGenreInput>
  }

  export type ArtistsUpdateManyWithWhereWithoutGenreInput = {
    where: ArtistsScalarWhereInput
    data: XOR<ArtistsUpdateManyMutationInput, ArtistsUncheckedUpdateManyWithoutGenreInput>
  }

  export type ArtistsScalarWhereInput = {
    AND?: ArtistsScalarWhereInput | ArtistsScalarWhereInput[]
    OR?: ArtistsScalarWhereInput[]
    NOT?: ArtistsScalarWhereInput | ArtistsScalarWhereInput[]
    id?: StringFilter<"Artists"> | string
    name?: StringFilter<"Artists"> | string
    email?: StringFilter<"Artists"> | string
    password?: StringFilter<"Artists"> | string
    thumbnail?: StringFilter<"Artists"> | string
    genreName?: StringFilter<"Artists"> | string
    description?: StringNullableFilter<"Artists"> | string | null
  }

  export type ArtistsCreateWithoutTracksInput = {
    id?: string
    name: string
    email: string
    password: string
    thumbnail?: string
    description?: string | null
    albums?: AlbumsCreateNestedManyWithoutArtistInput
    genre: GenreCreateNestedOneWithoutArtistsInput
    followers?: UserFollowsArtistsCreateNestedManyWithoutArtistInput
  }

  export type ArtistsUncheckedCreateWithoutTracksInput = {
    id?: string
    name: string
    email: string
    password: string
    thumbnail?: string
    genreName: string
    description?: string | null
    albums?: AlbumsUncheckedCreateNestedManyWithoutArtistInput
    followers?: UserFollowsArtistsUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistsCreateOrConnectWithoutTracksInput = {
    where: ArtistsWhereUniqueInput
    create: XOR<ArtistsCreateWithoutTracksInput, ArtistsUncheckedCreateWithoutTracksInput>
  }

  export type TracksCreateWithoutArtistInput = {
    id?: string
    name: string
    url: string
    thumbnail: string
    genre: GenreCreateNestedOneWithoutTracksInput
    album?: TracksOnAlbumsCreateNestedManyWithoutTrackInput
    playlistConnections?: PlaylistToTrackCreateNestedManyWithoutTrackInput
    favsOfUsers?: UserFavsTracksCreateNestedManyWithoutTrackInput
  }

  export type TracksUncheckedCreateWithoutArtistInput = {
    id?: string
    name: string
    url: string
    thumbnail: string
    genreName: string
    album?: TracksOnAlbumsUncheckedCreateNestedManyWithoutTrackInput
    playlistConnections?: PlaylistToTrackUncheckedCreateNestedManyWithoutTrackInput
    favsOfUsers?: UserFavsTracksUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TracksCreateOrConnectWithoutArtistInput = {
    where: TracksWhereUniqueInput
    create: XOR<TracksCreateWithoutArtistInput, TracksUncheckedCreateWithoutArtistInput>
  }

  export type ArtistsUpsertWithoutTracksInput = {
    update: XOR<ArtistsUpdateWithoutTracksInput, ArtistsUncheckedUpdateWithoutTracksInput>
    create: XOR<ArtistsCreateWithoutTracksInput, ArtistsUncheckedCreateWithoutTracksInput>
    where?: ArtistsWhereInput
  }

  export type ArtistsUpdateToOneWithWhereWithoutTracksInput = {
    where?: ArtistsWhereInput
    data: XOR<ArtistsUpdateWithoutTracksInput, ArtistsUncheckedUpdateWithoutTracksInput>
  }

  export type ArtistsUpdateWithoutTracksInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    albums?: AlbumsUpdateManyWithoutArtistNestedInput
    genre?: GenreUpdateOneRequiredWithoutArtistsNestedInput
    followers?: UserFollowsArtistsUpdateManyWithoutArtistNestedInput
  }

  export type ArtistsUncheckedUpdateWithoutTracksInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    albums?: AlbumsUncheckedUpdateManyWithoutArtistNestedInput
    followers?: UserFollowsArtistsUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type TracksUpsertWithoutArtistInput = {
    update: XOR<TracksUpdateWithoutArtistInput, TracksUncheckedUpdateWithoutArtistInput>
    create: XOR<TracksCreateWithoutArtistInput, TracksUncheckedCreateWithoutArtistInput>
    where?: TracksWhereInput
  }

  export type TracksUpdateToOneWithWhereWithoutArtistInput = {
    where?: TracksWhereInput
    data: XOR<TracksUpdateWithoutArtistInput, TracksUncheckedUpdateWithoutArtistInput>
  }

  export type TracksUpdateWithoutArtistInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genre?: GenreUpdateOneRequiredWithoutTracksNestedInput
    album?: TracksOnAlbumsUpdateManyWithoutTrackNestedInput
    playlistConnections?: PlaylistToTrackUpdateManyWithoutTrackNestedInput
    favsOfUsers?: UserFavsTracksUpdateManyWithoutTrackNestedInput
  }

  export type TracksUncheckedUpdateWithoutArtistInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreName?: StringFieldUpdateOperationsInput | string
    album?: TracksOnAlbumsUncheckedUpdateManyWithoutTrackNestedInput
    playlistConnections?: PlaylistToTrackUncheckedUpdateManyWithoutTrackNestedInput
    favsOfUsers?: UserFavsTracksUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type AlbumsCreateWithoutTracksInput = {
    id?: string
    name: string
    thumbnail: string
    artist: ArtistsCreateNestedOneWithoutAlbumsInput
    genre: GenreCreateNestedOneWithoutAlbumsInput
    likedByUsers?: UserLikedAlbumsCreateNestedManyWithoutAlbumInput
  }

  export type AlbumsUncheckedCreateWithoutTracksInput = {
    id?: string
    name: string
    artistName: string
    thumbnail: string
    genreName: string
    likedByUsers?: UserLikedAlbumsUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumsCreateOrConnectWithoutTracksInput = {
    where: AlbumsWhereUniqueInput
    create: XOR<AlbumsCreateWithoutTracksInput, AlbumsUncheckedCreateWithoutTracksInput>
  }

  export type TracksCreateWithoutAlbumInput = {
    id?: string
    name: string
    url: string
    thumbnail: string
    artist?: ArtistsOnTracksCreateNestedManyWithoutTrackInput
    genre: GenreCreateNestedOneWithoutTracksInput
    playlistConnections?: PlaylistToTrackCreateNestedManyWithoutTrackInput
    favsOfUsers?: UserFavsTracksCreateNestedManyWithoutTrackInput
  }

  export type TracksUncheckedCreateWithoutAlbumInput = {
    id?: string
    name: string
    url: string
    thumbnail: string
    genreName: string
    artist?: ArtistsOnTracksUncheckedCreateNestedManyWithoutTrackInput
    playlistConnections?: PlaylistToTrackUncheckedCreateNestedManyWithoutTrackInput
    favsOfUsers?: UserFavsTracksUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TracksCreateOrConnectWithoutAlbumInput = {
    where: TracksWhereUniqueInput
    create: XOR<TracksCreateWithoutAlbumInput, TracksUncheckedCreateWithoutAlbumInput>
  }

  export type AlbumsUpsertWithoutTracksInput = {
    update: XOR<AlbumsUpdateWithoutTracksInput, AlbumsUncheckedUpdateWithoutTracksInput>
    create: XOR<AlbumsCreateWithoutTracksInput, AlbumsUncheckedCreateWithoutTracksInput>
    where?: AlbumsWhereInput
  }

  export type AlbumsUpdateToOneWithWhereWithoutTracksInput = {
    where?: AlbumsWhereInput
    data: XOR<AlbumsUpdateWithoutTracksInput, AlbumsUncheckedUpdateWithoutTracksInput>
  }

  export type AlbumsUpdateWithoutTracksInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    artist?: ArtistsUpdateOneRequiredWithoutAlbumsNestedInput
    genre?: GenreUpdateOneRequiredWithoutAlbumsNestedInput
    likedByUsers?: UserLikedAlbumsUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumsUncheckedUpdateWithoutTracksInput = {
    name?: StringFieldUpdateOperationsInput | string
    artistName?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreName?: StringFieldUpdateOperationsInput | string
    likedByUsers?: UserLikedAlbumsUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type TracksUpsertWithoutAlbumInput = {
    update: XOR<TracksUpdateWithoutAlbumInput, TracksUncheckedUpdateWithoutAlbumInput>
    create: XOR<TracksCreateWithoutAlbumInput, TracksUncheckedCreateWithoutAlbumInput>
    where?: TracksWhereInput
  }

  export type TracksUpdateToOneWithWhereWithoutAlbumInput = {
    where?: TracksWhereInput
    data: XOR<TracksUpdateWithoutAlbumInput, TracksUncheckedUpdateWithoutAlbumInput>
  }

  export type TracksUpdateWithoutAlbumInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    artist?: ArtistsOnTracksUpdateManyWithoutTrackNestedInput
    genre?: GenreUpdateOneRequiredWithoutTracksNestedInput
    playlistConnections?: PlaylistToTrackUpdateManyWithoutTrackNestedInput
    favsOfUsers?: UserFavsTracksUpdateManyWithoutTrackNestedInput
  }

  export type TracksUncheckedUpdateWithoutAlbumInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreName?: StringFieldUpdateOperationsInput | string
    artist?: ArtistsOnTracksUncheckedUpdateManyWithoutTrackNestedInput
    playlistConnections?: PlaylistToTrackUncheckedUpdateManyWithoutTrackNestedInput
    favsOfUsers?: UserFavsTracksUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type UserCreateWithoutFavTracksInput = {
    id?: string
    email: string
    password: string
    image?: string
    role?: string
    name?: string | null
    gender?: string | null
    birthDate?: string | null
    country?: string | null
    likedAlbums?: UserLikedAlbumsCreateNestedManyWithoutUserInput
    artistsFollowed?: UserFollowsArtistsCreateNestedManyWithoutUserInput
    followedPlaylists?: UserFollowsPlaylistsCreateNestedManyWithoutUserInput
    createdPlaylists?: PlaylistsCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavTracksInput = {
    id?: string
    email: string
    password: string
    image?: string
    role?: string
    name?: string | null
    gender?: string | null
    birthDate?: string | null
    country?: string | null
    likedAlbums?: UserLikedAlbumsUncheckedCreateNestedManyWithoutUserInput
    artistsFollowed?: UserFollowsArtistsUncheckedCreateNestedManyWithoutUserInput
    followedPlaylists?: UserFollowsPlaylistsUncheckedCreateNestedManyWithoutUserInput
    createdPlaylists?: PlaylistsUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavTracksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavTracksInput, UserUncheckedCreateWithoutFavTracksInput>
  }

  export type TracksCreateWithoutFavsOfUsersInput = {
    id?: string
    name: string
    url: string
    thumbnail: string
    artist?: ArtistsOnTracksCreateNestedManyWithoutTrackInput
    genre: GenreCreateNestedOneWithoutTracksInput
    album?: TracksOnAlbumsCreateNestedManyWithoutTrackInput
    playlistConnections?: PlaylistToTrackCreateNestedManyWithoutTrackInput
  }

  export type TracksUncheckedCreateWithoutFavsOfUsersInput = {
    id?: string
    name: string
    url: string
    thumbnail: string
    genreName: string
    artist?: ArtistsOnTracksUncheckedCreateNestedManyWithoutTrackInput
    album?: TracksOnAlbumsUncheckedCreateNestedManyWithoutTrackInput
    playlistConnections?: PlaylistToTrackUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TracksCreateOrConnectWithoutFavsOfUsersInput = {
    where: TracksWhereUniqueInput
    create: XOR<TracksCreateWithoutFavsOfUsersInput, TracksUncheckedCreateWithoutFavsOfUsersInput>
  }

  export type UserUpsertWithoutFavTracksInput = {
    update: XOR<UserUpdateWithoutFavTracksInput, UserUncheckedUpdateWithoutFavTracksInput>
    create: XOR<UserCreateWithoutFavTracksInput, UserUncheckedCreateWithoutFavTracksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavTracksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavTracksInput, UserUncheckedUpdateWithoutFavTracksInput>
  }

  export type UserUpdateWithoutFavTracksInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    likedAlbums?: UserLikedAlbumsUpdateManyWithoutUserNestedInput
    artistsFollowed?: UserFollowsArtistsUpdateManyWithoutUserNestedInput
    followedPlaylists?: UserFollowsPlaylistsUpdateManyWithoutUserNestedInput
    createdPlaylists?: PlaylistsUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavTracksInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    likedAlbums?: UserLikedAlbumsUncheckedUpdateManyWithoutUserNestedInput
    artistsFollowed?: UserFollowsArtistsUncheckedUpdateManyWithoutUserNestedInput
    followedPlaylists?: UserFollowsPlaylistsUncheckedUpdateManyWithoutUserNestedInput
    createdPlaylists?: PlaylistsUncheckedUpdateManyWithoutUserNestedInput
  }

  export type TracksUpsertWithoutFavsOfUsersInput = {
    update: XOR<TracksUpdateWithoutFavsOfUsersInput, TracksUncheckedUpdateWithoutFavsOfUsersInput>
    create: XOR<TracksCreateWithoutFavsOfUsersInput, TracksUncheckedCreateWithoutFavsOfUsersInput>
    where?: TracksWhereInput
  }

  export type TracksUpdateToOneWithWhereWithoutFavsOfUsersInput = {
    where?: TracksWhereInput
    data: XOR<TracksUpdateWithoutFavsOfUsersInput, TracksUncheckedUpdateWithoutFavsOfUsersInput>
  }

  export type TracksUpdateWithoutFavsOfUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    artist?: ArtistsOnTracksUpdateManyWithoutTrackNestedInput
    genre?: GenreUpdateOneRequiredWithoutTracksNestedInput
    album?: TracksOnAlbumsUpdateManyWithoutTrackNestedInput
    playlistConnections?: PlaylistToTrackUpdateManyWithoutTrackNestedInput
  }

  export type TracksUncheckedUpdateWithoutFavsOfUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreName?: StringFieldUpdateOperationsInput | string
    artist?: ArtistsOnTracksUncheckedUpdateManyWithoutTrackNestedInput
    album?: TracksOnAlbumsUncheckedUpdateManyWithoutTrackNestedInput
    playlistConnections?: PlaylistToTrackUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type PlaylistsCreateWithoutTracksConnectionsInput = {
    id?: string
    name: string
    thumbnail: string
    publicAccess?: boolean
    user: UserCreateNestedOneWithoutCreatedPlaylistsInput
    followers?: UserFollowsPlaylistsCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistsUncheckedCreateWithoutTracksConnectionsInput = {
    id?: string
    name: string
    thumbnail: string
    publicAccess?: boolean
    userId: string
    followers?: UserFollowsPlaylistsUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistsCreateOrConnectWithoutTracksConnectionsInput = {
    where: PlaylistsWhereUniqueInput
    create: XOR<PlaylistsCreateWithoutTracksConnectionsInput, PlaylistsUncheckedCreateWithoutTracksConnectionsInput>
  }

  export type TracksCreateWithoutPlaylistConnectionsInput = {
    id?: string
    name: string
    url: string
    thumbnail: string
    artist?: ArtistsOnTracksCreateNestedManyWithoutTrackInput
    genre: GenreCreateNestedOneWithoutTracksInput
    album?: TracksOnAlbumsCreateNestedManyWithoutTrackInput
    favsOfUsers?: UserFavsTracksCreateNestedManyWithoutTrackInput
  }

  export type TracksUncheckedCreateWithoutPlaylistConnectionsInput = {
    id?: string
    name: string
    url: string
    thumbnail: string
    genreName: string
    artist?: ArtistsOnTracksUncheckedCreateNestedManyWithoutTrackInput
    album?: TracksOnAlbumsUncheckedCreateNestedManyWithoutTrackInput
    favsOfUsers?: UserFavsTracksUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TracksCreateOrConnectWithoutPlaylistConnectionsInput = {
    where: TracksWhereUniqueInput
    create: XOR<TracksCreateWithoutPlaylistConnectionsInput, TracksUncheckedCreateWithoutPlaylistConnectionsInput>
  }

  export type PlaylistsUpsertWithoutTracksConnectionsInput = {
    update: XOR<PlaylistsUpdateWithoutTracksConnectionsInput, PlaylistsUncheckedUpdateWithoutTracksConnectionsInput>
    create: XOR<PlaylistsCreateWithoutTracksConnectionsInput, PlaylistsUncheckedCreateWithoutTracksConnectionsInput>
    where?: PlaylistsWhereInput
  }

  export type PlaylistsUpdateToOneWithWhereWithoutTracksConnectionsInput = {
    where?: PlaylistsWhereInput
    data: XOR<PlaylistsUpdateWithoutTracksConnectionsInput, PlaylistsUncheckedUpdateWithoutTracksConnectionsInput>
  }

  export type PlaylistsUpdateWithoutTracksConnectionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    publicAccess?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutCreatedPlaylistsNestedInput
    followers?: UserFollowsPlaylistsUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistsUncheckedUpdateWithoutTracksConnectionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    publicAccess?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    followers?: UserFollowsPlaylistsUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type TracksUpsertWithoutPlaylistConnectionsInput = {
    update: XOR<TracksUpdateWithoutPlaylistConnectionsInput, TracksUncheckedUpdateWithoutPlaylistConnectionsInput>
    create: XOR<TracksCreateWithoutPlaylistConnectionsInput, TracksUncheckedCreateWithoutPlaylistConnectionsInput>
    where?: TracksWhereInput
  }

  export type TracksUpdateToOneWithWhereWithoutPlaylistConnectionsInput = {
    where?: TracksWhereInput
    data: XOR<TracksUpdateWithoutPlaylistConnectionsInput, TracksUncheckedUpdateWithoutPlaylistConnectionsInput>
  }

  export type TracksUpdateWithoutPlaylistConnectionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    artist?: ArtistsOnTracksUpdateManyWithoutTrackNestedInput
    genre?: GenreUpdateOneRequiredWithoutTracksNestedInput
    album?: TracksOnAlbumsUpdateManyWithoutTrackNestedInput
    favsOfUsers?: UserFavsTracksUpdateManyWithoutTrackNestedInput
  }

  export type TracksUncheckedUpdateWithoutPlaylistConnectionsInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreName?: StringFieldUpdateOperationsInput | string
    artist?: ArtistsOnTracksUncheckedUpdateManyWithoutTrackNestedInput
    album?: TracksOnAlbumsUncheckedUpdateManyWithoutTrackNestedInput
    favsOfUsers?: UserFavsTracksUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type UserCreateWithoutFollowedPlaylistsInput = {
    id?: string
    email: string
    password: string
    image?: string
    role?: string
    name?: string | null
    gender?: string | null
    birthDate?: string | null
    country?: string | null
    likedAlbums?: UserLikedAlbumsCreateNestedManyWithoutUserInput
    artistsFollowed?: UserFollowsArtistsCreateNestedManyWithoutUserInput
    createdPlaylists?: PlaylistsCreateNestedManyWithoutUserInput
    favTracks?: UserFavsTracksCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFollowedPlaylistsInput = {
    id?: string
    email: string
    password: string
    image?: string
    role?: string
    name?: string | null
    gender?: string | null
    birthDate?: string | null
    country?: string | null
    likedAlbums?: UserLikedAlbumsUncheckedCreateNestedManyWithoutUserInput
    artistsFollowed?: UserFollowsArtistsUncheckedCreateNestedManyWithoutUserInput
    createdPlaylists?: PlaylistsUncheckedCreateNestedManyWithoutUserInput
    favTracks?: UserFavsTracksUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFollowedPlaylistsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowedPlaylistsInput, UserUncheckedCreateWithoutFollowedPlaylistsInput>
  }

  export type PlaylistsCreateWithoutFollowersInput = {
    id?: string
    name: string
    thumbnail: string
    publicAccess?: boolean
    user: UserCreateNestedOneWithoutCreatedPlaylistsInput
    tracksConnections?: PlaylistToTrackCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistsUncheckedCreateWithoutFollowersInput = {
    id?: string
    name: string
    thumbnail: string
    publicAccess?: boolean
    userId: string
    tracksConnections?: PlaylistToTrackUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistsCreateOrConnectWithoutFollowersInput = {
    where: PlaylistsWhereUniqueInput
    create: XOR<PlaylistsCreateWithoutFollowersInput, PlaylistsUncheckedCreateWithoutFollowersInput>
  }

  export type UserUpsertWithoutFollowedPlaylistsInput = {
    update: XOR<UserUpdateWithoutFollowedPlaylistsInput, UserUncheckedUpdateWithoutFollowedPlaylistsInput>
    create: XOR<UserCreateWithoutFollowedPlaylistsInput, UserUncheckedCreateWithoutFollowedPlaylistsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFollowedPlaylistsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFollowedPlaylistsInput, UserUncheckedUpdateWithoutFollowedPlaylistsInput>
  }

  export type UserUpdateWithoutFollowedPlaylistsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    likedAlbums?: UserLikedAlbumsUpdateManyWithoutUserNestedInput
    artistsFollowed?: UserFollowsArtistsUpdateManyWithoutUserNestedInput
    createdPlaylists?: PlaylistsUpdateManyWithoutUserNestedInput
    favTracks?: UserFavsTracksUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFollowedPlaylistsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    likedAlbums?: UserLikedAlbumsUncheckedUpdateManyWithoutUserNestedInput
    artistsFollowed?: UserFollowsArtistsUncheckedUpdateManyWithoutUserNestedInput
    createdPlaylists?: PlaylistsUncheckedUpdateManyWithoutUserNestedInput
    favTracks?: UserFavsTracksUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PlaylistsUpsertWithoutFollowersInput = {
    update: XOR<PlaylistsUpdateWithoutFollowersInput, PlaylistsUncheckedUpdateWithoutFollowersInput>
    create: XOR<PlaylistsCreateWithoutFollowersInput, PlaylistsUncheckedCreateWithoutFollowersInput>
    where?: PlaylistsWhereInput
  }

  export type PlaylistsUpdateToOneWithWhereWithoutFollowersInput = {
    where?: PlaylistsWhereInput
    data: XOR<PlaylistsUpdateWithoutFollowersInput, PlaylistsUncheckedUpdateWithoutFollowersInput>
  }

  export type PlaylistsUpdateWithoutFollowersInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    publicAccess?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutCreatedPlaylistsNestedInput
    tracksConnections?: PlaylistToTrackUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistsUncheckedUpdateWithoutFollowersInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    publicAccess?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    tracksConnections?: PlaylistToTrackUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type UserCreateWithoutArtistsFollowedInput = {
    id?: string
    email: string
    password: string
    image?: string
    role?: string
    name?: string | null
    gender?: string | null
    birthDate?: string | null
    country?: string | null
    likedAlbums?: UserLikedAlbumsCreateNestedManyWithoutUserInput
    followedPlaylists?: UserFollowsPlaylistsCreateNestedManyWithoutUserInput
    createdPlaylists?: PlaylistsCreateNestedManyWithoutUserInput
    favTracks?: UserFavsTracksCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutArtistsFollowedInput = {
    id?: string
    email: string
    password: string
    image?: string
    role?: string
    name?: string | null
    gender?: string | null
    birthDate?: string | null
    country?: string | null
    likedAlbums?: UserLikedAlbumsUncheckedCreateNestedManyWithoutUserInput
    followedPlaylists?: UserFollowsPlaylistsUncheckedCreateNestedManyWithoutUserInput
    createdPlaylists?: PlaylistsUncheckedCreateNestedManyWithoutUserInput
    favTracks?: UserFavsTracksUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutArtistsFollowedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutArtistsFollowedInput, UserUncheckedCreateWithoutArtistsFollowedInput>
  }

  export type ArtistsCreateWithoutFollowersInput = {
    id?: string
    name: string
    email: string
    password: string
    thumbnail?: string
    description?: string | null
    albums?: AlbumsCreateNestedManyWithoutArtistInput
    tracks?: ArtistsOnTracksCreateNestedManyWithoutArtistInput
    genre: GenreCreateNestedOneWithoutArtistsInput
  }

  export type ArtistsUncheckedCreateWithoutFollowersInput = {
    id?: string
    name: string
    email: string
    password: string
    thumbnail?: string
    genreName: string
    description?: string | null
    albums?: AlbumsUncheckedCreateNestedManyWithoutArtistInput
    tracks?: ArtistsOnTracksUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistsCreateOrConnectWithoutFollowersInput = {
    where: ArtistsWhereUniqueInput
    create: XOR<ArtistsCreateWithoutFollowersInput, ArtistsUncheckedCreateWithoutFollowersInput>
  }

  export type UserUpsertWithoutArtistsFollowedInput = {
    update: XOR<UserUpdateWithoutArtistsFollowedInput, UserUncheckedUpdateWithoutArtistsFollowedInput>
    create: XOR<UserCreateWithoutArtistsFollowedInput, UserUncheckedCreateWithoutArtistsFollowedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutArtistsFollowedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutArtistsFollowedInput, UserUncheckedUpdateWithoutArtistsFollowedInput>
  }

  export type UserUpdateWithoutArtistsFollowedInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    likedAlbums?: UserLikedAlbumsUpdateManyWithoutUserNestedInput
    followedPlaylists?: UserFollowsPlaylistsUpdateManyWithoutUserNestedInput
    createdPlaylists?: PlaylistsUpdateManyWithoutUserNestedInput
    favTracks?: UserFavsTracksUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutArtistsFollowedInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    likedAlbums?: UserLikedAlbumsUncheckedUpdateManyWithoutUserNestedInput
    followedPlaylists?: UserFollowsPlaylistsUncheckedUpdateManyWithoutUserNestedInput
    createdPlaylists?: PlaylistsUncheckedUpdateManyWithoutUserNestedInput
    favTracks?: UserFavsTracksUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ArtistsUpsertWithoutFollowersInput = {
    update: XOR<ArtistsUpdateWithoutFollowersInput, ArtistsUncheckedUpdateWithoutFollowersInput>
    create: XOR<ArtistsCreateWithoutFollowersInput, ArtistsUncheckedCreateWithoutFollowersInput>
    where?: ArtistsWhereInput
  }

  export type ArtistsUpdateToOneWithWhereWithoutFollowersInput = {
    where?: ArtistsWhereInput
    data: XOR<ArtistsUpdateWithoutFollowersInput, ArtistsUncheckedUpdateWithoutFollowersInput>
  }

  export type ArtistsUpdateWithoutFollowersInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    albums?: AlbumsUpdateManyWithoutArtistNestedInput
    tracks?: ArtistsOnTracksUpdateManyWithoutArtistNestedInput
    genre?: GenreUpdateOneRequiredWithoutArtistsNestedInput
  }

  export type ArtistsUncheckedUpdateWithoutFollowersInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreName?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    albums?: AlbumsUncheckedUpdateManyWithoutArtistNestedInput
    tracks?: ArtistsOnTracksUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type UserCreateWithoutLikedAlbumsInput = {
    id?: string
    email: string
    password: string
    image?: string
    role?: string
    name?: string | null
    gender?: string | null
    birthDate?: string | null
    country?: string | null
    artistsFollowed?: UserFollowsArtistsCreateNestedManyWithoutUserInput
    followedPlaylists?: UserFollowsPlaylistsCreateNestedManyWithoutUserInput
    createdPlaylists?: PlaylistsCreateNestedManyWithoutUserInput
    favTracks?: UserFavsTracksCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutLikedAlbumsInput = {
    id?: string
    email: string
    password: string
    image?: string
    role?: string
    name?: string | null
    gender?: string | null
    birthDate?: string | null
    country?: string | null
    artistsFollowed?: UserFollowsArtistsUncheckedCreateNestedManyWithoutUserInput
    followedPlaylists?: UserFollowsPlaylistsUncheckedCreateNestedManyWithoutUserInput
    createdPlaylists?: PlaylistsUncheckedCreateNestedManyWithoutUserInput
    favTracks?: UserFavsTracksUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutLikedAlbumsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikedAlbumsInput, UserUncheckedCreateWithoutLikedAlbumsInput>
  }

  export type AlbumsCreateWithoutLikedByUsersInput = {
    id?: string
    name: string
    thumbnail: string
    artist: ArtistsCreateNestedOneWithoutAlbumsInput
    tracks?: TracksOnAlbumsCreateNestedManyWithoutAlbumInput
    genre: GenreCreateNestedOneWithoutAlbumsInput
  }

  export type AlbumsUncheckedCreateWithoutLikedByUsersInput = {
    id?: string
    name: string
    artistName: string
    thumbnail: string
    genreName: string
    tracks?: TracksOnAlbumsUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumsCreateOrConnectWithoutLikedByUsersInput = {
    where: AlbumsWhereUniqueInput
    create: XOR<AlbumsCreateWithoutLikedByUsersInput, AlbumsUncheckedCreateWithoutLikedByUsersInput>
  }

  export type UserUpsertWithoutLikedAlbumsInput = {
    update: XOR<UserUpdateWithoutLikedAlbumsInput, UserUncheckedUpdateWithoutLikedAlbumsInput>
    create: XOR<UserCreateWithoutLikedAlbumsInput, UserUncheckedCreateWithoutLikedAlbumsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikedAlbumsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikedAlbumsInput, UserUncheckedUpdateWithoutLikedAlbumsInput>
  }

  export type UserUpdateWithoutLikedAlbumsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    artistsFollowed?: UserFollowsArtistsUpdateManyWithoutUserNestedInput
    followedPlaylists?: UserFollowsPlaylistsUpdateManyWithoutUserNestedInput
    createdPlaylists?: PlaylistsUpdateManyWithoutUserNestedInput
    favTracks?: UserFavsTracksUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutLikedAlbumsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    image?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    gender?: NullableStringFieldUpdateOperationsInput | string | null
    birthDate?: NullableStringFieldUpdateOperationsInput | string | null
    country?: NullableStringFieldUpdateOperationsInput | string | null
    artistsFollowed?: UserFollowsArtistsUncheckedUpdateManyWithoutUserNestedInput
    followedPlaylists?: UserFollowsPlaylistsUncheckedUpdateManyWithoutUserNestedInput
    createdPlaylists?: PlaylistsUncheckedUpdateManyWithoutUserNestedInput
    favTracks?: UserFavsTracksUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AlbumsUpsertWithoutLikedByUsersInput = {
    update: XOR<AlbumsUpdateWithoutLikedByUsersInput, AlbumsUncheckedUpdateWithoutLikedByUsersInput>
    create: XOR<AlbumsCreateWithoutLikedByUsersInput, AlbumsUncheckedCreateWithoutLikedByUsersInput>
    where?: AlbumsWhereInput
  }

  export type AlbumsUpdateToOneWithWhereWithoutLikedByUsersInput = {
    where?: AlbumsWhereInput
    data: XOR<AlbumsUpdateWithoutLikedByUsersInput, AlbumsUncheckedUpdateWithoutLikedByUsersInput>
  }

  export type AlbumsUpdateWithoutLikedByUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    artist?: ArtistsUpdateOneRequiredWithoutAlbumsNestedInput
    tracks?: TracksOnAlbumsUpdateManyWithoutAlbumNestedInput
    genre?: GenreUpdateOneRequiredWithoutAlbumsNestedInput
  }

  export type AlbumsUncheckedUpdateWithoutLikedByUsersInput = {
    name?: StringFieldUpdateOperationsInput | string
    artistName?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreName?: StringFieldUpdateOperationsInput | string
    tracks?: TracksOnAlbumsUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type UserLikedAlbumsCreateManyUserInput = {
    id?: string
    albumId: string
    createdAt?: Date | string
  }

  export type UserFollowsArtistsCreateManyUserInput = {
    id?: string
    artistId: string
    createdAt?: Date | string
  }

  export type UserFollowsPlaylistsCreateManyUserInput = {
    id?: string
    playlistId: string
  }

  export type PlaylistsCreateManyUserInput = {
    id?: string
    name: string
    thumbnail: string
    publicAccess?: boolean
  }

  export type UserFavsTracksCreateManyUserInput = {
    id?: string
    trackId: string
    createdAt?: Date | string
  }

  export type UserLikedAlbumsUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    album?: AlbumsUpdateOneRequiredWithoutLikedByUsersNestedInput
  }

  export type UserLikedAlbumsUncheckedUpdateWithoutUserInput = {
    albumId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLikedAlbumsUncheckedUpdateManyWithoutUserInput = {
    albumId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFollowsArtistsUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    artist?: ArtistsUpdateOneRequiredWithoutFollowersNestedInput
  }

  export type UserFollowsArtistsUncheckedUpdateWithoutUserInput = {
    artistId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFollowsArtistsUncheckedUpdateManyWithoutUserInput = {
    artistId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFollowsPlaylistsUpdateWithoutUserInput = {
    playlist?: PlaylistsUpdateOneRequiredWithoutFollowersNestedInput
  }

  export type UserFollowsPlaylistsUncheckedUpdateWithoutUserInput = {
    playlistId?: StringFieldUpdateOperationsInput | string
  }

  export type UserFollowsPlaylistsUncheckedUpdateManyWithoutUserInput = {
    playlistId?: StringFieldUpdateOperationsInput | string
  }

  export type PlaylistsUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    publicAccess?: BoolFieldUpdateOperationsInput | boolean
    followers?: UserFollowsPlaylistsUpdateManyWithoutPlaylistNestedInput
    tracksConnections?: PlaylistToTrackUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistsUncheckedUpdateWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    publicAccess?: BoolFieldUpdateOperationsInput | boolean
    followers?: UserFollowsPlaylistsUncheckedUpdateManyWithoutPlaylistNestedInput
    tracksConnections?: PlaylistToTrackUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistsUncheckedUpdateManyWithoutUserInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    publicAccess?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserFavsTracksUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    track?: TracksUpdateOneRequiredWithoutFavsOfUsersNestedInput
  }

  export type UserFavsTracksUncheckedUpdateWithoutUserInput = {
    trackId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavsTracksUncheckedUpdateManyWithoutUserInput = {
    trackId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ArtistsOnTracksCreateManyTrackInput = {
    id?: string
    artistName: string
  }

  export type TracksOnAlbumsCreateManyTrackInput = {
    id?: string
    albumId: string
  }

  export type PlaylistToTrackCreateManyTrackInput = {
    id?: string
    playlistId: string
  }

  export type UserFavsTracksCreateManyTrackInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type ArtistsOnTracksUpdateWithoutTrackInput = {
    artist?: ArtistsUpdateOneRequiredWithoutTracksNestedInput
  }

  export type ArtistsOnTracksUncheckedUpdateWithoutTrackInput = {
    artistName?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistsOnTracksUncheckedUpdateManyWithoutTrackInput = {
    artistName?: StringFieldUpdateOperationsInput | string
  }

  export type TracksOnAlbumsUpdateWithoutTrackInput = {
    album?: AlbumsUpdateOneRequiredWithoutTracksNestedInput
  }

  export type TracksOnAlbumsUncheckedUpdateWithoutTrackInput = {
    albumId?: StringFieldUpdateOperationsInput | string
  }

  export type TracksOnAlbumsUncheckedUpdateManyWithoutTrackInput = {
    albumId?: StringFieldUpdateOperationsInput | string
  }

  export type PlaylistToTrackUpdateWithoutTrackInput = {
    playlist?: PlaylistsUpdateOneRequiredWithoutTracksConnectionsNestedInput
  }

  export type PlaylistToTrackUncheckedUpdateWithoutTrackInput = {
    playlistId?: StringFieldUpdateOperationsInput | string
  }

  export type PlaylistToTrackUncheckedUpdateManyWithoutTrackInput = {
    playlistId?: StringFieldUpdateOperationsInput | string
  }

  export type UserFavsTracksUpdateWithoutTrackInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavTracksNestedInput
  }

  export type UserFavsTracksUncheckedUpdateWithoutTrackInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFavsTracksUncheckedUpdateManyWithoutTrackInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TracksOnAlbumsCreateManyAlbumInput = {
    id?: string
    trackId: string
  }

  export type UserLikedAlbumsCreateManyAlbumInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type TracksOnAlbumsUpdateWithoutAlbumInput = {
    track?: TracksUpdateOneRequiredWithoutAlbumNestedInput
  }

  export type TracksOnAlbumsUncheckedUpdateWithoutAlbumInput = {
    trackId?: StringFieldUpdateOperationsInput | string
  }

  export type TracksOnAlbumsUncheckedUpdateManyWithoutAlbumInput = {
    trackId?: StringFieldUpdateOperationsInput | string
  }

  export type UserLikedAlbumsUpdateWithoutAlbumInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutLikedAlbumsNestedInput
  }

  export type UserLikedAlbumsUncheckedUpdateWithoutAlbumInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserLikedAlbumsUncheckedUpdateManyWithoutAlbumInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFollowsPlaylistsCreateManyPlaylistInput = {
    id?: string
    userId: string
  }

  export type PlaylistToTrackCreateManyPlaylistInput = {
    id?: string
    trackId: string
  }

  export type UserFollowsPlaylistsUpdateWithoutPlaylistInput = {
    user?: UserUpdateOneRequiredWithoutFollowedPlaylistsNestedInput
  }

  export type UserFollowsPlaylistsUncheckedUpdateWithoutPlaylistInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserFollowsPlaylistsUncheckedUpdateManyWithoutPlaylistInput = {
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type PlaylistToTrackUpdateWithoutPlaylistInput = {
    track?: TracksUpdateOneRequiredWithoutPlaylistConnectionsNestedInput
  }

  export type PlaylistToTrackUncheckedUpdateWithoutPlaylistInput = {
    trackId?: StringFieldUpdateOperationsInput | string
  }

  export type PlaylistToTrackUncheckedUpdateManyWithoutPlaylistInput = {
    trackId?: StringFieldUpdateOperationsInput | string
  }

  export type AlbumsCreateManyArtistInput = {
    id?: string
    name: string
    thumbnail: string
    genreName: string
  }

  export type ArtistsOnTracksCreateManyArtistInput = {
    id?: string
    trackId: string
  }

  export type UserFollowsArtistsCreateManyArtistInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type AlbumsUpdateWithoutArtistInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    tracks?: TracksOnAlbumsUpdateManyWithoutAlbumNestedInput
    genre?: GenreUpdateOneRequiredWithoutAlbumsNestedInput
    likedByUsers?: UserLikedAlbumsUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumsUncheckedUpdateWithoutArtistInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreName?: StringFieldUpdateOperationsInput | string
    tracks?: TracksOnAlbumsUncheckedUpdateManyWithoutAlbumNestedInput
    likedByUsers?: UserLikedAlbumsUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumsUncheckedUpdateManyWithoutArtistInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreName?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistsOnTracksUpdateWithoutArtistInput = {
    track?: TracksUpdateOneRequiredWithoutArtistNestedInput
  }

  export type ArtistsOnTracksUncheckedUpdateWithoutArtistInput = {
    trackId?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistsOnTracksUncheckedUpdateManyWithoutArtistInput = {
    trackId?: StringFieldUpdateOperationsInput | string
  }

  export type UserFollowsArtistsUpdateWithoutArtistInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutArtistsFollowedNestedInput
  }

  export type UserFollowsArtistsUncheckedUpdateWithoutArtistInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserFollowsArtistsUncheckedUpdateManyWithoutArtistInput = {
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AlbumsCreateManyGenreInput = {
    id?: string
    name: string
    artistName: string
    thumbnail: string
  }

  export type TracksCreateManyGenreInput = {
    id?: string
    name: string
    url: string
    thumbnail: string
  }

  export type ArtistsCreateManyGenreInput = {
    id?: string
    name: string
    email: string
    password: string
    thumbnail?: string
    description?: string | null
  }

  export type AlbumsUpdateWithoutGenreInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    artist?: ArtistsUpdateOneRequiredWithoutAlbumsNestedInput
    tracks?: TracksOnAlbumsUpdateManyWithoutAlbumNestedInput
    likedByUsers?: UserLikedAlbumsUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumsUncheckedUpdateWithoutGenreInput = {
    name?: StringFieldUpdateOperationsInput | string
    artistName?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    tracks?: TracksOnAlbumsUncheckedUpdateManyWithoutAlbumNestedInput
    likedByUsers?: UserLikedAlbumsUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumsUncheckedUpdateManyWithoutGenreInput = {
    name?: StringFieldUpdateOperationsInput | string
    artistName?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
  }

  export type TracksUpdateWithoutGenreInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    artist?: ArtistsOnTracksUpdateManyWithoutTrackNestedInput
    album?: TracksOnAlbumsUpdateManyWithoutTrackNestedInput
    playlistConnections?: PlaylistToTrackUpdateManyWithoutTrackNestedInput
    favsOfUsers?: UserFavsTracksUpdateManyWithoutTrackNestedInput
  }

  export type TracksUncheckedUpdateWithoutGenreInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    artist?: ArtistsOnTracksUncheckedUpdateManyWithoutTrackNestedInput
    album?: TracksOnAlbumsUncheckedUpdateManyWithoutTrackNestedInput
    playlistConnections?: PlaylistToTrackUncheckedUpdateManyWithoutTrackNestedInput
    favsOfUsers?: UserFavsTracksUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type TracksUncheckedUpdateManyWithoutGenreInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistsUpdateWithoutGenreInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    albums?: AlbumsUpdateManyWithoutArtistNestedInput
    tracks?: ArtistsOnTracksUpdateManyWithoutArtistNestedInput
    followers?: UserFollowsArtistsUpdateManyWithoutArtistNestedInput
  }

  export type ArtistsUncheckedUpdateWithoutGenreInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    albums?: AlbumsUncheckedUpdateManyWithoutArtistNestedInput
    tracks?: ArtistsOnTracksUncheckedUpdateManyWithoutArtistNestedInput
    followers?: UserFollowsArtistsUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type ArtistsUncheckedUpdateManyWithoutGenreInput = {
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TracksCountOutputTypeDefaultArgs instead
     */
    export type TracksCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TracksCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AlbumsCountOutputTypeDefaultArgs instead
     */
    export type AlbumsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AlbumsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlaylistsCountOutputTypeDefaultArgs instead
     */
    export type PlaylistsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlaylistsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ArtistsCountOutputTypeDefaultArgs instead
     */
    export type ArtistsCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ArtistsCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GenreCountOutputTypeDefaultArgs instead
     */
    export type GenreCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GenreCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TracksDefaultArgs instead
     */
    export type TracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TracksDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AlbumsDefaultArgs instead
     */
    export type AlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AlbumsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlaylistsDefaultArgs instead
     */
    export type PlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlaylistsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ArtistsDefaultArgs instead
     */
    export type ArtistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ArtistsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use GenreDefaultArgs instead
     */
    export type GenreArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = GenreDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ArtistsOnTracksDefaultArgs instead
     */
    export type ArtistsOnTracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ArtistsOnTracksDefaultArgs<ExtArgs>
    /**
     * @deprecated Use TracksOnAlbumsDefaultArgs instead
     */
    export type TracksOnAlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = TracksOnAlbumsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserFavsTracksDefaultArgs instead
     */
    export type UserFavsTracksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserFavsTracksDefaultArgs<ExtArgs>
    /**
     * @deprecated Use PlaylistToTrackDefaultArgs instead
     */
    export type PlaylistToTrackArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = PlaylistToTrackDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserFollowsPlaylistsDefaultArgs instead
     */
    export type UserFollowsPlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserFollowsPlaylistsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserFollowsArtistsDefaultArgs instead
     */
    export type UserFollowsArtistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserFollowsArtistsDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserLikedAlbumsDefaultArgs instead
     */
    export type UserLikedAlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserLikedAlbumsDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}