$(document).ready(function() {
	console.log('Line 2.')
		var regObject = {};
			
		function displayResults(message) {
			if ($('#resultSection:visible').length==0) $('#resultSection').show();
			$('#testResults').html('<p>' + message + '</p>');
		}
		
		function buildResults() {
			var resultString="No match"; // default setting
			var formatSearch = regObject.testString.replace(regObject.regex,'<strong class="found">$&</strong>');
			

			switch (regObject.method) {
				case 'search' :
					if(regObject.results==-1) break; // no match
					resultString = 'Found at position ' + regObject.results;
					resultString += ' in string: <br>' + formatSearch + '';
					break;
				case 'match' : 
					if (! regObject.results) break; // no match
					resultString = '';
					for (i in regObject.results) {
						resultString += (i + ':');
						if (i == 'input') {
							resultString += (formatSearch);
						} else {
							resultString += regObject.results[i];
						}
						resultString += '<br>';
					}
					break;
				case 'replace' :
					if (regObject.results==regObject.testString) break; // no match
					resultString = '';
					resultString += regObject.results;
					break;
			}
			var prependString = "Regex: " + regObject.reValue + "<br>";
			return prependString + resultString;
		}
				
	

			
		$('#regexTester').submit(function() {
			
			//get string
			regObject.testString = $('#string').val();
			
			//any options
			regObject.options='';
			$(':checkbox:checked').each(function() {
				regObject.options += $(this).val();																 
			});
			
			
			//get regular expression value and convert to regex
			regObject.reValue = $('#regex').val();
			try {
			regObject.regex = new RegExp(regObject.reValue,regObject.options);
			} catch (e) {
				displayResults("ERROR IN YOUR REGULAR EXPRESSION<br>" + e);
				return false;
			}
			
			//method
			regObject.method = $('[name=method]:checked').val();
			
			//replace
			if (regObject.method=='replace') {
				regObject.replaceString = $('#replaceString').val();
			}
			
			if (regObject.method=='search') {
				regObject.results = regObject.testString.search(regObject.regex);
			} else if (regObject.method=='match')  {
				regObject.results = regObject.testString.match(regObject.regex);
			}	else {
				regObject.results = regObject.testString.replace(regObject.regex,'<strong class="found">' + regObject.replaceString + "</strong>");
			}
			displayResults(buildResults());
		
				
	
			return false;
			
	  });
		
		//hide replacement box until needed
		$('#replaceBox').hide();
		//show replacement box when replace selected
		$('#replace').click(function() {
			$('#replaceBox').show('fast')
		 });
		//hide replacement box if either of the other two buttons selected
		$('#search, #match').click(function() {
			$('#replaceBox').hide('fast')
		});
});




/**
	@mistergenest 12/16/2018
	Make output appear after the RegEx
*/

/**
CLASSES IN McF=================
found

IDs in McF=====================
RegexTester
string
regex
replacestring
search
match
replacebox
*/