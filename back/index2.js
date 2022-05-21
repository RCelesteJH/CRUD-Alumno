const fs= require("fs"); //importar el modulo os 

fs.writeFile("./texto.txt","Hola Mundo",function(err){
    if(err){
        console.log(err);
    }
    console.log("Archivo creado exitosamente");
});
fs.readFile("./texto.txt",function(err,data){
    if(err){
        console.log(err);
    }
    console.log(data.toString());
});
