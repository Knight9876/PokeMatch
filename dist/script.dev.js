"use strict";

var _generation = _interopRequireDefault(require("./generation.js"));

var _height = _interopRequireDefault(require("./height.js"));

var _weight = _interopRequireDefault(require("./weight.js"));

var _types = _interopRequireDefault(require("./types.js"));

var _generationIndex = _interopRequireDefault(require("./generationIndex.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var search = document.getElementById("search");
var pokemonList = document.getElementById("pokemon-list");
var pokemonContainer = document.getElementById("pokemon-container");
var fromGen = document.getElementById("from-gen");
var toGen = document.getElementById("to-gen");
var randomPokemonDetails = {};
var chosenPokemonDetails = {};
var type1, type2, height, weight;
var matchCount = 0;
search.focus();
search.addEventListener("input", function _callee() {
  var searchTerm, response, data, matchingPokemon;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          pokemonList.style.visibility = "visible";
          searchTerm = search.value;

          if (!(searchTerm.length > 0)) {
            _context.next = 13;
            break;
          }

          _context.next = 5;
          return regeneratorRuntime.awrap(fetch("https://pokeapi.co/api/v2/pokemon?limit=1025"));

        case 5:
          response = _context.sent;
          _context.next = 8;
          return regeneratorRuntime.awrap(response.json());

        case 8:
          data = _context.sent;
          matchingPokemon = data.results.filter(function (pokemon) {
            return pokemon.name.startsWith(searchTerm.toLowerCase());
          });
          displayPokemon(matchingPokemon);
          _context.next = 15;
          break;

        case 13:
          pokemonList.style.visibility = "hidden";
          pokemonList.innerHTML = "";

        case 15:
        case "end":
          return _context.stop();
      }
    }
  });
});

function displayPokemon(pokemon) {
  pokemonList.innerHTML = "";
  pokemon.forEach(function (p) {
    var pokemonItem = document.createElement("div");
    pokemonItem.classList.add("pokemon-item");
    var pokemonItem1 = document.createElement("div");
    pokemonItem1.classList.add("pokemon-item-1");
    pokemonItem1.innerHTML = capitalizeFirstLetter(p.name);
    pokemonItem.appendChild(pokemonItem1);
    var pokemonItem2 = document.createElement("div");
    pokemonItem2.classList.add("pokemon-item-2");
    pokemonItem2.innerHTML = "Gen ".concat(_generation["default"][p.name], ", ").concat(_types["default"][p.name][0], ", ").concat(_types["default"][p.name][1], ", ").concat(_height["default"][p.name], "m, ").concat(_weight["default"][p.name], "kg");
    pokemonItem.appendChild(pokemonItem2);
    pokemonList.appendChild(pokemonItem);
  });
}

pokemonList.addEventListener("click", function _callee2(event) {
  var clickedPokemonName;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          try {
            clickedPokemonName = event.target.innerHTML;

            if (!/[,]/.test(clickedPokemonName)) {
              search.value = clickedPokemonName;
              clickedPokemonName = clickedPokemonName.charAt(0).toLowerCase() + clickedPokemonName.slice(1);
              chosenPokemonDetails = {
                name: capitalizeFirstLetter(clickedPokemonName),
                generation: "Gen ".concat(_generation["default"][clickedPokemonName]),
                type1: _types["default"][clickedPokemonName][0],
                type2: _types["default"][clickedPokemonName][1],
                height: _height["default"][clickedPokemonName],
                weight: _weight["default"][clickedPokemonName]
              };
            } else {
              search.value = "";
            }
          } catch (error) {
            search.value = "";
          } finally {
            pokemonList.innerHTML = "";
          }

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
});

