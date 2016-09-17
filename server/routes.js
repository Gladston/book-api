/**
 * Main application routes
 */

'use strict';

import errors from './components/errors';
import path from 'path';
import lusca from 'lusca';

module.exports = function(app) {
  

  // Insert routes below
  
  app.use('/api/books', require('./api/thing'));
  // All undefined asset or api routes should return a 404
  app.route('/:url(api|auth)/*')
   .get(errors[404]);

};
