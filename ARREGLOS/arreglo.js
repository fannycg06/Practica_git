var arreglo1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
var arreglo2 = []
var palabra = "EstefaniaChavez"
var contenedor =[];
var contrario = arreglo1.length-1;
console.log(arreglo1);
console.log(arreglo2);

for(var i = 0; i < arreglo1.length; i++){
    contenedor.push(palabra[i]);
    if(arreglo1[i] == arreglo2[contrario])
    console.log("Caracteres Identicos");
    else
    console.log("Caracteres distintos");
    
    contrario--;
}
console.log("------------------------------------")
console.log(contenedor);