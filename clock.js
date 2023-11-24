(function(){ 
console.info("Hello JS"); 
const myNode = document.createElement("div");
const digitalClock = document.getElementById("digitalClock");
digitalClock.appendChild(mynode);

// get date
const myDate = new Date();
Console.dir(myDate);
myNode.innerHTML = myDate.toLocaleTimesString();

//end of file 

})();