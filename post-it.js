// var Board = function( selector ) {
//   // Your board related code goes here

//   // Use $elem to access the DOM element for this board
//   var $elem = $( selector );

//   function initialize() {
//     // What needs to happen when this object is created?
//   };

//   initialize();
// };

var changePostItPos = function() {
  $(".post-it").css("background-color","green")
  console.log('yes')
}


var showPostIt = function() {
  $(".post-it").show("blind")
}



// var postIt = function() {
//   $('body').click(showPostIt)
// };



var giveCoords = function () {
  $(document).click(function(e) {
    var offset = $(this).offset();
    $('#x_axis').html(e.clientX);
    $('#y_axis').html(e.clientY);
  });
}

$(document).ready(changePostItPos())

$(document).ready(giveCoords)



// $(function() {
//   // This code will run when the DOM has finished loading
//   Board.new('#board');
// });
