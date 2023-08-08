import axios from 'axios'

const pokeApiUrl = 'https://pokeapi.co/api/v2'

// POKEMON

// Returns a pokemon with a matching name
export const getPokemonByName = async (pokemonName) => {
  try {
    const response = axios.get(`${pokeApiUrl}/pokemon${pokemonName}`)

    return response.data
  } catch (error) {
    console.log(`Unable to fetch pokemon: ${error}`)
  }
}

// GENERATIONS

// Returns a list of generations
// @see https://pokeapi.co/docs/v2#generations
export const getGenerationList = async () => {
  try {
    const response = axios.get(`${pokeApiUrl}/generation`)

    return response.data
  } catch (error) {
    console.log(`Unable to fetch generations: ${error}`)
  }
}

// Returns data related to a generation
// @see https://pokeapi.co/docs/v2#generations
export const getGeneration = async (generationName) => {
  try {
    const response = axios.get(`${pokeApiUrl}/generation/${generationName}}`)

    return response.data
  } catch (error) {
    console.log(`Unable to fetch generations: ${error}`)
  }
}

// Returns a list of pokdexes
// @see https://pokeapi.co/docs/v2#pokedexes
export const getPokedexList = async () => {
  try {
    const response = axios.get(`${pokeApiUrl}/pokedex/`)

    return response.data
  } catch (error) {
    console.log(`Unable to fetch pokedexes: ${error}`)
  }
}

// Returns data related to a pokedex
// @see https://pokeapi.co/docs/v2#pokedexes
export const getPokedex = async (pokedexNumber) => {
  try {
    const response = axios.get(`${pokeApiUrl}/pokedex/${pokedexNumber}`)

    return response.data
  } catch (error) {
    console.log(`Unable to fetch pokedexes: ${error}`)
  }
}

// REGIONS

// Returns a list of all regions
// @see https://pokeapi.co/docs/v2#regions
export const getRegionList = async () => {
  try {
    const response = axios.get(`${pokeApiUrl}/region`)

    return response.data
  } catch (error) {
    console.log(`Unable to fetch regions: ${error}`)
  }
}

// Returns a list of locations found in a region
// @see https://pokeapi.co/docs/v2#regions
export const getRegionLocations = async (regionName) => {
  try {
    const response = axios.get(`${pokeApiUrl}/region/${regionName}`)

    return response.data
  } catch (error) {
    console.log(`Unable to fetch region locations: ${error}`)
  }
}

// Version

// Returns a list of versions of games
// @see https://pokeapi.co/docs/v2#version
export const getVersionList = async () => {
  try {
    const response = axios.get(`${pokeApiUrl}/version/`)

    return response.data
  } catch (error) {
    console.log(`Unable to fetch versions: ${error}`)
  }
}

// Returns a list of versions of games
// @see https://pokeapi.co/docs/v2#version
export const getVersion = async (versionName) => {
  try {
    const response = axios.get(`${pokeApiUrl}/version/${versionName}`)

    return response.data
  } catch (error) {
    console.log(`Unable to fetch version: ${error}`)
  }
}
