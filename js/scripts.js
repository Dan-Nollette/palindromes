function clicked(event){
  event.preventDefault();
  var stringIn = $("input#stringIn").val();
  var stringOut= "";
  arrayIn = [];
  arrayIn= stringIn.split("");
  // if (arrayIn.reverse().join("") === stringIn){
  //   alert( "It's a palindrome");
  // } else {
  //   alert("it's not");
  // }
  var matches = true;
  for(var i = 0; i < arrayIn.length; i++){
    if (arrayIn[i] !== arrayIn[arrayIn.length - i - 1] ) {
    matches = false;
    }
  }

  console.log(arrayIn);
  if (matches) {
    stringOut ="It's a palindrome.";
  } else {
    stringOut ="It's not";
  }
  $("#stringOut").html(stringOut);
};

$(document).ready(function() {
});
