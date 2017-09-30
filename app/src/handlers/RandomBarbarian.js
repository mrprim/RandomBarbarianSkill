const generators = require('random-rpg-stuff')

module.exports = function () {
  const char = generators.characters.umdaar()

  const msg = this.t('BARBARIAN_OATH') + ' ' + this.t('IT_IS') + '... ' + char.toString() + '!'

  this.emit(':tellWithCard', msg, this.t('SKILL_NAME'), msg)
}
