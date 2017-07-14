$(document).ready(function() {
  $("#pingpongform").submit(function(event) {

    event.preventDefault();

    var numberInput = $("#numberinput").val();
    var numberArray = [];

//Returns an array of numbers up to the user's input number
    function getArray(numberInput) {
      for (i=0 ; i<numberInput ; i++) {
        numberArray.push(i+1);
      }
      return numberArray;
    }

    function translateMultiples(getArray,numberArray) {
      var numberArray = getArray(numberInput);

      for (i=0 ; i<numberArray.length ; i++) {
        if (numberArray[i] % 15 === 0) {
          numberArray[i] = "ping-pong";
        }
      }
      return numberArray;
    }


    alert(translateMultiples(getArray,numberArray));
  });
});
