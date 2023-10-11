 const coding = ["javascript", "cpp", "swift"];

 coding.forEach(function(e){

    console.log(e);
 })


 coding.forEach((m) =>{

    console.log(m);
 } )


 const Languages = [
    {
        name: "javascript",
        popularity : "10/10"
    },

    {
        name: "python",
        popularity : "9/10"
    },

    {
        name: "C++",
        popularity : "6/10"
    }
 ]

 Languages.forEach( (e)=> {
        console.log(e.popularity);
 })