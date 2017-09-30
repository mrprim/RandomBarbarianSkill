const RandomBarbarian = require('./RandomBarbarian')

module.exports = {
  'LaunchRequest': function () {
    this.emit('RandomBarbarian')
  },
  'RandomBarbarianIntent': function () {
    this.emit('RandomBarbarian')
  },
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
  },
  'RandomBarbarian': RandomBarbarian
}
