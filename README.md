# Memebot 😜
![preview](https://i.imgur.com/2ib7VNA.png)

## Usage
![forthebadge](https://forthebadge.com/images/badges/60-percent-of-the-time-works-every-time.svg)

`<template name>, count` where count is an optional parameter specifying number of images returned.

Examples: 
* `i am in danger, 3` – returns top 3 image for the query
* `i am once again asking for your financial support` – returns 1 image for the query


## Setting up
To set up your own version of this Whatsapp bot
- Create an account on Twilio and obtain the auth token and account SSID.
- Set up the Whatsapp sandbox on Twilio. ([Docs here](https://www.twilio.com/docs/whatsapp/api#twilio-sandbox-for-whatsapp))
- Deploy this node project to service of your choice. I prefer `repl.it`
- Create `.env` file with the following:

```

TWILIO_ACCOUNT_SID = Your account SSID (obtained from Twilio)

TWILIO_AUTH_TOKEN = Twilio Authorisation Token (obtained from Twilio)

SANDBOX_NUMBER = The twilio number with which you interact (obtained from Twilio)

```

### Reference: [Build a WhatsApp bot in 30 minutes](https://repl.it/talk/learn/Build-a-WhatsApp-bot-in-30-minutes/7673)
