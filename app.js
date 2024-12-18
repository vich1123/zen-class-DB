

const { MongoClient } = require("mongodb");

// Connection URI
const uri = "mongodb://localhost:27017";
const dbName = "test";

async function run() {
  const client = new MongoClient(uri);

  try {
    await client.connect();
    console.log("Connected to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection("example");

    // Insert a document
    const result = await collection.insertOne({ name: "Alice", age: 25 });
    console.log("Inserted Document:", result);

    // Fetch the documents to verify
    const docs = await collection.find({}).toArray();
    console.log("Documents:", docs);
  } catch (err) {
    console.error("Error:", err);
  } finally {
    await client.close();
  }
}

run();
