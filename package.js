Package.describe({
  summary: 'Style with attitude. Sass and SCSS support for Meteor.js (with autoprefixer and sourcemaps).',
  version: "2.0.0_1",
  git: "https://github.com/fourseven/meteor-scss.git",
  name: "fourseven:scss"
});

Package.registerBuildPlugin({
  name: 'fourseven:scss',
  use: [],
  sources: [
    'plugin/compile-scss.js'
  ],
  npmDependencies: {
    'node-sass': '2.0.0',
    'lodash': '2.4.1',
    'autoprefixer-core': '3.1.0',
  }
});

Package.on_test(function (api) {
  api.use(['test-helpers',
           'tinytest',
           'jquery',
           'templating']);
  api.use(['fourseven:scss']);
  api.add_files(['test/scss_tests.html', 'test/scss_tests.js'], 'client');
  api.add_files(['test/scss_tests.scss'], 'client',  {isTest:true});
});
