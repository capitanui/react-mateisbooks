const { google } = require("googleapis");
const customsearch = google.customsearch("v1");
const fetch = require("node-fetch");
const fs = require("fs");

async function searchImage(options) {
  console.log(options);
  const res = await customsearch.cse.list({
    cx: options.cx,
    q: options.q,
    auth: options.apiKey,
    imgSize: options.imgSize,
    searchType: options.searchType,
  });

  return res.data;
}

async function downloadImage(searchRes, name) {
  const imageURL = searchRes.items[0].link;
  console.log(imageURL);
  const response = await fetch(imageURL);
  const buffer = await response.buffer();
  fs.writeFile(`../frontend/images/${name}.jpg`, buffer, () =>
    console.log("finished downloading!")
  );
}

if (module === require.main) {
  const isbn = process.argv.slice(2)[0];

  const options = {
    q: isbn,
    exactTerms: isbn,
    apiKey: "AIzaSyAbJVYG4B3eE0FWTMGvbiSnB6vhklO54Nc",
    cx: "6e8f5d99a8d02aa51",
    imgSize: "large",
    searchType: "image",
  };

  searchImage(options)
    .then((res) => {
      downloadImage(res, options.q).catch(console.error);
    })
    .catch(console.error);
}

module.exports = {
  runSample: searchImage,
};
