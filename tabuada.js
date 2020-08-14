function tabuada() {
    
    let numero = parseInt(document.getElementById("num").value);
    let operador = document.getElementById("operador").value;
    console.log(typeof(numero));

    for(x = 0; x <= 10; x++){
        
        switch(operador){
            case "adicao":
                let soma = [numero + x];
                document.getElementById("textTabuada").innerHTML += `<table><tr>${numero} + ${x} = ${soma}</tr></table><br>`;
                break;
            case "-":
                let subitracao = [numero - x];
                document.getElementById("textTabuada").innerHTML += `<table><tr>${numero} - ${x} = ${subitracao}</tr></table><br>`;
                break;
            case "*":
                let multiplicacao = [numero * x];
                document.getElementById("textTabuada").innerHTML += `<table><tr>${numero} x ${x} = ${multiplicacao}</tr></table><br>`;
                break;
            case "/":
                let divisao = [numero / x];
                document.getElementById("textTabuada") += `<table><tr>${numero} ÷ ${x} = ${divisao}</tr></table><br>`;
                break;
        }
    }
    
    return tabuada;
}

function valida_form(){
    if(document.getElementById("num").value === ""){
        alert('Por favor, preencha o campo Número');
        document.getElementById("num").focus();
 
        return false
    }

}

