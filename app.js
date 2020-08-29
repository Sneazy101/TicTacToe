
var array, counter, activePlayer, win, theme;

theme = "theme1";

init()

document.getElementById('btn').addEventListener('click',init);

document.getElementById('theme-2').addEventListener('click',function(){
  theme="theme2"
  document.body.style.background = "skyblue";
  for(var counter = 0; counter < 3; counter++){
   document.getElementsByClassName('T1')[counter].classList.add('theme2')
}
})

document.getElementById('theme-1').addEventListener('click',function(){
  theme="theme1"
  document.body.style.background = "antiquewhite";
  for(var counter = 0; counter < 3; counter++){
    document.getElementsByClassName('T1')[counter].classList.remove('theme2')
 }
 
})

for ( var counter = 0; counter < 9; counter++){
   
  click(counter)
}

function init(){
array = [3,4,5,6,7,8,9,0,10]
activePlayer = 1;
winCombo = [
  [1, 2, 3],[4, 5, 6],[7, 8, 9],
  [1, 4, 7],[2, 5, 8],[3, 6, 9],
  [1, 5, 9],[3, 5, 7]
];
win = false;



for ( var counter = 0; counter < 9; counter++){
  document.getElementById(counter).src=theme +'/blank.png';
}



}

function click(index){
  document.getElementById(index).addEventListener('click', function(){
    switcher(index)}
  );
}

function nextPlayer(){
  activePlayer === 1? activePlayer = 2 : activePlayer = 1;
  document.getElementById('message-bar').textContent ="IT IS PLAYER "+activePlayer+"\'S TURN";

}

function switcher(index){
  if (win==false){
  if(array[index]==1 || array[index] ==2){
    document.getElementById('message-bar').textContent = 'Can\'t put it there! dummy. Unless';
  }else{
    array[index]=activePlayer
    if(activePlayer==1){
      document.getElementById(index).src=theme+'/cross.png';
    }else{
      document.getElementById(index).src=theme+'/circle.png';
    }
    nextPlayer()
  winCheck()
  }

}}

function winCheck(){
  var drawcounter=0
  for ( var i = 0; i <9; i++){
    if (array[i]==1 || array[i]==2)
    drawcounter+=1;
  }
  if (drawcounter == 9){
    document.getElementById('message-bar').textContent='IT\'S A DRAW'
    win=true;
  }
  for ( var i = 0; i < winCombo.length; i++){
  if (array[(winCombo[i][0]-1)]==array[(winCombo[i][1]-1)] && array[(winCombo[i][1]-1)]==array[(winCombo[i][2]-1)]){
    nextPlayer()
    document.getElementById('message-bar').textContent='PLAYER '+activePlayer+' WON';
    win = true;
  }

}}