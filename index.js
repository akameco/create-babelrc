// @flow
'use strict'
const fs = require('fs')
const path = require('path')

const readPkgUp = require('read-pkg-up')

/* ::
type Opts = {cwd: string}
*/

const PRESET = 'babel-preset-'
const PLUGIN = 'babel-plugin-'

function createBabelrc(opts /* : Opts */) /* : Promise<Object> */ {
  return readPkgUp({ cwd: opts.cwd }).then(({ pkg }) => {
    const deps /* : string[] */ = Object.keys(pkg.devDependencies)

    const presets = deps
      .filter(v => v.startsWith(PRESET))
      .map(v => v.replace(PRESET, ''))

    const plugins = deps
      .filter(v => v.startsWith(PLUGIN))
      .map(v => v.replace(PLUGIN, ''))

    const babelrc = {}

    if (presets.length > 0) {
      babelrc.presets = presets
    }

    if (plugins.length > 0) {
      babelrc.plugins = plugins
    }

    return babelrc
  })
}

module.exports = function(
  opts /* : Opts */ = { cwd: process.cwd() }
) /* : Promise<string> */ {
  return createBabelrc(opts).then(babelrc => {
    fs.writeFileSync(
      path.resolve(opts.cwd, '.babelrc'),
      JSON.stringify(babelrc, null, 2)
    )
    return babelrc
  })
}
