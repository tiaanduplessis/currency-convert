#!/usr/bin/env node
'use strict'

const amount = process.argv[2]
const from = process.argv[3]
const to = process.argv[4]

const currencyConvert = require('./')

if (amount && from && to) {
  currencyConvert(Number.parseFloat(amount), from, to)
    .then(console.log)
    .catch(console.error)
} else {
  console.log('Please provide all the required arguments.')
}
