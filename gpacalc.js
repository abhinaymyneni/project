var $ = function (id) {
	return document.getElementById(id);
};

var grades = ['A', 'B', 'C', 'D', 'F'];
var numbers  = [4.0, 3.0, 2.0, 1.0, 0];

var grade = new Array();
var credit = new Array();
var value = new Array();

var gpa = 0;
var totalValues = 0;
var totalCredits = 0;

var num = prompt("Enter number of subjects");
var counter = 0;

while(counter==0) {
	if (num < 2 || num == null || num == '') {
		alert("Enter for atleast 2 subjects");
		var num = prompt("Enter number of subjects");
	}
	else {
		gpaPush();
		counter = 1;
	}
	times=times+1;
}

function gpaPush() {
	grade.push($("g1").value);
	credit.push($("c1").value);
	
	$("g1").value = "";
	$("c1").value = "";
};

function gpaCalculator() {
	
	var counter = 0;
	for (var i=0; i < grade.length; i++) {
		if((grade[i] == '' || isNaN(grade[i])) || (credit[i] == '' || isNaN(credit[i]))) {
			counter += 1;
		}
		else if (credit[i] == '') {
			credit[i]=0;
		}
	}
	

	for (var i = 0; i < grade.length; i++) {
		if (grade[i] == 'A'){
			value[i]=4;
		}
		else if (grade[i] == 'B') {
			value[i]=3;
		}
		else if (grade[i] == 'C') {
			value[i]=2;
		}
		else if (grade[i] == 'D') {
			value[i]=1;
		}
		else if (grade[i] == 'F' ||  grade[i] == '') {
			value[i]=0;
		}
	}
	
	for (var i = 0; i < value.length; i++) {
		var temp = (value[i] * credit[i]);
		totalValues += temp;
	}
	for (var j = 0; j < credit.length; j++) {
		totalCredits += parseInt(credit[j]);
	}
	
	
	gpa = parseFloat(totalValues/totalCredits).toFixed(2);
		
    $("gpa").value = gpa;
		
};

window.onload = function() {
	$("calc").onclick = gpaCalculator;
	$("add").onclick = gpaPush;
}