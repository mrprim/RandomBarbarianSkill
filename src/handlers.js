const characterGenerator = require('./utils/characterGenerator')

module.exports = {
  'LaunchRequest': function () {
    this.emit('PartyTime')
  },
  'PartyTimeIntent': function () {
    this.emit('PartyTime')
  },
  'RandomCharacterIntent': function () {
    this.emit('RandomCharacter')
  },
  'PartyTime': function () {
    const speechOutput = this.t('PARTY_TIME_MESSAGE')
    this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'))
  },
  'RandomCharacter': function () {
    const char = characterGenerator()
    const speechOutput = '<emphasis level="strong">' + char.name + '</emphasis> the ' + char.aspects.bioform
    this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'))
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
  }
}
