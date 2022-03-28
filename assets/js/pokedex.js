const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeN("Pokemon no encontrado")
            pokeImage("./assets/images/pokemon-sad.gif")

        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);

            let pokeNameR = data.name;
            pokeNameR=pokeNameR.toUpperCase();
            pokeN(pokeNameR);

            let pokID = data.id;
            pokeID(pokID);
            let ptype = data.types[0].type.name;
            pokeType(ptype);

            console.log(pokeImg);
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}
const pokeN = (String) => {
    
    const pokeNameR = document.getElementById("pokeNameR");
    pokeNameR.textContent = String;
  
}
function pokeID(String){
    const id = document.getElementById("pokeNumero");
    id.textContent = "N°" + String ;
}
function pokeType(String){
    const type = document.getElementById("pokeTipo");
    type.textContent = "Tipo" + String ;
}
