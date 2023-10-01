//Singlton Object
// const TinderUsers=new Object();


const TinderUser = {};

TinderUser.name="Raja";
TinderUser.id="123";
TinderUser.isLoggedIn=false;

// console.log(TinderUser);

//Nested Objects

// const UniversityRecord ={

//     Name:"Umar",
//     KPKUniversities:{
//         UniveristyOfHaripur:45,
//         Constst:1,
//        AUST:67,
//        MansheraUni:{
//         Ranking:56,
//         Records:10
//        }
//     }
// }

// console.log(UniversityRecord.KPKUniversities.MansheraUni);



//Assign

const obj1= {
    1:"a",
    2:"5"
}


const obj2= {
    3:"c",
    4:"d"
}

// const obj3=Object.assign({},obj1,obj2);


const obj3= {...obj1, ...obj2};

// console.log(obj3);

// console.log(TinderUser);
// console.log(Object.keys(TinderUser));



//Object Destructuring

const Course = {
    CourseName:"Js in Hindi",
    Price:56,
    InstructorName:"Umar Raja"
}

const {InstructorName:Name} = Course;
console.log(Name);
