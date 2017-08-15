'use strict'

const assert = require('assert')

const req = require('puny-req')
const money = require('money')

const url = 'https://api.fixer.io/latest'

let data

/**
 * Convert amount from one currency to another
 *
 * @param {Number} amount Amount to convert
 * @param {String} from Currency code to convert from e.g. 'USD', 'HKD' or 'ZAR'
 * @param {String} to Currency code to convert to e.g. 'USD', 'HKD' or 'ZAR'
 */
const currencyConvert = (amount = 1, from = '', to = '') => {
  assert(
    typeof amount === 'number',
    'currency-convert: Amount should be number'
  )
  assert(typeof from === 'string', 'currency-convert: From should be string')
  assert(typeof to === 'string', 'currency-convert: To should be string')

  from = from.toUpperCase()
  to = to.toUpperCase()

  if (data) {
    money.base = data.base
    money.rates = data.rates

    return Promise.resolve(
      money.convert(amount, {
        from,
        to
      })
    )
  }

  return req(url).then(json => {
    data = json.body
    money.base = data.base
    money.rates = data.rates

    return money.convert(amount, {
      from,
      to
    })
  })
}

module.exports = currencyConvert
