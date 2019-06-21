//Onclick event for making a new burger
//Works Now what to with data
document.addEventListener('click', function (event){
    if (!event.target.matches('#addburgClick')) return;
    //Shouldn't need this but safety first amirite.
    
    event.preventDefault();
    //console.log(event.target);
    
    var newBurger = document.getElementById("comment").value.trim();
    console.log(newBurger);
});


