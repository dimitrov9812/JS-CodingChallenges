let cellArray1 = [];
let cellArray2 = [];
let cellArray3 = [];
let cellArray4 = [];
let hasCkicked = false;
let turn = 1;
let playersCreated = 0;
let p1name = '';
let p2name = '';
let p3name = '';
let p4name = '';
document.querySelector('#start').addEventListener('click',startGame);
document.querySelector('#button-1').addEventListener('click',checkChallenge);
document.querySelector('#button-2').addEventListener('click',checkSafe);
document.querySelector('#button-3').addEventListener('click',checkHook);
document.querySelector('#button-4').addEventListener('click',checkRisky);
document.querySelector('#placePlayers').addEventListener('click',placePlayers);

var player1 = document.createElement('img');
    player1.src = '//assets/images/mario.png'
    player1.setAttribute('id','player1')

var player2 = document.createElement('img');
    player2.src = '//assets/images/mario.png'
    player2.setAttribute('id','player2')
    
var player3 = document.createElement('img');
    player3.src = '//assets/images/mario.png'
    player3.setAttribute('id','player3')

var player4 = document.createElement('img');
    player4.src = '//assets/images/mario.png'
    player4.setAttribute('id','player4')


function startGame(){
    
    document.getElementById('start').remove();
    var numOfPlayers = document.getElementById('select-players').value;
    switch(numOfPlayers){
        case'2':
        document.getElementById('player-1').style.visibility ='visible';
        document.getElementById('player-2').style.visibility ='visible';
        drawMap(1); 
        drawMap(2);
        playersCreated=2
        break;
        case'3':
        document.getElementById('player-1').style.visibility ='visible';
        document.getElementById('player-2').style.visibility ='visible';
        document.getElementById('player-3').style.visibility ='visible';
        drawMap(1);
        drawMap(2);
        drawMap(3);
        playersCreated=3
        break;
        case'4':
        document.getElementById('player-1').style.visibility ='visible';
        document.getElementById('player-2').style.visibility ='visible';
        document.getElementById('player-3').style.visibility ='visible';
        document.getElementById('player-4').style.visibility ='visible';
        drawMap(1);
        drawMap(2);
        drawMap(3);
        drawMap(4);
        playersCreated=4
        break;
    }
    document.getElementById('select-players').remove();
    var logo = document.createElement('img');
    logo.setAttribute('id','logo');
    logo.setAttribute('src','assets/images/spiderman.jpg');
    document.getElementById('choose-players').appendChild(logo);
    turn=1;

}

