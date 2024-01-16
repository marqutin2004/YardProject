/* function to choose what the goal is here*/

let squareLenghtHeight = 0;
let squareFT = 0;

function squareCal (x) {
squareFT = x * x
return squareFT
};
/*--------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------*/
let rectHeight = 0;
let rectLenght = 0;
let rectFT = 0;

function rectCal (x, y) {
rectFT = x * y
return rectFT
};
/*--------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------*/
let triangleHeight = 0;
let triangleLenght = 0;
let triangleFT = 0;

function triangleCal (x, y) {
triangleFT = ( x * y ) * 0.5
return triangleFT
};
/*--------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------*/
let circleLenght = 1;
let circleFT = 0;

function circleCal (x) {
circleFT = (x * x) * Math.PI
return circleFT
};
/*--------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------*/
$(document).ready(function () {
  // Attach a click event handler to the button
  $("#Square").click(function () {
      // Get the value entered in the text box using jQuery
      var inputValue = $("#textboxSquare").val();

      // Display or use the value as needed
      console.log("Input value:", inputValue);

      // You can store it in a variable for further use
      var storedValue = inputValue;
      console.log("Stored value:", storedValue);
  });
});
/*--------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------*/
/* THIS IS THE FUCNTION THAT MAKES THE BUTTONS APPEAR ONCE YOU PRESS TEH INITIAL QUANITYT OF MATERIALS NEEDED FOR A CERTAIN AREA BUTTON */
$(document).ready(function(){
    $('#quantityNeededButton').click(function(){
        $('#quantityNeeded').show(); // This will display the div #quantityNeeded
    });
});

$(document).ready(function(){
    $('#areaCoveredButton').click(function(){
        $('#areaCovered').show(); // This will display the div #quantityNeeded
    });
});
/*--------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------*/
/*THESE AREA THE FUNCTIONS THAT MAKE THE OPPOSITE FEATURE DISSAPEAR*/
$(document).ready(function() {
    $('#areaCoveredButton').on('click', function() {
      $('#quantityNeeded').hide();
    });
  });
  
  $(document).ready(function() {
    $('#quantityNeededButton').on('click', function() {
      $('#areaCovered').hide();
    });
  });
/*--------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------*/
// Wait for the document to be ready
$(document).ready(function() {
    $('#moreThanOneShapeButton').on('click', function() {
      $('.checkbox').show();
    });
  });


  $(document).ready(function() {
    $('#oneShapeButton').on('click', function() {
      $('.checkbox').hide();
    });
  });
/*--------------------------------------------------------------------------------------*/
/*--------------------------------------------------------------------------------------*/