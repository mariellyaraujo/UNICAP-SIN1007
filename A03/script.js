function armazenarDados(){
    const nome = document.getElementById("nomeForms").value;
    const endereco = document.getElementById("enderecoForms").value;
    const email = document.getElementById("emailForms").value;
    const telefone = document.getElementById("telefoneForms").value;

    localStorage.setItem("nomeForms", nome);
    localStorage.setItem("enderecoForms", endereco);
    localStorage.setItem("emailForms", email);
    localStorage.setItem("telefoneForms", telefone);

    alert("Dados registrados com sucesso!");
}

function exibirDados() {
    const nome = localStorage.getItem("nomeForms") || "(vazio)";
    const endereco = localStorage.getItem("enderecoForms") || "(vazio)";
    const email = localStorage.getItem("emailForms") || "(vazio)";
    const telefone = localStorage.getItem("telefoneForms") || "(vazio)";

    const resultado = document.getElementById("resultado");

    resultado.innerHTML = `
    <p><strong>Nome:</strong> ${nome}</p>
    <p><strong>Endereço:</strong> ${endereco}</p>
    <p><strong>E-mail:</strong> ${email}</p>
    <p><strong>Telefone:</strong> ${telefone}</p>
    `;
}