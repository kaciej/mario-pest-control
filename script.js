document.querySelector(".goombas-input").addEventListener("keyup", function(){
    var goombasPrice = Number(document.querySelector(".goombas-input").value * 12);
    var bobohmsPrice = Number(document.querySelector(".bob-ohms-input").value * 8);
    var cheepCheepPrice = Number(document.querySelector(".cheep-cheep-input").value * 5);
    document.querySelector(".total-price-amount").innerHTML = goombasPrice + bobohmsPrice + cheepCheepPrice;
});

document.querySelector(".bob-ohms-input").addEventListener("keyup", function(){
    var goombasPrice = Number(document.querySelector(".goombas-input").value * 12);
    var bobohmsPrice = Number(document.querySelector(".bob-ohms-input").value * 8);
    var cheepCheepPrice = Number(document.querySelector(".cheep-cheep-input").value * 5);
    document.querySelector(".total-price-amount").innerHTML = goombasPrice + bobohmsPrice + cheepCheepPrice;
});

document.querySelector(".cheep-cheep-input").addEventListener("keyup", function(){
    var goombasPrice = Number(document.querySelector(".goombas-input").value * 12);
    var bobohmsPrice = Number(document.querySelector(".bob-ohms-input").value * 8);
    var cheepCheepPrice = Number(document.querySelector(".cheep-cheep-input").value * 5);
    document.querySelector(".total-price-amount").innerHTML = goombasPrice + bobohmsPrice + cheepCheepPrice;
});

document.querySelector(".goombas-input").addEventListener("keyup", function(){
    var goombasPrice = Number(document.querySelector(".goombas-input").value);
    var bobohmsPrice = Number(document.querySelector(".bob-ohms-input").value);
    var cheepCheepPrice = Number(document.querySelector(".cheep-cheep-input").value);
    document.querySelector(".total-baddies-amount").innerHTML = goombasPrice + bobohmsPrice + cheepCheepPrice;
});

document.querySelector(".bob-ohms-input").addEventListener("keyup", function(){
    var goombasPrice = Number(document.querySelector(".goombas-input").value);
    var bobohmsPrice = Number(document.querySelector(".bob-ohms-input").value);
    var cheepCheepPrice = Number(document.querySelector(".cheep-cheep-input").value);
    document.querySelector(".total-baddies-amount").innerHTML = goombasPrice + bobohmsPrice + cheepCheepPrice;
});

document.querySelector(".cheep-cheep-input").addEventListener("keyup", function(){
    var goombasPrice = Number(document.querySelector(".goombas-input").value);
    var bobohmsPrice = Number(document.querySelector(".bob-ohms-input").value);
    var cheepCheepPrice = Number(document.querySelector(".cheep-cheep-input").value);
    document.querySelector(".total-baddies-amount").innerHTML = goombasPrice + bobohmsPrice + cheepCheepPrice;
});