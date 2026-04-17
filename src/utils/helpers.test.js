import { formatGreeting, getTimeOfDay } from './helpers'

describe('helpers', () => {
  describe('formatGreeting', () => {
    test('returns the correct greeting string', () => {
      expect(formatGreeting('Alice')).toBe('Hello, Alice!')
    })

    test('plain JS value snapshot', () => {
      expect(formatGreeting('Alice')).toMatchSnapshot()
    })
  })

  describe('getTimeOfDay', () => {
    test('returns morning for hours before 12', () => {
      jest.spyOn(Date.prototype, 'getHours').mockReturnValue(8)
      expect(getTimeOfDay()).toBe('morning')
      jest.restoreAllMocks()
    })

    test('returns afternoon for hours between 12 and 17', () => {
      jest.spyOn(Date.prototype, 'getHours').mockReturnValue(14)
      expect(getTimeOfDay()).toBe('afternoon')
      jest.restoreAllMocks()
    })

    test('returns evening for hours 18 and above', () => {
      jest.spyOn(Date.prototype, 'getHours').mockReturnValue(20)
      expect(getTimeOfDay()).toBe('evening')
      jest.restoreAllMocks()
    })
  })
})
