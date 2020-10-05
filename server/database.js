const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

require('dotenv').config();
const url = `mongodb://${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`;

mongoose.connect(url, { 
    autoIndex: true,
    reconnectTries: Number.MAX_VALUE,
    reconnectInterval: 500,
    poolSize: 50,
    bufferMaxEntries: 0,
    keepAlive: 120,
    useNewUrlParser: true,
});

mongoose.set('useCreateIndex', true);

mongoose.connection.once('open', () => 
    console.log(`Mongo connection established at ${url}`)
);
