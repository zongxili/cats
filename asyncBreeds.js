const fs = require('fs');

const breedDetailsFromFile = function(breed, callback) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    // CHANGE 1: Pass data back via callback instead of return.
    console.log('Callback: I have the data!');
    console.log(typeof data);
    let dataArr = data.split(":");
    console.log(dataArr[1]);
    const expectedDesc = "The golden eyes and the shiny black coat of the Bombay is absolutely striking. Likely to bond most with one family member, the Bombay will follow you from room to room and will almost always have something to say about what you are doing, loving attention and to be carried around, often on his caregiver's shoulder.";
    console.log(dataArr[1] === expectedDesc);
    if (!error) callback(dataArr[1]);
  });
};

module.exports = breedDetailsFromFile;