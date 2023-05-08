let Screen = document.getElementById("screen");

function btnClick(num){
    Screen.value += num;
}

function result(){
    try{
        Screen.value = eval(Screen.value);
    }catch(error){
        Screen.value = "Invaild!!";
    }   
}
function clearScreen(){
    Screen.value ="";
}
function del(){
    Screen.value = Screen.value.slice(0,-1);
}
