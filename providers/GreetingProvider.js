const { ServiceProvider } = require.main.require('@adonisjs/fold')
const Greeting = require('../src/Greeting')

class GreetingProvider extends ServiceProvider {
  register () {
    this.app.bind('MyAddon/Greeting', (app) => {
      const Config = app.use('Adonis/Src/Config')
      return new Greeting(Config)
    })
  }
}

module.exports = GreetingProvider
