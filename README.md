# Digitize UI

![Digitize logo](/assets/digitize-logo.png)

## Premise

A React Component library with components I use regularly in hobby projects, which will also include some default theming and extend some of the MUI Joy component features.

## Project Structure

This project is a `turborepo`. Inside of `packages`, you'll find our packages that are published to npm. `components` is for our custom components and `theme` is for our custom theme values. 

## Contributing

First, please make a feature branch in the format `name/feature` or `name/component/fix` for the feature you're implementing or bug you're fixing. For example, if I, Trent, am implementing a new component called `Button` my branch would be `trent/button`. If I were fixing a bug in the `MobileNav` component, I would name my branch `trent/mobile-nav/fix`.

Once you've made the changes you'd like to make, a changeset will need to be generated and pushed to GitHub along with your changes. To generate a changeset, simply run `yarn changeset` from the root of the project. This project will follow *semantic versioning*, meaning that we will increment the packages as follows

1. Breaking changes/API Changes will be a **major** version bump *0.0.0 -> 1.0.0*
2. Non Breaking Functionality Changes will be a **minor** version bump *0.0.0 -> 0.1.0*
3. Bug fixes (that are backwards compatible) will be a **patch** version bump *0.0.0 -> 0.0.1*

`Changesets` will only monitor anything in the `/packages` directory (apart from `tsconfig`, which isn't published) so it will only prompt you to increment versions for packages you've changed. 

Once you've generated your changeset, push it up to your feature branch and submit a PR! 

## Releasing

I am still ironing this process out. I'd like the releases to be automatic, but my CI/CD skills aren't the best. I did create a job to automate releases that appears to be working, but it isn't...

For now, `yarn changeset version` needs to be run, which will check all changeset files, figure out how to increment package versions, and create changeset files inside of the packages. Afterwards, you can `yarn run release` to actually publish to `npm` but I'm sure there's a better way to handle it. Especially since you'll need to pull changes into `main` before running `yarn changeset version` which means you'll end up with the new changeset files on `main`, which can't be commited since you're on `main` and I don't want to break rules. Maybe we should do all releases in a `release` branch and then merge to `main`? Beats me but I'm tired and not thinking straight enough to fix it now, but I'll fix it eventually :)