const { x, y, z } = require('./sistemasEquacao')

describe('x, y e z funcionam corretamente', () => {
  test('x, y, z retornam o corretamente para n = 0', () => {
    expect(x(0)).toBe(0.2)
    expect(y(0)).toBe(0.1)
    expect(z(0)).toBe(0.1)
  })

  test('x, y, z retornam o corretamente para n = 1', () => {
    expect(x(1)).toBeCloseTo(2.102054)
    expect(y(1)).toBeCloseTo(0.165432134)
    expect(z(1)).toBeCloseTo(0.11996)
  })
  test('x, y, z retornam o corretamente para n = 2', () => {
    expect(x(2)).toBeCloseTo(2.102054)
    expect(y(2)).toBeCloseTo(0.165432134)
    expect(z(2)).toBeCloseTo(0.11996)
  })

  test('y(100) retorna o valor correto', () => {
    expect(y(100)).toBeCloseTo(-2.7298022849796194e+36)
  })
})
