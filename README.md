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

When your branch is merged, if it includes a *changeset* file(s) an Action will be triggered to automatically create a Pull
Request that will do our release when merged to **main**. Once this Pull Requst is approved, the action will run and so long as it is successful a new release to the NPM registry will be published. So the workflow loosely looks like this

1. You make your changes locally in a feature branch (see above)
2. You generate a changeset when done
3. You push to GitHub and create a Pull Request to main (or another branch if applicable)
4. I will code review before merging to main
5. Once merged, a seperate PR will be created automatically, which will be responsible for releasing to NPM when I approve
6. I approve
7. Changes are published to NPM