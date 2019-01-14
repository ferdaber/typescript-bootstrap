import { cx } from 'utils'

it('accepts a list of mixed string values', () => {
  expect(cx('a', false && 'b', 'c', 0)).toBe('a c')
})

it('accepts and flattens arrays', () => {
  expect(cx('a', ['b', 'c'], ['d e'], [false && 'f', ['g', ['h', 'i']]])).toBe('a b c d e g h i')
})

it('accepts records', () => {
  expect(
    cx('a', {
      b: true,
      c: false,
      d: true,
    })
  ).toBe('a b d')
})

it('accepts mixed arguments', () => {
  expect(
    cx('a', [
      'b',
      [
        'c',
        {
          d: true,
          e: false,
          f: true,
        },
      ],
    ])
  ).toBe('a b c d f')
})
