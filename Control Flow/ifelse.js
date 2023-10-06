

let Tempreatue =67;

if(Tempreatue === 50){
    console.log("Tempreature Zada Ho raha hai");
}
else{
    console.log("Zada ho nahi raha, Zada ho gya hai");
}

//nested if else

const balance = 600;

if(balance <500){
    console.log("less then 500");
}

else if(balance < 700){
    console.log("lesss then 700");
}
else {
    console.log("balance is greater then 1200");
}

//opeartors

// < , > <=, >=, === , != =


const userLoggedIn =true;
const debtCard =true;

const loinFromGoogle =true;
const loginFromEmail =true;

if(userLoggedIn && debtCard){ //AND
    console.log("allow to Log in");
}

if(loginFromEmail || loginFromEmail){   //OR
    console.log("user log in");
}

// ?? Null Caolescing Opeartor
let a;
a = 10 ?? 20;
console.log(a); //output : 10;

//Teriary Operator

// condation ? true :false
const iceTeaPrce = 70;
iceTeaPrce>=70 ?  console.log("Lele") : console.log("Nahi!");;



