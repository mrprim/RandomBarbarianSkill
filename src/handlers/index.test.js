const mocha = require('mocha')
const expect = require('expect')

const describe = mocha.describe
const it = mocha.it

const handlers = require('./index')

describe('handlers', () => {
  describe('RandomCharacter', () => {
    it('is a handler', function () {
      const self = {
        t: (x) => console.log('t:' + x),
        emit: (x) => console.log('emit:' + x)
      }
      handlers.RandomCharacter.bind(self)()
    })
  })
})