function drawMap(num){
    for(i=0;i<25;i++){
        var cell = document.createElement('div')
        cell.setAttribute('id','cell'+num+'-'+i);
        cell.setAttribute('class','cells');
        document.getElementById('map-tile-space-player-'+num).appendChild(cell);
        document.getElementById('map-tile-space-player-'+num).style.backgroundImage = 'url(assets/images/map.jpg)';
        document.getElementById('map-tile-space-player-'+num).style.backgroundSize = "300px 100px";
        switch(num){
            case 1:
                cellArray1+=cell;
                break;
            case 2:
                cellArray2+=cell;
                break;
            case 3:
                cellArray3+=cell;
                break;
            case 4:
                cellArray4+=cell;
                break;
        }
    }
}   
function placePlayers(){
    getPlayerNames();
    switch(playersCreated){
        case 2:
            document.getElementById('cell1-0').appendChild(player1);
            document.getElementById('cell2-0').appendChild(player2);
        break;
        case 3:
            document.getElementById('cell1-0').appendChild(player1);
            document.getElementById('cell2-0').appendChild(player2);
            document.getElementById('cell3-0').appendChild(player3);
        break;
        case 4:
            document.getElementById('cell1-0').appendChild(player1);
            document.getElementById('cell2-0').appendChild(player2);
            document.getElementById('cell3-0').appendChild(player3);
            document.getElementById('cell4-0').appendChild(player4);
        break;
    }

    document.getElementById('placePlayers').remove();
}
function getPlayerNames(){
    document.querySelector("#input-file-1").remove();
    document.querySelector("#input-file-2").remove();
    document.querySelector("#input-file-3").remove();
    document.querySelector("#input-file-4").remove();

    switch(playersCreated){
        case 2:
            var player1name = document.getElementById('player1-name').value;
            var player2name = document.getElementById('player2-name').value;
            p1name = player1name;
            p2name = player2name;
            document.getElementById('player1-name').remove();
            document.getElementById('player2-name').remove();
            document.getElementById('player-1-show-name').innerHTML = player1name;
            document.getElementById('player-2-show-name').innerHTML = player2name;
        break;
        case 3:
            var player1name = document.getElementById('player1-name').value;
            var player2name = document.getElementById('player2-name').value;
            var player3name = document.getElementById('player3-name').value;
            p1name = player1name;
            p2name = player2name;
            p3name = player3name;
            document.getElementById('player1-name').remove();
            document.getElementById('player2-name').remove();
            document.getElementById('player3-name').remove();
            document.getElementById('player-1-show-name').innerHTML = player1name;
            document.getElementById('player-2-show-name').innerHTML = player2name;
            document.getElementById('player-3-show-name').innerHTML = player3name;
        break;
        case 4:
            var player1name = document.getElementById('player1-name').value;
            var player2name = document.getElementById('player2-name').value;
            var player3name = document.getElementById('player3-name').value;
            var player4name = document.getElementById('player4-name').value;
            p1name = player1name;
            p2name = player2name;
            p3name = player3name;
            p4name = player4name;
            document.getElementById('player1-name').remove();
            document.getElementById('player2-name').remove();
            document.getElementById('player3-name').remove();
            document.getElementById('player4-name').remove();
            document.getElementById('player-1-show-name').innerHTML = player1name;
            document.getElementById('player-2-show-name').innerHTML = player2name;
            document.getElementById('player-3-show-name').innerHTML = player3name;
            document.getElementById('player-4-show-name').innerHTML = player4name;
        break;
    }
    
}
function checkSafe(){
    switch(playersCreated){
        case 2:
            switch(turn){
                case 1:
                    safe(1,player1);
                    turn = 2;
                    showTurn();
                break;
                case 2:
                    safe(2,player2);
                    turn= 1;
                    showTurn();
                break;
            }
        break;
        case 3:
            switch(turn){
                case 1:
                    safe(1,player1);
                    turn = 2;
                    showTurn();
                break;
                case 2:
                    safe(2,player2);
                    turn= 3;
                    showTurn();
                break;
                case 3:
                    safe(3,player3);
                    turn= 1;
                    showTurn();
                break;
            }
        break;
        case 4:
            switch(turn){
                case 1:
                    safe(1,player1);
                    turn = 2;
                    showTurn();
                break;
                case 2:
                    safe(2,player2);
                    turn= 3;
                    showTurn();
                break;
                case 3:
                    safe(3,player3);
                    turn= 4;
                    showTurn();
                break;
                case 4:
                    safe(4,player4);
                    turn= 1;
                    showTurn();
                break;
            }
        break;
    }                  
}
function checkChallenge(){
    switch(playersCreated){
        case 2:
            switch(turn){
                case 1:
                    moveChallenge(1)
                    turn = 2;
                    showTurn();
                break;
                case 2:
                    moveChallenge(2)
                    turn= 1;
                    showTurn();
                break;
            }
        break;
        case 3:
            switch(turn){
                case 1:
                    moveChallenge(1)
                    turn = 2;
                    showTurn();
                break;
                case 2:
                    moveChallenge(2)
                    turn= 3;
                    showTurn();
                break;
                case 3:
                    moveChallenge(3)
                    turn= 1;
                    showTurn();
                break;
            }
        break;
        case 4:
            switch(turn){
                case 1:
                    moveChallenge(1)
                    turn = 2;
                    showTurn();
                break;
                case 2:
                    moveChallenge(2)
                    turn= 3;
                    showTurn();
                break;
                case 3:
                    moveChallenge(3)
                    turn= 4;
                    showTurn();
                break;
                case 4:
                    moveChallenge(4)
                    turn= 1;
                    showTurn();
                break;
            }
        break;
    }
}
function checkHook(){
    switch(playersCreated){
        case 2:
            switch(turn){
                case 1:
                    hook(1)
                    turn = 2;
                    showTurn();
                break;
                case 2:
                    hook(2)
                    turn= 1;
                    showTurn();
                break;
            }
        break;
        case 3:
            switch(turn){
                case 1:
                    hook(1)
                    turn = 2;
                    showTurn();
                break;
                case 2:
                    hook(2)
                    turn= 3;
                    showTurn();
                break;
                case 3:
                    hook(3)
                    turn= 1;
                    showTurn();
                break;
            }
        break;
        case 4:
            switch(turn){
                case 1:
                    hook(1)
                    turn = 2;
                    showTurn();
                break;
                case 2:
                    hook(2)
                    turn= 3;
                    showTurn();
                break;
                case 3:
                    hook(3)
                    turn= 4;
                    showTurn();
                break;  
                case 4:
                    hook(4)
                    turn= 1;
                    showTurn();
            break;
            }
        break;
    }
}
function checkRisky(){
    switch(playersCreated){
        case 2:
            switch(turn){
                case 1:
                    risky(1,player1);
                    turn = 2;
                    showTurn();
                break;
                case 2:
                    risky(2,player2);
                    turn= 1;
                    showTurn();
                break;
            }
        break;
        case 3:
            switch(turn){
                case 1:
                    risky(1,player1);
                    turn = 2;
                    showTurn();
                break;
                case 2:
                    risky(2,player2);
                    turn= 3;
                    showTurn();
                break;
                case 3:
                    risky(3,player3);
                    turn= 1;
                    showTurn();
                break;
            }
        break;
        case 4:
            switch(turn){
                case 1:
                    risky(1,player1);
                    turn = 2;
                    showTurn();
                break;
                case 2:
                    risky(2,player2);
                    turn= 3;
                    showTurn();
                break;
                case 3:
                    risky(3,player3);
                    turn= 4;
                    showTurn();
                break;
                case 4:
                    risky(4,player4);
                    turn= 1;
                    showTurn();
                break;
            }
        break;
    }
                        
}
function risky(turn,player){
    var x =document.getElementById('player'+turn).parentElement.id;
            console.log('parent element id = ' +x);
            var numbersInId = x.substring(x.indexOf('-') + 1)
            console.log('everything after the dash is: '+numbersInId)
            var currentNumber = numbersInId;
            var rand = randomNumber();
            console.log('Final random nuber is: '+rand);
            currentNumber= +currentNumber + +rand;
            var nextNum = currentNumber;
            if(nextNum < 0){
                nextNum = 0;
            }
            console.log('turn:'+turn);
            console.log('your player will now go in cell1-'+nextNum);
            
            document.getElementById('cell'+turn+'-'+nextNum).appendChild(player);
}
function randomNumber(){
    var num = Math.floor(Math.random() * 4)
    if(num == 0){
        num = 1;
    }
    console.log('the random number you rolled is:' + num)
    var multiplier = Math.floor(Math.random() * 3)
    console.log('The multiplier is:' + multiplier)
    if(multiplier == 1){
        return num;
    }
    else if(multiplier == 2)
    {
        return num = +num*(-1);
    }
    else if(multiplier == 0){
        return num = 0;
    }
}
function safe(turn,player){
    
    var x =document.getElementById('player'+turn).parentElement.id;
            console.log('parent element id = ' +x);
            var numbersInId = x.substring(x.indexOf('-') + 1)
            console.log('everything after the dash is: '+numbersInId)
            var currentNumber = numbersInId;
            currentNumber++;
            var nextNum = currentNumber;
            console.log('turn:'+turn);
            console.log('your player will now go in cell1-'+nextNum);
            
            document.getElementById('cell'+turn+'-'+nextNum).appendChild(player);
}
function moveChallenge(turn){
    showTurn();
    console.log(playersCreated);
    console.log(turn);
    var currentPlayer = getPlayer();
    console.log('current player is:'+currentPlayer);
    var x = prompt('Do 5 pushups');
    if(x==='yes'){
        for(i=0;i<4;i++){
            safe(turn,currentPlayer);
        }
        turn++;
    }
    else{
        moveBackWithOne(currentPlayer);
        console.log('Your player moved back')
        turn++;
    }
}
function hook(turn){
    var selectedPlayer = prompt('Which player do you want to move 2 tiles back!');
    
        switch(selectedPlayer){
            case p1name:
                var x =document.getElementById('player1').parentElement.id;
                console.log('parent element id =' + x);
                var numbersInId = x.substring(x.indexOf('-') + 1)
                console.log('everything after the dash is: '+numbersInId)
                var currentNumber = numbersInId;
                currentNumber-=2;
                if(currentNumber < 0){
                    currentNumber = 0;
                }
                var nextNum = currentNumber;
                console.log('turn:'+turn);
                console.log('your player will now go in cell1-'+nextNum);
                document.getElementById('cell'+1+'-'+nextNum).appendChild(player1);
                break;
            case p2name:
                var x =document.getElementById('player2').parentElement.id;
                console.log('parent element id =' + x);
                var numbersInId = x.substring(x.indexOf('-') + 1)
                console.log('everything after the dash is: '+numbersInId)
                var currentNumber = numbersInId;
                currentNumber-=2;
                if(currentNumber < 0){
                    currentNumber = 0;
                }
                var nextNum = currentNumber;
                console.log('turn:'+turn);
                console.log('your player will now go in cell1-'+nextNum);
                document.getElementById('cell'+2+'-'+nextNum).appendChild(player2);
                break;
            
            case p3name:
                var x =document.getElementById('player3').parentElement.id;
                console.log('parent element id =' + x);
                var numbersInId = x.substring(x.indexOf('-') + 1)
                console.log('everything after the dash is: '+numbersInId)
                var currentNumber = numbersInId;
                currentNumber-=2;
                if(currentNumber < 0){
                    currentNumber = 0;
                }
                var nextNum = currentNumber;
                console.log('turn:'+turn);
                console.log('your player will now go in cell1-'+nextNum);
                document.getElementById('cell'+3+'-'+nextNum).appendChild(player3);
                break;
            case p4name:
                var x =document.getElementById('player4').parentElement.id;
                console.log('parent element id =' + x);
                var numbersInId = x.substring(x.indexOf('-') + 1)
                console.log('everything after the dash is: '+numbersInId)
                var currentNumber = numbersInId;
                currentNumber-=2;
                if(currentNumber < 0){
                    currentNumber = 0;
                }
                var nextNum = currentNumber;
                console.log('turn:'+turn);
                console.log('your player will now go in cell1-'+nextNum);
                document.getElementById('cell'+4+'-'+nextNum).appendChild(player4);
                break;
        }
            
}

