var randomNumber;
var losses = 0;
var wins = 0;
var data = 0;

var restarting = function (){
    
    $(".crystals").empty();

    var images = [
                    'unit-4-game\assets\images\images\blue.png',
                    'unit-4-game\assets\images\images\green.png',
                    'unit-4-game\assets\images\images\red.png',
                    'unit-4-game\assets\images\images\yellow.png'];
    
    randomNumber = Math.random() * 69 ) + 30;

    $("#number" .html('Random Number: ' + randomNumber);

    for(var 1=0; i < 4; i++)    {

    var randomnity = Math.floor(Math.random() * 12);
    var crystalGroup = $("<div>");
            crystalGroup.attr({
                "class": 'crystalgroup',
                "numbers": randomnity
            });
            crystalgroup.css({
                "background-image":"url( '" + images[i] + "')",
                "background-size":"cover"
            });

        $(".crystals").append(crystalgroup);

    }

    $("#data").html("Scoring: " + data)

}   
    
restarting();



$(document).on('click', ".crystalGroup", function () {

    
    var num = parsing($(this).attr('numbers'));

    data += num;

    
    $("#data") .html("Scoring: " + data);
    
    console.log(data);

    if(data > randomNumber){
        
        losses++;

        $("#losses").html("Player losses: " + losses);

        data = 0;

        restarting();

    }
    else if(data === randomNumber){

        wins++;

        $("#wins") .html("Player wins: " + wins);
    
        data = 0;

        restarting();
    
    
    }
    
});
    
