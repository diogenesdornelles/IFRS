// Glória have to choose any number N, which will be added, then for each coin N the value of the coin Vi is added 
// until there aren’t no more coins, in other words Ʃ of ((VM-(N*0) )+(VM-(N*1))+(VM-(N*2))...), 
// M it’s the number of coins. For exemple, if there’re 5 coins with values 1, 2, 3, 4 and 5, 
// and Glória choose 2 as a number of jump, them the coins will be added 5, 3 and 1, result in 9. 
//In the end, Robbie checks if the sum of these coins is a prime number, if this happen, he do what Glória want, 
// if doesn’t happen, the little girl convince Robbie to play again, Cause she Always convince him to do everything, 
// saying that will stop to tell him stories, if he doesn’t make her wish.

// escolha N 

// adicionado ao V da moeda, até que não exista mais moedas. Existe um 

//  Ʃ of ((VM-(N*0) )+(VM-(N*1))+(VM-(N*2))...)

var input = require('fs').readFileSync('stdin', 'utf-8');
var lines = input.split('\n');

const values = lines.map(v => Math.abs(Number(v)));

const nCoins = values.shift()

const jump = values.pop()

const arrayRange = (start = 0, end, step = 1) => {
    let arr = []
    for (let i = start; i < end; i += step) {
        arr.push(i)
    }
    return arr
}

const arrayCoins = arrayRange(0, nCoins, jump)
console.log(arrayCoins)