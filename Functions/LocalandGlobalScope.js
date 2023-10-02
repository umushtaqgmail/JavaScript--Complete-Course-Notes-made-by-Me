if (true) {
  let a = 6;
  let b = 67; //Local Scope
  const Apple = "California";
  var e = "Russia";
}

let a = 56; //Global Scope
const Apple = "China";
var b = 87;

console.log(a);
console.log(b);
console.log(Apple);
console.log(e);

if (true) {
  const Myname = "umar";
  const Website = "Amazon.com";
  if (Myname === "umar") {
    console.log(Myname  +  Website);
  }
  console.log(Website);
}


