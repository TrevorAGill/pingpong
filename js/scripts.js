$(document).ready(function() {
  $("#pingpongform").submit(function(event) {

    event.preventDefault();

    var numberInput = $("#numberinput").val();
    var numberArray = [];

//Returns an array of numbers up to the user's input number
    function getArray(numberInput) {
      for ( i=0 ; i < numberInput ; i++) {
        numberArray.push(i+1);
      }
      return numberArray;
    }


  });
});
