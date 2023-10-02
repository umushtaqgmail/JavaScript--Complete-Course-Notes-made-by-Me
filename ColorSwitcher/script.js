
const buttonClic = document.querySelector('.switch_button');
const Switcher = document.querySelector('.color_switcher');

buttonClic.addEventListener('click', function(e){
  
  Switcher.classList.toggle("switch");
  console.log("clicked");
 
  

})


// console.log(buttonClic);
// console.log(Switcher);



// Selecting Colors to change overall color scheme

 const buttons = document.querySelectorAll('.theme_btn');
 
 const ColorChangeDiv = document.querySelector('.container');
 const Heading_Changed = document.querySelector("#Heading-Changed");




  buttons.forEach(function (buttons){
    console.log(buttons);
    buttons.addEventListener('click', function(e){
      // console.log(e);
      // console.log(e.target);

      if(e.target.id === "DeepPink"){
        ColorChangeDiv.style.background= "#FF1493 ";
        Heading_Changed.style.color = "#FF1493"
     
      }
      else if(e.target.id === "orange"){
        ColorChangeDiv.style.background= "#E55604 ";
        Heading_Changed.style.color = "#E55604"
      }
      else if(e.target.id === "skyblue"){
        ColorChangeDiv.style.background= "#2596be ";
        Heading_Changed.style.color = "#2596be"
      }
      else if(e.target.id === "red"){
        ColorChangeDiv.style.background= "#DC143C ";
        Heading_Changed.style.color = "#DC143C"
      }

      else if(e.target.id === "pink"){
        ColorChangeDiv.style.background= "#FFC0CB";
        Heading_Changed.style.color = "#FFC0CB"
      }
      else if(e.target.id === "yellow"){
        ColorChangeDiv.style.background= "#FFA500";
        Heading_Changed.style.color = "#FFA500"
      }
    })
  })




// const button = document.querySelectorAll('.button');



// const body = document.getElementsByTagName('body');
// const red = document.getElementById('red');


// button.forEach(function (button) {
//     console.log(button);
//     button.addEventListener('click', function (e) {
//       console.log(e);
//       console.log(e.target);

//       if (e.target.id === 'grey') {
//        body.style.backgroundColor = e.target.id;
//       }
//       if (e.target.id === 'yellow') {
//         body.style.backgroundColor = e.target.id;
//       }
//       if (e.target.id === 'blue') {
//         body.style.backgroundColor = e.target.id;
//       }
//       if (e.target.id === 'green') {
//         body.style.backgroundColor = e.target.id;
//       }
      
//     });
//   });
  