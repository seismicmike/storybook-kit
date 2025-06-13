# Storybook Kit

This Demo Drupal Project is a work in progress. It was built from VML's Open Source [Drupal 10 Kit](https://github.com/WPP-Public/Drupal-KIT/tree/10.0.0).

The purpose of this project was to demonstrate what can be done to build Drupal themes using Storybook and Single Directory Components. As much as possible, I have tried to avoid using template overrides, preprocessors and libraries to apply the theme. Some of this is unavoidable, but I have used it as little as possible. I'm basing this off a design I found advertized online, but I'm doing all the build myself. It's just for demo purposes.

This project can be run on any local environment using Lando.

To set it up, do the following:

- Install Lando if you don't already have it
- Clone this repository
- Run `lando start`
- Install the site from existing configuration `lando drush si --existing-configuration`
- Log into the site and do some basic setup (mainly specify the site name and create some pages in the main nav menu. You'll probably want to create a Home page and set that as the front page too)

Once you've done all that, you should be able to see the theme from the front page. So far all I've built out with Storybook are the Header, main nav and footer, and the footer is still a WIP.

All components are fully responsive.

There's a lot more I can do. If I have time and inclination, I can build out the other components. Kit comes with lots of Paragraph bundles pre-defined, so pages can easily be created with rich content. I just haven't themed them yet, so they don't look like much. The site is basically a sandwich of a nice looking header and a decent looking footer with a bunch of slop in between. But this is just a demo project that I'm working on in my spare time.

If you want to browse the components in the storybook interface. To use that you'll need to create a `.local.lando.yml` file in the root of the project directory and put the following proxy definition into it:

```
proxy:
  node:
    - storybook.drupal-kit.lndo.site:6006
```

Once that's created, run `lando rebuild -y` to create the storybook proxy. Then run `lando storybook` to start the storbook app inside the node service. Once it's up, go to http://storybook.drupal-kit.lndo.site to browse the components.
