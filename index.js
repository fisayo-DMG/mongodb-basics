const {MongoClient} = require('mongodb');

const url = 'mongodb://localhost:27017/fisayo';

const client = new MongoClient(url, {useUnifiedTopology: true});

async function connectDB() {
    try {
        const db = await client.connect();
        console.log('Database created by fisayo');
        db.close();
    } catch(e) {
        console.error(e);
    }
}

connectDB();