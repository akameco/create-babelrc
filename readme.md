# create-babelrc
[![Build Status](https://travis-ci.org/akameco/create-babelrc.svg?branch=master)](https://travis-ci.org/akameco/create-babelrc)
[![styled with prettier](https://img.shields.io/badge/styled_with-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

> create .babelrc using package.json

## Install

```
$ npm install --global create-babelrc
```

## Usage

package.json

```json
{
  "devDependencies": {
    "babel-plugin-transform-class-properties": "^6.24.1",
    "babel-preset-env": "^1.6.0",
    "babel-preset-flow": "^6.23.0",
  }
}
```

```sh
$ create-babelrc
Created .babelrc

{ presets: [ 'env', 'flow' ],
  plugins: [ 'transform-class-properties' ] }
```

.babelrc

```json
{
  "presets": [
    "env",
    "flow"
  ],
  "plugins": [
    "transform-class-properties"
  ]
}
```

## CLI

```sh
$ create-babelrc --help

  create .babelrc using package.json

  Usage
    $ create-babelrc

  Options
    --overwrite, -o    Overwrite .babelrc

  Examples
    $ create-babelrc
```


## License

MIT © [akameco](http://akameco.github.io)
