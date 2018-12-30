let paneTwo = {};

paneTwo.confirm = ()=> {
  const NOW = new Date;
  return `Nurse: Madam, I am present. ${NOW}`;
}; 


/*
  A method to show what the keys are
  in 1-Location 2-Navigator 
  3-History 4-Document
*/

paneTwo.listWindowKeys =()=> {

  // wInfo Will hold LABEL & KEYS alternatingly
  let wInfo = [];
  // temp array to hold keys retrieved
  let someKeys = [];

  // location object keys
  wInfo.push("LOCATION ");
  someKeys = Object.keys(window.location);
  wInfo = wInfo.concat(someKeys);

  wInfo.push("NAVIGATOR ");
  someKeys = Object.keys(window.navigator);
  wInfo = wInfo.concat(someKeys);

  // history object
  wInfo.push("HISTORY ");
  someKeys = Object.keys(window.history);
  wInfo = wInfo.concat(someKeys);
  
  // document object
  wInfo.push("DOCUMENT ");
  someKeys = Object.keys(window.document);
  wInfo = wInfo.concat(someKeys);

  // navigator object

  return wInfo;
}

/*
  A method to write RegEx results into the right pane.
  Add event listenter
*/


paneTwo.showResults =()=> {
  let results = document.getElementById("results");
  console.log(`results is actually : ${ typeof results }`);
  console.log(`results is an object: ${ Object === results }`);
}



export {paneTwo};

