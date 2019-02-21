// player one is X , second player is O .
// here is the idea of how it's work
//[1][2][3]
//[4][5][6]
//[7][8][9]






// it's same scenario for player tow [O].



// we can do it in object , array .
// let table=$('td');
// let ticTacToe ={
// first:[1,2,3],
// second:[4,5,6],
// third:[6,7,8],
// four:[1,4,7],
// five:[2,5,8],
// six:[3,6,9],
// seven:[1,5,9],
// eight:[3,5,7],
// }
// declare array inside object .
//the possible way to win .

let player = 'X';

let counter = false;
let xScore = 0;
let oScore = 0;
let tieScore = 0;
let array = [];

function ticTacToe(event) {

    // $(event.target).off('click');

    if ($(event.target).text() === '' && counter === false) {
        // first of all the start is for player one which is X .
        $(event.target).text("X");

        // if (player==='X'){

        //     player='O';
        // }else if (player ==='O'){
        //     player='X'
        // } else {
        //     player='O'
        // }
        computer();
        checkWineer();
    }
    $('#o').text(oScore);
    $('#x').text(xScore);
    $('#tie').text(tieScore);
    // The function works when players click place .
} $('td').on('click', ticTacToe)

//if player = X 
//i need it to be O

//
function checkWineer() {
    var cell1 = $('#one').text();
    var cell2 = $('#two').text();
    var cell3 = $('#three').text();
    var cell4 = $('#four').text();
    var cell5 = $('#five').text();
    var cell6 = $('#six').text();
    var cell7 = $('#seven').text();
    var cell8 = $('#eight').text();
    var cell9 = $('#nine').text();

    // each scenario should === 3 .

    if (counter == false) {
        // if player one click first row .
        // when click first cell in the first row , second cell and third cell in first row.
        // player one will win . 
        if ((cell2 !== '') && (cell1 === cell2) && (cell2 === cell3)) {
            $('h2').text(' You win ' + cell3);
            counter = true
            if (cell3 === 'O') {
                oScore++;
            } else if (cell3 === 'X') {
                xScore++;
            }
            // if player one click second row .
            // when click first cell in row2 , second cell and third cell in row2.
            // player one will win 
        } else if ((cell5 !== '') && (cell4 === cell5) && (cell5 === cell6)) {
            $('h2').text(' You win ' + cell6);
            counter = true
            if (cell6 === 'O') {
                oScore++;
            } else if (cell6 === 'X') {
                xScore++;
            }
            // if player one click third row .
            // when click first element in row3 , second element and third element in row3.
            // player one will win .
        } else if ((cell8 !== '') && (cell7 === cell8) && (cell8 === cell9)) {
            $('h2').text(' You win ' + cell9);
            counter = true
            if (cell9 === 'O') {
                oScore++;
            } else if (cell9 === 'X') {
                xScore++;
            }
        }
        // if player one click first column .
        // when click first element in column1 , second element and third element in column1.
        // player one will win .
        else if ((cell4 !== '') && (cell1 === cell4) && (cell4 === cell7)) {
            $('h2').text(' You win ' + cell7);
            counter = true
            if (cell7 === 'O') {
                oScore++;
            } else if (cell7 === 'X') {
                xScore++;
            }
            // if player one click second column .
            // when click first element in column2 , second element and third element in column2.
            // player one will win .
        } else if ((cell5 !== '') && (cell2 === cell5) && (cell5 === cell8)) {
            $('h2').text(' You win ' + cell8);
            counter = true
            if (cell8 === 'O') {
                oScore++;
            } else if (cell8 === 'X') {
                xScore++;
            }
            // if player one click third column .
            // when click first element in column3 , second element and third element in column3.
            // player one will win .
        } else if ((cell6 !== '') && (cell3 === cell6) && (cell6 === cell9)) {
            $('h2').text(' You win ' + cell9);
            counter = true
            if (cell9 === 'O') {
                oScore++;
            } else if (cell9 === 'X') {
                xScore++;
            }
            // cross left line , [\]
            // if player one click 1+5+9 
            //will win by cross left line

            // if player one click 5+1+9
            //will win by cross left line

            // if player one click 5+9+1 
            //will win by cross left line

            // if player one click 9+5+1
            //will win by cross left line

            // if player one click 9+1+5
            //will win by cross left line

        } else if ((cell5 !== '') && (cell1 === cell5) && (cell5 === cell9)) {
            $('h2').text(' You win ' + cell9);
            counter = true
            if (cell9 === 'O') {
                oScore++;
            } else if (cell9 === 'X') {
                xScore++;
            }
            //cross right line , [/]

            //if player one click 3+5+7 .
            //player one will win by cross right line ,

            //if player one click 3+7+5 .
            //player one will win by cross right line ,

            //if player one click 5+7+3 .
            //player one will win by cross right line ,

            //if player one click 5+3+7 .
            //player one will win by cross right line ,

            //if player one click 7+3+5 .
            //player one will win by cross right line ,

            //if player one click 7+5+3 .
            //player one will win by cross right line ,
        } else if ((cell5 !== '') && (cell3 === cell5) && (cell5 === cell7)) {
            $('h2').text(' You win ' + cell7);
            counter = true
            if (cell7 === 'O') {
                oScore++;
            } else if (cell7 === 'X') {
                xScore++;
            }
            //if no one can win it's a tie .

        } else if ((cell1 !== '') && (cell2 !== '') && (cell3 !== '') && (cell4 !== '') && (cell5 !== '') && (cell6 !== '') && (cell7 !== '') && (cell8 !== '') && (cell9 !== '')) {
            $('h2').text(' Tie !!');
            tieScore++;
        }
    }
}

//click button to reset the page to join new game 

function reset() {
    $('h2').text('');
    $('td').text('');
    counter = false;

} $('.Button').on('click', reset)


function restart() {
    window.location.reload();
    $('h2').text('');
    $('td').text('');
    counter = false;
} $('.restartButton').on('click', restart)

// let the computer playing O in the next empty cell .

function computer() {
    var index = []
    index[1] = $('#one');
    index[2] = $('#two');
    index[3] = $('#three');
    index[4] = $('#four');
    index[5] = $('#five');
    index[6] = $('#six');
    index[7] = $('#seven');
    index[8] = $('#eight');
    index[9] = $('#nine');
    var randomarray = index.filter(cell => cell.text() === '')
    randomarray[Math.floor(Math.random() * randomarray.length)].text("O");
}