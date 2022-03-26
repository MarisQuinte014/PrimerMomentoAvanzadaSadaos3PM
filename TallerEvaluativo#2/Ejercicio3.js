let nombres = ['grillo','tomate','Libelula','toro','lechuga','zanahoria','mosca','cocodrilo','caballo']
let alimentos = []

for(let i = 0; i < 50; i ++)
{
    let alimento = {}

    alimento.nombre = nombres[Math.floor(Math.random() * nombres.length)]

    if(alimento.nombre == 'grillo' || alimento.nombre == 'Libelula' || alimento.nombre == 'mosca'){
        alimento.tipo='insecto'
    }
    else if(alimento.nombre=='toro' || alimento.nombre=='cocodrilo' || alimento.nombre=='caballo'){
        alimento.tipo = 'animal'
    }
    else{
        alimento.tipo = 'vegetal'
    }

    alimento.niveldeEnergia = Math.floor(Math.random()*500)
    alimentos.push(alimento)
}


function recibirAlimentos(alimentos,callback){

    setTimeout(function(){        
        let alimentosFiltrados = alimentos.filter(function(alimento){
            return(alimento.tipo =='vegetal' && alimento.niveldeEnergia >= 200)
        })

        callback(alimentosFiltrados)

    },5000)
}
//LLAMADO A LA FUNCION PRINCIPAL
recibirAlimentos(alimentos,function(alimentosFiltrados){

    suma = 0
    alimentosFiltrados.forEach(function(alimentosFiltrados){
        suma = suma + alimentosFiltrados.niveldeEnergia;
    })

    console.log(alimentosFiltrados)
    
    console.log("Los niveles de energia de los vegetales mayor a 200 es de: " + suma)
})
