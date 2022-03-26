let salarioBase = 3500000
let comisionPorVenta = 1500000

//FUNCIÓN FLECHA
// let calcularSalarioPagar = navesVendidas => salarioBase + ((comisionPorVenta * navesVendidas) - ((comisionPorVenta * navesVendidas) * 5)/100)
// console.log(`El total de su salario este mes es de $`, calcularSalarioPagar(5))

//FUNCIÓN TRADICIONAL
function calcularSalarioPagar(navesVendidas){
    return salarioBase + ((comisionPorVenta * navesVendidas) - ((comisionPorVenta * navesVendidas) * 5)/100)
}
console.log(`El total de su salario este mes es de $`, calcularSalarioPagar(10))

