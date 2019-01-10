var stuList = document.getElementsByClassName("stu");
var i = 0;
function settingAnimation(){
    if(i < stuList.length){
        setTimeout(settingAnimation, 500)
        stuList[i].setAttribute("class","stu stu_animation")
        i++
    }
}
settingAnimation()