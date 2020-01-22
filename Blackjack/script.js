let blackjackGame= {
    'you': {'scoreSpan':'#yourResult', 'div':'.yourSide', 'score':0},
    'dealer': {'scoreSpan':'#pcResult', 'div':'.pcSide', 'score':0},
    'cards': ['2','3','4','5','6','7','8','9','10','A','Q','J','K'],
    'cardsMap': {'2':2,'3':3,'4':4,'5':5,'6':6,'7':7,'8':8,'9':9,'10':10,'A':[1,11],'Q':10,'J':10,'K':10},
    'wins':0,
    'losses':0,
    'draws':0,
    'isStand': false,
    'turnsOver': false,
}

const YOU = blackjackGame['you']
const DEALER = blackjackGame['dealer'];
const hitSound = new Audio('sounds/swish.m4a');
const winSound = new Audio('sounds/cash.mp3');
const looseSound = new Audio('sounds/aww.mp3');

//give all the buttons a function to launch
document.querySelector('#btn-hit').addEventListener('click',blackjackHit);
document.querySelector('#btn-stand').addEventListener('click',dealerLogic);
document.querySelector('#btn-deal').addEventListener('click',blackjackDeal);

//on press return a random card
function blackjackHit(){
    if(blackjackGame['isStand'] === false){
        let card = randomCard();
        showCard(card,YOU);
        updateScore(card,YOU);
        showScore(YOU);
    }
}

function blackjackDeal(){
    if(blackjackGame['turnsOver'] === true){
        //showResult(computeWinner());
        blackjackGame['isStand'] =false;
        let yourImages = document.querySelector(YOU.div).querySelectorAll('img');
        let dealerImages = document.querySelector(DEALER.div).querySelectorAll('img');

        for (let i = 0; i < yourImages.length; i++) {
            yourImages[i].remove();
        }
        for (let i = 0; i < dealerImages.length; i++) {
            dealerImages[i].remove();
        }

        clearScore();

        document.querySelector('#header-text').textContent ="Let's play";
        document.querySelector('#header-text').style.color ="red";
        blackjackGame['turnsOver'] = false;
    }
}

function clearScore(){
    YOU['score'] =0;
    DEALER['score'] = 0;
    document.querySelector('#yourResult').textContent = 0;
    document.querySelector('#yourResult').style.color = 'white';
    document.querySelector('#pcResult').textContent =  0;
    document.querySelector('#pcResult').style.color = 'white';
}
//call a card on the field
function showCard(card, activePlayer){
    if(activePlayer['score']<=21){
        let cardImage  = document.createElement('img');
        cardImage.setAttribute('height','150px');
        cardImage.setAttribute('width','100px');
        cardImage.setAttribute('hspace','10');
        cardImage.src = 'images/'+card+'.png';
        document.querySelector(activePlayer.div).appendChild(cardImage);
        hitSound.play();
    }
} 

function randomCard(){
    let randomIndex = Math.floor(Math.random()*13);
    return blackjackGame['cards'][randomIndex];
}

function updateScore(card,activePlayer){
    if(card == 'A'){
        if(activePlayer['score'] += blackjackGame['cardsMap'][card][1] <=21){
            activePlayer['score'] += blackjackGame['cardsMap'][card][1];
        }
        else{
            activePlayer['score'] += blackjackGame['cardsMap'][card][0];
        }
    }
    else{
        activePlayer['score'] += blackjackGame['cardsMap'][card];
    }
}

function showScore(activePlayer){
    if(activePlayer['score']>21){
        document.querySelector(activePlayer['scoreSpan']).textContent ='BUST!';
        document.querySelector(activePlayer['scoreSpan']).style.color = 'red';
    }
    else{
        document.querySelector(activePlayer['scoreSpan']).textContent = activePlayer['score'];
    }
}

function sleep(ms){
    return new Promise(resolve => setTimeout(resolve,ms));
    
}

async function dealerLogic(){
    blackjackGame['isStand'] = true;
    while (DEALER['score'] < 16 && blackjackGame['isStand'] === true){
        let card = randomCard();
        showCard(card,DEALER);
        updateScore(card,DEALER);
        showScore(DEALER); 
        await sleep(1000);
    }

    blackjackGame['turnsOver'] = true;
    let winner = computeWinner();
    showResult(winner);
    console.log(blackjackGame['turnsOver']);       
}

//compute winner and return who just won
//update the win loss and losses
function computeWinner(){
    let winner;
    if(YOU['score'] <= 21){
        if(YOU['score'] > DEALER['score'] || DEALER['score'] > 21){
            blackjackGame['wins']++;
            winner = YOU;
        } else if(YOU['score']<DEALER['score']){ 
            blackjackGame['losses']++;
            winner = DEALER;
        } else if(YOU['score'] === DEALER['score']){
            blackjackGame['draws']++;
        }
    }else if (YOU['score'] >21 &&  DEALER['score']<=21){
        blackjackGame['losses']++;
        winner = DEALER;
    }else if(YOU['score'] >21 &&  DEALER['score']>21){
        blackjackGame['draws']++;
    }
    console.log(blackjackGame);
    return winner;
}

function showResult(winner){
    if(blackjackGame['turnsOver'] === true){
        let message, messageColor;

        if(winner === YOU){
            document.querySelector('#wins').textContent = blackjackGame['wins'];
            message = 'You won!'
            messageColor = 'green';
            winSound.play();
        }
        else if(winner === DEALER){
            document.querySelector('#losses').textContent = blackjackGame['losses'];
            message = 'You lost!'
            messageColor = 'red';
            looseSound.play();
        }
        else{
            document.querySelector('#draws').textContent = blackjackGame['draws'];
            message = 'Draw!';
            messageColor = 'black';
        }
    
        document.querySelector('#header-text').textContent = message;
        document.querySelector('#header-text').style.color = messageColor;
    }
}