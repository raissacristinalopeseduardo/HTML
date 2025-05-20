function verificarResposta() {
   const resposta= {
     q1: "a",
     q2: "b",
     q3: "c",
    };
    let pontuacao = 0;

    for(let q in resposta){
        const respostaUsuario = document.querySelector(`input[name ="${q}"]:checked`);
        if (respostaUsuario && respostaUsuario.value === resposta [q]) {
                pontuacao++;
            }
        }
        const perguntas = Object.keys(resposta).length;
        const resultado = document.getElementById("respostas");
        resultado.innerHTML = `Você acertou ${pontuacao} de ${perguntas} perguntas.`;

    }
