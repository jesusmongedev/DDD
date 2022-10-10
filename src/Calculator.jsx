import { evaluate } from 'mathjs'
import { useState } from 'react'

export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
export const rows = [
  ['%', '÷'],
  ['7', '8', '9', '*'],
  ['4', '5', '6', '-'],
  ['1', '2', '3', '+'],
  ['0', '.'],
]

export const equalSign = '='
export const clearSign = 'C'
export const changeSign = '±'

export const Calculator = () => {
  const [value, setValue] = useState('')
  const handleClick = (_op) => () => setValue(value.concat(_op))
  const toggleSign = () => setValue(value * -1)

  return (
    <section>
      <h1>Calculator</h1>
      <input value={value} readOnly />
      <div role="grid">
        {rows.map((row, i) => (
          <div key={i} role="row">
            {row.map((op, j) => (
              <button onClick={handleClick(op)} key={j}>
                {op}
              </button>
            ))}
          </div>
        ))}
        <button onClick={() => setValue('')}>{clearSign}</button>
        <button onClick={toggleSign}>{changeSign}</button>
        <button onClick={() => setValue(evaluate(value))}>{equalSign}</button>
      </div>
    </section>
  )
}
