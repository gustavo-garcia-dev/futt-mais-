//validação pagamento socio
const formulario = document.getElementById("pagamentoSocio");

formulario.addEventListener("submit", function (event) {
    
    const nome = document.getElementById("nome");
    const numero = document.getElementById("numero");
    const validade = document.getElementById("validade");
    const cvv = document.getElementById("cvv");

    // Nome
    if (nome.value.trim() === "") {
        event.preventDefault();
        alert("Digite o nome do titular do cartão.");
        return;
    }

    // Sobrenome
    if (numero.value.trim() === "") {
        event.preventDefault();
        alert("Digite o número do cartão");
        return;
    }

    // E-mail
    if (validade.value.trim() === "") {
        event.preventDefault();
        alert("Digite a validade do cartão.");
        return;
    }

    // Senha
    if (cvv.value.trim() === "") {
        event.preventDefault();
        alert("Digite o CVV do catão.");
        return;
    }


  

    alert("Formulário enviado com sucesso!");

    // Limpar campos (opcional)
    nome.value = "";
    numero.value = "";
    validade.value = "";
    cvv.value = "";

});
