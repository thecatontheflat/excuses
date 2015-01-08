var developersExcuses = require('./excuses/developers.json').excuses;

module.exports = {
    developers: {
        getAll: function () {
            return developersExcuses;
        },

        getRandom: function () {
            return developersExcuses[Math.floor(Math.random() * developersExcuses.length)];
        }
    }
};