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