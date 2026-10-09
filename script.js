// console.log("hola mundo")

const saludo = () => {

    console.log(" Hola Usuario");

    setTimeout ( () => {
        console.log("Esto se demoro 2 Segundo en aparecer")
    }, 2000);
    
    console.warn("Error, amig@");

}

const traerDatos = async () => {
    const url = "https://jsonplaceholder.typicode.com/users";
    const dataFetch = await fetch(url);
    const data = await dataFetch.json();

    console.log(data)

}

const traerFotos = async () => {
    const url = "https://jsonplaceholder.typicode.com/photos";
    const fotoFetch = await fetch(url);
    const fotos = await fotoFetch.json();

    console.log(fotos)
}


const 