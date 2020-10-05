const { PubSub } = require('apollo-server');
const { CREATED } = require('./messages.js');


const pubsub = new PubSub();

module.exports = {
    pubsub,
    CREATED
};
