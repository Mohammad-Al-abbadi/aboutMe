
let txt;
let person = prompt("Please enter your name:");
if (person == null || person == "") {
    txt = "User cancelled the prompt.";
} else {
    txt = "Hello " + person + "! How are you today?";
}
alert("your name is:", person);
//document.getElementById("Name").innerHTML = txt;


let txt;
let Age = prompt("Please enter your Age:");
if (Age == null || Age == "") {
    txt = "User cancelled the prompt.";
} else {
    txt = "your age: " + Age;

    alert("your age is:", Age);
    //document.getElementById("Age").innerHTML = txt;
}


let txt;
let movie = prompt("Please enter your favorite movie:");
if (movie == null || movie == "") {
    txt = "User cancelled the prompt.";
} else {
    txt = "your favorite movie: " + movie;
}
//document.getElementById("demo").innerHTML = txt;



let txt;
let country = prompt("Please enter your country");
if (country == null || country == "") {
    txt = "User cancelled the prompt.";
} else {
    txt = "your country is: " + country;
}
    //document.getElementById("demo").innerHTML = txt;


