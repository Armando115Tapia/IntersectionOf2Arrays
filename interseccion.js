let habEmpleada = ["Planchar", "Mascotas","Lavar"];
let habServicio = ["Planchar", "Lavar"];
let aux = [];

aux = habEmpleada.filter(data => -1 !== habServicio.indexOf(data));

if( JSON.stringify(habServicio) === JSON.stringify(aux)){
    console.log("Esta es la correcta");
}

console.log(aux );