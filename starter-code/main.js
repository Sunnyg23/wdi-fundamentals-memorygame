
//console.log("JS file is connected to HTML! Woo!")

//var  cardOne = "queen";
//var  cardTwo = "queen";
//var  cardThree = "king";
//var  cardFour = "king";


//if (cardOne === cardTwo){
     // alert("Match Found!")
//}else if (cardThree === cardFour){
	 // alert("Match Found")
//}else{
      //alert("Sorry,try again!.");
//}
// find the board and set it to a variable
// so that we can add cards to it

var board = document.getElementById('game-board');


function createBoard() {

  for (var i=0; i<cards.length; i++) {

    
    var cardElement = document.createElement('div');

   
    cardElement.className = 'card';

  
    board.appendChild(cardElement);
  }

}

