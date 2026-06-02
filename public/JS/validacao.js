const formulario = document.getElementById("meuCadastro");

formulario.addEventListener("submit", function (event) {
    
    const nome = document.getElementById("nome");
    const sobrenome = document.getElementById("sobrenome");
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    const rsenha = document.getElementById("rep-senha");
    const sexo = document.getElementById("sexo");
    const checkbox = document.getElementById("checkbox");

    // Nome
    if (nome.value.trim() === "") {
        event.preventDefault();
        alert("Preencha o nome.");
        return;
    }

    // Sobrenome
    if (sobrenome.value.trim() === "") {
        event.preventDefault();
        alert("Preencha o sobrenome.");
        return;
    }

    // E-mail
    if (email.value.trim() === "") {
        event.preventDefault();
        alert("Preencha o e-mail.");
        return;
    }

    // Senha
    if (senha.value.trim() === "") {
        event.preventDefault();
        alert("Crie uma senha.");
        return;
    }

    // Repetir senha
    if (rsenha.value.trim() === "") {
        event.preventDefault();
        alert("Repita a senha.");
        return;
    }

    // Conferir senhas
    if (senha.value !== rsenha.value) {
        event.preventDefault();
        alert("As senhas não coincidem.");
        return;
    }

    // Sexo
    if (sexo.value === "") {
        event.preventDefault();
        alert("Selecione o sexo.");
        return;
    }

    // Checkbox
    if (!checkbox.checked) {
        event.preventDefault();
        alert("Aceite os termos para continuar.");
        return;
    }

    alert("Formulário enviado com sucesso!");

    // Limpar campos (opcional)
    nome.value = "";
    sobrenome.value = "";
    email.value = "";
    senha.value = "";
    rsenha.value = "";
    sexo.value = "";
    checkbox.checked = false;
});


