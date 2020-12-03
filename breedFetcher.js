const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  let url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breedName;

  request(url, (err, response, body) => {
    // if response.status > 400
    if (err) {
      callback(err, null);
    }

    const data = JSON.parse(body);

    if (data[0] === undefined) {
      callback(err, null);
    } else {
      callback(err, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };
