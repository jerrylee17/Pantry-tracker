
const { merge } = require('lodash');
const { authorResolvers } = require('./books.js');
const { linksResolvers } = require('./links.js');


const resolvers = merge(authorResolvers, linksResolvers);

module.exports = { 
    resolvers
};
