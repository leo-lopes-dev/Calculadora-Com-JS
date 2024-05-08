function media() {
    var nome = window.prompt('Qual é o nome do aluno?')
    var n1 = Number(window.prompt('Digite a nota do primeiro bimestre'));
    var n2 = Number(window.prompt('Digite a nota do segundo bimestre'));
    var n3 = Number(window.prompt('Digite a nota do terceiro bimestre'));
    var n4 = Number(window.prompt('Digite a nota do quarto bimestre'));
    var med = (n1 + n2 + n3 + n4) / 4;

    var resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p>A média do aluno <b>${nome}</b></p>`;
    resultado.innerHTML += `<p>com as notas <b>${n1}, ${n2}, ${n3} e ${n4}</b> é: <mark>${med}</mark></p>`;

    // para printar no mesmo lugar, deve-se usar +=
    // condição para ser aprovado ou reprovado

    if(med >= 7){
        resultado.innerHTML += `<p>O aluno(a) foi <b>Aprovado. &#x2705;</p></b>`
    }else if (med >= 4){
        resultado.innerHTML += `<p>O aluno(a) está na <b>Recuperação. &#x2757;</p></b>`
    }else{
        resultado.innerHTML += `<p>O aluno(a) foi <b>Reprovado. &#x1F6AB;</p></b>`
    }
    
}