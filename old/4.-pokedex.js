const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokemon-sad.gif")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.front_default;
            pokeImage(pokeImg);
            console.log(pokeImg);

            let poketipo = data.types[0].type.name;
            poke_tipo(poketipo);
            console.log(poketipo);

            try{
                let poketipo2 = data.types[1].type.name;
                poke_tipo2(poketipo2);
                console.log(poketipo2);
            }
            catch (e){
                let poketipo2 = "";
                poke_tipo2(poketipo2);
                console.log(poketipo2);
            }
        }
    });
}

const pokeImage = (url) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = url;
}

const poke_tipo = (url) => {
    const pokeType = document.getElementById("poketype");
    pokeType.innerHTML = url;
}

const poke_tipo2 = (url) => {
    const pokeType = document.getElementById("poketype2");
    pokeType.innerHTML = url;
    console.log(url);
}

