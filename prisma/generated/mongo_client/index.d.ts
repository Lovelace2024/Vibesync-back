
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
    Genre: 'Genre'
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
      modelProps: 'user' | 'tracks' | 'albums' | 'playlists' | 'artists' | 'genre'
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
    favs: number
    likedAlbums: number
    likedPlaylists: number
    artistsFollowed: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favs?: boolean | UserCountOutputTypeCountFavsArgs
    likedAlbums?: boolean | UserCountOutputTypeCountLikedAlbumsArgs
    likedPlaylists?: boolean | UserCountOutputTypeCountLikedPlaylistsArgs
    artistsFollowed?: boolean | UserCountOutputTypeCountArtistsFollowedArgs
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
  export type UserCountOutputTypeCountFavsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TracksWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikedAlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AlbumsWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLikedPlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistsWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountArtistsFollowedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ArtistsWhereInput
  }



  /**
   * Count Type TracksCountOutputType
   */

  export type TracksCountOutputType = {
    playlists: number
  }

  export type TracksCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    playlists?: boolean | TracksCountOutputTypeCountPlaylistsArgs
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
  export type TracksCountOutputTypeCountPlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistsWhereInput
  }



  /**
   * Count Type AlbumsCountOutputType
   */

  export type AlbumsCountOutputType = {
    tracks: number
  }

  export type AlbumsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tracks?: boolean | AlbumsCountOutputTypeCountTracksArgs
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
    where?: TracksWhereInput
  }



  /**
   * Count Type ArtistsCountOutputType
   */

  export type ArtistsCountOutputType = {
    albums: number
    tracks: number
  }

  export type ArtistsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    albums?: boolean | ArtistsCountOutputTypeCountAlbumsArgs
    tracks?: boolean | ArtistsCountOutputTypeCountTracksArgs
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
    where?: TracksWhereInput
  }



  /**
   * Count Type GenreCountOutputType
   */

  export type GenreCountOutputType = {
    albums: number
    tracks: number
    artists: number
    playlists: number
  }

  export type GenreCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    albums?: boolean | GenreCountOutputTypeCountAlbumsArgs
    tracks?: boolean | GenreCountOutputTypeCountTracksArgs
    artists?: boolean | GenreCountOutputTypeCountArtistsArgs
    playlists?: boolean | GenreCountOutputTypeCountPlaylistsArgs
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
   * GenreCountOutputType without action
   */
  export type GenreCountOutputTypeCountPlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlaylistsWhereInput
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
    name: string | null
    gender: string | null
    birthDate: Date | null
    country: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    password: string | null
    name: string | null
    gender: string | null
    birthDate: Date | null
    country: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    password: number
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
    name?: true
    gender?: true
    birthDate?: true
    country?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    password?: true
    name?: true
    gender?: true
    birthDate?: true
    country?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    password?: true
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
    name: string
    gender: string
    birthDate: Date
    country: string
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
    name?: boolean
    gender?: boolean
    birthDate?: boolean
    country?: boolean
    favs?: boolean | User$favsArgs<ExtArgs>
    likedAlbums?: boolean | User$likedAlbumsArgs<ExtArgs>
    likedPlaylists?: boolean | User$likedPlaylistsArgs<ExtArgs>
    artistsFollowed?: boolean | User$artistsFollowedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    password?: boolean
    name?: boolean
    gender?: boolean
    birthDate?: boolean
    country?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    favs?: boolean | User$favsArgs<ExtArgs>
    likedAlbums?: boolean | User$likedAlbumsArgs<ExtArgs>
    likedPlaylists?: boolean | User$likedPlaylistsArgs<ExtArgs>
    artistsFollowed?: boolean | User$artistsFollowedArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      favs: Prisma.$TracksPayload<ExtArgs>[]
      likedAlbums: Prisma.$AlbumsPayload<ExtArgs>[]
      likedPlaylists: Prisma.$PlaylistsPayload<ExtArgs>[]
      artistsFollowed: Prisma.$ArtistsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      password: string
      name: string
      gender: string
      birthDate: Date
      country: string
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

    favs<T extends User$favsArgs<ExtArgs> = {}>(args?: Subset<T, User$favsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'findMany'> | Null>;

    likedAlbums<T extends User$likedAlbumsArgs<ExtArgs> = {}>(args?: Subset<T, User$likedAlbumsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AlbumsPayload<ExtArgs>, T, 'findMany'> | Null>;

    likedPlaylists<T extends User$likedPlaylistsArgs<ExtArgs> = {}>(args?: Subset<T, User$likedPlaylistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistsPayload<ExtArgs>, T, 'findMany'> | Null>;

    artistsFollowed<T extends User$artistsFollowedArgs<ExtArgs> = {}>(args?: Subset<T, User$artistsFollowedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, 'findMany'> | Null>;

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
    readonly name: FieldRef<"User", 'String'>
    readonly gender: FieldRef<"User", 'String'>
    readonly birthDate: FieldRef<"User", 'DateTime'>
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
   * User.favs
   */
  export type User$favsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.likedAlbums
   */
  export type User$likedAlbumsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.likedPlaylists
   */
  export type User$likedPlaylistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * User.artistsFollowed
   */
  export type User$artistsFollowedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    artistId: string | null
    url: string | null
    thumbnail: string | null
    genreId: string | null
    albumId: string | null
  }

  export type TracksMaxAggregateOutputType = {
    id: string | null
    name: string | null
    artistId: string | null
    url: string | null
    thumbnail: string | null
    genreId: string | null
    albumId: string | null
  }

  export type TracksCountAggregateOutputType = {
    id: number
    name: number
    artistId: number
    url: number
    thumbnail: number
    genreId: number
    albumId: number
    userId: number
    _all: number
  }


  export type TracksMinAggregateInputType = {
    id?: true
    name?: true
    artistId?: true
    url?: true
    thumbnail?: true
    genreId?: true
    albumId?: true
  }

  export type TracksMaxAggregateInputType = {
    id?: true
    name?: true
    artistId?: true
    url?: true
    thumbnail?: true
    genreId?: true
    albumId?: true
  }

  export type TracksCountAggregateInputType = {
    id?: true
    name?: true
    artistId?: true
    url?: true
    thumbnail?: true
    genreId?: true
    albumId?: true
    userId?: true
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
    artistId: string
    url: string
    thumbnail: string
    genreId: string
    albumId: string
    userId: string[]
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
    artistId?: boolean
    url?: boolean
    thumbnail?: boolean
    genreId?: boolean
    albumId?: boolean
    userId?: boolean
    artist?: boolean | ArtistsDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
    album?: boolean | AlbumsDefaultArgs<ExtArgs>
    playlists?: boolean | Tracks$playlistsArgs<ExtArgs>
    followers?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | TracksCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["tracks"]>

  export type TracksSelectScalar = {
    id?: boolean
    name?: boolean
    artistId?: boolean
    url?: boolean
    thumbnail?: boolean
    genreId?: boolean
    albumId?: boolean
    userId?: boolean
  }

  export type TracksInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | ArtistsDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
    album?: boolean | AlbumsDefaultArgs<ExtArgs>
    playlists?: boolean | Tracks$playlistsArgs<ExtArgs>
    followers?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | TracksCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $TracksPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Tracks"
    objects: {
      artist: Prisma.$ArtistsPayload<ExtArgs>
      genre: Prisma.$GenrePayload<ExtArgs>
      album: Prisma.$AlbumsPayload<ExtArgs>
      playlists: Prisma.$PlaylistsPayload<ExtArgs>[]
      followers: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      artistId: string
      url: string
      thumbnail: string
      genreId: string
      albumId: string
      userId: string[]
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

    artist<T extends ArtistsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ArtistsDefaultArgs<ExtArgs>>): Prisma__ArtistsClient<$Result.GetResult<Prisma.$ArtistsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    genre<T extends GenreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GenreDefaultArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    album<T extends AlbumsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AlbumsDefaultArgs<ExtArgs>>): Prisma__AlbumsClient<$Result.GetResult<Prisma.$AlbumsPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    playlists<T extends Tracks$playlistsArgs<ExtArgs> = {}>(args?: Subset<T, Tracks$playlistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistsPayload<ExtArgs>, T, 'findMany'> | Null>;

    followers<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
    readonly artistId: FieldRef<"Tracks", 'String'>
    readonly url: FieldRef<"Tracks", 'String'>
    readonly thumbnail: FieldRef<"Tracks", 'String'>
    readonly genreId: FieldRef<"Tracks", 'String'>
    readonly albumId: FieldRef<"Tracks", 'String'>
    readonly userId: FieldRef<"Tracks", 'String[]'>
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
   * Tracks.playlists
   */
  export type Tracks$playlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    artistId: string | null
    thumbnail: string | null
    genreId: string | null
  }

  export type AlbumsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    artistId: string | null
    thumbnail: string | null
    genreId: string | null
  }

  export type AlbumsCountAggregateOutputType = {
    id: number
    name: number
    artistId: number
    thumbnail: number
    genreId: number
    userId: number
    _all: number
  }


  export type AlbumsMinAggregateInputType = {
    id?: true
    name?: true
    artistId?: true
    thumbnail?: true
    genreId?: true
  }

  export type AlbumsMaxAggregateInputType = {
    id?: true
    name?: true
    artistId?: true
    thumbnail?: true
    genreId?: true
  }

  export type AlbumsCountAggregateInputType = {
    id?: true
    name?: true
    artistId?: true
    thumbnail?: true
    genreId?: true
    userId?: true
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
    artistId: string
    thumbnail: string
    genreId: string
    userId: string[]
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
    artistId?: boolean
    thumbnail?: boolean
    genreId?: boolean
    userId?: boolean
    artist?: boolean | ArtistsDefaultArgs<ExtArgs>
    tracks?: boolean | Albums$tracksArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
    followers?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | AlbumsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["albums"]>

  export type AlbumsSelectScalar = {
    id?: boolean
    name?: boolean
    artistId?: boolean
    thumbnail?: boolean
    genreId?: boolean
    userId?: boolean
  }

  export type AlbumsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    artist?: boolean | ArtistsDefaultArgs<ExtArgs>
    tracks?: boolean | Albums$tracksArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
    followers?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | AlbumsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $AlbumsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Albums"
    objects: {
      artist: Prisma.$ArtistsPayload<ExtArgs>
      tracks: Prisma.$TracksPayload<ExtArgs>[]
      genre: Prisma.$GenrePayload<ExtArgs>
      followers: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      artistId: string
      thumbnail: string
      genreId: string
      userId: string[]
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

    tracks<T extends Albums$tracksArgs<ExtArgs> = {}>(args?: Subset<T, Albums$tracksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'findMany'> | Null>;

    genre<T extends GenreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GenreDefaultArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    followers<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
    readonly artistId: FieldRef<"Albums", 'String'>
    readonly thumbnail: FieldRef<"Albums", 'String'>
    readonly genreId: FieldRef<"Albums", 'String'>
    readonly userId: FieldRef<"Albums", 'String[]'>
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
    genreId: string | null
  }

  export type PlaylistsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    thumbnail: string | null
    genreId: string | null
  }

  export type PlaylistsCountAggregateOutputType = {
    id: number
    name: number
    thumbnail: number
    trackId: number
    genreId: number
    userId: number
    _all: number
  }


  export type PlaylistsMinAggregateInputType = {
    id?: true
    name?: true
    thumbnail?: true
    genreId?: true
  }

  export type PlaylistsMaxAggregateInputType = {
    id?: true
    name?: true
    thumbnail?: true
    genreId?: true
  }

  export type PlaylistsCountAggregateInputType = {
    id?: true
    name?: true
    thumbnail?: true
    trackId?: true
    genreId?: true
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
    trackId: string[]
    genreId: string
    userId: string[]
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
    trackId?: boolean
    genreId?: boolean
    userId?: boolean
    tracks?: boolean | TracksDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
    followers?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["playlists"]>

  export type PlaylistsSelectScalar = {
    id?: boolean
    name?: boolean
    thumbnail?: boolean
    trackId?: boolean
    genreId?: boolean
    userId?: boolean
  }

  export type PlaylistsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    tracks?: boolean | TracksDefaultArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
    followers?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $PlaylistsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Playlists"
    objects: {
      tracks: Prisma.$TracksPayload<ExtArgs>
      genre: Prisma.$GenrePayload<ExtArgs>
      followers: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      thumbnail: string
      trackId: string[]
      genreId: string
      userId: string[]
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

    tracks<T extends TracksDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TracksDefaultArgs<ExtArgs>>): Prisma__TracksClient<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    genre<T extends GenreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GenreDefaultArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    followers<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
    readonly trackId: FieldRef<"Playlists", 'String[]'>
    readonly genreId: FieldRef<"Playlists", 'String'>
    readonly userId: FieldRef<"Playlists", 'String[]'>
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
    thumbnail: string | null
    genreId: string | null
  }

  export type ArtistsMaxAggregateOutputType = {
    id: string | null
    name: string | null
    thumbnail: string | null
    genreId: string | null
  }

  export type ArtistsCountAggregateOutputType = {
    id: number
    name: number
    thumbnail: number
    genreId: number
    userId: number
    _all: number
  }


  export type ArtistsMinAggregateInputType = {
    id?: true
    name?: true
    thumbnail?: true
    genreId?: true
  }

  export type ArtistsMaxAggregateInputType = {
    id?: true
    name?: true
    thumbnail?: true
    genreId?: true
  }

  export type ArtistsCountAggregateInputType = {
    id?: true
    name?: true
    thumbnail?: true
    genreId?: true
    userId?: true
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
    thumbnail: string
    genreId: string
    userId: string[]
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
    thumbnail?: boolean
    genreId?: boolean
    userId?: boolean
    albums?: boolean | Artists$albumsArgs<ExtArgs>
    tracks?: boolean | Artists$tracksArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
    followers?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ArtistsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["artists"]>

  export type ArtistsSelectScalar = {
    id?: boolean
    name?: boolean
    thumbnail?: boolean
    genreId?: boolean
    userId?: boolean
  }

  export type ArtistsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    albums?: boolean | Artists$albumsArgs<ExtArgs>
    tracks?: boolean | Artists$tracksArgs<ExtArgs>
    genre?: boolean | GenreDefaultArgs<ExtArgs>
    followers?: boolean | UserDefaultArgs<ExtArgs>
    _count?: boolean | ArtistsCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $ArtistsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Artists"
    objects: {
      albums: Prisma.$AlbumsPayload<ExtArgs>[]
      tracks: Prisma.$TracksPayload<ExtArgs>[]
      genre: Prisma.$GenrePayload<ExtArgs>
      followers: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      thumbnail: string
      genreId: string
      userId: string[]
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

    tracks<T extends Artists$tracksArgs<ExtArgs> = {}>(args?: Subset<T, Artists$tracksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TracksPayload<ExtArgs>, T, 'findMany'> | Null>;

    genre<T extends GenreDefaultArgs<ExtArgs> = {}>(args?: Subset<T, GenreDefaultArgs<ExtArgs>>): Prisma__GenreClient<$Result.GetResult<Prisma.$GenrePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    followers<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

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
    readonly thumbnail: FieldRef<"Artists", 'String'>
    readonly genreId: FieldRef<"Artists", 'String'>
    readonly userId: FieldRef<"Artists", 'String[]'>
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
    playlists?: boolean | Genre$playlistsArgs<ExtArgs>
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
    playlists?: boolean | Genre$playlistsArgs<ExtArgs>
    _count?: boolean | GenreCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $GenrePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Genre"
    objects: {
      albums: Prisma.$AlbumsPayload<ExtArgs>[]
      tracks: Prisma.$TracksPayload<ExtArgs>[]
      artists: Prisma.$ArtistsPayload<ExtArgs>[]
      playlists: Prisma.$PlaylistsPayload<ExtArgs>[]
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

    playlists<T extends Genre$playlistsArgs<ExtArgs> = {}>(args?: Subset<T, Genre$playlistsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlaylistsPayload<ExtArgs>, T, 'findMany'> | Null>;

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
   * Genre.playlists
   */
  export type Genre$playlistsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
   * Enums
   */

  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    password: 'password',
    name: 'name',
    gender: 'gender',
    birthDate: 'birthDate',
    country: 'country'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TracksScalarFieldEnum: {
    id: 'id',
    name: 'name',
    artistId: 'artistId',
    url: 'url',
    thumbnail: 'thumbnail',
    genreId: 'genreId',
    albumId: 'albumId',
    userId: 'userId'
  };

  export type TracksScalarFieldEnum = (typeof TracksScalarFieldEnum)[keyof typeof TracksScalarFieldEnum]


  export const AlbumsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    artistId: 'artistId',
    thumbnail: 'thumbnail',
    genreId: 'genreId',
    userId: 'userId'
  };

  export type AlbumsScalarFieldEnum = (typeof AlbumsScalarFieldEnum)[keyof typeof AlbumsScalarFieldEnum]


  export const PlaylistsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    thumbnail: 'thumbnail',
    trackId: 'trackId',
    genreId: 'genreId',
    userId: 'userId'
  };

  export type PlaylistsScalarFieldEnum = (typeof PlaylistsScalarFieldEnum)[keyof typeof PlaylistsScalarFieldEnum]


  export const ArtistsScalarFieldEnum: {
    id: 'id',
    name: 'name',
    thumbnail: 'thumbnail',
    genreId: 'genreId',
    userId: 'userId'
  };

  export type ArtistsScalarFieldEnum = (typeof ArtistsScalarFieldEnum)[keyof typeof ArtistsScalarFieldEnum]


  export const GenreScalarFieldEnum: {
    id: 'id',
    name: 'name'
  };

  export type GenreScalarFieldEnum = (typeof GenreScalarFieldEnum)[keyof typeof GenreScalarFieldEnum]


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
    name?: StringFilter<"User"> | string
    gender?: StringFilter<"User"> | string
    birthDate?: DateTimeFilter<"User"> | Date | string
    country?: StringFilter<"User"> | string
    favs?: TracksListRelationFilter
    likedAlbums?: AlbumsListRelationFilter
    likedPlaylists?: PlaylistsListRelationFilter
    artistsFollowed?: ArtistsListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    country?: SortOrder
    favs?: TracksOrderByRelationAggregateInput
    likedAlbums?: AlbumsOrderByRelationAggregateInput
    likedPlaylists?: PlaylistsOrderByRelationAggregateInput
    artistsFollowed?: ArtistsOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    password?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    gender?: StringFilter<"User"> | string
    birthDate?: DateTimeFilter<"User"> | Date | string
    country?: StringFilter<"User"> | string
    favs?: TracksListRelationFilter
    likedAlbums?: AlbumsListRelationFilter
    likedPlaylists?: PlaylistsListRelationFilter
    artistsFollowed?: ArtistsListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
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
    name?: StringWithAggregatesFilter<"User"> | string
    gender?: StringWithAggregatesFilter<"User"> | string
    birthDate?: DateTimeWithAggregatesFilter<"User"> | Date | string
    country?: StringWithAggregatesFilter<"User"> | string
  }

  export type TracksWhereInput = {
    AND?: TracksWhereInput | TracksWhereInput[]
    OR?: TracksWhereInput[]
    NOT?: TracksWhereInput | TracksWhereInput[]
    id?: StringFilter<"Tracks"> | string
    name?: StringFilter<"Tracks"> | string
    artistId?: StringFilter<"Tracks"> | string
    url?: StringFilter<"Tracks"> | string
    thumbnail?: StringFilter<"Tracks"> | string
    genreId?: StringFilter<"Tracks"> | string
    albumId?: StringFilter<"Tracks"> | string
    userId?: StringNullableListFilter<"Tracks">
    artist?: XOR<ArtistsRelationFilter, ArtistsWhereInput>
    genre?: XOR<GenreRelationFilter, GenreWhereInput>
    album?: XOR<AlbumsRelationFilter, AlbumsWhereInput>
    playlists?: PlaylistsListRelationFilter
    followers?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type TracksOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    artistId?: SortOrder
    url?: SortOrder
    thumbnail?: SortOrder
    genreId?: SortOrder
    albumId?: SortOrder
    userId?: SortOrder
    artist?: ArtistsOrderByWithRelationInput
    genre?: GenreOrderByWithRelationInput
    album?: AlbumsOrderByWithRelationInput
    playlists?: PlaylistsOrderByRelationAggregateInput
    followers?: UserOrderByWithRelationInput
  }

  export type TracksWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: TracksWhereInput | TracksWhereInput[]
    OR?: TracksWhereInput[]
    NOT?: TracksWhereInput | TracksWhereInput[]
    artistId?: StringFilter<"Tracks"> | string
    url?: StringFilter<"Tracks"> | string
    thumbnail?: StringFilter<"Tracks"> | string
    genreId?: StringFilter<"Tracks"> | string
    albumId?: StringFilter<"Tracks"> | string
    userId?: StringNullableListFilter<"Tracks">
    artist?: XOR<ArtistsRelationFilter, ArtistsWhereInput>
    genre?: XOR<GenreRelationFilter, GenreWhereInput>
    album?: XOR<AlbumsRelationFilter, AlbumsWhereInput>
    playlists?: PlaylistsListRelationFilter
    followers?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "name">

  export type TracksOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    artistId?: SortOrder
    url?: SortOrder
    thumbnail?: SortOrder
    genreId?: SortOrder
    albumId?: SortOrder
    userId?: SortOrder
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
    artistId?: StringWithAggregatesFilter<"Tracks"> | string
    url?: StringWithAggregatesFilter<"Tracks"> | string
    thumbnail?: StringWithAggregatesFilter<"Tracks"> | string
    genreId?: StringWithAggregatesFilter<"Tracks"> | string
    albumId?: StringWithAggregatesFilter<"Tracks"> | string
    userId?: StringNullableListFilter<"Tracks">
  }

  export type AlbumsWhereInput = {
    AND?: AlbumsWhereInput | AlbumsWhereInput[]
    OR?: AlbumsWhereInput[]
    NOT?: AlbumsWhereInput | AlbumsWhereInput[]
    id?: StringFilter<"Albums"> | string
    name?: StringFilter<"Albums"> | string
    artistId?: StringFilter<"Albums"> | string
    thumbnail?: StringFilter<"Albums"> | string
    genreId?: StringFilter<"Albums"> | string
    userId?: StringNullableListFilter<"Albums">
    artist?: XOR<ArtistsRelationFilter, ArtistsWhereInput>
    tracks?: TracksListRelationFilter
    genre?: XOR<GenreRelationFilter, GenreWhereInput>
    followers?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AlbumsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    artistId?: SortOrder
    thumbnail?: SortOrder
    genreId?: SortOrder
    userId?: SortOrder
    artist?: ArtistsOrderByWithRelationInput
    tracks?: TracksOrderByRelationAggregateInput
    genre?: GenreOrderByWithRelationInput
    followers?: UserOrderByWithRelationInput
  }

  export type AlbumsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: AlbumsWhereInput | AlbumsWhereInput[]
    OR?: AlbumsWhereInput[]
    NOT?: AlbumsWhereInput | AlbumsWhereInput[]
    name?: StringFilter<"Albums"> | string
    artistId?: StringFilter<"Albums"> | string
    thumbnail?: StringFilter<"Albums"> | string
    genreId?: StringFilter<"Albums"> | string
    userId?: StringNullableListFilter<"Albums">
    artist?: XOR<ArtistsRelationFilter, ArtistsWhereInput>
    tracks?: TracksListRelationFilter
    genre?: XOR<GenreRelationFilter, GenreWhereInput>
    followers?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type AlbumsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    artistId?: SortOrder
    thumbnail?: SortOrder
    genreId?: SortOrder
    userId?: SortOrder
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
    artistId?: StringWithAggregatesFilter<"Albums"> | string
    thumbnail?: StringWithAggregatesFilter<"Albums"> | string
    genreId?: StringWithAggregatesFilter<"Albums"> | string
    userId?: StringNullableListFilter<"Albums">
  }

  export type PlaylistsWhereInput = {
    AND?: PlaylistsWhereInput | PlaylistsWhereInput[]
    OR?: PlaylistsWhereInput[]
    NOT?: PlaylistsWhereInput | PlaylistsWhereInput[]
    id?: StringFilter<"Playlists"> | string
    name?: StringFilter<"Playlists"> | string
    thumbnail?: StringFilter<"Playlists"> | string
    trackId?: StringNullableListFilter<"Playlists">
    genreId?: StringFilter<"Playlists"> | string
    userId?: StringNullableListFilter<"Playlists">
    tracks?: XOR<TracksRelationFilter, TracksWhereInput>
    genre?: XOR<GenreRelationFilter, GenreWhereInput>
    followers?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type PlaylistsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    thumbnail?: SortOrder
    trackId?: SortOrder
    genreId?: SortOrder
    userId?: SortOrder
    tracks?: TracksOrderByWithRelationInput
    genre?: GenreOrderByWithRelationInput
    followers?: UserOrderByWithRelationInput
  }

  export type PlaylistsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: PlaylistsWhereInput | PlaylistsWhereInput[]
    OR?: PlaylistsWhereInput[]
    NOT?: PlaylistsWhereInput | PlaylistsWhereInput[]
    thumbnail?: StringFilter<"Playlists"> | string
    trackId?: StringNullableListFilter<"Playlists">
    genreId?: StringFilter<"Playlists"> | string
    userId?: StringNullableListFilter<"Playlists">
    tracks?: XOR<TracksRelationFilter, TracksWhereInput>
    genre?: XOR<GenreRelationFilter, GenreWhereInput>
    followers?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "name">

  export type PlaylistsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    thumbnail?: SortOrder
    trackId?: SortOrder
    genreId?: SortOrder
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
    trackId?: StringNullableListFilter<"Playlists">
    genreId?: StringWithAggregatesFilter<"Playlists"> | string
    userId?: StringNullableListFilter<"Playlists">
  }

  export type ArtistsWhereInput = {
    AND?: ArtistsWhereInput | ArtistsWhereInput[]
    OR?: ArtistsWhereInput[]
    NOT?: ArtistsWhereInput | ArtistsWhereInput[]
    id?: StringFilter<"Artists"> | string
    name?: StringFilter<"Artists"> | string
    thumbnail?: StringFilter<"Artists"> | string
    genreId?: StringFilter<"Artists"> | string
    userId?: StringNullableListFilter<"Artists">
    albums?: AlbumsListRelationFilter
    tracks?: TracksListRelationFilter
    genre?: XOR<GenreRelationFilter, GenreWhereInput>
    followers?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ArtistsOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    thumbnail?: SortOrder
    genreId?: SortOrder
    userId?: SortOrder
    albums?: AlbumsOrderByRelationAggregateInput
    tracks?: TracksOrderByRelationAggregateInput
    genre?: GenreOrderByWithRelationInput
    followers?: UserOrderByWithRelationInput
  }

  export type ArtistsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ArtistsWhereInput | ArtistsWhereInput[]
    OR?: ArtistsWhereInput[]
    NOT?: ArtistsWhereInput | ArtistsWhereInput[]
    thumbnail?: StringFilter<"Artists"> | string
    genreId?: StringFilter<"Artists"> | string
    userId?: StringNullableListFilter<"Artists">
    albums?: AlbumsListRelationFilter
    tracks?: TracksListRelationFilter
    genre?: XOR<GenreRelationFilter, GenreWhereInput>
    followers?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "name">

  export type ArtistsOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    thumbnail?: SortOrder
    genreId?: SortOrder
    userId?: SortOrder
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
    thumbnail?: StringWithAggregatesFilter<"Artists"> | string
    genreId?: StringWithAggregatesFilter<"Artists"> | string
    userId?: StringNullableListFilter<"Artists">
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
    playlists?: PlaylistsListRelationFilter
  }

  export type GenreOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    albums?: AlbumsOrderByRelationAggregateInput
    tracks?: TracksOrderByRelationAggregateInput
    artists?: ArtistsOrderByRelationAggregateInput
    playlists?: PlaylistsOrderByRelationAggregateInput
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
    playlists?: PlaylistsListRelationFilter
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

  export type UserCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    gender: string
    birthDate: Date | string
    country: string
    favs?: TracksCreateNestedManyWithoutFollowersInput
    likedAlbums?: AlbumsCreateNestedManyWithoutFollowersInput
    likedPlaylists?: PlaylistsCreateNestedManyWithoutFollowersInput
    artistsFollowed?: ArtistsCreateNestedManyWithoutFollowersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    password: string
    name: string
    gender: string
    birthDate: Date | string
    country: string
    favs?: TracksUncheckedCreateNestedManyWithoutFollowersInput
    likedAlbums?: AlbumsUncheckedCreateNestedManyWithoutFollowersInput
    likedPlaylists?: PlaylistsUncheckedCreateNestedManyWithoutFollowersInput
    artistsFollowed?: ArtistsUncheckedCreateNestedManyWithoutFollowersInput
  }

  export type UserUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: StringFieldUpdateOperationsInput | string
    favs?: TracksUpdateManyWithoutFollowersNestedInput
    likedAlbums?: AlbumsUpdateManyWithoutFollowersNestedInput
    likedPlaylists?: PlaylistsUpdateManyWithoutFollowersNestedInput
    artistsFollowed?: ArtistsUpdateManyWithoutFollowersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: StringFieldUpdateOperationsInput | string
    favs?: TracksUncheckedUpdateManyWithoutFollowersNestedInput
    likedAlbums?: AlbumsUncheckedUpdateManyWithoutFollowersNestedInput
    likedPlaylists?: PlaylistsUncheckedUpdateManyWithoutFollowersNestedInput
    artistsFollowed?: ArtistsUncheckedUpdateManyWithoutFollowersNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    password: string
    name: string
    gender: string
    birthDate: Date | string
    country: string
  }

  export type UserUpdateManyMutationInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: StringFieldUpdateOperationsInput | string
  }

  export type TracksCreateInput = {
    id?: string
    name: string
    url: string
    thumbnail: string
    artist: ArtistsCreateNestedOneWithoutTracksInput
    genre: GenreCreateNestedOneWithoutTracksInput
    album: AlbumsCreateNestedOneWithoutTracksInput
    playlists?: PlaylistsCreateNestedManyWithoutTracksInput
    followers: UserCreateNestedOneWithoutFavsInput
  }

  export type TracksUncheckedCreateInput = {
    id?: string
    name: string
    artistId: string
    url: string
    thumbnail: string
    genreId: string
    albumId: string
    userId?: TracksCreateuserIdInput | string[]
    playlists?: PlaylistsUncheckedCreateNestedManyWithoutTracksInput
  }

  export type TracksUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    artist?: ArtistsUpdateOneRequiredWithoutTracksNestedInput
    genre?: GenreUpdateOneRequiredWithoutTracksNestedInput
    album?: AlbumsUpdateOneRequiredWithoutTracksNestedInput
    playlists?: PlaylistsUpdateManyWithoutTracksNestedInput
    followers?: UserUpdateOneRequiredWithoutFavsNestedInput
  }

  export type TracksUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    artistId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
    albumId?: StringFieldUpdateOperationsInput | string
    userId?: TracksUpdateuserIdInput | string[]
    playlists?: PlaylistsUncheckedUpdateManyWithoutTracksNestedInput
  }

  export type TracksCreateManyInput = {
    id?: string
    name: string
    artistId: string
    url: string
    thumbnail: string
    genreId: string
    albumId: string
    userId?: TracksCreateuserIdInput | string[]
  }

  export type TracksUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
  }

  export type TracksUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    artistId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
    albumId?: StringFieldUpdateOperationsInput | string
    userId?: TracksUpdateuserIdInput | string[]
  }

  export type AlbumsCreateInput = {
    id?: string
    name: string
    thumbnail: string
    artist: ArtistsCreateNestedOneWithoutAlbumsInput
    tracks?: TracksCreateNestedManyWithoutAlbumInput
    genre: GenreCreateNestedOneWithoutAlbumsInput
    followers: UserCreateNestedOneWithoutLikedAlbumsInput
  }

  export type AlbumsUncheckedCreateInput = {
    id?: string
    name: string
    artistId: string
    thumbnail: string
    genreId: string
    userId?: AlbumsCreateuserIdInput | string[]
    tracks?: TracksUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    artist?: ArtistsUpdateOneRequiredWithoutAlbumsNestedInput
    tracks?: TracksUpdateManyWithoutAlbumNestedInput
    genre?: GenreUpdateOneRequiredWithoutAlbumsNestedInput
    followers?: UserUpdateOneRequiredWithoutLikedAlbumsNestedInput
  }

  export type AlbumsUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    artistId?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
    userId?: AlbumsUpdateuserIdInput | string[]
    tracks?: TracksUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumsCreateManyInput = {
    id?: string
    name: string
    artistId: string
    thumbnail: string
    genreId: string
    userId?: AlbumsCreateuserIdInput | string[]
  }

  export type AlbumsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
  }

  export type AlbumsUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    artistId?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
    userId?: AlbumsUpdateuserIdInput | string[]
  }

  export type PlaylistsCreateInput = {
    id?: string
    name: string
    thumbnail: string
    tracks: TracksCreateNestedOneWithoutPlaylistsInput
    genre: GenreCreateNestedOneWithoutPlaylistsInput
    followers: UserCreateNestedOneWithoutLikedPlaylistsInput
  }

  export type PlaylistsUncheckedCreateInput = {
    id?: string
    name: string
    thumbnail: string
    trackId?: PlaylistsCreatetrackIdInput | string[]
    genreId: string
    userId?: PlaylistsCreateuserIdInput | string[]
  }

  export type PlaylistsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    tracks?: TracksUpdateOneRequiredWithoutPlaylistsNestedInput
    genre?: GenreUpdateOneRequiredWithoutPlaylistsNestedInput
    followers?: UserUpdateOneRequiredWithoutLikedPlaylistsNestedInput
  }

  export type PlaylistsUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    trackId?: PlaylistsUpdatetrackIdInput | string[]
    genreId?: StringFieldUpdateOperationsInput | string
    userId?: PlaylistsUpdateuserIdInput | string[]
  }

  export type PlaylistsCreateManyInput = {
    id?: string
    name: string
    thumbnail: string
    trackId?: PlaylistsCreatetrackIdInput | string[]
    genreId: string
    userId?: PlaylistsCreateuserIdInput | string[]
  }

  export type PlaylistsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
  }

  export type PlaylistsUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    trackId?: PlaylistsUpdatetrackIdInput | string[]
    genreId?: StringFieldUpdateOperationsInput | string
    userId?: PlaylistsUpdateuserIdInput | string[]
  }

  export type ArtistsCreateInput = {
    id?: string
    name: string
    thumbnail: string
    albums?: AlbumsCreateNestedManyWithoutArtistInput
    tracks?: TracksCreateNestedManyWithoutArtistInput
    genre: GenreCreateNestedOneWithoutArtistsInput
    followers: UserCreateNestedOneWithoutArtistsFollowedInput
  }

  export type ArtistsUncheckedCreateInput = {
    id?: string
    name: string
    thumbnail: string
    genreId: string
    userId?: ArtistsCreateuserIdInput | string[]
    albums?: AlbumsUncheckedCreateNestedManyWithoutArtistInput
    tracks?: TracksUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistsUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    albums?: AlbumsUpdateManyWithoutArtistNestedInput
    tracks?: TracksUpdateManyWithoutArtistNestedInput
    genre?: GenreUpdateOneRequiredWithoutArtistsNestedInput
    followers?: UserUpdateOneRequiredWithoutArtistsFollowedNestedInput
  }

  export type ArtistsUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
    userId?: ArtistsUpdateuserIdInput | string[]
    albums?: AlbumsUncheckedUpdateManyWithoutArtistNestedInput
    tracks?: TracksUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type ArtistsCreateManyInput = {
    id?: string
    name: string
    thumbnail: string
    genreId: string
    userId?: ArtistsCreateuserIdInput | string[]
  }

  export type ArtistsUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistsUncheckedUpdateManyInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
    userId?: ArtistsUpdateuserIdInput | string[]
  }

  export type GenreCreateInput = {
    id?: string
    name: string
    albums?: AlbumsCreateNestedManyWithoutGenreInput
    tracks?: TracksCreateNestedManyWithoutGenreInput
    artists?: ArtistsCreateNestedManyWithoutGenreInput
    playlists?: PlaylistsCreateNestedManyWithoutGenreInput
  }

  export type GenreUncheckedCreateInput = {
    id?: string
    name: string
    albums?: AlbumsUncheckedCreateNestedManyWithoutGenreInput
    tracks?: TracksUncheckedCreateNestedManyWithoutGenreInput
    artists?: ArtistsUncheckedCreateNestedManyWithoutGenreInput
    playlists?: PlaylistsUncheckedCreateNestedManyWithoutGenreInput
  }

  export type GenreUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    albums?: AlbumsUpdateManyWithoutGenreNestedInput
    tracks?: TracksUpdateManyWithoutGenreNestedInput
    artists?: ArtistsUpdateManyWithoutGenreNestedInput
    playlists?: PlaylistsUpdateManyWithoutGenreNestedInput
  }

  export type GenreUncheckedUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    albums?: AlbumsUncheckedUpdateManyWithoutGenreNestedInput
    tracks?: TracksUncheckedUpdateManyWithoutGenreNestedInput
    artists?: ArtistsUncheckedUpdateManyWithoutGenreNestedInput
    playlists?: PlaylistsUncheckedUpdateManyWithoutGenreNestedInput
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

  export type TracksListRelationFilter = {
    every?: TracksWhereInput
    some?: TracksWhereInput
    none?: TracksWhereInput
  }

  export type AlbumsListRelationFilter = {
    every?: AlbumsWhereInput
    some?: AlbumsWhereInput
    none?: AlbumsWhereInput
  }

  export type PlaylistsListRelationFilter = {
    every?: PlaylistsWhereInput
    some?: PlaylistsWhereInput
    none?: PlaylistsWhereInput
  }

  export type ArtistsListRelationFilter = {
    every?: ArtistsWhereInput
    some?: ArtistsWhereInput
    none?: ArtistsWhereInput
  }

  export type TracksOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlbumsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlaylistsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArtistsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    country?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
    name?: SortOrder
    gender?: SortOrder
    birthDate?: SortOrder
    country?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    password?: SortOrder
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

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ArtistsRelationFilter = {
    is?: ArtistsWhereInput
    isNot?: ArtistsWhereInput
  }

  export type GenreRelationFilter = {
    is?: GenreWhereInput
    isNot?: GenreWhereInput
  }

  export type AlbumsRelationFilter = {
    is?: AlbumsWhereInput
    isNot?: AlbumsWhereInput
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type TracksCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    artistId?: SortOrder
    url?: SortOrder
    thumbnail?: SortOrder
    genreId?: SortOrder
    albumId?: SortOrder
    userId?: SortOrder
  }

  export type TracksMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    artistId?: SortOrder
    url?: SortOrder
    thumbnail?: SortOrder
    genreId?: SortOrder
    albumId?: SortOrder
  }

  export type TracksMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    artistId?: SortOrder
    url?: SortOrder
    thumbnail?: SortOrder
    genreId?: SortOrder
    albumId?: SortOrder
  }

  export type AlbumsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    artistId?: SortOrder
    thumbnail?: SortOrder
    genreId?: SortOrder
    userId?: SortOrder
  }

  export type AlbumsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    artistId?: SortOrder
    thumbnail?: SortOrder
    genreId?: SortOrder
  }

  export type AlbumsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    artistId?: SortOrder
    thumbnail?: SortOrder
    genreId?: SortOrder
  }

  export type TracksRelationFilter = {
    is?: TracksWhereInput
    isNot?: TracksWhereInput
  }

  export type PlaylistsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    thumbnail?: SortOrder
    trackId?: SortOrder
    genreId?: SortOrder
    userId?: SortOrder
  }

  export type PlaylistsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    thumbnail?: SortOrder
    genreId?: SortOrder
  }

  export type PlaylistsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    thumbnail?: SortOrder
    genreId?: SortOrder
  }

  export type ArtistsCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    thumbnail?: SortOrder
    genreId?: SortOrder
    userId?: SortOrder
  }

  export type ArtistsMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    thumbnail?: SortOrder
    genreId?: SortOrder
  }

  export type ArtistsMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    thumbnail?: SortOrder
    genreId?: SortOrder
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

  export type TracksCreateNestedManyWithoutFollowersInput = {
    create?: XOR<TracksCreateWithoutFollowersInput, TracksUncheckedCreateWithoutFollowersInput> | TracksCreateWithoutFollowersInput[] | TracksUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutFollowersInput | TracksCreateOrConnectWithoutFollowersInput[]
    createMany?: TracksCreateManyFollowersInputEnvelope
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
  }

  export type AlbumsCreateNestedManyWithoutFollowersInput = {
    create?: XOR<AlbumsCreateWithoutFollowersInput, AlbumsUncheckedCreateWithoutFollowersInput> | AlbumsCreateWithoutFollowersInput[] | AlbumsUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: AlbumsCreateOrConnectWithoutFollowersInput | AlbumsCreateOrConnectWithoutFollowersInput[]
    createMany?: AlbumsCreateManyFollowersInputEnvelope
    connect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
  }

  export type PlaylistsCreateNestedManyWithoutFollowersInput = {
    create?: XOR<PlaylistsCreateWithoutFollowersInput, PlaylistsUncheckedCreateWithoutFollowersInput> | PlaylistsCreateWithoutFollowersInput[] | PlaylistsUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: PlaylistsCreateOrConnectWithoutFollowersInput | PlaylistsCreateOrConnectWithoutFollowersInput[]
    createMany?: PlaylistsCreateManyFollowersInputEnvelope
    connect?: PlaylistsWhereUniqueInput | PlaylistsWhereUniqueInput[]
  }

  export type ArtistsCreateNestedManyWithoutFollowersInput = {
    create?: XOR<ArtistsCreateWithoutFollowersInput, ArtistsUncheckedCreateWithoutFollowersInput> | ArtistsCreateWithoutFollowersInput[] | ArtistsUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: ArtistsCreateOrConnectWithoutFollowersInput | ArtistsCreateOrConnectWithoutFollowersInput[]
    createMany?: ArtistsCreateManyFollowersInputEnvelope
    connect?: ArtistsWhereUniqueInput | ArtistsWhereUniqueInput[]
  }

  export type TracksUncheckedCreateNestedManyWithoutFollowersInput = {
    create?: XOR<TracksCreateWithoutFollowersInput, TracksUncheckedCreateWithoutFollowersInput> | TracksCreateWithoutFollowersInput[] | TracksUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutFollowersInput | TracksCreateOrConnectWithoutFollowersInput[]
    createMany?: TracksCreateManyFollowersInputEnvelope
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
  }

  export type AlbumsUncheckedCreateNestedManyWithoutFollowersInput = {
    create?: XOR<AlbumsCreateWithoutFollowersInput, AlbumsUncheckedCreateWithoutFollowersInput> | AlbumsCreateWithoutFollowersInput[] | AlbumsUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: AlbumsCreateOrConnectWithoutFollowersInput | AlbumsCreateOrConnectWithoutFollowersInput[]
    createMany?: AlbumsCreateManyFollowersInputEnvelope
    connect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
  }

  export type PlaylistsUncheckedCreateNestedManyWithoutFollowersInput = {
    create?: XOR<PlaylistsCreateWithoutFollowersInput, PlaylistsUncheckedCreateWithoutFollowersInput> | PlaylistsCreateWithoutFollowersInput[] | PlaylistsUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: PlaylistsCreateOrConnectWithoutFollowersInput | PlaylistsCreateOrConnectWithoutFollowersInput[]
    createMany?: PlaylistsCreateManyFollowersInputEnvelope
    connect?: PlaylistsWhereUniqueInput | PlaylistsWhereUniqueInput[]
  }

  export type ArtistsUncheckedCreateNestedManyWithoutFollowersInput = {
    create?: XOR<ArtistsCreateWithoutFollowersInput, ArtistsUncheckedCreateWithoutFollowersInput> | ArtistsCreateWithoutFollowersInput[] | ArtistsUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: ArtistsCreateOrConnectWithoutFollowersInput | ArtistsCreateOrConnectWithoutFollowersInput[]
    createMany?: ArtistsCreateManyFollowersInputEnvelope
    connect?: ArtistsWhereUniqueInput | ArtistsWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TracksUpdateManyWithoutFollowersNestedInput = {
    create?: XOR<TracksCreateWithoutFollowersInput, TracksUncheckedCreateWithoutFollowersInput> | TracksCreateWithoutFollowersInput[] | TracksUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutFollowersInput | TracksCreateOrConnectWithoutFollowersInput[]
    upsert?: TracksUpsertWithWhereUniqueWithoutFollowersInput | TracksUpsertWithWhereUniqueWithoutFollowersInput[]
    createMany?: TracksCreateManyFollowersInputEnvelope
    set?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    disconnect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    delete?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    update?: TracksUpdateWithWhereUniqueWithoutFollowersInput | TracksUpdateWithWhereUniqueWithoutFollowersInput[]
    updateMany?: TracksUpdateManyWithWhereWithoutFollowersInput | TracksUpdateManyWithWhereWithoutFollowersInput[]
    deleteMany?: TracksScalarWhereInput | TracksScalarWhereInput[]
  }

  export type AlbumsUpdateManyWithoutFollowersNestedInput = {
    create?: XOR<AlbumsCreateWithoutFollowersInput, AlbumsUncheckedCreateWithoutFollowersInput> | AlbumsCreateWithoutFollowersInput[] | AlbumsUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: AlbumsCreateOrConnectWithoutFollowersInput | AlbumsCreateOrConnectWithoutFollowersInput[]
    upsert?: AlbumsUpsertWithWhereUniqueWithoutFollowersInput | AlbumsUpsertWithWhereUniqueWithoutFollowersInput[]
    createMany?: AlbumsCreateManyFollowersInputEnvelope
    set?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    disconnect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    delete?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    connect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    update?: AlbumsUpdateWithWhereUniqueWithoutFollowersInput | AlbumsUpdateWithWhereUniqueWithoutFollowersInput[]
    updateMany?: AlbumsUpdateManyWithWhereWithoutFollowersInput | AlbumsUpdateManyWithWhereWithoutFollowersInput[]
    deleteMany?: AlbumsScalarWhereInput | AlbumsScalarWhereInput[]
  }

  export type PlaylistsUpdateManyWithoutFollowersNestedInput = {
    create?: XOR<PlaylistsCreateWithoutFollowersInput, PlaylistsUncheckedCreateWithoutFollowersInput> | PlaylistsCreateWithoutFollowersInput[] | PlaylistsUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: PlaylistsCreateOrConnectWithoutFollowersInput | PlaylistsCreateOrConnectWithoutFollowersInput[]
    upsert?: PlaylistsUpsertWithWhereUniqueWithoutFollowersInput | PlaylistsUpsertWithWhereUniqueWithoutFollowersInput[]
    createMany?: PlaylistsCreateManyFollowersInputEnvelope
    set?: PlaylistsWhereUniqueInput | PlaylistsWhereUniqueInput[]
    disconnect?: PlaylistsWhereUniqueInput | PlaylistsWhereUniqueInput[]
    delete?: PlaylistsWhereUniqueInput | PlaylistsWhereUniqueInput[]
    connect?: PlaylistsWhereUniqueInput | PlaylistsWhereUniqueInput[]
    update?: PlaylistsUpdateWithWhereUniqueWithoutFollowersInput | PlaylistsUpdateWithWhereUniqueWithoutFollowersInput[]
    updateMany?: PlaylistsUpdateManyWithWhereWithoutFollowersInput | PlaylistsUpdateManyWithWhereWithoutFollowersInput[]
    deleteMany?: PlaylistsScalarWhereInput | PlaylistsScalarWhereInput[]
  }

  export type ArtistsUpdateManyWithoutFollowersNestedInput = {
    create?: XOR<ArtistsCreateWithoutFollowersInput, ArtistsUncheckedCreateWithoutFollowersInput> | ArtistsCreateWithoutFollowersInput[] | ArtistsUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: ArtistsCreateOrConnectWithoutFollowersInput | ArtistsCreateOrConnectWithoutFollowersInput[]
    upsert?: ArtistsUpsertWithWhereUniqueWithoutFollowersInput | ArtistsUpsertWithWhereUniqueWithoutFollowersInput[]
    createMany?: ArtistsCreateManyFollowersInputEnvelope
    set?: ArtistsWhereUniqueInput | ArtistsWhereUniqueInput[]
    disconnect?: ArtistsWhereUniqueInput | ArtistsWhereUniqueInput[]
    delete?: ArtistsWhereUniqueInput | ArtistsWhereUniqueInput[]
    connect?: ArtistsWhereUniqueInput | ArtistsWhereUniqueInput[]
    update?: ArtistsUpdateWithWhereUniqueWithoutFollowersInput | ArtistsUpdateWithWhereUniqueWithoutFollowersInput[]
    updateMany?: ArtistsUpdateManyWithWhereWithoutFollowersInput | ArtistsUpdateManyWithWhereWithoutFollowersInput[]
    deleteMany?: ArtistsScalarWhereInput | ArtistsScalarWhereInput[]
  }

  export type TracksUncheckedUpdateManyWithoutFollowersNestedInput = {
    create?: XOR<TracksCreateWithoutFollowersInput, TracksUncheckedCreateWithoutFollowersInput> | TracksCreateWithoutFollowersInput[] | TracksUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutFollowersInput | TracksCreateOrConnectWithoutFollowersInput[]
    upsert?: TracksUpsertWithWhereUniqueWithoutFollowersInput | TracksUpsertWithWhereUniqueWithoutFollowersInput[]
    createMany?: TracksCreateManyFollowersInputEnvelope
    set?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    disconnect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    delete?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    update?: TracksUpdateWithWhereUniqueWithoutFollowersInput | TracksUpdateWithWhereUniqueWithoutFollowersInput[]
    updateMany?: TracksUpdateManyWithWhereWithoutFollowersInput | TracksUpdateManyWithWhereWithoutFollowersInput[]
    deleteMany?: TracksScalarWhereInput | TracksScalarWhereInput[]
  }

  export type AlbumsUncheckedUpdateManyWithoutFollowersNestedInput = {
    create?: XOR<AlbumsCreateWithoutFollowersInput, AlbumsUncheckedCreateWithoutFollowersInput> | AlbumsCreateWithoutFollowersInput[] | AlbumsUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: AlbumsCreateOrConnectWithoutFollowersInput | AlbumsCreateOrConnectWithoutFollowersInput[]
    upsert?: AlbumsUpsertWithWhereUniqueWithoutFollowersInput | AlbumsUpsertWithWhereUniqueWithoutFollowersInput[]
    createMany?: AlbumsCreateManyFollowersInputEnvelope
    set?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    disconnect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    delete?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    connect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
    update?: AlbumsUpdateWithWhereUniqueWithoutFollowersInput | AlbumsUpdateWithWhereUniqueWithoutFollowersInput[]
    updateMany?: AlbumsUpdateManyWithWhereWithoutFollowersInput | AlbumsUpdateManyWithWhereWithoutFollowersInput[]
    deleteMany?: AlbumsScalarWhereInput | AlbumsScalarWhereInput[]
  }

  export type PlaylistsUncheckedUpdateManyWithoutFollowersNestedInput = {
    create?: XOR<PlaylistsCreateWithoutFollowersInput, PlaylistsUncheckedCreateWithoutFollowersInput> | PlaylistsCreateWithoutFollowersInput[] | PlaylistsUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: PlaylistsCreateOrConnectWithoutFollowersInput | PlaylistsCreateOrConnectWithoutFollowersInput[]
    upsert?: PlaylistsUpsertWithWhereUniqueWithoutFollowersInput | PlaylistsUpsertWithWhereUniqueWithoutFollowersInput[]
    createMany?: PlaylistsCreateManyFollowersInputEnvelope
    set?: PlaylistsWhereUniqueInput | PlaylistsWhereUniqueInput[]
    disconnect?: PlaylistsWhereUniqueInput | PlaylistsWhereUniqueInput[]
    delete?: PlaylistsWhereUniqueInput | PlaylistsWhereUniqueInput[]
    connect?: PlaylistsWhereUniqueInput | PlaylistsWhereUniqueInput[]
    update?: PlaylistsUpdateWithWhereUniqueWithoutFollowersInput | PlaylistsUpdateWithWhereUniqueWithoutFollowersInput[]
    updateMany?: PlaylistsUpdateManyWithWhereWithoutFollowersInput | PlaylistsUpdateManyWithWhereWithoutFollowersInput[]
    deleteMany?: PlaylistsScalarWhereInput | PlaylistsScalarWhereInput[]
  }

  export type ArtistsUncheckedUpdateManyWithoutFollowersNestedInput = {
    create?: XOR<ArtistsCreateWithoutFollowersInput, ArtistsUncheckedCreateWithoutFollowersInput> | ArtistsCreateWithoutFollowersInput[] | ArtistsUncheckedCreateWithoutFollowersInput[]
    connectOrCreate?: ArtistsCreateOrConnectWithoutFollowersInput | ArtistsCreateOrConnectWithoutFollowersInput[]
    upsert?: ArtistsUpsertWithWhereUniqueWithoutFollowersInput | ArtistsUpsertWithWhereUniqueWithoutFollowersInput[]
    createMany?: ArtistsCreateManyFollowersInputEnvelope
    set?: ArtistsWhereUniqueInput | ArtistsWhereUniqueInput[]
    disconnect?: ArtistsWhereUniqueInput | ArtistsWhereUniqueInput[]
    delete?: ArtistsWhereUniqueInput | ArtistsWhereUniqueInput[]
    connect?: ArtistsWhereUniqueInput | ArtistsWhereUniqueInput[]
    update?: ArtistsUpdateWithWhereUniqueWithoutFollowersInput | ArtistsUpdateWithWhereUniqueWithoutFollowersInput[]
    updateMany?: ArtistsUpdateManyWithWhereWithoutFollowersInput | ArtistsUpdateManyWithWhereWithoutFollowersInput[]
    deleteMany?: ArtistsScalarWhereInput | ArtistsScalarWhereInput[]
  }

  export type ArtistsCreateNestedOneWithoutTracksInput = {
    create?: XOR<ArtistsCreateWithoutTracksInput, ArtistsUncheckedCreateWithoutTracksInput>
    connectOrCreate?: ArtistsCreateOrConnectWithoutTracksInput
    connect?: ArtistsWhereUniqueInput
  }

  export type GenreCreateNestedOneWithoutTracksInput = {
    create?: XOR<GenreCreateWithoutTracksInput, GenreUncheckedCreateWithoutTracksInput>
    connectOrCreate?: GenreCreateOrConnectWithoutTracksInput
    connect?: GenreWhereUniqueInput
  }

  export type AlbumsCreateNestedOneWithoutTracksInput = {
    create?: XOR<AlbumsCreateWithoutTracksInput, AlbumsUncheckedCreateWithoutTracksInput>
    connectOrCreate?: AlbumsCreateOrConnectWithoutTracksInput
    connect?: AlbumsWhereUniqueInput
  }

  export type PlaylistsCreateNestedManyWithoutTracksInput = {
    create?: XOR<PlaylistsCreateWithoutTracksInput, PlaylistsUncheckedCreateWithoutTracksInput> | PlaylistsCreateWithoutTracksInput[] | PlaylistsUncheckedCreateWithoutTracksInput[]
    connectOrCreate?: PlaylistsCreateOrConnectWithoutTracksInput | PlaylistsCreateOrConnectWithoutTracksInput[]
    createMany?: PlaylistsCreateManyTracksInputEnvelope
    connect?: PlaylistsWhereUniqueInput | PlaylistsWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutFavsInput = {
    create?: XOR<UserCreateWithoutFavsInput, UserUncheckedCreateWithoutFavsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavsInput
    connect?: UserWhereUniqueInput
  }

  export type TracksCreateuserIdInput = {
    set: string[]
  }

  export type PlaylistsUncheckedCreateNestedManyWithoutTracksInput = {
    create?: XOR<PlaylistsCreateWithoutTracksInput, PlaylistsUncheckedCreateWithoutTracksInput> | PlaylistsCreateWithoutTracksInput[] | PlaylistsUncheckedCreateWithoutTracksInput[]
    connectOrCreate?: PlaylistsCreateOrConnectWithoutTracksInput | PlaylistsCreateOrConnectWithoutTracksInput[]
    createMany?: PlaylistsCreateManyTracksInputEnvelope
    connect?: PlaylistsWhereUniqueInput | PlaylistsWhereUniqueInput[]
  }

  export type ArtistsUpdateOneRequiredWithoutTracksNestedInput = {
    create?: XOR<ArtistsCreateWithoutTracksInput, ArtistsUncheckedCreateWithoutTracksInput>
    connectOrCreate?: ArtistsCreateOrConnectWithoutTracksInput
    upsert?: ArtistsUpsertWithoutTracksInput
    connect?: ArtistsWhereUniqueInput
    update?: XOR<XOR<ArtistsUpdateToOneWithWhereWithoutTracksInput, ArtistsUpdateWithoutTracksInput>, ArtistsUncheckedUpdateWithoutTracksInput>
  }

  export type GenreUpdateOneRequiredWithoutTracksNestedInput = {
    create?: XOR<GenreCreateWithoutTracksInput, GenreUncheckedCreateWithoutTracksInput>
    connectOrCreate?: GenreCreateOrConnectWithoutTracksInput
    upsert?: GenreUpsertWithoutTracksInput
    connect?: GenreWhereUniqueInput
    update?: XOR<XOR<GenreUpdateToOneWithWhereWithoutTracksInput, GenreUpdateWithoutTracksInput>, GenreUncheckedUpdateWithoutTracksInput>
  }

  export type AlbumsUpdateOneRequiredWithoutTracksNestedInput = {
    create?: XOR<AlbumsCreateWithoutTracksInput, AlbumsUncheckedCreateWithoutTracksInput>
    connectOrCreate?: AlbumsCreateOrConnectWithoutTracksInput
    upsert?: AlbumsUpsertWithoutTracksInput
    connect?: AlbumsWhereUniqueInput
    update?: XOR<XOR<AlbumsUpdateToOneWithWhereWithoutTracksInput, AlbumsUpdateWithoutTracksInput>, AlbumsUncheckedUpdateWithoutTracksInput>
  }

  export type PlaylistsUpdateManyWithoutTracksNestedInput = {
    create?: XOR<PlaylistsCreateWithoutTracksInput, PlaylistsUncheckedCreateWithoutTracksInput> | PlaylistsCreateWithoutTracksInput[] | PlaylistsUncheckedCreateWithoutTracksInput[]
    connectOrCreate?: PlaylistsCreateOrConnectWithoutTracksInput | PlaylistsCreateOrConnectWithoutTracksInput[]
    upsert?: PlaylistsUpsertWithWhereUniqueWithoutTracksInput | PlaylistsUpsertWithWhereUniqueWithoutTracksInput[]
    createMany?: PlaylistsCreateManyTracksInputEnvelope
    set?: PlaylistsWhereUniqueInput | PlaylistsWhereUniqueInput[]
    disconnect?: PlaylistsWhereUniqueInput | PlaylistsWhereUniqueInput[]
    delete?: PlaylistsWhereUniqueInput | PlaylistsWhereUniqueInput[]
    connect?: PlaylistsWhereUniqueInput | PlaylistsWhereUniqueInput[]
    update?: PlaylistsUpdateWithWhereUniqueWithoutTracksInput | PlaylistsUpdateWithWhereUniqueWithoutTracksInput[]
    updateMany?: PlaylistsUpdateManyWithWhereWithoutTracksInput | PlaylistsUpdateManyWithWhereWithoutTracksInput[]
    deleteMany?: PlaylistsScalarWhereInput | PlaylistsScalarWhereInput[]
  }

  export type UserUpdateOneRequiredWithoutFavsNestedInput = {
    create?: XOR<UserCreateWithoutFavsInput, UserUncheckedCreateWithoutFavsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavsInput
    upsert?: UserUpsertWithoutFavsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavsInput, UserUpdateWithoutFavsInput>, UserUncheckedUpdateWithoutFavsInput>
  }

  export type TracksUpdateuserIdInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PlaylistsUncheckedUpdateManyWithoutTracksNestedInput = {
    create?: XOR<PlaylistsCreateWithoutTracksInput, PlaylistsUncheckedCreateWithoutTracksInput> | PlaylistsCreateWithoutTracksInput[] | PlaylistsUncheckedCreateWithoutTracksInput[]
    connectOrCreate?: PlaylistsCreateOrConnectWithoutTracksInput | PlaylistsCreateOrConnectWithoutTracksInput[]
    upsert?: PlaylistsUpsertWithWhereUniqueWithoutTracksInput | PlaylistsUpsertWithWhereUniqueWithoutTracksInput[]
    createMany?: PlaylistsCreateManyTracksInputEnvelope
    set?: PlaylistsWhereUniqueInput | PlaylistsWhereUniqueInput[]
    disconnect?: PlaylistsWhereUniqueInput | PlaylistsWhereUniqueInput[]
    delete?: PlaylistsWhereUniqueInput | PlaylistsWhereUniqueInput[]
    connect?: PlaylistsWhereUniqueInput | PlaylistsWhereUniqueInput[]
    update?: PlaylistsUpdateWithWhereUniqueWithoutTracksInput | PlaylistsUpdateWithWhereUniqueWithoutTracksInput[]
    updateMany?: PlaylistsUpdateManyWithWhereWithoutTracksInput | PlaylistsUpdateManyWithWhereWithoutTracksInput[]
    deleteMany?: PlaylistsScalarWhereInput | PlaylistsScalarWhereInput[]
  }

  export type ArtistsCreateNestedOneWithoutAlbumsInput = {
    create?: XOR<ArtistsCreateWithoutAlbumsInput, ArtistsUncheckedCreateWithoutAlbumsInput>
    connectOrCreate?: ArtistsCreateOrConnectWithoutAlbumsInput
    connect?: ArtistsWhereUniqueInput
  }

  export type TracksCreateNestedManyWithoutAlbumInput = {
    create?: XOR<TracksCreateWithoutAlbumInput, TracksUncheckedCreateWithoutAlbumInput> | TracksCreateWithoutAlbumInput[] | TracksUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutAlbumInput | TracksCreateOrConnectWithoutAlbumInput[]
    createMany?: TracksCreateManyAlbumInputEnvelope
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
  }

  export type GenreCreateNestedOneWithoutAlbumsInput = {
    create?: XOR<GenreCreateWithoutAlbumsInput, GenreUncheckedCreateWithoutAlbumsInput>
    connectOrCreate?: GenreCreateOrConnectWithoutAlbumsInput
    connect?: GenreWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLikedAlbumsInput = {
    create?: XOR<UserCreateWithoutLikedAlbumsInput, UserUncheckedCreateWithoutLikedAlbumsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedAlbumsInput
    connect?: UserWhereUniqueInput
  }

  export type AlbumsCreateuserIdInput = {
    set: string[]
  }

  export type TracksUncheckedCreateNestedManyWithoutAlbumInput = {
    create?: XOR<TracksCreateWithoutAlbumInput, TracksUncheckedCreateWithoutAlbumInput> | TracksCreateWithoutAlbumInput[] | TracksUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutAlbumInput | TracksCreateOrConnectWithoutAlbumInput[]
    createMany?: TracksCreateManyAlbumInputEnvelope
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
  }

  export type ArtistsUpdateOneRequiredWithoutAlbumsNestedInput = {
    create?: XOR<ArtistsCreateWithoutAlbumsInput, ArtistsUncheckedCreateWithoutAlbumsInput>
    connectOrCreate?: ArtistsCreateOrConnectWithoutAlbumsInput
    upsert?: ArtistsUpsertWithoutAlbumsInput
    connect?: ArtistsWhereUniqueInput
    update?: XOR<XOR<ArtistsUpdateToOneWithWhereWithoutAlbumsInput, ArtistsUpdateWithoutAlbumsInput>, ArtistsUncheckedUpdateWithoutAlbumsInput>
  }

  export type TracksUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<TracksCreateWithoutAlbumInput, TracksUncheckedCreateWithoutAlbumInput> | TracksCreateWithoutAlbumInput[] | TracksUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutAlbumInput | TracksCreateOrConnectWithoutAlbumInput[]
    upsert?: TracksUpsertWithWhereUniqueWithoutAlbumInput | TracksUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: TracksCreateManyAlbumInputEnvelope
    set?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    disconnect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    delete?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    update?: TracksUpdateWithWhereUniqueWithoutAlbumInput | TracksUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: TracksUpdateManyWithWhereWithoutAlbumInput | TracksUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: TracksScalarWhereInput | TracksScalarWhereInput[]
  }

  export type GenreUpdateOneRequiredWithoutAlbumsNestedInput = {
    create?: XOR<GenreCreateWithoutAlbumsInput, GenreUncheckedCreateWithoutAlbumsInput>
    connectOrCreate?: GenreCreateOrConnectWithoutAlbumsInput
    upsert?: GenreUpsertWithoutAlbumsInput
    connect?: GenreWhereUniqueInput
    update?: XOR<XOR<GenreUpdateToOneWithWhereWithoutAlbumsInput, GenreUpdateWithoutAlbumsInput>, GenreUncheckedUpdateWithoutAlbumsInput>
  }

  export type UserUpdateOneRequiredWithoutLikedAlbumsNestedInput = {
    create?: XOR<UserCreateWithoutLikedAlbumsInput, UserUncheckedCreateWithoutLikedAlbumsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedAlbumsInput
    upsert?: UserUpsertWithoutLikedAlbumsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikedAlbumsInput, UserUpdateWithoutLikedAlbumsInput>, UserUncheckedUpdateWithoutLikedAlbumsInput>
  }

  export type AlbumsUpdateuserIdInput = {
    set?: string[]
    push?: string | string[]
  }

  export type TracksUncheckedUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<TracksCreateWithoutAlbumInput, TracksUncheckedCreateWithoutAlbumInput> | TracksCreateWithoutAlbumInput[] | TracksUncheckedCreateWithoutAlbumInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutAlbumInput | TracksCreateOrConnectWithoutAlbumInput[]
    upsert?: TracksUpsertWithWhereUniqueWithoutAlbumInput | TracksUpsertWithWhereUniqueWithoutAlbumInput[]
    createMany?: TracksCreateManyAlbumInputEnvelope
    set?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    disconnect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    delete?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    update?: TracksUpdateWithWhereUniqueWithoutAlbumInput | TracksUpdateWithWhereUniqueWithoutAlbumInput[]
    updateMany?: TracksUpdateManyWithWhereWithoutAlbumInput | TracksUpdateManyWithWhereWithoutAlbumInput[]
    deleteMany?: TracksScalarWhereInput | TracksScalarWhereInput[]
  }

  export type TracksCreateNestedOneWithoutPlaylistsInput = {
    create?: XOR<TracksCreateWithoutPlaylistsInput, TracksUncheckedCreateWithoutPlaylistsInput>
    connectOrCreate?: TracksCreateOrConnectWithoutPlaylistsInput
    connect?: TracksWhereUniqueInput
  }

  export type GenreCreateNestedOneWithoutPlaylistsInput = {
    create?: XOR<GenreCreateWithoutPlaylistsInput, GenreUncheckedCreateWithoutPlaylistsInput>
    connectOrCreate?: GenreCreateOrConnectWithoutPlaylistsInput
    connect?: GenreWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutLikedPlaylistsInput = {
    create?: XOR<UserCreateWithoutLikedPlaylistsInput, UserUncheckedCreateWithoutLikedPlaylistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedPlaylistsInput
    connect?: UserWhereUniqueInput
  }

  export type PlaylistsCreatetrackIdInput = {
    set: string[]
  }

  export type PlaylistsCreateuserIdInput = {
    set: string[]
  }

  export type TracksUpdateOneRequiredWithoutPlaylistsNestedInput = {
    create?: XOR<TracksCreateWithoutPlaylistsInput, TracksUncheckedCreateWithoutPlaylistsInput>
    connectOrCreate?: TracksCreateOrConnectWithoutPlaylistsInput
    upsert?: TracksUpsertWithoutPlaylistsInput
    connect?: TracksWhereUniqueInput
    update?: XOR<XOR<TracksUpdateToOneWithWhereWithoutPlaylistsInput, TracksUpdateWithoutPlaylistsInput>, TracksUncheckedUpdateWithoutPlaylistsInput>
  }

  export type GenreUpdateOneRequiredWithoutPlaylistsNestedInput = {
    create?: XOR<GenreCreateWithoutPlaylistsInput, GenreUncheckedCreateWithoutPlaylistsInput>
    connectOrCreate?: GenreCreateOrConnectWithoutPlaylistsInput
    upsert?: GenreUpsertWithoutPlaylistsInput
    connect?: GenreWhereUniqueInput
    update?: XOR<XOR<GenreUpdateToOneWithWhereWithoutPlaylistsInput, GenreUpdateWithoutPlaylistsInput>, GenreUncheckedUpdateWithoutPlaylistsInput>
  }

  export type UserUpdateOneRequiredWithoutLikedPlaylistsNestedInput = {
    create?: XOR<UserCreateWithoutLikedPlaylistsInput, UserUncheckedCreateWithoutLikedPlaylistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutLikedPlaylistsInput
    upsert?: UserUpsertWithoutLikedPlaylistsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLikedPlaylistsInput, UserUpdateWithoutLikedPlaylistsInput>, UserUncheckedUpdateWithoutLikedPlaylistsInput>
  }

  export type PlaylistsUpdatetrackIdInput = {
    set?: string[]
    push?: string | string[]
  }

  export type PlaylistsUpdateuserIdInput = {
    set?: string[]
    push?: string | string[]
  }

  export type AlbumsCreateNestedManyWithoutArtistInput = {
    create?: XOR<AlbumsCreateWithoutArtistInput, AlbumsUncheckedCreateWithoutArtistInput> | AlbumsCreateWithoutArtistInput[] | AlbumsUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumsCreateOrConnectWithoutArtistInput | AlbumsCreateOrConnectWithoutArtistInput[]
    createMany?: AlbumsCreateManyArtistInputEnvelope
    connect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
  }

  export type TracksCreateNestedManyWithoutArtistInput = {
    create?: XOR<TracksCreateWithoutArtistInput, TracksUncheckedCreateWithoutArtistInput> | TracksCreateWithoutArtistInput[] | TracksUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutArtistInput | TracksCreateOrConnectWithoutArtistInput[]
    createMany?: TracksCreateManyArtistInputEnvelope
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
  }

  export type GenreCreateNestedOneWithoutArtistsInput = {
    create?: XOR<GenreCreateWithoutArtistsInput, GenreUncheckedCreateWithoutArtistsInput>
    connectOrCreate?: GenreCreateOrConnectWithoutArtistsInput
    connect?: GenreWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutArtistsFollowedInput = {
    create?: XOR<UserCreateWithoutArtistsFollowedInput, UserUncheckedCreateWithoutArtistsFollowedInput>
    connectOrCreate?: UserCreateOrConnectWithoutArtistsFollowedInput
    connect?: UserWhereUniqueInput
  }

  export type ArtistsCreateuserIdInput = {
    set: string[]
  }

  export type AlbumsUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<AlbumsCreateWithoutArtistInput, AlbumsUncheckedCreateWithoutArtistInput> | AlbumsCreateWithoutArtistInput[] | AlbumsUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: AlbumsCreateOrConnectWithoutArtistInput | AlbumsCreateOrConnectWithoutArtistInput[]
    createMany?: AlbumsCreateManyArtistInputEnvelope
    connect?: AlbumsWhereUniqueInput | AlbumsWhereUniqueInput[]
  }

  export type TracksUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<TracksCreateWithoutArtistInput, TracksUncheckedCreateWithoutArtistInput> | TracksCreateWithoutArtistInput[] | TracksUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutArtistInput | TracksCreateOrConnectWithoutArtistInput[]
    createMany?: TracksCreateManyArtistInputEnvelope
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
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

  export type TracksUpdateManyWithoutArtistNestedInput = {
    create?: XOR<TracksCreateWithoutArtistInput, TracksUncheckedCreateWithoutArtistInput> | TracksCreateWithoutArtistInput[] | TracksUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutArtistInput | TracksCreateOrConnectWithoutArtistInput[]
    upsert?: TracksUpsertWithWhereUniqueWithoutArtistInput | TracksUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: TracksCreateManyArtistInputEnvelope
    set?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    disconnect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    delete?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    update?: TracksUpdateWithWhereUniqueWithoutArtistInput | TracksUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: TracksUpdateManyWithWhereWithoutArtistInput | TracksUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: TracksScalarWhereInput | TracksScalarWhereInput[]
  }

  export type GenreUpdateOneRequiredWithoutArtistsNestedInput = {
    create?: XOR<GenreCreateWithoutArtistsInput, GenreUncheckedCreateWithoutArtistsInput>
    connectOrCreate?: GenreCreateOrConnectWithoutArtistsInput
    upsert?: GenreUpsertWithoutArtistsInput
    connect?: GenreWhereUniqueInput
    update?: XOR<XOR<GenreUpdateToOneWithWhereWithoutArtistsInput, GenreUpdateWithoutArtistsInput>, GenreUncheckedUpdateWithoutArtistsInput>
  }

  export type UserUpdateOneRequiredWithoutArtistsFollowedNestedInput = {
    create?: XOR<UserCreateWithoutArtistsFollowedInput, UserUncheckedCreateWithoutArtistsFollowedInput>
    connectOrCreate?: UserCreateOrConnectWithoutArtistsFollowedInput
    upsert?: UserUpsertWithoutArtistsFollowedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutArtistsFollowedInput, UserUpdateWithoutArtistsFollowedInput>, UserUncheckedUpdateWithoutArtistsFollowedInput>
  }

  export type ArtistsUpdateuserIdInput = {
    set?: string[]
    push?: string | string[]
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

  export type TracksUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<TracksCreateWithoutArtistInput, TracksUncheckedCreateWithoutArtistInput> | TracksCreateWithoutArtistInput[] | TracksUncheckedCreateWithoutArtistInput[]
    connectOrCreate?: TracksCreateOrConnectWithoutArtistInput | TracksCreateOrConnectWithoutArtistInput[]
    upsert?: TracksUpsertWithWhereUniqueWithoutArtistInput | TracksUpsertWithWhereUniqueWithoutArtistInput[]
    createMany?: TracksCreateManyArtistInputEnvelope
    set?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    disconnect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    delete?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    connect?: TracksWhereUniqueInput | TracksWhereUniqueInput[]
    update?: TracksUpdateWithWhereUniqueWithoutArtistInput | TracksUpdateWithWhereUniqueWithoutArtistInput[]
    updateMany?: TracksUpdateManyWithWhereWithoutArtistInput | TracksUpdateManyWithWhereWithoutArtistInput[]
    deleteMany?: TracksScalarWhereInput | TracksScalarWhereInput[]
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

  export type PlaylistsCreateNestedManyWithoutGenreInput = {
    create?: XOR<PlaylistsCreateWithoutGenreInput, PlaylistsUncheckedCreateWithoutGenreInput> | PlaylistsCreateWithoutGenreInput[] | PlaylistsUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: PlaylistsCreateOrConnectWithoutGenreInput | PlaylistsCreateOrConnectWithoutGenreInput[]
    createMany?: PlaylistsCreateManyGenreInputEnvelope
    connect?: PlaylistsWhereUniqueInput | PlaylistsWhereUniqueInput[]
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

  export type PlaylistsUncheckedCreateNestedManyWithoutGenreInput = {
    create?: XOR<PlaylistsCreateWithoutGenreInput, PlaylistsUncheckedCreateWithoutGenreInput> | PlaylistsCreateWithoutGenreInput[] | PlaylistsUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: PlaylistsCreateOrConnectWithoutGenreInput | PlaylistsCreateOrConnectWithoutGenreInput[]
    createMany?: PlaylistsCreateManyGenreInputEnvelope
    connect?: PlaylistsWhereUniqueInput | PlaylistsWhereUniqueInput[]
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

  export type PlaylistsUpdateManyWithoutGenreNestedInput = {
    create?: XOR<PlaylistsCreateWithoutGenreInput, PlaylistsUncheckedCreateWithoutGenreInput> | PlaylistsCreateWithoutGenreInput[] | PlaylistsUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: PlaylistsCreateOrConnectWithoutGenreInput | PlaylistsCreateOrConnectWithoutGenreInput[]
    upsert?: PlaylistsUpsertWithWhereUniqueWithoutGenreInput | PlaylistsUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: PlaylistsCreateManyGenreInputEnvelope
    set?: PlaylistsWhereUniqueInput | PlaylistsWhereUniqueInput[]
    disconnect?: PlaylistsWhereUniqueInput | PlaylistsWhereUniqueInput[]
    delete?: PlaylistsWhereUniqueInput | PlaylistsWhereUniqueInput[]
    connect?: PlaylistsWhereUniqueInput | PlaylistsWhereUniqueInput[]
    update?: PlaylistsUpdateWithWhereUniqueWithoutGenreInput | PlaylistsUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: PlaylistsUpdateManyWithWhereWithoutGenreInput | PlaylistsUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: PlaylistsScalarWhereInput | PlaylistsScalarWhereInput[]
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

  export type PlaylistsUncheckedUpdateManyWithoutGenreNestedInput = {
    create?: XOR<PlaylistsCreateWithoutGenreInput, PlaylistsUncheckedCreateWithoutGenreInput> | PlaylistsCreateWithoutGenreInput[] | PlaylistsUncheckedCreateWithoutGenreInput[]
    connectOrCreate?: PlaylistsCreateOrConnectWithoutGenreInput | PlaylistsCreateOrConnectWithoutGenreInput[]
    upsert?: PlaylistsUpsertWithWhereUniqueWithoutGenreInput | PlaylistsUpsertWithWhereUniqueWithoutGenreInput[]
    createMany?: PlaylistsCreateManyGenreInputEnvelope
    set?: PlaylistsWhereUniqueInput | PlaylistsWhereUniqueInput[]
    disconnect?: PlaylistsWhereUniqueInput | PlaylistsWhereUniqueInput[]
    delete?: PlaylistsWhereUniqueInput | PlaylistsWhereUniqueInput[]
    connect?: PlaylistsWhereUniqueInput | PlaylistsWhereUniqueInput[]
    update?: PlaylistsUpdateWithWhereUniqueWithoutGenreInput | PlaylistsUpdateWithWhereUniqueWithoutGenreInput[]
    updateMany?: PlaylistsUpdateManyWithWhereWithoutGenreInput | PlaylistsUpdateManyWithWhereWithoutGenreInput[]
    deleteMany?: PlaylistsScalarWhereInput | PlaylistsScalarWhereInput[]
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

  export type TracksCreateWithoutFollowersInput = {
    id?: string
    name: string
    url: string
    thumbnail: string
    artist: ArtistsCreateNestedOneWithoutTracksInput
    genre: GenreCreateNestedOneWithoutTracksInput
    album: AlbumsCreateNestedOneWithoutTracksInput
    playlists?: PlaylistsCreateNestedManyWithoutTracksInput
  }

  export type TracksUncheckedCreateWithoutFollowersInput = {
    id?: string
    name: string
    artistId: string
    url: string
    thumbnail: string
    genreId: string
    albumId: string
    playlists?: PlaylistsUncheckedCreateNestedManyWithoutTracksInput
  }

  export type TracksCreateOrConnectWithoutFollowersInput = {
    where: TracksWhereUniqueInput
    create: XOR<TracksCreateWithoutFollowersInput, TracksUncheckedCreateWithoutFollowersInput>
  }

  export type TracksCreateManyFollowersInputEnvelope = {
    data: TracksCreateManyFollowersInput | TracksCreateManyFollowersInput[]
  }

  export type AlbumsCreateWithoutFollowersInput = {
    id?: string
    name: string
    thumbnail: string
    artist: ArtistsCreateNestedOneWithoutAlbumsInput
    tracks?: TracksCreateNestedManyWithoutAlbumInput
    genre: GenreCreateNestedOneWithoutAlbumsInput
  }

  export type AlbumsUncheckedCreateWithoutFollowersInput = {
    id?: string
    name: string
    artistId: string
    thumbnail: string
    genreId: string
    tracks?: TracksUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumsCreateOrConnectWithoutFollowersInput = {
    where: AlbumsWhereUniqueInput
    create: XOR<AlbumsCreateWithoutFollowersInput, AlbumsUncheckedCreateWithoutFollowersInput>
  }

  export type AlbumsCreateManyFollowersInputEnvelope = {
    data: AlbumsCreateManyFollowersInput | AlbumsCreateManyFollowersInput[]
  }

  export type PlaylistsCreateWithoutFollowersInput = {
    id?: string
    name: string
    thumbnail: string
    tracks: TracksCreateNestedOneWithoutPlaylistsInput
    genre: GenreCreateNestedOneWithoutPlaylistsInput
  }

  export type PlaylistsUncheckedCreateWithoutFollowersInput = {
    id?: string
    name: string
    thumbnail: string
    trackId?: PlaylistsCreatetrackIdInput | string[]
    genreId: string
  }

  export type PlaylistsCreateOrConnectWithoutFollowersInput = {
    where: PlaylistsWhereUniqueInput
    create: XOR<PlaylistsCreateWithoutFollowersInput, PlaylistsUncheckedCreateWithoutFollowersInput>
  }

  export type PlaylistsCreateManyFollowersInputEnvelope = {
    data: PlaylistsCreateManyFollowersInput | PlaylistsCreateManyFollowersInput[]
  }

  export type ArtistsCreateWithoutFollowersInput = {
    id?: string
    name: string
    thumbnail: string
    albums?: AlbumsCreateNestedManyWithoutArtistInput
    tracks?: TracksCreateNestedManyWithoutArtistInput
    genre: GenreCreateNestedOneWithoutArtistsInput
  }

  export type ArtistsUncheckedCreateWithoutFollowersInput = {
    id?: string
    name: string
    thumbnail: string
    genreId: string
    albums?: AlbumsUncheckedCreateNestedManyWithoutArtistInput
    tracks?: TracksUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistsCreateOrConnectWithoutFollowersInput = {
    where: ArtistsWhereUniqueInput
    create: XOR<ArtistsCreateWithoutFollowersInput, ArtistsUncheckedCreateWithoutFollowersInput>
  }

  export type ArtistsCreateManyFollowersInputEnvelope = {
    data: ArtistsCreateManyFollowersInput | ArtistsCreateManyFollowersInput[]
  }

  export type TracksUpsertWithWhereUniqueWithoutFollowersInput = {
    where: TracksWhereUniqueInput
    update: XOR<TracksUpdateWithoutFollowersInput, TracksUncheckedUpdateWithoutFollowersInput>
    create: XOR<TracksCreateWithoutFollowersInput, TracksUncheckedCreateWithoutFollowersInput>
  }

  export type TracksUpdateWithWhereUniqueWithoutFollowersInput = {
    where: TracksWhereUniqueInput
    data: XOR<TracksUpdateWithoutFollowersInput, TracksUncheckedUpdateWithoutFollowersInput>
  }

  export type TracksUpdateManyWithWhereWithoutFollowersInput = {
    where: TracksScalarWhereInput
    data: XOR<TracksUpdateManyMutationInput, TracksUncheckedUpdateManyWithoutFollowersInput>
  }

  export type TracksScalarWhereInput = {
    AND?: TracksScalarWhereInput | TracksScalarWhereInput[]
    OR?: TracksScalarWhereInput[]
    NOT?: TracksScalarWhereInput | TracksScalarWhereInput[]
    id?: StringFilter<"Tracks"> | string
    name?: StringFilter<"Tracks"> | string
    artistId?: StringFilter<"Tracks"> | string
    url?: StringFilter<"Tracks"> | string
    thumbnail?: StringFilter<"Tracks"> | string
    genreId?: StringFilter<"Tracks"> | string
    albumId?: StringFilter<"Tracks"> | string
    userId?: StringNullableListFilter<"Tracks">
  }

  export type AlbumsUpsertWithWhereUniqueWithoutFollowersInput = {
    where: AlbumsWhereUniqueInput
    update: XOR<AlbumsUpdateWithoutFollowersInput, AlbumsUncheckedUpdateWithoutFollowersInput>
    create: XOR<AlbumsCreateWithoutFollowersInput, AlbumsUncheckedCreateWithoutFollowersInput>
  }

  export type AlbumsUpdateWithWhereUniqueWithoutFollowersInput = {
    where: AlbumsWhereUniqueInput
    data: XOR<AlbumsUpdateWithoutFollowersInput, AlbumsUncheckedUpdateWithoutFollowersInput>
  }

  export type AlbumsUpdateManyWithWhereWithoutFollowersInput = {
    where: AlbumsScalarWhereInput
    data: XOR<AlbumsUpdateManyMutationInput, AlbumsUncheckedUpdateManyWithoutFollowersInput>
  }

  export type AlbumsScalarWhereInput = {
    AND?: AlbumsScalarWhereInput | AlbumsScalarWhereInput[]
    OR?: AlbumsScalarWhereInput[]
    NOT?: AlbumsScalarWhereInput | AlbumsScalarWhereInput[]
    id?: StringFilter<"Albums"> | string
    name?: StringFilter<"Albums"> | string
    artistId?: StringFilter<"Albums"> | string
    thumbnail?: StringFilter<"Albums"> | string
    genreId?: StringFilter<"Albums"> | string
    userId?: StringNullableListFilter<"Albums">
  }

  export type PlaylistsUpsertWithWhereUniqueWithoutFollowersInput = {
    where: PlaylistsWhereUniqueInput
    update: XOR<PlaylistsUpdateWithoutFollowersInput, PlaylistsUncheckedUpdateWithoutFollowersInput>
    create: XOR<PlaylistsCreateWithoutFollowersInput, PlaylistsUncheckedCreateWithoutFollowersInput>
  }

  export type PlaylistsUpdateWithWhereUniqueWithoutFollowersInput = {
    where: PlaylistsWhereUniqueInput
    data: XOR<PlaylistsUpdateWithoutFollowersInput, PlaylistsUncheckedUpdateWithoutFollowersInput>
  }

  export type PlaylistsUpdateManyWithWhereWithoutFollowersInput = {
    where: PlaylistsScalarWhereInput
    data: XOR<PlaylistsUpdateManyMutationInput, PlaylistsUncheckedUpdateManyWithoutFollowersInput>
  }

  export type PlaylistsScalarWhereInput = {
    AND?: PlaylistsScalarWhereInput | PlaylistsScalarWhereInput[]
    OR?: PlaylistsScalarWhereInput[]
    NOT?: PlaylistsScalarWhereInput | PlaylistsScalarWhereInput[]
    id?: StringFilter<"Playlists"> | string
    name?: StringFilter<"Playlists"> | string
    thumbnail?: StringFilter<"Playlists"> | string
    trackId?: StringNullableListFilter<"Playlists">
    genreId?: StringFilter<"Playlists"> | string
    userId?: StringNullableListFilter<"Playlists">
  }

  export type ArtistsUpsertWithWhereUniqueWithoutFollowersInput = {
    where: ArtistsWhereUniqueInput
    update: XOR<ArtistsUpdateWithoutFollowersInput, ArtistsUncheckedUpdateWithoutFollowersInput>
    create: XOR<ArtistsCreateWithoutFollowersInput, ArtistsUncheckedCreateWithoutFollowersInput>
  }

  export type ArtistsUpdateWithWhereUniqueWithoutFollowersInput = {
    where: ArtistsWhereUniqueInput
    data: XOR<ArtistsUpdateWithoutFollowersInput, ArtistsUncheckedUpdateWithoutFollowersInput>
  }

  export type ArtistsUpdateManyWithWhereWithoutFollowersInput = {
    where: ArtistsScalarWhereInput
    data: XOR<ArtistsUpdateManyMutationInput, ArtistsUncheckedUpdateManyWithoutFollowersInput>
  }

  export type ArtistsScalarWhereInput = {
    AND?: ArtistsScalarWhereInput | ArtistsScalarWhereInput[]
    OR?: ArtistsScalarWhereInput[]
    NOT?: ArtistsScalarWhereInput | ArtistsScalarWhereInput[]
    id?: StringFilter<"Artists"> | string
    name?: StringFilter<"Artists"> | string
    thumbnail?: StringFilter<"Artists"> | string
    genreId?: StringFilter<"Artists"> | string
    userId?: StringNullableListFilter<"Artists">
  }

  export type ArtistsCreateWithoutTracksInput = {
    id?: string
    name: string
    thumbnail: string
    albums?: AlbumsCreateNestedManyWithoutArtistInput
    genre: GenreCreateNestedOneWithoutArtistsInput
    followers: UserCreateNestedOneWithoutArtistsFollowedInput
  }

  export type ArtistsUncheckedCreateWithoutTracksInput = {
    id?: string
    name: string
    thumbnail: string
    genreId: string
    userId?: ArtistsCreateuserIdInput | string[]
    albums?: AlbumsUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistsCreateOrConnectWithoutTracksInput = {
    where: ArtistsWhereUniqueInput
    create: XOR<ArtistsCreateWithoutTracksInput, ArtistsUncheckedCreateWithoutTracksInput>
  }

  export type GenreCreateWithoutTracksInput = {
    id?: string
    name: string
    albums?: AlbumsCreateNestedManyWithoutGenreInput
    artists?: ArtistsCreateNestedManyWithoutGenreInput
    playlists?: PlaylistsCreateNestedManyWithoutGenreInput
  }

  export type GenreUncheckedCreateWithoutTracksInput = {
    id?: string
    name: string
    albums?: AlbumsUncheckedCreateNestedManyWithoutGenreInput
    artists?: ArtistsUncheckedCreateNestedManyWithoutGenreInput
    playlists?: PlaylistsUncheckedCreateNestedManyWithoutGenreInput
  }

  export type GenreCreateOrConnectWithoutTracksInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutTracksInput, GenreUncheckedCreateWithoutTracksInput>
  }

  export type AlbumsCreateWithoutTracksInput = {
    id?: string
    name: string
    thumbnail: string
    artist: ArtistsCreateNestedOneWithoutAlbumsInput
    genre: GenreCreateNestedOneWithoutAlbumsInput
    followers: UserCreateNestedOneWithoutLikedAlbumsInput
  }

  export type AlbumsUncheckedCreateWithoutTracksInput = {
    id?: string
    name: string
    artistId: string
    thumbnail: string
    genreId: string
    userId?: AlbumsCreateuserIdInput | string[]
  }

  export type AlbumsCreateOrConnectWithoutTracksInput = {
    where: AlbumsWhereUniqueInput
    create: XOR<AlbumsCreateWithoutTracksInput, AlbumsUncheckedCreateWithoutTracksInput>
  }

  export type PlaylistsCreateWithoutTracksInput = {
    id?: string
    name: string
    thumbnail: string
    genre: GenreCreateNestedOneWithoutPlaylistsInput
    followers: UserCreateNestedOneWithoutLikedPlaylistsInput
  }

  export type PlaylistsUncheckedCreateWithoutTracksInput = {
    id?: string
    name: string
    thumbnail: string
    genreId: string
    userId?: PlaylistsCreateuserIdInput | string[]
  }

  export type PlaylistsCreateOrConnectWithoutTracksInput = {
    where: PlaylistsWhereUniqueInput
    create: XOR<PlaylistsCreateWithoutTracksInput, PlaylistsUncheckedCreateWithoutTracksInput>
  }

  export type PlaylistsCreateManyTracksInputEnvelope = {
    data: PlaylistsCreateManyTracksInput | PlaylistsCreateManyTracksInput[]
  }

  export type UserCreateWithoutFavsInput = {
    id?: string
    email: string
    password: string
    name: string
    gender: string
    birthDate: Date | string
    country: string
    likedAlbums?: AlbumsCreateNestedManyWithoutFollowersInput
    likedPlaylists?: PlaylistsCreateNestedManyWithoutFollowersInput
    artistsFollowed?: ArtistsCreateNestedManyWithoutFollowersInput
  }

  export type UserUncheckedCreateWithoutFavsInput = {
    id?: string
    email: string
    password: string
    name: string
    gender: string
    birthDate: Date | string
    country: string
    likedAlbums?: AlbumsUncheckedCreateNestedManyWithoutFollowersInput
    likedPlaylists?: PlaylistsUncheckedCreateNestedManyWithoutFollowersInput
    artistsFollowed?: ArtistsUncheckedCreateNestedManyWithoutFollowersInput
  }

  export type UserCreateOrConnectWithoutFavsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavsInput, UserUncheckedCreateWithoutFavsInput>
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
    thumbnail?: StringFieldUpdateOperationsInput | string
    albums?: AlbumsUpdateManyWithoutArtistNestedInput
    genre?: GenreUpdateOneRequiredWithoutArtistsNestedInput
    followers?: UserUpdateOneRequiredWithoutArtistsFollowedNestedInput
  }

  export type ArtistsUncheckedUpdateWithoutTracksInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
    userId?: ArtistsUpdateuserIdInput | string[]
    albums?: AlbumsUncheckedUpdateManyWithoutArtistNestedInput
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
    playlists?: PlaylistsUpdateManyWithoutGenreNestedInput
  }

  export type GenreUncheckedUpdateWithoutTracksInput = {
    name?: StringFieldUpdateOperationsInput | string
    albums?: AlbumsUncheckedUpdateManyWithoutGenreNestedInput
    artists?: ArtistsUncheckedUpdateManyWithoutGenreNestedInput
    playlists?: PlaylistsUncheckedUpdateManyWithoutGenreNestedInput
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
    followers?: UserUpdateOneRequiredWithoutLikedAlbumsNestedInput
  }

  export type AlbumsUncheckedUpdateWithoutTracksInput = {
    name?: StringFieldUpdateOperationsInput | string
    artistId?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
    userId?: AlbumsUpdateuserIdInput | string[]
  }

  export type PlaylistsUpsertWithWhereUniqueWithoutTracksInput = {
    where: PlaylistsWhereUniqueInput
    update: XOR<PlaylistsUpdateWithoutTracksInput, PlaylistsUncheckedUpdateWithoutTracksInput>
    create: XOR<PlaylistsCreateWithoutTracksInput, PlaylistsUncheckedCreateWithoutTracksInput>
  }

  export type PlaylistsUpdateWithWhereUniqueWithoutTracksInput = {
    where: PlaylistsWhereUniqueInput
    data: XOR<PlaylistsUpdateWithoutTracksInput, PlaylistsUncheckedUpdateWithoutTracksInput>
  }

  export type PlaylistsUpdateManyWithWhereWithoutTracksInput = {
    where: PlaylistsScalarWhereInput
    data: XOR<PlaylistsUpdateManyMutationInput, PlaylistsUncheckedUpdateManyWithoutTracksInput>
  }

  export type UserUpsertWithoutFavsInput = {
    update: XOR<UserUpdateWithoutFavsInput, UserUncheckedUpdateWithoutFavsInput>
    create: XOR<UserCreateWithoutFavsInput, UserUncheckedCreateWithoutFavsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavsInput, UserUncheckedUpdateWithoutFavsInput>
  }

  export type UserUpdateWithoutFavsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: StringFieldUpdateOperationsInput | string
    likedAlbums?: AlbumsUpdateManyWithoutFollowersNestedInput
    likedPlaylists?: PlaylistsUpdateManyWithoutFollowersNestedInput
    artistsFollowed?: ArtistsUpdateManyWithoutFollowersNestedInput
  }

  export type UserUncheckedUpdateWithoutFavsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: StringFieldUpdateOperationsInput | string
    likedAlbums?: AlbumsUncheckedUpdateManyWithoutFollowersNestedInput
    likedPlaylists?: PlaylistsUncheckedUpdateManyWithoutFollowersNestedInput
    artistsFollowed?: ArtistsUncheckedUpdateManyWithoutFollowersNestedInput
  }

  export type ArtistsCreateWithoutAlbumsInput = {
    id?: string
    name: string
    thumbnail: string
    tracks?: TracksCreateNestedManyWithoutArtistInput
    genre: GenreCreateNestedOneWithoutArtistsInput
    followers: UserCreateNestedOneWithoutArtistsFollowedInput
  }

  export type ArtistsUncheckedCreateWithoutAlbumsInput = {
    id?: string
    name: string
    thumbnail: string
    genreId: string
    userId?: ArtistsCreateuserIdInput | string[]
    tracks?: TracksUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistsCreateOrConnectWithoutAlbumsInput = {
    where: ArtistsWhereUniqueInput
    create: XOR<ArtistsCreateWithoutAlbumsInput, ArtistsUncheckedCreateWithoutAlbumsInput>
  }

  export type TracksCreateWithoutAlbumInput = {
    id?: string
    name: string
    url: string
    thumbnail: string
    artist: ArtistsCreateNestedOneWithoutTracksInput
    genre: GenreCreateNestedOneWithoutTracksInput
    playlists?: PlaylistsCreateNestedManyWithoutTracksInput
    followers: UserCreateNestedOneWithoutFavsInput
  }

  export type TracksUncheckedCreateWithoutAlbumInput = {
    id?: string
    name: string
    artistId: string
    url: string
    thumbnail: string
    genreId: string
    userId?: TracksCreateuserIdInput | string[]
    playlists?: PlaylistsUncheckedCreateNestedManyWithoutTracksInput
  }

  export type TracksCreateOrConnectWithoutAlbumInput = {
    where: TracksWhereUniqueInput
    create: XOR<TracksCreateWithoutAlbumInput, TracksUncheckedCreateWithoutAlbumInput>
  }

  export type TracksCreateManyAlbumInputEnvelope = {
    data: TracksCreateManyAlbumInput | TracksCreateManyAlbumInput[]
  }

  export type GenreCreateWithoutAlbumsInput = {
    id?: string
    name: string
    tracks?: TracksCreateNestedManyWithoutGenreInput
    artists?: ArtistsCreateNestedManyWithoutGenreInput
    playlists?: PlaylistsCreateNestedManyWithoutGenreInput
  }

  export type GenreUncheckedCreateWithoutAlbumsInput = {
    id?: string
    name: string
    tracks?: TracksUncheckedCreateNestedManyWithoutGenreInput
    artists?: ArtistsUncheckedCreateNestedManyWithoutGenreInput
    playlists?: PlaylistsUncheckedCreateNestedManyWithoutGenreInput
  }

  export type GenreCreateOrConnectWithoutAlbumsInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutAlbumsInput, GenreUncheckedCreateWithoutAlbumsInput>
  }

  export type UserCreateWithoutLikedAlbumsInput = {
    id?: string
    email: string
    password: string
    name: string
    gender: string
    birthDate: Date | string
    country: string
    favs?: TracksCreateNestedManyWithoutFollowersInput
    likedPlaylists?: PlaylistsCreateNestedManyWithoutFollowersInput
    artistsFollowed?: ArtistsCreateNestedManyWithoutFollowersInput
  }

  export type UserUncheckedCreateWithoutLikedAlbumsInput = {
    id?: string
    email: string
    password: string
    name: string
    gender: string
    birthDate: Date | string
    country: string
    favs?: TracksUncheckedCreateNestedManyWithoutFollowersInput
    likedPlaylists?: PlaylistsUncheckedCreateNestedManyWithoutFollowersInput
    artistsFollowed?: ArtistsUncheckedCreateNestedManyWithoutFollowersInput
  }

  export type UserCreateOrConnectWithoutLikedAlbumsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikedAlbumsInput, UserUncheckedCreateWithoutLikedAlbumsInput>
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
    thumbnail?: StringFieldUpdateOperationsInput | string
    tracks?: TracksUpdateManyWithoutArtistNestedInput
    genre?: GenreUpdateOneRequiredWithoutArtistsNestedInput
    followers?: UserUpdateOneRequiredWithoutArtistsFollowedNestedInput
  }

  export type ArtistsUncheckedUpdateWithoutAlbumsInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
    userId?: ArtistsUpdateuserIdInput | string[]
    tracks?: TracksUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type TracksUpsertWithWhereUniqueWithoutAlbumInput = {
    where: TracksWhereUniqueInput
    update: XOR<TracksUpdateWithoutAlbumInput, TracksUncheckedUpdateWithoutAlbumInput>
    create: XOR<TracksCreateWithoutAlbumInput, TracksUncheckedCreateWithoutAlbumInput>
  }

  export type TracksUpdateWithWhereUniqueWithoutAlbumInput = {
    where: TracksWhereUniqueInput
    data: XOR<TracksUpdateWithoutAlbumInput, TracksUncheckedUpdateWithoutAlbumInput>
  }

  export type TracksUpdateManyWithWhereWithoutAlbumInput = {
    where: TracksScalarWhereInput
    data: XOR<TracksUpdateManyMutationInput, TracksUncheckedUpdateManyWithoutAlbumInput>
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
    playlists?: PlaylistsUpdateManyWithoutGenreNestedInput
  }

  export type GenreUncheckedUpdateWithoutAlbumsInput = {
    name?: StringFieldUpdateOperationsInput | string
    tracks?: TracksUncheckedUpdateManyWithoutGenreNestedInput
    artists?: ArtistsUncheckedUpdateManyWithoutGenreNestedInput
    playlists?: PlaylistsUncheckedUpdateManyWithoutGenreNestedInput
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
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: StringFieldUpdateOperationsInput | string
    favs?: TracksUpdateManyWithoutFollowersNestedInput
    likedPlaylists?: PlaylistsUpdateManyWithoutFollowersNestedInput
    artistsFollowed?: ArtistsUpdateManyWithoutFollowersNestedInput
  }

  export type UserUncheckedUpdateWithoutLikedAlbumsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: StringFieldUpdateOperationsInput | string
    favs?: TracksUncheckedUpdateManyWithoutFollowersNestedInput
    likedPlaylists?: PlaylistsUncheckedUpdateManyWithoutFollowersNestedInput
    artistsFollowed?: ArtistsUncheckedUpdateManyWithoutFollowersNestedInput
  }

  export type TracksCreateWithoutPlaylistsInput = {
    id?: string
    name: string
    url: string
    thumbnail: string
    artist: ArtistsCreateNestedOneWithoutTracksInput
    genre: GenreCreateNestedOneWithoutTracksInput
    album: AlbumsCreateNestedOneWithoutTracksInput
    followers: UserCreateNestedOneWithoutFavsInput
  }

  export type TracksUncheckedCreateWithoutPlaylistsInput = {
    id?: string
    name: string
    artistId: string
    url: string
    thumbnail: string
    genreId: string
    albumId: string
    userId?: TracksCreateuserIdInput | string[]
  }

  export type TracksCreateOrConnectWithoutPlaylistsInput = {
    where: TracksWhereUniqueInput
    create: XOR<TracksCreateWithoutPlaylistsInput, TracksUncheckedCreateWithoutPlaylistsInput>
  }

  export type GenreCreateWithoutPlaylistsInput = {
    id?: string
    name: string
    albums?: AlbumsCreateNestedManyWithoutGenreInput
    tracks?: TracksCreateNestedManyWithoutGenreInput
    artists?: ArtistsCreateNestedManyWithoutGenreInput
  }

  export type GenreUncheckedCreateWithoutPlaylistsInput = {
    id?: string
    name: string
    albums?: AlbumsUncheckedCreateNestedManyWithoutGenreInput
    tracks?: TracksUncheckedCreateNestedManyWithoutGenreInput
    artists?: ArtistsUncheckedCreateNestedManyWithoutGenreInput
  }

  export type GenreCreateOrConnectWithoutPlaylistsInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutPlaylistsInput, GenreUncheckedCreateWithoutPlaylistsInput>
  }

  export type UserCreateWithoutLikedPlaylistsInput = {
    id?: string
    email: string
    password: string
    name: string
    gender: string
    birthDate: Date | string
    country: string
    favs?: TracksCreateNestedManyWithoutFollowersInput
    likedAlbums?: AlbumsCreateNestedManyWithoutFollowersInput
    artistsFollowed?: ArtistsCreateNestedManyWithoutFollowersInput
  }

  export type UserUncheckedCreateWithoutLikedPlaylistsInput = {
    id?: string
    email: string
    password: string
    name: string
    gender: string
    birthDate: Date | string
    country: string
    favs?: TracksUncheckedCreateNestedManyWithoutFollowersInput
    likedAlbums?: AlbumsUncheckedCreateNestedManyWithoutFollowersInput
    artistsFollowed?: ArtistsUncheckedCreateNestedManyWithoutFollowersInput
  }

  export type UserCreateOrConnectWithoutLikedPlaylistsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLikedPlaylistsInput, UserUncheckedCreateWithoutLikedPlaylistsInput>
  }

  export type TracksUpsertWithoutPlaylistsInput = {
    update: XOR<TracksUpdateWithoutPlaylistsInput, TracksUncheckedUpdateWithoutPlaylistsInput>
    create: XOR<TracksCreateWithoutPlaylistsInput, TracksUncheckedCreateWithoutPlaylistsInput>
    where?: TracksWhereInput
  }

  export type TracksUpdateToOneWithWhereWithoutPlaylistsInput = {
    where?: TracksWhereInput
    data: XOR<TracksUpdateWithoutPlaylistsInput, TracksUncheckedUpdateWithoutPlaylistsInput>
  }

  export type TracksUpdateWithoutPlaylistsInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    artist?: ArtistsUpdateOneRequiredWithoutTracksNestedInput
    genre?: GenreUpdateOneRequiredWithoutTracksNestedInput
    album?: AlbumsUpdateOneRequiredWithoutTracksNestedInput
    followers?: UserUpdateOneRequiredWithoutFavsNestedInput
  }

  export type TracksUncheckedUpdateWithoutPlaylistsInput = {
    name?: StringFieldUpdateOperationsInput | string
    artistId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
    albumId?: StringFieldUpdateOperationsInput | string
    userId?: TracksUpdateuserIdInput | string[]
  }

  export type GenreUpsertWithoutPlaylistsInput = {
    update: XOR<GenreUpdateWithoutPlaylistsInput, GenreUncheckedUpdateWithoutPlaylistsInput>
    create: XOR<GenreCreateWithoutPlaylistsInput, GenreUncheckedCreateWithoutPlaylistsInput>
    where?: GenreWhereInput
  }

  export type GenreUpdateToOneWithWhereWithoutPlaylistsInput = {
    where?: GenreWhereInput
    data: XOR<GenreUpdateWithoutPlaylistsInput, GenreUncheckedUpdateWithoutPlaylistsInput>
  }

  export type GenreUpdateWithoutPlaylistsInput = {
    name?: StringFieldUpdateOperationsInput | string
    albums?: AlbumsUpdateManyWithoutGenreNestedInput
    tracks?: TracksUpdateManyWithoutGenreNestedInput
    artists?: ArtistsUpdateManyWithoutGenreNestedInput
  }

  export type GenreUncheckedUpdateWithoutPlaylistsInput = {
    name?: StringFieldUpdateOperationsInput | string
    albums?: AlbumsUncheckedUpdateManyWithoutGenreNestedInput
    tracks?: TracksUncheckedUpdateManyWithoutGenreNestedInput
    artists?: ArtistsUncheckedUpdateManyWithoutGenreNestedInput
  }

  export type UserUpsertWithoutLikedPlaylistsInput = {
    update: XOR<UserUpdateWithoutLikedPlaylistsInput, UserUncheckedUpdateWithoutLikedPlaylistsInput>
    create: XOR<UserCreateWithoutLikedPlaylistsInput, UserUncheckedCreateWithoutLikedPlaylistsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLikedPlaylistsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLikedPlaylistsInput, UserUncheckedUpdateWithoutLikedPlaylistsInput>
  }

  export type UserUpdateWithoutLikedPlaylistsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: StringFieldUpdateOperationsInput | string
    favs?: TracksUpdateManyWithoutFollowersNestedInput
    likedAlbums?: AlbumsUpdateManyWithoutFollowersNestedInput
    artistsFollowed?: ArtistsUpdateManyWithoutFollowersNestedInput
  }

  export type UserUncheckedUpdateWithoutLikedPlaylistsInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: StringFieldUpdateOperationsInput | string
    favs?: TracksUncheckedUpdateManyWithoutFollowersNestedInput
    likedAlbums?: AlbumsUncheckedUpdateManyWithoutFollowersNestedInput
    artistsFollowed?: ArtistsUncheckedUpdateManyWithoutFollowersNestedInput
  }

  export type AlbumsCreateWithoutArtistInput = {
    id?: string
    name: string
    thumbnail: string
    tracks?: TracksCreateNestedManyWithoutAlbumInput
    genre: GenreCreateNestedOneWithoutAlbumsInput
    followers: UserCreateNestedOneWithoutLikedAlbumsInput
  }

  export type AlbumsUncheckedCreateWithoutArtistInput = {
    id?: string
    name: string
    thumbnail: string
    genreId: string
    userId?: AlbumsCreateuserIdInput | string[]
    tracks?: TracksUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumsCreateOrConnectWithoutArtistInput = {
    where: AlbumsWhereUniqueInput
    create: XOR<AlbumsCreateWithoutArtistInput, AlbumsUncheckedCreateWithoutArtistInput>
  }

  export type AlbumsCreateManyArtistInputEnvelope = {
    data: AlbumsCreateManyArtistInput | AlbumsCreateManyArtistInput[]
  }

  export type TracksCreateWithoutArtistInput = {
    id?: string
    name: string
    url: string
    thumbnail: string
    genre: GenreCreateNestedOneWithoutTracksInput
    album: AlbumsCreateNestedOneWithoutTracksInput
    playlists?: PlaylistsCreateNestedManyWithoutTracksInput
    followers: UserCreateNestedOneWithoutFavsInput
  }

  export type TracksUncheckedCreateWithoutArtistInput = {
    id?: string
    name: string
    url: string
    thumbnail: string
    genreId: string
    albumId: string
    userId?: TracksCreateuserIdInput | string[]
    playlists?: PlaylistsUncheckedCreateNestedManyWithoutTracksInput
  }

  export type TracksCreateOrConnectWithoutArtistInput = {
    where: TracksWhereUniqueInput
    create: XOR<TracksCreateWithoutArtistInput, TracksUncheckedCreateWithoutArtistInput>
  }

  export type TracksCreateManyArtistInputEnvelope = {
    data: TracksCreateManyArtistInput | TracksCreateManyArtistInput[]
  }

  export type GenreCreateWithoutArtistsInput = {
    id?: string
    name: string
    albums?: AlbumsCreateNestedManyWithoutGenreInput
    tracks?: TracksCreateNestedManyWithoutGenreInput
    playlists?: PlaylistsCreateNestedManyWithoutGenreInput
  }

  export type GenreUncheckedCreateWithoutArtistsInput = {
    id?: string
    name: string
    albums?: AlbumsUncheckedCreateNestedManyWithoutGenreInput
    tracks?: TracksUncheckedCreateNestedManyWithoutGenreInput
    playlists?: PlaylistsUncheckedCreateNestedManyWithoutGenreInput
  }

  export type GenreCreateOrConnectWithoutArtistsInput = {
    where: GenreWhereUniqueInput
    create: XOR<GenreCreateWithoutArtistsInput, GenreUncheckedCreateWithoutArtistsInput>
  }

  export type UserCreateWithoutArtistsFollowedInput = {
    id?: string
    email: string
    password: string
    name: string
    gender: string
    birthDate: Date | string
    country: string
    favs?: TracksCreateNestedManyWithoutFollowersInput
    likedAlbums?: AlbumsCreateNestedManyWithoutFollowersInput
    likedPlaylists?: PlaylistsCreateNestedManyWithoutFollowersInput
  }

  export type UserUncheckedCreateWithoutArtistsFollowedInput = {
    id?: string
    email: string
    password: string
    name: string
    gender: string
    birthDate: Date | string
    country: string
    favs?: TracksUncheckedCreateNestedManyWithoutFollowersInput
    likedAlbums?: AlbumsUncheckedCreateNestedManyWithoutFollowersInput
    likedPlaylists?: PlaylistsUncheckedCreateNestedManyWithoutFollowersInput
  }

  export type UserCreateOrConnectWithoutArtistsFollowedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutArtistsFollowedInput, UserUncheckedCreateWithoutArtistsFollowedInput>
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

  export type TracksUpsertWithWhereUniqueWithoutArtistInput = {
    where: TracksWhereUniqueInput
    update: XOR<TracksUpdateWithoutArtistInput, TracksUncheckedUpdateWithoutArtistInput>
    create: XOR<TracksCreateWithoutArtistInput, TracksUncheckedCreateWithoutArtistInput>
  }

  export type TracksUpdateWithWhereUniqueWithoutArtistInput = {
    where: TracksWhereUniqueInput
    data: XOR<TracksUpdateWithoutArtistInput, TracksUncheckedUpdateWithoutArtistInput>
  }

  export type TracksUpdateManyWithWhereWithoutArtistInput = {
    where: TracksScalarWhereInput
    data: XOR<TracksUpdateManyMutationInput, TracksUncheckedUpdateManyWithoutArtistInput>
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
    playlists?: PlaylistsUpdateManyWithoutGenreNestedInput
  }

  export type GenreUncheckedUpdateWithoutArtistsInput = {
    name?: StringFieldUpdateOperationsInput | string
    albums?: AlbumsUncheckedUpdateManyWithoutGenreNestedInput
    tracks?: TracksUncheckedUpdateManyWithoutGenreNestedInput
    playlists?: PlaylistsUncheckedUpdateManyWithoutGenreNestedInput
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
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: StringFieldUpdateOperationsInput | string
    favs?: TracksUpdateManyWithoutFollowersNestedInput
    likedAlbums?: AlbumsUpdateManyWithoutFollowersNestedInput
    likedPlaylists?: PlaylistsUpdateManyWithoutFollowersNestedInput
  }

  export type UserUncheckedUpdateWithoutArtistsFollowedInput = {
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    gender?: StringFieldUpdateOperationsInput | string
    birthDate?: DateTimeFieldUpdateOperationsInput | Date | string
    country?: StringFieldUpdateOperationsInput | string
    favs?: TracksUncheckedUpdateManyWithoutFollowersNestedInput
    likedAlbums?: AlbumsUncheckedUpdateManyWithoutFollowersNestedInput
    likedPlaylists?: PlaylistsUncheckedUpdateManyWithoutFollowersNestedInput
  }

  export type AlbumsCreateWithoutGenreInput = {
    id?: string
    name: string
    thumbnail: string
    artist: ArtistsCreateNestedOneWithoutAlbumsInput
    tracks?: TracksCreateNestedManyWithoutAlbumInput
    followers: UserCreateNestedOneWithoutLikedAlbumsInput
  }

  export type AlbumsUncheckedCreateWithoutGenreInput = {
    id?: string
    name: string
    artistId: string
    thumbnail: string
    userId?: AlbumsCreateuserIdInput | string[]
    tracks?: TracksUncheckedCreateNestedManyWithoutAlbumInput
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
    artist: ArtistsCreateNestedOneWithoutTracksInput
    album: AlbumsCreateNestedOneWithoutTracksInput
    playlists?: PlaylistsCreateNestedManyWithoutTracksInput
    followers: UserCreateNestedOneWithoutFavsInput
  }

  export type TracksUncheckedCreateWithoutGenreInput = {
    id?: string
    name: string
    artistId: string
    url: string
    thumbnail: string
    albumId: string
    userId?: TracksCreateuserIdInput | string[]
    playlists?: PlaylistsUncheckedCreateNestedManyWithoutTracksInput
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
    thumbnail: string
    albums?: AlbumsCreateNestedManyWithoutArtistInput
    tracks?: TracksCreateNestedManyWithoutArtistInput
    followers: UserCreateNestedOneWithoutArtistsFollowedInput
  }

  export type ArtistsUncheckedCreateWithoutGenreInput = {
    id?: string
    name: string
    thumbnail: string
    userId?: ArtistsCreateuserIdInput | string[]
    albums?: AlbumsUncheckedCreateNestedManyWithoutArtistInput
    tracks?: TracksUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistsCreateOrConnectWithoutGenreInput = {
    where: ArtistsWhereUniqueInput
    create: XOR<ArtistsCreateWithoutGenreInput, ArtistsUncheckedCreateWithoutGenreInput>
  }

  export type ArtistsCreateManyGenreInputEnvelope = {
    data: ArtistsCreateManyGenreInput | ArtistsCreateManyGenreInput[]
  }

  export type PlaylistsCreateWithoutGenreInput = {
    id?: string
    name: string
    thumbnail: string
    tracks: TracksCreateNestedOneWithoutPlaylistsInput
    followers: UserCreateNestedOneWithoutLikedPlaylistsInput
  }

  export type PlaylistsUncheckedCreateWithoutGenreInput = {
    id?: string
    name: string
    thumbnail: string
    trackId?: PlaylistsCreatetrackIdInput | string[]
    userId?: PlaylistsCreateuserIdInput | string[]
  }

  export type PlaylistsCreateOrConnectWithoutGenreInput = {
    where: PlaylistsWhereUniqueInput
    create: XOR<PlaylistsCreateWithoutGenreInput, PlaylistsUncheckedCreateWithoutGenreInput>
  }

  export type PlaylistsCreateManyGenreInputEnvelope = {
    data: PlaylistsCreateManyGenreInput | PlaylistsCreateManyGenreInput[]
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

  export type PlaylistsUpsertWithWhereUniqueWithoutGenreInput = {
    where: PlaylistsWhereUniqueInput
    update: XOR<PlaylistsUpdateWithoutGenreInput, PlaylistsUncheckedUpdateWithoutGenreInput>
    create: XOR<PlaylistsCreateWithoutGenreInput, PlaylistsUncheckedCreateWithoutGenreInput>
  }

  export type PlaylistsUpdateWithWhereUniqueWithoutGenreInput = {
    where: PlaylistsWhereUniqueInput
    data: XOR<PlaylistsUpdateWithoutGenreInput, PlaylistsUncheckedUpdateWithoutGenreInput>
  }

  export type PlaylistsUpdateManyWithWhereWithoutGenreInput = {
    where: PlaylistsScalarWhereInput
    data: XOR<PlaylistsUpdateManyMutationInput, PlaylistsUncheckedUpdateManyWithoutGenreInput>
  }

  export type TracksCreateManyFollowersInput = {
    id?: string
    name: string
    artistId: string
    url: string
    thumbnail: string
    genreId: string
    albumId: string
  }

  export type AlbumsCreateManyFollowersInput = {
    id?: string
    name: string
    artistId: string
    thumbnail: string
    genreId: string
  }

  export type PlaylistsCreateManyFollowersInput = {
    id?: string
    name: string
    thumbnail: string
    trackId?: PlaylistsCreatetrackIdInput | string[]
    genreId: string
  }

  export type ArtistsCreateManyFollowersInput = {
    id?: string
    name: string
    thumbnail: string
    genreId: string
  }

  export type TracksUpdateWithoutFollowersInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    artist?: ArtistsUpdateOneRequiredWithoutTracksNestedInput
    genre?: GenreUpdateOneRequiredWithoutTracksNestedInput
    album?: AlbumsUpdateOneRequiredWithoutTracksNestedInput
    playlists?: PlaylistsUpdateManyWithoutTracksNestedInput
  }

  export type TracksUncheckedUpdateWithoutFollowersInput = {
    name?: StringFieldUpdateOperationsInput | string
    artistId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
    albumId?: StringFieldUpdateOperationsInput | string
    playlists?: PlaylistsUncheckedUpdateManyWithoutTracksNestedInput
  }

  export type TracksUncheckedUpdateManyWithoutFollowersInput = {
    name?: StringFieldUpdateOperationsInput | string
    artistId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
    albumId?: StringFieldUpdateOperationsInput | string
  }

  export type AlbumsUpdateWithoutFollowersInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    artist?: ArtistsUpdateOneRequiredWithoutAlbumsNestedInput
    tracks?: TracksUpdateManyWithoutAlbumNestedInput
    genre?: GenreUpdateOneRequiredWithoutAlbumsNestedInput
  }

  export type AlbumsUncheckedUpdateWithoutFollowersInput = {
    name?: StringFieldUpdateOperationsInput | string
    artistId?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
    tracks?: TracksUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumsUncheckedUpdateManyWithoutFollowersInput = {
    name?: StringFieldUpdateOperationsInput | string
    artistId?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type PlaylistsUpdateWithoutFollowersInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    tracks?: TracksUpdateOneRequiredWithoutPlaylistsNestedInput
    genre?: GenreUpdateOneRequiredWithoutPlaylistsNestedInput
  }

  export type PlaylistsUncheckedUpdateWithoutFollowersInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    trackId?: PlaylistsUpdatetrackIdInput | string[]
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type PlaylistsUncheckedUpdateManyWithoutFollowersInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    trackId?: PlaylistsUpdatetrackIdInput | string[]
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistsUpdateWithoutFollowersInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    albums?: AlbumsUpdateManyWithoutArtistNestedInput
    tracks?: TracksUpdateManyWithoutArtistNestedInput
    genre?: GenreUpdateOneRequiredWithoutArtistsNestedInput
  }

  export type ArtistsUncheckedUpdateWithoutFollowersInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
    albums?: AlbumsUncheckedUpdateManyWithoutArtistNestedInput
    tracks?: TracksUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type ArtistsUncheckedUpdateManyWithoutFollowersInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
  }

  export type PlaylistsCreateManyTracksInput = {
    id?: string
    name: string
    thumbnail: string
    genreId: string
    userId?: PlaylistsCreateuserIdInput | string[]
  }

  export type PlaylistsUpdateWithoutTracksInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genre?: GenreUpdateOneRequiredWithoutPlaylistsNestedInput
    followers?: UserUpdateOneRequiredWithoutLikedPlaylistsNestedInput
  }

  export type PlaylistsUncheckedUpdateWithoutTracksInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
    userId?: PlaylistsUpdateuserIdInput | string[]
  }

  export type PlaylistsUncheckedUpdateManyWithoutTracksInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
    userId?: PlaylistsUpdateuserIdInput | string[]
  }

  export type TracksCreateManyAlbumInput = {
    id?: string
    name: string
    artistId: string
    url: string
    thumbnail: string
    genreId: string
    userId?: TracksCreateuserIdInput | string[]
  }

  export type TracksUpdateWithoutAlbumInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    artist?: ArtistsUpdateOneRequiredWithoutTracksNestedInput
    genre?: GenreUpdateOneRequiredWithoutTracksNestedInput
    playlists?: PlaylistsUpdateManyWithoutTracksNestedInput
    followers?: UserUpdateOneRequiredWithoutFavsNestedInput
  }

  export type TracksUncheckedUpdateWithoutAlbumInput = {
    name?: StringFieldUpdateOperationsInput | string
    artistId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
    userId?: TracksUpdateuserIdInput | string[]
    playlists?: PlaylistsUncheckedUpdateManyWithoutTracksNestedInput
  }

  export type TracksUncheckedUpdateManyWithoutAlbumInput = {
    name?: StringFieldUpdateOperationsInput | string
    artistId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
    userId?: TracksUpdateuserIdInput | string[]
  }

  export type AlbumsCreateManyArtistInput = {
    id?: string
    name: string
    thumbnail: string
    genreId: string
    userId?: AlbumsCreateuserIdInput | string[]
  }

  export type TracksCreateManyArtistInput = {
    id?: string
    name: string
    url: string
    thumbnail: string
    genreId: string
    albumId: string
    userId?: TracksCreateuserIdInput | string[]
  }

  export type AlbumsUpdateWithoutArtistInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    tracks?: TracksUpdateManyWithoutAlbumNestedInput
    genre?: GenreUpdateOneRequiredWithoutAlbumsNestedInput
    followers?: UserUpdateOneRequiredWithoutLikedAlbumsNestedInput
  }

  export type AlbumsUncheckedUpdateWithoutArtistInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
    userId?: AlbumsUpdateuserIdInput | string[]
    tracks?: TracksUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumsUncheckedUpdateManyWithoutArtistInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
    userId?: AlbumsUpdateuserIdInput | string[]
  }

  export type TracksUpdateWithoutArtistInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genre?: GenreUpdateOneRequiredWithoutTracksNestedInput
    album?: AlbumsUpdateOneRequiredWithoutTracksNestedInput
    playlists?: PlaylistsUpdateManyWithoutTracksNestedInput
    followers?: UserUpdateOneRequiredWithoutFavsNestedInput
  }

  export type TracksUncheckedUpdateWithoutArtistInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
    albumId?: StringFieldUpdateOperationsInput | string
    userId?: TracksUpdateuserIdInput | string[]
    playlists?: PlaylistsUncheckedUpdateManyWithoutTracksNestedInput
  }

  export type TracksUncheckedUpdateManyWithoutArtistInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    genreId?: StringFieldUpdateOperationsInput | string
    albumId?: StringFieldUpdateOperationsInput | string
    userId?: TracksUpdateuserIdInput | string[]
  }

  export type AlbumsCreateManyGenreInput = {
    id?: string
    name: string
    artistId: string
    thumbnail: string
    userId?: AlbumsCreateuserIdInput | string[]
  }

  export type TracksCreateManyGenreInput = {
    id?: string
    name: string
    artistId: string
    url: string
    thumbnail: string
    albumId: string
    userId?: TracksCreateuserIdInput | string[]
  }

  export type ArtistsCreateManyGenreInput = {
    id?: string
    name: string
    thumbnail: string
    userId?: ArtistsCreateuserIdInput | string[]
  }

  export type PlaylistsCreateManyGenreInput = {
    id?: string
    name: string
    thumbnail: string
    trackId?: PlaylistsCreatetrackIdInput | string[]
    userId?: PlaylistsCreateuserIdInput | string[]
  }

  export type AlbumsUpdateWithoutGenreInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    artist?: ArtistsUpdateOneRequiredWithoutAlbumsNestedInput
    tracks?: TracksUpdateManyWithoutAlbumNestedInput
    followers?: UserUpdateOneRequiredWithoutLikedAlbumsNestedInput
  }

  export type AlbumsUncheckedUpdateWithoutGenreInput = {
    name?: StringFieldUpdateOperationsInput | string
    artistId?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    userId?: AlbumsUpdateuserIdInput | string[]
    tracks?: TracksUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumsUncheckedUpdateManyWithoutGenreInput = {
    name?: StringFieldUpdateOperationsInput | string
    artistId?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    userId?: AlbumsUpdateuserIdInput | string[]
  }

  export type TracksUpdateWithoutGenreInput = {
    name?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    artist?: ArtistsUpdateOneRequiredWithoutTracksNestedInput
    album?: AlbumsUpdateOneRequiredWithoutTracksNestedInput
    playlists?: PlaylistsUpdateManyWithoutTracksNestedInput
    followers?: UserUpdateOneRequiredWithoutFavsNestedInput
  }

  export type TracksUncheckedUpdateWithoutGenreInput = {
    name?: StringFieldUpdateOperationsInput | string
    artistId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    albumId?: StringFieldUpdateOperationsInput | string
    userId?: TracksUpdateuserIdInput | string[]
    playlists?: PlaylistsUncheckedUpdateManyWithoutTracksNestedInput
  }

  export type TracksUncheckedUpdateManyWithoutGenreInput = {
    name?: StringFieldUpdateOperationsInput | string
    artistId?: StringFieldUpdateOperationsInput | string
    url?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    albumId?: StringFieldUpdateOperationsInput | string
    userId?: TracksUpdateuserIdInput | string[]
  }

  export type ArtistsUpdateWithoutGenreInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    albums?: AlbumsUpdateManyWithoutArtistNestedInput
    tracks?: TracksUpdateManyWithoutArtistNestedInput
    followers?: UserUpdateOneRequiredWithoutArtistsFollowedNestedInput
  }

  export type ArtistsUncheckedUpdateWithoutGenreInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    userId?: ArtistsUpdateuserIdInput | string[]
    albums?: AlbumsUncheckedUpdateManyWithoutArtistNestedInput
    tracks?: TracksUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type ArtistsUncheckedUpdateManyWithoutGenreInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    userId?: ArtistsUpdateuserIdInput | string[]
  }

  export type PlaylistsUpdateWithoutGenreInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    tracks?: TracksUpdateOneRequiredWithoutPlaylistsNestedInput
    followers?: UserUpdateOneRequiredWithoutLikedPlaylistsNestedInput
  }

  export type PlaylistsUncheckedUpdateWithoutGenreInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    trackId?: PlaylistsUpdatetrackIdInput | string[]
    userId?: PlaylistsUpdateuserIdInput | string[]
  }

  export type PlaylistsUncheckedUpdateManyWithoutGenreInput = {
    name?: StringFieldUpdateOperationsInput | string
    thumbnail?: StringFieldUpdateOperationsInput | string
    trackId?: PlaylistsUpdatetrackIdInput | string[]
    userId?: PlaylistsUpdateuserIdInput | string[]
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