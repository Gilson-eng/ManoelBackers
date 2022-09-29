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
        nome: formData.get("nome"),
        cpf: formData.get("cpf"),
        telefone: formData.get("telefone"),
        email: formData.get("email"),
        estado: formData.get("estado"),
        genero: formData.get("genero"),
        mensagem: formData.get("mensagem")
    };
    console.log(formularioDados);
    console.log(JSON.stringify(formularioDados));

    var strCPF = formularioDados.cpf.replace(/\.|-/g, "");
    if (!TestaCPF(strCPF)) {
        alert("CPF Inválido!");
        return;
    }

    if (!validarEmail(formularioDados.email)) {
        alert("Email inválido");
        return;
    }

    if(!validarTelefone(formularioDados.telefone)){
        alert("Telefone Inválido!");
        return;
    }

    alert("Menssagem enviada com sucesso!");
    window.location.reload();

}

function TestaCPF(strCPF) {
    var Soma;
    var Resto;
    Soma = 0;
    if (strCPF == "00000000000") return false;

    for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(9, 10))) return false;

    Soma = 0;
    for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
    Resto = (Soma * 10) % 11;

    if ((Resto == 10) || (Resto == 11)) Resto = 0;
    if (Resto != parseInt(strCPF.substring(10, 11))) return false;
    return true;
}

function validarEmail(email) {
    usuario = email.substring(0, email.indexOf("@"));
    dominio = email.substring(email.indexOf("@") + 1, email.length);

    if ((usuario.length >= 1) &&
        (dominio.length >= 3) &&
        (usuario.search("@") == -1) &&
        (dominio.search("@") == -1) &&
        (usuario.search(" ") == -1) &&
        (dominio.search(" ") == -1) &&
        (dominio.search(".") != -1) &&
        (dominio.indexOf(".") >= 1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {

        return true;
    }
    else {
        return false;
    }
}


function validarTelefone(telefone) {
    let campo = true;
    if (telefone.length < 11) {
        return false;
    }
    for (let i = 0; i < telefone.length; i++) {
        if (isNaN(telefone[i])) {
            campo = false;
            break;
        }
    }
    return campo;
}










