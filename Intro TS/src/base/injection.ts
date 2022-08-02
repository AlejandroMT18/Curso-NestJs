import { HttpAdapter, PokeApiAdapter, PokeApiFetchAdapter } from '../api/pokeApi.adapter';
import { Move, PokeApiResponse } from '../interfaces/pokeapi-response.interface';

export class Pokemon {

    get imageUrl(): string {
        return `https://pokemon.com${ this.id }.jpg`;
    }

    constructor(
        public readonly id:number, 
        public name: string, 
        public type: string,
        //inyeccion de dependecias
        private readonly http: HttpAdapter
    ) {}

    scream(): string {
        return `${this.name.toUpperCase()}!!!`;
    }

    speak(): string {
        return `${this.name}, ${this.type}`;
    }

    async getMoves(): Promise<Move[]> {
        const data = await this.http.get<PokeApiResponse>(
            'https://pokeapi.co/api/v2/pokemon/25'
        );
        return data.moves;
    }

}

const pokeApi = new PokeApiAdapter();
const pokeApiFetch = new PokeApiFetchAdapter();

export const pokemon = new Pokemon (
    25,
    'Pikachu',
    'Electrico',
    pokeApiFetch
    );

console.log( pokemon.getMoves );
pokemon.getMoves();
console.log(pokemon);
