// This is where your jQuery goes
// CLIENT-SIDE

// jQuery ready wrapper
$(function() {

	console.log('This is a test of the jQuery file');

	// When the user clicks the Load Countries button,
	$(document).on('click', '.loadCountries', function() {
		console.log('The button has been clicked');
		
// Make an AJAX request to the URL /countries
		$.get('/countries', {}, function(responseData) {
			console.log('Get request works, getting countries.json file');

			// This will print the responseData (the JSON file) to the client's console
			console.log('responseData:', responseData);

			// Loop through your responseData and append the names of your countries
			// to the page
			for (var i = 0; i < responseData.length; i++) {
				$('#listOfCountries').append(
					'<li>' + responseData[i].name + '...' + responseData[i].frenchName + '...' + responseData[i].localName + '...' + responseData[i].region + '</li>'
					); // end append
			}
		});  // end get request
	}); // end click of LOADCOUNTRIES button

// Capture the search input and display results
	$('.search').on('click', function() {
		// Capture the search input into "postData" variable
		var postData = {
			name: $('.searchBox').val()
		};

// Ajax post request to search, passing the search term data
		$.post('/search', postData, function(searchResults) {
			// This will console log your SPECIFICALLY SEARCHED country to the client console
			console.log('These are your search results: ', searchResults);

			for (var i = 0; i < searchResults.length; i++) {
				$('#searchResults').append(
					'<li>' + searchResults[i].name + '...' + searchResults[i].frenchName + '...' + searchResults[i].localName + '...' + searchResults[i].region + '</li>'
					);
			}
		});


	}); // end click of SEARCH button


});  // end jQuery wrapper