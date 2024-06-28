// import the url module
const url = require('url');

exports.getDomain = function(passedUrl){
    const { href, host, pathname, protocol } = new URL(passedUrl);
    let parsedDomain = '';
    if(protocol.length > 0){
        parsedDomain += protocol + '//';
    }
    parsedDomain += host;
    return parsedDomain;
}
