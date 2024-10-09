const Roll= document.getElementById("Roll");
const Ref = document.getElementById("Ref");
let min =1;
let max=6;
let RandomNum1,RandomNum2;
let p1,p2;
let element1 = document.getElementById("Player1");
let element2 = document.getElementById("Player2");
Roll.onclick = function () {
    RandomNum1 = Math.floor(Math.random() * max) + min;
    RandomNum2 = Math.floor(Math.random() * max) + min;
    p1=RandomNum1;
    p2=RandomNum2;
    let path1 = "./Images/dice" + RandomNum1 +".png";
    let path2 = "./Images/dice" + RandomNum2 +".png";
    element1.setAttribute("src",path1);
    element2.setAttribute("src",path2);
    if(p1>p2){
        Ref.textContent="Player 1 Wins";
    }
    else if(p1<p2){
        Ref.textContent="Player 2 Wins";
    }
    else{
        Ref.textContent="Draw";
    }
    
}
