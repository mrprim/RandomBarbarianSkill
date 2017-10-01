const generators = require('random-rpg-stuff')

module.exports = function () {
  const char = generators.characters.umdaar()
  const oath = generators.misc.oath()

  const msg = oath + ' ' + this.t('IT_IS') + ' ' + char.toString() + '!'

  console.log(msg)

  this.emit(':tellWithCard', msg, this.t('SKILL_NAME'), msg)
}
