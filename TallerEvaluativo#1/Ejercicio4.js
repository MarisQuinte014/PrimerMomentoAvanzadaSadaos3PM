let sablesDeLuz = [
    {
        color:"Rosado",
        energia: 21,
        portador: "Mariana"
    },
    {
        color:"Verde",
        energia: 56,
        portador: "Mila"
    },
    {
        color:"Rojo",
        energia: -1,
        portador: "Myke"
    },
    {
        color:"Amarillo",
        energia: 10,
        portador: "Lina"
    },
    {
        color:"Azul",
        energia: 12788,
        portador: "Otoniel"
    },
    {
        color:"Cafe",
        energia: 7,
        portador: "Santiago"
    },
    {
        color:"Morado",
        energia: 23,
        portador: "Mateo"
    },
    {
        color:"Gris",
        energia: 2,
        portador: "Beatriz"
    },
    {
        color:"Fucsia",
        energia: 33,
        portador: "Beatriz"
    },
    {
        color:"Verde",
        energia: 64,
        portador: "Beatriz"
    },
    {
        color:"Naranjado",
        energia: 12,
        portador: "Beatriz"
    },
    {
        color:"Negro",
        energia: 55,
        portador: "Beatriz"
    },
    {
        color:"Blanco",
        energia: 95,
        portador: "Beatriz"
    },
    {
        color:"Gris",
        energia: 67,
        portador: "Beatriz"
    },
    {
        color:"Marrón",
        energia: 96,
        portador: "Beatriz"
    },
    {
        color:"Mostaza",
        energia: 2,
        portador: "Beatriz"
    },
    {
        color:"Azul Cielo",
        energia: 11,
        portador: "Beatriz"
    },
    {
        color:"Gris",
        energia: 2,
        portador: "Beatriz"
    },
    {
        color:"Verde Morado",
        energia: 93,
        portador: "Beatriz"
    },
    {
        color:"Costal",
        energia: 21,
        portador: "Beatriz"
    }
]

let contadorSables = sablesDeLuz.filter(sable => sable.energia < 20)
console.log(`La cantidad de sables de luz con energia menor a 20 es de ${contadorSables}`)