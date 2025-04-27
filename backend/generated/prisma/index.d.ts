
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
 * Model Students
 * 
 */
export type Students = $Result.DefaultSelection<Prisma.$StudentsPayload>
/**
 * Model Admins
 * 
 */
export type Admins = $Result.DefaultSelection<Prisma.$AdminsPayload>
/**
 * Model Properties
 * 
 */
export type Properties = $Result.DefaultSelection<Prisma.$PropertiesPayload>
/**
 * Model Property_Status_Histories
 * 
 */
export type Property_Status_Histories = $Result.DefaultSelection<Prisma.$Property_Status_HistoriesPayload>
/**
 * Model Lost_Found_Reports
 * 
 */
export type Lost_Found_Reports = $Result.DefaultSelection<Prisma.$Lost_Found_ReportsPayload>
/**
 * Model Log_Histories
 * 
 */
export type Log_Histories = $Result.DefaultSelection<Prisma.$Log_HistoriesPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Students
 * const students = await prisma.students.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * // Fetch zero or more Students
   * const students = await prisma.students.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

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
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


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
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.students`: Exposes CRUD operations for the **Students** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Students
    * const students = await prisma.students.findMany()
    * ```
    */
  get students(): Prisma.StudentsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.admins`: Exposes CRUD operations for the **Admins** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Admins
    * const admins = await prisma.admins.findMany()
    * ```
    */
  get admins(): Prisma.AdminsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.properties`: Exposes CRUD operations for the **Properties** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Properties
    * const properties = await prisma.properties.findMany()
    * ```
    */
  get properties(): Prisma.PropertiesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.property_Status_Histories`: Exposes CRUD operations for the **Property_Status_Histories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Property_Status_Histories
    * const property_Status_Histories = await prisma.property_Status_Histories.findMany()
    * ```
    */
  get property_Status_Histories(): Prisma.Property_Status_HistoriesDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.lost_Found_Reports`: Exposes CRUD operations for the **Lost_Found_Reports** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Lost_Found_Reports
    * const lost_Found_Reports = await prisma.lost_Found_Reports.findMany()
    * ```
    */
  get lost_Found_Reports(): Prisma.Lost_Found_ReportsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.log_Histories`: Exposes CRUD operations for the **Log_Histories** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Log_Histories
    * const log_Histories = await prisma.log_Histories.findMany()
    * ```
    */
  get log_Histories(): Prisma.Log_HistoriesDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Students: 'Students',
    Admins: 'Admins',
    Properties: 'Properties',
    Property_Status_Histories: 'Property_Status_Histories',
    Lost_Found_Reports: 'Lost_Found_Reports',
    Log_Histories: 'Log_Histories'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "students" | "admins" | "properties" | "property_Status_Histories" | "lost_Found_Reports" | "log_Histories"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Students: {
        payload: Prisma.$StudentsPayload<ExtArgs>
        fields: Prisma.StudentsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StudentsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StudentsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>
          }
          findFirst: {
            args: Prisma.StudentsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StudentsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>
          }
          findMany: {
            args: Prisma.StudentsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>[]
          }
          create: {
            args: Prisma.StudentsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>
          }
          createMany: {
            args: Prisma.StudentsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StudentsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>[]
          }
          delete: {
            args: Prisma.StudentsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>
          }
          update: {
            args: Prisma.StudentsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>
          }
          deleteMany: {
            args: Prisma.StudentsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StudentsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StudentsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>[]
          }
          upsert: {
            args: Prisma.StudentsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StudentsPayload>
          }
          aggregate: {
            args: Prisma.StudentsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStudents>
          }
          groupBy: {
            args: Prisma.StudentsGroupByArgs<ExtArgs>
            result: $Utils.Optional<StudentsGroupByOutputType>[]
          }
          count: {
            args: Prisma.StudentsCountArgs<ExtArgs>
            result: $Utils.Optional<StudentsCountAggregateOutputType> | number
          }
        }
      }
      Admins: {
        payload: Prisma.$AdminsPayload<ExtArgs>
        fields: Prisma.AdminsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AdminsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AdminsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>
          }
          findFirst: {
            args: Prisma.AdminsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AdminsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>
          }
          findMany: {
            args: Prisma.AdminsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>[]
          }
          create: {
            args: Prisma.AdminsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>
          }
          createMany: {
            args: Prisma.AdminsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AdminsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>[]
          }
          delete: {
            args: Prisma.AdminsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>
          }
          update: {
            args: Prisma.AdminsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>
          }
          deleteMany: {
            args: Prisma.AdminsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AdminsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AdminsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>[]
          }
          upsert: {
            args: Prisma.AdminsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AdminsPayload>
          }
          aggregate: {
            args: Prisma.AdminsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAdmins>
          }
          groupBy: {
            args: Prisma.AdminsGroupByArgs<ExtArgs>
            result: $Utils.Optional<AdminsGroupByOutputType>[]
          }
          count: {
            args: Prisma.AdminsCountArgs<ExtArgs>
            result: $Utils.Optional<AdminsCountAggregateOutputType> | number
          }
        }
      }
      Properties: {
        payload: Prisma.$PropertiesPayload<ExtArgs>
        fields: Prisma.PropertiesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PropertiesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertiesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PropertiesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertiesPayload>
          }
          findFirst: {
            args: Prisma.PropertiesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertiesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PropertiesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertiesPayload>
          }
          findMany: {
            args: Prisma.PropertiesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertiesPayload>[]
          }
          create: {
            args: Prisma.PropertiesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertiesPayload>
          }
          createMany: {
            args: Prisma.PropertiesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PropertiesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertiesPayload>[]
          }
          delete: {
            args: Prisma.PropertiesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertiesPayload>
          }
          update: {
            args: Prisma.PropertiesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertiesPayload>
          }
          deleteMany: {
            args: Prisma.PropertiesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PropertiesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PropertiesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertiesPayload>[]
          }
          upsert: {
            args: Prisma.PropertiesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PropertiesPayload>
          }
          aggregate: {
            args: Prisma.PropertiesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProperties>
          }
          groupBy: {
            args: Prisma.PropertiesGroupByArgs<ExtArgs>
            result: $Utils.Optional<PropertiesGroupByOutputType>[]
          }
          count: {
            args: Prisma.PropertiesCountArgs<ExtArgs>
            result: $Utils.Optional<PropertiesCountAggregateOutputType> | number
          }
        }
      }
      Property_Status_Histories: {
        payload: Prisma.$Property_Status_HistoriesPayload<ExtArgs>
        fields: Prisma.Property_Status_HistoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Property_Status_HistoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Property_Status_HistoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Property_Status_HistoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Property_Status_HistoriesPayload>
          }
          findFirst: {
            args: Prisma.Property_Status_HistoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Property_Status_HistoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Property_Status_HistoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Property_Status_HistoriesPayload>
          }
          findMany: {
            args: Prisma.Property_Status_HistoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Property_Status_HistoriesPayload>[]
          }
          create: {
            args: Prisma.Property_Status_HistoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Property_Status_HistoriesPayload>
          }
          createMany: {
            args: Prisma.Property_Status_HistoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Property_Status_HistoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Property_Status_HistoriesPayload>[]
          }
          delete: {
            args: Prisma.Property_Status_HistoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Property_Status_HistoriesPayload>
          }
          update: {
            args: Prisma.Property_Status_HistoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Property_Status_HistoriesPayload>
          }
          deleteMany: {
            args: Prisma.Property_Status_HistoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Property_Status_HistoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Property_Status_HistoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Property_Status_HistoriesPayload>[]
          }
          upsert: {
            args: Prisma.Property_Status_HistoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Property_Status_HistoriesPayload>
          }
          aggregate: {
            args: Prisma.Property_Status_HistoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProperty_Status_Histories>
          }
          groupBy: {
            args: Prisma.Property_Status_HistoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Property_Status_HistoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.Property_Status_HistoriesCountArgs<ExtArgs>
            result: $Utils.Optional<Property_Status_HistoriesCountAggregateOutputType> | number
          }
        }
      }
      Lost_Found_Reports: {
        payload: Prisma.$Lost_Found_ReportsPayload<ExtArgs>
        fields: Prisma.Lost_Found_ReportsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Lost_Found_ReportsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Lost_Found_ReportsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Lost_Found_ReportsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Lost_Found_ReportsPayload>
          }
          findFirst: {
            args: Prisma.Lost_Found_ReportsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Lost_Found_ReportsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Lost_Found_ReportsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Lost_Found_ReportsPayload>
          }
          findMany: {
            args: Prisma.Lost_Found_ReportsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Lost_Found_ReportsPayload>[]
          }
          create: {
            args: Prisma.Lost_Found_ReportsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Lost_Found_ReportsPayload>
          }
          createMany: {
            args: Prisma.Lost_Found_ReportsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Lost_Found_ReportsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Lost_Found_ReportsPayload>[]
          }
          delete: {
            args: Prisma.Lost_Found_ReportsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Lost_Found_ReportsPayload>
          }
          update: {
            args: Prisma.Lost_Found_ReportsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Lost_Found_ReportsPayload>
          }
          deleteMany: {
            args: Prisma.Lost_Found_ReportsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Lost_Found_ReportsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Lost_Found_ReportsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Lost_Found_ReportsPayload>[]
          }
          upsert: {
            args: Prisma.Lost_Found_ReportsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Lost_Found_ReportsPayload>
          }
          aggregate: {
            args: Prisma.Lost_Found_ReportsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLost_Found_Reports>
          }
          groupBy: {
            args: Prisma.Lost_Found_ReportsGroupByArgs<ExtArgs>
            result: $Utils.Optional<Lost_Found_ReportsGroupByOutputType>[]
          }
          count: {
            args: Prisma.Lost_Found_ReportsCountArgs<ExtArgs>
            result: $Utils.Optional<Lost_Found_ReportsCountAggregateOutputType> | number
          }
        }
      }
      Log_Histories: {
        payload: Prisma.$Log_HistoriesPayload<ExtArgs>
        fields: Prisma.Log_HistoriesFieldRefs
        operations: {
          findUnique: {
            args: Prisma.Log_HistoriesFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Log_HistoriesPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.Log_HistoriesFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Log_HistoriesPayload>
          }
          findFirst: {
            args: Prisma.Log_HistoriesFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Log_HistoriesPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.Log_HistoriesFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Log_HistoriesPayload>
          }
          findMany: {
            args: Prisma.Log_HistoriesFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Log_HistoriesPayload>[]
          }
          create: {
            args: Prisma.Log_HistoriesCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Log_HistoriesPayload>
          }
          createMany: {
            args: Prisma.Log_HistoriesCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.Log_HistoriesCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Log_HistoriesPayload>[]
          }
          delete: {
            args: Prisma.Log_HistoriesDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Log_HistoriesPayload>
          }
          update: {
            args: Prisma.Log_HistoriesUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Log_HistoriesPayload>
          }
          deleteMany: {
            args: Prisma.Log_HistoriesDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.Log_HistoriesUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.Log_HistoriesUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Log_HistoriesPayload>[]
          }
          upsert: {
            args: Prisma.Log_HistoriesUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$Log_HistoriesPayload>
          }
          aggregate: {
            args: Prisma.Log_HistoriesAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLog_Histories>
          }
          groupBy: {
            args: Prisma.Log_HistoriesGroupByArgs<ExtArgs>
            result: $Utils.Optional<Log_HistoriesGroupByOutputType>[]
          }
          count: {
            args: Prisma.Log_HistoriesCountArgs<ExtArgs>
            result: $Utils.Optional<Log_HistoriesCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
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
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    students?: StudentsOmit
    admins?: AdminsOmit
    properties?: PropertiesOmit
    property_Status_Histories?: Property_Status_HistoriesOmit
    lost_Found_Reports?: Lost_Found_ReportsOmit
    log_Histories?: Log_HistoriesOmit
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
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
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
   * Count Type StudentsCountOutputType
   */

  export type StudentsCountOutputType = {
    properties: number
    lost_found_reports: number
    log_history: number
  }

  export type StudentsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | StudentsCountOutputTypeCountPropertiesArgs
    lost_found_reports?: boolean | StudentsCountOutputTypeCountLost_found_reportsArgs
    log_history?: boolean | StudentsCountOutputTypeCountLog_historyArgs
  }

  // Custom InputTypes
  /**
   * StudentsCountOutputType without action
   */
  export type StudentsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StudentsCountOutputType
     */
    select?: StudentsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * StudentsCountOutputType without action
   */
  export type StudentsCountOutputTypeCountPropertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertiesWhereInput
  }

  /**
   * StudentsCountOutputType without action
   */
  export type StudentsCountOutputTypeCountLost_found_reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Lost_Found_ReportsWhereInput
  }

  /**
   * StudentsCountOutputType without action
   */
  export type StudentsCountOutputTypeCountLog_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Log_HistoriesWhereInput
  }


  /**
   * Count Type AdminsCountOutputType
   */

  export type AdminsCountOutputType = {
    log_history: number
    property: number
    property_status_history: number
    lost_found_reports: number
  }

  export type AdminsCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    log_history?: boolean | AdminsCountOutputTypeCountLog_historyArgs
    property?: boolean | AdminsCountOutputTypeCountPropertyArgs
    property_status_history?: boolean | AdminsCountOutputTypeCountProperty_status_historyArgs
    lost_found_reports?: boolean | AdminsCountOutputTypeCountLost_found_reportsArgs
  }

  // Custom InputTypes
  /**
   * AdminsCountOutputType without action
   */
  export type AdminsCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AdminsCountOutputType
     */
    select?: AdminsCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AdminsCountOutputType without action
   */
  export type AdminsCountOutputTypeCountLog_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Log_HistoriesWhereInput
  }

  /**
   * AdminsCountOutputType without action
   */
  export type AdminsCountOutputTypeCountPropertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertiesWhereInput
  }

  /**
   * AdminsCountOutputType without action
   */
  export type AdminsCountOutputTypeCountProperty_status_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Property_Status_HistoriesWhereInput
  }

  /**
   * AdminsCountOutputType without action
   */
  export type AdminsCountOutputTypeCountLost_found_reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Lost_Found_ReportsWhereInput
  }


  /**
   * Count Type PropertiesCountOutputType
   */

  export type PropertiesCountOutputType = {
    property_status_history: number
    lost_found_reports: number
  }

  export type PropertiesCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property_status_history?: boolean | PropertiesCountOutputTypeCountProperty_status_historyArgs
    lost_found_reports?: boolean | PropertiesCountOutputTypeCountLost_found_reportsArgs
  }

  // Custom InputTypes
  /**
   * PropertiesCountOutputType without action
   */
  export type PropertiesCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PropertiesCountOutputType
     */
    select?: PropertiesCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PropertiesCountOutputType without action
   */
  export type PropertiesCountOutputTypeCountProperty_status_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Property_Status_HistoriesWhereInput
  }

  /**
   * PropertiesCountOutputType without action
   */
  export type PropertiesCountOutputTypeCountLost_found_reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Lost_Found_ReportsWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Students
   */

  export type AggregateStudents = {
    _count: StudentsCountAggregateOutputType | null
    _min: StudentsMinAggregateOutputType | null
    _max: StudentsMaxAggregateOutputType | null
  }

  export type StudentsMinAggregateOutputType = {
    id: string | null
    schoolId: string | null
    fullName: string | null
    email: string | null
    password: string | null
    year: string | null
    phone: string | null
    location: string | null
    department: string | null
    imageUrl: string | null
    createdAt: Date | null
  }

  export type StudentsMaxAggregateOutputType = {
    id: string | null
    schoolId: string | null
    fullName: string | null
    email: string | null
    password: string | null
    year: string | null
    phone: string | null
    location: string | null
    department: string | null
    imageUrl: string | null
    createdAt: Date | null
  }

  export type StudentsCountAggregateOutputType = {
    id: number
    schoolId: number
    fullName: number
    email: number
    password: number
    year: number
    phone: number
    location: number
    department: number
    imageUrl: number
    createdAt: number
    _all: number
  }


  export type StudentsMinAggregateInputType = {
    id?: true
    schoolId?: true
    fullName?: true
    email?: true
    password?: true
    year?: true
    phone?: true
    location?: true
    department?: true
    imageUrl?: true
    createdAt?: true
  }

  export type StudentsMaxAggregateInputType = {
    id?: true
    schoolId?: true
    fullName?: true
    email?: true
    password?: true
    year?: true
    phone?: true
    location?: true
    department?: true
    imageUrl?: true
    createdAt?: true
  }

  export type StudentsCountAggregateInputType = {
    id?: true
    schoolId?: true
    fullName?: true
    email?: true
    password?: true
    year?: true
    phone?: true
    location?: true
    department?: true
    imageUrl?: true
    createdAt?: true
    _all?: true
  }

  export type StudentsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to aggregate.
     */
    where?: StudentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentsOrderByWithRelationInput | StudentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StudentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Students
    **/
    _count?: true | StudentsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StudentsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StudentsMaxAggregateInputType
  }

  export type GetStudentsAggregateType<T extends StudentsAggregateArgs> = {
        [P in keyof T & keyof AggregateStudents]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStudents[P]>
      : GetScalarType<T[P], AggregateStudents[P]>
  }




  export type StudentsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StudentsWhereInput
    orderBy?: StudentsOrderByWithAggregationInput | StudentsOrderByWithAggregationInput[]
    by: StudentsScalarFieldEnum[] | StudentsScalarFieldEnum
    having?: StudentsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StudentsCountAggregateInputType | true
    _min?: StudentsMinAggregateInputType
    _max?: StudentsMaxAggregateInputType
  }

  export type StudentsGroupByOutputType = {
    id: string
    schoolId: string
    fullName: string
    email: string
    password: string
    year: string
    phone: string
    location: string
    department: string
    imageUrl: string | null
    createdAt: Date
    _count: StudentsCountAggregateOutputType | null
    _min: StudentsMinAggregateOutputType | null
    _max: StudentsMaxAggregateOutputType | null
  }

  type GetStudentsGroupByPayload<T extends StudentsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StudentsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StudentsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StudentsGroupByOutputType[P]>
            : GetScalarType<T[P], StudentsGroupByOutputType[P]>
        }
      >
    >


  export type StudentsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    year?: boolean
    phone?: boolean
    location?: boolean
    department?: boolean
    imageUrl?: boolean
    createdAt?: boolean
    properties?: boolean | Students$propertiesArgs<ExtArgs>
    lost_found_reports?: boolean | Students$lost_found_reportsArgs<ExtArgs>
    log_history?: boolean | Students$log_historyArgs<ExtArgs>
    _count?: boolean | StudentsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["students"]>

  export type StudentsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    year?: boolean
    phone?: boolean
    location?: boolean
    department?: boolean
    imageUrl?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["students"]>

  export type StudentsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    schoolId?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    year?: boolean
    phone?: boolean
    location?: boolean
    department?: boolean
    imageUrl?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["students"]>

  export type StudentsSelectScalar = {
    id?: boolean
    schoolId?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    year?: boolean
    phone?: boolean
    location?: boolean
    department?: boolean
    imageUrl?: boolean
    createdAt?: boolean
  }

  export type StudentsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "schoolId" | "fullName" | "email" | "password" | "year" | "phone" | "location" | "department" | "imageUrl" | "createdAt", ExtArgs["result"]["students"]>
  export type StudentsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    properties?: boolean | Students$propertiesArgs<ExtArgs>
    lost_found_reports?: boolean | Students$lost_found_reportsArgs<ExtArgs>
    log_history?: boolean | Students$log_historyArgs<ExtArgs>
    _count?: boolean | StudentsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type StudentsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type StudentsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $StudentsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Students"
    objects: {
      properties: Prisma.$PropertiesPayload<ExtArgs>[]
      lost_found_reports: Prisma.$Lost_Found_ReportsPayload<ExtArgs>[]
      log_history: Prisma.$Log_HistoriesPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      schoolId: string
      fullName: string
      email: string
      password: string
      year: string
      phone: string
      location: string
      department: string
      imageUrl: string | null
      createdAt: Date
    }, ExtArgs["result"]["students"]>
    composites: {}
  }

  type StudentsGetPayload<S extends boolean | null | undefined | StudentsDefaultArgs> = $Result.GetResult<Prisma.$StudentsPayload, S>

  type StudentsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StudentsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StudentsCountAggregateInputType | true
    }

  export interface StudentsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Students'], meta: { name: 'Students' } }
    /**
     * Find zero or one Students that matches the filter.
     * @param {StudentsFindUniqueArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StudentsFindUniqueArgs>(args: SelectSubset<T, StudentsFindUniqueArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Students that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StudentsFindUniqueOrThrowArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StudentsFindUniqueOrThrowArgs>(args: SelectSubset<T, StudentsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsFindFirstArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StudentsFindFirstArgs>(args?: SelectSubset<T, StudentsFindFirstArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Students that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsFindFirstOrThrowArgs} args - Arguments to find a Students
     * @example
     * // Get one Students
     * const students = await prisma.students.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StudentsFindFirstOrThrowArgs>(args?: SelectSubset<T, StudentsFindFirstOrThrowArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Students that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Students
     * const students = await prisma.students.findMany()
     * 
     * // Get first 10 Students
     * const students = await prisma.students.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const studentsWithIdOnly = await prisma.students.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StudentsFindManyArgs>(args?: SelectSubset<T, StudentsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Students.
     * @param {StudentsCreateArgs} args - Arguments to create a Students.
     * @example
     * // Create one Students
     * const Students = await prisma.students.create({
     *   data: {
     *     // ... data to create a Students
     *   }
     * })
     * 
     */
    create<T extends StudentsCreateArgs>(args: SelectSubset<T, StudentsCreateArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Students.
     * @param {StudentsCreateManyArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const students = await prisma.students.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StudentsCreateManyArgs>(args?: SelectSubset<T, StudentsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Students and returns the data saved in the database.
     * @param {StudentsCreateManyAndReturnArgs} args - Arguments to create many Students.
     * @example
     * // Create many Students
     * const students = await prisma.students.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Students and only return the `id`
     * const studentsWithIdOnly = await prisma.students.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StudentsCreateManyAndReturnArgs>(args?: SelectSubset<T, StudentsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Students.
     * @param {StudentsDeleteArgs} args - Arguments to delete one Students.
     * @example
     * // Delete one Students
     * const Students = await prisma.students.delete({
     *   where: {
     *     // ... filter to delete one Students
     *   }
     * })
     * 
     */
    delete<T extends StudentsDeleteArgs>(args: SelectSubset<T, StudentsDeleteArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Students.
     * @param {StudentsUpdateArgs} args - Arguments to update one Students.
     * @example
     * // Update one Students
     * const students = await prisma.students.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StudentsUpdateArgs>(args: SelectSubset<T, StudentsUpdateArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Students.
     * @param {StudentsDeleteManyArgs} args - Arguments to filter Students to delete.
     * @example
     * // Delete a few Students
     * const { count } = await prisma.students.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StudentsDeleteManyArgs>(args?: SelectSubset<T, StudentsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Students
     * const students = await prisma.students.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StudentsUpdateManyArgs>(args: SelectSubset<T, StudentsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Students and returns the data updated in the database.
     * @param {StudentsUpdateManyAndReturnArgs} args - Arguments to update many Students.
     * @example
     * // Update many Students
     * const students = await prisma.students.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Students and only return the `id`
     * const studentsWithIdOnly = await prisma.students.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StudentsUpdateManyAndReturnArgs>(args: SelectSubset<T, StudentsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Students.
     * @param {StudentsUpsertArgs} args - Arguments to update or create a Students.
     * @example
     * // Update or create a Students
     * const students = await prisma.students.upsert({
     *   create: {
     *     // ... data to create a Students
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Students we want to update
     *   }
     * })
     */
    upsert<T extends StudentsUpsertArgs>(args: SelectSubset<T, StudentsUpsertArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsCountArgs} args - Arguments to filter Students to count.
     * @example
     * // Count the number of Students
     * const count = await prisma.students.count({
     *   where: {
     *     // ... the filter for the Students we want to count
     *   }
     * })
    **/
    count<T extends StudentsCountArgs>(
      args?: Subset<T, StudentsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StudentsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StudentsAggregateArgs>(args: Subset<T, StudentsAggregateArgs>): Prisma.PrismaPromise<GetStudentsAggregateType<T>>

    /**
     * Group by Students.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StudentsGroupByArgs} args - Group by arguments.
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
      T extends StudentsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StudentsGroupByArgs['orderBy'] }
        : { orderBy?: StudentsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, StudentsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStudentsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Students model
   */
  readonly fields: StudentsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Students.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StudentsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    properties<T extends Students$propertiesArgs<ExtArgs> = {}>(args?: Subset<T, Students$propertiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lost_found_reports<T extends Students$lost_found_reportsArgs<ExtArgs> = {}>(args?: Subset<T, Students$lost_found_reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Lost_Found_ReportsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    log_history<T extends Students$log_historyArgs<ExtArgs> = {}>(args?: Subset<T, Students$log_historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Log_HistoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Students model
   */
  interface StudentsFieldRefs {
    readonly id: FieldRef<"Students", 'String'>
    readonly schoolId: FieldRef<"Students", 'String'>
    readonly fullName: FieldRef<"Students", 'String'>
    readonly email: FieldRef<"Students", 'String'>
    readonly password: FieldRef<"Students", 'String'>
    readonly year: FieldRef<"Students", 'String'>
    readonly phone: FieldRef<"Students", 'String'>
    readonly location: FieldRef<"Students", 'String'>
    readonly department: FieldRef<"Students", 'String'>
    readonly imageUrl: FieldRef<"Students", 'String'>
    readonly createdAt: FieldRef<"Students", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Students findUnique
   */
  export type StudentsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where: StudentsWhereUniqueInput
  }

  /**
   * Students findUniqueOrThrow
   */
  export type StudentsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where: StudentsWhereUniqueInput
  }

  /**
   * Students findFirst
   */
  export type StudentsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentsOrderByWithRelationInput | StudentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }

  /**
   * Students findFirstOrThrow
   */
  export type StudentsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentsOrderByWithRelationInput | StudentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Students.
     */
    cursor?: StudentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Students.
     */
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }

  /**
   * Students findMany
   */
  export type StudentsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * Filter, which Students to fetch.
     */
    where?: StudentsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Students to fetch.
     */
    orderBy?: StudentsOrderByWithRelationInput | StudentsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Students.
     */
    cursor?: StudentsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Students from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Students.
     */
    skip?: number
    distinct?: StudentsScalarFieldEnum | StudentsScalarFieldEnum[]
  }

  /**
   * Students create
   */
  export type StudentsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * The data needed to create a Students.
     */
    data: XOR<StudentsCreateInput, StudentsUncheckedCreateInput>
  }

  /**
   * Students createMany
   */
  export type StudentsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Students.
     */
    data: StudentsCreateManyInput | StudentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Students createManyAndReturn
   */
  export type StudentsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * The data used to create many Students.
     */
    data: StudentsCreateManyInput | StudentsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Students update
   */
  export type StudentsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * The data needed to update a Students.
     */
    data: XOR<StudentsUpdateInput, StudentsUncheckedUpdateInput>
    /**
     * Choose, which Students to update.
     */
    where: StudentsWhereUniqueInput
  }

  /**
   * Students updateMany
   */
  export type StudentsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Students.
     */
    data: XOR<StudentsUpdateManyMutationInput, StudentsUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentsWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Students updateManyAndReturn
   */
  export type StudentsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * The data used to update Students.
     */
    data: XOR<StudentsUpdateManyMutationInput, StudentsUncheckedUpdateManyInput>
    /**
     * Filter which Students to update
     */
    where?: StudentsWhereInput
    /**
     * Limit how many Students to update.
     */
    limit?: number
  }

  /**
   * Students upsert
   */
  export type StudentsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * The filter to search for the Students to update in case it exists.
     */
    where: StudentsWhereUniqueInput
    /**
     * In case the Students found by the `where` argument doesn't exist, create a new Students with this data.
     */
    create: XOR<StudentsCreateInput, StudentsUncheckedCreateInput>
    /**
     * In case the Students was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StudentsUpdateInput, StudentsUncheckedUpdateInput>
  }

  /**
   * Students delete
   */
  export type StudentsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
    /**
     * Filter which Students to delete.
     */
    where: StudentsWhereUniqueInput
  }

  /**
   * Students deleteMany
   */
  export type StudentsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Students to delete
     */
    where?: StudentsWhereInput
    /**
     * Limit how many Students to delete.
     */
    limit?: number
  }

  /**
   * Students.properties
   */
  export type Students$propertiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Properties
     */
    select?: PropertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Properties
     */
    omit?: PropertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertiesInclude<ExtArgs> | null
    where?: PropertiesWhereInput
    orderBy?: PropertiesOrderByWithRelationInput | PropertiesOrderByWithRelationInput[]
    cursor?: PropertiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertiesScalarFieldEnum | PropertiesScalarFieldEnum[]
  }

  /**
   * Students.lost_found_reports
   */
  export type Students$lost_found_reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lost_Found_Reports
     */
    select?: Lost_Found_ReportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lost_Found_Reports
     */
    omit?: Lost_Found_ReportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Lost_Found_ReportsInclude<ExtArgs> | null
    where?: Lost_Found_ReportsWhereInput
    orderBy?: Lost_Found_ReportsOrderByWithRelationInput | Lost_Found_ReportsOrderByWithRelationInput[]
    cursor?: Lost_Found_ReportsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Lost_Found_ReportsScalarFieldEnum | Lost_Found_ReportsScalarFieldEnum[]
  }

  /**
   * Students.log_history
   */
  export type Students$log_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log_Histories
     */
    select?: Log_HistoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log_Histories
     */
    omit?: Log_HistoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Log_HistoriesInclude<ExtArgs> | null
    where?: Log_HistoriesWhereInput
    orderBy?: Log_HistoriesOrderByWithRelationInput | Log_HistoriesOrderByWithRelationInput[]
    cursor?: Log_HistoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Log_HistoriesScalarFieldEnum | Log_HistoriesScalarFieldEnum[]
  }

  /**
   * Students without action
   */
  export type StudentsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Students
     */
    select?: StudentsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Students
     */
    omit?: StudentsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StudentsInclude<ExtArgs> | null
  }


  /**
   * Model Admins
   */

  export type AggregateAdmins = {
    _count: AdminsCountAggregateOutputType | null
    _min: AdminsMinAggregateOutputType | null
    _max: AdminsMaxAggregateOutputType | null
  }

  export type AdminsMinAggregateOutputType = {
    id: string | null
    adminId: string | null
    fullName: string | null
    email: string | null
    password: string | null
    phone: string | null
    role: string | null
    location: string | null
  }

  export type AdminsMaxAggregateOutputType = {
    id: string | null
    adminId: string | null
    fullName: string | null
    email: string | null
    password: string | null
    phone: string | null
    role: string | null
    location: string | null
  }

  export type AdminsCountAggregateOutputType = {
    id: number
    adminId: number
    fullName: number
    email: number
    password: number
    phone: number
    role: number
    location: number
    _all: number
  }


  export type AdminsMinAggregateInputType = {
    id?: true
    adminId?: true
    fullName?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    location?: true
  }

  export type AdminsMaxAggregateInputType = {
    id?: true
    adminId?: true
    fullName?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    location?: true
  }

  export type AdminsCountAggregateInputType = {
    id?: true
    adminId?: true
    fullName?: true
    email?: true
    password?: true
    phone?: true
    role?: true
    location?: true
    _all?: true
  }

  export type AdminsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to aggregate.
     */
    where?: AdminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminsOrderByWithRelationInput | AdminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AdminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Admins
    **/
    _count?: true | AdminsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AdminsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AdminsMaxAggregateInputType
  }

  export type GetAdminsAggregateType<T extends AdminsAggregateArgs> = {
        [P in keyof T & keyof AggregateAdmins]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAdmins[P]>
      : GetScalarType<T[P], AggregateAdmins[P]>
  }




  export type AdminsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AdminsWhereInput
    orderBy?: AdminsOrderByWithAggregationInput | AdminsOrderByWithAggregationInput[]
    by: AdminsScalarFieldEnum[] | AdminsScalarFieldEnum
    having?: AdminsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AdminsCountAggregateInputType | true
    _min?: AdminsMinAggregateInputType
    _max?: AdminsMaxAggregateInputType
  }

  export type AdminsGroupByOutputType = {
    id: string
    adminId: string
    fullName: string
    email: string
    password: string
    phone: string
    role: string
    location: string
    _count: AdminsCountAggregateOutputType | null
    _min: AdminsMinAggregateOutputType | null
    _max: AdminsMaxAggregateOutputType | null
  }

  type GetAdminsGroupByPayload<T extends AdminsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AdminsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AdminsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AdminsGroupByOutputType[P]>
            : GetScalarType<T[P], AdminsGroupByOutputType[P]>
        }
      >
    >


  export type AdminsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    location?: boolean
    log_history?: boolean | Admins$log_historyArgs<ExtArgs>
    property?: boolean | Admins$propertyArgs<ExtArgs>
    property_status_history?: boolean | Admins$property_status_historyArgs<ExtArgs>
    lost_found_reports?: boolean | Admins$lost_found_reportsArgs<ExtArgs>
    _count?: boolean | AdminsCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["admins"]>

  export type AdminsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    location?: boolean
  }, ExtArgs["result"]["admins"]>

  export type AdminsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    adminId?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    location?: boolean
  }, ExtArgs["result"]["admins"]>

  export type AdminsSelectScalar = {
    id?: boolean
    adminId?: boolean
    fullName?: boolean
    email?: boolean
    password?: boolean
    phone?: boolean
    role?: boolean
    location?: boolean
  }

  export type AdminsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "adminId" | "fullName" | "email" | "password" | "phone" | "role" | "location", ExtArgs["result"]["admins"]>
  export type AdminsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    log_history?: boolean | Admins$log_historyArgs<ExtArgs>
    property?: boolean | Admins$propertyArgs<ExtArgs>
    property_status_history?: boolean | Admins$property_status_historyArgs<ExtArgs>
    lost_found_reports?: boolean | Admins$lost_found_reportsArgs<ExtArgs>
    _count?: boolean | AdminsCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AdminsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AdminsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AdminsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Admins"
    objects: {
      log_history: Prisma.$Log_HistoriesPayload<ExtArgs>[]
      property: Prisma.$PropertiesPayload<ExtArgs>[]
      property_status_history: Prisma.$Property_Status_HistoriesPayload<ExtArgs>[]
      lost_found_reports: Prisma.$Lost_Found_ReportsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      adminId: string
      fullName: string
      email: string
      password: string
      phone: string
      role: string
      location: string
    }, ExtArgs["result"]["admins"]>
    composites: {}
  }

  type AdminsGetPayload<S extends boolean | null | undefined | AdminsDefaultArgs> = $Result.GetResult<Prisma.$AdminsPayload, S>

  type AdminsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AdminsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AdminsCountAggregateInputType | true
    }

  export interface AdminsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Admins'], meta: { name: 'Admins' } }
    /**
     * Find zero or one Admins that matches the filter.
     * @param {AdminsFindUniqueArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AdminsFindUniqueArgs>(args: SelectSubset<T, AdminsFindUniqueArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Admins that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AdminsFindUniqueOrThrowArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AdminsFindUniqueOrThrowArgs>(args: SelectSubset<T, AdminsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsFindFirstArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AdminsFindFirstArgs>(args?: SelectSubset<T, AdminsFindFirstArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Admins that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsFindFirstOrThrowArgs} args - Arguments to find a Admins
     * @example
     * // Get one Admins
     * const admins = await prisma.admins.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AdminsFindFirstOrThrowArgs>(args?: SelectSubset<T, AdminsFindFirstOrThrowArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Admins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Admins
     * const admins = await prisma.admins.findMany()
     * 
     * // Get first 10 Admins
     * const admins = await prisma.admins.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const adminsWithIdOnly = await prisma.admins.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AdminsFindManyArgs>(args?: SelectSubset<T, AdminsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Admins.
     * @param {AdminsCreateArgs} args - Arguments to create a Admins.
     * @example
     * // Create one Admins
     * const Admins = await prisma.admins.create({
     *   data: {
     *     // ... data to create a Admins
     *   }
     * })
     * 
     */
    create<T extends AdminsCreateArgs>(args: SelectSubset<T, AdminsCreateArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Admins.
     * @param {AdminsCreateManyArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admins = await prisma.admins.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AdminsCreateManyArgs>(args?: SelectSubset<T, AdminsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Admins and returns the data saved in the database.
     * @param {AdminsCreateManyAndReturnArgs} args - Arguments to create many Admins.
     * @example
     * // Create many Admins
     * const admins = await prisma.admins.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Admins and only return the `id`
     * const adminsWithIdOnly = await prisma.admins.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AdminsCreateManyAndReturnArgs>(args?: SelectSubset<T, AdminsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Admins.
     * @param {AdminsDeleteArgs} args - Arguments to delete one Admins.
     * @example
     * // Delete one Admins
     * const Admins = await prisma.admins.delete({
     *   where: {
     *     // ... filter to delete one Admins
     *   }
     * })
     * 
     */
    delete<T extends AdminsDeleteArgs>(args: SelectSubset<T, AdminsDeleteArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Admins.
     * @param {AdminsUpdateArgs} args - Arguments to update one Admins.
     * @example
     * // Update one Admins
     * const admins = await prisma.admins.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AdminsUpdateArgs>(args: SelectSubset<T, AdminsUpdateArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Admins.
     * @param {AdminsDeleteManyArgs} args - Arguments to filter Admins to delete.
     * @example
     * // Delete a few Admins
     * const { count } = await prisma.admins.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AdminsDeleteManyArgs>(args?: SelectSubset<T, AdminsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Admins
     * const admins = await prisma.admins.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AdminsUpdateManyArgs>(args: SelectSubset<T, AdminsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Admins and returns the data updated in the database.
     * @param {AdminsUpdateManyAndReturnArgs} args - Arguments to update many Admins.
     * @example
     * // Update many Admins
     * const admins = await prisma.admins.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Admins and only return the `id`
     * const adminsWithIdOnly = await prisma.admins.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AdminsUpdateManyAndReturnArgs>(args: SelectSubset<T, AdminsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Admins.
     * @param {AdminsUpsertArgs} args - Arguments to update or create a Admins.
     * @example
     * // Update or create a Admins
     * const admins = await prisma.admins.upsert({
     *   create: {
     *     // ... data to create a Admins
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Admins we want to update
     *   }
     * })
     */
    upsert<T extends AdminsUpsertArgs>(args: SelectSubset<T, AdminsUpsertArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsCountArgs} args - Arguments to filter Admins to count.
     * @example
     * // Count the number of Admins
     * const count = await prisma.admins.count({
     *   where: {
     *     // ... the filter for the Admins we want to count
     *   }
     * })
    **/
    count<T extends AdminsCountArgs>(
      args?: Subset<T, AdminsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AdminsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AdminsAggregateArgs>(args: Subset<T, AdminsAggregateArgs>): Prisma.PrismaPromise<GetAdminsAggregateType<T>>

    /**
     * Group by Admins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AdminsGroupByArgs} args - Group by arguments.
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
      T extends AdminsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AdminsGroupByArgs['orderBy'] }
        : { orderBy?: AdminsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AdminsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAdminsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Admins model
   */
  readonly fields: AdminsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Admins.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AdminsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    log_history<T extends Admins$log_historyArgs<ExtArgs> = {}>(args?: Subset<T, Admins$log_historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Log_HistoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    property<T extends Admins$propertyArgs<ExtArgs> = {}>(args?: Subset<T, Admins$propertyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    property_status_history<T extends Admins$property_status_historyArgs<ExtArgs> = {}>(args?: Subset<T, Admins$property_status_historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Property_Status_HistoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lost_found_reports<T extends Admins$lost_found_reportsArgs<ExtArgs> = {}>(args?: Subset<T, Admins$lost_found_reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Lost_Found_ReportsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Admins model
   */
  interface AdminsFieldRefs {
    readonly id: FieldRef<"Admins", 'String'>
    readonly adminId: FieldRef<"Admins", 'String'>
    readonly fullName: FieldRef<"Admins", 'String'>
    readonly email: FieldRef<"Admins", 'String'>
    readonly password: FieldRef<"Admins", 'String'>
    readonly phone: FieldRef<"Admins", 'String'>
    readonly role: FieldRef<"Admins", 'String'>
    readonly location: FieldRef<"Admins", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Admins findUnique
   */
  export type AdminsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminsInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where: AdminsWhereUniqueInput
  }

  /**
   * Admins findUniqueOrThrow
   */
  export type AdminsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminsInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where: AdminsWhereUniqueInput
  }

  /**
   * Admins findFirst
   */
  export type AdminsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminsInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminsOrderByWithRelationInput | AdminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[]
  }

  /**
   * Admins findFirstOrThrow
   */
  export type AdminsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminsInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminsOrderByWithRelationInput | AdminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Admins.
     */
    cursor?: AdminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Admins.
     */
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[]
  }

  /**
   * Admins findMany
   */
  export type AdminsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminsInclude<ExtArgs> | null
    /**
     * Filter, which Admins to fetch.
     */
    where?: AdminsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Admins to fetch.
     */
    orderBy?: AdminsOrderByWithRelationInput | AdminsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Admins.
     */
    cursor?: AdminsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Admins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Admins.
     */
    skip?: number
    distinct?: AdminsScalarFieldEnum | AdminsScalarFieldEnum[]
  }

  /**
   * Admins create
   */
  export type AdminsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminsInclude<ExtArgs> | null
    /**
     * The data needed to create a Admins.
     */
    data: XOR<AdminsCreateInput, AdminsUncheckedCreateInput>
  }

  /**
   * Admins createMany
   */
  export type AdminsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Admins.
     */
    data: AdminsCreateManyInput | AdminsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admins createManyAndReturn
   */
  export type AdminsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * The data used to create many Admins.
     */
    data: AdminsCreateManyInput | AdminsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Admins update
   */
  export type AdminsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminsInclude<ExtArgs> | null
    /**
     * The data needed to update a Admins.
     */
    data: XOR<AdminsUpdateInput, AdminsUncheckedUpdateInput>
    /**
     * Choose, which Admins to update.
     */
    where: AdminsWhereUniqueInput
  }

  /**
   * Admins updateMany
   */
  export type AdminsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminsUpdateManyMutationInput, AdminsUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminsWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admins updateManyAndReturn
   */
  export type AdminsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * The data used to update Admins.
     */
    data: XOR<AdminsUpdateManyMutationInput, AdminsUncheckedUpdateManyInput>
    /**
     * Filter which Admins to update
     */
    where?: AdminsWhereInput
    /**
     * Limit how many Admins to update.
     */
    limit?: number
  }

  /**
   * Admins upsert
   */
  export type AdminsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminsInclude<ExtArgs> | null
    /**
     * The filter to search for the Admins to update in case it exists.
     */
    where: AdminsWhereUniqueInput
    /**
     * In case the Admins found by the `where` argument doesn't exist, create a new Admins with this data.
     */
    create: XOR<AdminsCreateInput, AdminsUncheckedCreateInput>
    /**
     * In case the Admins was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AdminsUpdateInput, AdminsUncheckedUpdateInput>
  }

  /**
   * Admins delete
   */
  export type AdminsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminsInclude<ExtArgs> | null
    /**
     * Filter which Admins to delete.
     */
    where: AdminsWhereUniqueInput
  }

  /**
   * Admins deleteMany
   */
  export type AdminsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Admins to delete
     */
    where?: AdminsWhereInput
    /**
     * Limit how many Admins to delete.
     */
    limit?: number
  }

  /**
   * Admins.log_history
   */
  export type Admins$log_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log_Histories
     */
    select?: Log_HistoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log_Histories
     */
    omit?: Log_HistoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Log_HistoriesInclude<ExtArgs> | null
    where?: Log_HistoriesWhereInput
    orderBy?: Log_HistoriesOrderByWithRelationInput | Log_HistoriesOrderByWithRelationInput[]
    cursor?: Log_HistoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Log_HistoriesScalarFieldEnum | Log_HistoriesScalarFieldEnum[]
  }

  /**
   * Admins.property
   */
  export type Admins$propertyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Properties
     */
    select?: PropertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Properties
     */
    omit?: PropertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertiesInclude<ExtArgs> | null
    where?: PropertiesWhereInput
    orderBy?: PropertiesOrderByWithRelationInput | PropertiesOrderByWithRelationInput[]
    cursor?: PropertiesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PropertiesScalarFieldEnum | PropertiesScalarFieldEnum[]
  }

  /**
   * Admins.property_status_history
   */
  export type Admins$property_status_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property_Status_Histories
     */
    select?: Property_Status_HistoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property_Status_Histories
     */
    omit?: Property_Status_HistoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Property_Status_HistoriesInclude<ExtArgs> | null
    where?: Property_Status_HistoriesWhereInput
    orderBy?: Property_Status_HistoriesOrderByWithRelationInput | Property_Status_HistoriesOrderByWithRelationInput[]
    cursor?: Property_Status_HistoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Property_Status_HistoriesScalarFieldEnum | Property_Status_HistoriesScalarFieldEnum[]
  }

  /**
   * Admins.lost_found_reports
   */
  export type Admins$lost_found_reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lost_Found_Reports
     */
    select?: Lost_Found_ReportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lost_Found_Reports
     */
    omit?: Lost_Found_ReportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Lost_Found_ReportsInclude<ExtArgs> | null
    where?: Lost_Found_ReportsWhereInput
    orderBy?: Lost_Found_ReportsOrderByWithRelationInput | Lost_Found_ReportsOrderByWithRelationInput[]
    cursor?: Lost_Found_ReportsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Lost_Found_ReportsScalarFieldEnum | Lost_Found_ReportsScalarFieldEnum[]
  }

  /**
   * Admins without action
   */
  export type AdminsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Admins
     */
    select?: AdminsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Admins
     */
    omit?: AdminsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AdminsInclude<ExtArgs> | null
  }


  /**
   * Model Properties
   */

  export type AggregateProperties = {
    _count: PropertiesCountAggregateOutputType | null
    _min: PropertiesMinAggregateOutputType | null
    _max: PropertiesMaxAggregateOutputType | null
  }

  export type PropertiesMinAggregateOutputType = {
    id: string | null
    type: string | null
    title: string | null
    description: string | null
    serialNumber: string | null
    imageUrl: string | null
    status: string | null
    studId: string | null
    approvedBy: string | null
    createdAt: Date | null
  }

  export type PropertiesMaxAggregateOutputType = {
    id: string | null
    type: string | null
    title: string | null
    description: string | null
    serialNumber: string | null
    imageUrl: string | null
    status: string | null
    studId: string | null
    approvedBy: string | null
    createdAt: Date | null
  }

  export type PropertiesCountAggregateOutputType = {
    id: number
    type: number
    title: number
    description: number
    serialNumber: number
    imageUrl: number
    status: number
    studId: number
    approvedBy: number
    createdAt: number
    _all: number
  }


  export type PropertiesMinAggregateInputType = {
    id?: true
    type?: true
    title?: true
    description?: true
    serialNumber?: true
    imageUrl?: true
    status?: true
    studId?: true
    approvedBy?: true
    createdAt?: true
  }

  export type PropertiesMaxAggregateInputType = {
    id?: true
    type?: true
    title?: true
    description?: true
    serialNumber?: true
    imageUrl?: true
    status?: true
    studId?: true
    approvedBy?: true
    createdAt?: true
  }

  export type PropertiesCountAggregateInputType = {
    id?: true
    type?: true
    title?: true
    description?: true
    serialNumber?: true
    imageUrl?: true
    status?: true
    studId?: true
    approvedBy?: true
    createdAt?: true
    _all?: true
  }

  export type PropertiesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Properties to aggregate.
     */
    where?: PropertiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertiesOrderByWithRelationInput | PropertiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PropertiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Properties
    **/
    _count?: true | PropertiesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PropertiesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PropertiesMaxAggregateInputType
  }

  export type GetPropertiesAggregateType<T extends PropertiesAggregateArgs> = {
        [P in keyof T & keyof AggregateProperties]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperties[P]>
      : GetScalarType<T[P], AggregateProperties[P]>
  }




  export type PropertiesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PropertiesWhereInput
    orderBy?: PropertiesOrderByWithAggregationInput | PropertiesOrderByWithAggregationInput[]
    by: PropertiesScalarFieldEnum[] | PropertiesScalarFieldEnum
    having?: PropertiesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PropertiesCountAggregateInputType | true
    _min?: PropertiesMinAggregateInputType
    _max?: PropertiesMaxAggregateInputType
  }

  export type PropertiesGroupByOutputType = {
    id: string
    type: string
    title: string
    description: string
    serialNumber: string
    imageUrl: string | null
    status: string
    studId: string
    approvedBy: string
    createdAt: Date
    _count: PropertiesCountAggregateOutputType | null
    _min: PropertiesMinAggregateOutputType | null
    _max: PropertiesMaxAggregateOutputType | null
  }

  type GetPropertiesGroupByPayload<T extends PropertiesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PropertiesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PropertiesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PropertiesGroupByOutputType[P]>
            : GetScalarType<T[P], PropertiesGroupByOutputType[P]>
        }
      >
    >


  export type PropertiesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    serialNumber?: boolean
    imageUrl?: boolean
    status?: boolean
    studId?: boolean
    approvedBy?: boolean
    createdAt?: boolean
    student?: boolean | StudentsDefaultArgs<ExtArgs>
    admin?: boolean | AdminsDefaultArgs<ExtArgs>
    property_status_history?: boolean | Properties$property_status_historyArgs<ExtArgs>
    lost_found_reports?: boolean | Properties$lost_found_reportsArgs<ExtArgs>
    _count?: boolean | PropertiesCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["properties"]>

  export type PropertiesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    serialNumber?: boolean
    imageUrl?: boolean
    status?: boolean
    studId?: boolean
    approvedBy?: boolean
    createdAt?: boolean
    student?: boolean | StudentsDefaultArgs<ExtArgs>
    admin?: boolean | AdminsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["properties"]>

  export type PropertiesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    serialNumber?: boolean
    imageUrl?: boolean
    status?: boolean
    studId?: boolean
    approvedBy?: boolean
    createdAt?: boolean
    student?: boolean | StudentsDefaultArgs<ExtArgs>
    admin?: boolean | AdminsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["properties"]>

  export type PropertiesSelectScalar = {
    id?: boolean
    type?: boolean
    title?: boolean
    description?: boolean
    serialNumber?: boolean
    imageUrl?: boolean
    status?: boolean
    studId?: boolean
    approvedBy?: boolean
    createdAt?: boolean
  }

  export type PropertiesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "title" | "description" | "serialNumber" | "imageUrl" | "status" | "studId" | "approvedBy" | "createdAt", ExtArgs["result"]["properties"]>
  export type PropertiesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentsDefaultArgs<ExtArgs>
    admin?: boolean | AdminsDefaultArgs<ExtArgs>
    property_status_history?: boolean | Properties$property_status_historyArgs<ExtArgs>
    lost_found_reports?: boolean | Properties$lost_found_reportsArgs<ExtArgs>
    _count?: boolean | PropertiesCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PropertiesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentsDefaultArgs<ExtArgs>
    admin?: boolean | AdminsDefaultArgs<ExtArgs>
  }
  export type PropertiesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentsDefaultArgs<ExtArgs>
    admin?: boolean | AdminsDefaultArgs<ExtArgs>
  }

  export type $PropertiesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Properties"
    objects: {
      student: Prisma.$StudentsPayload<ExtArgs>
      admin: Prisma.$AdminsPayload<ExtArgs>
      property_status_history: Prisma.$Property_Status_HistoriesPayload<ExtArgs>[]
      lost_found_reports: Prisma.$Lost_Found_ReportsPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: string
      title: string
      description: string
      serialNumber: string
      imageUrl: string | null
      status: string
      studId: string
      approvedBy: string
      createdAt: Date
    }, ExtArgs["result"]["properties"]>
    composites: {}
  }

  type PropertiesGetPayload<S extends boolean | null | undefined | PropertiesDefaultArgs> = $Result.GetResult<Prisma.$PropertiesPayload, S>

  type PropertiesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PropertiesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PropertiesCountAggregateInputType | true
    }

  export interface PropertiesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Properties'], meta: { name: 'Properties' } }
    /**
     * Find zero or one Properties that matches the filter.
     * @param {PropertiesFindUniqueArgs} args - Arguments to find a Properties
     * @example
     * // Get one Properties
     * const properties = await prisma.properties.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PropertiesFindUniqueArgs>(args: SelectSubset<T, PropertiesFindUniqueArgs<ExtArgs>>): Prisma__PropertiesClient<$Result.GetResult<Prisma.$PropertiesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Properties that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PropertiesFindUniqueOrThrowArgs} args - Arguments to find a Properties
     * @example
     * // Get one Properties
     * const properties = await prisma.properties.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PropertiesFindUniqueOrThrowArgs>(args: SelectSubset<T, PropertiesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PropertiesClient<$Result.GetResult<Prisma.$PropertiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertiesFindFirstArgs} args - Arguments to find a Properties
     * @example
     * // Get one Properties
     * const properties = await prisma.properties.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PropertiesFindFirstArgs>(args?: SelectSubset<T, PropertiesFindFirstArgs<ExtArgs>>): Prisma__PropertiesClient<$Result.GetResult<Prisma.$PropertiesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Properties that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertiesFindFirstOrThrowArgs} args - Arguments to find a Properties
     * @example
     * // Get one Properties
     * const properties = await prisma.properties.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PropertiesFindFirstOrThrowArgs>(args?: SelectSubset<T, PropertiesFindFirstOrThrowArgs<ExtArgs>>): Prisma__PropertiesClient<$Result.GetResult<Prisma.$PropertiesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Properties that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertiesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Properties
     * const properties = await prisma.properties.findMany()
     * 
     * // Get first 10 Properties
     * const properties = await prisma.properties.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const propertiesWithIdOnly = await prisma.properties.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PropertiesFindManyArgs>(args?: SelectSubset<T, PropertiesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertiesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Properties.
     * @param {PropertiesCreateArgs} args - Arguments to create a Properties.
     * @example
     * // Create one Properties
     * const Properties = await prisma.properties.create({
     *   data: {
     *     // ... data to create a Properties
     *   }
     * })
     * 
     */
    create<T extends PropertiesCreateArgs>(args: SelectSubset<T, PropertiesCreateArgs<ExtArgs>>): Prisma__PropertiesClient<$Result.GetResult<Prisma.$PropertiesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Properties.
     * @param {PropertiesCreateManyArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const properties = await prisma.properties.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PropertiesCreateManyArgs>(args?: SelectSubset<T, PropertiesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Properties and returns the data saved in the database.
     * @param {PropertiesCreateManyAndReturnArgs} args - Arguments to create many Properties.
     * @example
     * // Create many Properties
     * const properties = await prisma.properties.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Properties and only return the `id`
     * const propertiesWithIdOnly = await prisma.properties.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PropertiesCreateManyAndReturnArgs>(args?: SelectSubset<T, PropertiesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertiesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Properties.
     * @param {PropertiesDeleteArgs} args - Arguments to delete one Properties.
     * @example
     * // Delete one Properties
     * const Properties = await prisma.properties.delete({
     *   where: {
     *     // ... filter to delete one Properties
     *   }
     * })
     * 
     */
    delete<T extends PropertiesDeleteArgs>(args: SelectSubset<T, PropertiesDeleteArgs<ExtArgs>>): Prisma__PropertiesClient<$Result.GetResult<Prisma.$PropertiesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Properties.
     * @param {PropertiesUpdateArgs} args - Arguments to update one Properties.
     * @example
     * // Update one Properties
     * const properties = await prisma.properties.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PropertiesUpdateArgs>(args: SelectSubset<T, PropertiesUpdateArgs<ExtArgs>>): Prisma__PropertiesClient<$Result.GetResult<Prisma.$PropertiesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Properties.
     * @param {PropertiesDeleteManyArgs} args - Arguments to filter Properties to delete.
     * @example
     * // Delete a few Properties
     * const { count } = await prisma.properties.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PropertiesDeleteManyArgs>(args?: SelectSubset<T, PropertiesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertiesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Properties
     * const properties = await prisma.properties.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PropertiesUpdateManyArgs>(args: SelectSubset<T, PropertiesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Properties and returns the data updated in the database.
     * @param {PropertiesUpdateManyAndReturnArgs} args - Arguments to update many Properties.
     * @example
     * // Update many Properties
     * const properties = await prisma.properties.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Properties and only return the `id`
     * const propertiesWithIdOnly = await prisma.properties.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PropertiesUpdateManyAndReturnArgs>(args: SelectSubset<T, PropertiesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PropertiesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Properties.
     * @param {PropertiesUpsertArgs} args - Arguments to update or create a Properties.
     * @example
     * // Update or create a Properties
     * const properties = await prisma.properties.upsert({
     *   create: {
     *     // ... data to create a Properties
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Properties we want to update
     *   }
     * })
     */
    upsert<T extends PropertiesUpsertArgs>(args: SelectSubset<T, PropertiesUpsertArgs<ExtArgs>>): Prisma__PropertiesClient<$Result.GetResult<Prisma.$PropertiesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertiesCountArgs} args - Arguments to filter Properties to count.
     * @example
     * // Count the number of Properties
     * const count = await prisma.properties.count({
     *   where: {
     *     // ... the filter for the Properties we want to count
     *   }
     * })
    **/
    count<T extends PropertiesCountArgs>(
      args?: Subset<T, PropertiesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PropertiesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertiesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PropertiesAggregateArgs>(args: Subset<T, PropertiesAggregateArgs>): Prisma.PrismaPromise<GetPropertiesAggregateType<T>>

    /**
     * Group by Properties.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PropertiesGroupByArgs} args - Group by arguments.
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
      T extends PropertiesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PropertiesGroupByArgs['orderBy'] }
        : { orderBy?: PropertiesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PropertiesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPropertiesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Properties model
   */
  readonly fields: PropertiesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Properties.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PropertiesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentsDefaultArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    admin<T extends AdminsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminsDefaultArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    property_status_history<T extends Properties$property_status_historyArgs<ExtArgs> = {}>(args?: Subset<T, Properties$property_status_historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Property_Status_HistoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    lost_found_reports<T extends Properties$lost_found_reportsArgs<ExtArgs> = {}>(args?: Subset<T, Properties$lost_found_reportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Lost_Found_ReportsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Properties model
   */
  interface PropertiesFieldRefs {
    readonly id: FieldRef<"Properties", 'String'>
    readonly type: FieldRef<"Properties", 'String'>
    readonly title: FieldRef<"Properties", 'String'>
    readonly description: FieldRef<"Properties", 'String'>
    readonly serialNumber: FieldRef<"Properties", 'String'>
    readonly imageUrl: FieldRef<"Properties", 'String'>
    readonly status: FieldRef<"Properties", 'String'>
    readonly studId: FieldRef<"Properties", 'String'>
    readonly approvedBy: FieldRef<"Properties", 'String'>
    readonly createdAt: FieldRef<"Properties", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Properties findUnique
   */
  export type PropertiesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Properties
     */
    select?: PropertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Properties
     */
    omit?: PropertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertiesInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where: PropertiesWhereUniqueInput
  }

  /**
   * Properties findUniqueOrThrow
   */
  export type PropertiesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Properties
     */
    select?: PropertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Properties
     */
    omit?: PropertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertiesInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where: PropertiesWhereUniqueInput
  }

  /**
   * Properties findFirst
   */
  export type PropertiesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Properties
     */
    select?: PropertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Properties
     */
    omit?: PropertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertiesInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where?: PropertiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertiesOrderByWithRelationInput | PropertiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertiesScalarFieldEnum | PropertiesScalarFieldEnum[]
  }

  /**
   * Properties findFirstOrThrow
   */
  export type PropertiesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Properties
     */
    select?: PropertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Properties
     */
    omit?: PropertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertiesInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where?: PropertiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertiesOrderByWithRelationInput | PropertiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Properties.
     */
    cursor?: PropertiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Properties.
     */
    distinct?: PropertiesScalarFieldEnum | PropertiesScalarFieldEnum[]
  }

  /**
   * Properties findMany
   */
  export type PropertiesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Properties
     */
    select?: PropertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Properties
     */
    omit?: PropertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertiesInclude<ExtArgs> | null
    /**
     * Filter, which Properties to fetch.
     */
    where?: PropertiesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Properties to fetch.
     */
    orderBy?: PropertiesOrderByWithRelationInput | PropertiesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Properties.
     */
    cursor?: PropertiesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Properties from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Properties.
     */
    skip?: number
    distinct?: PropertiesScalarFieldEnum | PropertiesScalarFieldEnum[]
  }

  /**
   * Properties create
   */
  export type PropertiesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Properties
     */
    select?: PropertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Properties
     */
    omit?: PropertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertiesInclude<ExtArgs> | null
    /**
     * The data needed to create a Properties.
     */
    data: XOR<PropertiesCreateInput, PropertiesUncheckedCreateInput>
  }

  /**
   * Properties createMany
   */
  export type PropertiesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Properties.
     */
    data: PropertiesCreateManyInput | PropertiesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Properties createManyAndReturn
   */
  export type PropertiesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Properties
     */
    select?: PropertiesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Properties
     */
    omit?: PropertiesOmit<ExtArgs> | null
    /**
     * The data used to create many Properties.
     */
    data: PropertiesCreateManyInput | PropertiesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertiesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Properties update
   */
  export type PropertiesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Properties
     */
    select?: PropertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Properties
     */
    omit?: PropertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertiesInclude<ExtArgs> | null
    /**
     * The data needed to update a Properties.
     */
    data: XOR<PropertiesUpdateInput, PropertiesUncheckedUpdateInput>
    /**
     * Choose, which Properties to update.
     */
    where: PropertiesWhereUniqueInput
  }

  /**
   * Properties updateMany
   */
  export type PropertiesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertiesUpdateManyMutationInput, PropertiesUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertiesWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
  }

  /**
   * Properties updateManyAndReturn
   */
  export type PropertiesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Properties
     */
    select?: PropertiesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Properties
     */
    omit?: PropertiesOmit<ExtArgs> | null
    /**
     * The data used to update Properties.
     */
    data: XOR<PropertiesUpdateManyMutationInput, PropertiesUncheckedUpdateManyInput>
    /**
     * Filter which Properties to update
     */
    where?: PropertiesWhereInput
    /**
     * Limit how many Properties to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertiesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Properties upsert
   */
  export type PropertiesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Properties
     */
    select?: PropertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Properties
     */
    omit?: PropertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertiesInclude<ExtArgs> | null
    /**
     * The filter to search for the Properties to update in case it exists.
     */
    where: PropertiesWhereUniqueInput
    /**
     * In case the Properties found by the `where` argument doesn't exist, create a new Properties with this data.
     */
    create: XOR<PropertiesCreateInput, PropertiesUncheckedCreateInput>
    /**
     * In case the Properties was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PropertiesUpdateInput, PropertiesUncheckedUpdateInput>
  }

  /**
   * Properties delete
   */
  export type PropertiesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Properties
     */
    select?: PropertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Properties
     */
    omit?: PropertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertiesInclude<ExtArgs> | null
    /**
     * Filter which Properties to delete.
     */
    where: PropertiesWhereUniqueInput
  }

  /**
   * Properties deleteMany
   */
  export type PropertiesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Properties to delete
     */
    where?: PropertiesWhereInput
    /**
     * Limit how many Properties to delete.
     */
    limit?: number
  }

  /**
   * Properties.property_status_history
   */
  export type Properties$property_status_historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property_Status_Histories
     */
    select?: Property_Status_HistoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property_Status_Histories
     */
    omit?: Property_Status_HistoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Property_Status_HistoriesInclude<ExtArgs> | null
    where?: Property_Status_HistoriesWhereInput
    orderBy?: Property_Status_HistoriesOrderByWithRelationInput | Property_Status_HistoriesOrderByWithRelationInput[]
    cursor?: Property_Status_HistoriesWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Property_Status_HistoriesScalarFieldEnum | Property_Status_HistoriesScalarFieldEnum[]
  }

  /**
   * Properties.lost_found_reports
   */
  export type Properties$lost_found_reportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lost_Found_Reports
     */
    select?: Lost_Found_ReportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lost_Found_Reports
     */
    omit?: Lost_Found_ReportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Lost_Found_ReportsInclude<ExtArgs> | null
    where?: Lost_Found_ReportsWhereInput
    orderBy?: Lost_Found_ReportsOrderByWithRelationInput | Lost_Found_ReportsOrderByWithRelationInput[]
    cursor?: Lost_Found_ReportsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Lost_Found_ReportsScalarFieldEnum | Lost_Found_ReportsScalarFieldEnum[]
  }

  /**
   * Properties without action
   */
  export type PropertiesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Properties
     */
    select?: PropertiesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Properties
     */
    omit?: PropertiesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PropertiesInclude<ExtArgs> | null
  }


  /**
   * Model Property_Status_Histories
   */

  export type AggregateProperty_Status_Histories = {
    _count: Property_Status_HistoriesCountAggregateOutputType | null
    _min: Property_Status_HistoriesMinAggregateOutputType | null
    _max: Property_Status_HistoriesMaxAggregateOutputType | null
  }

  export type Property_Status_HistoriesMinAggregateOutputType = {
    id: string | null
    propId: string | null
    updatedAt: Date | null
    description: string | null
    updateApprovedBy: string | null
  }

  export type Property_Status_HistoriesMaxAggregateOutputType = {
    id: string | null
    propId: string | null
    updatedAt: Date | null
    description: string | null
    updateApprovedBy: string | null
  }

  export type Property_Status_HistoriesCountAggregateOutputType = {
    id: number
    propId: number
    updatedAt: number
    description: number
    updateApprovedBy: number
    _all: number
  }


  export type Property_Status_HistoriesMinAggregateInputType = {
    id?: true
    propId?: true
    updatedAt?: true
    description?: true
    updateApprovedBy?: true
  }

  export type Property_Status_HistoriesMaxAggregateInputType = {
    id?: true
    propId?: true
    updatedAt?: true
    description?: true
    updateApprovedBy?: true
  }

  export type Property_Status_HistoriesCountAggregateInputType = {
    id?: true
    propId?: true
    updatedAt?: true
    description?: true
    updateApprovedBy?: true
    _all?: true
  }

  export type Property_Status_HistoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Property_Status_Histories to aggregate.
     */
    where?: Property_Status_HistoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Property_Status_Histories to fetch.
     */
    orderBy?: Property_Status_HistoriesOrderByWithRelationInput | Property_Status_HistoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Property_Status_HistoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Property_Status_Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Property_Status_Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Property_Status_Histories
    **/
    _count?: true | Property_Status_HistoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Property_Status_HistoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Property_Status_HistoriesMaxAggregateInputType
  }

  export type GetProperty_Status_HistoriesAggregateType<T extends Property_Status_HistoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateProperty_Status_Histories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProperty_Status_Histories[P]>
      : GetScalarType<T[P], AggregateProperty_Status_Histories[P]>
  }




  export type Property_Status_HistoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Property_Status_HistoriesWhereInput
    orderBy?: Property_Status_HistoriesOrderByWithAggregationInput | Property_Status_HistoriesOrderByWithAggregationInput[]
    by: Property_Status_HistoriesScalarFieldEnum[] | Property_Status_HistoriesScalarFieldEnum
    having?: Property_Status_HistoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Property_Status_HistoriesCountAggregateInputType | true
    _min?: Property_Status_HistoriesMinAggregateInputType
    _max?: Property_Status_HistoriesMaxAggregateInputType
  }

  export type Property_Status_HistoriesGroupByOutputType = {
    id: string
    propId: string
    updatedAt: Date
    description: string
    updateApprovedBy: string
    _count: Property_Status_HistoriesCountAggregateOutputType | null
    _min: Property_Status_HistoriesMinAggregateOutputType | null
    _max: Property_Status_HistoriesMaxAggregateOutputType | null
  }

  type GetProperty_Status_HistoriesGroupByPayload<T extends Property_Status_HistoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Property_Status_HistoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Property_Status_HistoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Property_Status_HistoriesGroupByOutputType[P]>
            : GetScalarType<T[P], Property_Status_HistoriesGroupByOutputType[P]>
        }
      >
    >


  export type Property_Status_HistoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propId?: boolean
    updatedAt?: boolean
    description?: boolean
    updateApprovedBy?: boolean
    property?: boolean | PropertiesDefaultArgs<ExtArgs>
    admin?: boolean | AdminsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property_Status_Histories"]>

  export type Property_Status_HistoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propId?: boolean
    updatedAt?: boolean
    description?: boolean
    updateApprovedBy?: boolean
    property?: boolean | PropertiesDefaultArgs<ExtArgs>
    admin?: boolean | AdminsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property_Status_Histories"]>

  export type Property_Status_HistoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propId?: boolean
    updatedAt?: boolean
    description?: boolean
    updateApprovedBy?: boolean
    property?: boolean | PropertiesDefaultArgs<ExtArgs>
    admin?: boolean | AdminsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["property_Status_Histories"]>

  export type Property_Status_HistoriesSelectScalar = {
    id?: boolean
    propId?: boolean
    updatedAt?: boolean
    description?: boolean
    updateApprovedBy?: boolean
  }

  export type Property_Status_HistoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propId" | "updatedAt" | "description" | "updateApprovedBy", ExtArgs["result"]["property_Status_Histories"]>
  export type Property_Status_HistoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertiesDefaultArgs<ExtArgs>
    admin?: boolean | AdminsDefaultArgs<ExtArgs>
  }
  export type Property_Status_HistoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertiesDefaultArgs<ExtArgs>
    admin?: boolean | AdminsDefaultArgs<ExtArgs>
  }
  export type Property_Status_HistoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertiesDefaultArgs<ExtArgs>
    admin?: boolean | AdminsDefaultArgs<ExtArgs>
  }

  export type $Property_Status_HistoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Property_Status_Histories"
    objects: {
      property: Prisma.$PropertiesPayload<ExtArgs>
      admin: Prisma.$AdminsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      propId: string
      updatedAt: Date
      description: string
      updateApprovedBy: string
    }, ExtArgs["result"]["property_Status_Histories"]>
    composites: {}
  }

  type Property_Status_HistoriesGetPayload<S extends boolean | null | undefined | Property_Status_HistoriesDefaultArgs> = $Result.GetResult<Prisma.$Property_Status_HistoriesPayload, S>

  type Property_Status_HistoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Property_Status_HistoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Property_Status_HistoriesCountAggregateInputType | true
    }

  export interface Property_Status_HistoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Property_Status_Histories'], meta: { name: 'Property_Status_Histories' } }
    /**
     * Find zero or one Property_Status_Histories that matches the filter.
     * @param {Property_Status_HistoriesFindUniqueArgs} args - Arguments to find a Property_Status_Histories
     * @example
     * // Get one Property_Status_Histories
     * const property_Status_Histories = await prisma.property_Status_Histories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Property_Status_HistoriesFindUniqueArgs>(args: SelectSubset<T, Property_Status_HistoriesFindUniqueArgs<ExtArgs>>): Prisma__Property_Status_HistoriesClient<$Result.GetResult<Prisma.$Property_Status_HistoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Property_Status_Histories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Property_Status_HistoriesFindUniqueOrThrowArgs} args - Arguments to find a Property_Status_Histories
     * @example
     * // Get one Property_Status_Histories
     * const property_Status_Histories = await prisma.property_Status_Histories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Property_Status_HistoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, Property_Status_HistoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Property_Status_HistoriesClient<$Result.GetResult<Prisma.$Property_Status_HistoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property_Status_Histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Property_Status_HistoriesFindFirstArgs} args - Arguments to find a Property_Status_Histories
     * @example
     * // Get one Property_Status_Histories
     * const property_Status_Histories = await prisma.property_Status_Histories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Property_Status_HistoriesFindFirstArgs>(args?: SelectSubset<T, Property_Status_HistoriesFindFirstArgs<ExtArgs>>): Prisma__Property_Status_HistoriesClient<$Result.GetResult<Prisma.$Property_Status_HistoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Property_Status_Histories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Property_Status_HistoriesFindFirstOrThrowArgs} args - Arguments to find a Property_Status_Histories
     * @example
     * // Get one Property_Status_Histories
     * const property_Status_Histories = await prisma.property_Status_Histories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Property_Status_HistoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, Property_Status_HistoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__Property_Status_HistoriesClient<$Result.GetResult<Prisma.$Property_Status_HistoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Property_Status_Histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Property_Status_HistoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Property_Status_Histories
     * const property_Status_Histories = await prisma.property_Status_Histories.findMany()
     * 
     * // Get first 10 Property_Status_Histories
     * const property_Status_Histories = await prisma.property_Status_Histories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const property_Status_HistoriesWithIdOnly = await prisma.property_Status_Histories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Property_Status_HistoriesFindManyArgs>(args?: SelectSubset<T, Property_Status_HistoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Property_Status_HistoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Property_Status_Histories.
     * @param {Property_Status_HistoriesCreateArgs} args - Arguments to create a Property_Status_Histories.
     * @example
     * // Create one Property_Status_Histories
     * const Property_Status_Histories = await prisma.property_Status_Histories.create({
     *   data: {
     *     // ... data to create a Property_Status_Histories
     *   }
     * })
     * 
     */
    create<T extends Property_Status_HistoriesCreateArgs>(args: SelectSubset<T, Property_Status_HistoriesCreateArgs<ExtArgs>>): Prisma__Property_Status_HistoriesClient<$Result.GetResult<Prisma.$Property_Status_HistoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Property_Status_Histories.
     * @param {Property_Status_HistoriesCreateManyArgs} args - Arguments to create many Property_Status_Histories.
     * @example
     * // Create many Property_Status_Histories
     * const property_Status_Histories = await prisma.property_Status_Histories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Property_Status_HistoriesCreateManyArgs>(args?: SelectSubset<T, Property_Status_HistoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Property_Status_Histories and returns the data saved in the database.
     * @param {Property_Status_HistoriesCreateManyAndReturnArgs} args - Arguments to create many Property_Status_Histories.
     * @example
     * // Create many Property_Status_Histories
     * const property_Status_Histories = await prisma.property_Status_Histories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Property_Status_Histories and only return the `id`
     * const property_Status_HistoriesWithIdOnly = await prisma.property_Status_Histories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Property_Status_HistoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, Property_Status_HistoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Property_Status_HistoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Property_Status_Histories.
     * @param {Property_Status_HistoriesDeleteArgs} args - Arguments to delete one Property_Status_Histories.
     * @example
     * // Delete one Property_Status_Histories
     * const Property_Status_Histories = await prisma.property_Status_Histories.delete({
     *   where: {
     *     // ... filter to delete one Property_Status_Histories
     *   }
     * })
     * 
     */
    delete<T extends Property_Status_HistoriesDeleteArgs>(args: SelectSubset<T, Property_Status_HistoriesDeleteArgs<ExtArgs>>): Prisma__Property_Status_HistoriesClient<$Result.GetResult<Prisma.$Property_Status_HistoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Property_Status_Histories.
     * @param {Property_Status_HistoriesUpdateArgs} args - Arguments to update one Property_Status_Histories.
     * @example
     * // Update one Property_Status_Histories
     * const property_Status_Histories = await prisma.property_Status_Histories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Property_Status_HistoriesUpdateArgs>(args: SelectSubset<T, Property_Status_HistoriesUpdateArgs<ExtArgs>>): Prisma__Property_Status_HistoriesClient<$Result.GetResult<Prisma.$Property_Status_HistoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Property_Status_Histories.
     * @param {Property_Status_HistoriesDeleteManyArgs} args - Arguments to filter Property_Status_Histories to delete.
     * @example
     * // Delete a few Property_Status_Histories
     * const { count } = await prisma.property_Status_Histories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Property_Status_HistoriesDeleteManyArgs>(args?: SelectSubset<T, Property_Status_HistoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Property_Status_Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Property_Status_HistoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Property_Status_Histories
     * const property_Status_Histories = await prisma.property_Status_Histories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Property_Status_HistoriesUpdateManyArgs>(args: SelectSubset<T, Property_Status_HistoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Property_Status_Histories and returns the data updated in the database.
     * @param {Property_Status_HistoriesUpdateManyAndReturnArgs} args - Arguments to update many Property_Status_Histories.
     * @example
     * // Update many Property_Status_Histories
     * const property_Status_Histories = await prisma.property_Status_Histories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Property_Status_Histories and only return the `id`
     * const property_Status_HistoriesWithIdOnly = await prisma.property_Status_Histories.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Property_Status_HistoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, Property_Status_HistoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Property_Status_HistoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Property_Status_Histories.
     * @param {Property_Status_HistoriesUpsertArgs} args - Arguments to update or create a Property_Status_Histories.
     * @example
     * // Update or create a Property_Status_Histories
     * const property_Status_Histories = await prisma.property_Status_Histories.upsert({
     *   create: {
     *     // ... data to create a Property_Status_Histories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Property_Status_Histories we want to update
     *   }
     * })
     */
    upsert<T extends Property_Status_HistoriesUpsertArgs>(args: SelectSubset<T, Property_Status_HistoriesUpsertArgs<ExtArgs>>): Prisma__Property_Status_HistoriesClient<$Result.GetResult<Prisma.$Property_Status_HistoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Property_Status_Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Property_Status_HistoriesCountArgs} args - Arguments to filter Property_Status_Histories to count.
     * @example
     * // Count the number of Property_Status_Histories
     * const count = await prisma.property_Status_Histories.count({
     *   where: {
     *     // ... the filter for the Property_Status_Histories we want to count
     *   }
     * })
    **/
    count<T extends Property_Status_HistoriesCountArgs>(
      args?: Subset<T, Property_Status_HistoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Property_Status_HistoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Property_Status_Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Property_Status_HistoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Property_Status_HistoriesAggregateArgs>(args: Subset<T, Property_Status_HistoriesAggregateArgs>): Prisma.PrismaPromise<GetProperty_Status_HistoriesAggregateType<T>>

    /**
     * Group by Property_Status_Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Property_Status_HistoriesGroupByArgs} args - Group by arguments.
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
      T extends Property_Status_HistoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Property_Status_HistoriesGroupByArgs['orderBy'] }
        : { orderBy?: Property_Status_HistoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Property_Status_HistoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProperty_Status_HistoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Property_Status_Histories model
   */
  readonly fields: Property_Status_HistoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Property_Status_Histories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Property_Status_HistoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertiesDefaultArgs<ExtArgs>>): Prisma__PropertiesClient<$Result.GetResult<Prisma.$PropertiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    admin<T extends AdminsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminsDefaultArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Property_Status_Histories model
   */
  interface Property_Status_HistoriesFieldRefs {
    readonly id: FieldRef<"Property_Status_Histories", 'String'>
    readonly propId: FieldRef<"Property_Status_Histories", 'String'>
    readonly updatedAt: FieldRef<"Property_Status_Histories", 'DateTime'>
    readonly description: FieldRef<"Property_Status_Histories", 'String'>
    readonly updateApprovedBy: FieldRef<"Property_Status_Histories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Property_Status_Histories findUnique
   */
  export type Property_Status_HistoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property_Status_Histories
     */
    select?: Property_Status_HistoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property_Status_Histories
     */
    omit?: Property_Status_HistoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Property_Status_HistoriesInclude<ExtArgs> | null
    /**
     * Filter, which Property_Status_Histories to fetch.
     */
    where: Property_Status_HistoriesWhereUniqueInput
  }

  /**
   * Property_Status_Histories findUniqueOrThrow
   */
  export type Property_Status_HistoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property_Status_Histories
     */
    select?: Property_Status_HistoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property_Status_Histories
     */
    omit?: Property_Status_HistoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Property_Status_HistoriesInclude<ExtArgs> | null
    /**
     * Filter, which Property_Status_Histories to fetch.
     */
    where: Property_Status_HistoriesWhereUniqueInput
  }

  /**
   * Property_Status_Histories findFirst
   */
  export type Property_Status_HistoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property_Status_Histories
     */
    select?: Property_Status_HistoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property_Status_Histories
     */
    omit?: Property_Status_HistoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Property_Status_HistoriesInclude<ExtArgs> | null
    /**
     * Filter, which Property_Status_Histories to fetch.
     */
    where?: Property_Status_HistoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Property_Status_Histories to fetch.
     */
    orderBy?: Property_Status_HistoriesOrderByWithRelationInput | Property_Status_HistoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Property_Status_Histories.
     */
    cursor?: Property_Status_HistoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Property_Status_Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Property_Status_Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Property_Status_Histories.
     */
    distinct?: Property_Status_HistoriesScalarFieldEnum | Property_Status_HistoriesScalarFieldEnum[]
  }

  /**
   * Property_Status_Histories findFirstOrThrow
   */
  export type Property_Status_HistoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property_Status_Histories
     */
    select?: Property_Status_HistoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property_Status_Histories
     */
    omit?: Property_Status_HistoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Property_Status_HistoriesInclude<ExtArgs> | null
    /**
     * Filter, which Property_Status_Histories to fetch.
     */
    where?: Property_Status_HistoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Property_Status_Histories to fetch.
     */
    orderBy?: Property_Status_HistoriesOrderByWithRelationInput | Property_Status_HistoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Property_Status_Histories.
     */
    cursor?: Property_Status_HistoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Property_Status_Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Property_Status_Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Property_Status_Histories.
     */
    distinct?: Property_Status_HistoriesScalarFieldEnum | Property_Status_HistoriesScalarFieldEnum[]
  }

  /**
   * Property_Status_Histories findMany
   */
  export type Property_Status_HistoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property_Status_Histories
     */
    select?: Property_Status_HistoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property_Status_Histories
     */
    omit?: Property_Status_HistoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Property_Status_HistoriesInclude<ExtArgs> | null
    /**
     * Filter, which Property_Status_Histories to fetch.
     */
    where?: Property_Status_HistoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Property_Status_Histories to fetch.
     */
    orderBy?: Property_Status_HistoriesOrderByWithRelationInput | Property_Status_HistoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Property_Status_Histories.
     */
    cursor?: Property_Status_HistoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Property_Status_Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Property_Status_Histories.
     */
    skip?: number
    distinct?: Property_Status_HistoriesScalarFieldEnum | Property_Status_HistoriesScalarFieldEnum[]
  }

  /**
   * Property_Status_Histories create
   */
  export type Property_Status_HistoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property_Status_Histories
     */
    select?: Property_Status_HistoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property_Status_Histories
     */
    omit?: Property_Status_HistoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Property_Status_HistoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Property_Status_Histories.
     */
    data: XOR<Property_Status_HistoriesCreateInput, Property_Status_HistoriesUncheckedCreateInput>
  }

  /**
   * Property_Status_Histories createMany
   */
  export type Property_Status_HistoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Property_Status_Histories.
     */
    data: Property_Status_HistoriesCreateManyInput | Property_Status_HistoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Property_Status_Histories createManyAndReturn
   */
  export type Property_Status_HistoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property_Status_Histories
     */
    select?: Property_Status_HistoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property_Status_Histories
     */
    omit?: Property_Status_HistoriesOmit<ExtArgs> | null
    /**
     * The data used to create many Property_Status_Histories.
     */
    data: Property_Status_HistoriesCreateManyInput | Property_Status_HistoriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Property_Status_HistoriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Property_Status_Histories update
   */
  export type Property_Status_HistoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property_Status_Histories
     */
    select?: Property_Status_HistoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property_Status_Histories
     */
    omit?: Property_Status_HistoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Property_Status_HistoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Property_Status_Histories.
     */
    data: XOR<Property_Status_HistoriesUpdateInput, Property_Status_HistoriesUncheckedUpdateInput>
    /**
     * Choose, which Property_Status_Histories to update.
     */
    where: Property_Status_HistoriesWhereUniqueInput
  }

  /**
   * Property_Status_Histories updateMany
   */
  export type Property_Status_HistoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Property_Status_Histories.
     */
    data: XOR<Property_Status_HistoriesUpdateManyMutationInput, Property_Status_HistoriesUncheckedUpdateManyInput>
    /**
     * Filter which Property_Status_Histories to update
     */
    where?: Property_Status_HistoriesWhereInput
    /**
     * Limit how many Property_Status_Histories to update.
     */
    limit?: number
  }

  /**
   * Property_Status_Histories updateManyAndReturn
   */
  export type Property_Status_HistoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property_Status_Histories
     */
    select?: Property_Status_HistoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Property_Status_Histories
     */
    omit?: Property_Status_HistoriesOmit<ExtArgs> | null
    /**
     * The data used to update Property_Status_Histories.
     */
    data: XOR<Property_Status_HistoriesUpdateManyMutationInput, Property_Status_HistoriesUncheckedUpdateManyInput>
    /**
     * Filter which Property_Status_Histories to update
     */
    where?: Property_Status_HistoriesWhereInput
    /**
     * Limit how many Property_Status_Histories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Property_Status_HistoriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Property_Status_Histories upsert
   */
  export type Property_Status_HistoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property_Status_Histories
     */
    select?: Property_Status_HistoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property_Status_Histories
     */
    omit?: Property_Status_HistoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Property_Status_HistoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Property_Status_Histories to update in case it exists.
     */
    where: Property_Status_HistoriesWhereUniqueInput
    /**
     * In case the Property_Status_Histories found by the `where` argument doesn't exist, create a new Property_Status_Histories with this data.
     */
    create: XOR<Property_Status_HistoriesCreateInput, Property_Status_HistoriesUncheckedCreateInput>
    /**
     * In case the Property_Status_Histories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Property_Status_HistoriesUpdateInput, Property_Status_HistoriesUncheckedUpdateInput>
  }

  /**
   * Property_Status_Histories delete
   */
  export type Property_Status_HistoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property_Status_Histories
     */
    select?: Property_Status_HistoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property_Status_Histories
     */
    omit?: Property_Status_HistoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Property_Status_HistoriesInclude<ExtArgs> | null
    /**
     * Filter which Property_Status_Histories to delete.
     */
    where: Property_Status_HistoriesWhereUniqueInput
  }

  /**
   * Property_Status_Histories deleteMany
   */
  export type Property_Status_HistoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Property_Status_Histories to delete
     */
    where?: Property_Status_HistoriesWhereInput
    /**
     * Limit how many Property_Status_Histories to delete.
     */
    limit?: number
  }

  /**
   * Property_Status_Histories without action
   */
  export type Property_Status_HistoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Property_Status_Histories
     */
    select?: Property_Status_HistoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Property_Status_Histories
     */
    omit?: Property_Status_HistoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Property_Status_HistoriesInclude<ExtArgs> | null
  }


  /**
   * Model Lost_Found_Reports
   */

  export type AggregateLost_Found_Reports = {
    _count: Lost_Found_ReportsCountAggregateOutputType | null
    _min: Lost_Found_ReportsMinAggregateOutputType | null
    _max: Lost_Found_ReportsMaxAggregateOutputType | null
  }

  export type Lost_Found_ReportsMinAggregateOutputType = {
    id: string | null
    propId: string | null
    studId: string | null
    reportType: string | null
    description: string | null
    reportDate: Date | null
    resolved: boolean | null
    examinedBy: string | null
  }

  export type Lost_Found_ReportsMaxAggregateOutputType = {
    id: string | null
    propId: string | null
    studId: string | null
    reportType: string | null
    description: string | null
    reportDate: Date | null
    resolved: boolean | null
    examinedBy: string | null
  }

  export type Lost_Found_ReportsCountAggregateOutputType = {
    id: number
    propId: number
    studId: number
    reportType: number
    description: number
    reportDate: number
    resolved: number
    examinedBy: number
    _all: number
  }


  export type Lost_Found_ReportsMinAggregateInputType = {
    id?: true
    propId?: true
    studId?: true
    reportType?: true
    description?: true
    reportDate?: true
    resolved?: true
    examinedBy?: true
  }

  export type Lost_Found_ReportsMaxAggregateInputType = {
    id?: true
    propId?: true
    studId?: true
    reportType?: true
    description?: true
    reportDate?: true
    resolved?: true
    examinedBy?: true
  }

  export type Lost_Found_ReportsCountAggregateInputType = {
    id?: true
    propId?: true
    studId?: true
    reportType?: true
    description?: true
    reportDate?: true
    resolved?: true
    examinedBy?: true
    _all?: true
  }

  export type Lost_Found_ReportsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lost_Found_Reports to aggregate.
     */
    where?: Lost_Found_ReportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lost_Found_Reports to fetch.
     */
    orderBy?: Lost_Found_ReportsOrderByWithRelationInput | Lost_Found_ReportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Lost_Found_ReportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lost_Found_Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lost_Found_Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Lost_Found_Reports
    **/
    _count?: true | Lost_Found_ReportsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Lost_Found_ReportsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Lost_Found_ReportsMaxAggregateInputType
  }

  export type GetLost_Found_ReportsAggregateType<T extends Lost_Found_ReportsAggregateArgs> = {
        [P in keyof T & keyof AggregateLost_Found_Reports]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLost_Found_Reports[P]>
      : GetScalarType<T[P], AggregateLost_Found_Reports[P]>
  }




  export type Lost_Found_ReportsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Lost_Found_ReportsWhereInput
    orderBy?: Lost_Found_ReportsOrderByWithAggregationInput | Lost_Found_ReportsOrderByWithAggregationInput[]
    by: Lost_Found_ReportsScalarFieldEnum[] | Lost_Found_ReportsScalarFieldEnum
    having?: Lost_Found_ReportsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Lost_Found_ReportsCountAggregateInputType | true
    _min?: Lost_Found_ReportsMinAggregateInputType
    _max?: Lost_Found_ReportsMaxAggregateInputType
  }

  export type Lost_Found_ReportsGroupByOutputType = {
    id: string
    propId: string
    studId: string
    reportType: string
    description: string
    reportDate: Date
    resolved: boolean
    examinedBy: string
    _count: Lost_Found_ReportsCountAggregateOutputType | null
    _min: Lost_Found_ReportsMinAggregateOutputType | null
    _max: Lost_Found_ReportsMaxAggregateOutputType | null
  }

  type GetLost_Found_ReportsGroupByPayload<T extends Lost_Found_ReportsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Lost_Found_ReportsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Lost_Found_ReportsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Lost_Found_ReportsGroupByOutputType[P]>
            : GetScalarType<T[P], Lost_Found_ReportsGroupByOutputType[P]>
        }
      >
    >


  export type Lost_Found_ReportsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propId?: boolean
    studId?: boolean
    reportType?: boolean
    description?: boolean
    reportDate?: boolean
    resolved?: boolean
    examinedBy?: boolean
    property?: boolean | PropertiesDefaultArgs<ExtArgs>
    student?: boolean | StudentsDefaultArgs<ExtArgs>
    admin?: boolean | AdminsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lost_Found_Reports"]>

  export type Lost_Found_ReportsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propId?: boolean
    studId?: boolean
    reportType?: boolean
    description?: boolean
    reportDate?: boolean
    resolved?: boolean
    examinedBy?: boolean
    property?: boolean | PropertiesDefaultArgs<ExtArgs>
    student?: boolean | StudentsDefaultArgs<ExtArgs>
    admin?: boolean | AdminsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lost_Found_Reports"]>

  export type Lost_Found_ReportsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    propId?: boolean
    studId?: boolean
    reportType?: boolean
    description?: boolean
    reportDate?: boolean
    resolved?: boolean
    examinedBy?: boolean
    property?: boolean | PropertiesDefaultArgs<ExtArgs>
    student?: boolean | StudentsDefaultArgs<ExtArgs>
    admin?: boolean | AdminsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["lost_Found_Reports"]>

  export type Lost_Found_ReportsSelectScalar = {
    id?: boolean
    propId?: boolean
    studId?: boolean
    reportType?: boolean
    description?: boolean
    reportDate?: boolean
    resolved?: boolean
    examinedBy?: boolean
  }

  export type Lost_Found_ReportsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "propId" | "studId" | "reportType" | "description" | "reportDate" | "resolved" | "examinedBy", ExtArgs["result"]["lost_Found_Reports"]>
  export type Lost_Found_ReportsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertiesDefaultArgs<ExtArgs>
    student?: boolean | StudentsDefaultArgs<ExtArgs>
    admin?: boolean | AdminsDefaultArgs<ExtArgs>
  }
  export type Lost_Found_ReportsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertiesDefaultArgs<ExtArgs>
    student?: boolean | StudentsDefaultArgs<ExtArgs>
    admin?: boolean | AdminsDefaultArgs<ExtArgs>
  }
  export type Lost_Found_ReportsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    property?: boolean | PropertiesDefaultArgs<ExtArgs>
    student?: boolean | StudentsDefaultArgs<ExtArgs>
    admin?: boolean | AdminsDefaultArgs<ExtArgs>
  }

  export type $Lost_Found_ReportsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Lost_Found_Reports"
    objects: {
      property: Prisma.$PropertiesPayload<ExtArgs>
      student: Prisma.$StudentsPayload<ExtArgs>
      admin: Prisma.$AdminsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      propId: string
      studId: string
      reportType: string
      description: string
      reportDate: Date
      resolved: boolean
      examinedBy: string
    }, ExtArgs["result"]["lost_Found_Reports"]>
    composites: {}
  }

  type Lost_Found_ReportsGetPayload<S extends boolean | null | undefined | Lost_Found_ReportsDefaultArgs> = $Result.GetResult<Prisma.$Lost_Found_ReportsPayload, S>

  type Lost_Found_ReportsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Lost_Found_ReportsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Lost_Found_ReportsCountAggregateInputType | true
    }

  export interface Lost_Found_ReportsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Lost_Found_Reports'], meta: { name: 'Lost_Found_Reports' } }
    /**
     * Find zero or one Lost_Found_Reports that matches the filter.
     * @param {Lost_Found_ReportsFindUniqueArgs} args - Arguments to find a Lost_Found_Reports
     * @example
     * // Get one Lost_Found_Reports
     * const lost_Found_Reports = await prisma.lost_Found_Reports.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Lost_Found_ReportsFindUniqueArgs>(args: SelectSubset<T, Lost_Found_ReportsFindUniqueArgs<ExtArgs>>): Prisma__Lost_Found_ReportsClient<$Result.GetResult<Prisma.$Lost_Found_ReportsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Lost_Found_Reports that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Lost_Found_ReportsFindUniqueOrThrowArgs} args - Arguments to find a Lost_Found_Reports
     * @example
     * // Get one Lost_Found_Reports
     * const lost_Found_Reports = await prisma.lost_Found_Reports.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Lost_Found_ReportsFindUniqueOrThrowArgs>(args: SelectSubset<T, Lost_Found_ReportsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Lost_Found_ReportsClient<$Result.GetResult<Prisma.$Lost_Found_ReportsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lost_Found_Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lost_Found_ReportsFindFirstArgs} args - Arguments to find a Lost_Found_Reports
     * @example
     * // Get one Lost_Found_Reports
     * const lost_Found_Reports = await prisma.lost_Found_Reports.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Lost_Found_ReportsFindFirstArgs>(args?: SelectSubset<T, Lost_Found_ReportsFindFirstArgs<ExtArgs>>): Prisma__Lost_Found_ReportsClient<$Result.GetResult<Prisma.$Lost_Found_ReportsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Lost_Found_Reports that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lost_Found_ReportsFindFirstOrThrowArgs} args - Arguments to find a Lost_Found_Reports
     * @example
     * // Get one Lost_Found_Reports
     * const lost_Found_Reports = await prisma.lost_Found_Reports.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Lost_Found_ReportsFindFirstOrThrowArgs>(args?: SelectSubset<T, Lost_Found_ReportsFindFirstOrThrowArgs<ExtArgs>>): Prisma__Lost_Found_ReportsClient<$Result.GetResult<Prisma.$Lost_Found_ReportsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Lost_Found_Reports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lost_Found_ReportsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Lost_Found_Reports
     * const lost_Found_Reports = await prisma.lost_Found_Reports.findMany()
     * 
     * // Get first 10 Lost_Found_Reports
     * const lost_Found_Reports = await prisma.lost_Found_Reports.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const lost_Found_ReportsWithIdOnly = await prisma.lost_Found_Reports.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Lost_Found_ReportsFindManyArgs>(args?: SelectSubset<T, Lost_Found_ReportsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Lost_Found_ReportsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Lost_Found_Reports.
     * @param {Lost_Found_ReportsCreateArgs} args - Arguments to create a Lost_Found_Reports.
     * @example
     * // Create one Lost_Found_Reports
     * const Lost_Found_Reports = await prisma.lost_Found_Reports.create({
     *   data: {
     *     // ... data to create a Lost_Found_Reports
     *   }
     * })
     * 
     */
    create<T extends Lost_Found_ReportsCreateArgs>(args: SelectSubset<T, Lost_Found_ReportsCreateArgs<ExtArgs>>): Prisma__Lost_Found_ReportsClient<$Result.GetResult<Prisma.$Lost_Found_ReportsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Lost_Found_Reports.
     * @param {Lost_Found_ReportsCreateManyArgs} args - Arguments to create many Lost_Found_Reports.
     * @example
     * // Create many Lost_Found_Reports
     * const lost_Found_Reports = await prisma.lost_Found_Reports.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Lost_Found_ReportsCreateManyArgs>(args?: SelectSubset<T, Lost_Found_ReportsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Lost_Found_Reports and returns the data saved in the database.
     * @param {Lost_Found_ReportsCreateManyAndReturnArgs} args - Arguments to create many Lost_Found_Reports.
     * @example
     * // Create many Lost_Found_Reports
     * const lost_Found_Reports = await prisma.lost_Found_Reports.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Lost_Found_Reports and only return the `id`
     * const lost_Found_ReportsWithIdOnly = await prisma.lost_Found_Reports.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Lost_Found_ReportsCreateManyAndReturnArgs>(args?: SelectSubset<T, Lost_Found_ReportsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Lost_Found_ReportsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Lost_Found_Reports.
     * @param {Lost_Found_ReportsDeleteArgs} args - Arguments to delete one Lost_Found_Reports.
     * @example
     * // Delete one Lost_Found_Reports
     * const Lost_Found_Reports = await prisma.lost_Found_Reports.delete({
     *   where: {
     *     // ... filter to delete one Lost_Found_Reports
     *   }
     * })
     * 
     */
    delete<T extends Lost_Found_ReportsDeleteArgs>(args: SelectSubset<T, Lost_Found_ReportsDeleteArgs<ExtArgs>>): Prisma__Lost_Found_ReportsClient<$Result.GetResult<Prisma.$Lost_Found_ReportsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Lost_Found_Reports.
     * @param {Lost_Found_ReportsUpdateArgs} args - Arguments to update one Lost_Found_Reports.
     * @example
     * // Update one Lost_Found_Reports
     * const lost_Found_Reports = await prisma.lost_Found_Reports.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Lost_Found_ReportsUpdateArgs>(args: SelectSubset<T, Lost_Found_ReportsUpdateArgs<ExtArgs>>): Prisma__Lost_Found_ReportsClient<$Result.GetResult<Prisma.$Lost_Found_ReportsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Lost_Found_Reports.
     * @param {Lost_Found_ReportsDeleteManyArgs} args - Arguments to filter Lost_Found_Reports to delete.
     * @example
     * // Delete a few Lost_Found_Reports
     * const { count } = await prisma.lost_Found_Reports.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Lost_Found_ReportsDeleteManyArgs>(args?: SelectSubset<T, Lost_Found_ReportsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lost_Found_Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lost_Found_ReportsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Lost_Found_Reports
     * const lost_Found_Reports = await prisma.lost_Found_Reports.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Lost_Found_ReportsUpdateManyArgs>(args: SelectSubset<T, Lost_Found_ReportsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Lost_Found_Reports and returns the data updated in the database.
     * @param {Lost_Found_ReportsUpdateManyAndReturnArgs} args - Arguments to update many Lost_Found_Reports.
     * @example
     * // Update many Lost_Found_Reports
     * const lost_Found_Reports = await prisma.lost_Found_Reports.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Lost_Found_Reports and only return the `id`
     * const lost_Found_ReportsWithIdOnly = await prisma.lost_Found_Reports.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Lost_Found_ReportsUpdateManyAndReturnArgs>(args: SelectSubset<T, Lost_Found_ReportsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Lost_Found_ReportsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Lost_Found_Reports.
     * @param {Lost_Found_ReportsUpsertArgs} args - Arguments to update or create a Lost_Found_Reports.
     * @example
     * // Update or create a Lost_Found_Reports
     * const lost_Found_Reports = await prisma.lost_Found_Reports.upsert({
     *   create: {
     *     // ... data to create a Lost_Found_Reports
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Lost_Found_Reports we want to update
     *   }
     * })
     */
    upsert<T extends Lost_Found_ReportsUpsertArgs>(args: SelectSubset<T, Lost_Found_ReportsUpsertArgs<ExtArgs>>): Prisma__Lost_Found_ReportsClient<$Result.GetResult<Prisma.$Lost_Found_ReportsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Lost_Found_Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lost_Found_ReportsCountArgs} args - Arguments to filter Lost_Found_Reports to count.
     * @example
     * // Count the number of Lost_Found_Reports
     * const count = await prisma.lost_Found_Reports.count({
     *   where: {
     *     // ... the filter for the Lost_Found_Reports we want to count
     *   }
     * })
    **/
    count<T extends Lost_Found_ReportsCountArgs>(
      args?: Subset<T, Lost_Found_ReportsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Lost_Found_ReportsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Lost_Found_Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lost_Found_ReportsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Lost_Found_ReportsAggregateArgs>(args: Subset<T, Lost_Found_ReportsAggregateArgs>): Prisma.PrismaPromise<GetLost_Found_ReportsAggregateType<T>>

    /**
     * Group by Lost_Found_Reports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Lost_Found_ReportsGroupByArgs} args - Group by arguments.
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
      T extends Lost_Found_ReportsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Lost_Found_ReportsGroupByArgs['orderBy'] }
        : { orderBy?: Lost_Found_ReportsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Lost_Found_ReportsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLost_Found_ReportsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Lost_Found_Reports model
   */
  readonly fields: Lost_Found_ReportsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Lost_Found_Reports.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Lost_Found_ReportsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    property<T extends PropertiesDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PropertiesDefaultArgs<ExtArgs>>): Prisma__PropertiesClient<$Result.GetResult<Prisma.$PropertiesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    student<T extends StudentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentsDefaultArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    admin<T extends AdminsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminsDefaultArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Lost_Found_Reports model
   */
  interface Lost_Found_ReportsFieldRefs {
    readonly id: FieldRef<"Lost_Found_Reports", 'String'>
    readonly propId: FieldRef<"Lost_Found_Reports", 'String'>
    readonly studId: FieldRef<"Lost_Found_Reports", 'String'>
    readonly reportType: FieldRef<"Lost_Found_Reports", 'String'>
    readonly description: FieldRef<"Lost_Found_Reports", 'String'>
    readonly reportDate: FieldRef<"Lost_Found_Reports", 'DateTime'>
    readonly resolved: FieldRef<"Lost_Found_Reports", 'Boolean'>
    readonly examinedBy: FieldRef<"Lost_Found_Reports", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Lost_Found_Reports findUnique
   */
  export type Lost_Found_ReportsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lost_Found_Reports
     */
    select?: Lost_Found_ReportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lost_Found_Reports
     */
    omit?: Lost_Found_ReportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Lost_Found_ReportsInclude<ExtArgs> | null
    /**
     * Filter, which Lost_Found_Reports to fetch.
     */
    where: Lost_Found_ReportsWhereUniqueInput
  }

  /**
   * Lost_Found_Reports findUniqueOrThrow
   */
  export type Lost_Found_ReportsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lost_Found_Reports
     */
    select?: Lost_Found_ReportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lost_Found_Reports
     */
    omit?: Lost_Found_ReportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Lost_Found_ReportsInclude<ExtArgs> | null
    /**
     * Filter, which Lost_Found_Reports to fetch.
     */
    where: Lost_Found_ReportsWhereUniqueInput
  }

  /**
   * Lost_Found_Reports findFirst
   */
  export type Lost_Found_ReportsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lost_Found_Reports
     */
    select?: Lost_Found_ReportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lost_Found_Reports
     */
    omit?: Lost_Found_ReportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Lost_Found_ReportsInclude<ExtArgs> | null
    /**
     * Filter, which Lost_Found_Reports to fetch.
     */
    where?: Lost_Found_ReportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lost_Found_Reports to fetch.
     */
    orderBy?: Lost_Found_ReportsOrderByWithRelationInput | Lost_Found_ReportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lost_Found_Reports.
     */
    cursor?: Lost_Found_ReportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lost_Found_Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lost_Found_Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lost_Found_Reports.
     */
    distinct?: Lost_Found_ReportsScalarFieldEnum | Lost_Found_ReportsScalarFieldEnum[]
  }

  /**
   * Lost_Found_Reports findFirstOrThrow
   */
  export type Lost_Found_ReportsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lost_Found_Reports
     */
    select?: Lost_Found_ReportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lost_Found_Reports
     */
    omit?: Lost_Found_ReportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Lost_Found_ReportsInclude<ExtArgs> | null
    /**
     * Filter, which Lost_Found_Reports to fetch.
     */
    where?: Lost_Found_ReportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lost_Found_Reports to fetch.
     */
    orderBy?: Lost_Found_ReportsOrderByWithRelationInput | Lost_Found_ReportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Lost_Found_Reports.
     */
    cursor?: Lost_Found_ReportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lost_Found_Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lost_Found_Reports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Lost_Found_Reports.
     */
    distinct?: Lost_Found_ReportsScalarFieldEnum | Lost_Found_ReportsScalarFieldEnum[]
  }

  /**
   * Lost_Found_Reports findMany
   */
  export type Lost_Found_ReportsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lost_Found_Reports
     */
    select?: Lost_Found_ReportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lost_Found_Reports
     */
    omit?: Lost_Found_ReportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Lost_Found_ReportsInclude<ExtArgs> | null
    /**
     * Filter, which Lost_Found_Reports to fetch.
     */
    where?: Lost_Found_ReportsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Lost_Found_Reports to fetch.
     */
    orderBy?: Lost_Found_ReportsOrderByWithRelationInput | Lost_Found_ReportsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Lost_Found_Reports.
     */
    cursor?: Lost_Found_ReportsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Lost_Found_Reports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Lost_Found_Reports.
     */
    skip?: number
    distinct?: Lost_Found_ReportsScalarFieldEnum | Lost_Found_ReportsScalarFieldEnum[]
  }

  /**
   * Lost_Found_Reports create
   */
  export type Lost_Found_ReportsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lost_Found_Reports
     */
    select?: Lost_Found_ReportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lost_Found_Reports
     */
    omit?: Lost_Found_ReportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Lost_Found_ReportsInclude<ExtArgs> | null
    /**
     * The data needed to create a Lost_Found_Reports.
     */
    data: XOR<Lost_Found_ReportsCreateInput, Lost_Found_ReportsUncheckedCreateInput>
  }

  /**
   * Lost_Found_Reports createMany
   */
  export type Lost_Found_ReportsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Lost_Found_Reports.
     */
    data: Lost_Found_ReportsCreateManyInput | Lost_Found_ReportsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Lost_Found_Reports createManyAndReturn
   */
  export type Lost_Found_ReportsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lost_Found_Reports
     */
    select?: Lost_Found_ReportsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lost_Found_Reports
     */
    omit?: Lost_Found_ReportsOmit<ExtArgs> | null
    /**
     * The data used to create many Lost_Found_Reports.
     */
    data: Lost_Found_ReportsCreateManyInput | Lost_Found_ReportsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Lost_Found_ReportsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lost_Found_Reports update
   */
  export type Lost_Found_ReportsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lost_Found_Reports
     */
    select?: Lost_Found_ReportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lost_Found_Reports
     */
    omit?: Lost_Found_ReportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Lost_Found_ReportsInclude<ExtArgs> | null
    /**
     * The data needed to update a Lost_Found_Reports.
     */
    data: XOR<Lost_Found_ReportsUpdateInput, Lost_Found_ReportsUncheckedUpdateInput>
    /**
     * Choose, which Lost_Found_Reports to update.
     */
    where: Lost_Found_ReportsWhereUniqueInput
  }

  /**
   * Lost_Found_Reports updateMany
   */
  export type Lost_Found_ReportsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Lost_Found_Reports.
     */
    data: XOR<Lost_Found_ReportsUpdateManyMutationInput, Lost_Found_ReportsUncheckedUpdateManyInput>
    /**
     * Filter which Lost_Found_Reports to update
     */
    where?: Lost_Found_ReportsWhereInput
    /**
     * Limit how many Lost_Found_Reports to update.
     */
    limit?: number
  }

  /**
   * Lost_Found_Reports updateManyAndReturn
   */
  export type Lost_Found_ReportsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lost_Found_Reports
     */
    select?: Lost_Found_ReportsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Lost_Found_Reports
     */
    omit?: Lost_Found_ReportsOmit<ExtArgs> | null
    /**
     * The data used to update Lost_Found_Reports.
     */
    data: XOR<Lost_Found_ReportsUpdateManyMutationInput, Lost_Found_ReportsUncheckedUpdateManyInput>
    /**
     * Filter which Lost_Found_Reports to update
     */
    where?: Lost_Found_ReportsWhereInput
    /**
     * Limit how many Lost_Found_Reports to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Lost_Found_ReportsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Lost_Found_Reports upsert
   */
  export type Lost_Found_ReportsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lost_Found_Reports
     */
    select?: Lost_Found_ReportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lost_Found_Reports
     */
    omit?: Lost_Found_ReportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Lost_Found_ReportsInclude<ExtArgs> | null
    /**
     * The filter to search for the Lost_Found_Reports to update in case it exists.
     */
    where: Lost_Found_ReportsWhereUniqueInput
    /**
     * In case the Lost_Found_Reports found by the `where` argument doesn't exist, create a new Lost_Found_Reports with this data.
     */
    create: XOR<Lost_Found_ReportsCreateInput, Lost_Found_ReportsUncheckedCreateInput>
    /**
     * In case the Lost_Found_Reports was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Lost_Found_ReportsUpdateInput, Lost_Found_ReportsUncheckedUpdateInput>
  }

  /**
   * Lost_Found_Reports delete
   */
  export type Lost_Found_ReportsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lost_Found_Reports
     */
    select?: Lost_Found_ReportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lost_Found_Reports
     */
    omit?: Lost_Found_ReportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Lost_Found_ReportsInclude<ExtArgs> | null
    /**
     * Filter which Lost_Found_Reports to delete.
     */
    where: Lost_Found_ReportsWhereUniqueInput
  }

  /**
   * Lost_Found_Reports deleteMany
   */
  export type Lost_Found_ReportsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Lost_Found_Reports to delete
     */
    where?: Lost_Found_ReportsWhereInput
    /**
     * Limit how many Lost_Found_Reports to delete.
     */
    limit?: number
  }

  /**
   * Lost_Found_Reports without action
   */
  export type Lost_Found_ReportsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Lost_Found_Reports
     */
    select?: Lost_Found_ReportsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Lost_Found_Reports
     */
    omit?: Lost_Found_ReportsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Lost_Found_ReportsInclude<ExtArgs> | null
  }


  /**
   * Model Log_Histories
   */

  export type AggregateLog_Histories = {
    _count: Log_HistoriesCountAggregateOutputType | null
    _min: Log_HistoriesMinAggregateOutputType | null
    _max: Log_HistoriesMaxAggregateOutputType | null
  }

  export type Log_HistoriesMinAggregateOutputType = {
    id: string | null
    studId: string | null
    adminId: string | null
    role: string | null
    createdAt: string | null
  }

  export type Log_HistoriesMaxAggregateOutputType = {
    id: string | null
    studId: string | null
    adminId: string | null
    role: string | null
    createdAt: string | null
  }

  export type Log_HistoriesCountAggregateOutputType = {
    id: number
    studId: number
    adminId: number
    role: number
    createdAt: number
    _all: number
  }


  export type Log_HistoriesMinAggregateInputType = {
    id?: true
    studId?: true
    adminId?: true
    role?: true
    createdAt?: true
  }

  export type Log_HistoriesMaxAggregateInputType = {
    id?: true
    studId?: true
    adminId?: true
    role?: true
    createdAt?: true
  }

  export type Log_HistoriesCountAggregateInputType = {
    id?: true
    studId?: true
    adminId?: true
    role?: true
    createdAt?: true
    _all?: true
  }

  export type Log_HistoriesAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Log_Histories to aggregate.
     */
    where?: Log_HistoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Log_Histories to fetch.
     */
    orderBy?: Log_HistoriesOrderByWithRelationInput | Log_HistoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: Log_HistoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Log_Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Log_Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Log_Histories
    **/
    _count?: true | Log_HistoriesCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: Log_HistoriesMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: Log_HistoriesMaxAggregateInputType
  }

  export type GetLog_HistoriesAggregateType<T extends Log_HistoriesAggregateArgs> = {
        [P in keyof T & keyof AggregateLog_Histories]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLog_Histories[P]>
      : GetScalarType<T[P], AggregateLog_Histories[P]>
  }




  export type Log_HistoriesGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: Log_HistoriesWhereInput
    orderBy?: Log_HistoriesOrderByWithAggregationInput | Log_HistoriesOrderByWithAggregationInput[]
    by: Log_HistoriesScalarFieldEnum[] | Log_HistoriesScalarFieldEnum
    having?: Log_HistoriesScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: Log_HistoriesCountAggregateInputType | true
    _min?: Log_HistoriesMinAggregateInputType
    _max?: Log_HistoriesMaxAggregateInputType
  }

  export type Log_HistoriesGroupByOutputType = {
    id: string
    studId: string
    adminId: string
    role: string
    createdAt: string
    _count: Log_HistoriesCountAggregateOutputType | null
    _min: Log_HistoriesMinAggregateOutputType | null
    _max: Log_HistoriesMaxAggregateOutputType | null
  }

  type GetLog_HistoriesGroupByPayload<T extends Log_HistoriesGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<Log_HistoriesGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof Log_HistoriesGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], Log_HistoriesGroupByOutputType[P]>
            : GetScalarType<T[P], Log_HistoriesGroupByOutputType[P]>
        }
      >
    >


  export type Log_HistoriesSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studId?: boolean
    adminId?: boolean
    role?: boolean
    createdAt?: boolean
    student?: boolean | StudentsDefaultArgs<ExtArgs>
    admin?: boolean | AdminsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["log_Histories"]>

  export type Log_HistoriesSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studId?: boolean
    adminId?: boolean
    role?: boolean
    createdAt?: boolean
    student?: boolean | StudentsDefaultArgs<ExtArgs>
    admin?: boolean | AdminsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["log_Histories"]>

  export type Log_HistoriesSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    studId?: boolean
    adminId?: boolean
    role?: boolean
    createdAt?: boolean
    student?: boolean | StudentsDefaultArgs<ExtArgs>
    admin?: boolean | AdminsDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["log_Histories"]>

  export type Log_HistoriesSelectScalar = {
    id?: boolean
    studId?: boolean
    adminId?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type Log_HistoriesOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "studId" | "adminId" | "role" | "createdAt", ExtArgs["result"]["log_Histories"]>
  export type Log_HistoriesInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentsDefaultArgs<ExtArgs>
    admin?: boolean | AdminsDefaultArgs<ExtArgs>
  }
  export type Log_HistoriesIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentsDefaultArgs<ExtArgs>
    admin?: boolean | AdminsDefaultArgs<ExtArgs>
  }
  export type Log_HistoriesIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    student?: boolean | StudentsDefaultArgs<ExtArgs>
    admin?: boolean | AdminsDefaultArgs<ExtArgs>
  }

  export type $Log_HistoriesPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Log_Histories"
    objects: {
      student: Prisma.$StudentsPayload<ExtArgs>
      admin: Prisma.$AdminsPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      studId: string
      adminId: string
      role: string
      createdAt: string
    }, ExtArgs["result"]["log_Histories"]>
    composites: {}
  }

  type Log_HistoriesGetPayload<S extends boolean | null | undefined | Log_HistoriesDefaultArgs> = $Result.GetResult<Prisma.$Log_HistoriesPayload, S>

  type Log_HistoriesCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<Log_HistoriesFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: Log_HistoriesCountAggregateInputType | true
    }

  export interface Log_HistoriesDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Log_Histories'], meta: { name: 'Log_Histories' } }
    /**
     * Find zero or one Log_Histories that matches the filter.
     * @param {Log_HistoriesFindUniqueArgs} args - Arguments to find a Log_Histories
     * @example
     * // Get one Log_Histories
     * const log_Histories = await prisma.log_Histories.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends Log_HistoriesFindUniqueArgs>(args: SelectSubset<T, Log_HistoriesFindUniqueArgs<ExtArgs>>): Prisma__Log_HistoriesClient<$Result.GetResult<Prisma.$Log_HistoriesPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Log_Histories that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {Log_HistoriesFindUniqueOrThrowArgs} args - Arguments to find a Log_Histories
     * @example
     * // Get one Log_Histories
     * const log_Histories = await prisma.log_Histories.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends Log_HistoriesFindUniqueOrThrowArgs>(args: SelectSubset<T, Log_HistoriesFindUniqueOrThrowArgs<ExtArgs>>): Prisma__Log_HistoriesClient<$Result.GetResult<Prisma.$Log_HistoriesPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log_Histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_HistoriesFindFirstArgs} args - Arguments to find a Log_Histories
     * @example
     * // Get one Log_Histories
     * const log_Histories = await prisma.log_Histories.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends Log_HistoriesFindFirstArgs>(args?: SelectSubset<T, Log_HistoriesFindFirstArgs<ExtArgs>>): Prisma__Log_HistoriesClient<$Result.GetResult<Prisma.$Log_HistoriesPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Log_Histories that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_HistoriesFindFirstOrThrowArgs} args - Arguments to find a Log_Histories
     * @example
     * // Get one Log_Histories
     * const log_Histories = await prisma.log_Histories.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends Log_HistoriesFindFirstOrThrowArgs>(args?: SelectSubset<T, Log_HistoriesFindFirstOrThrowArgs<ExtArgs>>): Prisma__Log_HistoriesClient<$Result.GetResult<Prisma.$Log_HistoriesPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Log_Histories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_HistoriesFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Log_Histories
     * const log_Histories = await prisma.log_Histories.findMany()
     * 
     * // Get first 10 Log_Histories
     * const log_Histories = await prisma.log_Histories.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const log_HistoriesWithIdOnly = await prisma.log_Histories.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends Log_HistoriesFindManyArgs>(args?: SelectSubset<T, Log_HistoriesFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Log_HistoriesPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Log_Histories.
     * @param {Log_HistoriesCreateArgs} args - Arguments to create a Log_Histories.
     * @example
     * // Create one Log_Histories
     * const Log_Histories = await prisma.log_Histories.create({
     *   data: {
     *     // ... data to create a Log_Histories
     *   }
     * })
     * 
     */
    create<T extends Log_HistoriesCreateArgs>(args: SelectSubset<T, Log_HistoriesCreateArgs<ExtArgs>>): Prisma__Log_HistoriesClient<$Result.GetResult<Prisma.$Log_HistoriesPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Log_Histories.
     * @param {Log_HistoriesCreateManyArgs} args - Arguments to create many Log_Histories.
     * @example
     * // Create many Log_Histories
     * const log_Histories = await prisma.log_Histories.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends Log_HistoriesCreateManyArgs>(args?: SelectSubset<T, Log_HistoriesCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Log_Histories and returns the data saved in the database.
     * @param {Log_HistoriesCreateManyAndReturnArgs} args - Arguments to create many Log_Histories.
     * @example
     * // Create many Log_Histories
     * const log_Histories = await prisma.log_Histories.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Log_Histories and only return the `id`
     * const log_HistoriesWithIdOnly = await prisma.log_Histories.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends Log_HistoriesCreateManyAndReturnArgs>(args?: SelectSubset<T, Log_HistoriesCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Log_HistoriesPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Log_Histories.
     * @param {Log_HistoriesDeleteArgs} args - Arguments to delete one Log_Histories.
     * @example
     * // Delete one Log_Histories
     * const Log_Histories = await prisma.log_Histories.delete({
     *   where: {
     *     // ... filter to delete one Log_Histories
     *   }
     * })
     * 
     */
    delete<T extends Log_HistoriesDeleteArgs>(args: SelectSubset<T, Log_HistoriesDeleteArgs<ExtArgs>>): Prisma__Log_HistoriesClient<$Result.GetResult<Prisma.$Log_HistoriesPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Log_Histories.
     * @param {Log_HistoriesUpdateArgs} args - Arguments to update one Log_Histories.
     * @example
     * // Update one Log_Histories
     * const log_Histories = await prisma.log_Histories.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends Log_HistoriesUpdateArgs>(args: SelectSubset<T, Log_HistoriesUpdateArgs<ExtArgs>>): Prisma__Log_HistoriesClient<$Result.GetResult<Prisma.$Log_HistoriesPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Log_Histories.
     * @param {Log_HistoriesDeleteManyArgs} args - Arguments to filter Log_Histories to delete.
     * @example
     * // Delete a few Log_Histories
     * const { count } = await prisma.log_Histories.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends Log_HistoriesDeleteManyArgs>(args?: SelectSubset<T, Log_HistoriesDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Log_Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_HistoriesUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Log_Histories
     * const log_Histories = await prisma.log_Histories.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends Log_HistoriesUpdateManyArgs>(args: SelectSubset<T, Log_HistoriesUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Log_Histories and returns the data updated in the database.
     * @param {Log_HistoriesUpdateManyAndReturnArgs} args - Arguments to update many Log_Histories.
     * @example
     * // Update many Log_Histories
     * const log_Histories = await prisma.log_Histories.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Log_Histories and only return the `id`
     * const log_HistoriesWithIdOnly = await prisma.log_Histories.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends Log_HistoriesUpdateManyAndReturnArgs>(args: SelectSubset<T, Log_HistoriesUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$Log_HistoriesPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Log_Histories.
     * @param {Log_HistoriesUpsertArgs} args - Arguments to update or create a Log_Histories.
     * @example
     * // Update or create a Log_Histories
     * const log_Histories = await prisma.log_Histories.upsert({
     *   create: {
     *     // ... data to create a Log_Histories
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Log_Histories we want to update
     *   }
     * })
     */
    upsert<T extends Log_HistoriesUpsertArgs>(args: SelectSubset<T, Log_HistoriesUpsertArgs<ExtArgs>>): Prisma__Log_HistoriesClient<$Result.GetResult<Prisma.$Log_HistoriesPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Log_Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_HistoriesCountArgs} args - Arguments to filter Log_Histories to count.
     * @example
     * // Count the number of Log_Histories
     * const count = await prisma.log_Histories.count({
     *   where: {
     *     // ... the filter for the Log_Histories we want to count
     *   }
     * })
    **/
    count<T extends Log_HistoriesCountArgs>(
      args?: Subset<T, Log_HistoriesCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], Log_HistoriesCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Log_Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_HistoriesAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends Log_HistoriesAggregateArgs>(args: Subset<T, Log_HistoriesAggregateArgs>): Prisma.PrismaPromise<GetLog_HistoriesAggregateType<T>>

    /**
     * Group by Log_Histories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {Log_HistoriesGroupByArgs} args - Group by arguments.
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
      T extends Log_HistoriesGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: Log_HistoriesGroupByArgs['orderBy'] }
        : { orderBy?: Log_HistoriesGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, Log_HistoriesGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLog_HistoriesGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Log_Histories model
   */
  readonly fields: Log_HistoriesFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Log_Histories.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__Log_HistoriesClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    student<T extends StudentsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, StudentsDefaultArgs<ExtArgs>>): Prisma__StudentsClient<$Result.GetResult<Prisma.$StudentsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    admin<T extends AdminsDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AdminsDefaultArgs<ExtArgs>>): Prisma__AdminsClient<$Result.GetResult<Prisma.$AdminsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Log_Histories model
   */
  interface Log_HistoriesFieldRefs {
    readonly id: FieldRef<"Log_Histories", 'String'>
    readonly studId: FieldRef<"Log_Histories", 'String'>
    readonly adminId: FieldRef<"Log_Histories", 'String'>
    readonly role: FieldRef<"Log_Histories", 'String'>
    readonly createdAt: FieldRef<"Log_Histories", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Log_Histories findUnique
   */
  export type Log_HistoriesFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log_Histories
     */
    select?: Log_HistoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log_Histories
     */
    omit?: Log_HistoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Log_HistoriesInclude<ExtArgs> | null
    /**
     * Filter, which Log_Histories to fetch.
     */
    where: Log_HistoriesWhereUniqueInput
  }

  /**
   * Log_Histories findUniqueOrThrow
   */
  export type Log_HistoriesFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log_Histories
     */
    select?: Log_HistoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log_Histories
     */
    omit?: Log_HistoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Log_HistoriesInclude<ExtArgs> | null
    /**
     * Filter, which Log_Histories to fetch.
     */
    where: Log_HistoriesWhereUniqueInput
  }

  /**
   * Log_Histories findFirst
   */
  export type Log_HistoriesFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log_Histories
     */
    select?: Log_HistoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log_Histories
     */
    omit?: Log_HistoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Log_HistoriesInclude<ExtArgs> | null
    /**
     * Filter, which Log_Histories to fetch.
     */
    where?: Log_HistoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Log_Histories to fetch.
     */
    orderBy?: Log_HistoriesOrderByWithRelationInput | Log_HistoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Log_Histories.
     */
    cursor?: Log_HistoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Log_Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Log_Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Log_Histories.
     */
    distinct?: Log_HistoriesScalarFieldEnum | Log_HistoriesScalarFieldEnum[]
  }

  /**
   * Log_Histories findFirstOrThrow
   */
  export type Log_HistoriesFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log_Histories
     */
    select?: Log_HistoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log_Histories
     */
    omit?: Log_HistoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Log_HistoriesInclude<ExtArgs> | null
    /**
     * Filter, which Log_Histories to fetch.
     */
    where?: Log_HistoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Log_Histories to fetch.
     */
    orderBy?: Log_HistoriesOrderByWithRelationInput | Log_HistoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Log_Histories.
     */
    cursor?: Log_HistoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Log_Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Log_Histories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Log_Histories.
     */
    distinct?: Log_HistoriesScalarFieldEnum | Log_HistoriesScalarFieldEnum[]
  }

  /**
   * Log_Histories findMany
   */
  export type Log_HistoriesFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log_Histories
     */
    select?: Log_HistoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log_Histories
     */
    omit?: Log_HistoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Log_HistoriesInclude<ExtArgs> | null
    /**
     * Filter, which Log_Histories to fetch.
     */
    where?: Log_HistoriesWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Log_Histories to fetch.
     */
    orderBy?: Log_HistoriesOrderByWithRelationInput | Log_HistoriesOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Log_Histories.
     */
    cursor?: Log_HistoriesWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Log_Histories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Log_Histories.
     */
    skip?: number
    distinct?: Log_HistoriesScalarFieldEnum | Log_HistoriesScalarFieldEnum[]
  }

  /**
   * Log_Histories create
   */
  export type Log_HistoriesCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log_Histories
     */
    select?: Log_HistoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log_Histories
     */
    omit?: Log_HistoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Log_HistoriesInclude<ExtArgs> | null
    /**
     * The data needed to create a Log_Histories.
     */
    data: XOR<Log_HistoriesCreateInput, Log_HistoriesUncheckedCreateInput>
  }

  /**
   * Log_Histories createMany
   */
  export type Log_HistoriesCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Log_Histories.
     */
    data: Log_HistoriesCreateManyInput | Log_HistoriesCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Log_Histories createManyAndReturn
   */
  export type Log_HistoriesCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log_Histories
     */
    select?: Log_HistoriesSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Log_Histories
     */
    omit?: Log_HistoriesOmit<ExtArgs> | null
    /**
     * The data used to create many Log_Histories.
     */
    data: Log_HistoriesCreateManyInput | Log_HistoriesCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Log_HistoriesIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Log_Histories update
   */
  export type Log_HistoriesUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log_Histories
     */
    select?: Log_HistoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log_Histories
     */
    omit?: Log_HistoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Log_HistoriesInclude<ExtArgs> | null
    /**
     * The data needed to update a Log_Histories.
     */
    data: XOR<Log_HistoriesUpdateInput, Log_HistoriesUncheckedUpdateInput>
    /**
     * Choose, which Log_Histories to update.
     */
    where: Log_HistoriesWhereUniqueInput
  }

  /**
   * Log_Histories updateMany
   */
  export type Log_HistoriesUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Log_Histories.
     */
    data: XOR<Log_HistoriesUpdateManyMutationInput, Log_HistoriesUncheckedUpdateManyInput>
    /**
     * Filter which Log_Histories to update
     */
    where?: Log_HistoriesWhereInput
    /**
     * Limit how many Log_Histories to update.
     */
    limit?: number
  }

  /**
   * Log_Histories updateManyAndReturn
   */
  export type Log_HistoriesUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log_Histories
     */
    select?: Log_HistoriesSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Log_Histories
     */
    omit?: Log_HistoriesOmit<ExtArgs> | null
    /**
     * The data used to update Log_Histories.
     */
    data: XOR<Log_HistoriesUpdateManyMutationInput, Log_HistoriesUncheckedUpdateManyInput>
    /**
     * Filter which Log_Histories to update
     */
    where?: Log_HistoriesWhereInput
    /**
     * Limit how many Log_Histories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Log_HistoriesIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Log_Histories upsert
   */
  export type Log_HistoriesUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log_Histories
     */
    select?: Log_HistoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log_Histories
     */
    omit?: Log_HistoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Log_HistoriesInclude<ExtArgs> | null
    /**
     * The filter to search for the Log_Histories to update in case it exists.
     */
    where: Log_HistoriesWhereUniqueInput
    /**
     * In case the Log_Histories found by the `where` argument doesn't exist, create a new Log_Histories with this data.
     */
    create: XOR<Log_HistoriesCreateInput, Log_HistoriesUncheckedCreateInput>
    /**
     * In case the Log_Histories was found with the provided `where` argument, update it with this data.
     */
    update: XOR<Log_HistoriesUpdateInput, Log_HistoriesUncheckedUpdateInput>
  }

  /**
   * Log_Histories delete
   */
  export type Log_HistoriesDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log_Histories
     */
    select?: Log_HistoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log_Histories
     */
    omit?: Log_HistoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Log_HistoriesInclude<ExtArgs> | null
    /**
     * Filter which Log_Histories to delete.
     */
    where: Log_HistoriesWhereUniqueInput
  }

  /**
   * Log_Histories deleteMany
   */
  export type Log_HistoriesDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Log_Histories to delete
     */
    where?: Log_HistoriesWhereInput
    /**
     * Limit how many Log_Histories to delete.
     */
    limit?: number
  }

  /**
   * Log_Histories without action
   */
  export type Log_HistoriesDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Log_Histories
     */
    select?: Log_HistoriesSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Log_Histories
     */
    omit?: Log_HistoriesOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Log_HistoriesInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const StudentsScalarFieldEnum: {
    id: 'id',
    schoolId: 'schoolId',
    fullName: 'fullName',
    email: 'email',
    password: 'password',
    year: 'year',
    phone: 'phone',
    location: 'location',
    department: 'department',
    imageUrl: 'imageUrl',
    createdAt: 'createdAt'
  };

  export type StudentsScalarFieldEnum = (typeof StudentsScalarFieldEnum)[keyof typeof StudentsScalarFieldEnum]


  export const AdminsScalarFieldEnum: {
    id: 'id',
    adminId: 'adminId',
    fullName: 'fullName',
    email: 'email',
    password: 'password',
    phone: 'phone',
    role: 'role',
    location: 'location'
  };

  export type AdminsScalarFieldEnum = (typeof AdminsScalarFieldEnum)[keyof typeof AdminsScalarFieldEnum]


  export const PropertiesScalarFieldEnum: {
    id: 'id',
    type: 'type',
    title: 'title',
    description: 'description',
    serialNumber: 'serialNumber',
    imageUrl: 'imageUrl',
    status: 'status',
    studId: 'studId',
    approvedBy: 'approvedBy',
    createdAt: 'createdAt'
  };

  export type PropertiesScalarFieldEnum = (typeof PropertiesScalarFieldEnum)[keyof typeof PropertiesScalarFieldEnum]


  export const Property_Status_HistoriesScalarFieldEnum: {
    id: 'id',
    propId: 'propId',
    updatedAt: 'updatedAt',
    description: 'description',
    updateApprovedBy: 'updateApprovedBy'
  };

  export type Property_Status_HistoriesScalarFieldEnum = (typeof Property_Status_HistoriesScalarFieldEnum)[keyof typeof Property_Status_HistoriesScalarFieldEnum]


  export const Lost_Found_ReportsScalarFieldEnum: {
    id: 'id',
    propId: 'propId',
    studId: 'studId',
    reportType: 'reportType',
    description: 'description',
    reportDate: 'reportDate',
    resolved: 'resolved',
    examinedBy: 'examinedBy'
  };

  export type Lost_Found_ReportsScalarFieldEnum = (typeof Lost_Found_ReportsScalarFieldEnum)[keyof typeof Lost_Found_ReportsScalarFieldEnum]


  export const Log_HistoriesScalarFieldEnum: {
    id: 'id',
    studId: 'studId',
    adminId: 'adminId',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type Log_HistoriesScalarFieldEnum = (typeof Log_HistoriesScalarFieldEnum)[keyof typeof Log_HistoriesScalarFieldEnum]


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


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type StudentsWhereInput = {
    AND?: StudentsWhereInput | StudentsWhereInput[]
    OR?: StudentsWhereInput[]
    NOT?: StudentsWhereInput | StudentsWhereInput[]
    id?: UuidFilter<"Students"> | string
    schoolId?: StringFilter<"Students"> | string
    fullName?: StringFilter<"Students"> | string
    email?: StringFilter<"Students"> | string
    password?: StringFilter<"Students"> | string
    year?: StringFilter<"Students"> | string
    phone?: StringFilter<"Students"> | string
    location?: StringFilter<"Students"> | string
    department?: StringFilter<"Students"> | string
    imageUrl?: StringNullableFilter<"Students"> | string | null
    createdAt?: DateTimeFilter<"Students"> | Date | string
    properties?: PropertiesListRelationFilter
    lost_found_reports?: Lost_Found_ReportsListRelationFilter
    log_history?: Log_HistoriesListRelationFilter
  }

  export type StudentsOrderByWithRelationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    year?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    department?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    properties?: PropertiesOrderByRelationAggregateInput
    lost_found_reports?: Lost_Found_ReportsOrderByRelationAggregateInput
    log_history?: Log_HistoriesOrderByRelationAggregateInput
  }

  export type StudentsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    schoolId?: string
    email?: string
    phone?: string
    AND?: StudentsWhereInput | StudentsWhereInput[]
    OR?: StudentsWhereInput[]
    NOT?: StudentsWhereInput | StudentsWhereInput[]
    fullName?: StringFilter<"Students"> | string
    password?: StringFilter<"Students"> | string
    year?: StringFilter<"Students"> | string
    location?: StringFilter<"Students"> | string
    department?: StringFilter<"Students"> | string
    imageUrl?: StringNullableFilter<"Students"> | string | null
    createdAt?: DateTimeFilter<"Students"> | Date | string
    properties?: PropertiesListRelationFilter
    lost_found_reports?: Lost_Found_ReportsListRelationFilter
    log_history?: Log_HistoriesListRelationFilter
  }, "id" | "schoolId" | "email" | "phone">

  export type StudentsOrderByWithAggregationInput = {
    id?: SortOrder
    schoolId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    year?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    department?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: StudentsCountOrderByAggregateInput
    _max?: StudentsMaxOrderByAggregateInput
    _min?: StudentsMinOrderByAggregateInput
  }

  export type StudentsScalarWhereWithAggregatesInput = {
    AND?: StudentsScalarWhereWithAggregatesInput | StudentsScalarWhereWithAggregatesInput[]
    OR?: StudentsScalarWhereWithAggregatesInput[]
    NOT?: StudentsScalarWhereWithAggregatesInput | StudentsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Students"> | string
    schoolId?: StringWithAggregatesFilter<"Students"> | string
    fullName?: StringWithAggregatesFilter<"Students"> | string
    email?: StringWithAggregatesFilter<"Students"> | string
    password?: StringWithAggregatesFilter<"Students"> | string
    year?: StringWithAggregatesFilter<"Students"> | string
    phone?: StringWithAggregatesFilter<"Students"> | string
    location?: StringWithAggregatesFilter<"Students"> | string
    department?: StringWithAggregatesFilter<"Students"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Students"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Students"> | Date | string
  }

  export type AdminsWhereInput = {
    AND?: AdminsWhereInput | AdminsWhereInput[]
    OR?: AdminsWhereInput[]
    NOT?: AdminsWhereInput | AdminsWhereInput[]
    id?: UuidFilter<"Admins"> | string
    adminId?: StringFilter<"Admins"> | string
    fullName?: StringFilter<"Admins"> | string
    email?: StringFilter<"Admins"> | string
    password?: StringFilter<"Admins"> | string
    phone?: StringFilter<"Admins"> | string
    role?: StringFilter<"Admins"> | string
    location?: StringFilter<"Admins"> | string
    log_history?: Log_HistoriesListRelationFilter
    property?: PropertiesListRelationFilter
    property_status_history?: Property_Status_HistoriesListRelationFilter
    lost_found_reports?: Lost_Found_ReportsListRelationFilter
  }

  export type AdminsOrderByWithRelationInput = {
    id?: SortOrder
    adminId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    location?: SortOrder
    log_history?: Log_HistoriesOrderByRelationAggregateInput
    property?: PropertiesOrderByRelationAggregateInput
    property_status_history?: Property_Status_HistoriesOrderByRelationAggregateInput
    lost_found_reports?: Lost_Found_ReportsOrderByRelationAggregateInput
  }

  export type AdminsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    adminId?: string
    email?: string
    phone?: string
    AND?: AdminsWhereInput | AdminsWhereInput[]
    OR?: AdminsWhereInput[]
    NOT?: AdminsWhereInput | AdminsWhereInput[]
    fullName?: StringFilter<"Admins"> | string
    password?: StringFilter<"Admins"> | string
    role?: StringFilter<"Admins"> | string
    location?: StringFilter<"Admins"> | string
    log_history?: Log_HistoriesListRelationFilter
    property?: PropertiesListRelationFilter
    property_status_history?: Property_Status_HistoriesListRelationFilter
    lost_found_reports?: Lost_Found_ReportsListRelationFilter
  }, "id" | "adminId" | "email" | "phone">

  export type AdminsOrderByWithAggregationInput = {
    id?: SortOrder
    adminId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    location?: SortOrder
    _count?: AdminsCountOrderByAggregateInput
    _max?: AdminsMaxOrderByAggregateInput
    _min?: AdminsMinOrderByAggregateInput
  }

  export type AdminsScalarWhereWithAggregatesInput = {
    AND?: AdminsScalarWhereWithAggregatesInput | AdminsScalarWhereWithAggregatesInput[]
    OR?: AdminsScalarWhereWithAggregatesInput[]
    NOT?: AdminsScalarWhereWithAggregatesInput | AdminsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Admins"> | string
    adminId?: StringWithAggregatesFilter<"Admins"> | string
    fullName?: StringWithAggregatesFilter<"Admins"> | string
    email?: StringWithAggregatesFilter<"Admins"> | string
    password?: StringWithAggregatesFilter<"Admins"> | string
    phone?: StringWithAggregatesFilter<"Admins"> | string
    role?: StringWithAggregatesFilter<"Admins"> | string
    location?: StringWithAggregatesFilter<"Admins"> | string
  }

  export type PropertiesWhereInput = {
    AND?: PropertiesWhereInput | PropertiesWhereInput[]
    OR?: PropertiesWhereInput[]
    NOT?: PropertiesWhereInput | PropertiesWhereInput[]
    id?: UuidFilter<"Properties"> | string
    type?: StringFilter<"Properties"> | string
    title?: StringFilter<"Properties"> | string
    description?: StringFilter<"Properties"> | string
    serialNumber?: StringFilter<"Properties"> | string
    imageUrl?: StringNullableFilter<"Properties"> | string | null
    status?: StringFilter<"Properties"> | string
    studId?: UuidFilter<"Properties"> | string
    approvedBy?: UuidFilter<"Properties"> | string
    createdAt?: DateTimeFilter<"Properties"> | Date | string
    student?: XOR<StudentsScalarRelationFilter, StudentsWhereInput>
    admin?: XOR<AdminsScalarRelationFilter, AdminsWhereInput>
    property_status_history?: Property_Status_HistoriesListRelationFilter
    lost_found_reports?: Lost_Found_ReportsListRelationFilter
  }

  export type PropertiesOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    serialNumber?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    studId?: SortOrder
    approvedBy?: SortOrder
    createdAt?: SortOrder
    student?: StudentsOrderByWithRelationInput
    admin?: AdminsOrderByWithRelationInput
    property_status_history?: Property_Status_HistoriesOrderByRelationAggregateInput
    lost_found_reports?: Lost_Found_ReportsOrderByRelationAggregateInput
  }

  export type PropertiesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    serialNumber?: string
    AND?: PropertiesWhereInput | PropertiesWhereInput[]
    OR?: PropertiesWhereInput[]
    NOT?: PropertiesWhereInput | PropertiesWhereInput[]
    type?: StringFilter<"Properties"> | string
    title?: StringFilter<"Properties"> | string
    description?: StringFilter<"Properties"> | string
    imageUrl?: StringNullableFilter<"Properties"> | string | null
    status?: StringFilter<"Properties"> | string
    studId?: UuidFilter<"Properties"> | string
    approvedBy?: UuidFilter<"Properties"> | string
    createdAt?: DateTimeFilter<"Properties"> | Date | string
    student?: XOR<StudentsScalarRelationFilter, StudentsWhereInput>
    admin?: XOR<AdminsScalarRelationFilter, AdminsWhereInput>
    property_status_history?: Property_Status_HistoriesListRelationFilter
    lost_found_reports?: Lost_Found_ReportsListRelationFilter
  }, "id" | "serialNumber">

  export type PropertiesOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    serialNumber?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    status?: SortOrder
    studId?: SortOrder
    approvedBy?: SortOrder
    createdAt?: SortOrder
    _count?: PropertiesCountOrderByAggregateInput
    _max?: PropertiesMaxOrderByAggregateInput
    _min?: PropertiesMinOrderByAggregateInput
  }

  export type PropertiesScalarWhereWithAggregatesInput = {
    AND?: PropertiesScalarWhereWithAggregatesInput | PropertiesScalarWhereWithAggregatesInput[]
    OR?: PropertiesScalarWhereWithAggregatesInput[]
    NOT?: PropertiesScalarWhereWithAggregatesInput | PropertiesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Properties"> | string
    type?: StringWithAggregatesFilter<"Properties"> | string
    title?: StringWithAggregatesFilter<"Properties"> | string
    description?: StringWithAggregatesFilter<"Properties"> | string
    serialNumber?: StringWithAggregatesFilter<"Properties"> | string
    imageUrl?: StringNullableWithAggregatesFilter<"Properties"> | string | null
    status?: StringWithAggregatesFilter<"Properties"> | string
    studId?: UuidWithAggregatesFilter<"Properties"> | string
    approvedBy?: UuidWithAggregatesFilter<"Properties"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Properties"> | Date | string
  }

  export type Property_Status_HistoriesWhereInput = {
    AND?: Property_Status_HistoriesWhereInput | Property_Status_HistoriesWhereInput[]
    OR?: Property_Status_HistoriesWhereInput[]
    NOT?: Property_Status_HistoriesWhereInput | Property_Status_HistoriesWhereInput[]
    id?: UuidFilter<"Property_Status_Histories"> | string
    propId?: UuidFilter<"Property_Status_Histories"> | string
    updatedAt?: DateTimeFilter<"Property_Status_Histories"> | Date | string
    description?: StringFilter<"Property_Status_Histories"> | string
    updateApprovedBy?: UuidFilter<"Property_Status_Histories"> | string
    property?: XOR<PropertiesScalarRelationFilter, PropertiesWhereInput>
    admin?: XOR<AdminsScalarRelationFilter, AdminsWhereInput>
  }

  export type Property_Status_HistoriesOrderByWithRelationInput = {
    id?: SortOrder
    propId?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
    updateApprovedBy?: SortOrder
    property?: PropertiesOrderByWithRelationInput
    admin?: AdminsOrderByWithRelationInput
  }

  export type Property_Status_HistoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Property_Status_HistoriesWhereInput | Property_Status_HistoriesWhereInput[]
    OR?: Property_Status_HistoriesWhereInput[]
    NOT?: Property_Status_HistoriesWhereInput | Property_Status_HistoriesWhereInput[]
    propId?: UuidFilter<"Property_Status_Histories"> | string
    updatedAt?: DateTimeFilter<"Property_Status_Histories"> | Date | string
    description?: StringFilter<"Property_Status_Histories"> | string
    updateApprovedBy?: UuidFilter<"Property_Status_Histories"> | string
    property?: XOR<PropertiesScalarRelationFilter, PropertiesWhereInput>
    admin?: XOR<AdminsScalarRelationFilter, AdminsWhereInput>
  }, "id">

  export type Property_Status_HistoriesOrderByWithAggregationInput = {
    id?: SortOrder
    propId?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
    updateApprovedBy?: SortOrder
    _count?: Property_Status_HistoriesCountOrderByAggregateInput
    _max?: Property_Status_HistoriesMaxOrderByAggregateInput
    _min?: Property_Status_HistoriesMinOrderByAggregateInput
  }

  export type Property_Status_HistoriesScalarWhereWithAggregatesInput = {
    AND?: Property_Status_HistoriesScalarWhereWithAggregatesInput | Property_Status_HistoriesScalarWhereWithAggregatesInput[]
    OR?: Property_Status_HistoriesScalarWhereWithAggregatesInput[]
    NOT?: Property_Status_HistoriesScalarWhereWithAggregatesInput | Property_Status_HistoriesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Property_Status_Histories"> | string
    propId?: UuidWithAggregatesFilter<"Property_Status_Histories"> | string
    updatedAt?: DateTimeWithAggregatesFilter<"Property_Status_Histories"> | Date | string
    description?: StringWithAggregatesFilter<"Property_Status_Histories"> | string
    updateApprovedBy?: UuidWithAggregatesFilter<"Property_Status_Histories"> | string
  }

  export type Lost_Found_ReportsWhereInput = {
    AND?: Lost_Found_ReportsWhereInput | Lost_Found_ReportsWhereInput[]
    OR?: Lost_Found_ReportsWhereInput[]
    NOT?: Lost_Found_ReportsWhereInput | Lost_Found_ReportsWhereInput[]
    id?: UuidFilter<"Lost_Found_Reports"> | string
    propId?: UuidFilter<"Lost_Found_Reports"> | string
    studId?: UuidFilter<"Lost_Found_Reports"> | string
    reportType?: StringFilter<"Lost_Found_Reports"> | string
    description?: StringFilter<"Lost_Found_Reports"> | string
    reportDate?: DateTimeFilter<"Lost_Found_Reports"> | Date | string
    resolved?: BoolFilter<"Lost_Found_Reports"> | boolean
    examinedBy?: UuidFilter<"Lost_Found_Reports"> | string
    property?: XOR<PropertiesScalarRelationFilter, PropertiesWhereInput>
    student?: XOR<StudentsScalarRelationFilter, StudentsWhereInput>
    admin?: XOR<AdminsScalarRelationFilter, AdminsWhereInput>
  }

  export type Lost_Found_ReportsOrderByWithRelationInput = {
    id?: SortOrder
    propId?: SortOrder
    studId?: SortOrder
    reportType?: SortOrder
    description?: SortOrder
    reportDate?: SortOrder
    resolved?: SortOrder
    examinedBy?: SortOrder
    property?: PropertiesOrderByWithRelationInput
    student?: StudentsOrderByWithRelationInput
    admin?: AdminsOrderByWithRelationInput
  }

  export type Lost_Found_ReportsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Lost_Found_ReportsWhereInput | Lost_Found_ReportsWhereInput[]
    OR?: Lost_Found_ReportsWhereInput[]
    NOT?: Lost_Found_ReportsWhereInput | Lost_Found_ReportsWhereInput[]
    propId?: UuidFilter<"Lost_Found_Reports"> | string
    studId?: UuidFilter<"Lost_Found_Reports"> | string
    reportType?: StringFilter<"Lost_Found_Reports"> | string
    description?: StringFilter<"Lost_Found_Reports"> | string
    reportDate?: DateTimeFilter<"Lost_Found_Reports"> | Date | string
    resolved?: BoolFilter<"Lost_Found_Reports"> | boolean
    examinedBy?: UuidFilter<"Lost_Found_Reports"> | string
    property?: XOR<PropertiesScalarRelationFilter, PropertiesWhereInput>
    student?: XOR<StudentsScalarRelationFilter, StudentsWhereInput>
    admin?: XOR<AdminsScalarRelationFilter, AdminsWhereInput>
  }, "id">

  export type Lost_Found_ReportsOrderByWithAggregationInput = {
    id?: SortOrder
    propId?: SortOrder
    studId?: SortOrder
    reportType?: SortOrder
    description?: SortOrder
    reportDate?: SortOrder
    resolved?: SortOrder
    examinedBy?: SortOrder
    _count?: Lost_Found_ReportsCountOrderByAggregateInput
    _max?: Lost_Found_ReportsMaxOrderByAggregateInput
    _min?: Lost_Found_ReportsMinOrderByAggregateInput
  }

  export type Lost_Found_ReportsScalarWhereWithAggregatesInput = {
    AND?: Lost_Found_ReportsScalarWhereWithAggregatesInput | Lost_Found_ReportsScalarWhereWithAggregatesInput[]
    OR?: Lost_Found_ReportsScalarWhereWithAggregatesInput[]
    NOT?: Lost_Found_ReportsScalarWhereWithAggregatesInput | Lost_Found_ReportsScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Lost_Found_Reports"> | string
    propId?: UuidWithAggregatesFilter<"Lost_Found_Reports"> | string
    studId?: UuidWithAggregatesFilter<"Lost_Found_Reports"> | string
    reportType?: StringWithAggregatesFilter<"Lost_Found_Reports"> | string
    description?: StringWithAggregatesFilter<"Lost_Found_Reports"> | string
    reportDate?: DateTimeWithAggregatesFilter<"Lost_Found_Reports"> | Date | string
    resolved?: BoolWithAggregatesFilter<"Lost_Found_Reports"> | boolean
    examinedBy?: UuidWithAggregatesFilter<"Lost_Found_Reports"> | string
  }

  export type Log_HistoriesWhereInput = {
    AND?: Log_HistoriesWhereInput | Log_HistoriesWhereInput[]
    OR?: Log_HistoriesWhereInput[]
    NOT?: Log_HistoriesWhereInput | Log_HistoriesWhereInput[]
    id?: UuidFilter<"Log_Histories"> | string
    studId?: UuidFilter<"Log_Histories"> | string
    adminId?: UuidFilter<"Log_Histories"> | string
    role?: StringFilter<"Log_Histories"> | string
    createdAt?: StringFilter<"Log_Histories"> | string
    student?: XOR<StudentsScalarRelationFilter, StudentsWhereInput>
    admin?: XOR<AdminsScalarRelationFilter, AdminsWhereInput>
  }

  export type Log_HistoriesOrderByWithRelationInput = {
    id?: SortOrder
    studId?: SortOrder
    adminId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    student?: StudentsOrderByWithRelationInput
    admin?: AdminsOrderByWithRelationInput
  }

  export type Log_HistoriesWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: Log_HistoriesWhereInput | Log_HistoriesWhereInput[]
    OR?: Log_HistoriesWhereInput[]
    NOT?: Log_HistoriesWhereInput | Log_HistoriesWhereInput[]
    studId?: UuidFilter<"Log_Histories"> | string
    adminId?: UuidFilter<"Log_Histories"> | string
    role?: StringFilter<"Log_Histories"> | string
    createdAt?: StringFilter<"Log_Histories"> | string
    student?: XOR<StudentsScalarRelationFilter, StudentsWhereInput>
    admin?: XOR<AdminsScalarRelationFilter, AdminsWhereInput>
  }, "id">

  export type Log_HistoriesOrderByWithAggregationInput = {
    id?: SortOrder
    studId?: SortOrder
    adminId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: Log_HistoriesCountOrderByAggregateInput
    _max?: Log_HistoriesMaxOrderByAggregateInput
    _min?: Log_HistoriesMinOrderByAggregateInput
  }

  export type Log_HistoriesScalarWhereWithAggregatesInput = {
    AND?: Log_HistoriesScalarWhereWithAggregatesInput | Log_HistoriesScalarWhereWithAggregatesInput[]
    OR?: Log_HistoriesScalarWhereWithAggregatesInput[]
    NOT?: Log_HistoriesScalarWhereWithAggregatesInput | Log_HistoriesScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Log_Histories"> | string
    studId?: UuidWithAggregatesFilter<"Log_Histories"> | string
    adminId?: UuidWithAggregatesFilter<"Log_Histories"> | string
    role?: StringWithAggregatesFilter<"Log_Histories"> | string
    createdAt?: StringWithAggregatesFilter<"Log_Histories"> | string
  }

  export type StudentsCreateInput = {
    id?: string
    schoolId: string
    fullName: string
    email: string
    password: string
    year: string
    phone: string
    location: string
    department: string
    imageUrl?: string | null
    createdAt?: Date | string
    properties?: PropertiesCreateNestedManyWithoutStudentInput
    lost_found_reports?: Lost_Found_ReportsCreateNestedManyWithoutStudentInput
    log_history?: Log_HistoriesCreateNestedManyWithoutStudentInput
  }

  export type StudentsUncheckedCreateInput = {
    id?: string
    schoolId: string
    fullName: string
    email: string
    password: string
    year: string
    phone: string
    location: string
    department: string
    imageUrl?: string | null
    createdAt?: Date | string
    properties?: PropertiesUncheckedCreateNestedManyWithoutStudentInput
    lost_found_reports?: Lost_Found_ReportsUncheckedCreateNestedManyWithoutStudentInput
    log_history?: Log_HistoriesUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertiesUpdateManyWithoutStudentNestedInput
    lost_found_reports?: Lost_Found_ReportsUpdateManyWithoutStudentNestedInput
    log_history?: Log_HistoriesUpdateManyWithoutStudentNestedInput
  }

  export type StudentsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertiesUncheckedUpdateManyWithoutStudentNestedInput
    lost_found_reports?: Lost_Found_ReportsUncheckedUpdateManyWithoutStudentNestedInput
    log_history?: Log_HistoriesUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type StudentsCreateManyInput = {
    id?: string
    schoolId: string
    fullName: string
    email: string
    password: string
    year: string
    phone: string
    location: string
    department: string
    imageUrl?: string | null
    createdAt?: Date | string
  }

  export type StudentsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StudentsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AdminsCreateInput = {
    id?: string
    adminId: string
    fullName: string
    email: string
    password: string
    phone: string
    role: string
    location: string
    log_history?: Log_HistoriesCreateNestedManyWithoutAdminInput
    property?: PropertiesCreateNestedManyWithoutAdminInput
    property_status_history?: Property_Status_HistoriesCreateNestedManyWithoutAdminInput
    lost_found_reports?: Lost_Found_ReportsCreateNestedManyWithoutAdminInput
  }

  export type AdminsUncheckedCreateInput = {
    id?: string
    adminId: string
    fullName: string
    email: string
    password: string
    phone: string
    role: string
    location: string
    log_history?: Log_HistoriesUncheckedCreateNestedManyWithoutAdminInput
    property?: PropertiesUncheckedCreateNestedManyWithoutAdminInput
    property_status_history?: Property_Status_HistoriesUncheckedCreateNestedManyWithoutAdminInput
    lost_found_reports?: Lost_Found_ReportsUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    log_history?: Log_HistoriesUpdateManyWithoutAdminNestedInput
    property?: PropertiesUpdateManyWithoutAdminNestedInput
    property_status_history?: Property_Status_HistoriesUpdateManyWithoutAdminNestedInput
    lost_found_reports?: Lost_Found_ReportsUpdateManyWithoutAdminNestedInput
  }

  export type AdminsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    log_history?: Log_HistoriesUncheckedUpdateManyWithoutAdminNestedInput
    property?: PropertiesUncheckedUpdateManyWithoutAdminNestedInput
    property_status_history?: Property_Status_HistoriesUncheckedUpdateManyWithoutAdminNestedInput
    lost_found_reports?: Lost_Found_ReportsUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type AdminsCreateManyInput = {
    id?: string
    adminId: string
    fullName: string
    email: string
    password: string
    phone: string
    role: string
    location: string
  }

  export type AdminsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type AdminsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
  }

  export type PropertiesCreateInput = {
    id?: string
    type: string
    title: string
    description: string
    serialNumber: string
    imageUrl?: string | null
    status?: string
    createdAt?: Date | string
    student: StudentsCreateNestedOneWithoutPropertiesInput
    admin: AdminsCreateNestedOneWithoutPropertyInput
    property_status_history?: Property_Status_HistoriesCreateNestedManyWithoutPropertyInput
    lost_found_reports?: Lost_Found_ReportsCreateNestedManyWithoutPropertyInput
  }

  export type PropertiesUncheckedCreateInput = {
    id?: string
    type: string
    title: string
    description: string
    serialNumber: string
    imageUrl?: string | null
    status?: string
    studId: string
    approvedBy: string
    createdAt?: Date | string
    property_status_history?: Property_Status_HistoriesUncheckedCreateNestedManyWithoutPropertyInput
    lost_found_reports?: Lost_Found_ReportsUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertiesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentsUpdateOneRequiredWithoutPropertiesNestedInput
    admin?: AdminsUpdateOneRequiredWithoutPropertyNestedInput
    property_status_history?: Property_Status_HistoriesUpdateManyWithoutPropertyNestedInput
    lost_found_reports?: Lost_Found_ReportsUpdateManyWithoutPropertyNestedInput
  }

  export type PropertiesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    studId?: StringFieldUpdateOperationsInput | string
    approvedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property_status_history?: Property_Status_HistoriesUncheckedUpdateManyWithoutPropertyNestedInput
    lost_found_reports?: Lost_Found_ReportsUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertiesCreateManyInput = {
    id?: string
    type: string
    title: string
    description: string
    serialNumber: string
    imageUrl?: string | null
    status?: string
    studId: string
    approvedBy: string
    createdAt?: Date | string
  }

  export type PropertiesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PropertiesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    studId?: StringFieldUpdateOperationsInput | string
    approvedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Property_Status_HistoriesCreateInput = {
    id?: string
    updatedAt?: Date | string
    description: string
    property: PropertiesCreateNestedOneWithoutProperty_status_historyInput
    admin: AdminsCreateNestedOneWithoutProperty_status_historyInput
  }

  export type Property_Status_HistoriesUncheckedCreateInput = {
    id?: string
    propId: string
    updatedAt?: Date | string
    description: string
    updateApprovedBy: string
  }

  export type Property_Status_HistoriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    property?: PropertiesUpdateOneRequiredWithoutProperty_status_historyNestedInput
    admin?: AdminsUpdateOneRequiredWithoutProperty_status_historyNestedInput
  }

  export type Property_Status_HistoriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    propId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    updateApprovedBy?: StringFieldUpdateOperationsInput | string
  }

  export type Property_Status_HistoriesCreateManyInput = {
    id?: string
    propId: string
    updatedAt?: Date | string
    description: string
    updateApprovedBy: string
  }

  export type Property_Status_HistoriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type Property_Status_HistoriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    propId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    updateApprovedBy?: StringFieldUpdateOperationsInput | string
  }

  export type Lost_Found_ReportsCreateInput = {
    id?: string
    reportType: string
    description: string
    reportDate?: Date | string
    resolved: boolean
    property: PropertiesCreateNestedOneWithoutLost_found_reportsInput
    student: StudentsCreateNestedOneWithoutLost_found_reportsInput
    admin: AdminsCreateNestedOneWithoutLost_found_reportsInput
  }

  export type Lost_Found_ReportsUncheckedCreateInput = {
    id?: string
    propId: string
    studId: string
    reportType: string
    description: string
    reportDate?: Date | string
    resolved: boolean
    examinedBy: string
  }

  export type Lost_Found_ReportsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    property?: PropertiesUpdateOneRequiredWithoutLost_found_reportsNestedInput
    student?: StudentsUpdateOneRequiredWithoutLost_found_reportsNestedInput
    admin?: AdminsUpdateOneRequiredWithoutLost_found_reportsNestedInput
  }

  export type Lost_Found_ReportsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    propId?: StringFieldUpdateOperationsInput | string
    studId?: StringFieldUpdateOperationsInput | string
    reportType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    examinedBy?: StringFieldUpdateOperationsInput | string
  }

  export type Lost_Found_ReportsCreateManyInput = {
    id?: string
    propId: string
    studId: string
    reportType: string
    description: string
    reportDate?: Date | string
    resolved: boolean
    examinedBy: string
  }

  export type Lost_Found_ReportsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Lost_Found_ReportsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    propId?: StringFieldUpdateOperationsInput | string
    studId?: StringFieldUpdateOperationsInput | string
    reportType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    examinedBy?: StringFieldUpdateOperationsInput | string
  }

  export type Log_HistoriesCreateInput = {
    id?: string
    role: string
    createdAt: string
    student: StudentsCreateNestedOneWithoutLog_historyInput
    admin: AdminsCreateNestedOneWithoutLog_historyInput
  }

  export type Log_HistoriesUncheckedCreateInput = {
    id?: string
    studId: string
    adminId: string
    role: string
    createdAt: string
  }

  export type Log_HistoriesUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
    student?: StudentsUpdateOneRequiredWithoutLog_historyNestedInput
    admin?: AdminsUpdateOneRequiredWithoutLog_historyNestedInput
  }

  export type Log_HistoriesUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    studId?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
  }

  export type Log_HistoriesCreateManyInput = {
    id?: string
    studId: string
    adminId: string
    role: string
    createdAt: string
  }

  export type Log_HistoriesUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
  }

  export type Log_HistoriesUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studId?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type PropertiesListRelationFilter = {
    every?: PropertiesWhereInput
    some?: PropertiesWhereInput
    none?: PropertiesWhereInput
  }

  export type Lost_Found_ReportsListRelationFilter = {
    every?: Lost_Found_ReportsWhereInput
    some?: Lost_Found_ReportsWhereInput
    none?: Lost_Found_ReportsWhereInput
  }

  export type Log_HistoriesListRelationFilter = {
    every?: Log_HistoriesWhereInput
    some?: Log_HistoriesWhereInput
    none?: Log_HistoriesWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PropertiesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Lost_Found_ReportsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type Log_HistoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type StudentsCountOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    year?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    department?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentsMaxOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    year?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    department?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type StudentsMinOrderByAggregateInput = {
    id?: SortOrder
    schoolId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    year?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    department?: SortOrder
    imageUrl?: SortOrder
    createdAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
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

  export type Property_Status_HistoriesListRelationFilter = {
    every?: Property_Status_HistoriesWhereInput
    some?: Property_Status_HistoriesWhereInput
    none?: Property_Status_HistoriesWhereInput
  }

  export type Property_Status_HistoriesOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AdminsCountOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    location?: SortOrder
  }

  export type AdminsMaxOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    location?: SortOrder
  }

  export type AdminsMinOrderByAggregateInput = {
    id?: SortOrder
    adminId?: SortOrder
    fullName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    location?: SortOrder
  }

  export type StudentsScalarRelationFilter = {
    is?: StudentsWhereInput
    isNot?: StudentsWhereInput
  }

  export type AdminsScalarRelationFilter = {
    is?: AdminsWhereInput
    isNot?: AdminsWhereInput
  }

  export type PropertiesCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    serialNumber?: SortOrder
    imageUrl?: SortOrder
    status?: SortOrder
    studId?: SortOrder
    approvedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type PropertiesMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    serialNumber?: SortOrder
    imageUrl?: SortOrder
    status?: SortOrder
    studId?: SortOrder
    approvedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type PropertiesMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    title?: SortOrder
    description?: SortOrder
    serialNumber?: SortOrder
    imageUrl?: SortOrder
    status?: SortOrder
    studId?: SortOrder
    approvedBy?: SortOrder
    createdAt?: SortOrder
  }

  export type PropertiesScalarRelationFilter = {
    is?: PropertiesWhereInput
    isNot?: PropertiesWhereInput
  }

  export type Property_Status_HistoriesCountOrderByAggregateInput = {
    id?: SortOrder
    propId?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
    updateApprovedBy?: SortOrder
  }

  export type Property_Status_HistoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    propId?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
    updateApprovedBy?: SortOrder
  }

  export type Property_Status_HistoriesMinOrderByAggregateInput = {
    id?: SortOrder
    propId?: SortOrder
    updatedAt?: SortOrder
    description?: SortOrder
    updateApprovedBy?: SortOrder
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type Lost_Found_ReportsCountOrderByAggregateInput = {
    id?: SortOrder
    propId?: SortOrder
    studId?: SortOrder
    reportType?: SortOrder
    description?: SortOrder
    reportDate?: SortOrder
    resolved?: SortOrder
    examinedBy?: SortOrder
  }

  export type Lost_Found_ReportsMaxOrderByAggregateInput = {
    id?: SortOrder
    propId?: SortOrder
    studId?: SortOrder
    reportType?: SortOrder
    description?: SortOrder
    reportDate?: SortOrder
    resolved?: SortOrder
    examinedBy?: SortOrder
  }

  export type Lost_Found_ReportsMinOrderByAggregateInput = {
    id?: SortOrder
    propId?: SortOrder
    studId?: SortOrder
    reportType?: SortOrder
    description?: SortOrder
    reportDate?: SortOrder
    resolved?: SortOrder
    examinedBy?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type Log_HistoriesCountOrderByAggregateInput = {
    id?: SortOrder
    studId?: SortOrder
    adminId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type Log_HistoriesMaxOrderByAggregateInput = {
    id?: SortOrder
    studId?: SortOrder
    adminId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type Log_HistoriesMinOrderByAggregateInput = {
    id?: SortOrder
    studId?: SortOrder
    adminId?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type PropertiesCreateNestedManyWithoutStudentInput = {
    create?: XOR<PropertiesCreateWithoutStudentInput, PropertiesUncheckedCreateWithoutStudentInput> | PropertiesCreateWithoutStudentInput[] | PropertiesUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PropertiesCreateOrConnectWithoutStudentInput | PropertiesCreateOrConnectWithoutStudentInput[]
    createMany?: PropertiesCreateManyStudentInputEnvelope
    connect?: PropertiesWhereUniqueInput | PropertiesWhereUniqueInput[]
  }

  export type Lost_Found_ReportsCreateNestedManyWithoutStudentInput = {
    create?: XOR<Lost_Found_ReportsCreateWithoutStudentInput, Lost_Found_ReportsUncheckedCreateWithoutStudentInput> | Lost_Found_ReportsCreateWithoutStudentInput[] | Lost_Found_ReportsUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: Lost_Found_ReportsCreateOrConnectWithoutStudentInput | Lost_Found_ReportsCreateOrConnectWithoutStudentInput[]
    createMany?: Lost_Found_ReportsCreateManyStudentInputEnvelope
    connect?: Lost_Found_ReportsWhereUniqueInput | Lost_Found_ReportsWhereUniqueInput[]
  }

  export type Log_HistoriesCreateNestedManyWithoutStudentInput = {
    create?: XOR<Log_HistoriesCreateWithoutStudentInput, Log_HistoriesUncheckedCreateWithoutStudentInput> | Log_HistoriesCreateWithoutStudentInput[] | Log_HistoriesUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: Log_HistoriesCreateOrConnectWithoutStudentInput | Log_HistoriesCreateOrConnectWithoutStudentInput[]
    createMany?: Log_HistoriesCreateManyStudentInputEnvelope
    connect?: Log_HistoriesWhereUniqueInput | Log_HistoriesWhereUniqueInput[]
  }

  export type PropertiesUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<PropertiesCreateWithoutStudentInput, PropertiesUncheckedCreateWithoutStudentInput> | PropertiesCreateWithoutStudentInput[] | PropertiesUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PropertiesCreateOrConnectWithoutStudentInput | PropertiesCreateOrConnectWithoutStudentInput[]
    createMany?: PropertiesCreateManyStudentInputEnvelope
    connect?: PropertiesWhereUniqueInput | PropertiesWhereUniqueInput[]
  }

  export type Lost_Found_ReportsUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<Lost_Found_ReportsCreateWithoutStudentInput, Lost_Found_ReportsUncheckedCreateWithoutStudentInput> | Lost_Found_ReportsCreateWithoutStudentInput[] | Lost_Found_ReportsUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: Lost_Found_ReportsCreateOrConnectWithoutStudentInput | Lost_Found_ReportsCreateOrConnectWithoutStudentInput[]
    createMany?: Lost_Found_ReportsCreateManyStudentInputEnvelope
    connect?: Lost_Found_ReportsWhereUniqueInput | Lost_Found_ReportsWhereUniqueInput[]
  }

  export type Log_HistoriesUncheckedCreateNestedManyWithoutStudentInput = {
    create?: XOR<Log_HistoriesCreateWithoutStudentInput, Log_HistoriesUncheckedCreateWithoutStudentInput> | Log_HistoriesCreateWithoutStudentInput[] | Log_HistoriesUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: Log_HistoriesCreateOrConnectWithoutStudentInput | Log_HistoriesCreateOrConnectWithoutStudentInput[]
    createMany?: Log_HistoriesCreateManyStudentInputEnvelope
    connect?: Log_HistoriesWhereUniqueInput | Log_HistoriesWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type PropertiesUpdateManyWithoutStudentNestedInput = {
    create?: XOR<PropertiesCreateWithoutStudentInput, PropertiesUncheckedCreateWithoutStudentInput> | PropertiesCreateWithoutStudentInput[] | PropertiesUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PropertiesCreateOrConnectWithoutStudentInput | PropertiesCreateOrConnectWithoutStudentInput[]
    upsert?: PropertiesUpsertWithWhereUniqueWithoutStudentInput | PropertiesUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: PropertiesCreateManyStudentInputEnvelope
    set?: PropertiesWhereUniqueInput | PropertiesWhereUniqueInput[]
    disconnect?: PropertiesWhereUniqueInput | PropertiesWhereUniqueInput[]
    delete?: PropertiesWhereUniqueInput | PropertiesWhereUniqueInput[]
    connect?: PropertiesWhereUniqueInput | PropertiesWhereUniqueInput[]
    update?: PropertiesUpdateWithWhereUniqueWithoutStudentInput | PropertiesUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: PropertiesUpdateManyWithWhereWithoutStudentInput | PropertiesUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: PropertiesScalarWhereInput | PropertiesScalarWhereInput[]
  }

  export type Lost_Found_ReportsUpdateManyWithoutStudentNestedInput = {
    create?: XOR<Lost_Found_ReportsCreateWithoutStudentInput, Lost_Found_ReportsUncheckedCreateWithoutStudentInput> | Lost_Found_ReportsCreateWithoutStudentInput[] | Lost_Found_ReportsUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: Lost_Found_ReportsCreateOrConnectWithoutStudentInput | Lost_Found_ReportsCreateOrConnectWithoutStudentInput[]
    upsert?: Lost_Found_ReportsUpsertWithWhereUniqueWithoutStudentInput | Lost_Found_ReportsUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: Lost_Found_ReportsCreateManyStudentInputEnvelope
    set?: Lost_Found_ReportsWhereUniqueInput | Lost_Found_ReportsWhereUniqueInput[]
    disconnect?: Lost_Found_ReportsWhereUniqueInput | Lost_Found_ReportsWhereUniqueInput[]
    delete?: Lost_Found_ReportsWhereUniqueInput | Lost_Found_ReportsWhereUniqueInput[]
    connect?: Lost_Found_ReportsWhereUniqueInput | Lost_Found_ReportsWhereUniqueInput[]
    update?: Lost_Found_ReportsUpdateWithWhereUniqueWithoutStudentInput | Lost_Found_ReportsUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: Lost_Found_ReportsUpdateManyWithWhereWithoutStudentInput | Lost_Found_ReportsUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: Lost_Found_ReportsScalarWhereInput | Lost_Found_ReportsScalarWhereInput[]
  }

  export type Log_HistoriesUpdateManyWithoutStudentNestedInput = {
    create?: XOR<Log_HistoriesCreateWithoutStudentInput, Log_HistoriesUncheckedCreateWithoutStudentInput> | Log_HistoriesCreateWithoutStudentInput[] | Log_HistoriesUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: Log_HistoriesCreateOrConnectWithoutStudentInput | Log_HistoriesCreateOrConnectWithoutStudentInput[]
    upsert?: Log_HistoriesUpsertWithWhereUniqueWithoutStudentInput | Log_HistoriesUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: Log_HistoriesCreateManyStudentInputEnvelope
    set?: Log_HistoriesWhereUniqueInput | Log_HistoriesWhereUniqueInput[]
    disconnect?: Log_HistoriesWhereUniqueInput | Log_HistoriesWhereUniqueInput[]
    delete?: Log_HistoriesWhereUniqueInput | Log_HistoriesWhereUniqueInput[]
    connect?: Log_HistoriesWhereUniqueInput | Log_HistoriesWhereUniqueInput[]
    update?: Log_HistoriesUpdateWithWhereUniqueWithoutStudentInput | Log_HistoriesUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: Log_HistoriesUpdateManyWithWhereWithoutStudentInput | Log_HistoriesUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: Log_HistoriesScalarWhereInput | Log_HistoriesScalarWhereInput[]
  }

  export type PropertiesUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<PropertiesCreateWithoutStudentInput, PropertiesUncheckedCreateWithoutStudentInput> | PropertiesCreateWithoutStudentInput[] | PropertiesUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: PropertiesCreateOrConnectWithoutStudentInput | PropertiesCreateOrConnectWithoutStudentInput[]
    upsert?: PropertiesUpsertWithWhereUniqueWithoutStudentInput | PropertiesUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: PropertiesCreateManyStudentInputEnvelope
    set?: PropertiesWhereUniqueInput | PropertiesWhereUniqueInput[]
    disconnect?: PropertiesWhereUniqueInput | PropertiesWhereUniqueInput[]
    delete?: PropertiesWhereUniqueInput | PropertiesWhereUniqueInput[]
    connect?: PropertiesWhereUniqueInput | PropertiesWhereUniqueInput[]
    update?: PropertiesUpdateWithWhereUniqueWithoutStudentInput | PropertiesUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: PropertiesUpdateManyWithWhereWithoutStudentInput | PropertiesUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: PropertiesScalarWhereInput | PropertiesScalarWhereInput[]
  }

  export type Lost_Found_ReportsUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<Lost_Found_ReportsCreateWithoutStudentInput, Lost_Found_ReportsUncheckedCreateWithoutStudentInput> | Lost_Found_ReportsCreateWithoutStudentInput[] | Lost_Found_ReportsUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: Lost_Found_ReportsCreateOrConnectWithoutStudentInput | Lost_Found_ReportsCreateOrConnectWithoutStudentInput[]
    upsert?: Lost_Found_ReportsUpsertWithWhereUniqueWithoutStudentInput | Lost_Found_ReportsUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: Lost_Found_ReportsCreateManyStudentInputEnvelope
    set?: Lost_Found_ReportsWhereUniqueInput | Lost_Found_ReportsWhereUniqueInput[]
    disconnect?: Lost_Found_ReportsWhereUniqueInput | Lost_Found_ReportsWhereUniqueInput[]
    delete?: Lost_Found_ReportsWhereUniqueInput | Lost_Found_ReportsWhereUniqueInput[]
    connect?: Lost_Found_ReportsWhereUniqueInput | Lost_Found_ReportsWhereUniqueInput[]
    update?: Lost_Found_ReportsUpdateWithWhereUniqueWithoutStudentInput | Lost_Found_ReportsUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: Lost_Found_ReportsUpdateManyWithWhereWithoutStudentInput | Lost_Found_ReportsUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: Lost_Found_ReportsScalarWhereInput | Lost_Found_ReportsScalarWhereInput[]
  }

  export type Log_HistoriesUncheckedUpdateManyWithoutStudentNestedInput = {
    create?: XOR<Log_HistoriesCreateWithoutStudentInput, Log_HistoriesUncheckedCreateWithoutStudentInput> | Log_HistoriesCreateWithoutStudentInput[] | Log_HistoriesUncheckedCreateWithoutStudentInput[]
    connectOrCreate?: Log_HistoriesCreateOrConnectWithoutStudentInput | Log_HistoriesCreateOrConnectWithoutStudentInput[]
    upsert?: Log_HistoriesUpsertWithWhereUniqueWithoutStudentInput | Log_HistoriesUpsertWithWhereUniqueWithoutStudentInput[]
    createMany?: Log_HistoriesCreateManyStudentInputEnvelope
    set?: Log_HistoriesWhereUniqueInput | Log_HistoriesWhereUniqueInput[]
    disconnect?: Log_HistoriesWhereUniqueInput | Log_HistoriesWhereUniqueInput[]
    delete?: Log_HistoriesWhereUniqueInput | Log_HistoriesWhereUniqueInput[]
    connect?: Log_HistoriesWhereUniqueInput | Log_HistoriesWhereUniqueInput[]
    update?: Log_HistoriesUpdateWithWhereUniqueWithoutStudentInput | Log_HistoriesUpdateWithWhereUniqueWithoutStudentInput[]
    updateMany?: Log_HistoriesUpdateManyWithWhereWithoutStudentInput | Log_HistoriesUpdateManyWithWhereWithoutStudentInput[]
    deleteMany?: Log_HistoriesScalarWhereInput | Log_HistoriesScalarWhereInput[]
  }

  export type Log_HistoriesCreateNestedManyWithoutAdminInput = {
    create?: XOR<Log_HistoriesCreateWithoutAdminInput, Log_HistoriesUncheckedCreateWithoutAdminInput> | Log_HistoriesCreateWithoutAdminInput[] | Log_HistoriesUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: Log_HistoriesCreateOrConnectWithoutAdminInput | Log_HistoriesCreateOrConnectWithoutAdminInput[]
    createMany?: Log_HistoriesCreateManyAdminInputEnvelope
    connect?: Log_HistoriesWhereUniqueInput | Log_HistoriesWhereUniqueInput[]
  }

  export type PropertiesCreateNestedManyWithoutAdminInput = {
    create?: XOR<PropertiesCreateWithoutAdminInput, PropertiesUncheckedCreateWithoutAdminInput> | PropertiesCreateWithoutAdminInput[] | PropertiesUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: PropertiesCreateOrConnectWithoutAdminInput | PropertiesCreateOrConnectWithoutAdminInput[]
    createMany?: PropertiesCreateManyAdminInputEnvelope
    connect?: PropertiesWhereUniqueInput | PropertiesWhereUniqueInput[]
  }

  export type Property_Status_HistoriesCreateNestedManyWithoutAdminInput = {
    create?: XOR<Property_Status_HistoriesCreateWithoutAdminInput, Property_Status_HistoriesUncheckedCreateWithoutAdminInput> | Property_Status_HistoriesCreateWithoutAdminInput[] | Property_Status_HistoriesUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: Property_Status_HistoriesCreateOrConnectWithoutAdminInput | Property_Status_HistoriesCreateOrConnectWithoutAdminInput[]
    createMany?: Property_Status_HistoriesCreateManyAdminInputEnvelope
    connect?: Property_Status_HistoriesWhereUniqueInput | Property_Status_HistoriesWhereUniqueInput[]
  }

  export type Lost_Found_ReportsCreateNestedManyWithoutAdminInput = {
    create?: XOR<Lost_Found_ReportsCreateWithoutAdminInput, Lost_Found_ReportsUncheckedCreateWithoutAdminInput> | Lost_Found_ReportsCreateWithoutAdminInput[] | Lost_Found_ReportsUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: Lost_Found_ReportsCreateOrConnectWithoutAdminInput | Lost_Found_ReportsCreateOrConnectWithoutAdminInput[]
    createMany?: Lost_Found_ReportsCreateManyAdminInputEnvelope
    connect?: Lost_Found_ReportsWhereUniqueInput | Lost_Found_ReportsWhereUniqueInput[]
  }

  export type Log_HistoriesUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<Log_HistoriesCreateWithoutAdminInput, Log_HistoriesUncheckedCreateWithoutAdminInput> | Log_HistoriesCreateWithoutAdminInput[] | Log_HistoriesUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: Log_HistoriesCreateOrConnectWithoutAdminInput | Log_HistoriesCreateOrConnectWithoutAdminInput[]
    createMany?: Log_HistoriesCreateManyAdminInputEnvelope
    connect?: Log_HistoriesWhereUniqueInput | Log_HistoriesWhereUniqueInput[]
  }

  export type PropertiesUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<PropertiesCreateWithoutAdminInput, PropertiesUncheckedCreateWithoutAdminInput> | PropertiesCreateWithoutAdminInput[] | PropertiesUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: PropertiesCreateOrConnectWithoutAdminInput | PropertiesCreateOrConnectWithoutAdminInput[]
    createMany?: PropertiesCreateManyAdminInputEnvelope
    connect?: PropertiesWhereUniqueInput | PropertiesWhereUniqueInput[]
  }

  export type Property_Status_HistoriesUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<Property_Status_HistoriesCreateWithoutAdminInput, Property_Status_HistoriesUncheckedCreateWithoutAdminInput> | Property_Status_HistoriesCreateWithoutAdminInput[] | Property_Status_HistoriesUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: Property_Status_HistoriesCreateOrConnectWithoutAdminInput | Property_Status_HistoriesCreateOrConnectWithoutAdminInput[]
    createMany?: Property_Status_HistoriesCreateManyAdminInputEnvelope
    connect?: Property_Status_HistoriesWhereUniqueInput | Property_Status_HistoriesWhereUniqueInput[]
  }

  export type Lost_Found_ReportsUncheckedCreateNestedManyWithoutAdminInput = {
    create?: XOR<Lost_Found_ReportsCreateWithoutAdminInput, Lost_Found_ReportsUncheckedCreateWithoutAdminInput> | Lost_Found_ReportsCreateWithoutAdminInput[] | Lost_Found_ReportsUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: Lost_Found_ReportsCreateOrConnectWithoutAdminInput | Lost_Found_ReportsCreateOrConnectWithoutAdminInput[]
    createMany?: Lost_Found_ReportsCreateManyAdminInputEnvelope
    connect?: Lost_Found_ReportsWhereUniqueInput | Lost_Found_ReportsWhereUniqueInput[]
  }

  export type Log_HistoriesUpdateManyWithoutAdminNestedInput = {
    create?: XOR<Log_HistoriesCreateWithoutAdminInput, Log_HistoriesUncheckedCreateWithoutAdminInput> | Log_HistoriesCreateWithoutAdminInput[] | Log_HistoriesUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: Log_HistoriesCreateOrConnectWithoutAdminInput | Log_HistoriesCreateOrConnectWithoutAdminInput[]
    upsert?: Log_HistoriesUpsertWithWhereUniqueWithoutAdminInput | Log_HistoriesUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: Log_HistoriesCreateManyAdminInputEnvelope
    set?: Log_HistoriesWhereUniqueInput | Log_HistoriesWhereUniqueInput[]
    disconnect?: Log_HistoriesWhereUniqueInput | Log_HistoriesWhereUniqueInput[]
    delete?: Log_HistoriesWhereUniqueInput | Log_HistoriesWhereUniqueInput[]
    connect?: Log_HistoriesWhereUniqueInput | Log_HistoriesWhereUniqueInput[]
    update?: Log_HistoriesUpdateWithWhereUniqueWithoutAdminInput | Log_HistoriesUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: Log_HistoriesUpdateManyWithWhereWithoutAdminInput | Log_HistoriesUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: Log_HistoriesScalarWhereInput | Log_HistoriesScalarWhereInput[]
  }

  export type PropertiesUpdateManyWithoutAdminNestedInput = {
    create?: XOR<PropertiesCreateWithoutAdminInput, PropertiesUncheckedCreateWithoutAdminInput> | PropertiesCreateWithoutAdminInput[] | PropertiesUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: PropertiesCreateOrConnectWithoutAdminInput | PropertiesCreateOrConnectWithoutAdminInput[]
    upsert?: PropertiesUpsertWithWhereUniqueWithoutAdminInput | PropertiesUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: PropertiesCreateManyAdminInputEnvelope
    set?: PropertiesWhereUniqueInput | PropertiesWhereUniqueInput[]
    disconnect?: PropertiesWhereUniqueInput | PropertiesWhereUniqueInput[]
    delete?: PropertiesWhereUniqueInput | PropertiesWhereUniqueInput[]
    connect?: PropertiesWhereUniqueInput | PropertiesWhereUniqueInput[]
    update?: PropertiesUpdateWithWhereUniqueWithoutAdminInput | PropertiesUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: PropertiesUpdateManyWithWhereWithoutAdminInput | PropertiesUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: PropertiesScalarWhereInput | PropertiesScalarWhereInput[]
  }

  export type Property_Status_HistoriesUpdateManyWithoutAdminNestedInput = {
    create?: XOR<Property_Status_HistoriesCreateWithoutAdminInput, Property_Status_HistoriesUncheckedCreateWithoutAdminInput> | Property_Status_HistoriesCreateWithoutAdminInput[] | Property_Status_HistoriesUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: Property_Status_HistoriesCreateOrConnectWithoutAdminInput | Property_Status_HistoriesCreateOrConnectWithoutAdminInput[]
    upsert?: Property_Status_HistoriesUpsertWithWhereUniqueWithoutAdminInput | Property_Status_HistoriesUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: Property_Status_HistoriesCreateManyAdminInputEnvelope
    set?: Property_Status_HistoriesWhereUniqueInput | Property_Status_HistoriesWhereUniqueInput[]
    disconnect?: Property_Status_HistoriesWhereUniqueInput | Property_Status_HistoriesWhereUniqueInput[]
    delete?: Property_Status_HistoriesWhereUniqueInput | Property_Status_HistoriesWhereUniqueInput[]
    connect?: Property_Status_HistoriesWhereUniqueInput | Property_Status_HistoriesWhereUniqueInput[]
    update?: Property_Status_HistoriesUpdateWithWhereUniqueWithoutAdminInput | Property_Status_HistoriesUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: Property_Status_HistoriesUpdateManyWithWhereWithoutAdminInput | Property_Status_HistoriesUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: Property_Status_HistoriesScalarWhereInput | Property_Status_HistoriesScalarWhereInput[]
  }

  export type Lost_Found_ReportsUpdateManyWithoutAdminNestedInput = {
    create?: XOR<Lost_Found_ReportsCreateWithoutAdminInput, Lost_Found_ReportsUncheckedCreateWithoutAdminInput> | Lost_Found_ReportsCreateWithoutAdminInput[] | Lost_Found_ReportsUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: Lost_Found_ReportsCreateOrConnectWithoutAdminInput | Lost_Found_ReportsCreateOrConnectWithoutAdminInput[]
    upsert?: Lost_Found_ReportsUpsertWithWhereUniqueWithoutAdminInput | Lost_Found_ReportsUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: Lost_Found_ReportsCreateManyAdminInputEnvelope
    set?: Lost_Found_ReportsWhereUniqueInput | Lost_Found_ReportsWhereUniqueInput[]
    disconnect?: Lost_Found_ReportsWhereUniqueInput | Lost_Found_ReportsWhereUniqueInput[]
    delete?: Lost_Found_ReportsWhereUniqueInput | Lost_Found_ReportsWhereUniqueInput[]
    connect?: Lost_Found_ReportsWhereUniqueInput | Lost_Found_ReportsWhereUniqueInput[]
    update?: Lost_Found_ReportsUpdateWithWhereUniqueWithoutAdminInput | Lost_Found_ReportsUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: Lost_Found_ReportsUpdateManyWithWhereWithoutAdminInput | Lost_Found_ReportsUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: Lost_Found_ReportsScalarWhereInput | Lost_Found_ReportsScalarWhereInput[]
  }

  export type Log_HistoriesUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<Log_HistoriesCreateWithoutAdminInput, Log_HistoriesUncheckedCreateWithoutAdminInput> | Log_HistoriesCreateWithoutAdminInput[] | Log_HistoriesUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: Log_HistoriesCreateOrConnectWithoutAdminInput | Log_HistoriesCreateOrConnectWithoutAdminInput[]
    upsert?: Log_HistoriesUpsertWithWhereUniqueWithoutAdminInput | Log_HistoriesUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: Log_HistoriesCreateManyAdminInputEnvelope
    set?: Log_HistoriesWhereUniqueInput | Log_HistoriesWhereUniqueInput[]
    disconnect?: Log_HistoriesWhereUniqueInput | Log_HistoriesWhereUniqueInput[]
    delete?: Log_HistoriesWhereUniqueInput | Log_HistoriesWhereUniqueInput[]
    connect?: Log_HistoriesWhereUniqueInput | Log_HistoriesWhereUniqueInput[]
    update?: Log_HistoriesUpdateWithWhereUniqueWithoutAdminInput | Log_HistoriesUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: Log_HistoriesUpdateManyWithWhereWithoutAdminInput | Log_HistoriesUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: Log_HistoriesScalarWhereInput | Log_HistoriesScalarWhereInput[]
  }

  export type PropertiesUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<PropertiesCreateWithoutAdminInput, PropertiesUncheckedCreateWithoutAdminInput> | PropertiesCreateWithoutAdminInput[] | PropertiesUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: PropertiesCreateOrConnectWithoutAdminInput | PropertiesCreateOrConnectWithoutAdminInput[]
    upsert?: PropertiesUpsertWithWhereUniqueWithoutAdminInput | PropertiesUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: PropertiesCreateManyAdminInputEnvelope
    set?: PropertiesWhereUniqueInput | PropertiesWhereUniqueInput[]
    disconnect?: PropertiesWhereUniqueInput | PropertiesWhereUniqueInput[]
    delete?: PropertiesWhereUniqueInput | PropertiesWhereUniqueInput[]
    connect?: PropertiesWhereUniqueInput | PropertiesWhereUniqueInput[]
    update?: PropertiesUpdateWithWhereUniqueWithoutAdminInput | PropertiesUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: PropertiesUpdateManyWithWhereWithoutAdminInput | PropertiesUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: PropertiesScalarWhereInput | PropertiesScalarWhereInput[]
  }

  export type Property_Status_HistoriesUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<Property_Status_HistoriesCreateWithoutAdminInput, Property_Status_HistoriesUncheckedCreateWithoutAdminInput> | Property_Status_HistoriesCreateWithoutAdminInput[] | Property_Status_HistoriesUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: Property_Status_HistoriesCreateOrConnectWithoutAdminInput | Property_Status_HistoriesCreateOrConnectWithoutAdminInput[]
    upsert?: Property_Status_HistoriesUpsertWithWhereUniqueWithoutAdminInput | Property_Status_HistoriesUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: Property_Status_HistoriesCreateManyAdminInputEnvelope
    set?: Property_Status_HistoriesWhereUniqueInput | Property_Status_HistoriesWhereUniqueInput[]
    disconnect?: Property_Status_HistoriesWhereUniqueInput | Property_Status_HistoriesWhereUniqueInput[]
    delete?: Property_Status_HistoriesWhereUniqueInput | Property_Status_HistoriesWhereUniqueInput[]
    connect?: Property_Status_HistoriesWhereUniqueInput | Property_Status_HistoriesWhereUniqueInput[]
    update?: Property_Status_HistoriesUpdateWithWhereUniqueWithoutAdminInput | Property_Status_HistoriesUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: Property_Status_HistoriesUpdateManyWithWhereWithoutAdminInput | Property_Status_HistoriesUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: Property_Status_HistoriesScalarWhereInput | Property_Status_HistoriesScalarWhereInput[]
  }

  export type Lost_Found_ReportsUncheckedUpdateManyWithoutAdminNestedInput = {
    create?: XOR<Lost_Found_ReportsCreateWithoutAdminInput, Lost_Found_ReportsUncheckedCreateWithoutAdminInput> | Lost_Found_ReportsCreateWithoutAdminInput[] | Lost_Found_ReportsUncheckedCreateWithoutAdminInput[]
    connectOrCreate?: Lost_Found_ReportsCreateOrConnectWithoutAdminInput | Lost_Found_ReportsCreateOrConnectWithoutAdminInput[]
    upsert?: Lost_Found_ReportsUpsertWithWhereUniqueWithoutAdminInput | Lost_Found_ReportsUpsertWithWhereUniqueWithoutAdminInput[]
    createMany?: Lost_Found_ReportsCreateManyAdminInputEnvelope
    set?: Lost_Found_ReportsWhereUniqueInput | Lost_Found_ReportsWhereUniqueInput[]
    disconnect?: Lost_Found_ReportsWhereUniqueInput | Lost_Found_ReportsWhereUniqueInput[]
    delete?: Lost_Found_ReportsWhereUniqueInput | Lost_Found_ReportsWhereUniqueInput[]
    connect?: Lost_Found_ReportsWhereUniqueInput | Lost_Found_ReportsWhereUniqueInput[]
    update?: Lost_Found_ReportsUpdateWithWhereUniqueWithoutAdminInput | Lost_Found_ReportsUpdateWithWhereUniqueWithoutAdminInput[]
    updateMany?: Lost_Found_ReportsUpdateManyWithWhereWithoutAdminInput | Lost_Found_ReportsUpdateManyWithWhereWithoutAdminInput[]
    deleteMany?: Lost_Found_ReportsScalarWhereInput | Lost_Found_ReportsScalarWhereInput[]
  }

  export type StudentsCreateNestedOneWithoutPropertiesInput = {
    create?: XOR<StudentsCreateWithoutPropertiesInput, StudentsUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: StudentsCreateOrConnectWithoutPropertiesInput
    connect?: StudentsWhereUniqueInput
  }

  export type AdminsCreateNestedOneWithoutPropertyInput = {
    create?: XOR<AdminsCreateWithoutPropertyInput, AdminsUncheckedCreateWithoutPropertyInput>
    connectOrCreate?: AdminsCreateOrConnectWithoutPropertyInput
    connect?: AdminsWhereUniqueInput
  }

  export type Property_Status_HistoriesCreateNestedManyWithoutPropertyInput = {
    create?: XOR<Property_Status_HistoriesCreateWithoutPropertyInput, Property_Status_HistoriesUncheckedCreateWithoutPropertyInput> | Property_Status_HistoriesCreateWithoutPropertyInput[] | Property_Status_HistoriesUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: Property_Status_HistoriesCreateOrConnectWithoutPropertyInput | Property_Status_HistoriesCreateOrConnectWithoutPropertyInput[]
    createMany?: Property_Status_HistoriesCreateManyPropertyInputEnvelope
    connect?: Property_Status_HistoriesWhereUniqueInput | Property_Status_HistoriesWhereUniqueInput[]
  }

  export type Lost_Found_ReportsCreateNestedManyWithoutPropertyInput = {
    create?: XOR<Lost_Found_ReportsCreateWithoutPropertyInput, Lost_Found_ReportsUncheckedCreateWithoutPropertyInput> | Lost_Found_ReportsCreateWithoutPropertyInput[] | Lost_Found_ReportsUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: Lost_Found_ReportsCreateOrConnectWithoutPropertyInput | Lost_Found_ReportsCreateOrConnectWithoutPropertyInput[]
    createMany?: Lost_Found_ReportsCreateManyPropertyInputEnvelope
    connect?: Lost_Found_ReportsWhereUniqueInput | Lost_Found_ReportsWhereUniqueInput[]
  }

  export type Property_Status_HistoriesUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<Property_Status_HistoriesCreateWithoutPropertyInput, Property_Status_HistoriesUncheckedCreateWithoutPropertyInput> | Property_Status_HistoriesCreateWithoutPropertyInput[] | Property_Status_HistoriesUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: Property_Status_HistoriesCreateOrConnectWithoutPropertyInput | Property_Status_HistoriesCreateOrConnectWithoutPropertyInput[]
    createMany?: Property_Status_HistoriesCreateManyPropertyInputEnvelope
    connect?: Property_Status_HistoriesWhereUniqueInput | Property_Status_HistoriesWhereUniqueInput[]
  }

  export type Lost_Found_ReportsUncheckedCreateNestedManyWithoutPropertyInput = {
    create?: XOR<Lost_Found_ReportsCreateWithoutPropertyInput, Lost_Found_ReportsUncheckedCreateWithoutPropertyInput> | Lost_Found_ReportsCreateWithoutPropertyInput[] | Lost_Found_ReportsUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: Lost_Found_ReportsCreateOrConnectWithoutPropertyInput | Lost_Found_ReportsCreateOrConnectWithoutPropertyInput[]
    createMany?: Lost_Found_ReportsCreateManyPropertyInputEnvelope
    connect?: Lost_Found_ReportsWhereUniqueInput | Lost_Found_ReportsWhereUniqueInput[]
  }

  export type StudentsUpdateOneRequiredWithoutPropertiesNestedInput = {
    create?: XOR<StudentsCreateWithoutPropertiesInput, StudentsUncheckedCreateWithoutPropertiesInput>
    connectOrCreate?: StudentsCreateOrConnectWithoutPropertiesInput
    upsert?: StudentsUpsertWithoutPropertiesInput
    connect?: StudentsWhereUniqueInput
    update?: XOR<XOR<StudentsUpdateToOneWithWhereWithoutPropertiesInput, StudentsUpdateWithoutPropertiesInput>, StudentsUncheckedUpdateWithoutPropertiesInput>
  }

  export type AdminsUpdateOneRequiredWithoutPropertyNestedInput = {
    create?: XOR<AdminsCreateWithoutPropertyInput, AdminsUncheckedCreateWithoutPropertyInput>
    connectOrCreate?: AdminsCreateOrConnectWithoutPropertyInput
    upsert?: AdminsUpsertWithoutPropertyInput
    connect?: AdminsWhereUniqueInput
    update?: XOR<XOR<AdminsUpdateToOneWithWhereWithoutPropertyInput, AdminsUpdateWithoutPropertyInput>, AdminsUncheckedUpdateWithoutPropertyInput>
  }

  export type Property_Status_HistoriesUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<Property_Status_HistoriesCreateWithoutPropertyInput, Property_Status_HistoriesUncheckedCreateWithoutPropertyInput> | Property_Status_HistoriesCreateWithoutPropertyInput[] | Property_Status_HistoriesUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: Property_Status_HistoriesCreateOrConnectWithoutPropertyInput | Property_Status_HistoriesCreateOrConnectWithoutPropertyInput[]
    upsert?: Property_Status_HistoriesUpsertWithWhereUniqueWithoutPropertyInput | Property_Status_HistoriesUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: Property_Status_HistoriesCreateManyPropertyInputEnvelope
    set?: Property_Status_HistoriesWhereUniqueInput | Property_Status_HistoriesWhereUniqueInput[]
    disconnect?: Property_Status_HistoriesWhereUniqueInput | Property_Status_HistoriesWhereUniqueInput[]
    delete?: Property_Status_HistoriesWhereUniqueInput | Property_Status_HistoriesWhereUniqueInput[]
    connect?: Property_Status_HistoriesWhereUniqueInput | Property_Status_HistoriesWhereUniqueInput[]
    update?: Property_Status_HistoriesUpdateWithWhereUniqueWithoutPropertyInput | Property_Status_HistoriesUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: Property_Status_HistoriesUpdateManyWithWhereWithoutPropertyInput | Property_Status_HistoriesUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: Property_Status_HistoriesScalarWhereInput | Property_Status_HistoriesScalarWhereInput[]
  }

  export type Lost_Found_ReportsUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<Lost_Found_ReportsCreateWithoutPropertyInput, Lost_Found_ReportsUncheckedCreateWithoutPropertyInput> | Lost_Found_ReportsCreateWithoutPropertyInput[] | Lost_Found_ReportsUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: Lost_Found_ReportsCreateOrConnectWithoutPropertyInput | Lost_Found_ReportsCreateOrConnectWithoutPropertyInput[]
    upsert?: Lost_Found_ReportsUpsertWithWhereUniqueWithoutPropertyInput | Lost_Found_ReportsUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: Lost_Found_ReportsCreateManyPropertyInputEnvelope
    set?: Lost_Found_ReportsWhereUniqueInput | Lost_Found_ReportsWhereUniqueInput[]
    disconnect?: Lost_Found_ReportsWhereUniqueInput | Lost_Found_ReportsWhereUniqueInput[]
    delete?: Lost_Found_ReportsWhereUniqueInput | Lost_Found_ReportsWhereUniqueInput[]
    connect?: Lost_Found_ReportsWhereUniqueInput | Lost_Found_ReportsWhereUniqueInput[]
    update?: Lost_Found_ReportsUpdateWithWhereUniqueWithoutPropertyInput | Lost_Found_ReportsUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: Lost_Found_ReportsUpdateManyWithWhereWithoutPropertyInput | Lost_Found_ReportsUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: Lost_Found_ReportsScalarWhereInput | Lost_Found_ReportsScalarWhereInput[]
  }

  export type Property_Status_HistoriesUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<Property_Status_HistoriesCreateWithoutPropertyInput, Property_Status_HistoriesUncheckedCreateWithoutPropertyInput> | Property_Status_HistoriesCreateWithoutPropertyInput[] | Property_Status_HistoriesUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: Property_Status_HistoriesCreateOrConnectWithoutPropertyInput | Property_Status_HistoriesCreateOrConnectWithoutPropertyInput[]
    upsert?: Property_Status_HistoriesUpsertWithWhereUniqueWithoutPropertyInput | Property_Status_HistoriesUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: Property_Status_HistoriesCreateManyPropertyInputEnvelope
    set?: Property_Status_HistoriesWhereUniqueInput | Property_Status_HistoriesWhereUniqueInput[]
    disconnect?: Property_Status_HistoriesWhereUniqueInput | Property_Status_HistoriesWhereUniqueInput[]
    delete?: Property_Status_HistoriesWhereUniqueInput | Property_Status_HistoriesWhereUniqueInput[]
    connect?: Property_Status_HistoriesWhereUniqueInput | Property_Status_HistoriesWhereUniqueInput[]
    update?: Property_Status_HistoriesUpdateWithWhereUniqueWithoutPropertyInput | Property_Status_HistoriesUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: Property_Status_HistoriesUpdateManyWithWhereWithoutPropertyInput | Property_Status_HistoriesUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: Property_Status_HistoriesScalarWhereInput | Property_Status_HistoriesScalarWhereInput[]
  }

  export type Lost_Found_ReportsUncheckedUpdateManyWithoutPropertyNestedInput = {
    create?: XOR<Lost_Found_ReportsCreateWithoutPropertyInput, Lost_Found_ReportsUncheckedCreateWithoutPropertyInput> | Lost_Found_ReportsCreateWithoutPropertyInput[] | Lost_Found_ReportsUncheckedCreateWithoutPropertyInput[]
    connectOrCreate?: Lost_Found_ReportsCreateOrConnectWithoutPropertyInput | Lost_Found_ReportsCreateOrConnectWithoutPropertyInput[]
    upsert?: Lost_Found_ReportsUpsertWithWhereUniqueWithoutPropertyInput | Lost_Found_ReportsUpsertWithWhereUniqueWithoutPropertyInput[]
    createMany?: Lost_Found_ReportsCreateManyPropertyInputEnvelope
    set?: Lost_Found_ReportsWhereUniqueInput | Lost_Found_ReportsWhereUniqueInput[]
    disconnect?: Lost_Found_ReportsWhereUniqueInput | Lost_Found_ReportsWhereUniqueInput[]
    delete?: Lost_Found_ReportsWhereUniqueInput | Lost_Found_ReportsWhereUniqueInput[]
    connect?: Lost_Found_ReportsWhereUniqueInput | Lost_Found_ReportsWhereUniqueInput[]
    update?: Lost_Found_ReportsUpdateWithWhereUniqueWithoutPropertyInput | Lost_Found_ReportsUpdateWithWhereUniqueWithoutPropertyInput[]
    updateMany?: Lost_Found_ReportsUpdateManyWithWhereWithoutPropertyInput | Lost_Found_ReportsUpdateManyWithWhereWithoutPropertyInput[]
    deleteMany?: Lost_Found_ReportsScalarWhereInput | Lost_Found_ReportsScalarWhereInput[]
  }

  export type PropertiesCreateNestedOneWithoutProperty_status_historyInput = {
    create?: XOR<PropertiesCreateWithoutProperty_status_historyInput, PropertiesUncheckedCreateWithoutProperty_status_historyInput>
    connectOrCreate?: PropertiesCreateOrConnectWithoutProperty_status_historyInput
    connect?: PropertiesWhereUniqueInput
  }

  export type AdminsCreateNestedOneWithoutProperty_status_historyInput = {
    create?: XOR<AdminsCreateWithoutProperty_status_historyInput, AdminsUncheckedCreateWithoutProperty_status_historyInput>
    connectOrCreate?: AdminsCreateOrConnectWithoutProperty_status_historyInput
    connect?: AdminsWhereUniqueInput
  }

  export type PropertiesUpdateOneRequiredWithoutProperty_status_historyNestedInput = {
    create?: XOR<PropertiesCreateWithoutProperty_status_historyInput, PropertiesUncheckedCreateWithoutProperty_status_historyInput>
    connectOrCreate?: PropertiesCreateOrConnectWithoutProperty_status_historyInput
    upsert?: PropertiesUpsertWithoutProperty_status_historyInput
    connect?: PropertiesWhereUniqueInput
    update?: XOR<XOR<PropertiesUpdateToOneWithWhereWithoutProperty_status_historyInput, PropertiesUpdateWithoutProperty_status_historyInput>, PropertiesUncheckedUpdateWithoutProperty_status_historyInput>
  }

  export type AdminsUpdateOneRequiredWithoutProperty_status_historyNestedInput = {
    create?: XOR<AdminsCreateWithoutProperty_status_historyInput, AdminsUncheckedCreateWithoutProperty_status_historyInput>
    connectOrCreate?: AdminsCreateOrConnectWithoutProperty_status_historyInput
    upsert?: AdminsUpsertWithoutProperty_status_historyInput
    connect?: AdminsWhereUniqueInput
    update?: XOR<XOR<AdminsUpdateToOneWithWhereWithoutProperty_status_historyInput, AdminsUpdateWithoutProperty_status_historyInput>, AdminsUncheckedUpdateWithoutProperty_status_historyInput>
  }

  export type PropertiesCreateNestedOneWithoutLost_found_reportsInput = {
    create?: XOR<PropertiesCreateWithoutLost_found_reportsInput, PropertiesUncheckedCreateWithoutLost_found_reportsInput>
    connectOrCreate?: PropertiesCreateOrConnectWithoutLost_found_reportsInput
    connect?: PropertiesWhereUniqueInput
  }

  export type StudentsCreateNestedOneWithoutLost_found_reportsInput = {
    create?: XOR<StudentsCreateWithoutLost_found_reportsInput, StudentsUncheckedCreateWithoutLost_found_reportsInput>
    connectOrCreate?: StudentsCreateOrConnectWithoutLost_found_reportsInput
    connect?: StudentsWhereUniqueInput
  }

  export type AdminsCreateNestedOneWithoutLost_found_reportsInput = {
    create?: XOR<AdminsCreateWithoutLost_found_reportsInput, AdminsUncheckedCreateWithoutLost_found_reportsInput>
    connectOrCreate?: AdminsCreateOrConnectWithoutLost_found_reportsInput
    connect?: AdminsWhereUniqueInput
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PropertiesUpdateOneRequiredWithoutLost_found_reportsNestedInput = {
    create?: XOR<PropertiesCreateWithoutLost_found_reportsInput, PropertiesUncheckedCreateWithoutLost_found_reportsInput>
    connectOrCreate?: PropertiesCreateOrConnectWithoutLost_found_reportsInput
    upsert?: PropertiesUpsertWithoutLost_found_reportsInput
    connect?: PropertiesWhereUniqueInput
    update?: XOR<XOR<PropertiesUpdateToOneWithWhereWithoutLost_found_reportsInput, PropertiesUpdateWithoutLost_found_reportsInput>, PropertiesUncheckedUpdateWithoutLost_found_reportsInput>
  }

  export type StudentsUpdateOneRequiredWithoutLost_found_reportsNestedInput = {
    create?: XOR<StudentsCreateWithoutLost_found_reportsInput, StudentsUncheckedCreateWithoutLost_found_reportsInput>
    connectOrCreate?: StudentsCreateOrConnectWithoutLost_found_reportsInput
    upsert?: StudentsUpsertWithoutLost_found_reportsInput
    connect?: StudentsWhereUniqueInput
    update?: XOR<XOR<StudentsUpdateToOneWithWhereWithoutLost_found_reportsInput, StudentsUpdateWithoutLost_found_reportsInput>, StudentsUncheckedUpdateWithoutLost_found_reportsInput>
  }

  export type AdminsUpdateOneRequiredWithoutLost_found_reportsNestedInput = {
    create?: XOR<AdminsCreateWithoutLost_found_reportsInput, AdminsUncheckedCreateWithoutLost_found_reportsInput>
    connectOrCreate?: AdminsCreateOrConnectWithoutLost_found_reportsInput
    upsert?: AdminsUpsertWithoutLost_found_reportsInput
    connect?: AdminsWhereUniqueInput
    update?: XOR<XOR<AdminsUpdateToOneWithWhereWithoutLost_found_reportsInput, AdminsUpdateWithoutLost_found_reportsInput>, AdminsUncheckedUpdateWithoutLost_found_reportsInput>
  }

  export type StudentsCreateNestedOneWithoutLog_historyInput = {
    create?: XOR<StudentsCreateWithoutLog_historyInput, StudentsUncheckedCreateWithoutLog_historyInput>
    connectOrCreate?: StudentsCreateOrConnectWithoutLog_historyInput
    connect?: StudentsWhereUniqueInput
  }

  export type AdminsCreateNestedOneWithoutLog_historyInput = {
    create?: XOR<AdminsCreateWithoutLog_historyInput, AdminsUncheckedCreateWithoutLog_historyInput>
    connectOrCreate?: AdminsCreateOrConnectWithoutLog_historyInput
    connect?: AdminsWhereUniqueInput
  }

  export type StudentsUpdateOneRequiredWithoutLog_historyNestedInput = {
    create?: XOR<StudentsCreateWithoutLog_historyInput, StudentsUncheckedCreateWithoutLog_historyInput>
    connectOrCreate?: StudentsCreateOrConnectWithoutLog_historyInput
    upsert?: StudentsUpsertWithoutLog_historyInput
    connect?: StudentsWhereUniqueInput
    update?: XOR<XOR<StudentsUpdateToOneWithWhereWithoutLog_historyInput, StudentsUpdateWithoutLog_historyInput>, StudentsUncheckedUpdateWithoutLog_historyInput>
  }

  export type AdminsUpdateOneRequiredWithoutLog_historyNestedInput = {
    create?: XOR<AdminsCreateWithoutLog_historyInput, AdminsUncheckedCreateWithoutLog_historyInput>
    connectOrCreate?: AdminsCreateOrConnectWithoutLog_historyInput
    upsert?: AdminsUpsertWithoutLog_historyInput
    connect?: AdminsWhereUniqueInput
    update?: XOR<XOR<AdminsUpdateToOneWithWhereWithoutLog_historyInput, AdminsUpdateWithoutLog_historyInput>, AdminsUncheckedUpdateWithoutLog_historyInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
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

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
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

  export type PropertiesCreateWithoutStudentInput = {
    id?: string
    type: string
    title: string
    description: string
    serialNumber: string
    imageUrl?: string | null
    status?: string
    createdAt?: Date | string
    admin: AdminsCreateNestedOneWithoutPropertyInput
    property_status_history?: Property_Status_HistoriesCreateNestedManyWithoutPropertyInput
    lost_found_reports?: Lost_Found_ReportsCreateNestedManyWithoutPropertyInput
  }

  export type PropertiesUncheckedCreateWithoutStudentInput = {
    id?: string
    type: string
    title: string
    description: string
    serialNumber: string
    imageUrl?: string | null
    status?: string
    approvedBy: string
    createdAt?: Date | string
    property_status_history?: Property_Status_HistoriesUncheckedCreateNestedManyWithoutPropertyInput
    lost_found_reports?: Lost_Found_ReportsUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertiesCreateOrConnectWithoutStudentInput = {
    where: PropertiesWhereUniqueInput
    create: XOR<PropertiesCreateWithoutStudentInput, PropertiesUncheckedCreateWithoutStudentInput>
  }

  export type PropertiesCreateManyStudentInputEnvelope = {
    data: PropertiesCreateManyStudentInput | PropertiesCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type Lost_Found_ReportsCreateWithoutStudentInput = {
    id?: string
    reportType: string
    description: string
    reportDate?: Date | string
    resolved: boolean
    property: PropertiesCreateNestedOneWithoutLost_found_reportsInput
    admin: AdminsCreateNestedOneWithoutLost_found_reportsInput
  }

  export type Lost_Found_ReportsUncheckedCreateWithoutStudentInput = {
    id?: string
    propId: string
    reportType: string
    description: string
    reportDate?: Date | string
    resolved: boolean
    examinedBy: string
  }

  export type Lost_Found_ReportsCreateOrConnectWithoutStudentInput = {
    where: Lost_Found_ReportsWhereUniqueInput
    create: XOR<Lost_Found_ReportsCreateWithoutStudentInput, Lost_Found_ReportsUncheckedCreateWithoutStudentInput>
  }

  export type Lost_Found_ReportsCreateManyStudentInputEnvelope = {
    data: Lost_Found_ReportsCreateManyStudentInput | Lost_Found_ReportsCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type Log_HistoriesCreateWithoutStudentInput = {
    id?: string
    role: string
    createdAt: string
    admin: AdminsCreateNestedOneWithoutLog_historyInput
  }

  export type Log_HistoriesUncheckedCreateWithoutStudentInput = {
    id?: string
    adminId: string
    role: string
    createdAt: string
  }

  export type Log_HistoriesCreateOrConnectWithoutStudentInput = {
    where: Log_HistoriesWhereUniqueInput
    create: XOR<Log_HistoriesCreateWithoutStudentInput, Log_HistoriesUncheckedCreateWithoutStudentInput>
  }

  export type Log_HistoriesCreateManyStudentInputEnvelope = {
    data: Log_HistoriesCreateManyStudentInput | Log_HistoriesCreateManyStudentInput[]
    skipDuplicates?: boolean
  }

  export type PropertiesUpsertWithWhereUniqueWithoutStudentInput = {
    where: PropertiesWhereUniqueInput
    update: XOR<PropertiesUpdateWithoutStudentInput, PropertiesUncheckedUpdateWithoutStudentInput>
    create: XOR<PropertiesCreateWithoutStudentInput, PropertiesUncheckedCreateWithoutStudentInput>
  }

  export type PropertiesUpdateWithWhereUniqueWithoutStudentInput = {
    where: PropertiesWhereUniqueInput
    data: XOR<PropertiesUpdateWithoutStudentInput, PropertiesUncheckedUpdateWithoutStudentInput>
  }

  export type PropertiesUpdateManyWithWhereWithoutStudentInput = {
    where: PropertiesScalarWhereInput
    data: XOR<PropertiesUpdateManyMutationInput, PropertiesUncheckedUpdateManyWithoutStudentInput>
  }

  export type PropertiesScalarWhereInput = {
    AND?: PropertiesScalarWhereInput | PropertiesScalarWhereInput[]
    OR?: PropertiesScalarWhereInput[]
    NOT?: PropertiesScalarWhereInput | PropertiesScalarWhereInput[]
    id?: UuidFilter<"Properties"> | string
    type?: StringFilter<"Properties"> | string
    title?: StringFilter<"Properties"> | string
    description?: StringFilter<"Properties"> | string
    serialNumber?: StringFilter<"Properties"> | string
    imageUrl?: StringNullableFilter<"Properties"> | string | null
    status?: StringFilter<"Properties"> | string
    studId?: UuidFilter<"Properties"> | string
    approvedBy?: UuidFilter<"Properties"> | string
    createdAt?: DateTimeFilter<"Properties"> | Date | string
  }

  export type Lost_Found_ReportsUpsertWithWhereUniqueWithoutStudentInput = {
    where: Lost_Found_ReportsWhereUniqueInput
    update: XOR<Lost_Found_ReportsUpdateWithoutStudentInput, Lost_Found_ReportsUncheckedUpdateWithoutStudentInput>
    create: XOR<Lost_Found_ReportsCreateWithoutStudentInput, Lost_Found_ReportsUncheckedCreateWithoutStudentInput>
  }

  export type Lost_Found_ReportsUpdateWithWhereUniqueWithoutStudentInput = {
    where: Lost_Found_ReportsWhereUniqueInput
    data: XOR<Lost_Found_ReportsUpdateWithoutStudentInput, Lost_Found_ReportsUncheckedUpdateWithoutStudentInput>
  }

  export type Lost_Found_ReportsUpdateManyWithWhereWithoutStudentInput = {
    where: Lost_Found_ReportsScalarWhereInput
    data: XOR<Lost_Found_ReportsUpdateManyMutationInput, Lost_Found_ReportsUncheckedUpdateManyWithoutStudentInput>
  }

  export type Lost_Found_ReportsScalarWhereInput = {
    AND?: Lost_Found_ReportsScalarWhereInput | Lost_Found_ReportsScalarWhereInput[]
    OR?: Lost_Found_ReportsScalarWhereInput[]
    NOT?: Lost_Found_ReportsScalarWhereInput | Lost_Found_ReportsScalarWhereInput[]
    id?: UuidFilter<"Lost_Found_Reports"> | string
    propId?: UuidFilter<"Lost_Found_Reports"> | string
    studId?: UuidFilter<"Lost_Found_Reports"> | string
    reportType?: StringFilter<"Lost_Found_Reports"> | string
    description?: StringFilter<"Lost_Found_Reports"> | string
    reportDate?: DateTimeFilter<"Lost_Found_Reports"> | Date | string
    resolved?: BoolFilter<"Lost_Found_Reports"> | boolean
    examinedBy?: UuidFilter<"Lost_Found_Reports"> | string
  }

  export type Log_HistoriesUpsertWithWhereUniqueWithoutStudentInput = {
    where: Log_HistoriesWhereUniqueInput
    update: XOR<Log_HistoriesUpdateWithoutStudentInput, Log_HistoriesUncheckedUpdateWithoutStudentInput>
    create: XOR<Log_HistoriesCreateWithoutStudentInput, Log_HistoriesUncheckedCreateWithoutStudentInput>
  }

  export type Log_HistoriesUpdateWithWhereUniqueWithoutStudentInput = {
    where: Log_HistoriesWhereUniqueInput
    data: XOR<Log_HistoriesUpdateWithoutStudentInput, Log_HistoriesUncheckedUpdateWithoutStudentInput>
  }

  export type Log_HistoriesUpdateManyWithWhereWithoutStudentInput = {
    where: Log_HistoriesScalarWhereInput
    data: XOR<Log_HistoriesUpdateManyMutationInput, Log_HistoriesUncheckedUpdateManyWithoutStudentInput>
  }

  export type Log_HistoriesScalarWhereInput = {
    AND?: Log_HistoriesScalarWhereInput | Log_HistoriesScalarWhereInput[]
    OR?: Log_HistoriesScalarWhereInput[]
    NOT?: Log_HistoriesScalarWhereInput | Log_HistoriesScalarWhereInput[]
    id?: UuidFilter<"Log_Histories"> | string
    studId?: UuidFilter<"Log_Histories"> | string
    adminId?: UuidFilter<"Log_Histories"> | string
    role?: StringFilter<"Log_Histories"> | string
    createdAt?: StringFilter<"Log_Histories"> | string
  }

  export type Log_HistoriesCreateWithoutAdminInput = {
    id?: string
    role: string
    createdAt: string
    student: StudentsCreateNestedOneWithoutLog_historyInput
  }

  export type Log_HistoriesUncheckedCreateWithoutAdminInput = {
    id?: string
    studId: string
    role: string
    createdAt: string
  }

  export type Log_HistoriesCreateOrConnectWithoutAdminInput = {
    where: Log_HistoriesWhereUniqueInput
    create: XOR<Log_HistoriesCreateWithoutAdminInput, Log_HistoriesUncheckedCreateWithoutAdminInput>
  }

  export type Log_HistoriesCreateManyAdminInputEnvelope = {
    data: Log_HistoriesCreateManyAdminInput | Log_HistoriesCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type PropertiesCreateWithoutAdminInput = {
    id?: string
    type: string
    title: string
    description: string
    serialNumber: string
    imageUrl?: string | null
    status?: string
    createdAt?: Date | string
    student: StudentsCreateNestedOneWithoutPropertiesInput
    property_status_history?: Property_Status_HistoriesCreateNestedManyWithoutPropertyInput
    lost_found_reports?: Lost_Found_ReportsCreateNestedManyWithoutPropertyInput
  }

  export type PropertiesUncheckedCreateWithoutAdminInput = {
    id?: string
    type: string
    title: string
    description: string
    serialNumber: string
    imageUrl?: string | null
    status?: string
    studId: string
    createdAt?: Date | string
    property_status_history?: Property_Status_HistoriesUncheckedCreateNestedManyWithoutPropertyInput
    lost_found_reports?: Lost_Found_ReportsUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertiesCreateOrConnectWithoutAdminInput = {
    where: PropertiesWhereUniqueInput
    create: XOR<PropertiesCreateWithoutAdminInput, PropertiesUncheckedCreateWithoutAdminInput>
  }

  export type PropertiesCreateManyAdminInputEnvelope = {
    data: PropertiesCreateManyAdminInput | PropertiesCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type Property_Status_HistoriesCreateWithoutAdminInput = {
    id?: string
    updatedAt?: Date | string
    description: string
    property: PropertiesCreateNestedOneWithoutProperty_status_historyInput
  }

  export type Property_Status_HistoriesUncheckedCreateWithoutAdminInput = {
    id?: string
    propId: string
    updatedAt?: Date | string
    description: string
  }

  export type Property_Status_HistoriesCreateOrConnectWithoutAdminInput = {
    where: Property_Status_HistoriesWhereUniqueInput
    create: XOR<Property_Status_HistoriesCreateWithoutAdminInput, Property_Status_HistoriesUncheckedCreateWithoutAdminInput>
  }

  export type Property_Status_HistoriesCreateManyAdminInputEnvelope = {
    data: Property_Status_HistoriesCreateManyAdminInput | Property_Status_HistoriesCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type Lost_Found_ReportsCreateWithoutAdminInput = {
    id?: string
    reportType: string
    description: string
    reportDate?: Date | string
    resolved: boolean
    property: PropertiesCreateNestedOneWithoutLost_found_reportsInput
    student: StudentsCreateNestedOneWithoutLost_found_reportsInput
  }

  export type Lost_Found_ReportsUncheckedCreateWithoutAdminInput = {
    id?: string
    propId: string
    studId: string
    reportType: string
    description: string
    reportDate?: Date | string
    resolved: boolean
  }

  export type Lost_Found_ReportsCreateOrConnectWithoutAdminInput = {
    where: Lost_Found_ReportsWhereUniqueInput
    create: XOR<Lost_Found_ReportsCreateWithoutAdminInput, Lost_Found_ReportsUncheckedCreateWithoutAdminInput>
  }

  export type Lost_Found_ReportsCreateManyAdminInputEnvelope = {
    data: Lost_Found_ReportsCreateManyAdminInput | Lost_Found_ReportsCreateManyAdminInput[]
    skipDuplicates?: boolean
  }

  export type Log_HistoriesUpsertWithWhereUniqueWithoutAdminInput = {
    where: Log_HistoriesWhereUniqueInput
    update: XOR<Log_HistoriesUpdateWithoutAdminInput, Log_HistoriesUncheckedUpdateWithoutAdminInput>
    create: XOR<Log_HistoriesCreateWithoutAdminInput, Log_HistoriesUncheckedCreateWithoutAdminInput>
  }

  export type Log_HistoriesUpdateWithWhereUniqueWithoutAdminInput = {
    where: Log_HistoriesWhereUniqueInput
    data: XOR<Log_HistoriesUpdateWithoutAdminInput, Log_HistoriesUncheckedUpdateWithoutAdminInput>
  }

  export type Log_HistoriesUpdateManyWithWhereWithoutAdminInput = {
    where: Log_HistoriesScalarWhereInput
    data: XOR<Log_HistoriesUpdateManyMutationInput, Log_HistoriesUncheckedUpdateManyWithoutAdminInput>
  }

  export type PropertiesUpsertWithWhereUniqueWithoutAdminInput = {
    where: PropertiesWhereUniqueInput
    update: XOR<PropertiesUpdateWithoutAdminInput, PropertiesUncheckedUpdateWithoutAdminInput>
    create: XOR<PropertiesCreateWithoutAdminInput, PropertiesUncheckedCreateWithoutAdminInput>
  }

  export type PropertiesUpdateWithWhereUniqueWithoutAdminInput = {
    where: PropertiesWhereUniqueInput
    data: XOR<PropertiesUpdateWithoutAdminInput, PropertiesUncheckedUpdateWithoutAdminInput>
  }

  export type PropertiesUpdateManyWithWhereWithoutAdminInput = {
    where: PropertiesScalarWhereInput
    data: XOR<PropertiesUpdateManyMutationInput, PropertiesUncheckedUpdateManyWithoutAdminInput>
  }

  export type Property_Status_HistoriesUpsertWithWhereUniqueWithoutAdminInput = {
    where: Property_Status_HistoriesWhereUniqueInput
    update: XOR<Property_Status_HistoriesUpdateWithoutAdminInput, Property_Status_HistoriesUncheckedUpdateWithoutAdminInput>
    create: XOR<Property_Status_HistoriesCreateWithoutAdminInput, Property_Status_HistoriesUncheckedCreateWithoutAdminInput>
  }

  export type Property_Status_HistoriesUpdateWithWhereUniqueWithoutAdminInput = {
    where: Property_Status_HistoriesWhereUniqueInput
    data: XOR<Property_Status_HistoriesUpdateWithoutAdminInput, Property_Status_HistoriesUncheckedUpdateWithoutAdminInput>
  }

  export type Property_Status_HistoriesUpdateManyWithWhereWithoutAdminInput = {
    where: Property_Status_HistoriesScalarWhereInput
    data: XOR<Property_Status_HistoriesUpdateManyMutationInput, Property_Status_HistoriesUncheckedUpdateManyWithoutAdminInput>
  }

  export type Property_Status_HistoriesScalarWhereInput = {
    AND?: Property_Status_HistoriesScalarWhereInput | Property_Status_HistoriesScalarWhereInput[]
    OR?: Property_Status_HistoriesScalarWhereInput[]
    NOT?: Property_Status_HistoriesScalarWhereInput | Property_Status_HistoriesScalarWhereInput[]
    id?: UuidFilter<"Property_Status_Histories"> | string
    propId?: UuidFilter<"Property_Status_Histories"> | string
    updatedAt?: DateTimeFilter<"Property_Status_Histories"> | Date | string
    description?: StringFilter<"Property_Status_Histories"> | string
    updateApprovedBy?: UuidFilter<"Property_Status_Histories"> | string
  }

  export type Lost_Found_ReportsUpsertWithWhereUniqueWithoutAdminInput = {
    where: Lost_Found_ReportsWhereUniqueInput
    update: XOR<Lost_Found_ReportsUpdateWithoutAdminInput, Lost_Found_ReportsUncheckedUpdateWithoutAdminInput>
    create: XOR<Lost_Found_ReportsCreateWithoutAdminInput, Lost_Found_ReportsUncheckedCreateWithoutAdminInput>
  }

  export type Lost_Found_ReportsUpdateWithWhereUniqueWithoutAdminInput = {
    where: Lost_Found_ReportsWhereUniqueInput
    data: XOR<Lost_Found_ReportsUpdateWithoutAdminInput, Lost_Found_ReportsUncheckedUpdateWithoutAdminInput>
  }

  export type Lost_Found_ReportsUpdateManyWithWhereWithoutAdminInput = {
    where: Lost_Found_ReportsScalarWhereInput
    data: XOR<Lost_Found_ReportsUpdateManyMutationInput, Lost_Found_ReportsUncheckedUpdateManyWithoutAdminInput>
  }

  export type StudentsCreateWithoutPropertiesInput = {
    id?: string
    schoolId: string
    fullName: string
    email: string
    password: string
    year: string
    phone: string
    location: string
    department: string
    imageUrl?: string | null
    createdAt?: Date | string
    lost_found_reports?: Lost_Found_ReportsCreateNestedManyWithoutStudentInput
    log_history?: Log_HistoriesCreateNestedManyWithoutStudentInput
  }

  export type StudentsUncheckedCreateWithoutPropertiesInput = {
    id?: string
    schoolId: string
    fullName: string
    email: string
    password: string
    year: string
    phone: string
    location: string
    department: string
    imageUrl?: string | null
    createdAt?: Date | string
    lost_found_reports?: Lost_Found_ReportsUncheckedCreateNestedManyWithoutStudentInput
    log_history?: Log_HistoriesUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentsCreateOrConnectWithoutPropertiesInput = {
    where: StudentsWhereUniqueInput
    create: XOR<StudentsCreateWithoutPropertiesInput, StudentsUncheckedCreateWithoutPropertiesInput>
  }

  export type AdminsCreateWithoutPropertyInput = {
    id?: string
    adminId: string
    fullName: string
    email: string
    password: string
    phone: string
    role: string
    location: string
    log_history?: Log_HistoriesCreateNestedManyWithoutAdminInput
    property_status_history?: Property_Status_HistoriesCreateNestedManyWithoutAdminInput
    lost_found_reports?: Lost_Found_ReportsCreateNestedManyWithoutAdminInput
  }

  export type AdminsUncheckedCreateWithoutPropertyInput = {
    id?: string
    adminId: string
    fullName: string
    email: string
    password: string
    phone: string
    role: string
    location: string
    log_history?: Log_HistoriesUncheckedCreateNestedManyWithoutAdminInput
    property_status_history?: Property_Status_HistoriesUncheckedCreateNestedManyWithoutAdminInput
    lost_found_reports?: Lost_Found_ReportsUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminsCreateOrConnectWithoutPropertyInput = {
    where: AdminsWhereUniqueInput
    create: XOR<AdminsCreateWithoutPropertyInput, AdminsUncheckedCreateWithoutPropertyInput>
  }

  export type Property_Status_HistoriesCreateWithoutPropertyInput = {
    id?: string
    updatedAt?: Date | string
    description: string
    admin: AdminsCreateNestedOneWithoutProperty_status_historyInput
  }

  export type Property_Status_HistoriesUncheckedCreateWithoutPropertyInput = {
    id?: string
    updatedAt?: Date | string
    description: string
    updateApprovedBy: string
  }

  export type Property_Status_HistoriesCreateOrConnectWithoutPropertyInput = {
    where: Property_Status_HistoriesWhereUniqueInput
    create: XOR<Property_Status_HistoriesCreateWithoutPropertyInput, Property_Status_HistoriesUncheckedCreateWithoutPropertyInput>
  }

  export type Property_Status_HistoriesCreateManyPropertyInputEnvelope = {
    data: Property_Status_HistoriesCreateManyPropertyInput | Property_Status_HistoriesCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type Lost_Found_ReportsCreateWithoutPropertyInput = {
    id?: string
    reportType: string
    description: string
    reportDate?: Date | string
    resolved: boolean
    student: StudentsCreateNestedOneWithoutLost_found_reportsInput
    admin: AdminsCreateNestedOneWithoutLost_found_reportsInput
  }

  export type Lost_Found_ReportsUncheckedCreateWithoutPropertyInput = {
    id?: string
    studId: string
    reportType: string
    description: string
    reportDate?: Date | string
    resolved: boolean
    examinedBy: string
  }

  export type Lost_Found_ReportsCreateOrConnectWithoutPropertyInput = {
    where: Lost_Found_ReportsWhereUniqueInput
    create: XOR<Lost_Found_ReportsCreateWithoutPropertyInput, Lost_Found_ReportsUncheckedCreateWithoutPropertyInput>
  }

  export type Lost_Found_ReportsCreateManyPropertyInputEnvelope = {
    data: Lost_Found_ReportsCreateManyPropertyInput | Lost_Found_ReportsCreateManyPropertyInput[]
    skipDuplicates?: boolean
  }

  export type StudentsUpsertWithoutPropertiesInput = {
    update: XOR<StudentsUpdateWithoutPropertiesInput, StudentsUncheckedUpdateWithoutPropertiesInput>
    create: XOR<StudentsCreateWithoutPropertiesInput, StudentsUncheckedCreateWithoutPropertiesInput>
    where?: StudentsWhereInput
  }

  export type StudentsUpdateToOneWithWhereWithoutPropertiesInput = {
    where?: StudentsWhereInput
    data: XOR<StudentsUpdateWithoutPropertiesInput, StudentsUncheckedUpdateWithoutPropertiesInput>
  }

  export type StudentsUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lost_found_reports?: Lost_Found_ReportsUpdateManyWithoutStudentNestedInput
    log_history?: Log_HistoriesUpdateManyWithoutStudentNestedInput
  }

  export type StudentsUncheckedUpdateWithoutPropertiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lost_found_reports?: Lost_Found_ReportsUncheckedUpdateManyWithoutStudentNestedInput
    log_history?: Log_HistoriesUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type AdminsUpsertWithoutPropertyInput = {
    update: XOR<AdminsUpdateWithoutPropertyInput, AdminsUncheckedUpdateWithoutPropertyInput>
    create: XOR<AdminsCreateWithoutPropertyInput, AdminsUncheckedCreateWithoutPropertyInput>
    where?: AdminsWhereInput
  }

  export type AdminsUpdateToOneWithWhereWithoutPropertyInput = {
    where?: AdminsWhereInput
    data: XOR<AdminsUpdateWithoutPropertyInput, AdminsUncheckedUpdateWithoutPropertyInput>
  }

  export type AdminsUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    log_history?: Log_HistoriesUpdateManyWithoutAdminNestedInput
    property_status_history?: Property_Status_HistoriesUpdateManyWithoutAdminNestedInput
    lost_found_reports?: Lost_Found_ReportsUpdateManyWithoutAdminNestedInput
  }

  export type AdminsUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    log_history?: Log_HistoriesUncheckedUpdateManyWithoutAdminNestedInput
    property_status_history?: Property_Status_HistoriesUncheckedUpdateManyWithoutAdminNestedInput
    lost_found_reports?: Lost_Found_ReportsUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type Property_Status_HistoriesUpsertWithWhereUniqueWithoutPropertyInput = {
    where: Property_Status_HistoriesWhereUniqueInput
    update: XOR<Property_Status_HistoriesUpdateWithoutPropertyInput, Property_Status_HistoriesUncheckedUpdateWithoutPropertyInput>
    create: XOR<Property_Status_HistoriesCreateWithoutPropertyInput, Property_Status_HistoriesUncheckedCreateWithoutPropertyInput>
  }

  export type Property_Status_HistoriesUpdateWithWhereUniqueWithoutPropertyInput = {
    where: Property_Status_HistoriesWhereUniqueInput
    data: XOR<Property_Status_HistoriesUpdateWithoutPropertyInput, Property_Status_HistoriesUncheckedUpdateWithoutPropertyInput>
  }

  export type Property_Status_HistoriesUpdateManyWithWhereWithoutPropertyInput = {
    where: Property_Status_HistoriesScalarWhereInput
    data: XOR<Property_Status_HistoriesUpdateManyMutationInput, Property_Status_HistoriesUncheckedUpdateManyWithoutPropertyInput>
  }

  export type Lost_Found_ReportsUpsertWithWhereUniqueWithoutPropertyInput = {
    where: Lost_Found_ReportsWhereUniqueInput
    update: XOR<Lost_Found_ReportsUpdateWithoutPropertyInput, Lost_Found_ReportsUncheckedUpdateWithoutPropertyInput>
    create: XOR<Lost_Found_ReportsCreateWithoutPropertyInput, Lost_Found_ReportsUncheckedCreateWithoutPropertyInput>
  }

  export type Lost_Found_ReportsUpdateWithWhereUniqueWithoutPropertyInput = {
    where: Lost_Found_ReportsWhereUniqueInput
    data: XOR<Lost_Found_ReportsUpdateWithoutPropertyInput, Lost_Found_ReportsUncheckedUpdateWithoutPropertyInput>
  }

  export type Lost_Found_ReportsUpdateManyWithWhereWithoutPropertyInput = {
    where: Lost_Found_ReportsScalarWhereInput
    data: XOR<Lost_Found_ReportsUpdateManyMutationInput, Lost_Found_ReportsUncheckedUpdateManyWithoutPropertyInput>
  }

  export type PropertiesCreateWithoutProperty_status_historyInput = {
    id?: string
    type: string
    title: string
    description: string
    serialNumber: string
    imageUrl?: string | null
    status?: string
    createdAt?: Date | string
    student: StudentsCreateNestedOneWithoutPropertiesInput
    admin: AdminsCreateNestedOneWithoutPropertyInput
    lost_found_reports?: Lost_Found_ReportsCreateNestedManyWithoutPropertyInput
  }

  export type PropertiesUncheckedCreateWithoutProperty_status_historyInput = {
    id?: string
    type: string
    title: string
    description: string
    serialNumber: string
    imageUrl?: string | null
    status?: string
    studId: string
    approvedBy: string
    createdAt?: Date | string
    lost_found_reports?: Lost_Found_ReportsUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertiesCreateOrConnectWithoutProperty_status_historyInput = {
    where: PropertiesWhereUniqueInput
    create: XOR<PropertiesCreateWithoutProperty_status_historyInput, PropertiesUncheckedCreateWithoutProperty_status_historyInput>
  }

  export type AdminsCreateWithoutProperty_status_historyInput = {
    id?: string
    adminId: string
    fullName: string
    email: string
    password: string
    phone: string
    role: string
    location: string
    log_history?: Log_HistoriesCreateNestedManyWithoutAdminInput
    property?: PropertiesCreateNestedManyWithoutAdminInput
    lost_found_reports?: Lost_Found_ReportsCreateNestedManyWithoutAdminInput
  }

  export type AdminsUncheckedCreateWithoutProperty_status_historyInput = {
    id?: string
    adminId: string
    fullName: string
    email: string
    password: string
    phone: string
    role: string
    location: string
    log_history?: Log_HistoriesUncheckedCreateNestedManyWithoutAdminInput
    property?: PropertiesUncheckedCreateNestedManyWithoutAdminInput
    lost_found_reports?: Lost_Found_ReportsUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminsCreateOrConnectWithoutProperty_status_historyInput = {
    where: AdminsWhereUniqueInput
    create: XOR<AdminsCreateWithoutProperty_status_historyInput, AdminsUncheckedCreateWithoutProperty_status_historyInput>
  }

  export type PropertiesUpsertWithoutProperty_status_historyInput = {
    update: XOR<PropertiesUpdateWithoutProperty_status_historyInput, PropertiesUncheckedUpdateWithoutProperty_status_historyInput>
    create: XOR<PropertiesCreateWithoutProperty_status_historyInput, PropertiesUncheckedCreateWithoutProperty_status_historyInput>
    where?: PropertiesWhereInput
  }

  export type PropertiesUpdateToOneWithWhereWithoutProperty_status_historyInput = {
    where?: PropertiesWhereInput
    data: XOR<PropertiesUpdateWithoutProperty_status_historyInput, PropertiesUncheckedUpdateWithoutProperty_status_historyInput>
  }

  export type PropertiesUpdateWithoutProperty_status_historyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentsUpdateOneRequiredWithoutPropertiesNestedInput
    admin?: AdminsUpdateOneRequiredWithoutPropertyNestedInput
    lost_found_reports?: Lost_Found_ReportsUpdateManyWithoutPropertyNestedInput
  }

  export type PropertiesUncheckedUpdateWithoutProperty_status_historyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    studId?: StringFieldUpdateOperationsInput | string
    approvedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    lost_found_reports?: Lost_Found_ReportsUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type AdminsUpsertWithoutProperty_status_historyInput = {
    update: XOR<AdminsUpdateWithoutProperty_status_historyInput, AdminsUncheckedUpdateWithoutProperty_status_historyInput>
    create: XOR<AdminsCreateWithoutProperty_status_historyInput, AdminsUncheckedCreateWithoutProperty_status_historyInput>
    where?: AdminsWhereInput
  }

  export type AdminsUpdateToOneWithWhereWithoutProperty_status_historyInput = {
    where?: AdminsWhereInput
    data: XOR<AdminsUpdateWithoutProperty_status_historyInput, AdminsUncheckedUpdateWithoutProperty_status_historyInput>
  }

  export type AdminsUpdateWithoutProperty_status_historyInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    log_history?: Log_HistoriesUpdateManyWithoutAdminNestedInput
    property?: PropertiesUpdateManyWithoutAdminNestedInput
    lost_found_reports?: Lost_Found_ReportsUpdateManyWithoutAdminNestedInput
  }

  export type AdminsUncheckedUpdateWithoutProperty_status_historyInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    log_history?: Log_HistoriesUncheckedUpdateManyWithoutAdminNestedInput
    property?: PropertiesUncheckedUpdateManyWithoutAdminNestedInput
    lost_found_reports?: Lost_Found_ReportsUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type PropertiesCreateWithoutLost_found_reportsInput = {
    id?: string
    type: string
    title: string
    description: string
    serialNumber: string
    imageUrl?: string | null
    status?: string
    createdAt?: Date | string
    student: StudentsCreateNestedOneWithoutPropertiesInput
    admin: AdminsCreateNestedOneWithoutPropertyInput
    property_status_history?: Property_Status_HistoriesCreateNestedManyWithoutPropertyInput
  }

  export type PropertiesUncheckedCreateWithoutLost_found_reportsInput = {
    id?: string
    type: string
    title: string
    description: string
    serialNumber: string
    imageUrl?: string | null
    status?: string
    studId: string
    approvedBy: string
    createdAt?: Date | string
    property_status_history?: Property_Status_HistoriesUncheckedCreateNestedManyWithoutPropertyInput
  }

  export type PropertiesCreateOrConnectWithoutLost_found_reportsInput = {
    where: PropertiesWhereUniqueInput
    create: XOR<PropertiesCreateWithoutLost_found_reportsInput, PropertiesUncheckedCreateWithoutLost_found_reportsInput>
  }

  export type StudentsCreateWithoutLost_found_reportsInput = {
    id?: string
    schoolId: string
    fullName: string
    email: string
    password: string
    year: string
    phone: string
    location: string
    department: string
    imageUrl?: string | null
    createdAt?: Date | string
    properties?: PropertiesCreateNestedManyWithoutStudentInput
    log_history?: Log_HistoriesCreateNestedManyWithoutStudentInput
  }

  export type StudentsUncheckedCreateWithoutLost_found_reportsInput = {
    id?: string
    schoolId: string
    fullName: string
    email: string
    password: string
    year: string
    phone: string
    location: string
    department: string
    imageUrl?: string | null
    createdAt?: Date | string
    properties?: PropertiesUncheckedCreateNestedManyWithoutStudentInput
    log_history?: Log_HistoriesUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentsCreateOrConnectWithoutLost_found_reportsInput = {
    where: StudentsWhereUniqueInput
    create: XOR<StudentsCreateWithoutLost_found_reportsInput, StudentsUncheckedCreateWithoutLost_found_reportsInput>
  }

  export type AdminsCreateWithoutLost_found_reportsInput = {
    id?: string
    adminId: string
    fullName: string
    email: string
    password: string
    phone: string
    role: string
    location: string
    log_history?: Log_HistoriesCreateNestedManyWithoutAdminInput
    property?: PropertiesCreateNestedManyWithoutAdminInput
    property_status_history?: Property_Status_HistoriesCreateNestedManyWithoutAdminInput
  }

  export type AdminsUncheckedCreateWithoutLost_found_reportsInput = {
    id?: string
    adminId: string
    fullName: string
    email: string
    password: string
    phone: string
    role: string
    location: string
    log_history?: Log_HistoriesUncheckedCreateNestedManyWithoutAdminInput
    property?: PropertiesUncheckedCreateNestedManyWithoutAdminInput
    property_status_history?: Property_Status_HistoriesUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminsCreateOrConnectWithoutLost_found_reportsInput = {
    where: AdminsWhereUniqueInput
    create: XOR<AdminsCreateWithoutLost_found_reportsInput, AdminsUncheckedCreateWithoutLost_found_reportsInput>
  }

  export type PropertiesUpsertWithoutLost_found_reportsInput = {
    update: XOR<PropertiesUpdateWithoutLost_found_reportsInput, PropertiesUncheckedUpdateWithoutLost_found_reportsInput>
    create: XOR<PropertiesCreateWithoutLost_found_reportsInput, PropertiesUncheckedCreateWithoutLost_found_reportsInput>
    where?: PropertiesWhereInput
  }

  export type PropertiesUpdateToOneWithWhereWithoutLost_found_reportsInput = {
    where?: PropertiesWhereInput
    data: XOR<PropertiesUpdateWithoutLost_found_reportsInput, PropertiesUncheckedUpdateWithoutLost_found_reportsInput>
  }

  export type PropertiesUpdateWithoutLost_found_reportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentsUpdateOneRequiredWithoutPropertiesNestedInput
    admin?: AdminsUpdateOneRequiredWithoutPropertyNestedInput
    property_status_history?: Property_Status_HistoriesUpdateManyWithoutPropertyNestedInput
  }

  export type PropertiesUncheckedUpdateWithoutLost_found_reportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    studId?: StringFieldUpdateOperationsInput | string
    approvedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property_status_history?: Property_Status_HistoriesUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type StudentsUpsertWithoutLost_found_reportsInput = {
    update: XOR<StudentsUpdateWithoutLost_found_reportsInput, StudentsUncheckedUpdateWithoutLost_found_reportsInput>
    create: XOR<StudentsCreateWithoutLost_found_reportsInput, StudentsUncheckedCreateWithoutLost_found_reportsInput>
    where?: StudentsWhereInput
  }

  export type StudentsUpdateToOneWithWhereWithoutLost_found_reportsInput = {
    where?: StudentsWhereInput
    data: XOR<StudentsUpdateWithoutLost_found_reportsInput, StudentsUncheckedUpdateWithoutLost_found_reportsInput>
  }

  export type StudentsUpdateWithoutLost_found_reportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertiesUpdateManyWithoutStudentNestedInput
    log_history?: Log_HistoriesUpdateManyWithoutStudentNestedInput
  }

  export type StudentsUncheckedUpdateWithoutLost_found_reportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertiesUncheckedUpdateManyWithoutStudentNestedInput
    log_history?: Log_HistoriesUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type AdminsUpsertWithoutLost_found_reportsInput = {
    update: XOR<AdminsUpdateWithoutLost_found_reportsInput, AdminsUncheckedUpdateWithoutLost_found_reportsInput>
    create: XOR<AdminsCreateWithoutLost_found_reportsInput, AdminsUncheckedCreateWithoutLost_found_reportsInput>
    where?: AdminsWhereInput
  }

  export type AdminsUpdateToOneWithWhereWithoutLost_found_reportsInput = {
    where?: AdminsWhereInput
    data: XOR<AdminsUpdateWithoutLost_found_reportsInput, AdminsUncheckedUpdateWithoutLost_found_reportsInput>
  }

  export type AdminsUpdateWithoutLost_found_reportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    log_history?: Log_HistoriesUpdateManyWithoutAdminNestedInput
    property?: PropertiesUpdateManyWithoutAdminNestedInput
    property_status_history?: Property_Status_HistoriesUpdateManyWithoutAdminNestedInput
  }

  export type AdminsUncheckedUpdateWithoutLost_found_reportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    log_history?: Log_HistoriesUncheckedUpdateManyWithoutAdminNestedInput
    property?: PropertiesUncheckedUpdateManyWithoutAdminNestedInput
    property_status_history?: Property_Status_HistoriesUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type StudentsCreateWithoutLog_historyInput = {
    id?: string
    schoolId: string
    fullName: string
    email: string
    password: string
    year: string
    phone: string
    location: string
    department: string
    imageUrl?: string | null
    createdAt?: Date | string
    properties?: PropertiesCreateNestedManyWithoutStudentInput
    lost_found_reports?: Lost_Found_ReportsCreateNestedManyWithoutStudentInput
  }

  export type StudentsUncheckedCreateWithoutLog_historyInput = {
    id?: string
    schoolId: string
    fullName: string
    email: string
    password: string
    year: string
    phone: string
    location: string
    department: string
    imageUrl?: string | null
    createdAt?: Date | string
    properties?: PropertiesUncheckedCreateNestedManyWithoutStudentInput
    lost_found_reports?: Lost_Found_ReportsUncheckedCreateNestedManyWithoutStudentInput
  }

  export type StudentsCreateOrConnectWithoutLog_historyInput = {
    where: StudentsWhereUniqueInput
    create: XOR<StudentsCreateWithoutLog_historyInput, StudentsUncheckedCreateWithoutLog_historyInput>
  }

  export type AdminsCreateWithoutLog_historyInput = {
    id?: string
    adminId: string
    fullName: string
    email: string
    password: string
    phone: string
    role: string
    location: string
    property?: PropertiesCreateNestedManyWithoutAdminInput
    property_status_history?: Property_Status_HistoriesCreateNestedManyWithoutAdminInput
    lost_found_reports?: Lost_Found_ReportsCreateNestedManyWithoutAdminInput
  }

  export type AdminsUncheckedCreateWithoutLog_historyInput = {
    id?: string
    adminId: string
    fullName: string
    email: string
    password: string
    phone: string
    role: string
    location: string
    property?: PropertiesUncheckedCreateNestedManyWithoutAdminInput
    property_status_history?: Property_Status_HistoriesUncheckedCreateNestedManyWithoutAdminInput
    lost_found_reports?: Lost_Found_ReportsUncheckedCreateNestedManyWithoutAdminInput
  }

  export type AdminsCreateOrConnectWithoutLog_historyInput = {
    where: AdminsWhereUniqueInput
    create: XOR<AdminsCreateWithoutLog_historyInput, AdminsUncheckedCreateWithoutLog_historyInput>
  }

  export type StudentsUpsertWithoutLog_historyInput = {
    update: XOR<StudentsUpdateWithoutLog_historyInput, StudentsUncheckedUpdateWithoutLog_historyInput>
    create: XOR<StudentsCreateWithoutLog_historyInput, StudentsUncheckedCreateWithoutLog_historyInput>
    where?: StudentsWhereInput
  }

  export type StudentsUpdateToOneWithWhereWithoutLog_historyInput = {
    where?: StudentsWhereInput
    data: XOR<StudentsUpdateWithoutLog_historyInput, StudentsUncheckedUpdateWithoutLog_historyInput>
  }

  export type StudentsUpdateWithoutLog_historyInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertiesUpdateManyWithoutStudentNestedInput
    lost_found_reports?: Lost_Found_ReportsUpdateManyWithoutStudentNestedInput
  }

  export type StudentsUncheckedUpdateWithoutLog_historyInput = {
    id?: StringFieldUpdateOperationsInput | string
    schoolId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    year?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    department?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    properties?: PropertiesUncheckedUpdateManyWithoutStudentNestedInput
    lost_found_reports?: Lost_Found_ReportsUncheckedUpdateManyWithoutStudentNestedInput
  }

  export type AdminsUpsertWithoutLog_historyInput = {
    update: XOR<AdminsUpdateWithoutLog_historyInput, AdminsUncheckedUpdateWithoutLog_historyInput>
    create: XOR<AdminsCreateWithoutLog_historyInput, AdminsUncheckedCreateWithoutLog_historyInput>
    where?: AdminsWhereInput
  }

  export type AdminsUpdateToOneWithWhereWithoutLog_historyInput = {
    where?: AdminsWhereInput
    data: XOR<AdminsUpdateWithoutLog_historyInput, AdminsUncheckedUpdateWithoutLog_historyInput>
  }

  export type AdminsUpdateWithoutLog_historyInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    property?: PropertiesUpdateManyWithoutAdminNestedInput
    property_status_history?: Property_Status_HistoriesUpdateManyWithoutAdminNestedInput
    lost_found_reports?: Lost_Found_ReportsUpdateManyWithoutAdminNestedInput
  }

  export type AdminsUncheckedUpdateWithoutLog_historyInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    property?: PropertiesUncheckedUpdateManyWithoutAdminNestedInput
    property_status_history?: Property_Status_HistoriesUncheckedUpdateManyWithoutAdminNestedInput
    lost_found_reports?: Lost_Found_ReportsUncheckedUpdateManyWithoutAdminNestedInput
  }

  export type PropertiesCreateManyStudentInput = {
    id?: string
    type: string
    title: string
    description: string
    serialNumber: string
    imageUrl?: string | null
    status?: string
    approvedBy: string
    createdAt?: Date | string
  }

  export type Lost_Found_ReportsCreateManyStudentInput = {
    id?: string
    propId: string
    reportType: string
    description: string
    reportDate?: Date | string
    resolved: boolean
    examinedBy: string
  }

  export type Log_HistoriesCreateManyStudentInput = {
    id?: string
    adminId: string
    role: string
    createdAt: string
  }

  export type PropertiesUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    admin?: AdminsUpdateOneRequiredWithoutPropertyNestedInput
    property_status_history?: Property_Status_HistoriesUpdateManyWithoutPropertyNestedInput
    lost_found_reports?: Lost_Found_ReportsUpdateManyWithoutPropertyNestedInput
  }

  export type PropertiesUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approvedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property_status_history?: Property_Status_HistoriesUncheckedUpdateManyWithoutPropertyNestedInput
    lost_found_reports?: Lost_Found_ReportsUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertiesUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    approvedBy?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Lost_Found_ReportsUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    property?: PropertiesUpdateOneRequiredWithoutLost_found_reportsNestedInput
    admin?: AdminsUpdateOneRequiredWithoutLost_found_reportsNestedInput
  }

  export type Lost_Found_ReportsUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    propId?: StringFieldUpdateOperationsInput | string
    reportType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    examinedBy?: StringFieldUpdateOperationsInput | string
  }

  export type Lost_Found_ReportsUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    propId?: StringFieldUpdateOperationsInput | string
    reportType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    examinedBy?: StringFieldUpdateOperationsInput | string
  }

  export type Log_HistoriesUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
    admin?: AdminsUpdateOneRequiredWithoutLog_historyNestedInput
  }

  export type Log_HistoriesUncheckedUpdateWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
  }

  export type Log_HistoriesUncheckedUpdateManyWithoutStudentInput = {
    id?: StringFieldUpdateOperationsInput | string
    adminId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
  }

  export type Log_HistoriesCreateManyAdminInput = {
    id?: string
    studId: string
    role: string
    createdAt: string
  }

  export type PropertiesCreateManyAdminInput = {
    id?: string
    type: string
    title: string
    description: string
    serialNumber: string
    imageUrl?: string | null
    status?: string
    studId: string
    createdAt?: Date | string
  }

  export type Property_Status_HistoriesCreateManyAdminInput = {
    id?: string
    propId: string
    updatedAt?: Date | string
    description: string
  }

  export type Lost_Found_ReportsCreateManyAdminInput = {
    id?: string
    propId: string
    studId: string
    reportType: string
    description: string
    reportDate?: Date | string
    resolved: boolean
  }

  export type Log_HistoriesUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
    student?: StudentsUpdateOneRequiredWithoutLog_historyNestedInput
  }

  export type Log_HistoriesUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    studId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
  }

  export type Log_HistoriesUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    studId?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: StringFieldUpdateOperationsInput | string
  }

  export type PropertiesUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    student?: StudentsUpdateOneRequiredWithoutPropertiesNestedInput
    property_status_history?: Property_Status_HistoriesUpdateManyWithoutPropertyNestedInput
    lost_found_reports?: Lost_Found_ReportsUpdateManyWithoutPropertyNestedInput
  }

  export type PropertiesUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    studId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    property_status_history?: Property_Status_HistoriesUncheckedUpdateManyWithoutPropertyNestedInput
    lost_found_reports?: Lost_Found_ReportsUncheckedUpdateManyWithoutPropertyNestedInput
  }

  export type PropertiesUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    serialNumber?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    studId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type Property_Status_HistoriesUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    property?: PropertiesUpdateOneRequiredWithoutProperty_status_historyNestedInput
  }

  export type Property_Status_HistoriesUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    propId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type Property_Status_HistoriesUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    propId?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
  }

  export type Lost_Found_ReportsUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    property?: PropertiesUpdateOneRequiredWithoutLost_found_reportsNestedInput
    student?: StudentsUpdateOneRequiredWithoutLost_found_reportsNestedInput
  }

  export type Lost_Found_ReportsUncheckedUpdateWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    propId?: StringFieldUpdateOperationsInput | string
    studId?: StringFieldUpdateOperationsInput | string
    reportType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Lost_Found_ReportsUncheckedUpdateManyWithoutAdminInput = {
    id?: StringFieldUpdateOperationsInput | string
    propId?: StringFieldUpdateOperationsInput | string
    studId?: StringFieldUpdateOperationsInput | string
    reportType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type Property_Status_HistoriesCreateManyPropertyInput = {
    id?: string
    updatedAt?: Date | string
    description: string
    updateApprovedBy: string
  }

  export type Lost_Found_ReportsCreateManyPropertyInput = {
    id?: string
    studId: string
    reportType: string
    description: string
    reportDate?: Date | string
    resolved: boolean
    examinedBy: string
  }

  export type Property_Status_HistoriesUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    admin?: AdminsUpdateOneRequiredWithoutProperty_status_historyNestedInput
  }

  export type Property_Status_HistoriesUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    updateApprovedBy?: StringFieldUpdateOperationsInput | string
  }

  export type Property_Status_HistoriesUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    description?: StringFieldUpdateOperationsInput | string
    updateApprovedBy?: StringFieldUpdateOperationsInput | string
  }

  export type Lost_Found_ReportsUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    reportType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    student?: StudentsUpdateOneRequiredWithoutLost_found_reportsNestedInput
    admin?: AdminsUpdateOneRequiredWithoutLost_found_reportsNestedInput
  }

  export type Lost_Found_ReportsUncheckedUpdateWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studId?: StringFieldUpdateOperationsInput | string
    reportType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    examinedBy?: StringFieldUpdateOperationsInput | string
  }

  export type Lost_Found_ReportsUncheckedUpdateManyWithoutPropertyInput = {
    id?: StringFieldUpdateOperationsInput | string
    studId?: StringFieldUpdateOperationsInput | string
    reportType?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    reportDate?: DateTimeFieldUpdateOperationsInput | Date | string
    resolved?: BoolFieldUpdateOperationsInput | boolean
    examinedBy?: StringFieldUpdateOperationsInput | string
  }



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