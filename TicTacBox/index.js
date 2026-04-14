const boxes = document.getElementsByClassName('cell');
let turn = "X";
let gameover = false;
const p = document.getElementById('status');
const restartbtn = document.getElementById('restartBtn');

const winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

function checkwinner(){


for(let i = 0; i<winPatterns.length; i++)
{

    let [a,b,c] = winPatterns[i];

    let val1 = boxes[a].textContent;
    let val2 = boxes[b].textContent;
    let val3 = boxes[c].textContent;

    if(val1 !== "" && val1 === val2 && val2 === val3){
        return val1;
    }
}

return null;
}

for (let i=0 ; i< boxes.length ; i++)
{
    boxes[i].addEventListener('click',(e)=>{

        if(gameover) return; //retun from winner

    if(e.target.textContent !== "") return;

    e.target.textContent = turn;

 const  winner  = checkwinner();

    if(winner){
        p.textContent = `Winner is ${winner}`;
        gameover = true;
        return;
    }


    if(turn === "X")
    {
     turn = "O"
    }else
        turn = "X";
    });
}

// restart 
restartbtn.addEventListener('click',()=>{
    for(let i=0; i< boxes.length;i++)
    {
        boxes[i].textContent = "";
    }
    turn = "X";
    gameover = false;
    p.textContent = "Player X turn";
});

