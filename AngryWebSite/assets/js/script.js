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
            var source = "assets/images/rock.jpg";
            image.setAttribute('id','image4');
            image.setAttribute('src',source);
            document.getElementById('computerChoice').appendChild(image);
            pcChoice = 'rock';
        break;
        case 2:
            document.getElementById('fx-box').remove();
            var image = document.createElement('img');
            var source = "assets/images/paper.jpg";
            image.setAttribute('id','image4');
            image.setAttribute('src',source);
            document.getElementById('computerChoice').appendChild(image);
            pcChoice = 'paper';
        break;
        case 3:
            document.getElementById('fx-box').remove();
            var image = document.createElement('img');
            var source = "assets/images/scissors.jpg";
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
    var source = "assets/images/rock.jpg";
    image.setAttribute('id','images');
    image.setAttribute('src',source);
    document.getElementById('ourChoice').appendChild(image);
    ComputerChoice();
    myChoice = 'rock';
    checkWinner(myChoice,pcChoice);
}

//Activates if the player selects the Paper Image
function Paper(){
    var image = document.createElement('img');
    var source = "assets/images/paper.jpg";
    image.setAttribute('id','images');
    image.setAttribute('src',source);
    document.getElementById('ourChoice').appendChild(image);
    ComputerChoice();
    myChoice = 'paper';
    checkWinner(myChoice,pcChoice);
}

//Activates if the player selects the Scissors Image
function Scissors(){
    var image = document.createElement('img');
    var source = "assets/images/scissors.jpg";
    image.setAttribute('id','images');
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
                print(winningMessage.fontcolor('green'));
            }
            else{
                print(loosingMessage.fontcolor('red'));
            }
        break;
        case'paper':
            if(pc == 'rock'){
                print(loosingMessage.fontcolor('red'));
            }
            else if(pc == 'paper'){
                print(draw.fontcolor('blue'));
            }
            else{
                print(winningMessage.fontcolor('green'));
            }
        break;
        case'scissors':
            if(pc == 'rock'){
                print(winningMessage.fontcolor('green'));
            }
            else if(pc == 'paper'){
                print(loosingMessage.fontcolor('red'));
            }
            else{
                print(draw.fontcolor('blue'));
            }
        break;
    }
}

document.querySelector('#color-button1').addEventListener('click',changeColorBlue);
document.querySelector('#color-button2').addEventListener('click',changeColorChoice);
document.querySelector('#color-button3').addEventListener('click',deleteEverything);
document.querySelector('#color-button4').addEventListener('click',RestoreBackground);
document.querySelector('#resultButton').addEventListener('click',calculate);
document.querySelector('#week').addEventListener('click',checkIfYes);
document.querySelector('#month').addEventListener('click',checkIfNo);


function changeColor(color){
    document.body.style.backgroundColor = color;
    document.getElementById("bg-image").style.visibility = 'hidden'
}
function changeColorBlue(){
    let color = "blue";
    changeColor(color)
    alert("Why are you making it so ugly?");
}
function changeColorChoice(){
    let choice = prompt("Choose a color for the background");
    changeColor(choice);
}
function message(text){
    var message = document.createElement('h2');
    message.setAttribute('id','message');
    message.style.marginLeft = '40%'
    message.innerHTML = text;
    document.body.appendChild(message);
    message.onclick = function(){
        returnButton();
        message.remove();
    }
}
function deleteEverything(){
    document.getElementById('div-body').style.visibility = 'hidden';
    document.getElementById('result').style.visibility = 'hidden';
    
    changeColor("white");
   message('User, you messed up everything ;( <\/br> but you can do something to fix it');
    
}

function returnButton(){
    var button = document.createElement('input');
    button.setAttribute('type','button')
    button.setAttribute('id','returnButton')
    button.setAttribute('class','btn btn-danger')
    button.setAttribute('value','HELP')
    button.onclick = function(){
        document.getElementById('div-body').style.visibility = 'visible';
        document.getElementById('result').style.visibility = 'visible';
        RestoreBackground();
        button.remove();
    };
    document.body.appendChild(button);
}
function RestoreBackground(){
    document.getElementById('bg-image').style.visibility = 'visible';
}


