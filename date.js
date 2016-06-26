var data = {
    "title": "Motivation",
    "date": function(){
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth() + 1;
            var yyyy = today.getFullYear();

            if (dd<10) {
                dd='0' + dd;
            };
            if (mm<10) {
                mm='0'+mm;
            };
            today = mm + '/' + dd + '/' + yyyy;
            return today;
        },
    "name": "Khayyam Saleem",
    "test": "this is test data",
}

var tpl = "<ul><li>{{name}}</li><li>{{title}}<li>{{date}}</li><li>{{test}}</li></ul><motivate></motivate>"

var output = Mustache.render(tpl, data);
//document.getElementById('mustache').innerHTML = output;
var ageCalc = function() {
	var birthday = picker.getDate();
	var today = new Date();
	var duration = today - birthday;
	var age = duration / 31556900000;
	$('#age').append(age);
	console.log(age);
};

$(document).ready(function(){
    $('#button').click(function(e){
        e.preventDefault();
        $('form').fadeOut("fast");
        $('body').append("<div id='age'></div>");
		setInterval(ageCalc, 500);
    });
});
