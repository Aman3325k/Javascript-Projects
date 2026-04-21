async function getpokemon(value) {

    const result = document.getElementById('result');
    
try{

    result.innerHTML = `<p>loading....</p>`
 
    const inputvalue = value || document.getElementById("input").value.trim().toLowerCase();

    if(!inputvalue)
    {
        result.innerHTML = `<p>Please enter a Pokemon name</p>`;
        return;
    }

    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputvalue}`);

    if(!response.ok)
    {
        throw new Error("Provide valid name");
    }

const data = await response.json();

console.log(data);



result.innerHTML = `

<h2>Name : ${data.name.toUpperCase()}</h2>
<h2> Male </h2>
<img src= "${data.sprites.front_default}">
<img src= "${data.sprites.back_default}">
<h2> Female </h2>
<img src= "${data.sprites.front_shiny}">
<img src= "${data.sprites.back_shiny}">
<h2>Weight: ${data.weight}</h2>
<h2>Base_Experience : ${data.base_experience}</h2>
`
}
catch(error)
{
    result.innerHTML=`<p>${error.message}</p>`;
}

}

getpokemon();

function randompokemon(){
    const maxpokemon = 898;
    const randomid = Math.floor(Math.random() * maxpokemon) + 1;
    input.value = randomid;
    getpokemon(randomid);
}

