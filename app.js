import { artistsString } from './data/artists.js';
//let artistsString = import('./data/artists.js');
let artists = JSON.parse(artistsString);
import { paneTwo } from './assets/messinWithThePage.js';
/*//let techsString = import("./data/techs.js");
//let techs = JSON.parse(techsString);
let leadersString = import('./data/leaders.js');
let leaders = JSON.parse(leadersString);
let shakespearesString = import('./data/shakespeares.js');
let shakespeares = JSON.parse(shakespearesString);
*/
console.log(`The size of the loaded DYLAN, is ${artists.dylan.length}.`);
document.addEventListener(`DOMContentLoaded`, function(event) {
    console.log(`DOM fully loaded and parsed`);
    console.log(paneTwo.confirm());
/*    document.write('<h3>Make me smile.   Make me smile.<\h3>');
*/  });
