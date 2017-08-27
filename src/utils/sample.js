const dice = require('./dice')

const sample = (x = []) => {
  if (!x || !x.length) {
    return
  }

  const l = x.length
  const i = dice.roll(l)
  return x[i]
}

module.exports = sample
