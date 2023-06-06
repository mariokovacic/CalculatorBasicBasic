let gumbici = document.querySelectorAll("button");
let prikaz = document.getElementById("prikaz");
let brisi = document.getElementById("brisi");
let jednako = document.getElementById("jednako");

// gumbici
gumbici.forEach(function(gumb){


gumb.addEventListener("click", function(){



prikaz.value += this.value;


});



});

// brisi
brisi.addEventListener("click", function(){


    prikaz.value = "";



});


// jednako 


jednako.addEventListener("click", function(){


    prikaz.value = eval(prikaz.value); 
   


});

