const Formulario = document.getElementById("meuCadastro");

Formulario.addEventListener("submit", function (event) {
    event.preventDefault();

    const nome = document.getElementById("nome");
    const sobrenome = document.getElementById("sobrenome");
    const email = document.getElementById("email");
    const senha = document.getElementById("senha");
    const rsenha = document.getElementById("rep-senha")
    const sexo = document.getElementById("sexo") 
    const checkbox = document.getElementById("checkbox");


    // validação
    if (nome.value.trim() === "") {
        alert("preencha o nome");
        return false;
    }
   
    if (sobrenome.value.trim() === "") {
        alert("preencha o sobrenome");
        return false;
    }

    if (email.value.trim() === "") {
        alert("preencha o email");
        return false;
    }

    if (senha.value.trim() === "") {
        alert("crie uma senha");
        return false;
    }

    if (rsenha.value.trim() === "") {
        alert("preencha a senha novamente");
        return false;
    }

    if (sexo.value.trim() === "") {
        alert("preecha o sexo");
        return false;
    }

    if (checkbox.value.trim() === "") {
        alert("formulario enviado!");
        return false;
    }


     // limpar campos
    nome.value = "";
    sobrenome.value = "";
    email.value = "";
    senha.value = "";
    rsenha.value = "";
    sexo.value = "";
    checkbox.checked = false;

    alert("formulario enviado!")

});