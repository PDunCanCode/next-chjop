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
} = process.env;

module.exports = withCSS({
  publicRuntimeConfig: {
    graphcms: {
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
    },
  },
  serverRuntimeConfig: {
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
