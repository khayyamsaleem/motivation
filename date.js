
var ageCalc = function() {
	var birthday = new Date(localStorage['dob']);
	var today = new Date();
	var duration = today - birthday;
	var age = duration / 31556900000;
	$('#age').html('<h2>' + age.toFixed(15) + '</h2>');
	console.log(age);
};

$(document).ready(function(){
	if (typeof localStorage['dob'] != "undefined"){
		$('form').remove();
		$('body').append("<div id='age'></div>");
		setInterval(ageCalc, 80);
	} else {
		$('#button').click(function(e){
			e.preventDefault();
			localStorage['dob'] = picker.getDate();
			$('form').fadeOut("fast");
			$('body').append("<div id='age'></div>");
			setInterval(ageCalc, 80);
		});
	}
});
