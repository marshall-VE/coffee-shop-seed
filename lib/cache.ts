import redis from './redis';

const CACHE_TTL = 60; // seconds

export async function getCached<T>(key: string, fetcher: () => Promise<T>): Promise<T> {
  const cached = await redis.get(key);
  if (cached) return JSON.parse(cached) as T;
  const data = await fetcher();
  await redis.setex(key, CACHE_TTL, JSON.stringify(data));
  return data;
}