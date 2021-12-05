// const { CLIENT_ID, ISSUER, OKTA_TESTING_DISABLEHTTPSCHECK } = process.env;

export default {
  oidc: {
    clientId: `12`,
    issuer: `https://data`,
    redirectUri: '/login/callback',
    scopes: ['openid', 'profile', 'email'],
    pkce: true,

  },
  resourceServer: {
    messagesUrl: 'https://localhost:8000/api/messages',
  },
};
