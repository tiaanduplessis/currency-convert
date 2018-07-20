const req = require('puny-req')
const money = require('money')
const type = require('@tiaanduplessis/type')

const url = 'https://data.fixer.io/api/latest?access_key='

let data

function assert (cond, msg = '') {
  if (!cond) {
    throw new Error(msg)
  }
}

/**
 * Convert amount from one currency to another
 *
 * @param {String} apiKey fixer.io API key
 * @param {Number} amount Amount to convert
 * @param {String} from Currency code to convert from e.g. 'USD', 'HKD' or 'ZAR'
 * @param {String} to Currency code to convert to e.g. 'USD', 'HKD' or 'ZAR'
 */
const currencyConvert = (apiKey = '', amount = 1, from = '', to = '') => {
  assert(
    type.isNum(amount),
    'currency-convert: Amount should be number'
  )
  assert(type.isStr(from), 'currency-convert: From should be string')
  assert(type.isStr(to), 'currency-convert: To should be string')

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

  return req(`${url}${apiKey}`)
  .then(json => {
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
