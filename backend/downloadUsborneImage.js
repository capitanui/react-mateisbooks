const fetch = require("node-fetch");
const fs = require("fs");

function buildUrl(name, code) {
  let url;

  return url;
}
// Calcul isbn
// 978147493711 - 5
// 9*1
// 7*3
// 8*1
// 1*3
// 4*1
// 7*3
// 4*1  = 70
// 9*3  code from usborne command
// 3*1
// 7*3
// 1*1
// 1*3
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
}

module.exports = {};
