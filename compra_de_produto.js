/* 3)  Elabore um algotmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta 
e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a consição de pagamento escolhida e efetuar o calculo
adequado.

Código, condição de pagamento:
- Á vista Débito, recebe 10% de desconto.
- Á vista no dinheiro ou pix, recebe 15% de desconto.
- Em duas vezes no crédito, preço sem desconto sem juros.
- Acima de duas vezes no crédito, preço normal da etiqueta, mais juros de 10%
*/

let precoEtiqueta = 150;
let condicaoDePagamento = 4;
if(condicaoDePagamento === 1){
    console.log(precoEtiqueta - (precoEtiqueta * 0.1));
}else if(condicaoDePagamento === 2){
    console.log(precoEtiqueta - (precoEtiqueta * 0.15));
}else if(condicaoDePagamento === 3){
    console.log(precoEtiqueta);
}else {
    console.log(precoEtiqueta + (precoEtiqueta * 0.1));
}
