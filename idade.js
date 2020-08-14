function idades() {

    let idade = document.getElementById("idade").value;
    
    if(idade < 12){
        document.getElementById("text-etaria").innerHTML = 'Criança';
    }else if(idade >=12 && idade < 18){
        document.getElementById("text-etaria").innerHTML = 'Adolescente';
    }else if(idade >=18 && idade < 60){
        document.getElementById("text-etaria").innerHTML = 'Adulto';
    }else if(idade >= 60) {
        document.getElementById("text-etaria").innerHTML = 'Melhor idade';
    }

    return idades;
}




