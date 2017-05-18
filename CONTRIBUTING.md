# Contributing

If you're reading this, you're awesome!

Here's how you can help:

## Development workflow

```sh
git clone git@github.com:nordnet/nordnet-ui-kit.git
cd nordnet-ui-kit
yarn install
yarn start # This will start a local instance of the documentation
```

* Components can be found under `src/components`
* Examples of component usage (documentation) can be found in the same directory as the component, but with an `.md` extension instead
* Theming code can be found in `src/styles` (color, palette, breakpoints, typography, etc.)

## Commit messages

We use [semantic-release](https://github.com/semantic-release/semantic-release) with [conventional-changelog](https://github.com/conventional-changelog-archived-repos/conventional-changelog-angular/blob/master/convention.md).

**NOTE**: Use `yarn commit` to get help with writing commit messages that follow this convention.

## Submitting pull requests

1. Create a new branch, please don’t work in master directly.
2. Make your desired changes (and add tests for your changes).
3. Update the documentation to reflect any changes. (This usually means updating one of the example files in `src/components/<component>/<component>.md`).
4. Push to your fork and submit a pull request.

## Code style

We enforce code style with [prettier](https://github.com/prettier/prettier). See package.json for details.
