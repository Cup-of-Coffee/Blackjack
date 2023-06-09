
let cardBack = '🂠';
let cardArray = [spadesAce = {face: '🂡', number: 1, numberAce: 11},
spadesTwo = {face: '🂢', number: 2},
spadesThree = {face: '🂣', number: 3},
spadesFour = {face: '🂤', number: 4},
spadesFive = {face: '🂥', number: 5},
spadesSix = {face: '🂦', number: 6},
spadesSeven = {face: '🂧', number: 7},
spadesEight = {face: '🂨', number: 8},
spadesNine = {face: '🂩', number: 9},
spadesTen = {face: '🂪', number: 10},
spadesJack = {face: '🂫', number: 10},
spadesKnight = {face: '🂬', number: 10},
spadesQueen = {face: '🂭', number: 10},
spadesKing = {face: '🂮', number: 10},
heartsAce = {face: '🂱', number: 1, numberAce: 11},
heartsTwo = {face: '🂲', number: 2},
heartsThree = {face: '🂳', number: 3},
heartsFour = {face: '🂴', number: 4},
heartsFive = {face: '🂵', number: 5},
heartsSix = {face: '🂶', number: 6},
heartsSeven = {face: '🂷', number: 7},
heartsEight = {face: '🂸', number: 8},
heartsNine = {face: '🂹', number: 9},
heartsTen = {face: '🂺', number: 10},
heartsJack = {face: '🂻', number: 10},
heartsKnight = {face: '🂼', number: 10},
heartsQueen = {face: '🂽', number: 10},
heartsKing = {face: '🂾', number: 10},
diamondsAce = {face: '🃁', number: 1, numberAce: 11},
diamondsTwo = {face: '🃂', number: 2},
diamondsThree = {face: '🃃', number: 3},
diamondsFour = {face: '🃄', number: 4},
diamondsFive = {face: '🃅', number: 5},
diamondsSix = {face: '🃆', number: 6},
diamondsSeven = {face: '🃇', number: 7},
diamondsEight = {face: '🃈', number: 8},
diamondsNine = {face: '🃉', number: 9},
diamondsTen = {face: '🃊', number: 10},
diamondsJack = {face: '🃋', number: 10},
diamondsKnight = {face: '🃌', number: 10},
diamondsQueen = {face: '🃍', number: 10},
diamondsKing = {face: '🃎', number: 10},
clubsAce = {face: '🃑', number: 1, numberAce: 11},
clubsTwo = {face: '🃒', number: 2},
clubsThree = {face: '🃓', number: 3},
clubsFour = {face: '🃔', number: 4},
clubsFive = {face: '🃕', number: 5},
clubsSix = {face: '🃖', number: 6},
clubsSeven = {face: '🃗', number: 7},
clubsEight = {face: '🃘', number: 8},
clubsNine = {face: '🃙', number: 9},
clubsTen = {face: '🃚', number: 10},
clubsJack = {face: '🃛', number: 10},
clubsKnight = {face: '🃜', number: 10},
clubsQueen = {face: '🃝', number: 10},
clubsKing = {face: '🃞', number: 10}];

let dealersHand = [];
let playersHand = [];
let playersNumber = 0;
let dealersNumber = 0;

let playersMoney = 500;

/*
Orders of operation for functions:
    start() at the beginning; draws 2 cards for player and dealer. update() to change HTML to show cards.
        analyze() to see if anyone got a 21 immediately. update() to display winner prompt if so.
    stops for players turn; choosing either...
        hit() will draw() a card, then execute analyze() to see if they went to or over 21. update() to show new card and to display winner prompt if number is 21.
        or stand(), which ends their turn, then play() is executed to draw() cards for dealer and see if they meet the player's, get to or go over 21. update() to show cards.
    once winner is picked, reset() to reset decks and hands, and refund, withdraw or add in money. update() to show current money.
*/

/*
Execute at the start of the round, drawing two cards for the dealer's hand and player's hand
*/
function start(){
    draw(dealersHand);
    draw(dealersHand);

    draw(playersHand);
    draw(playersHand);
}

/*
Execute at the start of a round, after hitting or standing. Determines if there's a winner or loser, and ends the round.
*/
function analyze(){

}

/*
Calculate player's number, comparing to dealer's number, and draw cards to the dealer's hand until they win or lose.
*/
function play(){



    draw(dealersHand);


}

/*
Draw a card to playersHand.
*/
function hit(){

    draw(playersHand);



}

/*
Ends the round and let the dealer act.
*/
function stand(){

    play();
}

/*
Draw a card object from cardArray, adding it to the person's hand.
*/
function draw(person){
    let randomDraw = Math.floor(Math.random() * cardArray.length);

    person.push(cardArray[randomDraw]);

    cardArray.splice(randomDraw, 1);
}

/*
Update HTML with new data for money and cards.
*/
function update(){
    const moneyElement = document.getElementById('money');
    moneyElement.innerText = '$' + playersMoney;

    for(i = 0; i < playersHand.length; i++){
        const playersHandElement = document.getElementById('playersHand');
        playersHandElement.textContent += playersHand[i].face;
    }

    for(i = 0; i < dealersHand.length; i++){
        const dealersHandElement = document.getElementById('dealersHand');
        dealersHandElement.textContent += dealersHand[i].face;
    }
}


/*
Reset the numbers and restack the cardArray with cards from playersHand and dealersHand.
*/
function reset(){






}


