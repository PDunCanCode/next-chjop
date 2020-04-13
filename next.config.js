const withCSS = require('@zeit/next-css');
require('dotenv').config();

const {
  APIURL,
  APIKEY,
  BRANCH,
  CDNBASE,
  PROJECTID,
  GRAPHCMSID,
  GRAPHCMSURL,
  domain,
  clientId,
  clientSecret,
  scope,
  redirectUri,
  postLogoutRedirectUri,
  cookieSecret,
  BACKEND_URL,
  GRAPHCMSTOKEN,
} = process.env;

module.exports = withCSS({
  publicRuntimeConfig: {
    backend: { BACKEND_URL },
    graphcms: {
      APIURL,
      APIKEY,
      BRANCH,
      CDNBASE,
      PROJECTID,
    },
  },
  serverRuntimeConfig: {
    graphcms: {
      GRAPHCMSID,
      GRAPHCMSURL,
      GRAPHCMSTOKEN,
    },
    auth: {
      domain,
      clientId,
      clientSecret,
      scope,
      redirectUri,
      postLogoutRedirectUri,
    },
    cookieSecret,
  },
});
