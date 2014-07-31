var blogs = [
	{
		title: "Blog Title 1",
		content: "This is a sample lorem ipsum filler",
		date: 'January 10, 2014',
		show: true,
	},

	{
		title: "Blog Title 2",
		content: "This is a sample lorem ipsum filler",
		date: 'February 10, 2014',
		show: true,
	},

	{
		title: "Blog Title 3",
		content: "This is a sample lorem ipsum filler",
		date: 'January 10, 2014',
		show: false,
	},

	{
		title: "Blog Title 4",
		content: "This is a sample lorem ipsum filler",
		date: 'March 10, 2014',
		show: true,
	},
];

var app = angular.module('site', []);

app.controller('SiteController', function() {
	this.blogs = blogs
});
