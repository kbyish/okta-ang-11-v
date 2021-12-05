# Okta Memeber App

Using Angular 11 Node js v 16

## Prerequisites
   "@angular/cli": "~11.2.14",

   
Before running this sample, you will need the following:
npm install @okta/okta-angular @okta/okta-auth-js

    "@okta/okta-angular": "^4.1.0",
    "@okta/okta-auth-js": "^5.5.0",

    
* An Okta Developer Account, you can sign up for one at https://developer.okta.com/signup/.
* An Okta Application, configured for Singe-Page App (SPA) mode. This is done from the Okta Developer Console and you can find instructions [here][OIDC SPA Setup Instructions].  When following the wizard, use the default properties.  They are are designed to work with our sample applications.


## Running This Example

To run this application, you first need to clone this repo and then enter into this directory:

```bash
git clone https://github.com/okta/samples-js-angular.git
cd samples-js-angular/okta-hosted-login
```

Then install dependencies:

```bash
npm install
```

Now you need to gather the following information from the Okta Developer Console:

- **Client Id** - The client ID of the SPA application that you created earlier. This can be found on the "General" tab of an application, or the list of applications.  This identifies the application that tokens will be minted for.
- **Issuer** - This is the URL of the authorization server that will perform authentication.  All Developer Accounts have a "default" authorization server.  The issuer is a combination of your Org URL (found in the upper right of the console home page) and `/oauth2/default`. For example, `https://dev-1234.oktapreview.com/oauth2/default`.



```ini
ISSUER=https://yourOktaDomain.com/oauth2/default
CLIENT_ID=abcd123
```

Now start the app server:

```
ng serve
```



