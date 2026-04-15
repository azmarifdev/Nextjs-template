import { MongoClient } from "mongodb";

import { env } from "@/lib/env";

let cachedClient: MongoClient | null = null;

// Keep connection handling simple: create once, then reuse across requests.
export async function getDbClient(): Promise<MongoClient> {
  if (cachedClient) {
    return cachedClient;
  }

  if (!env.MONGODB_URI) {
    throw new Error("MONGODB_URI is required to use the database layer.");
  }

  cachedClient = new MongoClient(env.MONGODB_URI);
  await cachedClient.connect();
  return cachedClient;
}
