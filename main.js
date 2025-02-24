 
function percentual(input1,input2){
    var input1 = parseFloat(document.getElementById("input1").value || 0);
    var input2 = parseFloat(document.getElementById("input2").value || 0);

    var result = input1/100 * input2;

    document.getElementById("input3").innerText = result;
}


function representacao(input4,input5){
    var input4 = parseFloat(document.getElementById("input4").value);
    var input5 = parseFloat(document.getElementById("input5").value);

    if (input5 == 0){
      document.getElementById("input6").innerText =  "Erro: o total não pode ser zero.";
    }else{
    var result2 = (input4/input5 * 100).toFixed(1) + "%";
    document.getElementById("input6").innerText = result2;
    }

}

function aumento(input7,input8){
    var input7 = parseFloat(document.getElementById("input7").value);
    var input8 = parseFloat(document.getElementById("input8").value);

    var dif = input8 - input7;
    var result3 = (dif*100/input7)

    document.getElementById("input9").innerText = result3+"% de aumento";

}

function diminui(input10,input11){
    var input10 = parseFloat(document.getElementById("input10").value);
    var input11 = parseFloat(document.getElementById("input11").value);

    var dif = input10 - input11;
    var result4 = (dif*100/input10);

    document.getElementById("input12").innerText = result4+"%";
}

function razao(input13,input14){
    var input13 = parseFloat(document.getElementById("input13").value);
    var input14 = parseFloat(document.getElementById("input14").value);

    var result5 = (input13/input14 * 100)

    document.getElementById("input15").innerText = result5+"%";
}

function aumento2(input16,input17){
    var input16 = parseFloat(document.getElementById("input16").value);
    var input17 = parseFloat(document.getElementById("input17").value);

    var calc = input17/100 * input16;

    var result6 =  (input16 + calc);

    document.getElementById("input18").innerText = result6;
}


function diminui2(input19,input20){
    var input19 = parseFloat(document.getElementById("input19").value);
    var input20 = parseFloat(document.getElementById("input20").value);

    var calc = input19/100 * input20;

    var result6 =  (input19 - calc);

    document.getElementById("input21").innerText = result6;
}

function valorInicial(input22,input23){
    var input22 = parseFloat(document.getElementById("input22").value);
    var input23 = parseFloat(document.getElementById("input23").value);
    
    var vinicial = input23 / (1 + input22 / 100);

    
    document.getElementById("input24").innerText = vinicial.toFixed(1);

}

function valorInicial2(input25,input26){
    var input25 = parseFloat(document.getElementById("input25").value);
    var input26 = parseFloat(document.getElementById("input26").value);
    
    var vinicial = input26 / (1 - input25 / 100);

    document.getElementById("input27").innerText = vinicial.toFixed(1);

}

function salario_bruto(){
    var salario_bruto = parseFloat(document.getElementById("salario").value);

    return salario_bruto;
}



function calcular_INSS(){
    var desconto = 0;
    var salario = salario_bruto();

    if (salario <= 1412) {
        desconto = salario * 0.075;
    } else if (salario <= 2666.68) {
        desconto = (1412 * 0.075) + ((salario - 1412) * 0.09);
    } else if (salario <= 4000.03) {
        desconto = (1412 * 0.075) + ((2666.68 - 1412) * 0.09) + ((salario - 2666.68) * 0.12);
    } else {
        desconto = (1412 * 0.075) + ((2666.68 - 1412) * 0.09) + ((4000.03 - 2666.68) * 0.12) + ((salario - 4000.3) * 0.14);
    }

    var desconto_INSS = desconto.toFixed(2);
    // document.getElementById("spaninss").innerText = desconto_INSS;

    return desconto_INSS;
}

function retorno_INSS() {

    var salario_INSS = salario_bruto() - calcular_INSS();
    return salario_INSS;
}


function calcular_IRRF(){
    var desconto = 0;
    var salario2 = retorno_INSS();
     
    if(salario2 <= 2259.20){
        desconto;
    } else if(salario2 >= 2259.21 && salario2 <= 2826.65){
        desconto = (0.075 * salario2 - 169.44);
    } else if(salario2 >= 2826.66 && salario2 <= 3751.05){
        desconto = (0.15 * salario2 - 381.44);
    } else if (salario2 >= 3751.06 && salario2 <=4664.68){
        desconto = (0.225 * salario2 - 662.77);
    } else {
        desconto = (0.275 * salario2 - 896)
    }

     var desconto_IRRF = desconto.toFixed(2);
    //  document.getElementById("spanirrf").innerText = desconto_IRRF;

     return salario2 - desconto;
}

function salario_liquido(){

    
    var liquido = calcular_IRRF();
    document.getElementById("liquido").innerText = liquido.toFixed(2);
}

 



 
 


 

 


