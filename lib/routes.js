/**
* This is a file where you can define various routes globally. It's better than
* defining those in server.js, but ideally you should be defining routes as part of
* modules. @see example "hello" module to get a taste of how this works.
*/

// Third party libraries
var express = require('express')
  , app = exports = module.exports = express();

// Local includes
var mod_index =  require('./index');

/** Global ROUTES **/
app.get('/', mod_index.callbacks.index);
