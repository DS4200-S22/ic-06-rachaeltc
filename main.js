/*

In-class activity 07 starter code
Prof. Mosca 
Modified: 12/06/21 

*/

//Starter code for Button 1 click
    // You will need to call this function when Button 1 is clicked
    // You will need to modiffy the body of this function as described in the assignment Readme
function button1Clicked() {
    document.getElementById("random_num").innerHTML = Math.floor(Math.random() * 1000);;
}

function button2Clicked() {
    const circle_fill = document.getElementById("circle").style.fill;
    if (circle_fill == "blue") {
        document.getElementById("circle").style.fill = "green";
    } 
    if (circle_fill == "green") {
        document.getElementById("circle").style.fill = "blue";
    } 
}