function generateRandomPokemonDetails() {
  var pokemonId, response, data, name;
  return regeneratorRuntime.async(function generateRandomPokemonDetails$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          matchCount = 0;
          randomPokemonDetails = {};
          search.readOnly = false;
          pokemonId = Math.floor(Math.random() * (_generationIndex["default"][Number(toGen.value) + 1] - _generationIndex["default"][fromGen.value])) + _generationIndex["default"][fromGen.value];
          _context3.prev = 4;
          _context3.next = 7;
          return regeneratorRuntime.awrap(fetch("https://pokeapi.co/api/v2/pokemon/".concat(pokemonId)));

        case 7:
          response = _context3.sent;
          _context3.next = 10;
          return regeneratorRuntime.awrap(response.json());

        case 10:
          data = _context3.sent;
          name = data.name;
          type1 = _types["default"][name][0];
          type2 = _types["default"][name][1];
          height = _height["default"][name];
          weight = _weight["default"][name];
          randomPokemonDetails = {
            name: capitalizeFirstLetter(name),
            generation: "Gen ".concat(_generation["default"][name]),
            type1: capitalizeFirstLetter(type1),
            type2: capitalizeFirstLetter(type2),
            height: height,
            weight: weight
          };
          _context3.next = 22;
          break;

        case 19:
          _context3.prev = 19;
          _context3.t0 = _context3["catch"](4);
          console.error("Error fetching Pokémon details:", _context3.t0);

        case 22:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[4, 19]]);
}

function displayMatchAndInformation(matchResult) {
  var mainContainer = document.createElement("div");
  mainContainer.classList.add("main-container");
  var circlesContainer = document.createElement("div");
  circlesContainer.classList.add("circles-container");

  for (var _i = 0, _Object$entries = Object.entries(matchResult); _i < _Object$entries.length; _i++) {
    var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        detail = _Object$entries$_i[0],
        match = _Object$entries$_i[1];

    var circleDiv = document.createElement("div");
    circleDiv.classList.add("circle-div");

    switch (detail) {
      case "generation":
      case "height":
      case "weight":
        circleDiv.style.background = match === true ? "lime" : match === "less" ? "cyan" : match === "more" ? "yellow" : "red";
        break;

      default:
        circleDiv.style.background = match ? "lime" : "red";
    }

    var value = detail === "height" ? "".concat(chosenPokemonDetails[detail], "m") : detail === "weight" ? "".concat(chosenPokemonDetails[detail], "kg") : chosenPokemonDetails[detail];
    circleDiv.textContent = value;
    circlesContainer.appendChild(circleDiv);
  }

  var pokemonNameElement = document.createElement("div");
  pokemonNameElement.classList.add("pokemon-name");
  pokemonNameElement.textContent = chosenPokemonDetails.name;
  circlesContainer.appendChild(pokemonNameElement);
  mainContainer.appendChild(circlesContainer);
  pokemonContainer.appendChild(mainContainer);
}

function comparePokemonDetails(randomDetails, chosenDetails) {
  var maxCount = Number(toGen.value) - Number(fromGen.value) + 1;

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

    var allMatch = generationMatch && type1Match && type2Match && heightMatch && weightMatch;
    var matchResult = {
      generation: generationMatch,
      type1: type1Match,
      type2: type2Match,
      height: heightMatch,
      weight: weightMatch
    };
    displayMatchAndInformation(matchResult);

    if (allMatch) {
      search.readOnly = true;
      pokemonContainer.innerHTML += "<p>The Pokemon was ".concat(randomPokemonDetails.name, "<p>");
      matchCount = 0;
    }

    search.value = "";
    matchCount++;
  }

  if (matchCount === maxCount) {
    search.readOnly = true;
    pokemonContainer.innerHTML += "<p>The Pokemon was ".concat(randomPokemonDetails.name, "<p>");
    matchCount = 0;
  }
}

generateRandomPokemonDetails(); // event listeners

document.getElementById("submit").addEventListener("click", function () {
  if (!chosenPokemonDetails || Object.keys(chosenPokemonDetails).length === 0) {
    return;
  } else {
    comparePokemonDetails(randomPokemonDetails, chosenPokemonDetails);
    pokemonList.style.visibility = "hidden";
    chosenPokemonDetails = {};
  }
});
document.getElementById("new-game").addEventListener("click", function () {
  pokemonList.innerHTML = "";
  pokemonContainer.innerHTML = "";
  chosenPokemonDetails = {};
  randomPokemonDetails = {};
  generateRandomPokemonDetails();
}); // helper functions

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}