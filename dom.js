
// 1.Write the code to access element which is having id as "text"
const element1=document.getElementById("text")
console.log(element1);

// 2.Write the code to access element which is having tag as "h1"
const element2=document.getElementsByTagName("h1")
console.log(element2);

// 3.Write the code to access element which is having class as "box"
const element3=document.getElementsByClassName("box")
console.log(element3);

// 4."<h1>Hello </h1>
// Change the heading from ""Hello"" to ""Hello World"" using DOM functions" 
const element5=document.getElementsByTagName("h1")
console.log(element5[1]);
element5.innerText="Hello World";
console.log(element5.innerText);

// 5.Create three cards on HTML page and arrange them using flex property in row or horizontal direction and also create button at the bottom named "Change Flex direction". When user clicks on this button, the cards arrangement should be changed to vertical direction.

function change(){
const elememnt1=document.getElementsByClassName("main")
 elememnt1[0].style.flexDirection="column";
   
}
//6."<h1>Hello </h1>
// // Add one style attribute and give text color as red and id attribute and give the id value as ""heading"" in the above given h1 tag using DOM functions"
const element6=document.getElementsByTagName("h1")
console.log(element6);
element6.setAttribute("id","heading")
element6.style.color="red";
console.log(element6);

 //. Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second


function showRealTime(){
const date=new Date();
const hour=date.getHours();
const mins=date.getMinutes();
const secs=date.getSeconds();
console.log(hour,mins,secs);

}
showRealTime();

//7.Write the difference between document and window.
// document: document is object like html, php etc which gets parsed inside the global object.
//Window: It is the root object of all the objects in the javascript. This is called as a global object.


//Q.10 Create a select drop down for selecting Year 20-21, 21-22 etc. Print the item text selected

function year() {
    let year1  = document.getElementById("year_21-22");
    let year2 = year1.options[year1.selectedIndex].text;
    document.getElementById("print").innerText = year2;
}

