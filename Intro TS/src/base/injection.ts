import { PokeApiAdapter } from '../api/pokeApi.adapter';
import { PokeApiResponse } from '../interfaces/pokeapi-response.interface';

export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com${ this.id }.jpg`;
    }

    constructor(
        public readonly id:number, 
        public name: string, 
        public type: string,
        private readonly http: PokeApiAdapter //inyeccion de dependecias
    ) {}

    scream(): string {
        return `${this.name.toUpperCase()}!!!`;
    }

    speak(): string {
        return `${this.name}, ${this.type}`;
    }

    async getMoves() {
        const data = this.http.get<PokeApiResponse>('https://pokeapi.co/api/v2/pokemon/25');
        return data;
    }

}

const pokeApi = new PokeApiAdapter(); 

export const pokemon = new Pokemon (25, 'Pikachu', 'Electrico', pokeApi);
// console.log( pokemon.getMoves );
// pokemon.getMoves();