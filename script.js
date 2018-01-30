function Load(){
	document.getElementById("birthdate").defaultValue = "2018-01-01"
}

function myFunction() {
    var table = document.getElementById("myTable");
    var name = document.getElementById("name").value;
    var birthdate = document.getElementById("birthdate").value;
    var gender = document.getElementById("gender").value;
    var row = table.insertRow(-1);
    var firstword = name.split(" ");
    row.setAttribute('id', firstword[0]);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);
    cell1.innerHTML = name;
    cell2.innerHTML = birthdate;
    cell3.innerHTML = solve(birthdate);
    cell4.innerHTML = gender;
    cell5.innerHTML = "<button type='button' onclick='edit("+firstword[0]+")'>Edit</button><button type='button' onClick='remove("+firstword[0]+")'>Delete</button>";
}

function solve(b){
	var date = new Date(b);
	day = date.getDate();
	month = date.getMonth() + 1;
	year = date.getFullYear();
	var curdate = new Date();
	curday = curdate.getDate();
	curmonth = curdate.getMonth() + 1;
	curyear = curdate.getFullYear();
	var age = curyear - year;
	if(curmonth < month){age--;}
	else if(curmonth == month){
		if(curday < day){age--;}
	}
	return age;
}

function edit(string){
	var row = document.getElementById(string).item[0];
	console.log(row);
}

function remove(string){
}