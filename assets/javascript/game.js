var randomNumber;
var losses;
var wins;

for(var 1=0; i < 4; i++){

    var randomnity = Math.floor(Math.random() * 12);
    var crystalGroup = $("<div>");
        crystalGroup.attr({
            "class": 'crystalgroup',
            "numbers": randomnity
        });

    $(".crystals").append(crystalgroup);

}