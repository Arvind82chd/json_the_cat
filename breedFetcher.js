const request = require("request");

// const breedName = process.argv[2]
// const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`
// request(url, (err, response, body) => {
//   if (!err) {
//     const data = JSON.parse(body);
//     console.log(data[0].weight);
//   }
//   null
// });

const fetchBreedDescription = function(breedName, requestCallback) {
  console.log(breedName);
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  request(url, (err, response, body) => {
    console.log(response, err);
    if (err) {
      requestCallback(err, null);
      return;
    }
    if (response.statusCode !== 200) {
      return `Status Code ${response.statusCode} when fetching breed name: ${body}`;
    }
    const data = JSON.parse(body);
    requestCallback(err, data[0].description);
    //mistake was not calling the callback;
  });
};

module.exports = { fetchBreedDescription };
