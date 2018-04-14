function ms_clear() {
    document.getElementById('screen').value = 0
}
function disp(s){
    if (document.getElementById('screen').value==0){
        document.getElementById('screen').value = s
    }else{
        document.getElementById('screen').value = document.getElementById('screen').value + s
    }
}
function compute(){
    var num1, num2, sign;
    var exp = document.getElementById('screen').value;
    var num = ['9', '8', '7', '6', '5', '4', '3', '2', '1', '0', '-']

    for (i = 0; i < num.length; ++i){
        if (exp.startsWith(num[i])){
            break;
        }else if (i == 10){
            document.getElementById('screen').value = "Error"
            return;
        }
    }

    if (exp.includes('+')){
        num1 = exp.substring(0, exp.indexOf('+'));
        num2 = exp.substring(1+exp.indexOf('+'), exp.length)

        num1 = (num2 * 1) + (num1 * 1)
        document.getElementById('screen').value = num1
    }else if (exp.includes('-')){
        num1 = exp.substring(0, exp.indexOf('-'));
        num2 = exp.substring(1+exp.indexOf('-'), exp.length)

        num1 = num1 - num2
        document.getElementById('screen').value = num1
    }else if (exp.includes('*')){
        num1 = exp.substring(0, exp.indexOf('*'));
        num2 = exp.substring(1+exp.indexOf('*'), exp.length)

        num1 = num1 * num2
        document.getElementById('screen').value = num1
    }else if (exp.includes('/')){
        num1 = exp.substring(0, exp.indexOf('/'));
        num2 = exp.substring(1+exp.indexOf('/'), exp.length)

        num1 = Math.floor(num1 / num2, 2)
        document.getElementById('screen').value = num1
    }
}