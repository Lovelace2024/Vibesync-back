import {
  RedisClientType,
  RedisFunctions,
  RedisModules,
  RedisScripts,
  createClient,
} from "redis";
// Redis config

export let redisClient: RedisClientType<
  RedisModules,
  RedisFunctions,
  RedisScripts
>;
redisClient = await createClient()
  .on("error", (err) => console.log("Redis Client Error", err))
  .connect();
