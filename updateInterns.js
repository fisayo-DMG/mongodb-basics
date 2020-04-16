const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017/fisayo";

const client = new MongoClient(url, { useUnifiedTopology: true });

async function updateCollection() {
  try {
    const db = await client.connect();
    const dbObj = db.db();
    const query = {movie: 'The Banker'};
    const newValues = {$set: {movie: 'Inglorious Basterds', year: '2009', rating: +8.3 }}
    await dbObj.collection("myMovies").updateOne(query, newValues);
    const result = await dbObj.collection("myMovies").find({}).toArray();
    // console.log("Interns collection created");
    // console.log(res[0]);
    console.log(result)
    db.close();
  } catch (e) {
    console.error(e);
  }
}

updateCollection();