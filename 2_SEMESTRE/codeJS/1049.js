var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

let x, y, z;
x = lines[0];
y = lines[1];
z = lines[2];

switch(x) {
    case 'vertebrado':
        switch(y) {
            case 'ave':
                switch(z) {
                    case 'carnivoro':
                    console.log('aguia')
                    break
                    case 'onivoro':
                    console.log('pomba')
                    break
                }
                break
            case 'mamifero':
                switch(z) {
                    case 'onivoro':
                    console.log('homem')
                    break
                    case 'herbivoro':
                    console.log('vaca')
                    break
                }
                break
        }
        break
    case 'invertebrado':
        switch(y) {
            case 'inseto':
                switch(z) {
                    case 'hematofago':
                    console.log('pulga')
                    break
                    case 'herbivoro':
                    console.log('lagarta')
                    break
                }
            break
            case 'anelideo':
                switch(z) {
                    case 'hematofago':
                    console.log('sanguessuga')
                    break
                    case 'onivoro':
                    console.log('minhoca')
                    break
                }
            break
        }  
}