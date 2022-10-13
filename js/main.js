var num_1 = 5;
var num_2 = 15;

console.log("Результат: " + (num_1 - num_2));

var num_3 = 5;
num_3 += 7;
console.log("Resultat: " + num_3);

var str_1 = Number("12");
var str_2 = Number("2");
console.log("Результат: " + (str_1 + str_2));

console.log("Math: " + Math.PI);
console.log("Math: " + Math.E);
console.log("Math: " + Math.min(4, 12, 6, 8 , 0));
console.log("Math: " + Math.max(4, 12, 6, 8 , 990));

var number = 15;

var isHasHouse = true;



if(number == 5 || isHasHouse == true) {
    console.log("Ok");
} else if (number < 10){
    console.log("Ok!");
} else if (number == 7){
    console.log("7!");
} else if (number >=15){
    console.log(">=15!");
} else {
    console.log("noOk");
}

var stroka ="word";

switch(stroka) {
    case "4":
        console.log("Переменная со значением 4");
        break;
    case "45":
        console.log("Переменная со значением 45");
        break;
    case "word":
        console.log("Переменная со значением word");
        break;
}

for(var i = 0; i < 10; i++) {

}