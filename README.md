# Adonis Addon

This is a boilerplate for creating AdonisJs Addons. It is suggested to read [addons guide](http://adonisjs.com/recipes/making-adonis-addons) to learn more about the development process.

## Dependencies
This project includes following dependencies, you are free to remove them.

1. [japa](https://github.com/thetutlage/japa) - Test runner to run tests
2. [standardjs](https://standardjs.com/) - Code linter

## Things to note

1. Always include `@adonisjs/fold` as a dev dependency to your addon
2. Use `require.main.require('@adonisjs/fold')` vs `require('@adonisjs/fold')` for this dependency only.

## Sample provider
Also this project comes with a sample provider to get your started quickly. Feel free to start from scratch by removing following files.

- src/Greeting.js
- src/GreetingProvider.js
- test/greeting.spec.js

```js
rm src/Greeting.js
rm src/GreetingProvider.js
rm test/greeting.spec.js
```