let turn = 0;
let topleft = 0;
let topp = 0;
let topright = 0;
let left = 0;
let middle = 0;
let right = 0;
let bottomleft = 0;
let bottom = 0;
let bottomright = 0;



function restart(){
    document.getElementById("1").innerHTML = " ";
    document.getElementById("2").innerHTML = " ";
    document.getElementById("3").innerHTML = " ";
    document.getElementById("4").innerHTML = " ";
    document.getElementById("5").innerHTML = " ";
    document.getElementById("6").innerHTML = " ";
    document.getElementById("7").innerHTML = " ";
    document.getElementById("8").innerHTML = " ";
    document.getElementById("9").innerHTML = " ";
    turn = 0;
    topleft = 0;
    topp = 0;
    topright = 0;
    left = 0;
    middle = 0;
    right = 0;
    bottomleft = 0;
    bottom = 0;
    bottomright = 0;

}
function main(x,y){
    if(x == 0 && y == 0){
        if(turn == 0 && topleft != 10){
            document.getElementById("1").innerHTML = "X";
            turn = 1;
            topleft = 1;
        }
        if(turn == 1 && topleft != 1){
            document.getElementById("1").innerHTML = "O";
            turn = 0;
            topleft = 10;
        }
    }
    if(x == 0 && y == 1){
        if(turn == 0 && topp != 10){
            document.getElementById("2").innerHTML = "X";
            turn = 1;
            topp = 1;
        }
        if(turn == 1 && topp != 1){
            document.getElementById("2").innerHTML = "O";
            turn = 0;
            topp = 10;
        }
    }
    if(x == 0 && y == 2){
        if(turn == 0 && topright != 10){
            document.getElementById("3").innerHTML = "X";
            turn = 1;
            topright = 1;
        }
        if(turn == 1 && topright != 1){
            document.getElementById("3").innerHTML = "O";
            turn = 0;
            topright = 10;
        }
    }
    if(x == 1 && y == 0){
        if(turn == 0 && left != 10){
            document.getElementById("4").innerHTML = "X";
            turn = 1;
            left = 1;
        }
        if(turn == 1 && left != 1){
            document.getElementById("4").innerHTML = "O";
            turn = 0;
            left = 10;
        }
    }
    if(x == 1 && y == 1){
        if(turn == 0 && middle != 10){
            document.getElementById("5").innerHTML = "X";
            turn = 1;
            middle = 1;
        }
        if(turn == 1 && middle != 1){
            document.getElementById("5").innerHTML = "O";
            turn = 0;
            middle = 10;
        }
    }
    if(x == 1 && y == 2){
        if(turn == 0 && right != 10){
            document.getElementById("6").innerHTML = "X";
            turn = 1;
            right = 1;
        }
        if(turn == 1 && right != 1){
            document.getElementById("6").innerHTML = "O";
            turn = 0;
            right = 10;
        }
    }
    if(x == 2 && y == 0){
        if(turn == 0 && bottomleft != 10){
            document.getElementById("7").innerHTML = "X";
            turn = 1;
            bottomleft = 1;
        }
        if(turn == 1 && bottomleft != 1){
            document.getElementById("7").innerHTML = "O";
            turn = 0;
            bottomleft = 10;
        }
    }
    if(x == 2 && y == 1){
        if(turn == 0 && bottom != 10){
            document.getElementById("8").innerHTML = "X";
            turn = 1;
            bottom = 1;
        }
        if(turn == 1 && bottom != 1){
            document.getElementById("8").innerHTML = "O";
            turn = 0;
            bottom = 10;
        }
    }
    if(x == 2 && y == 2){
        if(turn == 0 && bottomright != 10){
            document.getElementById("9").innerHTML = "X";
            turn = 1;
            bottomright = 1;
        }
        if(turn == 1 && bottomright != 1){
            document.getElementById("9").innerHTML = "O";
            turn = 0;
            bottomright = 10;
        }
    }
    
    if(topleft+topp+topright == 3|| left+middle+right == 3|| bottomleft+bottom+bottomright == 3|| topleft+left+bottomleft == 3|| topp+middle+bottom == 3|| topright+right+bottomright == 3|| topleft+middle+bottomright == 3|| topright+middle+bottomleft== 3){
        setTimeout(() => {
            alert("X WON CONGRATULATIONS!!!");
        }, 100)
    }
    if(topleft+topp+topright == 30|| left+middle+right == 30|| bottomleft+bottom+bottomright == 30| topleft+left+bottomleft == 30|| topp+middle+bottom == 30| topright+right+bottomright == 30|| topleft+middle+bottomright == 30|| topright+middle+bottomleft == 30){
        setTimeout(() => {
            alert("O WON CONGRATULATIONS!!!");
        }, 100)
        
    }    
    if(topleft != 0 && topp != 0 && topright != 0 && left != 0 && middle != 0 && right != 0 && bottomleft != 0 && bottom != 0 && bottomright != 0){
        setTimeout(() => {
            alert("IT'S A DRAW")
        }, 100)
       
    }








}

   

