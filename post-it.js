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



// var postIt = function() {
//   $('body').click(showPostIt)
// };




var increment = {
  value: 0,
  count: function() {
    this.value = this.value + 1

  }

}

function createPostIt() {

  $(document).click(function(e) {
    // if e.clientX and e.clientY are inside a div with post-it class
    //   then go into edit mode
    // else
    if (($(e.target).hasClass("post-it")) === false) {
      id = increment.value
      $("#board").append("<div id='" + id + "' class='post-it' contenteditable='true'>")
      $("#"+id).append("<div class='post-it'>")
      $("#"+id).draggable()
      $("#"+id).html("<div class='header'> X </div>what?!"+id)
      changePostItPos(id,e.clientX,e.clientY)
      showPostIt(id)
      increment.count()
    }
  })
}

$(document).ready(function(){
  // loadOldPostIts()
  // addCreateNewListeners()
  createPostIt()
})

// function loadOldPostIts(){
//   //some json request
//   var postItJson = //return value of json request >> [{x:234,y:27,text:"akjshfdklwej"},{x:234,y:27,text:"akjshfdklwej"},{x:234,y:27,text:"akjshfdklwej"},{x:234,y:27,text:"akjshfdklwej"},{x:234,y:27,text:"akjshfdklwej"},{x:234,y:27,text:"akjshfdklwej"},{x:234,y:27,text:"akjshfdklwej"}]
//   $.each(postItJson, function(singlePostIt){
//     new PostIt(singlePostIt.x, singlePostIt.y, singlePostIt.text, id:singlePostIt.id)
//   })
// }

// function addCreateNewListeners(){
//   $('#board').click(function(event){
//     new PostIt(event.offsetX, event.offsetY, "")
//   })
// }

// $(function() {
//   // This code will run when the DOM has finished loading
//   Board.new('#board');
// });