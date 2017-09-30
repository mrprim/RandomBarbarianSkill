'use strict'

const Alexa = require('alexa-sdk')
const languageStrings = require('./src/lang')
const handlers = require('./src/handlers')

const APP_ID = 'amzn1.ask.skill.55248344-3bd5-4bac-ad28-62c448fd2172'

exports.handler = function (event, context) {
  const alexa = Alexa.handler(event, context)
  alexa.appId = APP_ID
  alexa.resources = languageStrings
  alexa.registerHandlers(handlers)
  alexa.execute()
}
