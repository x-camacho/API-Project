




async function getPokeData(e) {
    e.preventDefault();

    let input = $("#input").val();
    const url = `https://pokeapi.co/api/v2/pokemon/${input}`;
  
    // let randomGame = myArray[Math.floor(Math.random()*myArray.length)];
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    document.getElementById("pokeName").innerText = data.name;
    document.getElementById("pokeType").innerText = data.types[0].type.name;
    document.getElementById("pokedex").innerText = data.id;
    document.getElementById("sprite").src = data.sprites.front_default;

    let randomNumber = Math.floor(Math.random()*data.moves.length);
    document.getElementById("randomGame").innerText = data.moves[randomNumber].move.name;
    console.log(randomNumber);
}
$("#button").on("click", getPokeData);
