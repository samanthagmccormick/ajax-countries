// This is where your jQuery goes
// CLIENT-SIDE

// jQuery ready wrapper
$(function() {

	console.log('This is a test of the jQuery file');

	// When the user clicks the Load Countries button,
	$('.loadCountries').on('click', function() {
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
					'<li class="glyphicon glyphicon-star-empty">' + responseData[i].name + '</li><br />'
					); // end append
				if(responseData.hasTraveled === true) {
					$(this).closest('li').append('FLAG');
				}
			}
		});  // end get request
	}); // end click of LOADCOUNTRIES button


// Capture the search input and display results
	$('.search').on('click', function() {
		// you are sending this to the server, and will reference it using req.body.name!
		var postData = {
			name: $('.searchBox').val()
		};

	// Ajax post request to search, passing the search term data
		$.post('/search', postData, function(searchResults) {
			// This will console log your SPECIFICALLY SEARCHED country to the client console
			console.log('These are your search results: ', searchResults);

			for (var i = 0; i < searchResults.length; i++) {
				$('#searchResults').append('<li>' + searchResults[i].name + '...' + searchResults[i].frenchName + '...' + searchResults[i].localName + '...' + searchResults[i].region + '</li>');
			}
		});
	}); // end click of SEARCH button

// On click of star icon
	$(document).on('click', '.glyphicon', function() {
		console.log('Star has been clicked');
		// When clicked, fill in the star
		$(this).removeClass('glyphicon-star-empty').addClass('glyphicon-star');
		// The text of the LI
		console.log('This text: ', $(this).text());

		// you are sending this to the server, and will reference it with req.body.starred
		var postData = {
			starred: $(this).text()
		};

		$.post('/hasTraveled', postData, function(countries) {
			for(var i = 0; i < countries.length; i++) {
				if(countries[i].hasTraveled === true) {
					console.log('Theyve traveled to: ',countries[i].hasTraveled);
				}
			}

		});
	});


});  // end jQuery wrapper