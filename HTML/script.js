function myFunction(value){
    const display = document.getElementById('display');
    display.value += value;
}
function calculate(){
    const display = document.getElementById('display');
    try{
        display.value = eval(display.value);
    }catch{
        display.value = 'Error'
    }
}
