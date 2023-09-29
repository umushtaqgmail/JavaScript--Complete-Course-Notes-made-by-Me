const button=document.querySelectorAll('.button');
const body= document.getElementsByTagName('body');
const red=document.getElementById('red');
console.log(body);

button.forEach(function (button) {
    console.log(button);
    button.addEventListener('click', function (e) {
      console.log(e);
      console.log(e.target);
      if (e.target.id === 'grey') {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'yellow') {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'blue') {
        body.style.backgroundColor = e.target.id;
      }
      if (e.target.id === 'green') {
        body.style.backgroundColor = e.target.id;
      }
      
    });
  });
  