'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

const languageStrings = {
  'en': {
    translation: {
      SKILL_NAME: 'Sir Geo',
      PARTY_TIME_MESSAGE: 'It\'s party time!',
      HELP_MESSAGE: 'You can say tell me a space fact, or, you can say exit... What can I help you with?',
      HELP_REPROMPT: 'What can I help you with?',
      STOP_MESSAGE: 'Goodbye!',
    },
  },
};

const handlers = {
  'LaunchRequest': function () {
    this.emit('PartyTime');
  },
  'PartyTimeIntent': function () {
    this.emit('PartyTime');
  },
  'PartyTime': function () {
    const speechOutput = this.t('PARTY_TIME_MESSAGE');
    this.emit(':tellWithCard', speechOutput, this.t('SKILL_NAME'));
  },
  'AMAZON.HelpIntent': function () {
    const speechOutput = this.t('HELP_MESSAGE');
    const reprompt = this.t('HELP_MESSAGE');
    this.emit(':ask', speechOutput, reprompt);
  },
  'AMAZON.CancelIntent': function () {
    this.emit(':tell', this.t('STOP_MESSAGE'));
  },
  'AMAZON.StopIntent': function () {
    this.emit(':tell', this.t('STOP_MESSAGE'));
  },
};

exports.handler = function (event, context) {
  const alexa = Alexa.handler(event, context);
  alexa.APP_ID = APP_ID;
  // To enable string internationalization (i18n) features, set a resources object.
  alexa.resources = languageStrings;
  alexa.registerHandlers(handlers);
  alexa.execute();
};
