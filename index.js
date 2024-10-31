function calcular(){

    var nota1 = Number(document.getElementById('n1').value);
    var nota2 = Number(document.getElementById('n2').value);
    var nota3 = Number(document.getElementById('n3').value);

    var media = (nota1 + nota2 + nota3) / 3

    document.getElementById('resultado').innerHTML = media.toFixed(2);

    if(media >= 7){
        document.getElementById('resultadoSituacao').innerHTML = 'Aprovado...'
    }else if(media <= 6.9 && media >= 5){
        document.getElementById('resultadoSituacao').innerHTML = 'Recuperação...'
    }else{
        document.getElementById('resultadoSituacao').innerHTML = 'Reprovado...'
    }


}