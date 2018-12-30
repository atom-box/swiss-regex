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


var btn = document.querySelector('button');
function random(number) {
  return Math.floor(Math.random()*(number+1));
}
btn.onclick = function() {
  var rndCol = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) + ')';
  document.body.style.backgroundColor = rndCol;
}


let goButton = document.getElementById("go");
goButton.onclick = paneTwo.showResults;



document.addEventListener(`DOMContentLoaded`, function(event) {
    console.log(`DOM fully loaded and parsed`);
    console.log(paneTwo.confirm());
    console.log(paneTwo.showResults());
    console.log(`In ${paneTwo.listWindowKeys()}`);
/*    document.write('<h3>Make me smile.   Make me smile.<\h3>');
*/  });
