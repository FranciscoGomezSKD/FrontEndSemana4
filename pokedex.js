var styles = "@import url(' ./estilo.css ');";
   var newSS=document.createElement('link');
   newSS.rel='stylesheet';
   newSS.href='data:text/css,'+escape(styles);

const fetchPokemon = () => {
    eliminarElemento();
    
    const pokeNameInput = document.getElementById("pokeName");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./pokeball.png")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.other["official-artwork"].front_default;
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

            let pokname = data.name;
            poke_nm(pokname);

            let poknum = data.order;
            poke_order(poknum);

            let pokest1 = data.stats[0].base_stat;
            poke_st1(pokest1);

            let pokest2 = data.stats[1].base_stat;
            poke_st2(pokest2);

            let pokest3 = data.stats[2].base_stat;
            poke_st3(pokest3);

            let pokest4 = data.stats[3].base_stat;
            poke_st4(pokest4);

            let pokest5 = data.stats[4].base_stat;
            poke_st5(pokest5);

            // let moves = data.moves;
            // let cantidad = data.moves.length;
            // genera_tabla(moves, cantidad); 

            let pokeability = data.abilities;
            let numability = data.abilities.length;
            genera_div(pokeability,numability);
        }
    });
}

const pokeImage = (url) => {
    
    let dir = "test.png";
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src= url;
    let vvv= "./test.png";
    //pokePhoto.src = url;
}

const poke_tipo = (url) => {
    const pokeType = document.getElementById("poketype");
    pokeType.innerHTML = url;
}

const poke_order = (url) => {
    const pokeorder = document.getElementById("pokeOrder");
    pokeorder.innerHTML = url;
}

const poke_tipo2 = (url) => {
    const pokeType = document.getElementById("poketype2");
    pokeType.innerHTML = url;
    console.log(url);
}

const poke_st1 = (url) => {
    const pokeStat1 = document.getElementById("attack");
    pokeStat1.innerHTML = url;
}

const poke_st2 = (url) => {
    const pokeStat2 = document.getElementById("defense");
    pokeStat2.innerHTML = url;
}

const poke_st3 = (url) => {
    const pokeStat3 = document.getElementById("special-attack");
    pokeStat3.innerHTML = url;
}

const poke_st4 = (url) => {
    const pokeStat4 = document.getElementById("special-defense");
    pokeStat4.innerHTML = url;
}

const poke_st5 = (url) => {
    const pokeStat5 = document.getElementById("speed");
    pokeStat5.innerHTML = url;
}

const poke_nm = (url) => {
    const pokeNombre = document.getElementById("poke_Name");
    pokeNombre.innerHTML = url;
}

function genera_tabla(url, cantidad) {
    let table = document.createElement('table');
    // let thead = document.createElement('thead');
    let tbody = document.createElement('tbody');

    table.setAttribute("id", "idtable");
    table.appendChild(tbody);

    // Adding the entire table to the body tag
    document.getElementById('Table').appendChild(table);

    // try{
    //     let cantidad = url.length;
    // }catch (e){}
    console.log(cantidad);
    // Creating and adding data to second row of the table
    for(var i=0; i<cantidad; i++)
    {
        try{
            let row_1 = document.createElement('tr');
            let row_1_data_1 = document.createElement('td');
            row_1_data_1.innerHTML = url[i].move.name;

            row_1.appendChild(row_1_data_1);
            tbody.appendChild(row_1);
        }catch (e){}    
        
    }
  }

  function genera_div(url, cantidad){
      for(var i=0; i<cantidad; i++)
      {
            let div1 = document.createElement('div');
            let div2 = document.createElement('div');

            div1.setAttribute('id','PokeAbility');
            div1.setAttribute('class','statCont2');
            div2.setAttribute('class','textAbility');

            div1.appendChild(div2);
            div2.innerHTML = url[i].ability.name;

            document.getElementById('pokestats').appendChild(div1);
      }  
    }

  function eliminarElemento(){
	imagen = document.getElementById("pokestats");	

    try{
        padre = imagen.parentNode;
        padre.removeChild(imagen);
    }
    catch (e){}
    
    let div1 = document.createElement('div');
    div1.setAttribute('id','pokestats');
    div1.setAttribute('class','panel3StatsCont');
    padre.appendChild(div1);
}