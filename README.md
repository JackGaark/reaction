# Reaction

An alternative implementation of React.

#### Why?

The idea is to improve on [React](https://facebook.github.io/react/)'s component lifecycle in order to facilitate better handshaking with [Redux](http://redux.js.org/) and [Falcor](http://netflix.github.io/falcor/). [Deku](https://github.com/dekujs/deku) are doing much the same thing.

## Installation

    npm reaction

## Usage

```js
var reaction = require('reaction'),
    ReactDOM = reaction.ReactDOM,
    React = reaction.React;
```

You can also clone the repository with [git](https://git-scm.com/):

    git clone https://github.com/djalbat/Reaction.git

Install the necessary [npm](https://www.npmjs.com/) modules:

    npm install

You will need to do this if you want to have a look at the examples.

Now just write your [JSX](https://facebook.github.io/react/docs/jsx-in-depth.html) and React code in the normal way.

## Examples

Launch the `examples.html` file in the `docs` folder. THere is now a Redux as well as a vanilla example application.

## Compiling from source

Automation is thanks to [npm scripts](https://docs.npmjs.com/misc/scripts). Have a look at the package JSON file. The pertinent commands are:

    npm run build
    npm run watch

## Currently supported functionality

- `React.createElement`
- `React.createClass`
- `ReactDOM.render`
- `setState` on JSX elements
- React's now function syntax for components. See the Redux example application.

These properties can be passed to the `React.createClass` method:

- render
- getInitialState
- componentDidMount

## Roadmap

- Pad out Redux support if necessary.
- Look at Falcor.

## Contact

- james.smith@djalbat.com
- http://djalbat.com
