import { artistsString } from './data/artists.js';
//let artistsString = import('./data/artists.js');
let artists = JSON.parse(artistsString);
/*//let techsString = import("./data/techs.js");
//let techs = JSON.parse(techsString);
let leadersString = import('./data/leaders.js');
let leaders = JSON.parse(leadersString);
let shakespearesString = import('./data/shakespeares.js');
let shakespeares = JSON.parse(shakespearesString);
*/
console.log(`What? Imported thingie is ${ artists.dylan}`);
console.log(`The size of the loaded DYLAN, is ${artists.dylan.length}.`)
