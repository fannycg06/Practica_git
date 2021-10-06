function Calcular(){
    let nume1 = parseInt(document.getElementById("Num1").value);
    let nume2 = parseInt(document.getElementById("Num2").value);
    var opera = document.getElementById("Operacion").value;
    if (opera == 1) {
        document.getElementById("Resultado").value = nume1 + nume2;

    }else{
        document.getElementById("Resultado").value = nume1 - nume2;
    }
}