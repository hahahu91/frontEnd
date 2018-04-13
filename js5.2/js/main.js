//var buttonFilms = document.getElementsByClassName('button_films');
//console.log(buttonFilms[0]);
var otherFilms = document.getElementById('all_films');
console.log(otherFilms);
var buttonFilms = document.getElementById('all_films_button');

buttonFilms.addEventListener('click', function(event){
    event.preventDefault();
    console.log(buttonFilms.innerHTML);
    otherFilms.classList.add('hidden');
});

var myForm = document.getElementsByTagName('form');
console.log(myForm);
var requiredElements = document.getElementsByClassName('required');
console.log(requiredElements);
var submitButton = document.getElementById('form_submit');
console.log(submitButton);
submitButton.addEventListener('click', function(event){
    event.preventDefault();
    validateForm();
});


requiredElements[0].classList.del

function validateForm(){
    var i;
    for (i = 0; i < requiredElements.length; i++) {
      if (!requiredElements[i].value) {
      requiredElements[i].classList.add('error');
      }
    }
}