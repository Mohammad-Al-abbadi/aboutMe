
let txt;
let person = prompt("Please enter your name:", "Harry Potter");
if (person == null || person == "") {
    txt = "User cancelled the prompt.";
} else {
    txt = "Hello " + person + "! How are you today?";
}
document.getElementById("Name").innerHTML = txt;

prompt("enter your age: ");
function Age() {
    let txt;
    let Age = prompt("Please enter your Age:");
    if (Age == null || Age == "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = "your age: " + Age;
    }
    alert("your age is:", "Age");
    //document.getElementById("Age").innerHTML = txt;
}

function myFunction() {
    let txt;
    let person = prompt("Please enter your name:", "Harry Potter");
    if (person == null || person == "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = "Hello " + person + "! How are you today?";
    }
    document.getElementById("demo").innerHTML = txt;
}

function myFunction() {
    let txt;
    let person = prompt("Please enter your name:", "Harry Potter");
    if (person == null || person == "") {
        txt = "User cancelled the prompt.";
    } else {
        txt = "Hello " + person + "! How are you today?";
    }
    document.getElementById("demo").innerHTML = txt;
}

