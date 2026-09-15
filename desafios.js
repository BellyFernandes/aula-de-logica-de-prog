alert('Bem vindos!');

let nome = 'Lua' ;
let idade = 25 ;
let numeroDeVendas = 50;
let saldoDisponivel = 1000;


let digiteSeuNome = prompt ('Digite seu nome: ') ;
alert ('Olá, '+ digiteSeuNome); 

let suaIdade = prompt ('Digite sua idade: ');
alert ('Essa idade  '+ suaIdade + 'é perfeita.');
if (suaIdade >= 18 ){
    alert ('Já pode tirar a habilitação')
}
else {
    alert ('É uma pena que não seja de maior ainda para tirar habilitação')
}

let mensagemErro = 'Erro! Preencha todos os campos';
alert (mensagemErro);
