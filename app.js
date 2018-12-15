let artistsString = require("./data/artists.js");
let artists = JSON.parse(artistsString);
//let techsString = require("./data/techs.js");
//let techs = JSON.parse(techsString);
let leadersString = require("./data/leaders.js");
let leaders = JSON.parse(leadersString);
let shakespearesString = require("./data/shakespeares.js");
let shakespeares = JSON.parse(shakespearesString);

console.log(`The size of the loaded DYLAN, is ${artists.dylan.length}.`)
