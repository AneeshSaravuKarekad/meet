const { google } = require('googleapis');

const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];

const credentials = {
  client_id: process.env.CLIENT_ID,
  project_id: process.env.PROJECT_ID,
  client_secret: process.env.CLIENT_SECRET,
  calendar_id: process.env.CALENDAR_ID,
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  redirect_uris: ['https://aneeshsaravukarekad.github.io/meet/'],
  javascript_origins: [
    'https://aneeshsaravukarekad.github.io',
    'http://localhost:3000',
  ],
};

const { client_id, client_secret, redirect_uris, calendar_id } = credentials;

/**
 * @function getAuthURL
 * @description Gets google login page and redirect to app on successful login with the authUrl
 * @returns {Object}
 */
module.exports.getAuthURL = async () => {
  const oAuth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });

  return {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origins': '*',
    },
    body: JSON.stringify({
      authUrl,
    }),
  };
};
