import { heroes } from "../data/heroes";

export const getHeroes = (publisher) =>  {

    const validPublisher = ['DC Comics', 'Marvel Comics']
    if(!validPublisher.includes(publisher)){
        throw new Error( `${publisher}Invalid publisher! Please provide either 'DC Comics' or 'Marvel Comics'.`)
    }
    return heroes.filter(heroe => heroe.publisher === publisher)
}