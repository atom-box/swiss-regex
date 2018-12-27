let paneTwo = {};

paneTwo.confirm = ()=> {
	const NOW = new Date;
	return `Nurse: Madam, I am present. ${NOW}`;
}; 

paneTwo.listWindowKeys =()=> {

	// this array will alternate: LABEL + keyssss ...
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

export {paneTwo};

