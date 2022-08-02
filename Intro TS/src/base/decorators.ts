
class newPokemon {

    constructor (
        public readonly id: number,
        public name: string
    ) {}

    scream() {
        console.log(`HI!!`);
    }

    speak() {
        console.log(`Hello`);
    }

}

const MyDecorator = () => {
    return ( target: Function ) => {
        // console.log(target);
        return newPokemon;
    }
}

@MyDecorator()
export class Pokemon {

    constructor (
        public readonly id: number,
        public name: string
    ) {}

    scream() {
        console.log(`${this.name.toUpperCase()}!!`);
    }

    speak() {
        console.log(`${this.name}`);
    }

}


export const pokemon = new Pokemon (4, 'Charmander');

pokemon.scream();
pokemon.speak();
