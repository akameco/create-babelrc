// @flow
const createBabelrc = require('.')

test('return valid .babelrc', async () => {
  const babelrc = await createBabelrc({ cwd: './fixtures/basic' })
  expect(babelrc).toEqual({
    plugins: ['transform-class-properties'],
    presets: ['env', 'flow']
  })
})

test('return valid .babelrc when plugins only', async () => {
  const babelrc = await createBabelrc({ cwd: './fixtures/plugins-only' })
  expect(babelrc).toEqual({ plugins: ['transform-class-properties'] })
})

test('return valid .babelrc when presets only', async () => {
  const babelrc = await createBabelrc({ cwd: './fixtures/presets-only' })
  expect(babelrc).toEqual({ presets: ['env', 'flow'] })
})
