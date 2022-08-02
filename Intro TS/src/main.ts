import './style.css'
//  import typescriptLogo from './typescript.svg'
// import { setupCounter } from './counter';
import { pokemonIds, niño } from './base/Objects&interfaces';
import { pokemon } from './base/clases';

document.querySelector<HTMLDivElement>('#types')!.innerHTML = `
        <h2>
            ${ pokemonIds.join(',') }
        </h2>
`

document.querySelector<HTMLDivElement>('#Objs')!.innerHTML = `
        <h2>
            ${ 
                'id: ' + niño.id + ', name: ' + niño.name + 
                '<br>' +
                JSON.stringify(niño)
            }
        </h2>
`

document.querySelector<HTMLDivElement>('#classes')!.innerHTML = `
        <h2>
            ${ JSON.stringify( pokemon ) }
        </h2>
`

// pokemon.scream();
// pokemon.speak();

// setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
