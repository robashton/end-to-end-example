Browser = require 'zombie'
Appstrap = require 'appstrap'

Scenario "Bootstrapping my application", ->
  app = null
  client = new Browser()

  Given "An express application", ->
    app = new Appstrap('app.js')

  When "Spawning it up", (done) ->
    app.start done

  Then "I can run some tests against it", (done) ->
    client.visit app.root_url, ->
      client.text('title').should.equal('hello world')
      done()

  after -> app.stop()

