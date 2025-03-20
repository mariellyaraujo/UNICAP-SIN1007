/* 
Imposto = salario * Alíquota – Dedução

*/

document.addEventListener("DOMContentLoaded", function () {
    let inputSalario = document.querySelector(".inputSalario");
    let buttonCalc = document.querySelector(".buttonCalc");
    let buttonReset = document.querySelector(".buttonReset");
    let irpfShow = document.querySelector(".irpfShow");
    let aliquotaShow = document.querySelector(".aliquota");

    function calcularIRPF(salarioBruto) {
        if (salarioBruto <= 0 || isNaN(salarioBruto)) {
            return { imposto: "Valor inválido", aliquotaEfetiva: " - " };
        }

        let inss = salarioBruto * 0.11;
        let baseCalculo = salarioBruto - inss;
        let imposto = 0;
        let aliquotaEfetiva = 0;

        if (baseCalculo <= 2259.20) {
            imposto = 0;
        } else if (baseCalculo <= 2826.65) {
            imposto = (baseCalculo * 0.075) - 169.44;
        } else if (baseCalculo <= 3751.05) {
            imposto = (baseCalculo * 0.15) - 381.44;
        } else if (baseCalculo <= 4664.68) {
            imposto = (baseCalculo * 0.225) - 662.77;
        } else {
            imposto = (baseCalculo * 0.275) - 896.00;
        }

        if (imposto > 0) {
            aliquotaEfetiva = (imposto / salarioBruto) * 100;
            return { imposto: `R$ ${imposto.toFixed(2)}`, aliquotaEfetiva: `${aliquotaEfetiva.toFixed(2)}%` };
        } else {
            return { imposto: "Isento", aliquotaEfetiva: "Isento" };
        }
    }

    buttonCalc.addEventListener("click", function () {
        let salario = parseFloat(inputSalario.value);
        let resultado = calcularIRPF(salario);

        irpfShow.textContent = "Valor do IRPF a recolher: " + resultado.imposto;
        aliquotaShow.textContent = "Alíquota efetiva: " + resultado.aliquotaEfetiva;
    });

    buttonReset.addEventListener("click", function () {
        inputSalario.value = "";
        irpfShow.textContent = "Valor do IRPF a recolher:";
        aliquotaShow.textContent = "Alíquota efetiva:";
    });
});