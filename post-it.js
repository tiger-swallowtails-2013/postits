// var Board = function( selector ) {
//   // Your board related code goes here

//   // Use $elem to access the DOM element for this board
//   var $elem = $( selector );

//   function initialize() {
//     // What needs to happen when this object is created?
//   };

//   initialize();
// };

// var PostIt = function() {
//   // Your post-it related code goes here
// };



var changePostItPos = function(id,x,y) {
  $("#"+id).css("top",y);
  $("#"+id).css("left",x);
};


var showPostIt = function(id) {
  $("#"+id).show("blind")
}


var increment = {
  value: 0,
  count: function() {
    this.value = this.value + 1

  }

}

function createPostIt() {

  $(document).click(function(e) {
    if ((($(e.target).hasClass("post-it")) === false) && (($(e.target).hasClass("header")) === false) && (($(e.target).hasClass("content")) === false) && (($(e.target).hasClass("close")) === false)){
      id = increment.value
      $("div").blur()
      $("#board").append("<div id='" + id + "' class='post-it'>")
      $("#"+id).draggable()
      $("#"+id).html("<div class='header'><span class='close'>[X]</span></div>")
      $("#"+id).append("<div class='content' contenteditable='true'>")
      changePostItPos(id,e.clientX,e.clientY)
      showPostIt(id)
      increment.count()
    }
    else if ($(e.target).hasClass("close") === true) {
      $(e.target).parent().parent().remove()
    }
    else {
      console.log(e.target)
      $(e.target).focus()
    }
  })
}

$(document).ready(function(){
  createPostIt()
})

// $(function() {
//   // This code will run when the DOM has finished loading
//   Board.new('#board');
// });