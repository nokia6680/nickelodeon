"use strict";


document.addEventListener('DOMContentLoaded', function(event){

	var todayYear = new Date().getFullYear();
	document.querySelector('#copyrightYear').innerHTML = todayYear;
	todayYear = null;

	// var datepicker__begin = new Datepickk({
	// 	container: document.querySelector('#date-begin'),
	// 	range: false
	// }).show()
	//
	// var datepicker__end = new Datepickk({
	// 	container: document.querySelector('#date-end'),
	// 	range: false
	//
	// }).show()

	event.preventDefault();
});
