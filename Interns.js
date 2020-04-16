const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017/fisayo";

const client = new MongoClient(url, { useUnifiedTopology: true });

async function connectAndCreateCollection() {
  try {
    const db = await client.connect();
    const dbObj = db.db();
    await dbObj.createCollection("interns");
    const moviesArray = [
      { movie: "The Banker", year: "2020", rating: 8 },
      { movie: "Bad Boys", year: "2020", rating: 7 },
      { movie: "The Hunt", year: "2020", rating: 7 },
      { movie: "Bloodshot", year: "2020", rating: 7.5 },
      { movie: "First Cow", year: "2020", rating: 6.5 },
    ];
    const result = await dbObj.collection("myMovies").insertMany(moviesArray);
    // console.log("Interns collection created");
    console.log(result);
    db.close();
  } catch (e) {
    console.error(e);
  }
}

connectAndCreateCollection();
