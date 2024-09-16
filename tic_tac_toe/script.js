function gameBoard(){
    const rows = 3;
    const columns = 3;
    let board = [];
    for(let i=0;i<rows;i++){
        board[i] = [];
        for(let j=0;j<columns;j++){
            board[i][j] = "";
        }
    }

    const getBoard = () => board;


    const addInput = (row, col, player) =>{
        if (board[row][col] != ""){
            return false;
        }
        board[row][col] = player;
    }

    const initialState = () => {
        board = board.map(row => row.map(() => ""));
    }


    return {getBoard, addInput, initialState};
}

function checkCondition(board, player){
    win_condition = [
        [board[0][0], board[1][1], board[2][2]],//diagonal
        [board[0][2], board[1][1], board[2][0]],//diagonal
        [board[0][0], board[0][1], board[0][2]],//horizontal
        [board[1][0], board[1][1], board[1][2]],//horizontal
        [board[2][0], board[2][1], board[2][2]],//horizontal
        [board[0][0], board[1][0], board[2][0]],//vertical
        [board[0][1], board[1][1], board[2][1]],//vertical
        [board[0][2], board[1][2], board[2][2]]//vertical
    ]
    let i = 0;
    for ([a, b, c] of win_condition){
        
        if (a===player && b===player && c===player){
            return true;
        }
        i++;
    }
    return false;
}


function gameController(playerOne = "Player One", playerTwo = "Player Two"){
    const board = gameBoard();
    const player = [
        {
            name: playerOne,
            sign: "X"
        },
        {
            name: playerTwo,
            sign: "O"
        }
    ]
    
    let activePlayer = player[0];
    let turn = 0;

    const switchPlayer = () => {
        activePlayer = activePlayer === player[0] ? player[1] : player[0];
    }

    const getActivePlayer = () => activePlayer;
    const increaseTurn = () => turn++ ;
    const resetTurn = () => turn=0;
    const getTurn = () => turn;

    const playRound = (row, column) => {
        const player_sign = getActivePlayer().sign;
        console.log(player_sign);
        if (board.addInput(row, column, player_sign) === false){
            return;
        }
        board.addInput(row, column, player_sign);
        increaseTurn();
        if (checkCondition(board.getBoard(), player_sign)){
            return true;
        }
        switchPlayer();
        console.log(getActivePlayer());
    };


    const resetGame = () => {

        board.initialState();
        resetTurn();
        activePlayer = player[0];
        console.log(getTurn());
    }
    
    return {
        getBoard:board.getBoard, 
        playRound, 
        getActivePlayer, 
        getTurn,
        resetGame
    };
};

function screenController(){
    const game = gameController();
    const container = document.querySelector(".container");
    const player_option = container.querySelector(".player-option");
    const playing_boxes = container.querySelector(".playing-boxes");
    const restart_btn = container.querySelector("#restart");
    const dialog = document.querySelector("#over");
    const game_over = dialog.querySelector(".game-over")
    const play_again = dialog.querySelector("#again")
    const input_boxes = document.querySelectorAll(".input-box");


    

    function updateBoard(element,row,col){

        const activePlayer = game.getActivePlayer().name;
        player_option.textContent = `${activePlayer}'s turn.......`;

        const player = game.getBoard()[row][col];
        element.textContent = `${player}`;

        
    }

    function reset(){
        game.resetGame();
        input_boxes.forEach(div => div.textContent="");
        player_option.textContent = "Player X vs Player Y";
        dialog.close();
    }

    function boxClickHandler(e){
        const x = parseInt(e.target.dataset.x);
        const y = parseInt(e.target.dataset.y);
        if(game.playRound(x,y) || game.getTurn()===9){
            game_over.textContent = "Game over.....";
            game_over.textContent = `Player ${game.getBoard()[x][y]} wins.`
            dialog.showModal();
        }
        updateBoard(e.target,x,y);
    }

    playing_boxes.addEventListener("click", boxClickHandler)
    restart_btn.addEventListener("click", reset);
    play_again.addEventListener("click", reset);
}

screenController();








