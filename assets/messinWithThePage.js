let paneTwo = {};

paneTwo.confirm = ()=> {
	const NOW = new Date;
	return `Nurse: Madam, I am present. ${NOW}`;
}; 

paneTwo.listWindowKeys =()=> {

	// array of LABEL & keys, LABEL & keys, ...
	let wInfo = [];
	wInfo.push("LOCATION ");
	let someKeys = Object.keys(window.location);
	wInfo = wInfo.concat(someKeys);
	return wInfo;
}

export {paneTwo};

