// feetToMile


function feetToMile(feet) {
    var mile = feet/5280;
    return mile;
}
var inputFeet = feetToMile(5280);
console.log(inputFeet + " Mile");






// woodCalculator

function woodCalculator(chair, table, bed){
    var chairWood = chair * 3;
    var tableWood = table * 5;
    var khatWood = bed * 7;
    var totalWood = chairWood + tableWood + khatWood;
    return totalWood;
}

    var woodResult = woodCalculator(5, 8, 13);
    console.log(woodResult + " cubic");






// brickCalculator


    function brickCalculator(floorNumber){
        var oneFeet = 1000;
        var tenFeet = oneFeet * 10;
        var twelveFeet = oneFeet * 12;
        var fifteenFeet = oneFeet * 15;
            if(floorNumber <= 10){
                return fifteenFeet;
            }
            else if(floorNumber > 10 && floorNumber <=20){
                return twelveFeet;
            }
            else{
                return tenFeet;
            }
    }
    
    var inputFloorNumber = brickCalculator(4);
    console.log(inputFloorNumber);

    



    // tinyFriend


    function tinyFriend(names) {
    var smallName = names[0];
    for(var i = 0; i < names.length; i++){
        var element = names[i];
        if(element.length < smallName.length){
            smallName = element;
        }
    }
    return smallName;
}
var friendSmallName = tinyFriend(["shahid", "jahidul", "islam", "momin ur rashidnode"]);
console.log(friendSmallName);