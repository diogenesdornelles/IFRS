let maior, menor, medio

const a = 9
const b = 1
const c = 1

if (a > b) {
  maior = a
  menor = b
} else {
  menor = a
  maior = b
}

if (c > maior) {
  maior = c
  if (a > b) {
    medio = a
    menor = b
  } else {
    medio = b
    menor = a
  }
}

if (c < maior && c > menor) {
  medio = c
}

if (c < menor) {
  menor = c
  if (a > b) {
    medio = b
  } else {
    medio = a
  }
}

console.log(menor, medio, maior)
