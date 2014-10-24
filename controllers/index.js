var countries = require('../models/countries.json');

var indexController = {
	index: function(req, res) {
		res.render('index');
	},
	countries: function(req, res) {
		// // This will console.log the countries file contents to your TERMINAL 
		// console.log(countries);

		// This will SEND the contents of countries to your jQuery page, where they will be rendered
		res.send(countries);
	},
	search: function(req, res) {
		// This will print to the terminal
		console.log("Search button works");

		// Print the search query to the terminal
		console.log('This is your search query: ', req.body.name);

		var searchResults = [];
		var searchQuery = req.body.name;

		// Search all countries to see if the searchQuery matches any of them
		for (var i = 0; i < countries.length; i++) {
			if (countries[i].name === searchQuery) {
				searchResults.push(countries[i]);
			}
		}

		// Send those searchResults to the client, for use in jQuery
		res.send(searchResults);
	},
	hasTraveled: function(req, res) {
		console.log("Has traveled works");

		var starredResults = [];
		// This is your postdata
		console.log(req.body.starred);
		var starred = req.body.starred;

	// Search all countries to see if the clicked star text contents matches the object
		for (var i = 0; i < countries.length; i++) {
			if (countries[i].name === starred) {
				// Add an object property to this specific country, set hasTraveled to true
				countries[i].hasTraveled = true;   
			}
		}

		res.send(countries);

	}
};

module.exports = indexController;