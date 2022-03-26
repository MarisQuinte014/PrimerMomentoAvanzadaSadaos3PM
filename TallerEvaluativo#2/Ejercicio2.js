function recibirPlano(n1,n2,n3,n4,n5,n6,n7,n8,n9,n10,callback){
    setTimeout(function(){
        planos = [n1,n2,n3,n4,n5,n6,n7,n8,n9,n10]
        planosFiltrados = planos.filter(function(plano){
            return(plano >=1 && plano <=10)
        })
        callback(planosFiltrados)
    },5000);
}

recibirPlano(5,13,14,700,383,934,3,84,92,984,function(planosFiltrados){
    if(planosFiltrados.length > 0){
        console.log("¡Coreeeee! hay " + planosFiltrados.length + " planos")
    }else{
        console.log(`oh shits here go again`)
    }
})