const math =  {};
function add(a, b){
    return a+b;
}
function substract(a,b){
    return a-2;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    if(b == 0){
        console.log("No es posible");
        return 0;
    }else{
        return a / b;
    }  
}
math.add=add;
math.substract=substract;
math.multiply=multiply;
math.divide=divide;

module.exports= math;
/*exports.add = add;
exports.substract= substract;
exports.multiply=multiply;
exports.divide= divide;
*/