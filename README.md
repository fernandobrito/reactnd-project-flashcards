**Have a question or suggestion?**
Contact me on [Linkedin](https://www.linkedin.com/in/fernandosmbrito), or open a pull request on this project.

**Programming assignment for the [Udacity React Nanodegree](https://www.udacity.com/course/react-nanodegree--nd019) program.**

---

# Flashcards

[![Code Climate](https://codeclimate.com/github/fernandobrito/reactnd-project-flashcards/badges/gpa.svg)](https://codeclimate.com/github/fernandobrito/reactnd-project-flashcards)
[![Issue Count](https://codeclimate.com/github/fernandobrito/reactnd-project-flashcards/badges/issue_count.svg)](https://codeclimate.com/github/fernandobrito/reactnd-project-flashcards)

> For the UdaciCards project, you will build a mobile application (Android or iOS - or both) that allows users to study collections of flashcards. The app will allow users to create different categories of flashcards called "decks", add flashcards to those decks, then take quizzes on those decks.

Built with React Native, Redux and React Navigation. This project was bootstrapped with [Create React Native App](https://github.com/react-community/create-react-native-app#getting-started).
For this assignment there was no starter template provided (apart from the simple backend API).


## Limitations and things that are missing

The focus of the assignment was on functionality, rather than styling, so I did not spend so much time building the UI (no animations, few loading messages, etc). 
The scope of the assignment was very limited, so it is not possible to edit entries. Also, this project has no automated tests.


## Feature

* Local state is automatically synced with AsyncStorage
* Notifications API is used for setting daily reminders


## Stack

* [react](https://facebook.github.io/react) (16.0.0)
* [react-native](https://facebook.github.io/react-native/) (0.50.3)
* [react-navigation](https://github.com/react-community/react-navigation) (1.0.0-beta.21) Native Tab and Stack navigation
* [redux](https://github.com/reactjs/redux) (3.7.2) Manage state
* [react-redux](https://github.com/reactjs/react-redux/) (5.0.6) Redux bindings for React

* [npm](https://www.npmjs.com) (3.10.10)
* [create-react-app](https://github.com/facebookincubator/create-react-app) (1.0.10) Tool to bootstrap React applications
* [lodash](https://github.com/lodash/lodash) (4.17.4) JavaScript utility library
* [react-native-flip-card](https://www.npmjs.com/package/react-native-flip-card) (3.5.2) Card flipping animation

The folder structure loosely follows the [ducks](https://medium.freecodecamp.org/scaling-your-redux-app-with-ducks-6115955638be) pattern.


## Installation

Install all necessary modules to run the current project.

```bash
$ git clone https://github.com/fernandobrito/reactnd-project-flashcards
$ cd reactnd-project-flashcards/
$ yarn install
```


## Development

```bash
$ cd reactnd-project-readable/server/
$ yarn start
```

Tested on a real Lenovo P2 Android device and on the Genymotion emulator.

For more details on how to run the app on your mobile phone or on an emulator, please follow [expo](https://docs.expo.io/versions/latest/introduction/installation.html) documentation.


## Build

For more details on how to run build the app and deploy it to application stores, please follow [expo](https://docs.expo.io/versions/latest/introduction/project-lifecycle.html) documentation.


## Lint

Run lint tools.

```bash
$ cd reactnd-project-flashcards/
$ yarn run eslint
```


## Contributing

1. Fork it
2. Create your feature branch with specs (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request


## Contributors

* Fernando Brito ([fernandobrito](https://github.com/fernandobrito))


## License

This project is licensed under the MIT License. Check the `LICENSE` file.
