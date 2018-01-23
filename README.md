# Wizards Chess

Inspired by the book Harry Potter, this web application utilizes the Chrome implementation of the Javascript Speech Recognition API to allow players to initiate moves via voice commands.

## Team

  - Tyler Walker
  - Michael Burton

## Table of Contents

1. [Getting Started](#getting-started)
1. [Tech Stack](#tech-stack)
1. [Voice Commands](#voice-commands)
1. [AI](#ai)
1. [Testing](#testing)
1. [Requirements](#requirements)
    1. [Installing Dependencies](#installing-dependencies)
1. [Contributing](#contributing)
1. [License](#license)

## Getting Started

For this project we are using yarn as our package manager, but you can also use npm if that's more your style. 
To get started first clone down the repo:
```
git clone https://github.com/twalk4821/wizardsChessAPI.git
```
now go ahead and install your dependencies
```
yarn install 
yarn start

npm install
npm run start
```

## Tech Stack
  - [React] with [React-Router] & [Redux]
  - [Node] & [Express]
  - [Chrome Speech API] 
  - [Material-UI]

## Voice Commands

Players can move pieces by issuing commands such as the following examples:

```
[piece] to [grid coordinate]
PAWN to E7
QUEEN to F8
KNIGHT to C4
```

## AI

The game features a rudimentory AI based off of a min-max algorithm for optimizing future board states. The AI is capable of all basic moves in chess, and is an area with room for improvement.  Pull requests encouraged for any developers eager to dive into the code.

## Testing

From within the root directory:
```
yarn test
npm test
```

## Requirements

- Node 6.4.x
- Express 4.x
- Webpack 3.x


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.

## License

MIT

[Live Site]:http://www.wizardschess.club
[React-Router]:https://github.com/ReactTraining/react-router
[React]:https://github.com/facebook/react
[Redux]:https://github.com/reactjs/redux
[Node]:https://github.com/nodejs
[Express]:https://github.com/expressjs/express
[Jest]:https://github.com/facebook/jest
[Enzyme]:https://github.com/airbnb/enzyme
