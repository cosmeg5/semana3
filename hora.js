function tempo() {
    
    let data = new Date;

    let diaNome = new Array ("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado");
    let mesNome = new Array ("janeiro", "fevereiro", "março", "abril", "maio", "junho", "agosto", "outubro", "novembro", "dezembro");

    document.getElementById('txtDate').innerHTML = "Hoje é " + diaNome[data.getDay() ] + ", " + data.getDate() + " de " + mesNome [data.getMonth() ]   + " de " + data.getFullYear();

    // Hora
    function zero(x) {
        if (x < 10) {
            x = '0' + x;
        } return x;
    }

    today=new Date();
    h = today.getHours();
    h = zero(h);
    m = today.getMinutes();
    m = zero(m);
    s = today.getSeconds();
    s = zero(s)
    document.getElementById('txt').innerHTML=h+":"+m+":"+s;
    setTimeout('tempo()',500);

    if(h >= 12 && h < 18){
        document.getElementById('cumprimento').innerHTML = 'Boa Tarde';
    }else if(h >= 18 && h < 25){
        document.getElementById('cumprimento').innerHTML = 'Boa Noite';
    }else if(h >= 0 && h < 6){
        document.getElementById('cumprimento').innerHTML = 'Boa Madrugada';
    }else if(h >= 6 && h < 12){
        document.getElementById('cumprimento').innerHTML = 'Bom dia'
    }

    
    
}


