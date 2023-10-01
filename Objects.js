//Singleton


//Object literals

const JsUsers = {
    name:"Umar",
    age:56,
    isLoggedIn:true,
    lastLoginDay:['Monady', 'Tuesday','Wednesday']
};

// console.log(JsUsers.isLoggedIn);
// console.log(JsUsers.name);

// JsUsers.age=766;
// console.log(JsUsers.age);


JsUsers.greeting = function(){
    console.log(`hello JS User ${this.name} ` );
}

console.log(JsUsers.greeting());

