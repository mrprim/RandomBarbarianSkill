'use strict'

const Alexa = require('alexa-sdk')
const languageStrings = require('./lang')
const handlers = require('./handlers')

const APP_ID = 'amzn1.ask.skill.790e4a91-9964-4195-a7a9-da149247e051'

exports.handler = function (event, context) {
  const alexa = Alexa.handler(event, context)
  alexa.APP_ID = APP_ID
  alexa.resources = languageStrings
  alexa.registerHandlers(handlers)
  alexa.execute()
}
