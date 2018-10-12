#!/usr/bin/env node
/* eslint no-console:0 */
'use strict'
const meow = require('meow')
const pathExists = require('path-exists')

const createBabelrc = require('.')

const cli = meow(
  `
	Usage
	  $ create-babelrc

	Options
	  --overwrite, -o    Overwrite .babelrc

	Examples
	  $ create-babelrc
`,
  {
    alias: {
      o: 'overwrite'
    },
    defaults: {
      overwrite: false
    }
  }
)

pathExists('.babelrc').then(exists => {
  if (exists && !cli.flags.overwrite) {
    console.log(
      `.babelrc already exists. If you want overwrite you can use the --overwrite or -o option`
    )
    return
  }
  createBabelrc()
    .then(result => {
      console.log('Created .babelrc\n')
      console.log(result)
    })
    .catch(error => {
      console.error(error)
      process.exit(1) // eslint-disable-line no-process-exit
    })
})
