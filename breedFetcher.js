const request = require("request")

const breedName = process.argv[2]
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`
request(url, (err, response, body) => {
  if (!err) {
    const data = JSON.parse(body);
    console.log(data[0].weight);
  }
  null
});
