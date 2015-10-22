# rockpaperscissors
Javascript + karma + jasmine testing example

Simple proof of concept to some BDD using **Javascript + Jasmine 2.0** and **Karma** as test runner.
It requires Node, grunt and Karma to be in your computer:

```sh
apt-get install nodejs

npm install -g grunt-cli
npm install -g karma-cli
```

To install node dependencies and javascript libraries, simply run:
```sh
npm install
```

then you can run the tests by running:
```sh
karma start
```

It will open a Chrome instance an run the tests on it.

If you want to play with the app, run:

```sh
grunt
```
