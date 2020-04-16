const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017/fisayo";

const client = new MongoClient(url, { useUnifiedTopology: true });

async function findCollection() {
  try {
    const db = await client.connect();
    const dbObj = db.db();
    const first = await dbObj.collection("myMovies").find({}).toArray();
    const ratingsOfSeven = await dbObj.collection("myMovies").find({rating: 7}).toArray();
    const movieTitles = await dbObj.collection("myMovies").find({}, {projection:{_id: 0, movie: 1}}).toArray();
    // console.log("Interns collection created");
    // console.log(res[0]);
    console.log({first: first[0], ratingsOfSeven, movieTitles})
    db.close();
  } catch (e) {
    console.error(e);
  }
}

findCollection();