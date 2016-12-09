'use strict'

const getHandler = require( './get' );
const postHandler = require( './post' );
const putHandler = require( './put' );
const deleteHandler = require( './delete' );
const basicAuth = require( './../basicAuth' );

module.exports = ( request, response ) => {

  // Switch to handle server HTTP requests
  // User must be authorized to POST, PUT and DELETE
  switch ( request.method ) {
    case 'GET' :
      getHandler( request, response );
      break;
    case 'POST' :
      if ( basicAuth.isAuthorized( request, response ) ) {
        postHandler( request, response );
        break;
      }
    case 'PUT':
      if ( basicAuth.isAuthorized( request, response ) ) {
        putHandler( request, response );
        break;
      }
    case 'DELETE':
      if ( basicAuth.isAuthorized( request, response ) ) {
        deleteHandler( request, response );
        break;
      }
    default:
      throw new Error( 'Invalid request method' );
  }
}