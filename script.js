function contatos() {
    const element = document.getElementById("formcontatos");
    if (element.style.display == "flex")
        element.style.display = "none";
    else {
        element.style.display = "flex";
    }
}

document.forms.formulario.onsubmit = e => {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const formularioDados = {
        nome:formData.get("nome"),
        cpf:formData.get("cpf"),
        telefone:formData.get("telefone"),
        email:formData.get("email"),
        estado:formData.get("select"),
        genero:formData.get("genero"),
        mensagem:formData.get("mensagem")
    };

    console.log(formularioDados);
    console.log(JSON.stringify(formularioDados));
    
}






