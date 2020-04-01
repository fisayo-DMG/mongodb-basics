const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017/fisayo';

const client = new MongoClient(url, {useUnifiedTopology: true});

async function connectAndCreateCollection() {
    try {
        const db = await client.connect();
        const dbObj = db.db();
        await dbObj.createCollection('interns')
        console.log("Interns collection created")
        db.close();
    } catch(e) {
        console.error(e);
    }
}

connectAndCreateCollection();