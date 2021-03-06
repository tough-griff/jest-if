# jest-if 🃏🤔

[![npm](https://img.shields.io/npm/v/jest-if)](https://www.npmjs.com/package/jest-if)
[![build](https://img.shields.io/github/workflow/status/tough-griff/jest-if/Test)](https://github.com/tough-griff/jest-if/actions/workflows/test.yml)
[![codecov](https://img.shields.io/codecov/c/github/tough-griff/jest-if)](https://codecov.io/gh/tough-griff/jest-if)

Conditional test blocks for [`jest`](https://jestjs.io)

## Installation

With npm:

```sh
npm install --save-dev jest-if
```

or yarn:

```sh
yarn add -D jest-if
```

## Setup

Add jest-if to `setupFilesAfterEnv` in your [configuration](https://jestjs.io/docs/configuration#setupfilesafterenv-array)

```js
module.exports = {
  setupFilesAfterEnv: ['jest-if'],
};
```

If using TypeScript, you can add the following to your tsconfig to include the
necessary type definitions:

```json
{
  "files": ["node_modules/jest-if/index.d.ts"]
}
```

## Usage

Now you can conditionally write tests to be skipped unless the condition returns
true:

```js
describe.if(os.platform() !== 'windows')(
  'Unix specific tests can go here',
  () => {
    it('works as expected', () => {
      expect(path.resolve('/')).toEqual('/');
    });
  },
);
```
