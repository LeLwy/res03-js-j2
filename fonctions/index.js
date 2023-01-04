function add(number1, number2){
    
    return number1 + number2;
}

function sub(number1, number2){
    
    return number1 - number2;
}

function mult(number1, number2){
    
    return number1 * number2;
}

function div(number1, number2){
    
    return number1 / number2;
}

function mod(number1, number2){
    
    return number1 % number2;
}

function askUserOperation(){
    
    let userOperation = window.prompt("Quelle opération souhaitez vous effectuer ? (+ , - , * , / , %)");
    
    return userOperation;
}

function askUserFirstNumber(){
    
    let userFirstNumber = window.prompt("Entrez votre premier nombre.");
    
    return parseInt(userFirstNumber);
    
}

function askUserSecondNumber(){
    
    let userSecondNumber = window.prompt("Entrez votre second nombre.");
    
    return parseInt(userSecondNumber);
}

function calculator(){
    
    let userOperation = askUserOperation();
    let userFirstNumber = askUserFirstNumber();
    let userSecondNumber = askUserSecondNumber();
    
    if(userOperation === "+"){
        
        return add(userFirstNumber, userSecondNumber);
        
    }else if(userOperation === "-"){
        
        return sub(userFirstNumber, userSecondNumber);
        
    }else if(userOperation === "*"){
        
        return mult(userFirstNumber, userSecondNumber);
        
    }else if(userOperation === "/"){
        
        return div(userFirstNumber, userSecondNumber);
        
    }else if(userOperation === "%"){
        
        return mod(userFirstNumber, userSecondNumber);
        
    }else{
        
        return "Je n'ai pas saisi l'opération demandée."
    }
}

let result = calculator();

window.alert(result);

