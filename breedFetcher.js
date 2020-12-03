const request = require('request');

let breed = process.argv[2];
let url = 'https://api.thecatapi.com/v1/breeds/search?q=' + breed;

request(url, (err, response, body) => {
  // if response.status > 400
  if (err) {
    throw new Error(err);
  }

  const data = JSON.parse(body);

  if (data[0] === undefined) {
    console.log("Breed is not found");
  } else {
    console.log("Cat Discription: " + data[0].description);
  }
});