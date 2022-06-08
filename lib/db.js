import {MongoClient} from "mongodb/lib/mongo_client";

export async function connectToDatabase() {
  const client = await MongoClient.connect(
    "mongodb+srv://yosuke:yosuke@nextauthdemo.lrxw0.mongodb.net/auth?retryWrites=true&w=majority"
  );
  return client;
}
