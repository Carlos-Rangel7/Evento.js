let idade = 19
let listaParticipantes = 115
let dataEventoString = new Date("2022-09-15")
let dataHoje = new Date()

console.log("A data de hoje eh:", dataHoje)
console.log("A data do evento eh:", dataEventoString)

if(dataEventoString > dataHoje) {
    console.log("Cadastro permitido prossiga")
} else {
    console.log("Cadastro encerrado volte a o inicio")
}
if(idade >= 18) { 
    console.log("Pode ser cadastrar ")
} else {
    console.log("Cadastro não permitido idade invalida")
}
if(listaParticipantes <= 100) {
    console.log("Cadastro permitido, Bom evento")
} else {
    console.log("Cadastro negado limite de participantes execedido")
}
