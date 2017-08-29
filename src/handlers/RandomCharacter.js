const generators = require('random-rpg-stuff')
const emphasize = require('../utils/speech').emphasize

module.exports = function () {
  const char = generators.characters.umdaar()
  const animalString = char.animals.length ? char.animals.join('/').trim() + '-' : ''

  const speech = emphasize(char.name) + ' the ' +
    emphasize(char.descriptor) + ' ' +
    animalString + char.type + ' ' +
    char.characterClass

  const card = char.name + ' the ' + char.aspects.bioform

  this.emit(':tellWithCard', speech, this.t('RANDOM_CHARACTER'), card)
}
