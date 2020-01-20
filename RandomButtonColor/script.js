var allButtons = document.getElementsByTagName('button');

var copy = [];
for (let i = 0; i < allButtons.length; i++) {
    copy.push(allButtons[i].classList[1]);
}
console.log(allButtons);
function buttonColorChange(buttonThingy){
    if(buttonThingy.value=="red"){
        buttonsRed();
        console.log(allButtons);
    }
    else if(buttonThingy.value=="green"){
        buttonsGreen();
    }
    else if(buttonThingy.value==    "random"){
        buttonsRandom();
    }
    else{
        resetColors();
    }
}
//Function for making the colors red
function buttonsRed(){
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger');
    }
}
//Function for makeing the colors green
function buttonsGreen(){
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-success');
    }
}
//Function for reseting all the colors
function resetColors(){
    for (let i = 0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copy[i]);
    }
}
//Function for giving random orders
function buttonsRandom(){
    for (let i = 0; i < allButtons.length; i++) {
        var random = Math.round(Math.random() * copy.length);
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copy[random]);
    }
}