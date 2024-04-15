import generationList from "./generation.js";
import heightList from "./height.js";
import weightList from "./weight.js";
import typesList from "./types.js";
import generationIndexList from "./generationIndex.js";
const search = document.getElementById("search");
const pokemonList = document.getElementById("pokemon-list");
const pokemonContainer = document.getElementById("pokemon-container");
const fromGen = document.getElementById("from-gen");
const toGen = document.getElementById("to-gen");
var randomPokemonDetails = {};
var chosenPokemonDetails = {};
var type1, type2, height, weight;
var matchCount = 0;

search.focus();

search.addEventListener("input", async () => {
  pokemonList.style.visibility = "visible";
  const searchTerm = search.value;
  if (searchTerm.length > 0) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon?limit=1025`
    );
    const data = await response.json();
    const matchingPokemon = data.results.filter((pokemon) =>
      pokemon.name.startsWith(searchTerm.toLowerCase())
    );
    displayPokemon(matchingPokemon);
  } else {
    pokemonList.style.visibility = "hidden";
    pokemonList.innerHTML = "";
  }
});

function displayPokemon(pokemon) {
  pokemonList.innerHTML = "";
  pokemon.forEach((p) => {
    const pokemonItem = document.createElement("div");
    pokemonItem.classList.add("pokemon-item");

    const pokemonItem1 = document.createElement("div");
    pokemonItem1.classList.add("pokemon-item-1");
    pokemonItem1.innerHTML = capitalizeFirstLetter(p.name);
    pokemonItem.appendChild(pokemonItem1);

    const pokemonItem2 = document.createElement("div");
    pokemonItem2.classList.add("pokemon-item-2");
    pokemonItem2.innerHTML = `Gen ${generationList[p.name]}, ${
      typesList[p.name][0]
    }, ${typesList[p.name][1]}, ${heightList[p.name]}m, ${
      weightList[p.name]
    }kg`;
    pokemonItem.appendChild(pokemonItem2);
    pokemonList.appendChild(pokemonItem);
  });
}

pokemonList.addEventListener("click", async (event) => {
  try {
    var clickedPokemonName = event.target.innerHTML;
    if (!/[,]/.test(clickedPokemonName)) {
      search.value = clickedPokemonName;
      clickedPokemonName =
        clickedPokemonName.charAt(0).toLowerCase() +
        clickedPokemonName.slice(1);
      chosenPokemonDetails = {
        name: capitalizeFirstLetter(clickedPokemonName),
        generation: `Gen ${generationList[clickedPokemonName]}`,
        type1: typesList[clickedPokemonName][0],
        type2: typesList[clickedPokemonName][1],
        height: heightList[clickedPokemonName],
        weight: weightList[clickedPokemonName],
      };
    } else {
      search.value = "";
    }
  } catch (error) {
    search.value = "";
  } finally {
    pokemonList.innerHTML = "";
  }
});

async function generateRandomPokemonDetails() {
  matchCount = 0;
  randomPokemonDetails = {};
  search.readOnly = false;

  const pokemonId =
    Math.floor(
      Math.random() *
        (generationIndexList[Number(toGen.value) + 1] -
          generationIndexList[fromGen.value])
    ) + generationIndexList[fromGen.value];

  try {
    const response = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
    );
    const data = await response.json();

    const name = data.name;

    type1 = typesList[name][0];
    type2 = typesList[name][1];
    height = heightList[name];
    weight = weightList[name];

    randomPokemonDetails = {
      name: capitalizeFirstLetter(name),
      generation: `Gen ${generationList[name]}`,
      type1: capitalizeFirstLetter(type1),
      type2: capitalizeFirstLetter(type2),
      height: height,
      weight: weight,
    };
  } catch (error) {
    console.error("Error fetching Pokémon details:", error);
  }
}

function displayMatchAndInformation(matchResult) {
  const mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");

  const circlesContainer = document.createElement("div");
  circlesContainer.classList.add("circles-container");

  for (const [detail, match] of Object.entries(matchResult)) {
    const circleDiv = document.createElement("div");
    circleDiv.classList.add("circle-div");

    switch (detail) {
      case "generation":
      case "height":
      case "weight":
        circleDiv.style.background =
          match === true
            ? "lime"
            : match === "less"
            ? "cyan"
            : match === "more"
            ? "yellow"
            : "red";
        break;
      default:
        circleDiv.style.background = match ? "lime" : "red";
    }

    const value =
      detail === "height"
        ? `${chosenPokemonDetails[detail]}m`
        : detail === "weight"
        ? `${chosenPokemonDetails[detail]}kg`
        : chosenPokemonDetails[detail];
    circleDiv.textContent = value;

    circlesContainer.appendChild(circleDiv);
  }

  const pokemonNameElement = document.createElement("div");
  pokemonNameElement.classList.add("pokemon-name");
  pokemonNameElement.textContent = chosenPokemonDetails.name;
  circlesContainer.appendChild(pokemonNameElement);

  mainContainer.appendChild(circlesContainer);
  pokemonContainer.appendChild(mainContainer);
}

function comparePokemonDetails(randomDetails, chosenDetails) {
  const maxCount = Number(toGen.value) - Number(fromGen.value) + 1;
  if (matchCount < maxCount) {
    if (randomDetails.generation === chosenDetails.generation) {
      var generationMatch = true;
    } else {
      if (randomDetails.generation < chosenDetails.generation) {
        var generationMatch = "less";
      } else {
        var generationMatch = "more";
      }
    }

    var type1Match = randomDetails.type1 === chosenDetails.type1;
    var type2Match = randomDetails.type2 === chosenDetails.type2;

    if (randomDetails.height === chosenDetails.height) {
      var heightMatch = true;
    } else {
      if (randomDetails.height < chosenDetails.height) {
        var heightMatch = "less";
      } else {
        var heightMatch = "more";
      }
    }

    if (randomDetails.weight === chosenDetails.weight) {
      var weightMatch = true;
    } else {
      if (randomDetails.weight < chosenDetails.weight) {
        var weightMatch = "less";
      } else {
        var weightMatch = "more";
      }
    }

    const allMatch =
      generationMatch && type1Match && type2Match && heightMatch && weightMatch;

    const matchResult = {
      generation: generationMatch,
      type1: type1Match,
      type2: type2Match,
      height: heightMatch,
      weight: weightMatch,
    };

    displayMatchAndInformation(matchResult);

    if (allMatch) {
      search.readOnly = true;
      pokemonContainer.innerHTML += `<p>The Pokemon was ${randomPokemonDetails.name}<p>`;
      matchCount = 0;
    }

    search.value = "";

    matchCount++;
  }
  if (matchCount === maxCount) {
    search.readOnly = true;
    pokemonContainer.innerHTML += `<p>The Pokemon was ${randomPokemonDetails.name}<p>`;
    matchCount = 0;
  }
}

generateRandomPokemonDetails();

// event listeners

document.getElementById("submit").addEventListener("click", () => {
  if (!chosenPokemonDetails || Object.keys(chosenPokemonDetails).length === 0) {
    return;
  } else {
    comparePokemonDetails(randomPokemonDetails, chosenPokemonDetails);
    pokemonList.style.visibility = "hidden";
    chosenPokemonDetails = {};
  }
});

document.getElementById("new-game").addEventListener("click", () => {
  pokemonList.innerHTML = "";
  pokemonContainer.innerHTML = "";
  chosenPokemonDetails = {};
  randomPokemonDetails = {};
  generateRandomPokemonDetails();
});

// helper functions

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
