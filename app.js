let artistsString = require("./artists.js");
let artists = JSON.parse(artistsString);
let techsString = require("./techs.js");
let techs = JSON.parse(techsString);
let leadersString = require("./leaders.js");
let leaders = JSON.parse(leadersString);
let shakespearesString = require("./shakespeares.js");
let shakespeares = JSON.parse(shakespearesString);

console.log(`The DYLAN, now in app, is ${artists.dylan}.`)