function specialPower(){
}

function getPlayer(){
    switch(turn){
        case 1:
            return player1;
            break;
            case 2:
            return player2;
            break;
            case 3:
            return player3
            break;
            case 4:
            return player4;
            break;
    }
}
function moveBackWithOne(player){
            var x =document.getElementById('player'+turn).parentElement.id;
            console.log('parent element id =' + x);
            var numbersInId = x.substring(x.indexOf('-') + 1)
            console.log('everything after the dash is: '+numbersInId)
            var currentNumber = numbersInId;
            currentNumber--;
            if(currentNumber < 0){
                currentNumber = 0;
            }
            var nextNum = currentNumber;
            console.log('turn:'+turn);
            console.log('your player will now go in cell1-'+nextNum);
            
            document.getElementById('cell'+turn+'-'+nextNum).appendChild(player);
}
console.log(cellArray1)
console.log(cellArray2)
console.log(cellArray3)
console.log(cellArray4)

function readURL1(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#inside-image-1')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}
function readURL2(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#inside-image-2')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}
function readURL3(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#inside-image-3')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}
function readURL4(input) {
    if (input.files && input.files[0]) {
        var reader = new FileReader();

        reader.onload = function (e) {
            $('#inside-image-4')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.files[0]);
    }
}

function showTurn(){
    document.getElementById('current-turn').innerHTML = 'TURN: '+turn;
}