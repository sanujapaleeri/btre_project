const date = new Date();
document.querySelector('.year').innerHTML = date.getFullYear();

let timeout = setTimeout(function(){
    $('#message').fadeOut('slow');
}, 3000);