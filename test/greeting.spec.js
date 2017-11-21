const test = require('japa')
const { Config } = require('@adonisjs/sink')
const Greeting = require('../src/Greeting')

test.group('Greeting', () => {
  test('greet with default day message', (assert) => {
    const greeting = new Greeting(new Config())
    assert.equal(greeting.greet(10), 'Good morning')
  })

  test('greet with default evening message', (assert) => {
    const greeting = new Greeting(new Config())
    assert.equal(greeting.greet(22), 'Good evening')
  })

  test('greet with custom day message', (assert) => {
    const config = new Config()
    config.set('app.greetings.inDay', 'Let\'s have morning coffee together')

    const greeting = new Greeting(config)
    assert.equal(greeting.greet(10), 'Let\'s have morning coffee together')
  })

  test('greet with custom evening message', (assert) => {
    const config = new Config()
    config.set('app.greetings.inEvening', 'Let\'s go out for dinner')

    const greeting = new Greeting(config)
    assert.equal(greeting.greet(19), 'Let\'s go out for dinner')
  })
})
