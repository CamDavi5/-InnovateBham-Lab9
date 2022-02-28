var friendArr = ["Makoto", "Hajime", "Nagito", "Kaede", "Shuichi"];
var placeArr = ["Bathroom", "Gym", "Workshop", "Theater", "Library", "Greenhouse", "Kitchen", "Pool", "Laundry Room", "Headmaster's Office"];
var weaponArr = ["Knife", "Dumbbell", "Wooden Hammer", "Cyanide", "Skewer", "Metal Bat", "Noose", "Poison Gas", "Cermaic Ball", "Kunai", "Toilet Paper", "Pistol", "Shovel", "Brass Knuckles", "Loofah", "Banana", "Guitar", "Boulder", "Scissors", "Monokuma"];

for (i=0; i<100; i++) {
    
    var newH3 = document.createElement('h3');
    newH3.textContent = "Accusation " + (i+1);
    
    var newAlert = alertAccusation(i+1, friendArr[i % 5], weaponArr[i % 20], placeArr[i % 10]);

    newH3.addEventListener("click", newAlert);

    document.body.append(newH3);
}

function alertAccusation(num, friend, weapon, location) {
    return function () {
        alert("Accusation " + num + ": I accuse " + friend + ", with the " + weapon + " in the " + location +"!");
    }
}