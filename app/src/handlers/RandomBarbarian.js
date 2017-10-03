const generators = require('random-rpg-stuff')

module.exports = function () {
  const char = generators.characters.umdaar()
  const oath = generators.misc.oath()

  const speech = '<emphasis level="strong">' + oath + '</emphasis> ' + this.t('IT_IS') + ' ' + char.toString('ssml') + '!'
  const card = oath + ' ' + this.t('IT_IS') + ' ' + char.toString() + '!'

  console.log(card)
  this.emit(':tellWithCard', speech, this.t('SKILL_NAME'), card)
}
