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

function appendDiv(id) {
  console.log(id)
  $(document).click(function() {
    console.log(id)
    $("#board").append("<div id='" + id + "' class='post-it'>")
    ////.text("sticky")
  })
  return (id + 1)
}

$(document).ready(changePostItPos())

$(document).ready(giveCoords)

$(document).ready(function(){
  var id = 0;
  id = appendDiv(id)
})

// $(function() {
//   // This code will run when the DOM has finished loading
//   Board.new('#board');
// });
