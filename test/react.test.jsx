import { afterEach, describe, expect, it } from 'vitest'
import { render, screen, cleanup, fireEvent } from '@testing-library/react'
import {
  Calculator,
  numbers,
  equalSign,
  clearSign,
  changeSign,
} from '../src/Calculator'

describe('Calculator', () => {
  afterEach(cleanup)

  it('should render', () => {
    render(<Calculator />)
  })

  it('should render title correctly', () => {
    render(<Calculator />)

    screen.getByText('Calculator')
  })

  it('should render numbers', () => {
    render(<Calculator />)

    numbers.forEach((num) => {
      screen.getByText(num)
    })
  })

  it('should render 4 rows', () => {
    render(<Calculator />)

    const rows = screen.getAllByRole('row')
    expect(rows.length).toBe(5)
  })

  it('should render an input', () => {
    render(<Calculator />)

    screen.getByRole('textbox')
  })

  it('should user input after clicking on a number', () => {
    render(<Calculator />)

    const one = screen.getByText(1)
    fireEvent.click(one)

    const input = screen.getByRole('textbox')

    expect(input.value).toBe('1')
  })

  it('should user input after clicking several numbers', () => {
    render(<Calculator />)

    numbers.forEach((num) => {
      fireEvent.click(screen.getByText(num))
    })

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('0123456789')
  })

  it('should user input after clicking numbers and operations', () => {
    render(<Calculator />)

    const one = screen.getByText('1')
    fireEvent.click(one)

    const plus = screen.getByText('+')
    fireEvent.click(plus)
    fireEvent.click(one)

    const input = screen.getByRole('textbox')
    expect(input.value).toBe('1+1')
  })

  it('should calculate based on user input and show the result', () => {
    render(<Calculator />)
    const input = screen.getByRole('textbox')

    const one = screen.getByText('1')
    fireEvent.click(one)

    const plus = screen.getByText('+')
    fireEvent.click(plus)
    fireEvent.click(one)

    const equal = screen.getByText(equalSign)
    fireEvent.click(equal)

    expect(input.value).toBe('2')
  })

  it('should clear the input after clicking on C', () => {
    render(<Calculator />)
    const input = screen.getByRole('textbox')

    const one = screen.getByText('1')
    fireEvent.click(one)

    const plus = screen.getByText('+')
    fireEvent.click(plus)
    fireEvent.click(one)

    const clear = screen.getByText(clearSign)
    fireEvent.click(clear)

    expect(input.value).toBe('')
  })

  it('should change plus sign of the input after clicking on ±', () => {
    render(<Calculator />)
    const input = screen.getByRole('textbox')

    const one = screen.getByText('1')
    fireEvent.click(one)

    const sign = screen.getByText(changeSign)
    fireEvent.click(sign)

    expect(input.value).toBe('-1')
  })

  it('should change minus sign of the input after clicking on ±', () => {
    render(<Calculator />)
    const input = screen.getByRole('textbox')

    const minus = screen.getByText('-')
    fireEvent.click(minus)
    const one = screen.getByText('1')
    fireEvent.click(one)

    const sign = screen.getByText(changeSign)
    fireEvent.click(sign)

    expect(input.value).toBe('1')
  })
})
