## Module of the Month

Every month I hope to cover a new module in (http://npmjs.org)[npm].

This months was `request`, a module to do external request to server.

### Settup

To add request you will need to run

```
npm install request --save
```

for this demo we are using the Tumblr API and it requires an api key, to do this signup for Tumblr then create an app in their dev section. After you create the app you will have an `Oauth Consumer Key`. Take that key and add it to a file ( that you will need to create ), .env... It should look like.

```
TUMBLR_KEY=xxxxxxxxxxxxxx
``` 
to get this key out of this file install `dotenv` you can do this by just installing the rest of the modules with.

```
npm install
```