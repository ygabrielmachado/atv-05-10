const prompt = require("prompt-sync")()
console.log("Anos de copa. 0 para sair")
do {
	const ano = Number(prompt("Ano: "))
	if (ano == 0) {
		break

	} else if (ano == 1942 || ano == 1946) {
		console.log(`${ano} Foi um ano sem copa por conta da segunda guerra mundial`);
	} else if (ano >= 1930 && ano % 4 == 2) {
		console.log(`${ano} Foi um ano com copa`);
	}
	else {
		console.log(`${ano} Foi um ano sem copa`)
	}

} while (true)
