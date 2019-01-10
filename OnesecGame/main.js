var gamebtn = document.getElementById("timeit");
var gamesectxt = document.getElementById("se");
gamebtn.addEventListener("click", gamehandler);
var gamestatus = 0;//0 idle,1 ongame, 2 result
var gametime, timerid;
var difficulty = 5
function gamehandler() {
    switch (gamestatus) {
        case 0:
            gametime = new Date();
            gametime.setSeconds(gametime.getSeconds() + 10);
            gamestatus = 1;
            gamebtn.innerText = "Now!";
            timerid = setInterval(() => {
                var cha = (gametime.getTime() - Date.now()) / 1000;
                if (cha > difficulty) {
                    gamesectxt.innerText = cha;
                } else {
                    gamesectxt.innerText = "?.???";
                }
            }, 10)
            break;
        case 1:
            var cha = (gametime.getTime() - Date.now()) / 1000;
            gamesectxt.innerText = cha;
            gamestatus = 2;
            gamebtn.innerText = "Reset";
            clearInterval(timerid);
            break;
        case 2:
            gamesectxt.innerText = "";
            gamebtn.innerText = "Start!";
            gamestatus = 0;
            break;
    }
}