
let cardBack = '🂠';
let cardArray = [spadesAce = {face: '🂡', ace: 'yes', hidden: false},
spadesTwo = {face: '🂢', number: 2, hidden: false},
spadesThree = {face: '🂣', number: 3, hidden: false},
spadesFour = {face: '🂤', number: 4, hidden: false},
spadesFive = {face: '🂥', number: 5, hidden: false},
spadesSix = {face: '🂦', number: 6, hidden: false},
spadesSeven = {face: '🂧', number: 7, hidden: false},
spadesEight = {face: '🂨', number: 8, hidden: false},
spadesNine = {face: '🂩', number: 9, hidden: false},
spadesTen = {face: '🂪', number: 10, hidden: false},
spadesJack = {face: '🂫', number: 10, hidden: false},
spadesKnight = {face: '🂬', number: 10, hidden: false},
spadesQueen = {face: '🂭', number: 10, hidden: false},
spadesKing = {face: '🂮', number: 10, hidden: false},
heartsAce = {face: '🂱', ace: 'yes', hidden: false},
heartsTwo = {face: '🂲', number: 2, hidden: false},
heartsThree = {face: '🂳', number: 3, hidden: false},
heartsFour = {face: '🂴', number: 4, hidden: false},
heartsFive = {face: '🂵', number: 5, hidden: false},
heartsSix = {face: '🂶', number: 6, hidden: false},
heartsSeven = {face: '🂷', number: 7, hidden: false},
heartsEight = {face: '🂸', number: 8, hidden: false},
heartsNine = {face: '🂹', number: 9, hidden: false},
heartsTen = {face: '🂺', number: 10, hidden: false},
heartsJack = {face: '🂻', number: 10, hidden: false},
heartsKnight = {face: '🂼', number: 10, hidden: false},
heartsQueen = {face: '🂽', number: 10, hidden: false},
heartsKing = {face: '🂾', number: 10, hidden: false},
diamondsAce = {face: '🃁', ace: 'yes', hidden: false},
diamondsTwo = {face: '🃂', number: 2, hidden: false},
diamondsThree = {face: '🃃', number: 3, hidden: false},
diamondsFour = {face: '🃄', number: 4, hidden: false},
diamondsFive = {face: '🃅', number: 5, hidden: false},
diamondsSix = {face: '🃆', number: 6, hidden: false},
diamondsSeven = {face: '🃇', number: 7, hidden: false},
diamondsEight = {face: '🃈', number: 8, hidden: false},
diamondsNine = {face: '🃉', number: 9, hidden: false},
diamondsTen = {face: '🃊', number: 10, hidden: false},
diamondsJack = {face: '🃋', number: 10, hidden: false},
diamondsKnight = {face: '🃌', number: 10, hidden: false},
diamondsQueen = {face: '🃍', number: 10, hidden: false},
diamondsKing = {face: '🃎', number: 10, hidden: false},
clubsAce = {face: '🃑', ace: 'yes', hidden: false},
clubsTwo = {face: '🃒', number: 2, hidden: false},
clubsThree = {face: '🃓', number: 3, hidden: false},
clubsFour = {face: '🃔', number: 4, hidden: false},
clubsFive = {face: '🃕', number: 5, hidden: false},
clubsSix = {face: '🃖', number: 6, hidden: false},
clubsSeven = {face: '🃗', number: 7, hidden: false},
clubsEight = {face: '🃘', number: 8, hidden: false},
clubsNine = {face: '🃙', number: 9, hidden: false},
clubsTen = {face: '🃚', number: 10, hidden: false},
clubsJack = {face: '🃛', number: 10, hidden: false},
clubsKnight = {face: '🃜', number: 10, hidden: false},
clubsQueen = {face: '🃝', number: 10, hidden: false},
clubsKing = {face: '🃞', number: 10, hidden: false}];

let dealersHand = [];
let playersHand = [];
let playersNumber = 0;
let dealersNumber = 0;

let playersMoney = 500;

/*
Orders of operation loop for functions:
    1: start() at the beginning; draws 2 cards for player and dealer each, the dealer's cards are hidden. It stops for players 
    turn; letting them choosing either...
        a: hit(), which will draw a card, until they either win, lose or choose...
        b: stand(), which will end the players turn, reveal the dealer's cards, and have the dealer attempt to beat the player.
    2: once a winner is chosen or a tie is met, end() is called to give the pot to the winner. The player can choose from there 
    to start() again with their new money or reset().

Outside of this loop, there are:
    . grade(), used to calculate and return their score.
    . judge(), used to compare scores and determine a winner or loser.
    . draw(), used to draw a card from the cardArray object array.
    . update(), used to update elements by using DOM.
*/

start();

/*
Execute at the start of the game or after a new round. Draws two hidden cards for the dealer's hand and two cards for the player's hand.
*/
function start(){
    draw(dealersHand, true);
    draw(dealersHand, true);

    draw(playersHand);
    draw(playersHand);
    judge();
    update();
}

/*
Draw a card to playersHand.
*/
function hit(){
    draw(playersHand);
    judge();
    update();
}

/*
Ends the round and let the dealer act.
*/
function stand(){
    play();
    update();
}

/*
Ends the game, locking certain buttons and making other ones available.
*/
function end(condition){

    // Make 'hit' and 'stand unclickable.

    // Make new game and restart available.

    // Update money from pot.

    // Inform who won.

}

/*
Reset the numbers and restack the cardArray with cards from playersHand and dealersHand.
*/
function reset(){



}

/* ============================================================================================================= */

/*
Determines if there's a winner or loser. Checks if person's hand has a ace, if so it'll determine whether they countas a 1 or 11.
*/
function grade(person){
    let score;

    for(i = 0; i < person.length; i++){
        score += person[i].number;
    }

    let aceArray = person.filter(person => person.ace);

    for(i = 0; i < aceArray.length; i++){
        if(score < 11){
            score += 11;
        }else{
            score += 1;
        }
    }

    return score;
}

/*
Set and determine the win condition for who won.
*/
function judge(){
    playersNumber = grade(playersHand);
    dealersNumber = grade(dealersHand);

    if(playersNumber === 21 && dealersNumber === 21){
        end('tie');
    }else if(playersNumber === 21 || dealersNumber > 21){
        end('player');
    }else if(dealersNumber === 21 || playersNumber > 21){
        end('dealer');
    }
}

/*
Draw a randomly chosen card object from cardArray, taking it and adding it to the person's hand.
*/
function draw(person, hidden){
    let randomDraw = Math.floor(Math.random() * cardArray.length);

    if(hidden){
        cardArray[randomDraw].hidden = true;
    }

    person.push(cardArray[randomDraw]);

    cardArray.splice(randomDraw, 1);
}

/*
Update HTML with new data for money and cards. Uses DOM to update the money to the current value, and create two loops to populate two temporary 
arrays that is used to update the drawn cards for player and dealer.
*/
function update(){
    const moneyElement = document.getElementById('money');
    moneyElement.textContent ='$' + playersMoney;

    let playersCards = '';

    for(i = 0; i < playersHand.length; i++){
        playersCards += playersHand[i].face;
    }

    const playersHandElement = document.getElementById('playersHand');
    playersHandElement.textContent = playersCards;

    let dealersCards = '';

    for(i = 0; i < dealersHand.length; i++){
        dealersCards += dealersHand[i].face;
    }

    const dealersHandElement = document.getElementById('dealersHand');
    dealersHandElement.textContent = dealersCards;
}
