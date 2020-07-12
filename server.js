const express = require('express');
const cors = require('cors');
const server = express();

const index = require('./api/Routes/User');

server.use(cors());
server.use(express.json());

server.use('/', index);
server.listen(8080, () => {
    console.log('Server listening on port 8080');
})
