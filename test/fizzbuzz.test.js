import { describe, expect, it } from 'vitest'
import { fizzbuzz } from '../src/fizzbuzz'

describe('fizzbuzz', () => {
  // This test is redundant
  /* t('Should be a function', () => {
    expect(typeof fizzbuzz).toBe('function')
  }) */

  it('should throw if not number is provided', () => {
    expect(() => fizzbuzz()).toThrow()
  })

  it('should throw a specific error message if not number is provided', () => {
    expect(() => fizzbuzz()).toThrow('You must provide a number')
  })

  it('should throw a specific error message if not a number is provided', () => {
    expect(() => fizzbuzz(NaN)).toThrow('You must provide a number')
  })

  it('should return 1 if number provided is 1', () => {
    expect(fizzbuzz(1)).toBe(1)
  })

  it('should return 2 if number provided is 2', () => {
    expect(fizzbuzz(2)).toBe(2)
  })

  it('should return 3 if number provided is 3', () => {
    expect(fizzbuzz(3)).toBe('fizz')
  })

  it('should return "fizz" if number provided is divisible by 3', () => {
    expect(fizzbuzz(6)).toBe('fizz')
    expect(fizzbuzz(9)).toBe('fizz')
    expect(fizzbuzz(12)).toBe('fizz')
  })

  // This test is satiesfied by the alghoritm
  /*  it('should return 4 if number provided is 4', () => {
    expect(fizzbuzz(4)).toBe(4)
  }) */

  it('should return "buzz" if number provided is divisible by 5', () => {
    expect(fizzbuzz(5)).toBe('buzz')
  })

  it('should return "buzz" if number provided is divisible by 5', () => {
    expect(fizzbuzz(10)).toBe('buzz')
    expect(fizzbuzz(20)).toBe('buzz')
    expect(fizzbuzz(25)).toBe('buzz')
  })

  it('should return "fizzbuzz" if number provided is divisible by 3 and 5', () => {
    expect(fizzbuzz(15)).toBe('fizzbuzz')
  })

  // Additional but unnecesary test
  /* it('should return "fizzbuzz" if number provided is 7', () => {
    expect(fizzbuzz(7)).toBe('woff')
  })
  */

  // Checking that our alghoritm is extensible
  /* it('should return "fizzwoff" if number provided is divisible by 3 and 7', () => {
    expect(fizzbuzz(21)).toBe('fizzwoff')
    expect(fizzbuzz(63)).toBe('fizzwoff')
  })  */
})
