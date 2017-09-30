const mocha = require('mocha')
const expect = require('expect')

const describe = mocha.describe
const it = mocha.it

const handler = require('./RandomBarbarian')

describe('RandomBarbarian', () => {
  it('is a function', function () {
    expect(typeof handler).toEqual('function')
  })

  it('emits an action', function () {
    const context = {
      t: x => x,
      emit: x => x
    }
    const emitSpy = expect.spyOn(context, 'emit')
    handler.call(context)
    expect(emitSpy).toHaveBeenCalled()
  })
})
