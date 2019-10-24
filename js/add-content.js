'use strict'

var hourNow = prompt('What time is it?'); 
console.log('Put in the number' + hourNow);

var favoriteDinosaur = prompt('What is your favorite Dinosaur?'); 

var newDinosaur = favoriteDinosaur.toLowerCase(); 

if(newDinosaur === 'Archeopteryx'){
  var name = prompt('What is your name?');
  if(name === "Brandon"){
    alert('Correct!');
  } else{
    alert('Incorrect.');
  }

} else{
  alert('Incorrect.');

}


if (hourNow > 18) {
  greeting = 'Good evening';
} 

else if (hourNow > 12) {
  greeting = 'Good afternoon';
} else if (hourNow >= 0) {
  greeting = 'Good morning!';
} else {
  greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');