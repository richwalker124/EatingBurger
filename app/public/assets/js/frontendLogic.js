//Onclick event for making a new burger
//Works Now what to with data

//Error fixing i hope, should prevent instant erroring from undefined doc.
if(typeof document !== "undefined"){
document.addEventListener("DOMContentLoaded", function(){


var newBurger = "";

document.addEventListener('click', function (event){
     if (!event.target.matches('#addburgClick')) return;
//     //Shouldn't need this but safety first amirite.
    
   event.preventDefault();
//     //console.log(event.target);
    
   newBurger = document.getElementById("comment").value.trim();
  console.log(newBurger);
    //module.exports = newBurger;
 });

})

}



