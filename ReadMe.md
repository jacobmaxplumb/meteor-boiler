Steps:

1. npm install
2. npm run meteor-client:bundle
3. in another terminal (cd api, then meteor)
4. ionic serve


For Auth

1. cd api
2. meteor add accounts-base npm-bcrypt mys:accounts-phone
3. cd ..
4. meteor run meteor-client:bundle
5. for testing purposes make a api/private/settings.json and add thing following:
{
"accounts-phone": {
"verificationWaitTime": 0,
"verificationRetriesWaitTime": 0,
"adminPhoneNumbers": ["+9721234567", "+97212345678", "+97212345679"],
"phoneVerificationMasterCode": "1234"
}
}


