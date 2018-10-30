var Category = require('../models/Category');
var key = require('../config/key');

var mongoose = require('mongoose');

mongoose.connect(key.mongoURL, { useNewUrlParser: true });

var categories = [
    new Category({
        name:"salads"
    }),
    new Category({
        name:"first coursу"
    }),
    new Category({
        name:"meat"
    }),
    new Category({
        name:"vegetarian"
    }),
    new Category({
        name:"drinkables"
    }),
];

var done = 0;
for (var i = 0; i < categories.length; i++) {
    categories[i].save(function(err, result) {
        done++;
        if (done === categories.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}