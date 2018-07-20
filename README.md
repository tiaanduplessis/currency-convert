
# DEPRECATED - currency-convert
[![package version](https://img.shields.io/npm/v/currency-convert.svg?style=flat-square)](https://npmjs.org/package/currency-convert)
[![package downloads](https://img.shields.io/npm/dm/currency-convert.svg?style=flat-square)](https://npmjs.org/package/currency-convert)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/currency-convert.svg?style=flat-square)](https://npmjs.org/package/currency-convert)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com) [![Greenkeeper badge](https://badges.greenkeeper.io/tiaanduplessis/currency-convert.svg)](https://greenkeeper.io/)

> Convert amount from one currency to another

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [API](#api)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install currency-convert
$ # OR
$ yarn add currency-convert
```

## Usage

```js
const currencyConvert = require('currency-convert')
const API_KEY = "#####################"
currencyConvert(API_KEY, 5, 'USD', 'HKD').then(console.log).catch(console.log)
// 39.115292915531334
```

## API


## Contribute

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3. Push to the branch: git push origin my-new-feature 
4. Submit a pull request

## License

MIT
    