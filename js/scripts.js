$(document).ready(function() {

//Front-end
//Clear button handling and generic function to remove all list items
  $("#clear").click(function () {
      $("li").remove();
  });

  //Submit button handling and invocation of function to populate list
  $("#pingpongform").submit(function(event) {
    event.preventDefault();
    var numberInput = $("#numberinput").val();
    var numberArray = [];
    appendItems(translateMultiples,numberArray);

//Back-end
//Returns an array of numbers up to the user's input number
    function getArray(numberInput) {
      for (i=0 ; i<numberInput ; i++) {
        numberArray.push(i+1);
      }
      return numberArray;
    }
//translates numbers divisible by 3, 5, and 15, into words
    function translateMultiples(getArray,numberInput,numberArray) {
      var numberArray = getArray(numberInput);

      for (i=0 ; i<numberArray.length ; i++) {
        if (numberArray[i] % 15 === 0) {
          numberArray[i] = "ping-pong";
        } else if (numberArray[i] % 5 === 0) {
          numberArray[i] = "pong";
        } else if (numberArray[i] % 3 === 0) {
          numberArray[i] = "ping";
        }
      }
      return numberArray;
    }

//definition of function to populate list
    function appendItems(translateMultiples,numberArray) {
      var numberArray = translateMultiples(getArray,numberInput,numberArray);

      for (i=0 ; i<numberArray.length ; i++) {
        $("#result").append("<li>" + numberArray[i] + "</li>")
      }
    }
  });
});
