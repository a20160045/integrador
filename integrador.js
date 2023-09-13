alert("Bienvenidos al restaurant Hakka")
entrada=parseInt(prompt("Ingrese el valor de la entrada"))
segundo=parseInt(prompt("Ingrese el valor del segundo"))
postre=parseInt(prompt("Ingrese el valor del postre"))
total=entrada+segundo+postre
igv=total*18/100

console.log("El valor de la entrada es:",entrada)
console.log("El valor del seundo es:",segundo)
console.log("El valor del postre:",postre)
console.log("El valor del total:",total)
console.log("El costo del igv es:",total+igv)
vuelto=parseInt(prompt("El vuelto es"))
console.log("El vuelto es de:",vuelto)
