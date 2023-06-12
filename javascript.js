
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
Orders of operation for functions:
    start() at the beginning; draws 2 cards for player and dealer. update() to change HTML to show cards.
        analyze() to see if anyone got a 21 immediately. update() to display winner prompt if so.
    stops for players turn; choosing either...
        hit() will draw() a card, then execute analyze() to see if they went to or over 21. update() to show new card and to display winner prompt if number is 21.
        or stand(), which ends their turn, then play() is executed to draw() cards for dealer and see if they meet the player's, get to or go over 21. update() to show cards.
    once winner is picked, reset() to reset decks and hands, and refund, withdraw or add in money. update() to show current money.
*/

start();

/*
Execute at the start of the round, drawing two cards for the dealer's hand and player's hand
*/
function start(){
    draw(dealersHand);
    draw(dealersHand);

    draw(playersHand);
    draw(playersHand);
    update();
}

/*
Determines if there's a winner or loser. Checks if person's hand has a ace, if so it'll determine whether they countas a 1 or 11.
*/
function analyze(person){
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
    update();
}

/*
Ends the round and let the dealer act.
*/
function stand(){
    play();
    update();
}

/*  FINISHED
Draw a randomly chosen card object from cardArray, taking it and adding it to the person's hand.
*/
function draw(person, hidden){
    let randomDraw = Math.floor(Math.random() * cardArray.length);

    if(hidden){
        cardArray[randomDraw].hidden = true;
    }

    console.log(cardArray[randomDraw]);

    person.push(cardArray[randomDraw]);

    cardArray.splice(randomDraw, 1);
}

/*  BUGGED
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


/*
Reset the numbers and restack the cardArray with cards from playersHand and dealersHand.
*/
function reset(){






}


