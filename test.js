const currencyConvert = require('./')

test('should be defined', () => {
  expect(currencyConvert).toBeDefined()
})

test('should convert currencies', async () => {
  expect(await currencyConvert(1, 'USD', 'HKD')).toBeTruthy()
  expect(await currencyConvert(100, 'ZAR', 'HKD')).toBeTruthy()
  expect(await currencyConvert(9, 'ZAR', 'ZAR')).toBeTruthy()
})
