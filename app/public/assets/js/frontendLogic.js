//Onclick event for making a new burger

document.addEventListener('click', function (event){
    if (!event.target.matches('#addburgClick')) return;
    //Shouldn't need this but safety first amirite.
    event.preventDefault();
    //console.log(event.target);
})