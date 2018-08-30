let targetNumber;
let counter;

function startNewGame(){
 targetNumber = Math.floor(Math.random() * 10) + 1;
 counter = 0;
}

function control () {
  
        var numer = document.getElementById("nr").value

        if ( numer == targetNumber){
                showWin();
        }
        else if ( numer != targetNumber && counter==5){
                showError();
        }
        else if( numer != targetNumber ){
                showLoss();
        }

        document.getElementById("nr").value = "";
        document.getElementById("nr").focus();
  
}

function showWin () {
        document.getElementById('shfaq').innerHTML = '<br>Nice one!';
        startNewGame();
}

function showError () {
        document.getElementById('shfaq').innerHTML = '<br> Game over, try again !';
        startNewGame();
}

function showLoss () {
        var count = 5-counter;
        document.getElementById('shfaq').innerHTML = '<br>Wrong, try again! You have ' + count +' tries left.';
        counter++;  
}

startNewGame();