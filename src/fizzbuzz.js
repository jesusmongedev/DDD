/* 
Escribir una funcion que al pasarle un numero devuelva:
    - "Fizz" si el número es divisible por 3
    - "Buzz" si el número es divisible por 5
    - "FizzBuzz" si el número es divisible por 3 y por 5 
    - El numero si no es divisible por ninguno de los anteriores
*/

export const fizzbuzz = (num) => {
  if (typeof num !== 'number') {
    throw new Error('You must provide a number')
  }
  if (Number.isNaN(num)) {
    throw new Error('You must provide a number')
  }

  const divisibles = { 3: 'fizz', 5: 'buzz', 7: 'woff' }
  let output = ''

  Object.entries(divisibles).forEach(([divider, word]) => {
    if (num % divider === 0) output += word
  })

  return output === '' ? num : output
}
