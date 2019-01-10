var buttonList = document.getElementsByClassName("button")
var calStr = document.getElementById("evalString")

for(var i = 0; i < buttonList.length; i++){
    buttonList[i].addEventListener('click',function(){
        switch (this.innerText){
            case "Clear": calStr.innerText = ""; break;
            case "x": calStr.innerText = calStr.innerText.substr(0, calStr.innerText.length-1); break;
            case "=": calStr.innerText = eval(calStr.innerText); break;
            default: calStr.innerText += this.innerText
        }
    })
}