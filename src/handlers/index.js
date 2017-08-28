const RandomCharacter = require('./RandomCharacter')

module.exports = {
  'LaunchRequest': function () {
    this.emit('Launch')
  },
  'PartyTimeIntent': function () {
    this.emit('Launch')
  },
  'RandomCharacterIntent': function () {
    this.emit('RandomCharacter')
  },
  'Launch': function () {
    const speechOutput = this.t('LAUNCH_PROMPT')
    this.emit(':ask', speechOutput)
  },
  'RandomCharacter': RandomCharacter,
  'AMAZON.HelpIntent': function () {
    const speechOutput = this.t('HELP_MESSAGE')
    const reprompt = this.t('HELP_MESSAGE')
    this.emit(':ask', speechOutput, reprompt)
  },
  'AMAZON.CancelIntent': function () {
    this.emit(':tell', this.t('STOP_MESSAGE'))
  },
  'AMAZON.StopIntent': function () {
    this.emit(':tell', this.t('STOP_MESSAGE'))
  }
}
