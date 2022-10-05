const prompt = require("prompt-sync")()
const valor = Number(prompt("Valor: "))
const num = Number(prompt("Parcelas:"))
const parcelas = Math.floor(valor / num)
const resultado = parcelas + (valor % num)
for (let i = 1; i < num; i++) {
	console.log(`${i} parcela: ${parcelas.toFixed(2)}`)
}
console.log(`${num} parcela: ${resultado.toFixed(2)}`)