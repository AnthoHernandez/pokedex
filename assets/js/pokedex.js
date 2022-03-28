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

            clearL()
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
            let altura = data.height;
            altura= altura *.100
            pokepHe(altura);
            let peso = data.weight;
            peso=peso*.100
            pokepWi(peso);
            let st1 =data.stats[0].base_stat;
            let st2 =data.stats[1].base_stat;
            let st3 =data.stats[2].base_stat;
            let st4 =data.stats[3].base_stat;
            let st5 =data.stats[4].base_stat;
            let st6 =data.stats[5].base_stat;
            pokeStats(st1,st2,st3,st4,st5,st6)            
        }
    });
}
const pokeStats = (stat1,stat2, stat3, stat4,stat5,stat6) => {
    
    const st0 = document.getElementById("stats");
    st0.textContent = "Stats";
    const st1 = document.getElementById("stat1");
    st1.textContent = "HP: "+ stat1;
    const st2 = document.getElementById("stat2");
    st2.textContent = "Attack: "+ stat2;
    const st3 = document.getElementById("stat3");
    st3.textContent = "Defense: "+ stat3;
    const st4 = document.getElementById("stat4");
    st4.textContent = "Special-attack: "+ stat4;
    const st5 = document.getElementById("stat5");
    st5.textContent = "Sspecial-defense: "+ stat5;
    const st6 = document.getElementById("stat6");
    st6.textContent = "Speed: "+ stat6;
}
const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const pokeN = (String) => {
    
    const pokeNameR = document.getElementById("pokeNameR");
    pokeNameR.textContent = String;
  
}
const pokeID = (String) =>{
    const id = document.getElementById("pokeNumero");
    id.textContent = "N° " + String ;

}
const pokeType = (String)=>{
    const type = document.getElementById("pokeTipo");
    type.textContent = "Tipo: " + String ;
    
}
const pokepHe = (String)=>{
    const altura = document.getElementById("pHe");
 
    altura.textContent = "Altura: " + String + " m.  " ;

}
const pokepWi = (String)=>{
    const peso = document.getElementById("pWi");
    peso.textContent = "Peso: " + String + " Kg. " ;

}
const clearL = ()=>{
    const id = document.getElementById("pokeNumero");
    id.textContent =" ";

    const type = document.getElementById("pokeTipo");
    type.textContent =" ";
        
    const altura = document.getElementById("pHe");
    altura.textContent =" ";
    const peso = document.getElementById("pWi");
    peso.textContent =" ";


    const st0 = document.getElementById("stats");
    st0.textContent = " ";
    const st1 = document.getElementById("stat1");
    st1.textContent = " ";
    const st2 = document.getElementById("stat2");
    st2.textContent = " ";
    const st3 = document.getElementById("stat3");
    st3.textContent = " ";
    const st4 = document.getElementById("stat4");
    st4.textContent = " " ;
    const st5 = document.getElementById("stat5");
    st5.textContent = " ";
    const st6 = document.getElementById("stat6");
    st6.textContent = " ";
    
}

