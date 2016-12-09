'use strict'

function WebBrowser() {
  WebBrowser.prototype.open = function( url ){
    return 'Browsing to ' + url;
  }
}

module.exports = WebBrowser;
