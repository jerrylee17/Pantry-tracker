
const { merge } = require('lodash');
const { authorResolvers } = require('./books.js');
const { linkResolvers } = require('./links.js');

const resolvers = merge(authorResolvers, linkResolvers);

module.exports = { 
    resolvers
};
