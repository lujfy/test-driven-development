const {capitalize , reverseString , calculator , caesarCipher , analyzeArray} = require('../src/index')

describe('capitalize' , () => {
    test('capitalize the first character of the string', () => {
      expect(capitalize('hello world')).toBe('Hello world')
    })

    test('capitalize a single character', () => {
        expect(capitalize('a')).toBe('A')
    })

    test('work with empty string', () => {
        expect(capitalize('')).toBe('')
    })

    test('does not modify the already capitalize string', () => {
        expect(capitalize('Hello')).toBe('Hello')
    })
    
})

describe('reverseString' , () => {
    test('reversing the string', () => {
      expect(reverseString('hello')).toBe('olleh')
    })

    test('reverse a single character', () => {
        expect(reverseString('a')).toBe('a')
    })

    test('work with empty string', () => {
        expect(reverseString('')).toBe('')
    })

    test('reverse correctly with punctuation', () => {
        expect(reverseString('Hello!')).toBe('!olleH')
    })
    
})

describe('calculator' , () => {
    test('add two number', () => {
      expect(calculator.add(1 , 2)).toBe(3)
    })

    test('subtract 2 number', () => {
        expect(calculator.subtract(3 , 2)).toBe(1)
    })

    test('multiply two number', () => {
        expect(calculator.multiply(2 , 3)).toBe(6)
    })

    test('divide two number', () => {
        expect(calculator.divide(10 , 2)).toBe(5)
    })
    
})

describe('caesarCipher' , () => {
    test('shift each character by the shift factor ', () => {
      expect(caesarCipher('hello world' , 5)).toBe('mjqqt btwqi')
    })

    test('wrap from z to a ', () => {
        expect(caesarCipher('z', 1)).toBe('a')
    })

    test('keep the same upperCase', () => {
        expect(caesarCipher('Hello world' , 5)).toBe('Mjqqt btwqi')
    })

    test('handles punctuation', () => {
        expect(caesarCipher('Hello world!' , 5)).toBe('Mjqqt btwqi!')
    })
    
})

describe('analyzeArray' , () => {
    test('clculate the averge min , max , length of array', () => {
      expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
      })
    })

    test('clculate the averge min , max , length of array  with negative number', () => {
        expect(analyzeArray([-1 , 0 , 1])).toEqual({
          average: 0,
          min: -1,
          max: 1,
          length: 3
        })
      })

      
    expect(analyzeArray([])).toEqual({
        average: NaN,
        min: Infinity,
        max: -Infinity,
        length: 0
        })
      
    
})