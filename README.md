# think-hashids
[![npm](https://img.shields.io/npm/v/think-hashids..svg)](https://www.npmjs.com/package/think-hashids)
[![Build Status](https://travis-ci.org/weihongyu12/think-hashids.svg?branch=master)](https://travis-ci.org/weihongyu12/think-hashids)

Generate a short unique ID from the integer for ThinkJS base on [hashids](http://hashids.org/)

## How to use

### Install

```bash
npm install think-hashids --save
```

### Configure extends.js
```javascript
const hashids = require('think-hashids')

module.exports = [
  hashids({
    salt: 'this is salt',
    minLength: 10,
    alphabet: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'
  })
];
```

## Config
- <code>salt</code>:Participate in the calculated salt. Default:<code>''</code>
- <code>minLength</code>:The minimum length of the resulting result. Default:<code>0</code>
- <code>alphabet</code>:Generates the resulting character set .Default:<code>'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'</code>

## Method

- <code>this.encode(id)</code>:Encode ID
- <code>this.decode(id)</code>:Decode ID
- <code>this.encodeHex(id)</code>:Encode hex instead of numbers
- <code>this.decodeHex(id)</code>:Decode hex instead of numbers

