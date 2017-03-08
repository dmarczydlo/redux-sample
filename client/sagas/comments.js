import comments from './../data/comments';

var Promise = require('promise');

var someAsyncThing = function () {
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            resolve(comments);
        }, 1);
    });
}

export const getComments = someAsyncThing().then(function(value) {
    return value;
}).catch(function(error) {
    console.log('oh no', error);
});
