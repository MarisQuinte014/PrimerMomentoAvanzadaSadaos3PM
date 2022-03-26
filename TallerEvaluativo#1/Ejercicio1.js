//FUNCIÓN FLECHA

let calcularDistancia = (x1,y1,x2,y2) => Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2))
console.log(`la distancia calculada es: `, (calcularDistancia(0,0,70,-50)).toFixed(2))


//FUNCION TRADICIONAL

/*function calcularDistancia(x1,y1,x2,y2){
    return Math.sqrt(Math.pow((x2 - x1),2) + Math.pow((y2 - y1),2))
}

console.log("La distancia a la que se encuentra del planeta NABOO es de " + calcularDistancia(0,0,70,-50).toFixed(2))*/
