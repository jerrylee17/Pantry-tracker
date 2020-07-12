const express = require('express')
const cors = require('cors')
const server = express()

server.use(cors());
server.use(express.json());

server.listen(8080, () => {
    console.log('Server listening on port 8080');
})
