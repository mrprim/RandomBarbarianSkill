const generators = require('random-rpg-stuff')

module.exports = function () {
  const char = generators.characters.umdaar()

  const msg = char.toString()

  this.emit(':tellWithCard', msg, this.t('RANDOM_CHARACTER'), msg)
}
