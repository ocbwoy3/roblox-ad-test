// read a json array from a file
var ads = require('./list.json');

// return 2 strings from a random entry in the array
function getAds() {
    var index = Math.floor(Math.random() * ads.length);
    return ads[index]["Image"], ads[index]["Text"];
}

// print out the ad image and text
function printAds() {
    var image, text;
    [image, text] = getAds();
    console.log(image);
    console.log(text);
}
