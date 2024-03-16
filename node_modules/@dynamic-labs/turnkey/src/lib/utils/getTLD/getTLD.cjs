'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var tldts = require('tldts');

const getTLD = () => {
    // Passing the allowPrivateDomains option prevents returning the actual TLD
    // for domains that have delegated subdomains like herokuapp.com or s3.amazonaws.com
    // full list is contained here https://publicsuffix.org/list/effective_tld_names.dat
    // separated by ICANN DOMAINS and PRIVATE DOMAINS
    // so for instance parse('someapp.herokuapp.com') will return 'someapp.herokuapp.com' as the domain
    // whereas parse('app.dynamic.xyz') will return 'dynamic.xyz'
    const data = tldts.parse(window.location.hostname, { allowPrivateDomains: true });
    return data.domain || undefined;
};

exports.getTLD = getTLD;
