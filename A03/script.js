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

function enviarZap() {
    const nome = localStorage.getItem("nomeForms") || "";
    const endereco = localStorage.getItem("enderecoForms") || "";
    const email = localStorage.getItem("emailForms") || "";
    const telefone = localStorage.getItem("telefoneForms") || "";

    const numeroDestino = document.getElementById('numeroZap').value;

    if (numeroDestino.trim() == ""){
        alert("Digite um número do zap ai pra enviar uma mensagem");
        return;
    }

    const mensagem = `Nome: ${nome}%0AEndereço: ${endereco}%0AEmail: ${email}%0ATelefone: ${telefone}`;

    const linkWhatsapp = `https://api.whatsapp.com/send?phone=${numeroDestino}&text=${mensagem}`;
    
    window.open(linkWhatsapp, "_blank");

}