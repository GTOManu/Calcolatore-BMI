
let altezza = prompt("aggiungi qui la tua altezza in cm");
altezza = altezza/100;
let peso = prompt("agggiungi qui il tuo peso in kg");

function calcolobmi(peso,altezza){

    let bmi = peso/Math.pow(altezza,2);
    return bmi.toFixed(1);

}


let BMI = calcolobmi(peso,altezza);
let risposta = "il tuo BMI è " + BMI;
alert(risposta);


if (BMI < 18.5 ){
    alert(risposta +", quindi sei sottopeso");
}else if (BMI >= 18.5 && BMI <= 24.9){
    alert(risposta + ", quindi sei normopeso");
}else if (BMI == 25.0){
    alert(risposta + ", quindi sei in sovrappeso");
}else if (BMI >= 25.1 && BMI <= 29.9 ){
    alert(risposta + " quindi rientri nella categoria pre-obesità");
}else if (BMI >= 30.0 && BMI <=34.9){
    alert(risposta + ", quindi rientri nella classe di obesità |");
}else if (BMI >= 35.0 && BMI <=39.9){
    alert (risposta + ", quindi rientri nella classe di obesità ||");
}else{
    alert(risposta + " , quindi rientri nella classe di obesità |||");
}

