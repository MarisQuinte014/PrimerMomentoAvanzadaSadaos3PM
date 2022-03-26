function recibirAprendiz(nombre,planeta,edad,estatura,callback){

    setTimeout(function(){
        let aprendiz = {nombre,planeta,edad,estatura}
        callback(aprendiz)
    }, 10000);
}

recibirAprendiz("Mariana","NABOO",20,"1.60",function(aprendiz){
    if(aprendiz.edad < 15){
        console.log("Te recomiendo el manejo de la fuerza")
    }else{
        console.log("Te recomiendo el manejo del sable de luz")
    }
})