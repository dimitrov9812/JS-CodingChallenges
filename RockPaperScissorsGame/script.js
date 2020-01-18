var pcChoice;
var myChoice;
var loosingMessage = 'You lost!';
var winningMessage = 'You won!'; 
var draw = 'Draw!';
//Chooses a random pick for the computer
function ComputerChoice(){
    var randomNumber =Math.floor((Math.random() * 3) + 1);
    console.log(randomNumber);
    switch(randomNumber){
        case 1:
            document.getElementById('fx-box').remove();
            var image = document.createElement('img');
            var source = "images/rock.jpg";
            image.setAttribute('id','image4');
            image.setAttribute('src',source);
            document.getElementById('computerChoice').appendChild(image);
            pcChoice = 'rock';
        break;
        case 2:
            document.getElementById('fx-box').remove();
            var image = document.createElement('img');
            var source = "images/paper.jpg";
            image.setAttribute('id','image4');
            image.setAttribute('src',source);
            document.getElementById('computerChoice').appendChild(image);
            pcChoice = 'paper';
        break;
        case 3:
            document.getElementById('fx-box').remove();
            var image = document.createElement('img');
            var source = "images/scissors.jpg";
            image.setAttribute('id','image4');
            image.setAttribute('src',source);
            document.getElementById('computerChoice').appendChild(image);
            pcChoice = 'scissors';
        break;
    }

}
//Activates if the player selects the Rock Image
function Rock(){
    var image = document.createElement('img');
    var source = "images/rock.jpg";
    image.setAttribute('id','img');
    image.setAttribute('src',source);
    document.getElementById('ourChoice').appendChild(image);
    ComputerChoice();
    myChoice = 'rock';
    checkWinner(myChoice,pcChoice);
}

//Activates if the player selects the Paper Image
function Paper(){
    var image = document.createElement('img');
    var source = "images/paper.jpg";
    image.setAttribute('id','img');
    image.setAttribute('src',source);
    document.getElementById('ourChoice').appendChild(image);
    ComputerChoice();
    myChoice = 'paper';
    checkWinner(myChoice,pcChoice);
}

//Activates if the player selects the Scissors Image
function Scissors(){
    var image = document.createElement('img');
    var source = "images/scissors.jpg";
    image.setAttribute('id','img');
    image.setAttribute('src',source);
    document.getElementById('ourChoice').appendChild(image);
    ComputerChoice();
    myChoice = 'scissors';
    checkWinner(myChoice,pcChoice);
}
//Print the outcome of the game
function print(message){
    var textArea = document.createElement('h2');
    textArea.setAttribute('id','result');
    textArea.innerHTML = message;
    var resButton = document.createElement('button');
    resButton.setAttribute('class','btn btn-danger');
    resButton.setAttribute('onclick','restart()');
    resButton.innerHTML = 'Restart';
    document.getElementById('CombatResult').appendChild(textArea);
    document.getElementById('CombatResult').appendChild(resButton);
    
}
function restart(){
    location.reload();
}
function checkWinner(you,pc){
    switch(you){
        case'rock':
            if(pc == 'rock'){
                print(draw.fontcolor('blue'));
            }
            else if(pc == 'paper'){
                print(loosingMessage);
            }
            else{
                print(winningMessage.fontcolor('green'));
            }
        break;
        case'paper':
            if(pc == 'rock'){
                print(winningMessage.fontcolor('green'));
            }
            else if(pc == 'paper'){
                print(draw.fontcolor('blue'));
            }
            else{
                print(loosingMessage);
            }
        break;
        case'scissors':
            if(pc == 'rock'){
                print(loosingMessage);
            }
            else if(pc == 'paper'){
                print(winningMessage.fontcolor('green'));
            }
            else{
                print(draw.fontcolor('blue'));
            }
        break;
    }
}