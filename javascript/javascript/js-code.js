var name = "Dyo";
var age = 35;

var nilai = 45.6;
var firstName = "John";
var lastName = "Doe";
var dateOfBirth = "1989";

var yearOfBirth = parseInt(dateOfBirth);
var yearNow = (new Date()).getFullYear();

var age = yearNow - yearOfBirth;


var pesan = "Halo, nama saya: " + name + " umur saya " + age + " tahun";
var congrate = "Hello " + firstName + '! ' + 'selamat ultah ke ' + age;  



// output
// console.log(pesan);
console.log(dateOfBirth);
console.log(yearOfBirth);

//console.log(yearNow);

console.log(congrate);

