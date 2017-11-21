const defaultMessage = {
  inDay: 'Good morning',
  inEvening: 'Good evening'
}

class Greeting {
  constructor (Config) {
    this.config = Config.merge('app.greetings', defaultMessage)
  }

  greet (hours) {
    hours || new Date().getHours()
    if (hours > 17 && hours < 24) {
      return this.config.inEvening
    }
    return this.config.inDay
  }
}

module.exports = Greeting
