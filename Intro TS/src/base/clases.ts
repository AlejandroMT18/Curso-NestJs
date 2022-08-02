import axios from 'axios';
import { PokeApiResponse } from '../interfaces/pokeapi-response.interface';

export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com${ this.id }.jpg`;
    }

    constructor(
        public readonly id:number, 
        public name: string, 
        public type: string
    ) {}

    scream() {
        console.log(`${this.name.toUpperCase()}!!!`);
    }

    speak() {
        console.log(`${this.name}, ${this.type}`);
    }

    async getMoves() {
        const { data } = await axios.get<PokeApiResponse>('https://pokeapi.co/api/v2/pokemon/25');
        console.log(data.moves);
        return data;
    }

}

export const pokemon = new Pokemon (25, 'Pikachu', 'Electrico');
console.log( pokemon.getMoves );
pokemon.getMoves();

