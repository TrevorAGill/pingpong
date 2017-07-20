//Front-end

$(document).ready(function() {
  $("#pingpongform").submit(function(event) {
    event.preventDefault();
    $(".resultline").remove();
    var numberInput = $("#numberinput").val();
    appendItems(numberInput);
  });
});


//Back-end

//definition of function to populate list
function appendItems(numberInput) {
  return getArray(numberInput);
}
//Returns an array of numbers up to the user's input number
function getArray(numberInput) {
  var numberArray = [];
  for (i=0 ; i<numberInput ; i++) {
    numberArray.push(i+1);
  }
  return translateMultiples(numberArray);
}
//translates numbers divisible by 3, 5, and 15, into words
function translateMultiples(numberArray) {
  $(".well.results").show();
  for (i=0 ; i<numberArray.length ; i++) {

    if (numberArray[i] % 15 === 0) {
      numberArray[i] = "ping-pong";
    } else if (numberArray[i] % 5 === 0) {
      numberArray[i] = "pong";
    } else if (numberArray[i] % 3 === 0) {
      numberArray[i] = "ping";
    }
  }
  for (i=0 ; i<numberArray.length ; i++) {
    $("#result").append("<li class='resultline'>" + numberArray[i] + "</li>")
  }
}
