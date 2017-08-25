module.exports = {
  'LaunchRequest': function () {
    this.emit('PartyTime')
  },
  'PartyTimeIntent': function () {
    this.emit('PartyTime')
  },
  'PartyTime': function () {
    const speechOutput = this.t('PARTY_TIME_MESSAGE')
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