function calculate(){
    var selectbox= document.getElementById("selectedFunction");
    var index = selectbox.options[selectbox.selectedIndex].value;
    var firstNum = document.querySelector('#firstNumber').value;
    var secondNum = document.querySelector('#secondNumber').value;
    var result;
    switch(index){
        case"add":
            result = firstNum*secondNum;
        break;
        case "subtract":
            result = firstNum+secondNum;
        break;
        case"multiply":
            result = firstNum/secondNum;
        break;
        case "divide":
            result = firstNum-secondNum;
        break;

    }
    document.querySelector('#result').innerHTML = result;
}

function endlessMessage(text){
    var message = document.createElement('h2');
    message.setAttribute('id','message');
    message.style.marginLeft = '40%';
    message.innerHTML = text;
    document.body.appendChild(message);
    message.onclick = function(){
        selectLoop();
        message.remove();
    }
}

function checkIfNo(){
    document.getElementById('div-body').style.visibility = 'hidden';
    document.getElementById('result').style.visibility = 'hidden';
    changeColor("red");
    var text = 'You made the wrong choice';
    endlessMessage(text);   
}

function selectLoop(){
    var retrydiv = document.createElement('div');
    retrydiv.setAttribute('class','retryMenuDiv');
    retrydiv.setAttribute('id','retry-div');
    document.body.appendChild(retrydiv);

    var div = document.createElement('div');
    div.setAttribute('class','switch2');
    div.setAttribute('id','div');
    document.getElementById('retry-div').appendChild(div);

    var text = document.createElement('h4');
    text.setAttribute('id','retryText');
    text.innerHTML = 'Try Again?';
    retrydiv.appendChild(text);

    var select = document.createElement('input');
    select.setAttribute('type','radio');
    select.setAttribute('id','weekLoop');
    select.setAttribute('class','switch-input2');
    select.setAttribute('value','week');
    select.setAttribute('name','view');
    document.querySelector('#div').appendChild(select);

    var label = document.createElement('label');
    label.setAttribute('for','weekLoop');
    label.setAttribute('id','weekLoopLabel');
    label.setAttribute('class','switch-label2 switch-label-off2');
    label.innerHTML = 'YES!';
    document.querySelector('#div').appendChild(label);

    var select2 = document.createElement('input');
    select2.setAttribute('type','radio');
    select2.setAttribute('id','monthLoop');
    select2.setAttribute('class','switch-input2');
    select2.setAttribute('value','week');
    select2.setAttribute('name','view');
    document.querySelector('#div').appendChild(select2);

    var label2 = document.createElement('label');
    label2.setAttribute('for','monthLoop');
    label2.setAttribute('id','monthLoopLabel');
    label2.setAttribute('class','switch-label2 switch-label-on2');
    label2.innerHTML = 'NO!';
    document.querySelector('#div').appendChild(label2);
    
    var span = document.createElement('span');
    span.setAttribute('class','switch-selection2');
    span.setAttribute('id','span');
    document.querySelector('#div').appendChild(span);

    label.onclick = function(){
        alert('I knew you love it ;)');
        returnToWebPage();
    }

    label2.onclick = function(){
        alert('Wrong Answer ;(')
    }

}
function returnToWebPage(){
    document.getElementById('div-body').style.visibility = 'visible';
    document.getElementById('result').style.visibility = 'visible';
    RestoreBackground();
}
function checkIfYes(){
    alert('You made the right choice');
}
/*
var header = $('header');
var range = 200;


$(window).on('scroll', function () {
  
  var scrollTop = $(this).scrollTop(),
      height = header.outerHeight(),
      offset = height / 2,
      calc = 1 - (scrollTop - offset + range) / range;

  header.css({ 'opacity': calc });

  if (calc > '1') {
    header.css({ 'opacity': 1 });
  } else if ( calc < '0' ) {
    header.css({ 'opacity': 0 });
  }
  
});
*/

document.querySelector('#coloring-box-4').addEventListener('mouseover',changePlaces);
document.querySelector('#search-button').addEventListener('click',search);

function randomNumber(){
    let random = Math.floor(Math.random()*8);
    return random;
}
function changePlaces(){
    let random = randomNumber();
    console.log(random);
    let currentPossition = document.querySelector('#coloring-box-4').style.order;
    if(currentPossition === random){
        randomNumber();
        console.log(random);
    }
    else{
    document.querySelector('#coloring-box-4').style.order = random;
    }
}

function search(){
    var text = document.getElementById('search-field').value;
    var url = 'https://www.google.com/search?client=firefox-b-e&q='+text;
    if(document.getElementById('search-field').value ==''){
        alert('You must enter a keyword')
    }
    else{
        window.open(url, '_blank');
        document.getElementById('search-field').value = '';
    }
}